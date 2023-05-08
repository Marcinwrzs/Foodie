import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

interface NavigationProps {
  isOpen: boolean;
}

export const Navigation = styled.div<NavigationProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-align: center;

  @media (max-width: 991px) {
    flex-flow: column nowrap;
    background-color: rgba(98, 165, 161, 0.85);
    border-top: 1px solid black;
    position: absolute;
    top: 0;
    right: 0;
    height: calc(100% - 80px);
    overflow: hidden;
    min-height: 420px;
    z-index: 99;
    width: 100%;
    margin-top: 80px;
    padding: 20px;
    max-width: 100%;
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  }
`;

export const Slink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  color: white;
  text-decoration: none;
  margin: 0 20px;

  @media (max-width: 991px) {
    margin: 20px 0;
  }

  h4:hover {
    color: #c1c1c1;
  }
`;