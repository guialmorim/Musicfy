import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    flex-basis: 33.3333%;
    margin: 25px auto;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    max-width: 1500px;
    padding: 10px 10px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    text-align: center;
`;

export const CardWrapper = styled.div`
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    /* border: 1px solid #ccc;
    border-radius: 20px; */
    padding: 5px;
    margin: 10px;
`;

export const ImageContainer = styled.div`
    width: auto;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Subtitle = styled.span`
  font-size: 15px;
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Link = styled.a`

`;
