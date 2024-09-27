"use server";
import { db } from "@/firebase";
import { actionClient } from "@/lib/safe-action";
import { Feedback, FeedbackSchema } from "@/types/feedback";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

export const saveFeedback = actionClient
  .schema(FeedbackSchema)
  .action(async ({ parsedInput }) => {
    try {
      await addDoc(collection(db, "feedbacks"), parsedInput);
      revalidatePath("/feedback-internal");
      return {
        success: "Feedback has been submitted succesfully!",
      };
    } catch (err) {
      return {
        // @ts-ignore-next-line
        failure: err.message,
      };
    }
  });

export const getAllFeedbacks = actionClient.action(async () => {
  try {
    const q = query(collection(db, "feedbacks"));

    const querySnapshot = await getDocs(q);
    const feedbacks = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt,
    })) as Feedback[];

    return {
      feedbacks: JSON.parse(JSON.stringify(feedbacks)),
    };
  } catch (err) {
    throw err;
  }
});
