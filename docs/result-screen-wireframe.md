# StyleScope Result画面 WF

StyleScopeのResult画面は、AI分析結果を読むだけの画面ではなく、AIに渡す指示を確認し、必要に応じてPinterestで追加探索できる操作画面です。
主対象はAIバイブコーダーなので、画面上部とStyle DirectionsカードからPinterest探索へ進めるようにし、AIに渡す指示はAI Instruction内でコピーできるようにします。

---

## 1. 画面の目的

```yaml
screen: Result
purpose: "AI分析結果から、検索ワードとAI指示をすぐ使える状態にする"
primary_user: "AIバイブコーダー / 個人開発者"
main_actions:
  - "Pinterestで開く"
  - "結果を保存する"
secondary_actions:
  - "AI指示をコピーする"
  - "構成要素を確認する"
  - "再分析する"
```

---

## 2. 表示優先度

Result画面では、上から順に以下の優先度で見せます。

```yaml
priority_order:
  1: "Result Header / この結果の方向性"
  2: "Quick Actions / Pinterestで開く・保存・再分析"
  3: "AI Instruction / 要約とAIに貼る指示文"
  4: "Style Directions / 近いスタイル候補 1〜3 とPinterest導線"
  5: "構成要素 / 入力タイプに応じて、共通点またはスタイル構成を表示する"
  6: "Source Summary / 入力元の確認"
```

補足:
- `AI Instruction` は主役なので、上部から近い位置に置く。
- `AI Summary` と `Prompt for AI` は別セクションにせず、同じ枠の中で左右に並べる。
- Pinterest探索は独立セクションにせず、`Style Directions` の各カードから開けるようにする。
- Pinterest以外の外部リンクはv1では出さない。
- `構成要素` は詳しく知りたい人向け。複数画像では `複数画像の共通点`、単独画像やテキストでは `このスタイルの構成要素` として出し分ける。
- `Source Summary` は確認用なので、PCでは左サイド、スマホでは下寄りでもよい。

---

## 3. PC版 WF

想定幅: 1200px以上

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ ← Back                                                                     │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Result                                                                    │
│  Soft Futurism / Calm SaaS                                                  │
│  透明感と近未来感がありつつ、やわらかく落ち着いたUI方向です。              │
│                                                                            │
│  [ Pinterestで開く ] [ 保存 ] [ 再分析 ]                                     │
│                                                                            │
├──────────────────────────────┬─────────────────────────────────────────────┤
│ Source                       │ AI Instruction                              │
│ ┌──────────────────────────┐ │ ┌──────────────────────┬────────────────┐ │
│ │ image set preview         │ │ │ Summary              │ Prompt         │ │
│ │ 3 images                  │ │ │ 淡い色、広い余白、   │ [UI改善][新規] │ │
│ └──────────────────────────┘ │ │ 角丸と薄い境界線。   │ この既存UIを… │ │
│ Input: 3 images              │ │ 冷たすぎないテック感 │ [Copy Prompt] │ │
│                              │ └──────────────────────┴────────────────┘ │
│                              │                                             │
│                              │ Style Directions                            │
│                              │ [1st Strong] Soft Futurism [P icon ↗]       │
│                              │ [2nd Good] Calm SaaS [P icon ↗]             │
│                              │ [3rd Related] Minimal Editorial [P icon ↗] │
│                              │                                             │
│                              │ 構成要素                                    │
│                              │ 複数画像の共通点                            │
│                              │ [Color: 淡い青/白] [Layout: 余白多め]       │
│                              │ [UI Detail: 角丸/薄線] [Mood: soft tech]    │
└──────────────────────────────┴─────────────────────────────────────────────┘
```

### PC版の考え方

- 左側は入力元の確認専用にする。
- 右側は `AI Instruction` セクション内を2カラムにして、AI要約とPromptを一画面内で見せる。
- 上部の一番強いボタンは `Pinterestで開く` にする。
- Pinterestリンクは `Style Directions` のカード内に置き、候補ごとに追加探索できるようにする。
- `構成要素` はカードを縦に積まず、タグ状のコンパクト表示にする。
- 複数画像では `複数画像の共通点` だけを出し、近い意味の見出しは同時に出さない。
- `Style Directions` は `1st / 2nd / 3rd` を明示し、第3候補まであることを分かりやすくする。

---

## 4. スマホ版 WF

想定幅: 390px前後

```text
┌──────────────────────────────┐
│ ← Back                        │
├──────────────────────────────┤
│ Result                       │
│ Soft Futurism / Calm SaaS     │
│ 透明感と近未来感がありつつ、  │
│ やわらかく落ち着いた方向です。│
│                              │
│ [ Pinterestで開く ]            │
│ [ 保存 ] [ 再分析 ]           │
│                              │
├──────────────────────────────┤
│ AI Instruction               │
│ ┌──────────────────────────┐ │
│ │ Summary                  │ │
│ │ 淡い色、広い余白、角丸、 │ │
│ │ 冷たすぎないテック感が共通│ │
│ │ しています。             │ │
│ ├──────────────────────────┤ │
│ │ Prompt for AI            │ │
│ │ [ UI改善 ] [ 新規生成 ]   │ │
│ │ [ 日本語 ] [ English ]    │ │
│ │ この既存UIを、Soft...    │ │
│ │ [ Copy Prompt ]          │ │
│ └──────────────────────────┘ │
│                              │
│ Style Directions            │
│ ┌──────────────────────────┐ │
│ │ 1st / Strong fit         │ │
│ │ Soft Futurism            │ │
│ │ [ P icon ↗ ]              │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ 2nd / Good fit           │ │
│ │ Calm SaaS                │ │
│ │ [ P icon ↗ ]              │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ 3rd / Related            │ │
│ │ Minimal Editorial        │ │
│ │ [ P icon ↗ ]              │ │
│ └──────────────────────────┘ │
│                              │
│ 構成要素                    │
│ 複数画像の共通点             │
│ ┌──────────┐ ┌──────────┐   │
│ │ Color    │ │ Layout   │   │
│ └──────────┘ └──────────┘   │
│                              │
│ Source                      │
│ ┌──────────────────────────┐ │
│ │ image / text preview     │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

