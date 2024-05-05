import { Component, ReactNode } from "react";
import ShoppingCart from "./ShoppingCart";
import ShoppingCartItem from "./ShoppingCartItem";
import { Item } from "@/models/item";

export default class ShoppingCartRenderer extends Component<{}, {[id: string]: ShoppingCartItem}> {

    constructor(props: {}) {
        super({});

        let state: {[id: string]: ShoppingCartItem} = {};

        for(let item of ShoppingCart.itemList()) {
            state[item.item.id] = new ShoppingCartItem({item: item.item});
        }

        this.state = state;

        ShoppingCart.addEventListener("create", this.createItem);
        ShoppingCart.addEventListener("delete", this.deleteItem);
    }

    private createItem(item: Item) {
        let newState = {...this.state};
        newState[item.id] = new ShoppingCartItem({item: item});
        this.setState(newState);
    }

    private deleteItem(item: Item) {
        let newState = {...this.state};
        delete newState[item.id];
        this.setState(newState);
    }

    override render() {
        return <div>{ Object.values(this.state).map(v => v.render()) }</div>
    }

    override componentWillUnmount(): void {
        ShoppingCart.removeEventListener("create", this.createItem);
        ShoppingCart.removeEventListener("delete", this.deleteItem);
    }
}