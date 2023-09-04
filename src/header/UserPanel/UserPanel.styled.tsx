import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Link = styled(NavLink)`
  margin-left: 10px;
  padding: 2px 10px;
  background-color: rgba(51, 113, 121, 0.9);
  border-radius: 5px;
  height: 20px;
  
  &:hover {
    background-color: rgba(51, 113, 121, 0.7);
  }

  h4 {
    color: white;
  }

  h4:nth-child(even) {
    padding: 0 5px;
  }

  @media (max-width: 991px) {
    margin: 20px 0;
  }
  
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  color: white;
  text-decoration: none;

  &:hover {
    h4, svg {
      color: #c1c1c1;
    }
  }
`;