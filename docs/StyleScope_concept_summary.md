# StyleScope 企画まとめデータ

別AIへの引き継ぎ用に、StyleScope のコンセプト・ターゲット・MVP仕様・画面構成・Result画面情報設計をまとめたファイルです。

---

## 0. プロジェクト概要

```yaml
app_name: StyleScope
concept_short: "“なんかこういう雰囲気”を、探せる言葉と作れる指示に変えるアプリ。"
concept_long: >
  StyleScopeは、画像や曖昧な言葉からビジュアルテイストを読み取り、
  スタイル名・特徴・検索ワード・AIに渡せるデザイン指示を生成する、
  AIバイブコーダーを主対象に、デザイナーにも使えるリファレンス探索アプリ。
core_value:
  - 好きなビジュアルや曖昧なムードを言語化できる
  - 複数の参考画像に共通する雰囲気を抽出できる
  - Pinterestで使える検索ワードを生成できる
  - 検索ワードから外部検索をすぐ開ける
  - AIコーディングツールやUI生成AIに渡せるデザイン指示文を作れる
  - 将来的にムードボード作成へ拡張できる
primary_loop: "画像 / 複数画像 / 言葉を入れる → AI分析を見る → 構成要素で理解する → 検索ワードで探す → AI指示をコピーする → 保存する"
```

---

## 1. ターゲット層

```yaml
primary_targets:
  - name: "AIバイブコーダー / 個人開発者"
    needs:
      - "AIに『いい感じにして』と指示しても微妙なUIになる"
      - "好きな参考画像を、AIへの具体的なデザイン指示に変換したい"
      - "複数の参考画像に共通している雰囲気を言語化したい"
      - "デザイン用語やUI表現の語彙が足りない"
      - "Cursor / Claude Code / v0 / Lovable / Bolt などに貼れる指示文が欲しい"
    value:
      - "ふわっとした好みをAIに渡せるデザイン指示に変換できる"
      - "複数画像の共通点から、作りたいUIの方向性を抽出できる"
      - "色・余白・タイポ・UIディテール・避けたい要素まで整理できる"
      - "検索ワードとプロンプトを同時に得られる"
      - "作りたいUIの方向性を言語化できる"

  - name: "Web / UI / グラフィック寄りのデザイナー"
    needs:
      - "参考画像はあるが、スタイル名や検索ワードがわからない"
      - "Pinterestで似たビジュアルを追加で探す言葉が欲しい"
      - "クライアントやチームに雰囲気を説明する言葉が欲しい"
      - "ムードボード作成前のリサーチを効率化したい"
    value:
      - "画像や曖昧な言葉をデザイン言語に変換できる"
      - "色・余白・タイポ・構図などの構成要素として整理できる"
      - "Pinterest検索ワードを増やせる"
      - "ムードボード化の前段階として使える"

secondary_targets:
  - name: "デザイン初学者 / 学生"
    needs:
      - "好きなデザインはあるが、スタイル名を知らない"
      - "検索ワードが少ない"
      - "デザインの見方や語彙を増やしたい"
    value:
      - "画像の見方を学べる"
      - "デザイン用語・関連スタイルを知れる"
      - "検索の幅が広がる"

  - name: "非デザイナーのクリエイター"
    examples:
      - "SNS運用者"
      - "YouTuber"
      - "ショップオーナー"
      - "AI画像生成ユーザー"
    value:
      - "作りたい雰囲気を言葉にできる"
      - "参考探しやAI生成プロンプトに使える"
```

---

## 2. ポジショニング

```yaml
positioning:
  pinterest:
    pinterest_role: "参考画像を探す場所"
    stylescope_role: "Pinterestで探すための言葉と探索ルートを作る場所"
    difference: "StyleScopeは、参考画像の海に入るための地図と検索ワードを作る"

  chatgpt:
    chatgpt_role: "会話で相談する相手"
    stylescope_role: "リファレンス探索とAI指示生成に特化したツール"
    difference:
      - "毎回同じ構造で分析結果を出す"
      - "検索ワードが整理される"
      - "Pinterest検索にすぐ飛べる"
      - "複数検索ワードをまとめて開ける"
      - "分析結果を保存できる"
      - "AIに渡すデザイン指示文を生成できる"

  moodboard_apps:
    moodboard_role: "見つけた画像を集めて整理する場所"
    stylescope_role: "何を探せばいいかわからない段階から助ける場所"
    difference: "ムードボード作成前の探索・言語化を支援する"
```

