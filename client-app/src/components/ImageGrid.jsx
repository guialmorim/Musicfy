import React from 'react';
import { ImagesWrapper } from '../styles/imageStyle';
import Image from '../components/image';


const ImageGrid = props => {
    const { images } = props;
    return (
        <ImagesWrapper>
            {images.map(item => (
                <>
                    <Image image={item} key={item.id} />
                </>
            ))}
        </ImagesWrapper>
    );
}

export default ImageGrid;