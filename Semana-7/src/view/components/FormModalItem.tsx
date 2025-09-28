import { TextInput, TouchableOpacity, View, Text, StyleSheet, Modal } from "react-native";
import Item from "../../models/item";
import { useTheme } from "react-native-paper";

interface Props {
    editingItem?: Item | null;
    inputText: string;
    setInputText: (t: string) => void;
    updateItem: () => void;
    closeModal: () => void;
    deleteItem: () => void;
    addItem: () => void;
    modalVisible: boolean
}

export const FormModalItem: React.FC<Props> = ({
    editingItem,
    inputText,
    setInputText,
    updateItem,
    closeModal,
    deleteItem,
    addItem,
    modalVisible
}) => {

    const { colors } = useTheme();

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
        >
            <View style={styles.modalOverlay}>
                <View style={[styles.dialog, { backgroundColor: colors.primary }]}>
                    <Text style={styles.modalTitle}>
                        {editingItem ? 'Editar Item' : 'Novo Item'}
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o título"
                        value={inputText}
                        onChangeText={setInputText}
                    />

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={closeModal}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>

                        {editingItem && (
                            <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={deleteItem}>
                                <Text style={[styles.buttonText, styles.deleteButtonText]}>Excluir</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity
                            style={styles.button}
                            onPress={editingItem ? updateItem : addItem}
                        >
                            <Text style={styles.buttonText}>
                                {editingItem ? 'Salvar' : 'Adicionar'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialog: {
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#ddd',
        padding: 10,
    },
    button: {
        backgroundColor: '#ddd',
        padding: 8,
        flex: 1,
        marginHorizontal: 4,
        alignItems: 'center',
        borderRadius: 4,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
    },
    deleteButton: {
        backgroundColor: '#ffebee',
    },
    deleteButtonText: {
        color: '#d32f2f',
    },
});