---

## 3. コア体験

```yaml
core_experience:
  input_types:
    - "画像から探す"
    - "複数画像から共通点を探す"
    - "雰囲気の言葉から探す"

  output_types:
    - "AI Analysis / AI分析"
    - "Style Directions / スタイル候補"
    - "構成要素 / 入力タイプに応じて、共通点またはスタイル構成を表示する"
    - "Pinterest探索リンク / Style Directionsカード内の検索導線"
    - "Prompt for AI / AIに渡すデザイン指示"
    - "Related Styles / 関連スタイル"
    - "保存用データ"

  user_flow:
    - step: 1
      action: "画像、複数画像、または曖昧な言葉を入力する"
    - step: 2
      action: "AIがビジュアルの傾向・共通点・スタイル候補を分析する"
    - step: 3
      action: "構成要素で色・タイポ・余白・UIディテールなどを理解する"
    - step: 4
      action: "Style DirectionsカードからPinterest検索を開く"
    - step: 5
      action: "必要に応じて上部ボタンから3候補のPinterest検索結果をまとめて開く"
    - step: 6
      action: "AIに渡すデザイン指示文をコピーする"
    - step: 7
      action: "探索結果を保存する"
    - step: 8
      future_action: "保存結果をムードボードに追加する"
```

---

## 3.5 AI分析の役割

```yaml
ai_analysis:
  purpose: "画像や曖昧な言葉を、AIに渡せるデザイン指示・検索ワード・構成要素へ変換する"
  positioning: "スタイル名を正解として断定する機能ではなく、近い方向性を見つけるための分析機能"
  input_modes:
    - id: single_image
      name: "1枚の画像を分析"
      description: "画像の雰囲気、配色、余白、タイポ、UIディテール、近いスタイルを読み取る"
    - id: multi_image
      name: "複数画像の共通点を分析"
      description: "2〜5枚の参考画像から、共通するムード・色・構図・質感・検索ワードを抽出する"
    - id: mood_text
      name: "言葉から分析"
      description: "曖昧なムード表現を、近いスタイル候補と検索ワードに変換する"
  outputs:
    - "AI Summary / 分析サマリー"
    - "複数画像の共通点（image_set時）"
    - "Style Directions / スタイル候補"
    - "このスタイルの構成要素（single_image / mood_text時）"
    - "Pinterest探索リンク / Style Directionsカード内の検索導線"
    - "Prompt for AI / AIに渡すデザイン指示"
  limits:
    - "スタイル名を唯一の正解として断定しない"
    - "画像内の権利情報や出典の正確な判定はしない"
    - "複数画像の自動収集やPinterest画像の取り込みはしない"
    - "実装コードや完成UIそのものは生成しない"
```

---

## 4. v1 MVP スコープ

### v1で作るもの

