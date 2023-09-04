import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const LoginPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const Link = styled(NavLink)`
  margin: 0 2px;
  padding: 2px 10px;
  background-color: rgba(51, 113, 121, 0.9);
  border-radius: 5px;
  height: 20px;

  h4 {
    color: white;
  }

  h4:nth-child(even) {
    padding: 0 5px;
  }

  @media (max-width: 991px) {
    margin: 10px 0;
  }
  
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  color: white;
  text-decoration: none;

  h4:hover {
    color: #c1c1c1;
  }

  &:hover {
    background-color: rgba(51, 113, 121, 0.7);
  }
`;