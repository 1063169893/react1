import styled from 'styled-components';

const RegiaterBox = styled.div`
    padding: .2rem .1rem;
    box-sizing:border-box;
    min-height:100vh;
`


const RegiaterTextBox=styled.div`
    margin-bottom:.15rem;

`
const PhoneBox=styled.div`
    border: 1px solid #d0d0d0;
    border-radius: .05rem;
    margin-top: 3%;
    display:flex;


`

const PhoneNum86=styled.span`
    color: #333;
    padding-right:.15rem;
    margin-left: 5%;
    line-height: .44rem;
    font-size: .14rem;
    display: inline-block;
    box-sizing: border-box;
`

const PromptLogin=styled.div`
    text-align: center;
    margin-top: .44rem;
    color: #bbb;
    height: .32rem;
    line-height: .32rem;
    font-size:.14rem;
    a{
        color: #00a89e;
        margin-left: 10px;
    }

`
const FootText=styled.div`
    text-align: center;
    width:100%;
    color: #8c8c8c;
    box-sizing:border-box;
    height:.3rem;
    a{
        text-decoration: underline;
        color: #bbb;
    }
`

export {
    RegiaterTextBox,
    PhoneBox,
    PhoneNum86,
    RegiaterBox,
    PromptLogin,
    FootText
}