```yaml
v1_must:
  - feature: "AI分析"
    description: "入力された画像・複数画像・雰囲気テキストを、スタイル候補・構成要素・検索ワード・AI指示に変換する"
    inputs:
      - "画像1枚"
      - "複数画像 2〜5枚"
      - "自由入力テキスト"
      - "補足テキスト 任意"
    outputs:
      - "AI Summary"
      - "Style Directions"
      - "構成要素（入力タイプに応じて表示名を変更）"
      - "Pinterest探索リンク"
      - "Prompt for AI"

  - feature: "画像から探す"
    description: "画像アップロードまたは画像URLから、近いビジュアルテイストを分析する"
    inputs:
      - "画像アップロード"
      - "画像URL 任意"
      - "補足テキスト 任意"
    outputs:
      - "Style Directions"
      - "このスタイルの構成要素"
      - "Pinterest探索リンク"
      - "Prompt for AI"

  - feature: "複数画像から共通点を探す"
    description: "複数の参考画像を登録し、共通する雰囲気・構成要素・検索ワードを抽出する"
    inputs:
      - "画像アップロード 2〜5枚"
      - "補足テキスト 任意"
    outputs:
      - "AI Summary"
      - "Style Directions"
      - "複数画像の共通点"
      - "Pinterest探索リンク"
      - "Prompt for AI"
    fields:
      - "共通する色・明度・彩度"
      - "共通する余白・構図"
      - "共通するタイポグラフィ傾向"
      - "共通するUIディテール"
      - "共通するムード"
      - "共通しない要素 / ノイズ"

  - feature: "雰囲気から探す"
    description: "曖昧なムード表現から、近いスタイル候補と検索ワードを生成する"
    inputs:
      - "自由入力テキスト"
      - "Mood hints チップ"
    outputs:
      - "Style Directions"
      - "このスタイルの構成要素"
      - "Pinterest探索リンク"
      - "Prompt for AI"

  - feature: "Style Directions"
    description: "近いスタイル候補を3件程度表示し、各候補からPinterest検索へ進める"
    fields:
      - "スタイル名"
      - "Fit感: Strong fit / Good fit / Nearby / Related"
      - "短い説明"
      - "ムードタグ"
      - "Pinterest検索リンク"

  - feature: "構成要素"
    description: "入力タイプに応じて、共通点またはスタイル構成を分解する"
    display_name_rules:
      image_set: "複数画像の共通点"
      single_image: "このスタイルの構成要素"
      mood_text: "このスタイルの構成要素"
    fields:
      - "Color"
      - "Typography"
      - "Layout"
      - "UI Details"
      - "Texture"
      - "Mood"
      - "Avoid"

  - feature: "Pinterest探索リンク"
    description: "検索ワードを独立リストにせず、Style Directionsカード内の外部検索リンクとして表示する"
    actions:
      - "Pinterestで1件開く"
      - "上部ボタンから表示中の3件をまとめて開く"

  - feature: "Prompt for AI"
    description: "AIコーディングツールやUI生成AIに渡せるデザイン指示文を生成する"
    variants:
      - "日本語 / UI改善用"
      - "日本語 / 新規生成用"
      - "英語 / UI改善用"
      - "英語 / 新規生成用"
    actions:
      - "コピー"
      - "全文表示"

  - feature: "保存"
    description: "分析結果・検索ワード・プロンプトを保存する"
    saved_data:
      - "入力タイプ: image / image_set / mood_text"
      - "元画像 / 複数画像 / 入力文"
      - "補足テキスト"
      - "AI Summary"
      - "複数画像の共通点"
      - "Style Directions"
      - "このスタイルの構成要素"
      - "Pinterest探索リンク"
      - "Prompt for AI"
      - "作成日時"
      - "Favorite"
```

### v1では作らないもの

```yaml
v1_out_of_scope:
  - "本格的なムードボード機能"
  - "外部画像の自動収集"
  - "Pinterest画像のアプリ内直接表示"
  - "PinterestやInstagramのスクレイピング"
  - "SNS共有"
  - "チーム共同編集"
  - "Figma連携"
  - "AI画像生成"
  - "コード生成"
  - "自動デザイン修正"
  - "Chrome拡張"
  - "Tailwind tokens / CSS variables 出力"
  - "Cursor / v0 / Lovable などツール別最適化プロンプト"
```

### v1.5以降で検討

```yaml
v1_5_should:
  - "Re-analyze / 調整して再分析"
  - "Related Stylesから再探索"
  - "色チップ表示"
  - "検索ワードの追加生成"
  - "保存結果の編集"
  - "簡易Boardへの追加"

future_v2:
  - "ムードボード作成"
  - "保存結果をBoardに追加"
  - "画像URL追加"
  - "Board全体のAI分析"
  - "共通スタイル抽出"
  - "共通カラーパレット生成"
  - "Board向け検索ワード生成"

future_v3:
  - "Chrome拡張"
  - "Figma連携"
  - "ツール別AIプロンプト生成"
  - "Tailwind / CSS variables 出力"
  - "shadcn/ui 向け指示"
  - "AI画像生成プロンプト"
  - "自分の好み分析"
```

---

## 5. 画面構成

