import styled from 'styled-components';

interface DropdownProps {
  isOpen: boolean;
};

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 15px;
  width: 90%;
  margin: 0 auto;
`;

export const Dropdown = styled.div<DropdownProps>`
  width: 100px;
  z-index: 2;
  border: 1px solid black;
  margin-left: 3px;
  background-color: white;

  .dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    cursor: pointer;
    
    svg {
      color: #212224;
      transition: all .3s ease-in-out;
      transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : ''};
    }
  }

  ul {
    background-color: white;
    position: absolute;
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
    border: 1px solid black;
    width: 100px;
    transform: translateX(-1px);

    li {
      display: flex;
      align-items: center;
      justify-items: start;
      border-top: 1px black solid; 
      list-style: none;
      padding: 4px;

      &:hover {
        cursor: pointer;
        background-color: rgb(196, 186, 186);
      }
    }
  }
`;