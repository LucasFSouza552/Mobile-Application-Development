import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import Card, { cardProps } from "./components/Card";
import ButtonStyled from "./components/buttonStyled";
import AddItemModal from "./components/modalStyled";

export default function App() {
  const [cardsList, setCardsList] = useState<cardProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  // A função agora recebe todos os três campos do modal
  function adicionarCard(title: string, subtitle: string, image: string) {
    const novoCard: cardProps = { title, subtitle, image };
    setCardsList((prev) => [...prev, novoCard]);
    console.log("Novo Card Adicionado:", novoCard);
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
        contentContainerStyle={cardsList.length === 0 ? styles.emptyContainer : null}
      />

      <ButtonStyled title="Adicionar Item" onPress={() => setModalVisible(true)} />

      {/* Passando a função 'adicionarCard' para a prop 'onAdd' */}
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
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "#777",
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  }
});