```yaml
screen_notes:
  input_detail_doc: "docs/input-screen-wireframe.md"
  input_model: "画像1枚 / 複数画像 / テキストは、v1では1つのInput画面内のモード切り替えとして扱う案を優先する"

screens_v1:
  - id: home
    name: "Home"
    purpose: "画像から探す / 複数画像から共通点を探す / 雰囲気から探す の入口"
    main_elements:
      - "アプリ名"
      - "コンセプトコピー"
      - "画像から探すカード"
      - "複数画像から探すカード"
      - "雰囲気から探すカード"
      - "Recent Scopes"

  - id: input
    name: "Input"
    purpose: "画像1枚 / 複数画像 / テキストを切り替えて、AI分析に進む入口"
    main_elements:
      - "Input Mode: 画像1枚 / 複数画像 / テキスト"
      - "Primary Input: アップロードまたはテキスト入力"
      - "補足テキスト 任意"
      - "Analysis Setup"
      - "Analyze ボタン"
    note: "詳細WFは docs/input-screen-wireframe.md を参照"

  - id: image_scope
    name: "Image Scope"
    purpose: "画像を入力して分析へ進む"
    main_elements:
      - "画像アップロード"
      - "画像URL入力 任意"
      - "補足テキスト 任意"
      - "画像プレビュー"
      - "Analyze Style ボタン"
    note: "v1ではInput画面の 画像1枚 モードとして扱う"

  - id: multi_image_scope
    name: "Multi Image Scope"
    purpose: "複数の参考画像から共通する雰囲気と言葉を抽出する"
    main_elements:
      - "画像アップロード 2〜5枚"
      - "画像プレビュー一覧"
      - "補足テキスト 任意"
      - "共通点を分析するボタン"
    note: "v1ではInput画面の 複数画像 モードとして扱う。ムードボード化せず、共通点の抽出と検索ワード生成に限定する"

  - id: mood_scope
    name: "Mood Scope"
    purpose: "曖昧な言葉からスタイルを探す"
    main_elements:
      - "自由入力テキストエリア"
      - "Mood hints チップ"
      - "Example prompts"
      - "Find Styles ボタン"
    note: "v1ではInput画面の テキスト モードとして扱う。用途選択はv1では入れない"

  - id: analyzing
    name: "Analyzing"
    purpose: "AI分析中の待ち時間を納得感ある体験にする"
    main_elements:
      - "色の傾向を見ています"
      - "タイポグラフィの雰囲気を見ています"
      - "余白と構図を見ています"
      - "近いスタイルを探しています"
      - "検索ワードを作っています"
      - "AIへのデザイン指示に整えています"

  - id: result
    name: "Result"
    purpose: "StyleScopeの中心画面。分析結果から探索・コピー・保存に進む"
    main_elements:
      - "Source Summary"
      - "Quick Actions"
      - "AI Instruction"
      - "Style Directions"
      - "構成要素（入力タイプに応じて表示名を変更）"
      - "Save / Re-analyze"

  - id: library
    name: "Library"
    purpose: "保存した探索結果を見る"
    main_elements:
      - "All / 画像 / 複数画像 / テキスト / Favorites フィルター"
      - "保存カード一覧"
      - "検索"

  - id: saved_detail
    name: "Saved Detail"
    purpose: "保存した結果を再利用する"
    main_elements:
      - "Result内容の再表示"
      - "Style DirectionsのPinterestリンクを再度開く"
      - "Promptをコピー"
      - "Favorite"
      - "Delete"
```

---

## 6. Home 画面ワイヤー

```text
┌──────────────────────────────────────────────┐
│ StyleScope                         Library   │
├──────────────────────────────────────────────┤
│                                              │
│  “なんかこういう雰囲気”を、                  │
│  探せる言葉と作れる指示に変える。            │
│                                              │
│  画像や曖昧な言葉、複数の参考画像から、        │
│  スタイル名・検索ワード・AIへの指示を生成します。 │
│                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│  │ 画像から探す  │ │ 複数画像から  │ │ 雰囲気から探す│ │
│  │ 1枚の参考から │ │ 共通点を探す  │ │ 言葉から近い  │ │
│  │ 近いテイストを│ │ 好きな画像群の│ │ テイストを探す│ │
│  │ 分析する。    │ │ 共通ワード化。│ │              │ │
│  │ [ Upload ]   │ │ [ Add images ]│ │ [ Write mood ]│ │
│  └──────────────┘ └──────────────┘ └──────────────┘ │
│                                              │
│  Recent Scopes                               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ thumbnail│ │ gradient │ │ thumbnail│       │
│  │ Soft SaaS│ │ Retro Pop│ │ Editorial│       │
│  └──────────┘ └──────────┘ └──────────┘       │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 7. Image Scope 画面ワイヤー

```text
┌──────────────────────────────────────────────┐
│ ← Back                         StyleScope    │
├──────────────────────────────────────────────┤
│                                              │
│  画像から探す                                │
│  気になるビジュアルをアップロードすると、      │
│  近いスタイル名・検索ワード・AI指示を生成します。│
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │                                      │    │
│  │          Drop image here             │    │
│  │          or choose file              │    │
│  │                                      │    │
│  │          [ ファイルを選択 ]           │    │
│  │                                      │    │
│  └──────────────────────────────────────┘    │
│                                              │
│  画像URLから読み込む 任意                     │
│  ┌──────────────────────────────────────┐    │
│  │ https://...                          │    │
│  └──────────────────────────────────────┘    │
│                                              │
│  補足 任意                                   │
│  ┌──────────────────────────────────────┐    │
│  │ 例：この余白感に近いWebデザインを探したい │
│  └──────────────────────────────────────┘    │
│                                              │
│                          [ Analyze Style ]   │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 7.5 Multi Image Scope 画面ワイヤー

