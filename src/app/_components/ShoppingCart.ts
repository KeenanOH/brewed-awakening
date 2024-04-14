"use client";

import { Item } from "@/models/item";

type CartData = {amount: number, item: Item};
type DehydratedCart = {[id: string]: number};

export default class ShoppingCart {
    private static cart: {[id: string]: CartData} = {};
    private static eventListeners: {delete: Set<(item: Item) => void>, create: Set<(item: Item) => void>, set: {[id: string]: Set<(item: Item) => void>}} = {
        delete: new Set(),
        create: new Set(),
        set: {}
    };

    private constructor() {} // This class cannot be instantiated

    public static loadCart(itemGetter: (id: string) => Item | undefined) { // TODO Call from loader function
        var prevCart = localStorage.getItem("cart");
        this.cart = {};
        if(prevCart !== null) {
            try {
                let dehydrated: DehydratedCart = JSON.parse(prevCart);

                for(let id in dehydrated) {
                    let item = itemGetter(id);
                    if(item === undefined) continue; // If an item has been removed from the store, remove it from their order
                    this.cart[id] = {item: item, amount: dehydrated[id]}; // Store info about the item being ordered along with the amount
                }
            } catch {}
        }
    }

    private static saveCart() {
        var dehydrated: DehydratedCart = {};
        // This is to make sure that a person that comes back after a long time sees the updated info for their items.

        for(var id in this.cart) {
            dehydrated[id] = this.cart[id].amount;
        }

        localStorage.setItem("cart", JSON.stringify(dehydrated));
    }

    public static getAmount(item: Item) {
        if(this.cart.hasOwnProperty(item.id)) {
            return this.cart[item.id].amount;
        } else {
            return 0;
        }
    }

    public static setAmount(item: Item, amount: number) {
        if(amount > 0) {
            if(this.cart.hasOwnProperty(item.id)) {
                this.cart[item.id].amount = amount;
                this.eventListeners.set[item.id].forEach(v => v(item));
            } else {
                this.cart[item.id] = {amount: amount, item: item};
                this.eventListeners.create.forEach(v => v(item));
            }
        } else {
            delete this.cart[item.id];
            this.eventListeners.delete.forEach(v => v(item));
        }
        this.saveCart();
    }

    public static itemList() {
        return Object.values(this.cart);
    }

    public static addItem(item: Item) {
        this.setAmount(item, this.getAmount(item) + 1);
    }

    public static removeItem(item: Item) {
        this.setAmount(item, this.getAmount(item) - 1);
    }

    public static removeAllItem(item: Item) {
        this.setAmount(item, 0);
    }

    public static addEventListener(event: "create" | "delete" | Item, callback: (item: Item) => void) {
        if(typeof event === "string") {
            this.eventListeners[event].add(callback);
        } else {
            if(!this.eventListeners.set.hasOwnProperty(event.id))
                this.eventListeners.set[event.id] = new Set();
            this.eventListeners.set[event.id].add(callback);
        }
    }

    public static removeEventListener(event: "create" | "delete" | Item, callback: (item: Item) => void) {
        if(typeof event === "string") {
            this.eventListeners[event].delete(callback);
        } else {
            this.eventListeners.set[event.id].delete(callback);
            if(this.eventListeners.set[event.id].size === 0)
                delete this.eventListeners.set[event.id];
        }
    }
}
