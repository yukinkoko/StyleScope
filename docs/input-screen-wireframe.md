# StyleScope Input画面 WF

StyleScopeのInput画面は、ユーザーが「参考画像」「複数画像」「雰囲気テキスト」のどれから分析を始めるかを選び、Result画面に渡す材料を整える画面です。
主対象はAIバイブコーダーなので、入力の軽さを優先しつつ、AIに伝えたい文脈を少しだけ補足できる形にします。

---

## 1. 画面の目的

```yaml
screen: Input
purpose: "分析したい材料を入れて、AI分析に進む状態を作る"
primary_user: "AIバイブコーダー / 個人開発者"
main_action: "Analyze"
input_modes:
  - "画像1枚"
  - "複数画像"
  - "テキスト"
```

この画面で大事にすること:
- 何を入れればいいかがすぐ分かる。
- 画像1枚、複数画像、テキストの違いが迷わず選べる。
- 補足テキストは任意にして、入力の重さを増やしすぎない。
- Result画面で `複数画像の共通点` と `このスタイルの構成要素` を出し分けられる入力データを渡す。

---

## 2. 表示優先度

```yaml
priority_order:
  1: "Header / 何を分析する画面か"
  2: "Input Mode / 画像1枚・複数画像・テキスト"
  3: "Primary Input / アップロードまたはテキスト入力"
  4: "Context / 任意の補足"
  5: "Analyze Action / 分析開始"
  6: "Examples / 入力例"
```

補足:
- 入力モードは画面上部に固定して、ユーザーが途中で切り替えやすくする。
- `用途選択` はv1では入れない。補足テキストで吸収する。
- 画像URL入力はv1では優先度を下げ、必要なら折りたたみまたは後回しにする。
- Examplesは入力に迷ったときの補助なので、主導線より下に置く。

---

## 3. PC版 WF

想定幅: 1200px以上

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ StyleScope                                                    Library       │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Input                                                                     │
│  画像や言葉から、探せる言葉とAIに渡せる指示を作ります。                    │
│                                                                            │
│  [ 画像1枚 ] [ 複数画像 ] [ テキスト ]                                      │
│                                                                            │
├──────────────────────────────────────────────┬─────────────────────────────┤
│ Primary Input                                │ Context                     │
│ ┌──────────────────────────────────────────┐ │ ┌─────────────────────────┐ │
│ │                                          │ │ │ 補足 任意                │ │
│ │              Drop images here            │ │ │ 例: この余白感をUIに使いたい│ │
│ │              or choose files             │ │ │                         │ │
│ │                                          │ │ └─────────────────────────┘ │
│ │       [ + Add images ]                   │ │                             │
│ └──────────────────────────────────────────┘ │ Analysis Setup              │
│                                              │ - Mode: 複数画像             │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐       │ - Images: 3 / 5              │
│ │ image 1  │ │ image 2  │ │ image 3  │       │ - Result: 共通点分析          │
│ └──────────┘ └──────────┘ └──────────┘       │                             │
│                                              │ [ Analyze ]                 │
│                                              │                             │
│ Examples                                     │                             │
│ [ 淡いSaaS UI ] [ レトロポップ ] [ 高級感 ]  │                             │
└──────────────────────────────────────────────┴─────────────────────────────┘
```

### PC版の考え方

- 左を入力作業、右を補足と分析開始に分ける。
- 入力欄を一番大きくし、ファイルを入れる場所を迷わせない。
- 右側に `Analysis Setup` を置き、Resultでどう扱われるかを軽く見せる。
- `Analyze` は右側下部に置き、入力後に自然に押せる位置にする。

---

## 4. スマホ版 WF

想定幅: 390px前後

```text
┌──────────────────────────────┐
│ StyleScope             Library│
├──────────────────────────────┤
│ Input                        │
│ 画像や言葉から、探せる言葉と │
│ AIに渡せる指示を作ります。   │
│                              │
│ [画像1枚][複数画像][テキスト]│
│                              │
│ Primary Input                │
│ ┌──────────────────────────┐ │
│ │ Drop images here          │ │
│ │ [ + Add images ]          │ │
│ └──────────────────────────┘ │
│                              │
│ ┌────────┐ ┌────────┐       │
│ │ image1 │ │ image2 │       │
│ └────────┘ └────────┘       │
│ ┌────────┐ ┌────────┐       │
│ │ image3 │ │ + add  │       │
│ └────────┘ └────────┘       │
│                              │
│ 補足 任意                    │
│ ┌──────────────────────────┐ │
│ │ この画像たちの共通するUI感│ │
│ │ を知りたい                │ │
│ └──────────────────────────┘ │
│                              │
│ Result: 共通点分析            │
│ [ Analyze ]                  │
│                              │
│ Examples                     │
│ [淡いSaaS] [近未来] [上品]   │
└──────────────────────────────┘
```

### スマホ版の考え方

- 入力モードは上部に置き、横スクロールではなく3分割のボタンにする。
- アップロード領域は小さすぎないよう、最初の画面内で見える高さを確保する。
- 画像プレビューは2列にし、5枚まで増えても読みやすくする。
- `Analyze` は入力と補足の直後に置く。

---

## 5. 入力モード別の仕様

### 画像1枚

```yaml
mode: single_image
label: "画像1枚"
required_input:
  - "画像 1枚"
