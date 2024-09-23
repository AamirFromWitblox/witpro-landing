"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground"
    >
      <Link href="/" className="hover:text-foreground">
        Home
      </Link>
      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;
        const title = path.charAt(0).toUpperCase() + path.slice(1);

        return (
          <span key={path} className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span aria-current="page" className="font-medium text-foreground">
                {title}
              </span>
            ) : (
              <Link href={href} className="hover:text-foreground">
                {title}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
