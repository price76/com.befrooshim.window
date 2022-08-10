import { CartListItem } from "./cartListItem";

export interface Cart {
    storeId: string,
    listItem: CartListItem[]
}