### スマホ版の考え方

- 左サイドバーは使わず、縦積みにする。
- 最上部に `Pinterestで開く` を置く。
- 長いPromptは最初は短く見せ、`全文を見る` で展開する。
- PinterestリンクはStyle Directionsカード内に置き、独立した検索リストは出さない。
- `Source` は確認用なので下部に置く。
- 将来的には下部固定バーで `Pinterest検索 / 保存` を置いてもよい。

---

## 5. 入力タイプ別の表示差分

```yaml
single_image:
  source_label: "Image"
  show_common_points: false
  component_heading: "このスタイルの構成要素"
  top_summary: "この画像から読み取った方向性"
  main_sections:
    - "AI Instruction"
    - "Style Directions"
    - "構成要素"

image_set:
  source_label: "表示しない"
  show_common_points: true
  component_heading: "複数画像の共通点"
  top_summary: "複数画像に共通する方向性"
  main_sections:
    - "AI Instruction"
    - "Style Directions"
    - "構成要素（表示見出しは 複数画像の共通点）"

mood_text:
  source_label: "Mood Text"
  show_common_points: false
  component_heading: "このスタイルの構成要素"
  top_summary: "入力された言葉から近い方向性"
  main_sections:
    - "AI Instruction"
    - "Style Directions"
    - "構成要素"
```

---

## 6. セクション別 UI仕様メモ

### Result Header

```yaml
role: "結果の方向性を一目で伝える"
elements:
  - "戻るボタン"
  - "Resultラベル"
  - "結果タイトル"
  - "短い説明"
  - "Quick Actions"
```

見た目:
- 背景は白〜淡いグレー。
- タイトルは大きすぎず、分析ツールらしく落ち着かせる。
- Quick Actionsは横並び。スマホでは縦または2段。

### AI Instruction

```yaml
role: "AIが読み取った要約と、AIコーディングツールに貼る指示文を1つの枠で見せる"
layout:
  desktop: "同一セクション内で2カラム。左にSummary、右にPrompt for AI"
  mobile: "同一カード内でSummaryを上、Prompt for AIを下に積む"
summary:
  max_length: "2〜4文"
  tone: "断定しすぎず、近い方向性として説明する"
prompt:
  tabs:
    - "UI改善"
    - "新規生成"
  language_toggle:
    - "日本語"
    - "English"
  actions:
    - "Copy Prompt"
    - "全文を見る"
```

