# AI Tutorial - Next.js with AI SDK useCompletion Demo

Next.js 15とAI SDKの`useCompletion`を使用したAIチャットデモアプリケーションです。

## 特徴

- **プリセット機能**: 要約、翻訳、校正の定型処理
- **サンプルテキスト**: 記事、ビジネス文書、技術文書の選択可能
- **自由記述**: カスタム指示でのAI対話
- **ストリーミング**: リアルタイムでAI応答を取得
- **コピー機能**: AI応答をワンクリックでクリップボードにコピー

## 技術スタック

- **Next.js 15** (App Router)
- **React 19** with TypeScript
- **AI SDK** (`@ai-sdk/react`, `@ai-sdk/openai`)
- **OpenAI GPT-4o**
- **Tailwind CSS**
- **Radix UI**
- **Zod**

## セットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 環境変数の設定:
```bash
# .env.local ファイルを作成し、OpenAI API キーを設定
OPENAI_API_KEY=your_openai_api_key_here
```

3. 開発サーバーの起動:
```bash
npm run dev
```

4. ブラウザで http://localhost:3000 にアクセス

## 使用方法

1. **「AI Chat」ボタンをクリック**してダイアログを開く
2. **プリセット選択**:
   - 要約: テキストの簡潔な要約
   - 翻訳: 日本語から英語への翻訳
   - 校正: 文法・表現の改善提案
   - 自由記述: カスタム指示
3. **対象テキスト選択** (プリセット使用時)
4. **実行ボタンをクリック**してAI処理を開始
5. **応答のコピー**はコピーアイコンをクリック

## プロジェクト構造

```
src/
├── app/
│   ├── api/
│   │   ├── chat/route.ts         # 旧版チャットAPI (streamText使用)
│   │   ├── completion/route.ts   # メイン完了API (useCompletion用)
│   │   └── workflow/route.ts     # ワークフロー処理API
│   ├── layout.tsx                # ルートレイアウト
│   └── page.tsx                  # メインページ
├── components/
│   ├── ai-dialog.tsx             # AIチャットダイアログ
│   └── ui/                       # UIコンポーネント
├── data/
│   └── sample-text.ts            # サンプルテキストデータ
├── hooks/
│   └── use-toast.ts              # トースト通知フック
└── lib/
    └── clipboard.ts              # クリップボード操作
```

## API

### POST /api/completion
メインのAI完了処理API (`useCompletion`フック用)

**リクエスト**:
```json
{
  "prompt": "処理したいテキスト内容"
}
```

**レスポンス**: ストリーミング形式でAI応答を返却

## コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番用ビルド
npm run start    # 本番サーバー起動
npm run lint     # ESLint実行
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。