import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoElement = styled.div`  
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

export const Logolink = styled(NavLink)`
  color: white;
  text-decoration: none;
  text-align: center;

  &.active {
    h3 {
      color: #FFA500;
    }
`;