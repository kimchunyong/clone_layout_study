import styled from 'styled-components';

const WarpperContainer = styled.div`
    border-bottom: 8px solid #222;
    padding: 70px 45px;
`

const WarpperInner = styled.div`
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    align-items: center;
    color:#fff;

    @media(max-width:1280px){
        flex-direction: column;
        text-align: center;
    }
`

const WarpperBox = ({ children }) => {
    return (
        <WarpperContainer>
            <WarpperInner>
                {children}
            </WarpperInner>
        </WarpperContainer>
    )
}

export default WarpperBox;