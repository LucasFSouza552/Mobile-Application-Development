import { useEffect, useReducer, useState } from "react";
import Item from "../models/item";
import { Alert } from "react-native";
import ItemService from "../services/itemService";

interface State {
    items: Item[];
    editingItem: Item | null;
    inputText: string;
    modalVisible: boolean;
}

const initialState: State = {
    items: [],
    editingItem: null,
    inputText: '',
    modalVisible: false,
};

function reducer(state: typeof initialState, action: any) {
    switch (action.type) {
        case 'CLOSE_MODAL':
            return { ...state, inputText: '', editingItem: null, modalVisible: false, items: action.payload };
        case 'OPEN_ADD_MODAL':
            return { ...state, inputText: '', editingItem: null, modalVisible: true, items: action.payload };
        case 'OPEN_EDIT_MODAL':
            return { ...state, inputText: action.payload.title, editingItem: action.payload, modalVisible: true, items: action.payload };
        case 'ADD_ITEM':
            return { ...state, inputText: action.payload.title, editingItem: null, modalVisible: false, items: action.payload };
        case 'UPDATE_ITEM':
            return { ...state, inputText: '', editingItem: action.payload, modalVisible: false, items: action.payload };
        case 'DELETE_ITEM':
            return { ...state, inputText: '', editingItem: null, modalVisible: false, items: action.payload };
        case 'SET_INPUT_TEXT':
            return { ...state, inputText: action.payload };
        case 'LOAD_ITEMS':
            return { ...state, items: action.payload };
        default:
            return state;
    }
}

export const useItemController = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL', payload: ItemService.getAllItems() });
    };

    const openAddModal = () => {
        dispatch({ type: 'OPEN_ADD_MODAL', payload: ItemService.getAllItems() });
    };

    const openEditModal = (item: Item) => {
        dispatch({ type: 'OPEN_EDIT_MODAL', payload: item });
    };

    const addItem = async () => {
        if (!state.inputText.trim()) {
            Alert.alert('Erro', 'Digite um título');
            return;
        }

        await ItemService.addItem(state.inputText.trim(), 100, 100);
        dispatch({ type: 'ADD_ITEM', payload: ItemService.getAllItems() });
    };


    const updateItem = () => {
        if (!state.inputText.trim() || !state.editingItem) {
            Alert.alert('Erro', 'Digite um título');
            return;
        }

        dispatch({ type: 'UPDATE_ITEM', payload: ItemService.getAllItems() });
    };

    const deleteItem = () => {
        if (!state.editingItem) return;

        dispatch({ type: 'DELETE_ITEM', payload: ItemService.getAllItems() });
    };

    useEffect(() => {
        dispatch({type: 'LOAD_ITEMS', payload: ItemService.getAllItems()});
    }, [])

    const setInputText = (text: string) => {
        console.log(text)
        state.inputText = dispatch({ type: 'SET_INPUT_TEXT', payload: text });
    }

    return {
        ...state,
        setInputText,
        addItem,
        updateItem,
        deleteItem,
        closeModal,
        openAddModal,
        openEditModal,
        dispatch
    }

}
