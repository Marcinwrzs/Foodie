import styled from 'styled-components';

export const ActionButton = styled.button`
  width: 10%;
  max-width: 35px;
  height: 35px;
  background-color: rgba(0,0,0, 0);
  cursor: pointer;
  margin: 1px;
  border: none;
  
  svg {
    font-size: 20px;
    color: #bca426;
  }

  &:hover {
    background-color: rgba(0,0,0, 0.1);
  }

  &:disabled {
    opacity: 0.3;
  }
`;