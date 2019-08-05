import styled from 'styled-components';

import PaymentBtn from '../Freebtn';

import OurStoryBg from './img/hero-background.jpg';

const OurStoryBox = styled.div`
    height:736px;
    border-bottom: 8px solid #222;
    background:url(${OurStoryBg}) 0 0 no-repeat;
    background-size: cover;
`

const OurStotyContents = styled.div`
    position: relative;
    top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 70px;
`

const OurStoryTxt = styled.h1`
    line-height:140%;
    font-size: 3.125rem;
    font-weight:700;
    color:#fff;
    text-align:center;

    @media(max-width:1280px){
        font-size:2.625rem;
    }
`

const TrailBox = styled.div`
    width: 100%;
    margin: 2rem 0;
`

const TrailTxt = styled.div`
    position:relative;
    width: 100%;
    font-size: 1.6rem;

    @media(max-width:1280px){
        font-size:1.1rem;
    }
`

const TrailGraph = styled.div`
    position: relative;
    background: linear-gradient(to right,#00d65f 10%,#308234 50%,#3f3f3f 50%,#3f3f3f 85%,rgba(63,63,63,0) 100%);
    width: 100%;
    height: 1.8em;
    border-radius: .75em 0 0 .75em;
    margin: 1em .1em 1.25em;

    &:before,&:after{
        content: '';
        width: 1.8em;
        height: 1.8em;
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        background: #fff;
        border-radius: 50%;
    }

    &:before{
        left:50%;
    }

    &:after{
        left:85%;
    }
`

const FreeTrail = styled.div`
    position: absolute;
    width: 38%;
    font-weight: 600;
    text-align: left;
    color: #00d65f;
    left: 0;
    bottom: 0;
`

const BilingTrail = styled.div`
    width: 20%;
    text-align: center;
    margin: 0 auto;
    color: #8c8c8c;
`

const BillingDate = styled.span`
    color: #fff;
    display: block;
    white-space: nowrap;
`

const SecondBillingTrail = styled.div`
    position: absolute;
    white-space: nowrap;
    left: 85%;
    bottom: 0;
    transform: translateX(-50%);
    color: #fff;
`

const Reminder = styled.div`
    padding-left: 2.3em;
    position: relative;
    left: 50%;
    width: 30%;
    margin-left: -3.5em;
    text-align: left;
    color:#fff;

    &:after{
        content: '';
        position: absolute;
        top: -3.05em;
        left: .6em;
        height: 3em;
        width: 2px;
        background: #d8d8d8;
        border-left: 3px solid #000;
        border-right: 3px solid #000;
    }
`

const Envelope = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    height: 1.2em;
    width: 1.7em;
    background-size: contain;
`

const MessageBox = styled.div`
    margin: 1rem auto;
    line-height:120%;
    font-size: 1.625rem;
    font-weight: 400;
    color:#fff;
    text-align: center;

    @media(max-width:1280px){
        font-size:1.125rem;
    }
`

const OurStory = () => {
    return (
        <OurStoryBox>
            <OurStotyContents>
                <OurStoryTxt>
                    넷플릭스의 모든 것.<br />
                    30일 동안 무료입니다.
                </OurStoryTxt>
                <TrailBox>
                    <TrailTxt>
                        <FreeTrail>30일 무료 이용</FreeTrail>
                        <BilingTrail>
                            첫 번째 결제일
                            <BillingDate>
                                9.3.
                            </BillingDate>
                        </BilingTrail>
                        <SecondBillingTrail>
                            10.3.
                        </SecondBillingTrail>
                    </TrailTxt>
                    <TrailGraph />
                    <Reminder>
                        <Envelope />
                        3일전 알림
                    </Reminder>
                </TrailBox>
                <MessageBox>
                    무료 이용 종료 3일 전에 알림 이메일을 보내드립니다. 9. 3. 전에 <br />
                    멤버십을 해지하시면 요금이 청구되지 않습니다.
                </MessageBox>
                <PaymentBtn />
            </OurStotyContents>
        </OurStoryBox>
    )
}

export default OurStory;