```text
┌──────────────────────────────────────────────┐
│ ← Back                         StyleScope    │
├──────────────────────────────────────────────┤
│                                              │
│  複数画像から共通点を探す                    │
│  好きな参考画像を2〜5枚入れると、             │
│  共通する雰囲気・検索ワード・AI指示を生成します。│
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ image 1  │ │ image 2  │ │ image 3  │       │
│  └──────────┘ └──────────┘ └──────────┘       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ image 4  │ │ image 5  │ │ + add    │       │
│  └──────────┘ └──────────┘ └──────────┘       │
│                                              │
│  補足 任意                                   │
│  ┌──────────────────────────────────────┐    │
│  │ 例：この画像たちの共通するUI感を知りたい │
│  └──────────────────────────────────────┘    │
│                                              │
│                          [ Analyze Common ]  │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 8. Mood Scope 画面ワイヤー

```text
┌──────────────────────────────────────────────┐
│ ← Back                         StyleScope    │
├──────────────────────────────────────────────┤
│                                              │
│  雰囲気から探す                              │
│  探したいテイストを、ふわっと書いてください。 │
│  きれいな文章じゃなくて大丈夫です。           │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │ 例：透明感があって、少し近未来っぽい。 │    │
│  │ でも冷たすぎず、やわらかくて余白が多い感じ。│
│  └──────────────────────────────────────┘    │
│                                              │
│  Mood hints                                  │
│  [透明感] [余白] [近未来] [上品] [レトロ]     │
│  [かわいい] [無機質] [手触り感] [高級感]       │
│  [ポップ] [落ち着き] [実験的] [自然] [テック感]│
│                                              │
│                          [ Find Styles ]     │
│                                              │
│  Example prompts                             │
│  ┌──────────────────────────────────────┐    │
│  │ 淡くて静か。余白が多く、少し個性的な感じ │
│  └──────────────────────────────────────┘    │
│  ┌──────────────────────────────────────┐    │
│  │ レトロだけど古すぎず、ポップで親しみやすい │
│  └──────────────────────────────────────┘    │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 9. Result 画面情報設計

```yaml
result_screen:
  purpose: "読む画面ではなく、探索・コピー・保存へ進む操作パネル"
  layout:
    desktop: "上部に結果サマリー、左にSource/Actions、右に分析結果"
    mobile: "AI Instructionを上部、Sourceは下部、各セクションは縦積み"
  sections:
    - id: header
      name: "Result Header"
      content:
        - "タイトル: Soft Futurism / Calm SaaS / Minimal Editorial"
        - "短い説明"
        - "Quick Actions"
      quick_actions:
        - "Pinterestで開く"
        - "保存"
        - "再分析"

    - id: source_summary
      name: "Source Summary"
      content:
        - "画像サムネイル / 複数画像サムネイル / 入力文"
        - "補足テキスト"
        - "入力タイプ（内部データ。画面上では強調しない）"

    - id: ai_instruction
      name: "AI Instruction"
      content:
        - "左側: AI Summary / AIが読み取った全体の方向性"
        - "右側: Prompt for AI / AIに貼る指示文"
        - "UI改善 / 新規生成 の切り替え"
        - "日本語 / 英語 の切り替え"
        - "Copy Promptボタン"

    - id: style_directions
      name: "Style Directions"
      content:
        - "スタイル候補3件: 1st / 2nd / 3rd"
        - "Fit感"
        - "説明"
        - "タグ"
        - "各カード内のPinterestアイコンリンク"

    - id: visual_components
      name: "構成要素"
      content:
        - "image_set時の表示名: 複数画像の共通点"
        - "single_image / mood_text時の表示名: このスタイルの構成要素"
        - "Color"
        - "Typography"
        - "Layout"
        - "UI Details"
        - "Texture"
        - "Mood"
        - "Avoid"

    - id: save_reanalyze
      name: "Save / Re-analyze"
      content:
        - "Save to Library"
        - "Re-analyze"
```

---

## 10. Result 画面ワイヤー

