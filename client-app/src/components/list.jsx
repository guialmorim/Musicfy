import React from 'react';
import { ListContainer, ListItem, ListItemTitle, ListItemSubtitle } from '../styles/listStyle';

export default function List(props) {
    const { items } = props;

    function millisToMinutesAndSeconds(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return (
        <ListContainer>
            { items.lenght !== 0 && items.map(item => (
                    <ListItem>
                        <ListItemTitle>
                            {item.name}
                        </ListItemTitle>
                        <ListItemSubtitle>
                            {millisToMinutesAndSeconds(item.duration_ms)}
                        </ListItemSubtitle>
                    </ListItem>
                )
            )}
        </ListContainer>
    );
}