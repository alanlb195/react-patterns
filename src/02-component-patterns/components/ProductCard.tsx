import { createContext, type ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import type { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties | undefined;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
    // console.log(styles);
    const { counter, handleAdd } = useProduct();

    return (
        <Provider value={{
            counter,
            handleAdd,
            product
        }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}
            >

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

