import { z } from "zod";

export const FeedbackSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  type: z.enum(["general", "bug-report", "feature-request"]),
  message: z.string(),
  status: z.enum(["new", "in-progress", "resolved"]).optional().default("new"),
  screenshots: z.array(z.string().url()).optional(),
  createdAt: z.number(),
  resolvedAt: z.number().optional(),
});

export type Feedback = z.infer<typeof FeedbackSchema>;

export const FeedbackFormSchema = FeedbackSchema.omit({
  id: true,
  createdAt: true,
  resolvedAt: true,
});

export type FeedbackFormType = z.infer<typeof FeedbackFormSchema>;
