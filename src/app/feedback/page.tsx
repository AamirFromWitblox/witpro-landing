"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { feedbackSchema, FeedbackType } from "@/types/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function FeedbackPage() {
  const [ssUploadProgress, setSsUploadProgress] = useState(0);
  const router = useRouter();

  const form = useForm<FeedbackType>({
    resolver: zodResolver(feedbackSchema),
  });

  const handleScreenshotUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, "feedback/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setSsUploadProgress(progress);
      },
      (error) => {
        toast.error("Error uploading file, Please try again later!", {
          description: error.message,
        });
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          form.setValue("screenshots", [downloadURL]);
        });
      }
    );
  };

  async function handleSubmit(values: FeedbackType) {
    try {
      await addDoc(collection(db, "feedbacks"), values);
      toast.success("Feedback has been succesfully submitted!");
      router.push("/");
    } catch (err) {
      toast.error(`An error occured while saving the feedback!`);
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.h1
        className="mb-8 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Provide Feedback
      </motion.h1>
      <motion.p
        className="mb-12 text-center text-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Your feedback helps us improve WitPro. Let us know what you think!
      </motion.p>

      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Feedback Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="general" />
                          </FormControl>
                          <FormLabel className="font-normal">General</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="bug-report" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Bug Report
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="feature-request" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Feature Request
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Feedback</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please provide your feedback here"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="screenshots"
                render={() => (
                  <FormItem>
                    <FormLabel htmlFor="file" className="text-sm font-medium">
                      Upload Screenshots (optional)
                    </FormLabel>
                    <Input
                      id="file"
                      type="file"
                      placeholder="File"
                      accept="image/*"
                      onChange={handleScreenshotUpload}
                    />
                  </FormItem>
                )}
              />
              {ssUploadProgress > 0 && (
                <div>
                  <Progress value={ssUploadProgress} />
                  <p className="flex justify-end text-sm">
                    {ssUploadProgress.toFixed(0)}% Uploaded
                  </p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={
                  form.formState.isSubmitting ||
                  (ssUploadProgress > 0 && ssUploadProgress < 100)
                }
              >
                <Send className="mr-2 h-4 w-4" /> Submit Feedback
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
