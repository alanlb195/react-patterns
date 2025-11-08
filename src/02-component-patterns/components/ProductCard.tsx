import { createContext, type JSX } from 'react';

import { useProduct } from '../hooks/useProduct';
import type { InitialValues, Product, ProductCardhandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardhandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties | undefined;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
    // console.log(styles);
    const { counter, increseBy, maxCount, isMaxCountReached, reset,  } = useProduct({
        onChange,
        product,
        value,
        initialValues,
    });

    return (
        <Provider value={{
            counter,
            increseBy,
            product,
            maxCount
        }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}
            >

                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    reset,
                    increseBy
                })}
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

