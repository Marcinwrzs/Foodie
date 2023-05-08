import styled from 'styled-components';

interface StyledBurgerProps {
  isOpen: boolean;
}

export const StyledBurger = styled.div<StyledBurgerProps>`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  right: 40px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 991px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    color: red;
    width: 33px;
    height: 4px;
    background-color: ${({ isOpen }) => isOpen ? '#ccc' : '#f8faf2'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;