import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from "react-native";

type AddItemModalProps = {
  visible: boolean;
  onClose: () => void;
  onAdd: (titulo: string, descricao: string, imagem: string) => void;
};

import { useState } from "react";

export default function AddItemModal({ visible, onClose, onAdd }: AddItemModalProps) {
  const [title, setTitulo] = useState("");
  const [description, setDescricao] = useState("");
  const [image, setImagem] = useState("");

  function handleAdd() {
    if (!title.trim()) return;
    onAdd(title, description, image);
    setTitulo("");
    setDescricao("");
    setImagem("");
    onClose();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitulo}>Novo Item</Text>

        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescricao}
        />
        <TextInput
          style={styles.input}
          placeholder="URL da imagem"
          value={image}
          onChangeText={setImagem}
        />

        <TouchableOpacity style={styles.botaoAdicionar} onPress={handleAdd}>
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoAdicionar, { backgroundColor: "#999" }]}
          onPress={onClose}
        >
          <Text style={styles.textButton}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  modalTitulo: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  botaoAdicionar: {
    backgroundColor: "#4a90e2",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 6,
  },
  textButton: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
