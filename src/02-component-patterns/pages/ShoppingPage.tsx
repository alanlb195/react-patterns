import {
    ProductCard,
    ProductButtons,
    ProductImage,
    ProductTitle
} from '../components';

import '../styles/custom-styles.css';

import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ count, maxCount, increseBy, isMaxCountReached, reset }) => (
                        <>
                            <ProductImage className="product-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increseBy(-2)}>-2</button>
                            {
                                ( !isMaxCountReached && <button onClick={() => increseBy(+2)}>+2</button> )
                            }
                            <span>{count} - { maxCount }</span>
                            {/* { JSON.stringify(args, null, 3) } */}
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
