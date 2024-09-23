"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, Send } from "lucide-react";

export default function FeedbackPage() {
  const [screenshots, setScreenshots] = useState<File[]>([]);

  const handleScreenshotUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setScreenshots(Array.from(event.target.files));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted");
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <Label>Feedback Type</Label>
              <RadioGroup defaultValue="general" className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general">General</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bug" id="bug" />
                  <Label htmlFor="bug">Bug Report</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feature" id="feature" />
                  <Label htmlFor="feature">Feature Request</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="feedback">Your Feedback</Label>
              <Textarea
                id="feedback"
                placeholder="Please provide your feedback here"
                required
              />
            </div>
            <div>
              <Label htmlFor="screenshots">Upload Screenshots (optional)</Label>
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="screenshots"
                      className="hover:text-primary-dark relative cursor-pointer rounded-md bg-white font-medium text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                    >
                      <span>Upload files</span>
                      <Input
                        id="screenshots"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/*"
                        onChange={handleScreenshotUpload}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              {screenshots.length > 0 && (
                <div className="mt-2">
                  <p>{screenshots.length} file(s) selected</p>
                  <ul className="list-inside list-disc">
                    {screenshots.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
