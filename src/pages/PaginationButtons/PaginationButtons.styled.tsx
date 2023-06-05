import styled from 'styled-components';

export const PaginationButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: 220px;
  margin: 15px auto 0;
  font-size: 20px;
  border: 1px solid black;
  box-sizing: content-box;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 40px;
  background-color: transparent;
  font-size: 35px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }

  &:disabled {
    cursor: default;
    color: #b4adad;
  }
`;

export const PageNumber = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: transparent;
  font-size: 20px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }
  
  &.active {
    background-color: #62a5a1;
  }
`;