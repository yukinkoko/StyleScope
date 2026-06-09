# AGENTS.md - AIエージェント向けプロジェクト規約

## プロジェクト概要

デザイナーがWebアプリを作るためのNext.js + Honoテンプレート。
デプロイ先はCloudflare Pages。

## 技術スタック

- **フレームワーク:** Next.js 15 (App Router)
- **API:** Hono（`/api/*` にマウント）
- **言語:** TypeScript（strict mode）
- **スタイル:** Tailwind CSS v4
- **UIライブラリ:** shadcn/ui
- **リンター:** Biome（ESLintは使わない）
- **パッケージマネージャ:** npm
- **デプロイ:** Cloudflare Pages（@opennextjs/cloudflare）

## ディレクトリ構成

```
src/
├── app/           → Next.js App Routerのページ・レイアウト
│   └── api/       → Honoへのルートハンドラ（catch-all）
├── server/        → Honoアプリ & APIルート定義
│   └── routes/    → 各APIエンドポイント
├── components/
│   ├── ui/        → shadcn/uiコンポーネント（自動生成）
│   └── features/  → 機能ごとのコンポーネント
├── lib/           → ユーティリティ関数
└── hooks/         → カスタムReact Hooks
```

## コーディング規約

### TypeScript
- `strict: true` を維持すること
- `any` は使わない。型が不明な場合は `unknown` を使う
- 型定義は使用箇所の近くに置く（小さいもの）。共有型は `src/types/` に

### コンポーネント
- 関数コンポーネントのみ（クラスコンポーネント禁止）
- ファイル名はケバブケース: `my-component.tsx`
- 1ファイル200行以内。超えたら分割する
- propsの型は `interface` で定義（`type` でもOK）

### API（Hono）
- 新しいエンドポイントは `src/server/routes/` にファイルを作成
- `src/server/index.ts` でルートを登録
- レスポンスは必ず型付きJSONで返す

### スタイリング
- Tailwind CSSのユーティリティクラスを使う
- デザイントークンは `src/app/globals.css` の `@theme` で定義
- カスタムCSSは最小限に

### Biome
- `npm run lint` でチェック、`npm run lint:fix` で自動修正
- `npm run format` でフォーマット
- インデントはタブ、行幅100文字

## よく使うコマンド

```bash
npm run dev        # 開発サーバー起動
npm run build      # ビルド
npm run lint       # Biomeでリント
npm run lint:fix   # リント自動修正
npm run format     # フォーマット
npm run deploy     # Cloudflare Pagesへデプロイ
```

## 新しいページを追加する

1. `src/app/` 以下にディレクトリとpage.tsxを作成
2. 必要に応じて `src/components/features/` にコンポーネントを作成

## 新しいAPIルートを追加する

1. `src/server/routes/` に新しいファイルを作成:
   ```ts
   import { Hono } from "hono";
   export const myRoute = new Hono().get("/", (c) => {
     return c.json({ data: "hello" });
   });
   ```
2. `src/server/index.ts` でインポート & 登録:
   ```ts
   import { myRoute } from "./routes/my-route";
   app.route("/my-route", myRoute);
   ```

## shadcn/uiコンポーネントの追加

```bash
npx shadcn@latest add [component-name]
```

コンポーネントは `src/components/ui/` に配置される。
