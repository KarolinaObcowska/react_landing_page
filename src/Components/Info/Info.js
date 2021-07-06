import React, { Fragment } from 'react'
import {
    AboutContainer,
    InfoContainer,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnContainer,
    Column2,
    ImgContainer,
    Button,
    Img
} from './Info.styles';

const Info = ({ lightBg, id, topLine, headLine, description, img, alt }) => {
    return (
        <Fragment>
            <AboutContainer lightBg={lightBg} id={id}>
                <InfoContainer>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading>{headLine}</Heading>
                                <Subtitle>{description}</Subtitle>
                                <BtnContainer>
                                    <Button to='/home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                    ><span>Join us!</span></Button>
                                </BtnContainer>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgContainer>
                                <Img src={img} alt={alt} />
                            </ImgContainer>
                        </Column2>
                    </InfoRow>
                </InfoContainer>
            </AboutContainer>
        </Fragment>
    )
}

export default Info
