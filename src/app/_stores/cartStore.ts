import { create } from "zustand"
import { combine,persist } from "zustand/middleware"

import { Item } from "@/models/item"

type InitialState = { cart: Item[] }
type SetState = { add: (item: Item) => void, remove: (id: string) => void, get: () => Item[], clear: () => void }

export const useCartStore = create(
    persist(
        combine<InitialState, SetState>(
            { cart: [] },
            (set, get) => ({
                add: item => set(state => {
                    if (!state.cart.find(cartItem => cartItem.id === item.id))
                        state.cart.push(item)

                    return {
                        cart: state.cart
                    }
                }),
                remove: id => set(state => {
                    return {
                        cart: state.cart.filter(cartItem => cartItem.id !== id)
                    }
                }),
                clear: () => set(() => {
                    return {
                        cart: []
                    } 
                }),
                get: () => {
                    return get().cart
                }
            })
        ),
        {
            name: "cart-store"
        }
    )
)