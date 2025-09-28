import Item from "../models/item";
import * as imageApi from "../api/imageApi";

class ItemService {
    private items: Item[] = [];

    private generateId = () => Date.now().toString();

    getAllItems() {
        return this.items;
    }

    async addItem(title: string, width: number, height: number) {
        const image = await imageApi.getImage(width, height);
        const newItem: Item = {
            id: this.generateId(),
            title,
            image: image.url
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