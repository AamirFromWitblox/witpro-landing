import React from "react";
import FeedbackTable from "./feedback-table";
import { getAllFeedbacks } from "@/actions/feedback";

export default async function InternalFeedbackDashboard() {
  const data = await getAllFeedbacks();

  if (!data?.data?.feedbacks) {
    return <h1>Server Error</h1>;
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Feedback Dashboard
      </h1>

      <FeedbackTable feedbacks={data?.data?.feedbacks} />
    </main>
  );
}
