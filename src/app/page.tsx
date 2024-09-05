"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Download,
  Code,
  Zap,
  PuzzleIcon,
  ArrowRight,
  CheckCircle,
  Users,
  Book,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <main className="container mx-auto">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center"
      >
        <motion.h2
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-3xl font-extrabold md:text-5xl"
        >
          Arduino Development Reimagined
        </motion.h2>
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 text-base md:text-xl"
        >
          WitPro: The visual Arduino IDE that transforms complex coding into
          simple drag-and-drop actions
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="group text-lg transition-transform hover:scale-105"
            asChild
          >
            <Link href="/download">
              Create Now
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Overview Section */}
      <section className="py-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold"
        >
          Why WitPro is Your Go-To Arduino Development Tool
        </motion.h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<PuzzleIcon className="mb-4 h-12 w-12 text-primary" />}
            title="Intuitive Drag-and-Drop Interface"
            description="Build Arduino projects visually with our Blockly-based interface, making complex programming accessible to everyone."
          />
          <FeatureCard
            icon={<Code className="mb-4 h-12 w-12 text-primary" />}
            title="Seamless Code Generation"
            description="Convert your visual blocks into optimized Arduino code instantly, bridging the gap between concept and implementation."
          />
          <FeatureCard
            icon={<Zap className="mb-4 h-12 w-12 text-primary" />}
            title="Rapid Prototyping"
            description="Accelerate your development process, test ideas quickly, and bring your innovations to life faster than ever before."
          />
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold"
        >
          Experience the Power of Visual Programming
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-lg bg-card p-8 shadow-lg"
        >
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="WitPro Interface"
            className="mb-8 h-auto w-full rounded-lg transition-transform hover:scale-105"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-2xl font-semibold">
                Intuitive Block-Based Programming
              </h4>
              <p className="mb-4">
                WitPro&apos;s interface allows you to construct Arduino programs
                using visual blocks, each representing specific functions or
                commands. Simply drag and connect these blocks to create complex
                behaviors without writing a single line of code.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-2xl font-semibold">
                Real-Time Code Preview
              </h4>
              <p className="mb-4">
                As you build your project with blocks, WitPro generates the
                corresponding Arduino code in real-time. This feature helps you
                understand the relationship between visual programming and
                traditional coding, enhancing your learning experience.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20" id="features">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold"
        >
          Powerful Features for Every Developer
        </motion.h3>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <FeatureDetail
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Multi-User Collaboration"
            description="Work on projects with team members in real-time, fostering collaboration and knowledge sharing."
            setHovered={setHoveredFeature}
            isHovered={hoveredFeature === "Multi-User Collaboration"}
          />
          <FeatureDetail
            icon={<Book className="h-8 w-8 text-primary" />}
            title="Comprehensive Library Support"
            description="Access a wide range of pre-built blocks for popular Arduino libraries, sensors, and actuators."
            setHovered={setHoveredFeature}
            isHovered={hoveredFeature === "Comprehensive Library Support"}
          />
          <FeatureDetail
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="Cross-Platform Compatibility"
            description="Develop on Windows, macOS, or Linux - WitPro works seamlessly across all major operating systems."
            setHovered={setHoveredFeature}
            isHovered={hoveredFeature === "Cross-Platform Compatibility"}
          />
          <FeatureDetail
            icon={<CheckCircle className="h-8 w-8 text-primary" />}
            title="Built-in Error Checking"
            description="Catch and resolve issues early with real-time syntax and logic checking as you build your projects."
            setHovered={setHoveredFeature}
            isHovered={hoveredFeature === "Built-in Error Checking"}
          />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold"
        >
          WitPro vs. Traditional Arduino IDE
        </motion.h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">WitPro</th>
                <th className="p-4 text-center">Traditional Arduino IDE</th>
              </tr>
            </thead>
            <tbody>
              <ComparisonRow
                feature="Learning Curve"
                witpro="Low - Visual programming is intuitive"
                traditional="High - Requires coding knowledge"
              />
              <ComparisonRow
                feature="Development Speed"
                witpro="Fast - Drag-and-drop interface"
                traditional="Varies - Depends on coding proficiency"
              />
              <ComparisonRow
                feature="Code Quality"
                witpro="Consistent - Automated generation"
                traditional="Varies - Depends on developer skill"
              />
              <ComparisonRow
                feature="Collaboration"
                witpro="Built-in real-time collaboration"
                traditional="Limited - Requires external tools"
              />
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" id="testimonials">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold"
        >
          What Our Users Say
        </motion.h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Testimonial
            quote="WitPro has revolutionized how I teach Arduino programming. My students grasp concepts much faster now!"
            author="Dr. Emily Chen"
            role="Professor of Electrical Engineering"
          />
          <Testimonial
            quote="As a hobbyist, WitPro made it possible for me to create complex projects I never thought I could. It's a game-changer!"
            author="Mark Johnson"
            role="DIY Enthusiast"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" id="faq">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold"
        >
          Frequently Asked Questions
        </motion.h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="text-start">
            <AccordionTrigger>
              Is WitPro suitable for beginners?
            </AccordionTrigger>
            <AccordionContent>
              WitPro&apos;s visual programming interface makes it ideal for
              beginners, allowing them to create Arduino projects without prior
              coding experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start">
              Can I export my projects to the traditional Arduino IDE?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Witpro allows you to copy your code and directly paste it
              into the Arduino IDE for further customization or debugging.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Does WitPro support all Arduino boards?
            </AccordionTrigger>
            <AccordionContent>
              Witpro is compatible with Arduino Uno and Nano boards, with
              support for additional models planned in future updates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center"
      >
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to Transform Your Arduino Development?
        </h3>
        <p className="mb-8 text-xl">
          Join thousands of developers who have already revolutionized their
          workflow with WitPro.
        </p>
        <Button
          size="lg"
          className="group text-lg transition-transform hover:scale-105"
          asChild
        >
          <Link href="/download">
            <Download className="mr-2 transition-transform group-hover:translate-y-1" />{" "}
            Download WitPro Now
          </Link>
        </Button>
      </motion.section>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group h-full transition-transform hover:scale-105">
        <CardHeader className="text-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-min"
          >
            {icon}
          </motion.div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface FeatureDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  setHovered: (title: string | null) => void;
  isHovered: boolean;
}

function FeatureDetail({
  icon,
  title,
  description,
  setHovered,
  isHovered,
}: FeatureDetailProps) {
  return (
    <motion.div
      className="flex items-start"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(title)}
      onMouseLeave={() => setHovered(null)}
    >
      <motion.div
        className="mr-4"
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <div>
        <h4 className="mb-2 text-xl font-semibold">{title}</h4>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

interface ComparisonRowProps {
  feature: string;
  witpro: string;
  traditional: string;
}

function ComparisonRow({ feature, witpro, traditional }: ComparisonRowProps) {
  return (
    <motion.tr
      className="border-b border-muted"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <td className="p-4">{feature}</td>
      <td className="p-4 text-center">{witpro}</td>
      <td className="p-4 text-center">{traditional}</td>
    </motion.tr>
  );
}

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full transition-transform hover:scale-105">
        <CardContent className="pt-6">
          <p className="mb-4 italic">&apos;{quote}&apos;</p>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
