import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  background: white;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 12px;
  justify-content: center;
`;

export const Card = styled.div.attrs((props) => ({
  rank: props.rank,
}))`
  background: #999;
  width: 520px;
  border-radius: 4px;
  height: 180px;
  display: flex;
  margin: 4px;
  flex-direction: row;
  align-items: center;

  img {
    margin-left: 16px;
    width: 140px;
    height: 140px;
    border-radius: 4px;
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.2);
  }

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    text-transform: capitalize;

    h1 {
      font-size: 1.4rem;
    }

    span {
      background: ${(props) =>
        props.rank === 'genin' ? '#a8dadc' : undefined};
      background: ${(props) =>
        props.rank === 'jounin' ? '#457b9d' : undefined};
      background: ${(props) =>
        props.rank === 'chunnin' ? '#2a9d8f' : undefined};
      padding: 0 4px;
      border-radius: 2px;
      color: black;
      font-weight: 600;
      margin-bottom: 8px;
    }

    p {
      font-size: 1rem;
    }

    a {
      text-decoration: none;
      background: #00b4d8;
      padding: 4px 12px;
      color: white;
      margin-top: 44px;
    }
  }
`;
