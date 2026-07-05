import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SUMMARY = `WerkandMe — Employee engagement platform built for auto dealerships.

The problem: Dealership turnover runs 40-80%/yr. Every departure costs 25-200% of salary in hiring, training, and ramp time. Disengagement shows up as lost sales, missed CSI scores, and constant re-staffing.

The platform:
- Emotional Check-Ins — catch disengagement before resignation
- Manager Dashboard — real-time, actionable team health
- Smart Gamification — challenges that drive sales, service, and CSI
- Personalized Recognition — tailored to individual motivators
- Meaningful Rewards — incentives that actually matter
- Real-Time Analytics — visibility into team health
- Dedicated Culture Coach — a real person supporting the dealership, running the playbook, keeping engagement sticky

Why it's different: Mobile-first, built BY dealership people FOR dealership people. Fractional Culture Coach is part of your Culture Team, not a vendor at arm's length.

Implementation: 4-week white-glove onboarding.

Full deck: https://meetwerk.lovable.app
Standalone turnover ROI calculator: https://meetwerk.lovable.app/calculator`;

export default defineTool({
  name: "get_pitch_summary",
  title: "Get WerkandMe pitch summary",
  description:
    "Return a concise summary of the WerkandMe pitch: problem, platform features, Culture Coach, and links to the full deck and ROI calculator. Use this to brief a user on what WerkandMe does.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: SUMMARY }],
    structuredContent: {
      deckUrl: "https://meetwerk.lovable.app",
      calculatorUrl: "https://meetwerk.lovable.app/calculator",
    },
  }),
});

// z is imported to satisfy tool schema tooling even when inputSchema is empty.
void z;