例:
```text
複数画像に共通して、淡い色・広い余白・角丸カード・薄い境界線が見られます。
AIには「冷たすぎないテック感」「低彩度」「余白多め」と伝えると方向性がずれにくいです。
```

見た目:
- `AI Summary` と `Prompt for AI` は同じ外枠に入れる。
- PCでは2カラムにして、要約を読みながら右側ですぐコピーできるようにする。
- スマホでは1つのカード内で上下に分ける。
- `Copy Prompt` はこのセクション内で一番目立つボタンにする。

### Style Directions内のPinterest導線

```yaml
role: "各スタイル候補から、その方向に近いPinterest検索へ進む"
placement: "Style Directionsカード内"
item_actions:
  - "Pinterestアイコンから開く"
top_action:
  - "表示中のStyle Directions 3件をまとめてPinterestで開く"
```

見た目:
- 独立した `Search Routes` セクションは出さない。
- 各カードのタグ下に小さなPinterestアイコンボタンを置く。
- チェックボックスは使わない。
- 上部の `Pinterestで開く` は3候補をまとめて開く導線にする。

### 構成要素 / 表示名の出し分け

```yaml
role: "入力内容から、AI指示に使えるビジュアル要素を短い言葉にする"
placement: "独立セクションにはせず、構成要素セクション内に表示する"
heading_rules:
  image_set: "複数画像の共通点"
  single_image: "このスタイルの構成要素"
  mood_text: "このスタイルの構成要素"
fields:
  - "Color"
  - "Layout"
  - "Typography"
  - "UI Details"
  - "Mood"
  - "Noise / 共通しない要素"
```

見た目:
- 2〜3列の小カードまたはチップで表示する。
- `複数画像の共通点` と `このスタイルの構成要素` は同時に出さない。
- 文章は短く、検索ワードやAI指示に使える言葉を中心にする。

### Style Directions

```yaml
role: "近いスタイル候補を3件程度見せる"
fields:
  - "順位: 1st / 2nd / 3rd"
  - "スタイル名"
  - "Fit感"
  - "短い説明"
  - "タグ"
  - "Pinterest検索リンク"
```

見た目:
- `1st / 2nd / 3rd` をカード上部または左上バッジで明示する。
- `1st` は少し強調し、`2nd` `3rd` も同じ列で見えるようにする。
- PCでは3枚を横並び、スマホでは縦積みでも必ず3枚あることが分かる見出しにする。
- 3候補であることは見出し補足ではなく、各カードの `1st / 2nd / 3rd` で伝える。
- スタイル名は正解として断定せず、候補として見せる。
- Pinterestリンクは文字ボタンではなく、カード下部のアイコンボタンにする。

### 構成要素の項目

```yaml
role: "表示名に応じて、共通点またはスタイル構成を分解する"
fields:
  - "Color"
  - "Typography"
  - "Layout"
  - "UI Details"
  - "Texture"
  - "Mood"
  - "Avoid"
```

見た目:
- 詳細情報なので、Style Directionsの次にコンパクトに置く。
- 複数画像では `複数画像の共通点`、単独画像/テキストでは `このスタイルの構成要素` として同じ場所に出す。
- `Avoid` はAI指示で重要なので、最後ではなく目立つ位置に置いてもよい。

---

## 7. 初回プロトタイプで確認したいこと

```yaml
qa_points:
  - "AI指示コピーが迷わず見つかるか"
  - "Style DirectionsカードからPinterestへ進む導線が分かるか"
  - "複数画像の共通点が、AI指示に使える言葉になっているか"
  - "情報量が多すぎて読む画面になっていないか"
  - "スマホでPromptが長すぎて邪魔にならないか"
```

---

## 8. 次に決めること

```yaml
next_decisions:
  - "PC版で左サイドバーを固定するか"
  - "スマホでPinterest検索だけ下部固定にするか"
  - "構成要素内の共通点表示を、何枚以上で出すか"
  - "Style Directionsカード内のPinterestリンクを3件固定にするか、候補数に合わせて増減するか"
  - "保存後の見た目をトースト通知にするか、保存済み状態をボタンで見せるか"
```
