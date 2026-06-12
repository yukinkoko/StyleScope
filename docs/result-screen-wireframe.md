# StyleScope Result画面 WF

StyleScopeのResult画面は、Input画面と同じFigmaトーンで、AI分析結果を静かに読めるOutput画面として扱います。
主対象はAIバイブコーダーなので、AIに渡す指示、近いスタイル候補、Pinterest探索、構成要素をすぐ使える状態にします。

---

## 1. 画面の目的

```yaml
screen: Result
purpose: "AI分析結果から、検索ワードとAI指示をすぐ使える状態にする"
primary_user: "AIバイブコーダー / 個人開発者"
visual_tone: "Input画面と同じ、広い余白・薄いグレー面・黒い主要アクション"
main_actions:
  - "Pinterestで開く"
  - "AI指示をコピーする"
  - "結果を保存する"
secondary_actions:
  - "Style Directionsを確認する"
  - "構成要素を確認する"
  - "再分析する"
```

---

## 2. 表示優先度

```yaml
priority_order:
  1: "Brand / 上部ナビ"
  2: "Result Hero / 結果タイトルと短い説明"
  3: "Quick Actions / Pinterestで開く・保存・再分析"
  4: "AI Instruction Panel / 入力元 + 要約 + AI指示"
  5: "Style Directions / 近いスタイル候補 1〜3"
  6: "構成要素 / 共通点またはスタイル構成"
  7: "Footer"
```

補足:
- Input画面と同じ背景色 `#f4f3f0`、セリフ体の大きなタイトル、黒い主要ボタンを使う。
- 旧UIの左サイドバーや管理画面風の白いアプリ枠は使わない。
- `AI Summary` と `Prompt for AI` は同じ大きなAI Instructionパネル内にまとめる。
- Pinterest探索は上部の主要ボタンと、Style Directions各候補のPinterestアイコンから開ける。
- `Search Routes` の独立セクションは作らない。
- `構成要素` はInput/Result共通の薄いグレーパネルのトーンで表示する。

---

## 3. PC版 WF

想定幅: 1200px以上

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ StyleScope                                                   [←] [+]       │
│                                                                            │
│                         StyleScope Result                                  │
│                         Modern Editorial                                  │
│                         Web Gallery                                       │
│        雑誌のような余白と大きなビジュアルで、作品を上品に見せる方向です。   │
│                                                                            │
│             [ Pinterestで開く ] [ 保存 ] [ 再分析 ]                         │
│                                                                            │
│      ┌──────────────────────────────────────────────────────────────┐      │
│      │ Source              │ AI Instruction                         │      │
│      │ ┌────┐┌────┐┌────┐ │ AIに渡せる方向性                      │      │
│      │ │img ││img ││img │ │ 淡い色、広い余白、角丸カード...        │      │
│      │ └────┘└────┘└────┘ │                                      │      │
│      │ Input: 3 images     │ [UI改善][新規生成] [日本語][English]   │      │
│      │ Mode: 共通点分析     │ modern editorial web gallery...       │      │
│      │ Created: 2026.06.12 │ [全文を見る] [AI指示をコピー]          │      │
│      └──────────────────────────────────────────────────────────────┘      │
│                                                                            │
│      Style Directions                                                       │
│      ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                  │
│      │ 1st Strong   │ │ 2nd Good     │ │ 3rd Related  │                  │
│      │ Editorial... │ │ Portfolio... │ │ Web Magazine │                  │
│      │ [P icon ↗]   │ │ [P icon ↗]   │ │ [P icon ↗]   │                  │
│      └──────────────┘ └──────────────┘ └──────────────┘                  │
│                                                                            │
│      構成要素                                            Common points      │
│      ┌──────────────────────────────────────────────────────────────┐      │
│      │ 複数画像の共通点                                             │      │
│      │ Color / Layout / UI Detail / Mood                            │      │
│      └──────────────────────────────────────────────────────────────┘      │
├────────────────────────────────────────────────────────────────────────────┤
│                         © 2026 TSUQREA Inc.          Privacy / Contact      │
└────────────────────────────────────────────────────────────────────────────┘
```

### PC版の考え方

- Input画面と同じ中央集約レイアウトにする。
- Resultタイトルは大きく静かに見せ、画面の主役にする。
- AI Instructionは薄いグレーの大きな面に入れ、入力元確認とAI指示を同じ文脈で見せる。
- Style Directionsは3枚の候補が一目で分かるよう横並びにする。
- 構成要素は細かいチップではなく、薄いグレー面に項目ごとに整理する。

---

## 4. スマホ版 WF

想定幅: 390px前後

```text
┌──────────────────────────────┐
│ StyleScope             [←][+]│
│                              │
│ StyleScope Result            │
│ Modern Editorial             │
│ Web Gallery                  │
│ 雑誌のような余白と大きな     │
│ ビジュアルで見せる方向です   │
│                              │
│ [ Pinterestで開く ]           │
│ [ 保存 ]                     │
│ [ 再分析 ]                   │
│                              │
│ ┌──────────────────────────┐ │
│ │ Source                   │ │
│ │ img img img              │ │
│ │ Input / Mode / Created   │ │
│ │                          │ │
│ │ AI Instruction           │ │
│ │ AIに渡せる方向性         │ │
│ │ [UI改善][新規生成]       │ │
│ │ Prompt                   │ │
│ │ [AI指示をコピー]         │ │
│ └──────────────────────────┘ │
│                              │
│ Style Directions            │
│ ┌──────────────────────────┐ │
│ │ 1st Editorial Gallery[P] │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ 2nd Portfolio [P]        │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ 3rd Web Magazine [P]     │ │
│ └──────────────────────────┘ │
│                              │
│ 構成要素                    │
│ ┌──────────────────────────┐ │
│ │ Color                    │ │
│ │ Layout                   │ │
│ │ UI Detail                │ │
│ │ Mood                     │ │
│ └──────────────────────────┘ │
│                              │
│ © 2026 TSUQREA Inc.          │
└──────────────────────────────┘
```

### スマホ版の考え方

- 全体を1列にして、余白を保ちながら縦に読む。
- Quick Actionsは横並びにこだわらず縦積みにする。
- AI Instructionパネル内ではSourceを上、AI指示を下に置く。
- Style Directionsは3候補が続いていることを、各カードの `1st / 2nd / 3rd` で伝える。
- 横スクロールを出さない。

---

## 5. 入力タイプ別の表示差分

```yaml
single_image:
  source_label: "Image"
  show_common_points: false
  component_heading: "このスタイルの構成要素"
  top_summary: "この画像から読み取った方向性"

