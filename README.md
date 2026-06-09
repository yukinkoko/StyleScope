# Designer Web App Template

デザイナーがAIエージェントと一緒にWebアプリを作るためのテンプレート。

## Tech Stack

- **Next.js 15** (App Router) — フロントエンド
- **Hono** — APIルート (`/api/*`)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** — スタイリング
- **shadcn/ui** — UIコンポーネント
- **Biome** — リンター & フォーマッター
- **Cloudflare Pages** — デプロイ先

## Getting Started

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

http://localhost:3000 でアクセス。

## Project Structure

```
src/
├── app/              → ページ & レイアウト
│   └── api/          → Hono APIマウントポイント
├── server/           → Hono APIアプリ
│   └── routes/       → APIエンドポイント
├── components/
│   ├── ui/           → shadcn/uiコンポーネント
│   └── features/     → 機能コンポーネント
├── lib/              → ユーティリティ
└── hooks/            → カスタムHooks
```

## API Routes

Honoで実装。`src/server/routes/` にエンドポイントを追加。

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | ヘルスチェック |
| GET | `/api/example` | サンプルデータ |

## Available Scripts

```bash
npm run dev        # 開発サーバー（Turbopack）
npm run build      # プロダクションビルド
npm start          # プロダクションサーバー起動
npm run lint       # Biomeでリントチェック
npm run lint:fix   # リント自動修正
npm run format     # コードフォーマット
npm run deploy     # Cloudflare Pagesへデプロイ
```

## Adding Components

shadcn/uiコンポーネントの追加:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

## Deploy to Cloudflare Pages

```bash
# ビルド & デプロイ
npm run deploy

# または個別に
npm run build
wrangler pages deploy
```

初回は `wrangler login` でCloudflareにログインが必要。

## Documentation

- [AGENTS.md](./AGENTS.md) — AIエージェント向けプロジェクト規約
- [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) — デザインシステム
