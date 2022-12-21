import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Categories = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

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
  margin-right: 25px;
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

  &.active {
    svg {
      color: #FFA500;
    }
  }
`;