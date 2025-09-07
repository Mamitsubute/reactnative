import { useState } from "react";
import {
	ImageSourcePropType,
	StyleSheet,
	FlatList,
	Platform,
	Pressable,
} from "react-native";
import { Image } from "expo-image";

type Props = {
	onSelect: (image: ImageSourcePropType) => void;
	onCloseModal: () => void;
};

type EmojiItem = {
	id: string; // ファイル名や任意のID
	source: ImageSourcePropType;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
	const [emoji] = useState<EmojiItem[]>([
		{ id: "fullMarks", source: require("../assets/images/emoji1.png") },
		{ id: "bigSmile", source: require("../assets/images/emoji2.png") },
		{ id: "manicure", source: require("../assets/images/emoji3.png") },
		{ id: "goat", source: require("../assets/images/emoji4.png") },
		{ id: "donut", source: require("../assets/images/emoji5.png") },
		{ id: "rainbow", source: require("../assets/images/emoji6.png") },
	]);

	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={Platform.OS === "web"}
			data={emoji}
			contentContainerStyle={styles.listContainer}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Pressable
					onPress={() => {
						onSelect(item.source);
						onCloseModal();
					}}
				>
					<Image source={item.source} style={styles.image} testID={item.id} />
				</Pressable>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	image: {
		width: 100,
		height: 100,
		marginRight: 20,
	},
});