```text
┌────────────────────────────────────────────────────────┐
│ ← Back                                                  │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Result                                                │
│  Soft Futurism / Calm SaaS / Minimal Editorial          │
│  透明感と近未来感がありつつ、やわらかく落ち着いた方向です。│
│                                                        │
│  [ Pinterestで開く ] [ 保存 ] [ 再分析 ]                  │
│                                                        │
├───────────────────────┬────────────────────────────────┤
│ Source                │ AI Instruction                  │
│ ┌───────────────────┐ │                                │
│ │ image/text preview│ │ ┌────────────┬───────────────┐ │
│ └───────────────────┘ │ │ Summary    │ Prompt for AI │ │
│                       │ │ 透明感と    │ [UI改善][新規] │ │
│                       │ │ 近未来感。  │ この既存UIを… │ │
│                       │ │ 余白多め。  │ [Copy Prompt] │ │
│                       │ └────────────────────────────┘ │
│                       │                                │
│                       │ Style Directions                │
│                       │ ┌────────────────────────────┐ │
│                       │ │ 1st / Strong fit            │ │
│                       │ │ Soft Futurism               │ │
│                       │ │ [ P icon ↗ ]                │ │
│                       │ └────────────────────────────┘ │
│                       │                                │
│                       │ ┌────────────────────────────┐ │
│                       │ │ 2nd / Good fit              │ │
│                       │ │ Calm SaaS                   │ │
│                       │ │ [ P icon ↗ ]                │ │
│                       │ └────────────────────────────┘ │
│                       │ ┌────────────────────────────┐ │
│                       │ │ 3rd / Related               │ │
│                       │ │ Minimal Editorial           │ │
│                       │ │ [ P icon ↗ ]                │ │
│                       │ └────────────────────────────┘ │
│                       │                                │
│                       │ 構成要素                       │
│                       │ 複数画像の共通点                │
│                       │ ┌────────────────────────────┐ │
│                       │ │ ・淡いブルーと白い余白       │ │
│                       │ │ ・角丸カードと薄い境界線     │ │
│                       │ │ ・冷たすぎないテック感       │ │
│                       │ └────────────────────────────┘ │
│                       │                                │
└───────────────────────┴────────────────────────────────┘
```

---

## 11. Prompt for AI 仕様

```yaml
prompt_for_ai:
  purpose: "AIバイブコーダーがAIにそのまま貼れるデザイン指示文を生成する。デザイナーの説明文作成にも使える"
  target_tools:
    - "Cursor"
    - "Claude Code"
    - "v0"
    - "Lovable"
    - "Bolt"
    - "ChatGPT"
  v1_variants:
    - id: ja_ui_improvement
      label: "日本語 / UI改善"
    - id: ja_new_generation
      label: "日本語 / 新規生成"
    - id: en_ui_improvement
      label: "English / UI Improvement"
    - id: en_new_generation
      label: "English / New Generation"
  required_contents:
    - "スタイル方向性"
    - "全体のムード"
    - "配色"
    - "タイポグラフィ"
    - "レイアウト"
    - "UIディテール"
    - "質感"
    - "避けたい要素"
  actions:
    - "Copy Prompt"
    - "全文を見る"
```

### 日本語 UI改善用プロンプト例

```text
この既存UIを、Soft Futurism と Calm SaaS を掛け合わせた雰囲気に整えてください。

全体は淡いブルー、オフホワイト、ソフトグレーを中心にした低彩度の配色にし、余白を広めに取って、軽く透明感のある印象にしてください。

タイポグラフィは読みやすいサンセリフを使い、見出しは中太、本文は落ち着いた印象にしてください。

UIは角丸のカード、控えめな境界線、薄い影、やわらかいグラデーションを使い、近未来感は出しつつも冷たくなりすぎないようにしてください。

避けたい要素は、強いネオン、黒背景のサイバーパンク、コントラストが強すぎる配色、情報が詰まったレイアウトです。
```

### 英語 UI改善用プロンプト例

```text
Redesign this existing UI with a Soft Futurism and Calm SaaS visual direction.

Use a low-saturation palette based on pale blue, off-white, and soft gray. Keep the layout spacious, airy, and calm, with a light sense of translucency.

Use clean sans-serif typography with medium-weight headings and readable body text. The overall impression should feel modern, gentle, and approachable.

For UI details, use rounded cards, subtle borders, soft shadows, light gradients, and translucent panels. Add a futuristic feeling without making it cold or overly technical.

Avoid strong neon colors, dark cyberpunk aesthetics, harsh contrast, dense layouts, and overly decorative elements.
```

