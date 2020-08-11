import React, { useEffect, useState } from "react";
import Profile from "./profile";
import axios from 'axios';

export default function User(){

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState({});

    const getUser = async () => {
        const apiEndpoint = 'https://api.spotify.com/v1/me';

        const token = localStorage.token;
        
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        const result = await axios.get(apiEndpoint, {
            headers: headers
        });

        setUser(result.data);
    }

    useEffect(() => {
        getUser();
    }, []);

    useEffect(()=>{

        if(Object.entries(user).length === 0) return;

        const { display_name, email, followers, images} = user;

        const item = {
            title: display_name, 
            subtitles: [`${followers.total} followers`],
            imageUrl: images[0].url,
            footer: `${email}`
        };

        setItem(item);
        setIsLoading(false);
    }, [user]);

    return (
        <>
            {!isLoading && <Profile item={item} />}
        </>
    );
}