"use client";
import { Link as LucideLink } from "lucide-react";
import { useEffect, useRef } from "react";

interface HeadingWithAnchorProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

export function HeadingWithAnchor({
  as: Comp,
  children,
  className,
}: HeadingWithAnchorProps) {
  const slug =
    typeof children === "string"
      ? children.toLowerCase().replace(/\s+/g, "-")
      : "";
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${slug}` && ref.current) {
        const navbarHeight = 56; // Adjust this value to match your navbar height
        const yOffset = -navbarHeight - 20; // Additional offset for visual comfort
        const y =
          ref.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    handleHashChange(); // Handle initial load
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [slug]);

  return (
    <Comp
      ref={ref}
      className={`group flex scroll-mt-20 items-center ${className}`}
      id={slug}
    >
      <a href={`#${slug}`} className="flex items-center no-underline">
        {children}
        <span className="ml-2 opacity-0 transition-opacity group-hover:opacity-100">
          <LucideLink className="h-4 w-4" />
        </span>
      </a>
    </Comp>
  );
}
