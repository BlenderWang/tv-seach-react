import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";

export const metadata: Metadata = {
    title: "TV search app",
    description:
        "Updated version of a previous React app, generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <Header />
                    <main className="max-w-6xl mx-auto">{children}</main>
                </Providers>
            </body>
        </html>
    );
}
