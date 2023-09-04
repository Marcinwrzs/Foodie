import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const OuterContainer = styled.div`
  margin: 20px auto;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  font-weight: bold;
  color: rgb(98, 165, 161);
  
  &:hover {
    color: rgba(98, 165, 161, 0.5);
  }
`;