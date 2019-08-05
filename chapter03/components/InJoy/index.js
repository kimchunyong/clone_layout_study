import styled from 'styled-components';

import TextContents from '../../Layout/TextBox';
import WarpperBox from '../../Layout/WarpperBox';

import Tvframe from './img/tv.png'

const TextTitle = styled.h1`
    font-size: 3.125rem;
    margin-bottom: .5rem;
    font-weight: 700;

    @media(max-width:1280px){
        font-size:2.625rem;
    }
`
const TextSubTxt = styled.h2`
    line-height: 130%;
    font-size: 1.625rem;
    font-weight: 400;

    @media(max-width:1280px){
        font-size:1.125rem;
    }
`

const TrailBtn = styled.button`
    margin:13px 0;
    color: #fff;
    border: 1px solid #fff;
    padding: .5rem 1em;
    background: transparent;
    font-size: 1.625rem;
`

const ImgContainer = styled.div`
    position: relative;
    width:48%;

    @media(max-width:1280px){
        top:30px;
    }
`

const ImgFrame = styled.div`
    position:relative;
    margin: -10% -5% -5% 0;
    overflow: hidden;
    z-index:5;

    &>img{
        display:block;
        width:100%;
    }
`

const VideoFrame = styled.video`
    position: absolute;
    top: 33px;
    left: 73px;
    width: 76%;
`

const InJoy = () => {
    return (
        <WarpperBox>
            <TextContents>
                <TextTitle>TV로 즐기세요.</TextTitle>
                <TextSubTxt>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</TextSubTxt>
                <TrailBtn>30일 무료 이용 ></TrailBtn>
            </TextContents>
            <ImgContainer>
                <ImgFrame>
                    <img src={Tvframe} />
                </ImgFrame>
                <VideoFrame autoPlay muted loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v" type="video/mp4" />
                </VideoFrame>
            </ImgContainer>
        </WarpperBox>
    )
}

export default InJoy;