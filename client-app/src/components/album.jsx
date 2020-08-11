import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import Profile from "./profile";
import axios from 'axios';
import List from "./list";

const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;

export default function Album(props) {

    const [album, setAlbum] = useState({});
    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState({});

    const getAlbum = async () => {
        const albumId = props.match.params.albumId;
        const apiEndpoint = `https://api.spotify.com/v1/albums/${albumId}`;

        const token = localStorage.token;
        
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        const result = await axios.get(apiEndpoint, {
            headers: headers
        });

        setAlbum(result.data);
    }

    const getTracks = async () => {
        const albumId = props.match.params.albumId;
        const apiEndpoint = `https://api.spotify.com/v1/albums/${albumId}/tracks?market=US&limit=40`;

        const token = localStorage.token;
        
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        const result = await axios.get(apiEndpoint, {
            headers: headers
        });

        setTracks(result.data.items);
    }

    function isEmpty(obj) {
        //console.log(Object.keys(obj).length === 0);
        return Object.keys(obj).length === 0;
    }

    useEffect(() => {
        getAlbum();
        getTracks();
    }, []);

    useEffect(()=>{

        if(isEmpty(album) || tracks.length === 0 ) return;

        const { artists, name, copyrights, images} = album;

        const item = {
            title: name, 
            subtitles: [`${artists[0].name}`],
            imageUrl: images[0].url,
            footer: `rights to ${copyrights[0].text}`
        };

        setItem(item);
        setIsLoading(false);

    }, [album, tracks]);

    return (
        <>
            {!isLoading && 
                <>
                    <Profile item={item}/>
                    <ProfileContainer>
                        <List items={tracks} />
                    </ProfileContainer>
                </>
            }
        </>
    );
}