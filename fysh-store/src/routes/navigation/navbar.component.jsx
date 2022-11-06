import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { NavigationContainer, NavLink, NavLinksContainer, LogoContainer } from './navigation.styles.jsx';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';


const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
            <CrwnLogo className='logo'/>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutHandler} >SIGN OUT</NavLink>
            ) : <NavLink to='/auth'>SIGN IN</NavLink>
          }
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet /> 
    </Fragment> 
  )
}

export default NavBar;