import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Designer Web App Template",
	description: "A Next.js + Hono template for designers to build web apps with AI agents",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className="min-h-screen font-sans antialiased">{children}</body>
		</html>
	);
}
