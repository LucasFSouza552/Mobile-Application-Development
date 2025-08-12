import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu Primeiro Projeto!!</Text>
      <Image
        style={{ width: 300, height: 200 }}
        source={{ uri: "https://fastly.picsum.photos/id/238/400/400.jpg?hmac=EZ0gF5HUYfUrZCh1uVdIt0KZVfEf_oAnlX69srXrS2w" }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
