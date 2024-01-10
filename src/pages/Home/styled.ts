import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 7.75rem;

  section {
    &:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 3.5rem;

      .landing-info {
        h1 {
          font-family: "Baloo 2", "Roboto";
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.3;
        }

        p {
          font-size: 1.25rem;
          line-height: 1.3;

          margin-top: 1rem;
        }

        .advantages {
          display: flex;
          gap: 2.5rem;
          margin-top: 4.125rem;

          > div {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
        }
      }
    }

    &:last-child {
      margin-bottom: 5rem;

      h2 {
        margin-bottom: 3.38rem;
      }

      > div {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
      }
    }
  }
`;