optional_input:
  - "補足テキスト"
analyze_button_label: "Analyze Style"
result_component_heading: "このスタイルの構成要素"
result_source_mode: "Image"
```

表示:
- 大きな1枚用アップロード枠を出す。
- アップロード後は画像プレビューを大きめに表示する。
- 補足テキスト例は `この余白感に近いUIを探したい` のようにする。

### 複数画像

```yaml
mode: image_set
label: "複数画像"
required_input:
  - "画像 2〜5枚"
optional_input:
  - "補足テキスト"
analyze_button_label: "Analyze Common Points"
result_component_heading: "複数画像の共通点"
result_source_mode: "共通点分析"
```

表示:
- 2〜5枚の画像スロットを出す。
- 1枚だけのときは `あと1枚追加すると共通点を分析できます` を出す。
- 5枚に到達したら追加ボタンを無効にする。
- Resultでは単独の `このスタイルの構成要素` ではなく、`複数画像の共通点` として出す。

### テキスト

```yaml
mode: mood_text
label: "テキスト"
required_input:
  - "雰囲気テキスト"
optional_input:
  - "Mood hints"
analyze_button_label: "Find Styles"
result_component_heading: "このスタイルの構成要素"
result_source_mode: "Mood Text"
```

表示:
- テキストエリアを主役にする。
- Mood hintsは入力の補助としてチップ表示する。
- 例文は2〜3件だけ出し、画面を説明過多にしない。

---

## 6. 状態別 UI

```yaml
empty:
  analyze_enabled: false
  message: "入力すると分析できます"

single_image_ready:
  analyze_enabled: true
  next_result: "このスタイルの構成要素"

image_set_one_image:
  analyze_enabled: false
  message: "あと1枚追加すると共通点を分析できます"

image_set_ready:
  analyze_enabled: true
  next_result: "複数画像の共通点"

text_ready:
  analyze_enabled: true
  next_result: "このスタイルの構成要素"

analyzing:
  analyze_enabled: false
  next_screen: "Analyzing"
```

---

## 7. Resultへの受け渡し

```yaml
payload:
  source_type:
    - "single_image"
    - "image_set"
    - "mood_text"
  source_count: "画像数。テキストの場合は0"
  source_items: "画像ファイルまたはテキスト"
  context_note: "任意の補足"
  mode_label: "ResultのSource Summaryに使う内部ラベル"
```

Result側で使うルール:
- `source_type = image_set` かつ `source_count >= 2` のとき、構成要素セクション内に `複数画像の共通点` を表示する。
- `single_image` と `mood_text` のとき、構成要素セクション内に `このスタイルの構成要素` を表示する。
- Source Summaryでは、画面上に `Image Set` のようなラベルを強く出さない。

---

## 8. 初回プロトタイプで確認したいこと

```yaml
qa_points:
  - "3つの入力モードの違いがすぐ分かるか"
  - "複数画像は2枚以上必要だと伝わるか"
  - "補足テキストが必須に見えすぎないか"
  - "Analyzeボタンを押す条件が自然か"
  - "Result画面の表示名と入力タイプがつながっているか"
```

---

## 9. 次に決めること

```yaml
next_decisions:
  - "Input画面を1画面のモード切り替えにするか、Homeから個別画面に遷移するか"
  - "画像URL入力をv1に入れるか、アップロードだけにするか"
  - "複数画像の最大枚数を5枚固定にするか"
  - "Examplesを常時表示するか、入力前だけ表示するか"
  - "Analyze中画面を独立画面にするか、Input画面上のローディングにするか"
```
