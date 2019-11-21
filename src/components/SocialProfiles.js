import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfile';


const SocialProfile = props =>{
    const {link, image} = props.socialProfile;
    return(
        <span>
            <a href={link}>
                <img src={image} style={{width:35,height:35,margin:10}} alt='social-profile' />
            </a>
        </span>
    )
}


const SocialProfiles = () => {
    return(
        <div>
            <h2>Connect with me</h2>
            <div>
                {SOCIAL_PROFILES.map(profile => {
                    return <SocialProfile key={profile.id} socialProfile = {profile} />
                })}
            </div>
        </div>
    )
}
export default SocialProfiles;