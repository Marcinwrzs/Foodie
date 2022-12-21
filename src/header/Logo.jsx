import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/Globalstate';
import styled from 'styled-components';
import {GiCampCookingPot} from 'react-icons/gi';

const Logo = () => {

  const {goPage} = useContext(GlobalContext);

  return (
    <LogoElement>
      <Logolink to={'/'} onClick={goPage}>
          <GiCampCookingPot/>
          <h3>Foodie</h3>
      </Logolink>
    </LogoElement>
  )
};

const LogoElement = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-size: 15px;

  svg {
    font-size: 45px;
    width: 100%;
  }
}
`;

const Logolink = styled(NavLink)`
  color: white;
  text-decoration: none;
  text-align: center;

  &.active {
    h3 {
      color: #FFA500;
    }
`;

export default Logo;