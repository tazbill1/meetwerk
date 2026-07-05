import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const DEFAULT_REPLACEMENT_COST_MULTIPLIER = 0.25;

export default defineTool({
  name: "calculate_turnover_cost",
  title: "Calculate dealership turnover cost",
  description:
    "Estimate the annual cost of employee turnover at a dealership using the same math as the WerkandMe ROI calculator. Provide team size, average salary, and either annual turnover rate (%) or monthly hires; optionally override replacement cost per employee.",
  inputSchema: {
    employees: z
      .number()
      .int()
      .min(1)
      .max(5000)
      .describe("Total team members at the dealership."),
    avgSalary: z
      .number()
      .min(10000)
      .max(500000)
      .describe("Average annual salary in USD."),
    turnoverRate: z
      .number()
      .min(0)
      .max(200)
      .optional()
      .describe("Annual turnover rate as a percent (e.g. 45 for 45%). Provide this OR monthlyHires."),
    monthlyHires: z
      .number()
      .min(0)
      .max(100)
      .optional()
      .describe("Number of hires per month. Provide this OR turnoverRate."),
    customReplacementCost: z
      .number()
      .min(0)
      .max(500000)
      .optional()
      .describe("Optional: your actual cost to hire + train + ramp one employee (USD). Defaults to 25% of avgSalary."),
    improvementRate: z
      .number()
      .min(0)
      .max(100)
      .optional()
      .describe("Optional: expected % reduction in turnover from WerkandMe (default 30)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ employees, avgSalary, turnoverRate, monthlyHires, customReplacementCost, improvementRate }) => {
    if (turnoverRate === undefined && monthlyHires === undefined) {
      return {
        content: [{ type: "text", text: "Provide either turnoverRate or monthlyHires." }],
        isError: true,
      };
    }

    const employeesLost =
      monthlyHires !== undefined
        ? monthlyHires * 12
        : Math.round(employees * ((turnoverRate ?? 0) / 100));

    const effectiveTurnoverRate =
      monthlyHires !== undefined
        ? Math.round(((monthlyHires * 12) / employees) * 100)
        : (turnoverRate ?? 0);

    const replacementCostPerEmployee =
      customReplacementCost ?? avgSalary * DEFAULT_REPLACEMENT_COST_MULTIPLIER;

    const annualTurnoverCost = employeesLost * replacementCostPerEmployee;
    const improvement = improvementRate ?? 30;
    const potentialSavings = Math.round(annualTurnoverCost * (improvement / 100));

    const fmt = (n: number) =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

    const summary =
      `Dealership turnover cost estimate\n` +
      `- Employees lost/year: ${employeesLost} (effective turnover ${effectiveTurnoverRate}%)\n` +
      `- Replacement cost/employee: ${fmt(replacementCostPerEmployee)}${customReplacementCost === undefined ? " (25% of salary, conservative)" : " (custom)"}\n` +
      `- Annual turnover cost: ${fmt(annualTurnoverCost)}\n` +
      `- Potential savings with WerkandMe (${improvement}% improvement): ${fmt(potentialSavings)}/yr`;

    return {
      content: [{ type: "text", text: summary }],
      structuredContent: {
        employeesLost,
        effectiveTurnoverRate,
        replacementCostPerEmployee: Math.round(replacementCostPerEmployee),
        annualTurnoverCost: Math.round(annualTurnoverCost),
        improvementRate: improvement,
        potentialSavings,
        currency: "USD",
      },
    };
  },
});
