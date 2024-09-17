import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";

import "./globals.css";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";

const inter = localFont({
	src: "./fonts/inter.woff2",
	variable: "--font-inter",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "S.O.S Queimadas",
	description: "Panfleto web do S.O.S Queimadas",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className="dark max-w-screen max-h-screen bg-red-600">
			<body className={`${inter.variable} antialiased`}>
				<Providers>
					<Cabecalho />
					{children}
				</Providers>
			</body>
		</html>
	);
}
