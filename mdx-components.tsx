import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl">{children}</h2>,
    h3: ({ children, content }) => (
      <h3 className="mt-10 text-lg" id={`${content}`}>
        <a href={`#${content}`}>{children}</a>
      </h3>
    ),
    h4: ({ children }) => <h4>{children}</h4>,

    p: ({ children }) => <p className="mb-4">{children}</p>,
    ul: ({ children }) => (
      <ul
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          backgroundColor: "#f3f4f6 ",
        }}
        className="list-disc rounded-md p-5"
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
    li: ({ children }) => (
      <li
        style={{
          marginBottom: "0.5rem",
        }}
      >
        {children}
      </li>
    ),
    a: ({ children, href }) => (
      <a
        className="text-blue-400 hover:underline focus:outline-none focus:ring focus:ring-blue-300"
        href={href}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code
        style={{
          backgroundColor: "#111827",
          padding: "0.2rem 0.5rem",
          marginRight: "0.2rem",
        }}
        className="rounded-md text-white"
      >
        {children}
      </code>
    ),

    ...components,
  };
}
