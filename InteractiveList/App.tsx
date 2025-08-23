import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import Card, { cardProps } from "./components/Card";
import ButtonStyled from "./components/buttonStyled";
import AddItemModal from "./components/modalStyled";

export default function App() {
  const [cardsList, setCardsList] = useState<cardProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function adicionarCard(title: string, subtitle: string, image: string) {
    const novoCard: cardProps = { title, subtitle, image };
    setCardsList((prev) => [...prev, novoCard]);
  }

  const renderItem = ({ item }: { item: cardProps }) => <Card {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Lista de Cards</Text>

      <FlatList
        data={cardsList}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum card adicionado ainda.</Text>
        }
      />

      <ButtonStyled title="Adicionar Item" onPress={() => setModalVisible(true)} />

      <AddItemModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={adicionarCard}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 12,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
  },
});
