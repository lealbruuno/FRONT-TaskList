import styled from "styled-components";

export const Container = styled.div`
  .title {
    font-size: 22px;

    padding: 10px 24px;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 20px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  }

  //CARDS
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
  }

  button {
    position: fixed;
    bottom: 12px;
    right: 12px;
  }
`;
