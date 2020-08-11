import React from 'react';
import { ImgContainer, Img, ImgDescription  } from '../styles/imageStyle';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Image = ({ image }) => {
    return (
      <ImgContainer>
        <Link href={`/album/${image.id}`}>
          <Img src={image.images[1].url} />
        </Link>
        <ImgDescription>{image.name}</ImgDescription>
      </ImgContainer>
    );
  }
   
  export default Image;