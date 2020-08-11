import React from 'react';
import {
    ProfileContainer, 
    ProfileDetails,
    ProfileDetailsRight,
    ProfileDetailsUsername,
    ProfileDetailsMeta,
    HeadingThreeText,
    ParagraphText,   
    ProfileDetailsName ,
    ProfileDetailsLeft, 
    ProfileImage 
    } from '../styles/profileStyle';

const Profile = props => {

    const { title, subtitles, imageUrl, footer } = props.item

    return (
      <ProfileContainer>
        <ProfileDetails>
          <ProfileDetailsLeft>
            <ProfileImage src={imageUrl} />
          </ProfileDetailsLeft>
   
          <ProfileDetailsRight>
            <ProfileDetailsUsername>
              <HeadingThreeText>{title}</HeadingThreeText>
            </ProfileDetailsUsername>
   
            <ProfileDetailsMeta>
              {subtitles.map(subtitle => {
                return (
                  <ParagraphText>
                    {subtitle}
                  </ParagraphText>
                );
              })}
            </ProfileDetailsMeta>
   
            <ProfileDetailsName>
              <ParagraphText>
                {footer}
              </ParagraphText>
            </ProfileDetailsName>
          </ProfileDetailsRight>
        </ProfileDetails>   
        
      </ProfileContainer>
    );
  }
   
  export default Profile;