import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import * as fs from 'fs';
import * as path from 'path';

export const saveDealTool = createTool({
    id: 'save-deal-tool',
    description: 'Saves a structured brand deal summary and invoice draft to a local text file.',
    inputSchema: z.object({
        brandName: z.string().describe('The name of the brand offering the deal'),
        deliverables: z.array(z.string()).describe('List of required content (e.g., 1x TikTok, 1x IG Story)'),
        payoutAmount: z.number().describe('The total compensation offered in dollars'),
        timeline: z.string().describe('The due date or timeline for the campaign')
    }),
    execute: async (data) => {
        // 'data' now perfectly matches your Zod inputSchema!
        const fileContent = `
=================================
BRAND DEAL SUMMARY: ${data.brandName.toUpperCase()}
=================================
Deliverables: 
${data.deliverables.map((d: string) => `- ${d}`).join('\n')}

Total Payout: $${data.payoutAmount}
Timeline: ${data.timeline}
=================================
Status: Pending Review
    `.trim();

        // Save it to the root of your project
        const filePath = path.join(process.cwd(), `${data.brandName.replace(/\s+/g, '-').toLowerCase()}-deal.txt`);
        fs.writeFileSync(filePath, fileContent);

        return {
            success: true,
            message: `Successfully saved the deal summary to ${filePath}`
        };
    }
});