---

## 12. Pinterest探索リンク仕様

```yaml
pinterest_links:
  purpose: "Style Directionsの候補から、その方向に近いPinterest検索へ進める"
  placement: "Style Directionsカード内"
  route_item:
    fields:
      - "keyword"
      - "pinterest_url"
    actions:
      - "Pinterestアイコンから開く"
  top_action:
    - "表示中の3候補をまとめてPinterestで開く"
  behavior:
    default_link_count: 3
    max_link_count: 3
    note: "独立したSearch Routesセクションは表示しない"
```

### 外部検索URL

```yaml
external_search_urls:
  pinterest: "https://www.pinterest.com/search/pins/?q={encoded_keyword}"
```

---

## 13. AI出力JSON案

```json
{
  "summary": {
    "source_type": "image_set",
    "source_count": 3,
    "title": "Soft Futurism / Calm SaaS",
    "short_description": "透明感と近未来感がありつつ、やわらかく落ち着いたUI方向です。",
    "ai_summary": "複数画像に共通して、淡い色、広い余白、角丸カード、控えめな境界線、冷たすぎないテック感が見られます。"
  },
  "common_points": [
    {
      "label": "Color",
      "description": "白〜淡いブルー、ソフトグレーを中心にした低彩度の配色。"
    },
    {
      "label": "Layout",
      "description": "余白が広く、要素数を絞った静かな構成。"
    },
    {
      "label": "UI Details",
      "description": "角丸カード、薄い境界線、軽い影、透明感のあるパネル。"
    },
    {
      "label": "Mood",
      "description": "近未来感はあるが、冷たすぎず、やわらかく親しみやすい。"
    }
  ],
  "style_directions": [
    {
      "name": "Soft Futurism",
      "fit": "strong",
      "description": "透明感と近未来感がありつつ、淡い色や丸みで冷たさを抑える方向。",
      "tags": ["transparent", "soft-tech", "pale-blue", "airy"],
      "pinterest_keyword": "soft futuristic UI",
      "pinterest_url": "https://www.pinterest.com/search/pins/?q=soft%20futuristic%20UI"
    },
    {
      "name": "Calm SaaS",
      "fit": "good",
      "description": "テック感はあるが、余白と低彩度で落ち着いた印象にする方向。",
      "tags": ["minimal", "product-ui", "calm"],
      "pinterest_keyword": "calm tech product design",
      "pinterest_url": "https://www.pinterest.com/search/pins/?q=calm%20tech%20product%20design"
    },
    {
      "name": "Minimal Editorial",
      "fit": "related",
      "description": "余白とタイポグラフィを中心に、静かで上品に見せる方向。",
      "tags": ["editorial", "quiet", "typography"],
      "pinterest_keyword": "minimal editorial UI",
      "pinterest_url": "https://www.pinterest.com/search/pins/?q=minimal%20editorial%20UI"
    }
  ],
  "visual_components": {
    "color": {
      "description": "淡いブルー、オフホワイト、ソフトグレーを中心にした低彩度の配色。",
      "palette": ["#F7FAFC", "#DCEAF2", "#AAB8C2", "#6E7B86", "#1F2933"]
    },
    "typography": "clean sans-serif, medium headings, relaxed line-height",
    "layout": "large spacing, card-based sections, clear hierarchy",
    "ui_details": "rounded corners, subtle borders, soft shadows",
    "texture": "blur, glass, soft gradient, subtle glow",
    "mood": ["calm", "airy", "modern", "gentle futuristic"],
    "avoid": ["hard neon", "black cyberpunk", "heavy contrast", "busy layout"]
  },
  "prompts": {
    "ja": {
      "ui_improvement": "この既存UIを、Soft Futurism と Calm SaaS を掛け合わせた雰囲気に整えてください。全体は淡いブルー、オフホワイト、ソフトグレーを中心にした低彩度の配色にし、余白を広めに取って、軽く透明感のある印象にしてください。タイポグラフィは読みやすいサンセリフを使い、見出しは中太、本文は落ち着いた印象にしてください。UIは角丸のカード、控えめな境界線、薄い影、やわらかいグラデーションを使い、近未来感は出しつつも冷たくなりすぎないようにしてください。避けたい要素は、強いネオン、黒背景のサイバーパンク、コントラストが強すぎる配色、情報が詰まったレイアウトです。",
      "new_generation": "Soft Futurism と Calm SaaS を掛け合わせた雰囲気のデジタルプロダクトUIを作成してください。淡いブルー、オフホワイト、ソフトグレーを中心に、余白が広く、透明感があり、やわらかい近未来感のある画面にしてください。角丸カード、控えめな境界線、薄い影、クリーンなサンセリフを使い、冷たすぎず親しみやすい印象にしてください。"
    },
    "en": {
      "ui_improvement": "Redesign this existing UI with a Soft Futurism and Calm SaaS visual direction. Use a low-saturation palette based on pale blue, off-white, and soft gray. Keep the layout spacious, airy, and calm, with a light sense of translucency. Use clean sans-serif typography with medium-weight headings and readable body text. For UI details, use rounded cards, subtle borders, soft shadows, light gradients, and translucent panels. Avoid strong neon colors, dark cyberpunk aesthetics, harsh contrast, dense layouts, and overly decorative elements.",
      "new_generation": "Create a new digital product UI with a Soft Futurism and Calm SaaS visual direction. Use pale blue, off-white, and soft gray as the main palette. Make the layout spacious, calm, translucent, and gently futuristic. Use rounded cards, subtle borders, soft shadows, clean sans-serif typography, and restrained gradients. Keep the overall mood modern, approachable, and not overly cold or technical."
    }
  },
  "related_styles": [
    {
      "name": "Glassmorphism",
      "description": "より透明感・ぼかし・ガラス質感に寄せる。"
    },
    {
      "name": "Minimal Editorial",
      "description": "より余白とタイポグラフィに寄せる。"
    },
    {
      "name": "Frutiger Aero",
      "description": "より懐かしい透明感・光沢感に寄せる。"
    }
  ]
}
```

