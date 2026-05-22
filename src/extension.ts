import * as vscode from "vscode";
import { HuggingFaceChatModelProvider } from "./provider";

export async function activate(context: vscode.ExtensionContext) {
	// Build a descriptive User-Agent to help quantify API usage
	const ext = vscode.extensions.getExtension("Minimax.minimax-vscode-chat");
	const extVersion = ext?.packageJSON?.version ?? "unknown";
	const vscodeVersion = vscode.version;
	// Keep UA minimal: only extension version and VS Code version
	const ua = `minimax-vscode-chat/${extVersion} VSCode/${vscodeVersion}`;

	const provider = new HuggingFaceChatModelProvider(context.secrets, ua);
	// Register the Minimax provider under the vendor id used in package.json
	vscode.lm.registerLanguageModelChatProvider("minimax", provider);

	// Management command to configure API key
	context.subscriptions.push(
		vscode.commands.registerCommand("minimax.manage", async () => {
			const existing = await context.secrets.get("minimax.apiKey");
			const apiKey = await vscode.window.showInputBox({
				title: "Minimax API Key",
				prompt: existing ? "Update your Minimax API Key" : "Enter your Minimax API Key",
				ignoreFocusOut: true,
				password: true,
				value: existing ?? "",
			});
			if (apiKey === undefined) {
				return; // user canceled
			}
			if (!apiKey.trim()) {
				await context.secrets.delete("minimax.apiKey");
				vscode.window.showInformationMessage("Minimax API Key cleared.");
				return;
			}
			await context.secrets.store("minimax.apiKey", apiKey.trim());
			vscode.window.showInformationMessage("Minimax API Key saved.");
		})
	);
}

export function deactivate() {}
