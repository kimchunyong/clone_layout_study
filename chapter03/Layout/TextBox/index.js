import styled from 'styled-components'

const TextBox = styled.div`
    width: 52%;
    height: 100%;
    color:#fff;
    padding-right: 50px;

    @media(max-width:1280px){
        padding-right:0;
    }
`

const TextContents = ({ children }) => {
    return (
        <TextBox>
            {children}
        </TextBox>
    )
}

export default TextContents;