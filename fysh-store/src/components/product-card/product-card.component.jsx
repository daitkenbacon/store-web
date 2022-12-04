import { ProductCardContainer, ProductCardFooter, ProductCardImg, ProductCardName, ProductCardPrice, ProductCardButton } from './product-card.styles.jsx'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import { useContext } from 'react';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)

    return (
    <ProductCardContainer>
        <ProductCardImg src={imageUrl} alt={`${name}`} />
        <ProductCardFooter>
            <ProductCardName>{name}</ProductCardName>
            <ProductCardPrice>{price}</ProductCardPrice>
        </ProductCardFooter>
        <ProductCardButton onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</ProductCardButton>
    </ProductCardContainer>
    )
}

export default ProductCard;