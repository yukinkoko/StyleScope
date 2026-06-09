# デザインシステム

## カラートークン

`src/app/globals.css` の `@theme` ブロックで定義。Tailwind CSSクラスとして使用可能。

| トークン | CSS変数 | デフォルト値 | 用途 |
|---------|---------|------------|------|
| `background` | `--color-background` | `#ffffff` | ページ背景 |
| `foreground` | `--color-foreground` | `#09090b` | メインテキスト |
| `muted` | `--color-muted` | `#f4f4f5` | 控えめな背景 |
| `muted-foreground` | `--color-muted-foreground` | `#71717a` | 補足テキスト |
| `border` | `--color-border` | `#e4e4e7` | ボーダー |
| `primary` | `--color-primary` | `#18181b` | プライマリアクション |
| `primary-foreground` | `--color-primary-foreground` | `#fafafa` | プライマリ上のテキスト |
| `secondary` | `--color-secondary` | `#f4f4f5` | セカンダリアクション |
| `destructive` | `--color-destructive` | `#ef4444` | 危険な操作 |
| `accent` | `--color-accent` | `#f4f4f5` | アクセント |
| `ring` | `--color-ring` | `#18181b` | フォーカスリング |

### 使い方

```tsx
// Tailwindクラスで使う
<div className="bg-background text-foreground" />
<p className="text-muted-foreground" />
<button className="bg-primary text-primary-foreground" />
```

## タイポグラフィ

- **フォント:** Inter（sans-serif フォールバック付き）
- Tailwind v4 のデフォルトスケールを使用

### 推奨サイズ

| 用途 | クラス |
|------|--------|
| 見出し（大） | `text-4xl font-bold tracking-tight` |
| 見出し（中） | `text-2xl font-semibold` |
| 見出し（小） | `text-lg font-medium` |
| 本文 | `text-base` |
| 補足 | `text-sm text-muted-foreground` |
| コード | `font-mono text-sm` |

## 角丸（Border Radius）

`--radius: 0.625rem` をベースに:

| クラス | 用途 |
|--------|------|
| `rounded-md` | ボタン、入力フィールド |
| `rounded-lg` | カード、ダイアログ |
| `rounded-full` | アバター、バッジ |

## スペーシング

Tailwind v4デフォルトのスペーシングスケールを使用。
よく使う値: `gap-2`, `gap-4`, `gap-8`, `p-4`, `p-6`, `p-8`

## コンポーネント規約

### shadcn/ui

- コンポーネントは `src/components/ui/` に配置
- `npx shadcn@latest add [name]` で追加
- カスタマイズはファイルを直接編集（shadcn/uiは「所有」するUI）

### 機能コンポーネント

- `src/components/features/` に配置
- ファイル名: ケバブケース（例: `user-profile-card.tsx`）
- 1コンポーネント1ファイルが基本
- 200行を超えたらサブコンポーネントに分割

### パターン

```tsx
// ✅ 推奨
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MyComponentProps {
  title: string;
  className?: string;
}

export function MyComponent({ title, className }: MyComponentProps) {
  return (
    <div className={cn("p-4", className)}>
      <h2 className="text-lg font-medium">{title}</h2>
      <Button>アクション</Button>
    </div>
  );
}
```

## レスポンシブデザイン

モバイルファーストで設計。Tailwindのブレークポイントを使用:

| プレフィックス | 最小幅 |
|-------------|--------|
| (なし) | 0px（モバイル） |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* レスポンシブグリッド */}
</div>
```
