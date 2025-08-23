import { StyleSheet, Text, View, TextInput } from 'react-native';

type inputProps = {
    label: string,
    placeholder: string,
    value: string,
    updateInput: (str: string) => void
}

export default function InputStyled({ label, placeholder, value, updateInput }: inputProps) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={updateInput} />
        </View>
    )
}