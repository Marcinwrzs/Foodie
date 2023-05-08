import styled from 'styled-components';

interface PagesContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const PagesContainer = styled.div<PagesContainerProps>`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  height: ${({ isOpen }) => isOpen ? 'calc(100% - 80px)' : ''};
  overflow-y: ${({ isOpen }) => isOpen ? 'hidden' : ''};

  @media (max-width: 991px) {
    filter: ${({ isOpen }) => isOpen ? 'blur(8px)' : ''};
    }
`;