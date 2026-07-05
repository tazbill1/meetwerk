import { defineMcp } from "@lovable.dev/mcp-js";
import calculateTurnoverCost from "./tools/calculate-turnover-cost";
import getPitchSummary from "./tools/get-pitch-summary";

export default defineMcp({
  name: "werkandme-mcp",
  title: "WerkandMe",
  version: "0.1.0",
  instructions:
    "Tools for the WerkandMe dealership engagement pitch. Use `get_pitch_summary` to brief the user on what WerkandMe does, and `calculate_turnover_cost` to run the ROI calculator with a dealership's numbers.",
  tools: [calculateTurnoverCost, getPitchSummary],
});
