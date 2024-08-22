import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import LeafOverlay from "@/components/LeafOverlay";

import clsx from "clsx";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={clsx(
					"bg-bg-primary bg-noise-background bg-cover",
					playfair.className
				)}
			>
				<LeafOverlay />
				{children}
			</body>
		</html>
	);
}
