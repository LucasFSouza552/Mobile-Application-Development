import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import InputStyled from "./inputStyled"; // Importando o componente de input

type AddItemModalProps = {
  visible: boolean;
  onClose: () => void;
  onAdd: (titulo: string, descricao: string, imagem: string) => void;
};

export default function AddItemModal({ visible, onClose, onAdd }: AddItemModalProps) {
  const [title, setTitulo] = useState("");
  const [description, setDescricao] = useState("");
  const [image, setImagem] = useState("");

  function handleAdd() {
    if (!title.trim() || !description.trim() || !image.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    onAdd(title, description, image);
    setTitulo("");
    setDescricao("");
    setImagem("");
    onClose();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Adicionar Novo Card</Text>

          <InputStyled
            label="Título"
            placeholder="Título do card"
            value={title}
            updateInput={setTitulo}
          />
          <InputStyled
            label="Descrição"
            placeholder="Descrição do card"
            value={description}
            updateInput={setDescricao}
          />
          <InputStyled
            label="URL da Imagem"
            placeholder="URL da imagem (ex: https://...)"
            value={image}
            updateInput={setImagem}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#4a90e2",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 6,
  },
  cancelButton: {
    backgroundColor: "#999",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});