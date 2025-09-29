import { TextInput, TouchableOpacity, View, Text, StyleSheet, Modal, Dimensions, useWindowDimensions } from "react-native";
import Item from "../../models/item";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

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

    const styles = useResponsiveStyles();
    const { colors } = useTheme();

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
        >
            <SafeAreaView style={styles.modalOverlay}>
                <View style={[styles.dialog, { backgroundColor: colors.primary }]}>
                    <Text style={[styles.modalTitle, { color: colors.tertiary }]}>
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
            </SafeAreaView>
        </Modal>
    )
}

const useResponsiveStyles = () => {
    const { width, height } = useWindowDimensions();
    const base = Math.min(width, height);

    return StyleSheet.create({
        modalOverlay: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        dialog: {
            borderRadius: base * 0.02,
            padding: base * 0.04,
            width: Math.min(width * 0.9, 500),
            backgroundColor: "#fff"
        },
        modalTitle: {
            fontSize: Math.min(Math.max(base * 0.05, 16), 22),
            fontWeight: 'bold',
            marginBottom: base * 0.02,
            textAlign: "center"
        },
        input: {
            borderWidth: 2,
            borderRadius: base * 0.015,
            backgroundColor: '#ddd',
            padding: base * 0.02,
        },
        button: {
            backgroundColor: '#ddd',
            paddingVertical: base * 0.015,
            paddingHorizontal: base * 0.04,
            flex: 1,
            marginHorizontal: base * 0.01,
            alignItems: 'center',
            borderRadius: base * 0.015,
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: base * 0.02,
        },
        buttonText: {
            fontSize: Math.min(Math.max(base * 0.04, 14), 18),
            fontWeight: '500',
        },
        deleteButton: {
            backgroundColor: '#ffebee',
        },
        deleteButtonText: {
            color: '#d32f2f',
        },
    });
};