import styled from 'styled-components';

export const SearchBar = styled.header`
  box-sizing: border-box;

  padding: 16px;
  background-color: #e2e2e2e2;
`;

export const SearchForm = styled.form`
  box-sizing: border-box;

  width: 580px;

  padding: 16px;
  margin: 0px auto;

  display: flex;
  gap: 16px;
`;

export const SearchFormInput = styled.input`
  box-sizing: border-box;

  width: 100%;
  height: 48px;
  padding: 8px;
  background-color: #ffffff;

  border: 3px solid #111827;
  border-radius: 4px;
  outline: 0px;

  font-size: 18px;
  color: #111827;

  :hover,
  :focus {
    border: 3px solid #6366f1;
  }
`;

export const SearchFormButton = styled.button`
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

  :hover,
  :focus {
    background-color: #6366f1;
  }

  cursor: pointer;
`;
