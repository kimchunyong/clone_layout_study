import styled from 'styled-components';

const PaymentBtn = styled.button`
    margin-top: 15px;
    padding: .6rem 1.6125rem;
    background: #f40612;
    box-shadow: 0 1px 0 rgba(0,0,0,.45);
    border: none;
    border-radius:5px;
    color: #fff;
    font-size: 1.875rem;
    cursor: pointer;

    @media(max-width:1280px){
        font-size: 1.275rem;
    }
`

const FreeBtn = () => {
    return (
        <PaymentBtn>30일 무료 이용
            <span>
                >
            </span>
        </PaymentBtn>
    )
}

export default FreeBtn;