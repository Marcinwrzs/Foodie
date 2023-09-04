import styled from 'styled-components';

export const LogoutPanel = styled.div`  
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

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 2px 10px;
  background-color: rgba(51, 113, 121, 0.9);
  border-radius: 5px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  color: white;
  text-decoration: none;

  svg {
    font-size: 20px;
    color: white;
  }

  &:hover {
    background-color: rgba(51, 113, 121, 0.7);

    svg {
      color: #c1c1c1;
    }
  }

  @media (max-width: 991px) {
    margin: 10px 0;
  }
`;