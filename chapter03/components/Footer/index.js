import WarpperBox from '../../Layout/WarpperBox';

import styled from 'styled-components';

const FooterInner = styled.div`
    width:90%;
    margin:0 auto;
    color:#a6a6a6;
    text-align:left;
`

const FooterFaqLink = styled.a`
    display:block;

    &:hover{
        text-decoration: underline;
    }
`

const FooterLink = styled.ul`
    margin-top:30px;
    &>li{
        box-sizing: border-box;
        padding: 0;
        margin-bottom: 16px;
        display: inline-block;
        min-width: 100px;
        width: 25%;
        padding-right: 12px;
        vertical-align: top;

        &>a{
            font-size: 13px;
        }
    }
`

const CountryTxt = styled.p`
    font-size: 13px;
    margin-top: 24px;
`

const CopyTxt = styled.p`
    color: #737373;
    margin: 20px 0;
    font-size: .75em;
    line-height: 1em;
`

const Footer = () => {
    return (
        <WarpperBox>
            <FooterInner>
                <a href="#n">질문이 있으신가요? 고객 센터에 문의하세요.</a>
                <FooterLink>
                    <li><a href="#n">자주 묻는 질문</a></li>
                    <li><a href="#n">고객 센터</a></li>
                    <li><a href="#n">계정</a></li>
                    <li><a href="#n">미디어 센터</a></li>
                    <li><a href="#n">투자 정보(IR)</a></li>
                    <li><a href="#n">입사 정보</a></li>
                    <li><a href="#n">Netflix 지원 디바이스</a></li>
                    <li><a href="#n">이용 약관</a></li>
                    <li><a href="#n">개인정보</a></li>
                    <li><a href="#n">쿠키 설정</a></li>
                    <li><a href="#n">회사 정보</a></li>
                    <li><a href="#n">문의하기</a></li>
                    <li><a href="#n">속도 테스트</a></li>
                    <li><a href="#n">법적 고지</a></li>
                    <li><a href="#n">Netflix 오리지널</a></li>
                </FooterLink>
                <CountryTxt>
                    Netflix 대한민국
                </CountryTxt>
                <CopyTxt>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2015-서울중구-1407호</CopyTxt>
            </FooterInner>
        </WarpperBox>
    )
}

export default Footer;