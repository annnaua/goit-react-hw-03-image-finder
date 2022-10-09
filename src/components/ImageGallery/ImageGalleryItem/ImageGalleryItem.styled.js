import styled from 'styled-components';

export const ImageItem = styled.li`
  box-sizing: border-box;
  margin: 0;

  border-radius: 8px;
  /* padding: 16px; */

  /* border: 3px solid #111827; */

  height: 340px;
  overflow: hidden;

  cursor: pointer;
`;

export const ImageGalleryImg = styled.img`
  display: block;

  object-fit: cover;
  width: 100%;
  height: 100%;

  border-radius: 4px;
`;
