import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Slink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  color: white;
  text-decoration: none;

  @media (max-width: 991px) {
    color: #f8faf2;
    margin-top: 20px;
    order: 3;
    padding-top: 5px;
  }

  h4 {
    margin-left: 4px;
  }

  h4:hover {
    color: #c1c1c1;
  }
  
  &.active {
    svg {
      color: #FFA500;
    }
  }
`;