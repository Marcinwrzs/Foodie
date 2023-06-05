import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const LoginPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    padding: 2px 10px;
    background-color: rgba(51, 113, 121, 0.9);
    border-radius: 5px;

    h4 {
        color: white;
    }

    h4:nth-child(even) {
        padding: 0 5px;
    }

    @media (max-width: 991px) {
      margin: 20px 0;
    }
`;

export const Slink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  color: white;
  text-decoration: none;

  @media (max-width: 991px) {
    color: #f8faf2;
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