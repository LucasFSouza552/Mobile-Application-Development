import Item from "../models/item"

export type RootStackParamsList = {
    SplashView: undefined,
    ItemView: undefined,
    ItemFullView: { item: Item }
}