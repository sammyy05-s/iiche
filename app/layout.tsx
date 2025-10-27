import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// @TODO: Fixed with random content
export const metadata: Metadata = {
	title: "Alchemix",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	robots: "index, follow",
	alternates: {
		canonical: "https://www.alchemix.com/",
	},
	openGraph: {
		type: "website",
		title: "Alchemix",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		url: "https://www.alchemix.com/",
		siteName: "Alchemix",
		images: [
			{
				url: "https://www.alchemix.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Alchemix Open Graph Image",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen grid grid-cols-[1fr_min(42rem,100%)_1fr] *:col-2`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
