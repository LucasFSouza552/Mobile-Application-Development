import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


type ButtonProps = {
    title: string;
    onPress: () => void;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default function ButtonStyled({title, onPress}: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}