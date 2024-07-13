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

  //FORM

  .form {
    display: flex;
    flex-direction: column;
    padding: 10px 24px;
    gap: 10px;

    > h1 {
      font-size: 14px;
    }

    .section {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
      box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      width: 340px;

      &:hover {
        box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
      }

      > input {
        border: none;
        outline: none;
        width: 300px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
      }
    }

    .section-img {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > textarea {
      height: 350px;

      padding: 10px 34px;
      outline: none;
      border: none;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
      box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
      border-radius: 8px;

      &:hover {
        box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
      }
    }
  }

  //FORM - BUTTONS

  .button-back {
    position: fixed;
    bottom: 12px;
    right: 150px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .button-save {
    position: fixed;
    bottom: 12px;
    right: 12px;
  }
`;
