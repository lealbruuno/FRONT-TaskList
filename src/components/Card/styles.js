import styled from "styled-components";

export const Container = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    width: 250px;
    height: 200px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);

    cursor: pointer;
  }

  &:hover {
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
  }

  //CARD TITLE

  .card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    > h1 {
      font-size: 14px;

      max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .card-title-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
  }

  .card-title-task {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-right: 10px;
  }

  .card-title-edit {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    cursor: pointer;
  }

  .card-title-delete {
    color: ${({ theme }) => theme.COLORS.RED};
    cursor: pointer;
  }

  //CARD DESCRIPTION

  .card-description {
    display: -webkit-box;
    -webkit-line-clamp: 7;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
`;
