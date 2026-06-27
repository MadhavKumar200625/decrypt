import Footer from "@/components/footer";
import Header from "@/components/header";

import "./globals.css";

export const metadata = {
  title: "Decrypt | Consumer Mind Decoded",
  description:
    "Decrypt uses neuroscience, behavioural science, and technology to decode stated and latent consumer perceptions and decisions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="flex min-h-full min-w-0 flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
