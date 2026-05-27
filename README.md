# Multi-Provider for GitHub Copilot Chat

A VS Code extension that brings multiple AI inference providers into GitHub Copilot Chat. Use models from **Minimax**, **DeepSeek**, **Qwen**, and **Kimi** directly in VS Code's built-in chat interface.

---

## 🚀 Getting Started

### Installation

1. Install this extension from the VS Code Marketplace
2. Restart VS Code or reload the window

### Configuration

1. Open VS Code's chat interface (`Ctrl+Shift+I` / `Cmd+Shift+I`)
2. Click the model picker in the chat header
3. Select **"Manage Models..."**
4. Choose your preferred provider
5. Run the corresponding manage command in the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):
   - `Minimax: Minimax` → command **`minimax.manage`**
   - `DeepSeek: DeepSeek` → command **`deepseek.manage`**
   - `Qwen: Qwen` → command **`qwen.manage`**
   - `Kimi: Kimi` → command **`kimi.manage`**
6. Enter your API key when prompted
7. Select a model from the picker and start chatting!

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Multi-Provider Support** | Seamless integration with Minimax, DeepSeek, Qwen, and Kimi |
| **Tool Calling** | Full function calling support across all providers |
| **Streaming Responses** | Real-time streaming chat responses |
| **Secure Storage** | API keys stored safely in VS Code's secret storage |
| **High Context** | Support for models up to 204,800 tokens (Minimax M2 series) |

---

## 📋 Supported Models

### Minimax

| Model | Context Length |
|-------|---------------|
| MiniMax M2.7 | 204,800 |
| MiniMax M2.7 (Highspeed) | 204,800 |
| MiniMax M2.5 | 204,800 |
| MiniMax M2.5 (Highspeed) | 204,800 |
| MiniMax M2.1 | 204,800 |
| MiniMax M2.1 (Highspeed) | 204,800 |
| MiniMax M2 | 204,800 |

### DeepSeek

| Model | Context Length |
|-------|---------------|
| DeepSeek V3 | 64,000 |
| DeepSeek R1 | 64,000 |

### Qwen

| Model | Context Length |
|-------|---------------|
| Qwen Plus | 131,072 |
| Qwen Max | 131,072 |
| Qwen Turbo | 131,072 |
| Qwen Coder Plus | 131,072 |

### Kimi

| Model | Context Length |
|-------|---------------|
| Kimi V1 8K | 8,192 |
| Kimi V1 32K | 32,768 |
| Kimi V1 128K | 131,072 |
| Kimi Latest | 131,072 |

---

## 🔑 Obtaining API Keys

| Provider | Platform |
|----------|----------|
| **Minimax** | [platform.minimaxi.com](https://platform.minimaxi.com) |
| **DeepSeek** | [platform.deepseek.com](https://platform.deepseek.com) |
| **Qwen** | [dashscope.console.aliyun.com](https://dashscope.console.aliyun.com) |
| **Kimi** | [platform.moonshot.cn](https://platform.moonshot.cn) |

---

## 🛠️ Development

### Prerequisites

- VS Code 1.104.0 or higher
- Node.js 18+
- pnpm 8+

### Setup

```bash
git clone https://github.com/fengjutian/minimax-vscode-chat
cd minimax-vscode-chat
pnpm install
pnpm run compile
```

### Running the Extension

Press `F5` to launch an Extension Development Host with the extension loaded.

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run compile` | Compile TypeScript to JavaScript |
| `pnpm run watch` | Watch mode for incremental compilation |
| `pnpm run lint` | Run ESLint to find problems |
| `pnpm run format` | Format code with Prettier |
| `pnpm run test` | Compile and run tests |

---

## 📖 Architecture

The extension uses VS Code's [Language Model Chat Provider API](https://code.visualstudio.com/api/extension-guides/ai/language-model-chat-provider) to register each provider. The `GenericChatModelProvider` class handles:

- API key management via VS Code's secret storage
- Request/response transformation between VS Code's schema and OpenAI-compatible APIs
- Streaming response handling
- Tool call conversion

---

## 📄 License

MIT License
