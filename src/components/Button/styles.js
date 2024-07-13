import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: 120px;
  padding: 12px 2px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);

  font-size: 14px;

  &:hover {
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
`;
