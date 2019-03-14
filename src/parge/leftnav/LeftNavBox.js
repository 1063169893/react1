import React, { Component } from 'react';
import { MnuiHeader, 
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
    } from './StylesLeftNavBox';
import Loginimg from '../../assets/images/left-no-login.jpg'
import { Link } from 'react-router-dom';

import getHome from './../../utils/getHome';

class LeftBanBox extends Component {
   
    style={
        width: '100%',
        height: '100%',
        backgroundColor: '#35393f',
        boxShadow: '-5px 0 5px #292d32 inset'
    }
    constructor(props){
        super(props)
        this.state={
            dispalykey:true
        }

    }
    setDispaly=()=>{
        this.setState({
            dispalykey:!this.state.dispalykey
        })
    }
    componentWillMount(){
        this.props.getHot()
      }
    renderItem=()=>{
        let {dispalykey}=this.state
        if( this.props.left != null){
           const taitel=this.props.left.map(
               (item)=>{
                return (//列表渲染  后期数据来自REDUX
                    <TitelWithBox key = {item.id}>
                        <TitelBox>
                            {item.tel}
                        </TitelBox>
                        {item.lis.map((list)=>{
                            return (
                                <div key={list.id}>
                                    <SeeksStyleList  onClick={list.te?this.setDispaly.bind():null} xy={list.xy}>
                                        {list.text}
                                    </SeeksStyleList>
                                        {list.te?<ScoullBox dispaly={dispalykey}>
                                                { list.sco.map((resw)=>{
                                                    return (
                                                        <ScoullBoxList key={resw.id}>
                                                        {resw.te}
                                                        </ScoullBoxList>
                                                    )
                                                })}
                                            </ScoullBox>:'' }
                                </div>
                            )
                        })}
                    </TitelWithBox>)
               }
           )
            return (
                taitel
              ) 
        }
    }
    render() {
        let {changeRight}=this.props
        return (
            <div style={this.style}>
                <MnuiHeader>
                    <TextBox>
                        <ImgLoginBoxLeft>
                            <ImeSpanStyle>
                                <img src={Loginimg} />
                            </ImeSpanStyle> 
                            <SpanTextStyle>
                                <Link to="/login" onClick={changeRight}>立即登录</Link>    
                            </SpanTextStyle>
                        </ImgLoginBoxLeft>
                        <ButtonLoginBoxRight>
                            <ButtonTextBox>
                                <Link to="/regiater" onClick={changeRight}>注册新账号</Link>   
                            </ButtonTextBox>
                        </ButtonLoginBoxRight>
                    </TextBox>
                </MnuiHeader>
                <div>
                   {this.renderItem()}
                </div>
                <FooteBox>
                    sdbfjb
                </FooteBox>
            </div>
        );
    }
}

export default getHome(LeftBanBox);
