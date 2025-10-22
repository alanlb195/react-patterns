import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import type { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
    // console.log(styles);
    const { counter, handleAdd } = useProduct();

    return (
        <Provider value={{
            counter,
            handleAdd,
            product
        }}>
            <div className={styles.productCard}>

                {children}
                {/* <ProductImage img={product.img} /> */}
                {/* <img className={styles.productImg} src={product.img ? product.img : noImage} alt="Coffee Mug" /> */}

                {/* <ProductTitle title={product.title} /> */}
                {/* <span className={styles.productDescription}>{product.title}</span> */}


                {/* <ProductButtons counter={counter} handleAdd={handleAdd} /> */}
                {/* <div className={styles.buttonsContainer}>
                    <button className={styles.buttonMinus} onClick={() => handleAdd(-1)}>-</button>
                    <div className={styles.countLabel}>{counter}</div>
                    <button className={styles.buttonAdd} onClick={() => handleAdd(+1)}>+</button>
                </div> */}

            </div>
        </Provider>

    )
}

// ProductCard.Image   = ProductImage;
// ProductCard.Title   = ProductTitle;
// ProductCard.Buttons = ProductButtons;

