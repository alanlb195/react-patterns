import styles from '../styles/styles.module.css';



// interface ProductButtonsProps {
//     counter: number;
//     handleAdd: (value: number) => void;
// }s


import { useContext } from "react"
import { ProductContext } from "./ProductCard"

export const ProductButtons = ({ }
    // : ProductButtonsProps
) => {
    const { counter, handleAdd } = useContext(ProductContext)
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => handleAdd(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => handleAdd(+1)}>+</button>
        </div>
    )
}