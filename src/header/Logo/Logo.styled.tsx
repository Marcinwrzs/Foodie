import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-size: 15px;

  svg {
    font-size: 45px;
    width: 100%;

    &:hover {
      color: #c1c1c1;
    }
  }
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  text-align: center;

  h3:hover {
    color: #c1c1c1;
  }
`;