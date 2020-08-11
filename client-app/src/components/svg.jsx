import React from 'react';
import AlbumSVG from '../svg/album.svg';
import BandSVG from '../svg/band.svg';
import UserSVG from '../svg/user.svg';
import { Icon } from '../styles/styles';

export const Album = () => <Icon src={AlbumSVG}/>

export const Band = () => <Icon src={BandSVG} />

export const User = () => <Icon src={UserSVG} />