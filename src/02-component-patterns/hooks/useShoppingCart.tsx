import { useState } from "react";
import type { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});
    // console.log(shoppingCart);
    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        console.log('onProductCountChange', count, product);

        setShoppingCart(oldShoppingCart => {

            // old implementation witout controlled flag on useProduct
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                console.log({ toDelete })
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            };
        });
    }

    return {
        // constants
        shoppingCart,
        // methods
        onProductCountChange,
    }
}
