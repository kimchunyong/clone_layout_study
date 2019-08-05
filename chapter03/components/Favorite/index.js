import styled from 'styled-components';

import TextContents from '../../Layout/TextBox';
import WarpperBox from '../../Layout/WarpperBox';

import Mobile from './img/mobile.png';
import InfoThums from './img/boxshot.png';
import DownGif from './img/download-icon.gif';

const TextTitle = styled.h1`
    line-height: 130%;
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
    position: relative;
    overflow: hidden;
    z-index: 5;
    margin: -8% 0 -4% -15%;
    min-height: 100px;
    width: 100%;

    &>img{
        display:block;
        width:100%;
    }

    @media(max-width:1280px){
        margin:0;
    }
`

const InfoBox = styled.div`
    position: absolute;
    left: 35%;
    bottom: 8%;
    transform: translateX(-50%);
    margin: 0 auto;
    background: #000;
    display: flex;
    align-items: center;
    width: 60%;
    min-width: 15em;
    padding: .25em .65em;
    border: 2px solid rgba(255,255,255,.25);
    box-shadow: 0 0 2em 0 #000;
    border-radius: .75em;
    z-index: 5;

    &:after{
        content:"";
        width: 3em;
        height: 3em;
        outline: 2px solid #000;
        outline-offset: -2px;
        display: block;
        background:url(${DownGif}) 0 0 no-repeat;
        background-size: cover;
    }

    @media(max-width:1280px){
        left:50%;
    }
`

const InfoThumsCon = styled.div`
    max-width: 57px;
    margin-right:1em;

    &>img{
        display:block;
        width:100%;
    }
`

const InfoTxtCon = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    margin: .3em 0;
`

const InfoTxt = styled.p`
    padding: 2px 0;
    color:${props => props.primary === 'white' ? '#fff' : '#0071eb'}
`


const Favorite = () => {
    return (
        <WarpperBox>
            <ImgContainer>
                <ImgFrame>
                    <img src={Mobile} />
                </ImgFrame>
                <InfoBox>
                    <InfoThumsCon>
                        <img src={InfoThums} />
                    </InfoThumsCon>
                    <InfoTxtCon>
                        <InfoTxt primary="white">기묘한 이야기</InfoTxt>
                        <InfoTxt>저장 중...</InfoTxt>
                    </InfoTxtCon>
                </InfoBox>
            </ImgContainer>
            <TextContents>
                <TextTitle>즐겨 보는 콘텐츠를<br /> 저장해 이동 중에도<br /> 시청하세요.</TextTitle>
                <TextSubTxt>오프라인으로 즐기고 데이터를 절약하세요.</TextSubTxt>
                <TrailBtn>30일 무료 이용 ></TrailBtn>
            </TextContents>
        </WarpperBox>
    )
}

export default Favorite;