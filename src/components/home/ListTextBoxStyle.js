import styled from 'styled-components';


const ListTextBoxStyle = styled.div`

    background-color: #fff;
    border-radius: .02REM;
    box-shadow: 0 .02REM 0 #dedede;
    padding: 0 .1rem;
    margin-bottom: .1rem;



`

const ItemTextBox= styled.div`
    padding-left: .26rem;
    height: .4rem;
    line-height: .4rem;
    font-size: .14rem;
    border-bottom: 1px solid #f2f2f2;
    font-weight: bold;
    background: url('https://assets.dajieimg.com/up/dj-mobile/m-dajie/images/index-title-bg7.png') no-repeat;
    background-position: 0 .12rem;
    background-size: .18rem 3.75rem;
    a{
      color: #00a89e;
      display: block;
    }

`

const UlListeBox=styled.ul`
    width:100%;
    li{ 
        border-bottom: 1px solid #f2f2f2;
        a{
            position:relative;
            display:block;
            padding: .07rem 0;
            .titeltext{
                font: normal .16rem/.28rem 'Microsoft Yahei',Arial;
                color: #434343;
            }
            .pepelname{ 
                
                font-size:.14rem;
                color: #bbb;
                height: .22rem;
                line-height: .22rem;
                .manye{
                    color:#f69a2e;
                }
                .vertical{
                    padding: 0 .05rem;
                }
            }
            
        }
        
    }
`
const IbackgrooundImageRight=styled.i`
    position: absolute;
    top: 50%;
    margin-top: -.08rem;
    right: 0;
    display: block;
    width: .09rem;
    height: .16rem;
    background-image: url('https://assets.dajieimg.com/up/dj-mobile/m-dajie/images/r_arr.png');
    

`
const MoreBox=styled.div`
    a{
        display: block;
        height:.44rem;
        line-height: .44rem;
        text-align: center;
        color: #00a89e;
        font-size: .14rem;
    }

`


export {
    ListTextBoxStyle,
    ItemTextBox,
    UlListeBox,
    MoreBox,
    IbackgrooundImageRight
}