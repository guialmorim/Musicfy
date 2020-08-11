import React from 'react';
import { Card } from "./card";
import { CardWrapper, Container } from '../styles/cardStyle';
import styled from 'styled-components';

const Div = styled.div`
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding: 5px;
    margin: 10px;
`;

export default class Home extends React.Component{

    constructor(props){
        super(props);
    }

    state = {
        artists: [],
        tracks: [],
    }

    componentDidMount(){
        this.getTopArtists();
        this.getTopTracks();
    }

    getTopArtists = () => {
        const apiEndpoint = 'https://api.spotify.com/v1/me/top/artists';
    
        const token = localStorage.token;

       fetch(apiEndpoint, { 
            method: 'GET', 
            headers: new Headers({
              Authorization: `Bearer ${token}`
            })
        })
        .then(response => response.json())
        .then(response => {
            const { items: artists } = response;

            this.setState({ artists }, () => {
                //console.log('artists', this.state);              
            }); 
        })
        .catch(error => console.log('error:', error));
    }

    getTopTracks = () => {
        const apiEndpoint = 'https://api.spotify.com/v1/me/top/tracks';
    
        const token = localStorage.token;

       fetch(apiEndpoint, { 
            method: 'GET', 
            headers: new Headers({
              Authorization: `Bearer ${token}`
            })
        })
        .then(response => response.json())
        .then(response => {
            const { items: tracks } = response;

            this.setState({ tracks }, () => {
                //console.log(this.state);              
            }); 
        })
        .catch(error => console.log('error:', error));
    }

    renderArtistList = () => {
        return (
            <>
                <h1>Top Artists</h1>
                <CardWrapper>
                    {this.state.artists.map(artist => {

                        const item = {
                            title: artist.name,
                            subtitle: `${artist.followers.total} followers`,
                            imageUrl: artist.images[0].url,
                            to: `/artist/${artist.id}`
                        } 

                        return (
                            <Card key={artist.id} item={item} />
                        );
                    })}                        
                </CardWrapper>
            </>
        );
    }

    renderTrackList = () => {
        return (
            <>
                <h1>Top Tracks</h1>
                <CardWrapper>
                    {this.state.tracks.map(track => {

                        const item = {
                            title: track.name,
                            subtitle: track.album.name,
                            imageUrl: track.album.images[0].url,
                            to: `/album/${track.album.id}`
                        } 

                        return <Card key={track.id} item={item} />;
                    })}                        
                </CardWrapper>
            </>
        );
    }

    renderTitleText = text => {
        return (
            <Div>
                {text}                        
            </Div>
        );
    }

    render () {
        return (
            <Container>
                <div>                    
                    {this.state.artists ? this.renderArtistList() : this.renderTitleText('No artists available.') }
                </div>
                <div>                    
                    {this.state.tracks ? this.renderTrackList() : this.renderTitleText('No tracks available.') }
                </div>
            </Container>
        );
    }    
}

