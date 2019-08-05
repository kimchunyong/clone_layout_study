import GlobalReset from '../../reset';
import Link from 'next/link';
import styled from 'styled-components';

import logo from './img/logo.png';

const ShowCase = styled.header`
    position: absolute;
    top: 27px;
    left: 0;
    right: 0;
`

const ShowCaseInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 56px;
`

const ShowCaseLogo = styled.span`
    max-width:166px;
`

const ShowCaseBtn = styled.span`
    display:inline-block;
    padding: 7px 17px;
    border-radius: 6px;
    background-color: #e50914;
    color:#fff;

`

const ShowCaseThums = styled.img`
    display:block;
    width:100%;
`

const header = () => {
    return (
        <>
            <GlobalReset />
            <ShowCase>
                <ShowCaseInner>
                    <Link href="/">
                        <ShowCaseLogo><ShowCaseThums src={logo} /></ShowCaseLogo>
                    </Link>
                    <Link href="/login">
                        <ShowCaseBtn>로그인</ShowCaseBtn>
                    </Link>
                </ShowCaseInner>
            </ShowCase>
        </>
    )
}

export default header;