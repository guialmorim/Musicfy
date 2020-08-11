import React, { useEffect, useState } from 'react';
import Profile from "./profile";
import ImageGrid from './ImageGrid';
import styled from 'styled-components';
import axios from 'axios';

const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;

export default function Artist(props) {

    const [artist, setArtist] = useState({});
    const [albuns, setAlbuns] = useState([]);
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const getArtist = async () => {
        try {
            const artistId = props.match.params.artistId;
            const apiEndpoint = `https://api.spotify.com/v1/artists/${artistId}`;
        
            const token = localStorage.token;
        
            const headers = {
                'Authorization': `Bearer ${token}`
            };

            const result = await axios.get(apiEndpoint, {
                headers: headers
            });
            
            setArtist(result.data);

        } catch (error) {
            console.log(error);
        }        
    };

    const getAlbuns = async () => {        
        try {
            const artistId = props.match.params.artistId;
            const apiEndpoint = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=us&limit=20`;
        
            const token = localStorage.token;
        
            const headers = {
                'Authorization': `Bearer ${token}`
            };

            const result = await axios.get(apiEndpoint, {
                headers: headers
            });
            
            setAlbuns(result.data.items);
            
        } catch (error) {
            console.log(error);
        }        
    };

    useEffect(() => {        
        getArtist();
        getAlbuns();
    }, []);

    function isEmpty(obj) {
        //console.log(Object.keys(obj).length === 0);
        return Object.keys(obj).length === 0;
    }

    useEffect(() => {

        if(isEmpty(artist) || albuns.length === 0) return;

        const {name, followers, popularity, images, genres} = artist;
  
        const item = {
          title: name, 
          subtitles: [`${followers.total} followers`,`${popularity} of popularity`],
          imageUrl: images[1].url,
          footer: `for fans of ${genres.map(genre => ` ${genre}`)}`
        };
        
        setItem(item);
        setIsLoading(false);

    }, [artist, albuns]);

    return (
         <>
            {!isLoading &&
            <>
                <Profile item={item} />
                <ProfileContainer>
                    <ImageGrid images={albuns} />
                </ProfileContainer>
            </>}            
        </>
    );
}