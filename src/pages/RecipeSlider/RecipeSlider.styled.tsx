import styled from 'styled-components';

export const Sbutton = styled.button`
    background-color: rgba(0,0,0,0);
    width: 50px;
    cursor: pointer;
    position: absolute;
    top: calc(45% - 25px); 
    z-index: 1;
    height: 50px;
    color: #62a5a1;
    border: 2px solid #62a5a1;
    font-size: 20px;
    
    @media (max-width: 800px) {
      margin: 0 20px;
    } 

    &:hover {
      background-color: #62a5a1;
      color: white;
    }
 
    &::before {
      display: none;
    }
`;