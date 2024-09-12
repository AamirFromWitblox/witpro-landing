"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Book, Code, Zap } from "lucide-react";

export default function DocumentationPage() {
  return (
    <main className="container px-4 py-12 mx-auto">
      <motion.h1
        className="mb-8 text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        WitPro Documentation
      </motion.h1>
      <motion.p
        className="mb-12 text-xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Learn how to use WitPro and unleash your Arduino development potential
      </motion.p>

      <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Topics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>WitPro Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                WitPro is a visual Arduino IDE that transforms complex coding
                into simple drag-and-drop actions. It&apos;s designed to make
                Arduino development accessible to beginners while providing
                powerful features for experienced developers.
              </p>
              <h3 className="mb-2 text-2xl font-semibold">Key Features</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Intuitive drag-and-drop interface</li>
                <li>Real-time code generation</li>
                <li>Extensive library of pre-built components</li>
                <li>Seamless integration with Arduino boards</li>
                <li>Cross-platform compatibility</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="quickstart">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 list-decimal list-inside">
                <li>
                  <strong>Installation:</strong>
                  <p>
                    Download and install WitPro from the official website.
                    Choose the version compatible with your operating system.
                  </p>
                </li>
                <li>
                  <strong>Launch WitPro:</strong>
                  <p>
                    Open the application. You&apos;ll be greeted with a welcome
                    screen and a new project template.
                  </p>
                </li>
                <li>
                  <strong>Create a New Project:</strong>
                  <p>
                    Click on &quot;New Project&quot; and select your Arduino
                    board model from the dropdown menu.
                  </p>
                </li>
                <li>
                  <strong>Build Your Circuit:</strong>
                  <p>
                    Use the drag-and-drop interface to add components to your
                    virtual breadboard.
                  </p>
                </li>
                <li>
                  <strong>Program Your Arduino:</strong>
                  <p>
                    Drag programming blocks from the toolbox to the workspace to
                    create your program logic.
                  </p>
                </li>
                <li>
                  <strong>Upload to Arduino:</strong>
                  <p>
                    Connect your Arduino board and click the &quot;Upload&quot;
                    button to transfer your program.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="mb-4 text-2xl font-semibold">
                Custom Block Creation
              </h3>
              <p className="mb-4">
                WitPro allows you to create custom blocks for complex or
                frequently used operations. To create a custom block:
              </p>
              <ol className="mb-6 space-y-2 list-decimal list-inside">
                <li>Go to &quot;Tools&quot; &gt; &quot;Block Editor&quot;</li>
                <li>Define inputs and outputs for your block</li>
                <li>
                  Write the underlying code or use existing blocks to define
                  behavior
                </li>
                <li>Save and add to your personal library</li>
              </ol>
              <h3 className="mb-4 text-2xl font-semibold">
                Integration with External Libraries
              </h3>
              <p className="mb-4">
                WitPro supports integration with external Arduino libraries. To
                use an external library:
              </p>
              <ol className="space-y-2 list-decimal list-inside">
                <li>
                  Go to &quot;Project&quot; &gt; &quot;Manage Libraries&quot;
                </li>
                <li>Search for the desired library</li>
                <li>
                  Click &quot;Install&quot; and wait for the process to complete
                </li>
                <li>
                  The library&apos;s blocks will now appear in your toolbox
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-center">
          Explore WitPro Documentation
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <DocCard
            icon={<Book className="w-12 h-12 mb-4 text-primary" />}
            title="User Guide"
            description="Comprehensive guide covering all aspects of WitPro"
            link="#"
          />
          <DocCard
            icon={<Code className="w-12 h-12 mb-4 text-primary" />}
            title="API Reference"
            description="Detailed documentation of WitPro's API for advanced users"
            link="#"
          />
          <DocCard
            icon={<Zap className="w-12 h-12 mb-4 text-primary" />}
            title="Tutorials"
            description="Step-by-step tutorials for common Arduino projects"
            link="#"
          />
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Need Additional Help?</h2>
        <p className="mb-8 text-xl">
          Join our community forum or contact our support team.
        </p>
        <Button
          size="lg"
          className="text-lg transition-transform group hover:scale-105"
        >
          Visit Support Center{" "}
          <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </section>
    </main>
  );
}

interface DocCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function DocCard({ icon, title, description, link }: DocCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full transition-transform hover:scale-105">
        <CardHeader className="text-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-fit"
          >
            {icon}
          </motion.div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">{description}</p>
          <Button asChild variant="outline" className="w-full">
            <a href={link}>Explore</a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
