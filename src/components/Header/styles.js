import styled from "styled-components";

export const Container = styled.div`
  //DESKTOP
  .header {
    display: flex;
    justify-content: space-between;

    padding: 20px 24px;
    position: fixed;
    top: 0px;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .navbar-search {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

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

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .profile-name {
    font-size: 12px;
  }

  .profile-img {
    width: 45px;
    height: 45px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    cursor: pointer;
    border-radius: 50%;
  }

  .profile-img:hover {
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.3);
  }

  //MOBILE
  @media (max-width: 520px) {
    .header {
      justify-content: center;
    }

    .profile {
      display: none;
    }
  }
`;
