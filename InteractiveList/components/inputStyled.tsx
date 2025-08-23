import { StyleSheet, Text, View, TextInput } from 'react-native';

type inputProps = {
    label: string,
    placeholder: string,
    value: string,
    updateInput: (str: string) => void
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 10,
        fontSize: 16,
        marginBottom: 12,
    },
})

export default function InputStyled({ label, placeholder, value, updateInput }: inputProps) {
    return (
        <View style={styles.input}>
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={updateInput} />
        </View>
    )
}