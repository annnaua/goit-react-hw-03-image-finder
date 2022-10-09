import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px auto;

  max-width: 90%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  grid-gap: 32px;
`;
