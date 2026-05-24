import * as vscode from "vscode";
import {
	GenericChatModelProvider,
	MINIMAX_CONFIG,
	DEEPSEEK_CONFIG,
	QWEN_CONFIG,
	KIMI_CONFIG,
} from "./provider";

const VENDORS = [
	{ config: MINIMAX_CONFIG, command: "minimax.manage" },
	{ config: DEEPSEEK_CONFIG, command: "deepseek.manage" },
	{ config: QWEN_CONFIG, command: "qwen.manage" },
	{ config: KIMI_CONFIG, command: "kimi.manage" },
];

export async function activate(context: vscode.ExtensionContext) {
	const ext = vscode.extensions.getExtension("Minimax.minimax-vscode-chat");
	const extVersion = ext?.packageJSON?.version ?? "unknown";
	const vscodeVersion = vscode.version;
	const ua = `multi-llm-vscode-chat/${extVersion} VSCode/${vscodeVersion}`;

	for (const v of VENDORS) {
		const provider = new GenericChatModelProvider(context.secrets, ua, v.config);
		vscode.lm.registerLanguageModelChatProvider(v.config.vendor, provider);

		context.subscriptions.push(
			vscode.commands.registerCommand(v.command, async () => {
				const existing = await context.secrets.get(v.config.apiKeySecretName);
				const apiKey = await vscode.window.showInputBox({
					title: `${v.config.vendor} API Key`,
					prompt: existing
						? `Update your ${v.config.vendor} API Key`
						: `Enter your ${v.config.vendor} API Key`,
					ignoreFocusOut: true,
					password: true,
					value: existing ?? "",
				});
				if (apiKey === undefined) {
					return;
				}
				if (!apiKey.trim()) {
					await context.secrets.delete(v.config.apiKeySecretName);
					vscode.window.showInformationMessage(`${v.config.vendor} API Key cleared.`);
					return;
				}
				await context.secrets.store(v.config.apiKeySecretName, apiKey.trim());
				vscode.window.showInformationMessage(`${v.config.vendor} API Key saved.`);
			})
		);
	}
}

export function deactivate() {}
