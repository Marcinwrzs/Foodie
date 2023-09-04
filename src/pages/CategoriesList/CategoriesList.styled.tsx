import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const ListWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled(NavLink)`
  display: flex;
  border: 1px solid black;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  color: black;
  text-decoration: none;
  width: 250px;
  height: 70px;
  margin-top: 20px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    
    object-fit: cover;
  }

  h4 {
    color: white;
    position: absolute;
  }

  &:hover {
    box-shadow: 1px 1px 7px gray;
  }
`;