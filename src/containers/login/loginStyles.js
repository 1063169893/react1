import styled from 'styled-components';


const LoginBox=styled.div`
    width:100%;
    padding:.55rem .1rem .1rem;
    box-sizing:border-box;
    min-height:100vh;

`

const NamePsswordBox=styled.div`
    width:100%;
    margin-bottom: .25rem;


`
const NameBox=styled.div`
    width:100%;
    border-bottom: 1px solid #e0e1e5;
    box-sizing: border-box;
    display:flex;

`

const NameText=styled.div`
    width:.64rem;
    color: #666;
    line-height: .44rem;
    font-size: .14rem;
    box-sizing: border-box;
    text-align:left;
`

const InputBox=styled.div`
    color: #999;
    line-height: .44rem;
    font-size: .14rem;
    flex:1;
    input{
        width:100%;
        border:none;
        height: .16rem;
        padding: .14rem 0;
        line-height: .16rem;
        color: #000;
        font-size: .14rem;
        background: transparent;
    }
   
`

const CodeButton=styled.div`
    a{width: 60%;
    margin: 0 20% .25rem;
    height: .4rem;
    background: #f2f7fd;
    border: 1px solid #dbdbdb;
    border-radius: .04rem;
    display: inline-block;
    text-align: center;
    line-height: .4rem;
    font-size: .14rem;
    color: #999;
    text-decoration: none;}
  
`

const LoginTextBox=styled.div`
    a{
        display: block;
        height: .44rem;
        line-height: .44rem;
        background-color: #00a89e;
        border: 1px solid #00a89e;
        font-size: .16rem;
        color: #fff;
        text-decoration: none;
        text-align: center;
        box-sizing: border-box;
        border-radius: .04rem;
    }

`

const LoginStateBox=styled.div`
    font-size: .14rem;
    margin-top: .15rem; 
    font-size: 14px;
    color: #bbb;
    display:flex;
    justify-content: space-between;
    a{
        color: #bbb;
    }
`

const OtherLoginBox=styled.div`
    margin-top: .65rem;
    line-height: .15rem;
    padding: 0 7px 0 0;
    color: #00a89e;


`


export { 
    LoginBox,
    NamePsswordBox,
    NameBox,
    NameText,
    InputBox,
    CodeButton,
    LoginTextBox,
    LoginStateBox,
    OtherLoginBox
}