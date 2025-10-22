import styles from '../styles/styles.module.css';



export interface Props {
    className?: string;
    style?: React.CSSProperties; 
}


import { useContext } from "react"
import { ProductContext } from "./ProductCard"

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, handleAdd } = useContext(ProductContext)
    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => handleAdd(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => handleAdd(+1)}>+</button>
        </div>
    )
}