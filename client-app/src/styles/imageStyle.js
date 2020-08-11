import styled from 'styled-components';
 
export const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

 
export const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;
 
export const Img = styled.img`
  width: 100%;
  border-radius: 10%;
  border: 1px solid #ccc;
  padding: 5px;
`;

export const ImgDescription = styled.h2`
  font-size: 30px;
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;