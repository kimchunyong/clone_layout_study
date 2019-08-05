import styled from 'styled-components';

import TextContents from '../../Layout/TextBox';
import WarpperBox from '../../Layout/WarpperBox';

import AppleFrame from './img/device-pile.png'

const TextTitle = styled.h1`
    line-height:130%;
    font-size: 3.125rem;
    margin-bottom: .5rem;
    font-weight: 700;

    @media(max-width:1280px){
        font-size:2.625rem;

        &>br{
            display:none;
        }
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

    @media(max-width:1280px){
        font-size:1.125rem;
    }
`

const ImgContainer = styled.div`
    position: relative;
    width:48%;
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

    @media(max-width:1280px){
        margin:0;
    }
`

const VideoFrame = styled.video`
    position: absolute;
    top: -7px;
    left: 99px;
    width: 65%;

    @media(max-width:1280px){
        top: 30px;
        left: 65px;
    }
`

const Device = () => {
    return (
        <WarpperBox>
            <TextContents>
                <TextTitle>다양한 디바이스에서<br /> 시청하세요.</TextTitle>
                <TextSubTxt>각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.</TextSubTxt>
                <TrailBtn>30일 무료 이용 ></TrailBtn>
            </TextContents>
            <ImgContainer>
                <ImgFrame>
                    <img src={AppleFrame} />
                </ImgFrame>
                <VideoFrame autoPlay muted loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                </VideoFrame>
            </ImgContainer>
        </WarpperBox>
    )
}

export default Device;