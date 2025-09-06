import Item from "../models/item";

class ItemService {
    private items: Item[] = [
        { id: '1', title: 'Item Exemplo 1' },
        { id: '2', title: 'Item Exemplo 2' },
    ];

    private generateId = () => Date.now().toString();

    getAllItems() {
        return this.items;
    }

    addItem(title: string) {
        const newItem: Item = {
            id: this.generateId(),
            title
        };

        this.items.push(newItem);
    }

    updateItem(item: Item) {
        const updatedItemIndex = this.getAllItems().findIndex((f) => f.id === item.id);
        if (updatedItemIndex !== -1)
            this.items[updatedItemIndex] = item;
    }

    deleteItem(id: string) {
        this.items = this.items.filter(item => item.id !== id)
    }
}

export default new ItemService();