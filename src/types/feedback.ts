import { z } from "zod";

export const feedbackSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  type: z.enum(["general", "bug-report", "feature-request"]),
  feedback: z.string(),
  screenshots: z.array(z.string().url()).optional(),
});

export type FeedbackType = z.infer<typeof feedbackSchema>;
