import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  box-sizing: border-box;
  display: block;

  width: fit-content;
  height: 48px;
  padding: 8px 16px;
  background-color: #111827;

  border: 3px solid #111827;
  border-radius: 4px;
  outline: 0px;

  font-size: 18px;
  font-weight: 600;

  color: #ffffff;
  text-transform: uppercase;

  margin: 0 auto;

  :hover,
  :focus {
    background-color: #6366f1;
  }

  cursor: pointer;
`;
