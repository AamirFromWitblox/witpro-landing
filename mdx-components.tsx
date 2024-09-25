import { HeadingWithAnchor } from "@/components/heading-with-anchor";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ href, children }) => (
      <Link href={href as string} className="font-medium text-primary">
        {children}
      </Link>
    ),
    h1: ({ children }) => (
      <HeadingWithAnchor
        as="h1"
        className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        {children}
      </HeadingWithAnchor>
    ),
    h2: ({ children }) => (
      <HeadingWithAnchor
        as="h2"
        className="mb-4 mt-8 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        {children}
      </HeadingWithAnchor>
    ),
    h3: ({ children }) => (
      <HeadingWithAnchor
        as="h3"
        className="mb-2 mt-6 text-2xl font-semibold tracking-tight"
      >
        {children}
      </HeadingWithAnchor>
    ),
  };
}
