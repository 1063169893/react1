import styled from 'styled-components';

const HomeBox=styled.div`

    width:100%;
    padding:.1rem .08rem .74rem .08rem;
    height:100%;

`


const NewTopText = styled.div`
    height: .40rem;
    line-height: .40rem;
    font-size: .14rem;
    color: #666;
    border-bottom: 1px solid #f2f2f2;
    font-weight: bold;
   
`
const NewToday = styled.div`
    display:flex;
    padding: .10rem 0 .2rem 0;
    justify-content:space-between;

`

const ItemBox =styled.div`
    width: 25%;
    text-align:center;

`
const ItemBoxnow =styled.a`
    display:inline-block;
    width: .6rem;
    height: .6rem;
    text-align: center;
    position:relative;

`

const Spank=styled.div`
    color: #666;
    font-weight: bold;
    text-align:center;
    position:absolute;
    width:100%;
    top:.12rem;
    

`

const SpanOccupation=styled.div`
    top: .3rem;
    color: #bbb;
    text-align:center;
    position:absolute;
    width:100%;
`



export {
    HomeBox,
    NewTopText,
    NewToday,
    ItemBox,
    ItemBoxnow,
    Spank,
    SpanOccupation
}
