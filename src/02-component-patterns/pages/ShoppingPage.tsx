import {
    ProductCard,
    ProductButtons,
    ProductImage,
    ProductTitle
} from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: 'coffee-mug.png',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>

            <hr />

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    {/* Compound component pattern #1 */}
                    <ProductImage className="product-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />

                </ProductCard>

                {/* Compound component pattern #2 */}
                <ProductCard
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image className="product-image" />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                {/* to manage ReactStyles */}
                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#485cd0ff',
                    }}
                >
                    {/* Compound component pattern #1 */}
                    <ProductImage
                        className='product-image'
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }}
                    />
                    <ProductTitle
                        style={{
                            display: 'block',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                    />
                    <ProductButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            borderColor: 'white'
                        }}
                    />

                </ProductCard>
            </div>


        </div>
    )
}
