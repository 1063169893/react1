import styled from 'styled-components';

const ScrollBox=styled.div`

    height:100vh;
    width:100%;
    position: relative;
    .bigscrollbox{
        height:100vh;
        width:100%;
        overflow: auto;
    }
`
const Scrll=styled.div`
    width:100%; 
    overflow:hidden;
    transition:.3s;
    white-space:nowrap;
    height: ${props=>props.right?"105vh":'max-content'};
    
    
`
const RightBox=styled.div`
    width:100%;
    display:inline-block;
    vertical-align:top;
    transition:.3s;
    transform:translateX(${props=>props.res?'85%':'0'});
    min-height:100vh;
`
const LeftBox=styled.div`
    width:85%;
    height:100%;
    display:inline-block;
    position:absolute;
    transition:.3s;
    left:${props=>props.res?'0':'-85%'};
    z-index:100;
    min-height:100vh;
`
const HeaderBox = styled.div`
    height:.44rem;
    background:#3e4654;
    color:#fff;
    display:flex;
`
const Mineleft = styled.div`
    width:.6rem;
    height:100%;
    padding-left:.13rem;
    padding-top:.12rem;
`
const TitleBOX=styled.div`
    height:100%;
    flex:1;
    border:0;
   
`
const HeaderImgBox=styled.i`
    height:.27rem;
    text-align:center;
    display:block;
    margin-top:.09rem;
    img{
            height: 100%;
        }
    span{
        font: bold 16px/44px 'microsoft yahei';
        line-height:.26rem;
    }
`

const Seekright=styled.div`
    width:.6rem;
    height:100%;
    padding-left:.15rem;
    padding-top:.08rem;
    a{
        color:#00a89e;
        display:inline-block;
        margin-top: .04rem;
        margin-left:.02rem;
    }
    span{
        display:block;
        height:100%;
    }
`
export {
    HeaderBox,
    Mineleft,
    Seekright,
    TitleBOX,
    ScrollBox,
    Scrll,
    HeaderImgBox,
    RightBox,
    LeftBox
  }