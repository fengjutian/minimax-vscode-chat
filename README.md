# Multi-Provider for GitHub Copilot Chat

A VS Code extension that integrates multiple AI inference providers into GitHub Copilot Chat, allowing you to use models from Minimax, DeepSeek, Qwen, and Kimi directly in VS Code.

---

## ⚡ Quick Start

1. Install this extension in VS Code
2. Open VS Code's chat interface (Ctrl+Shift+I / Cmd+Shift+I)
3. Click the model picker and select "Manage Models..."
4. Choose your preferred provider (Minimax, DeepSeek, Qwen, or Kimi)
5. Run the management command to set your API Key:
   - `Minimax: Minimax` → `minimax.manage`
   - `DeepSeek: DeepSeek` → `deepseek.manage`
   - `Qwen: Qwen` → `qwen.manage`
   - `Kimi: Kimi` → `kimi.manage`
6. Select a model and start chatting! 🎉

---

## ✨ Features

- **Multiple Providers**: Use models from Minimax, DeepSeek, Qwen, and Kimi
- **Tool Calling**: Full function calling support across all providers
- **Secure API Key Storage**: Keys stored safely in VS Code's secret storage
- **Streaming Responses**: Real-time streaming chat responses
- **High Context Length**: Support for models up to 204,800 tokens (Minimax M2 series)

### Supported Models

| Provider | Models |
|----------|--------|
| **Minimax** | M2.7, M2.5, M2.1, M2 (with highspeed variants) |
| **DeepSeek** | V3, R1 |
| **Qwen** | Plus, Max, Turbo, Coder Plus |
| **Kimi** | V1 8K, V1 32K, V1 128K, Latest |

---

## 🔧 Requirements

- VS Code 1.104.0 or higher
- API key from your selected provider

### Getting API Keys

- **Minimax**: [Minimax Platform](https://platform.minimaxi.com)
- **DeepSeek**: [DeepSeek Platform](https://platform.deepseek.com)
- **Qwen**: [Alibaba Cloud DashScope](https://dashscope.console.aliyun.com)
- **Kimi**: [Moonshot Platform](https://platform.moonshot.cn)

---

## 🛠️ Development

```bash
git clone https://github.com/fengjutian/minimax-vscode-chat
cd minimax-vscode-chat
pnpm install
pnpm run compile
```

Press F5 to launch an Extension Development Host.

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run compile` | Build the extension |
| `pnpm run watch` | Watch mode for development |
| `pnpm run lint` | Run ESLint |
| `pnpm run format` | Format code with Prettier |
| `pnpm run test` | Run tests |

---

## 📚 Learn More

- [VS Code Language Model Chat Provider API](https://code.visualstudio.com/api/extension-guides/ai/language-model-chat-provider)
- [VS Code Chat Extension Guide](https://code.visualstudio.com/api/extension-guides/command#using-a-custom-when-clause-context)

---

## 📄 License

MIT License
