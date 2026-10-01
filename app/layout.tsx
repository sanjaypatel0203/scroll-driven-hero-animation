import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITZ FIZZ // Kinetic Aerodynamics - Scroll-Driven Experience",
  description: "Next.js & GSAP ScrollTrigger portfolio assignment showcasing scroll-driven motion, character reveal, dynamic trajectory, and telemetry statistics.",
  keywords: ["GSAP", "ScrollTrigger", "Next.js", "Tailwind CSS", "Frontend Animation", "Kinetic Typography"],
  authors: [{ name: "Frontend Developer" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased selection:bg-neon-lime selection:text-black">
        {children}
      </body>
    </html>
  );
}
