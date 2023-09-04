import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SignUpContainer = styled.div`
  text-align: center;
    
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;

    input {
      margin: 10px 0;
    }
  }
`;

export const Button = styled.button`
  color: black;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid black;
  background-color: rgba(0,0,0,0);

  &:hover {
  background-color: rgba(0,0,0,0.1);
  }
`;

export const Link = styled(NavLink)`
  color: #62a5a1;
  font-weight: bold;

  &:hover {
    color: rgba(98, 165, 161, 0.6);
  }
`;