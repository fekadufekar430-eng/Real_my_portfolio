/** Root layout: global metadata, theme provider, and page shell. */
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Fikadu Fikir — Full-Stack Developer & Creative",
  description: "Fikadu Fikir — 3rd-year Computer Science student, Full Stack Developer, creative and video editor building modern web experiences.",
  keywords: ["Fikadu Fikir", "Full Stack Developer", "Computer Science", "React", "Next.js", "Node.js", "Video Editor"],
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en" suppressHydrationWarning>
        <body className="noise">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>{children}</ThemeProvider>
        </body>
        </html>
}
