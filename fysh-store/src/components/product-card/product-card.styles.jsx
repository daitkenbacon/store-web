import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../button/button.component'
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from '../button/button.styles';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    img {
      opacity: 0.8;
      transition: .2s;
    }

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      opacity: 0.85;
      transition: .2s;
      display: flex;
    }
  }
`
export const ProductCardImg = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`

export const ProductCardButton = styled(Button)`
  width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
` 

export const ProductCardFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  `
export const ProductCardName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`
export const ProductCardPrice = styled.span`
    width: 10%;
`