import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import localFont from "next/font/local";
import { LayoutTransition } from "@/components/providers/layout-transition";

const satoshi = localFont({
	src: [
		{
			path: "../../public/Satoshi-Variable.ttf",
			weight: "400",
		},
	],
});

export const metadata: Metadata = {
	title: "Intelliguru",
	description: "Transforming the way you learn with AI-powered education",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<ClerkProvider>
				<body className={`${satoshi.className} antialiased`}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<LayoutTransition
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<div className="flex flex-col min-h-screen">
								<main className="flex-1 flex-grow">{children}</main>
							</div>
						</LayoutTransition>
					</ThemeProvider>
				</body>
			</ClerkProvider>
		</html>
	);
}
