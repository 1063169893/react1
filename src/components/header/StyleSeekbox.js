import styled from 'styled-components';

const Seekboxstyle=styled.div`
    position:absolute;
    top:.44rem;
    left:0;
    height:100%;
    width:100%;
    z-index: 1234;
    display:${props=>!props.showheid?'none':'block'};
`


const SeekInputbox=styled.div`
    width: 100%;
    background-color: #fff;
    height:.66rem;
    padding-top:.1rem;
`

const BackColor=styled.div`
    width:100%;
    height:100%;
    background-color: #bbb;
    opacity:.4;
`
const InputBox=styled.div`
    border-radius: .08rem;
    border: 1px solid #e6e6e6;
    overflow: hidden;
    box-sizing:border-box;
    margin: 0 15px 15px;
    margin-top:0;
    position:relative;
    .textinput{
        border: 0;
        border-radius: 8px;
        outline: 0;
        width: 100%;
        height: 100%;
        line-height: .18rem;
        padding: .07rem 0;
        text-indent: .1rem;
        font-size: .15rem;
        color: #000;
    }
    .submitinput{
        position: absolute;
        top: 1px;
        right: 1px;
        width: .38rem;
        height: .32rem;
        border: 0;
        outline: 0;
        border-radius: 0;
        background: url('https://assets.dajieimg.com/up/dj-mobile/school-time/i/ico-item-search.png') #fff no-repeat .09rem .08rem;
        background-size: .16rem .16rem;
        border-radius: .09rem;
        background-color: transparent;
    }
`

export {
    Seekboxstyle,
    SeekInputbox,
    BackColor,
    InputBox
}