image_set:
  source_label: "表示しない"
  show_common_points: true
  component_heading: "複数画像の共通点"
  top_summary: "複数画像に共通する方向性"

mood_text:
  source_label: "Mood Text"
  show_common_points: false
  component_heading: "このスタイルの構成要素"
  top_summary: "入力された言葉から近い方向性"
```

Result側で使うルール:
- `image_set` かつ画像が2枚以上のとき、構成要素セクション内に `複数画像の共通点` を表示する。
- `single_image` と `mood_text` のとき、構成要素セクション内に `このスタイルの構成要素` を表示する。
- `複数画像の共通点` と `このスタイルの構成要素` は同時に出さない。

---

## 6. セクション別 UI仕様メモ

### AI Instruction

```yaml
role: "AIに渡せる形で、分析結果を短くまとめる"
fields:
  - "Source preview"
  - "AI Summary"
  - "Prompt variant: UI改善 / 新規生成"
  - "Language: 日本語 / English"
  - "Prompt text"
  - "Copy action"
```

見た目:
- Input画面のドロップエリアに近い、薄いグレーの大きな面にする。
- Sourceは補助情報なので、AI Summaryより強くしすぎない。
- Copyボタンは黒い主要アクションにする。

### Style Directions

```yaml
role: "近いスタイル候補を3件程度見せる"
fields:
  - "順位: 1st / 2nd / 3rd"
  - "スタイル名"
  - "短い説明"
  - "タグ"
  - "Pinterest検索リンク"
```

見た目:
- PCでは3枚横並び、スマホでは縦積み。
- Pinterestリンクは文字ボタンではなく、カード内のアイコンボタンにする。
- スタイル名は正解として断定せず、候補として見せる。

### 構成要素

```yaml
role: "表示名に応じて、共通点またはスタイル構成を分解する"
fields:
  - "Color"
  - "Layout"
  - "UI Details"
  - "Mood"
```

見た目:
- 薄いグレー面に、項目名と内容を静かに並べる。
- チップ状に細かく分けすぎず、AI指示に使える単語として読めるようにする。

---

## 7. 初回プロトタイプで確認したいこと

```yaml
qa_points:
  - "Input画面と同じトーンに見えるか"
  - "Resultタイトル、AI Instruction、Style Directions、構成要素の順で自然に読めるか"
  - "Pinterestで開く導線が上部と候補カード内にあるか"
  - "AI指示コピーの主導線が分かるか"
  - "スマホで横スクロールが出ないか"
```
