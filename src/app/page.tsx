import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
			<div className="flex flex-col items-center gap-4 text-center">
				<h1 className="text-4xl font-bold tracking-tight">Designer Web App Template</h1>
				<p className="max-w-md text-lg text-muted-foreground">
					Next.js + Hono + Tailwind CSS + shadcn/ui
					<br />
					デザイナーがAIエージェントと一緒にWebアプリを作るためのテンプレート
				</p>
			</div>

			<div className="flex gap-4">
				<Button asChild>
					<Link href="/api/health">API Health Check</Link>
				</Button>
				<Button variant="outline" asChild>
					<Link href="/api/example">API Example</Link>
				</Button>
			</div>

			<div className="mt-8 rounded-lg border border-border bg-muted/50 p-6 text-sm text-muted-foreground">
				<p>
					<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-foreground">
						npm run dev
					</code>{" "}
					で開発サーバーを起動 →{" "}
					<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-foreground">
						src/app/page.tsx
					</code>{" "}
					を編集して始めましょう
				</p>
			</div>
		</main>
	);
}
