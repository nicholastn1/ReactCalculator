import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #00abf0;
  padding: 30px;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1.5rem;
  font-weight: 600;
  flex: 1;

  &:hover {
    opacity: 0.8;
  }
`;
