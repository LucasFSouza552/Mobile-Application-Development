import { Image, StyleSheet, Text, View } from "react-native";

export type cardProps = {
    title: string,
    subtitle: string,
    image: string
}

export default function Card({ title, subtitle, image }: cardProps) {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={{
                    uri: image,
                }}
                style={styles.imageCard}
            />
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    imageCard: {
        width: 500,
        height: 300,
    }

});