---

## 14. UIトーン

```yaml
ui_tone:
  keywords:
    - "静か"
    - "知的"
    - "余白多め"
    - "少しレンズ感"
    - "探索ツール感"
    - "中身の画像や分析結果が主役"
  visual_direction:
    - "淡いグレー〜オフホワイト背景"
    - "黒すぎない文字色"
    - "薄い線"
    - "控えめな影"
    - "中くらいの角丸"
    - "カードUI"
    - "色チップやタグで少しだけカラフル"
  avoid:
    - "派手すぎるAIツール感"
    - "ネオンすぎる近未来"
    - "SaaSっぽすぎる青一色"
    - "Pinterestの劣化版っぽい画像グリッド"
```

---

## 15. 重要な設計判断

```yaml
decisions:
  - decision: "AI分析はv1に入れる"
    reason: "StyleScopeの中心価値は、画像や曖昧な言葉を検索ワードとAI指示に変換することにあるため。"

  - decision: "複数画像の共通点分析はv1に入れる"
    reason: "AIバイブコーダーは複数の参考画像から『この感じ』をAIに伝えたいケースが多いため。ただしv1ではムードボード化せず、2〜5枚の共通点抽出に限定する。"

  - decision: "用途選択はv1では入れない"
    reason: "入力の軽さを優先するため。必要な文脈は自由入力の補足で吸収する。"

  - decision: "Pinterest画像をアプリ内に直接表示しない"
    reason: "権利・利用規約・実装コストのリスクが高いため。v1では外部検索リンクに留める。"

  - decision: "Prompt for AIはv1に入れる"
    reason: "AIバイブコーダーを主対象にするため、検索ワードだけでは弱い。AIに貼れる指示文が差別化になる。"

  - decision: "コード生成はv1では入れない"
    reason: "UI生成ツールと競合し、StyleScopeの芯がブレるため。v1は作れる指示を作るまでに留める。"

  - decision: "Result画面を最重要画面にする"
    reason: "StyleScopeの価値は、分析結果から探索・コピー・保存に進める体験にあるため。"
```

---

## 16. 次に検討するなら

```yaml
next_steps:
  - "AIプロンプト設計"
  - "画像分析用プロンプト"
  - "複数画像の共通点分析用プロンプト"
  - "雰囲気テキスト分析用プロンプト"
  - "JSON出力仕様の厳密化"
  - "Result画面のUIデザイン詳細"
  - "デザインシステム設計"
  - "1ページ企画書化"
```

---

## 別AIへの依頼文テンプレート

```text
以下は、StyleScopeというWebアプリの企画・MVP仕様・画面構成・Result画面の情報設計です。
この内容をもとに、UI設計、プロトタイプ、技術仕様、AIプロンプト設計、または実装計画を作ってください。
```
