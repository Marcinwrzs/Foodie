import styled from 'styled-components';

export const PagesCountainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  height: ${({ isOpen }) => isOpen ? 'calc(100% - 80px)' : ''};
  overflow-y: ${({ isOpen }) => isOpen ? 'hidden' : ''};

  @media (max-width: 991px) {
    filter: ${({ isOpen }) => isOpen ? 'blur(8px)' : ''};
    }
`;