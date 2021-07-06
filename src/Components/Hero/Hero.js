import React from 'react';
import { HeroContainer, Video } from './Hero.styles';
import BackgroundVideo from './Video.mp4';

const Hero = () => {
    return (
        <HeroContainer>
            <Video as='video' autoPlay='autoplay' loop='loop' muted>
                <source src={BackgroundVideo} type='video/mp4'></source>
            </Video>

        </HeroContainer>
    )
}

export default Hero
