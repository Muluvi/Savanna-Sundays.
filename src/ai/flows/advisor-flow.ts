'use server';
/**
 * @fileOverview Strategic Advisor AI Flow.
 * Answers stakeholder questions about the Savanna Sundays proposal.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AdvisorInputSchema = z.object({
  question: z.string().describe('The stakeholder question about the proposal.'),
});
export type AdvisorInput = z.infer<typeof AdvisorInputSchema>;

const AdvisorOutputSchema = z.object({
  answer: z.string().describe('The strategic, professional answer.'),
});
export type AdvisorOutput = z.infer<typeof AdvisorOutputSchema>;

export async function askAdvisor(input: AdvisorInput): Promise<AdvisorOutput> {
  return advisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'advisorPrompt',
  input: { schema: AdvisorInputSchema },
  output: { schema: AdvisorOutputSchema },
  prompt: `You are a high-level strategic advisor for Firefly Management. 
You are answering questions about the "Savanna Sundays" activation proposal for Savanna Premium Cider.

Strategic Context:
- Goal: Own Sundays in Nairobi.
- Model: Dual Activation (Owned Boutique Events + Title Sponsorships).
- Key Pillars: Content Harvest, Community Building, Data Harvesting.
- Audience: High-value Gen-Z and Millennial decision-makers.

Question: {{{question}}}

Provide a professional, concise, and persuasive answer that reinforces the proposal's value proposition.`,
});

const advisorFlow = ai.defineFlow(
  {
    name: 'advisorFlow',
    inputSchema: AdvisorInputSchema,
    outputSchema: AdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) throw new Error('Failed to generate strategic answer');
    return output;
  }
);
