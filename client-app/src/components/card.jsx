import React from "react";
import { CardContainer, ImageContainer, Image, Title, Subtitle, Link} from '../styles/cardStyle';

export const Card = props => {
    
    const { title, subtitle, imageUrl, to } = props.item

    return (
        <CardContainer>
            <Link href={to}>
                <ImageContainer>
                    <Image src={imageUrl} />
                </ImageContainer>
            </Link>

            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </CardContainer>
    );
}