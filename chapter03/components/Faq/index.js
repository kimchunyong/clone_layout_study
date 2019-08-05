import WarpperBox from '../../Layout/WarpperBox';
import PaymentBtn from '../Freebtn';

import styled from 'styled-components';

const FaqInner = styled.div`
    width:100%;
`

const FaqTit = styled.h1`
    font-size: 3.125rem;
    margin-bottom: .5rem;
    text-align:center;

    @media(max-width:1280px){
        font-size:2.625rem;
    }
`

const FaqMenu = styled.ul`
    width: 75%;
    margin: 2em auto;

    &>li{
        margin: 0 0 8px 0;
        font-size: 1.625rem;
        background: #303030;
    }

    @media(max-width:1280px){
        &>li{
            font-size:1.125rem;
        }
    }
`

const FaqBtn = styled.button`
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 1px;
    padding: .8em 2.2em .8em 1.2em;
    font-size:inherit;
    font-weight: 400;
    border: 0;
    text-align: left;
    color:#fff;
    background: inherit;
    border-bottom: 1px solid #000;
    outline-stYle:none;
    cursor:pointer;
`

const FaqListBox = styled.div`
    line-height: 130%;
    padding: .8em 2.2em .8em 1.2em;
    font-size:inherit;
    background: inherit;
    word-break:keep-all;
    text-align: left;
`

const FaqBtnBox = styled.div`
    text-align:center;
`

const Faq = () => {
    return (
        <WarpperBox>
            <FaqInner>
                <FaqTit>자주 묻는 질문</FaqTit>
                <FaqMenu>
                    <li>
                        <FaqBtn>넷플릭스란 무엇인가요?</FaqBtn>
                        <FaqListBox>
                            넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션,
                            다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
                        <br /><br />저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다.
                                            무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다.
                        </FaqListBox>
                    </li>
                    <li>
                        <FaqBtn>넷플릭스 요금은 얼마인가요?</FaqBtn>
                        <FaqListBox>
                            스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서
                             저렴한 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 다양합니다.
                            추가 비용이나 약정이 없습니다.
                        </FaqListBox>
                    </li>
                </FaqMenu>
                <FaqBtnBox>
                    <PaymentBtn />
                </FaqBtnBox>
            </FaqInner>
        </WarpperBox>
    )
}

export default Faq;