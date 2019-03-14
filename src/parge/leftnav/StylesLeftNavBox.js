import styled from 'styled-components'

const MnuiHeader=styled.header`
    width:100%;
    padding: .1rem;
    border-bottom: 1px solid #2e3238;
    height:.65rem;
`
const TextBox=styled.div`
    width:100%;
    height:100%;
    display:flex;
`

const ImgLoginBoxLeft=styled.div`
   width:50%;
   height:100%;

`
const ImeSpanStyle=styled.span`
    display:inline-block;
    width:.44rem;
    height:.44rem;
    margin-right: .1rem
    img{
        width:100%
    }
`
const SpanTextStyle=styled.span`
    color: #fff;
    line-height: .44rem;
    font-size: .16rem;
    vertical-align: middle;
    a{
        color: #fff;
    }
`

const ButtonLoginBoxRight=styled.div`
    width:50%;
    height:100%;
    text-align:right;
`
const ButtonTextBox=styled.span`
    display:inline-block;
    padding: 0 .1rem;
    height: .28rem;
    background-color: #f69a2e;
    color: #fff;
    font-size: .16rem;
    line-height: .28rem;
    text-align: center;
    border-radius: .12rem;
    margin-top:.08rem;
    a{
        color:#fff;
    }
`

const TitelWithBox=styled.div`
    width:100%;
`


const TitelBox=styled.div`
    height: .4rem;
    padding-left: .1rem;
    color: #fff;
    font-size:.16rem;
    line-height:.4rem;
    font-family:tahoma,arial;
`

const SeeksStyleList=styled.div`
    padding-left: .48rem;
    margin-right: 25%;
    display: block;
    height: .40rem;
    line-height: .40rem;
    color: #fff;
    font-size: .14rem;
    background:url('https://assets.dajieimg.com/up/dj-mobile/m-dajie/images/left-nav-icon5.png') no-repeat;
    background-size: .22rem 5.5rem;
    background-position:${props=>props.xy}
`
const ScoullBox=styled.div`
    width:100%;
    background-color: #30343a;
    display:${props=>props.dispaly?'none':'block'};
`

const ScoullBoxList=styled.div`
    width:100%;
    height: .4rem;
    margin-right: 25%;
    line-height: .4rem;
    font-size: .14rem;
    color: #fff;
    padding-left: .6rem;
`
const FooteBox=styled.div`
    height: .36rem;
    width: 100%;
    line-height: .36rem;
    color: #6e7784;
    background-color: #31343b;
    padding-left:.12rem;
    position: absolute;
    bottom: 0;
    left: 0;

`


export {
    MnuiHeader,
    TextBox,
    ImgLoginBoxLeft,
    ImeSpanStyle,
    SpanTextStyle,
    ButtonLoginBoxRight,
    ButtonTextBox,
    TitelBox,
    SeeksStyleList,
    ScoullBox,
    ScoullBoxList,
    TitelWithBox,
    FooteBox
}


































