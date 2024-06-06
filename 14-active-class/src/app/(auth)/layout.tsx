"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-pwd" },
  ];

  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "skyblue", padding: "22px" }}>
          Header
        </header>
        <Link href="/">Home</Link> &nbsp; &nbsp;
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "font-bold text-blue-500 mr-4" : "font-bold mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
        {children}
        <footer style={{ backgroundColor: "ghostwhite", padding: "22px" }}>
          Footer
        </footer>
      </body>
    </html>
  );
}
