import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function WebScreen() {
	return (
		<View style={styles.container}>
			<WebView
				source={{ uri: "https://magicpod.com/" }}
				startInLoadingState
				javaScriptEnabled
				domStorageEnabled
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
