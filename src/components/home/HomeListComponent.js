import React, { Component } from 'react';
import { HomeBox, NewTopText, NewToday, ItemBox, ItemBoxnow, Spank, SpanOccupation } from './Home';
import { ListTextBoxStyle, ItemTextBox, UlListeBox, MoreBox, IbackgrooundImageRight } from './ListTextBoxStyle';

import getHome from './../../utils/getHome';

import { Link } from 'react-router-dom';


class HomeListComponent extends Component {
    componentWillMount(){
       this.props.getList()
       this.props.getList2()
       this.props.getList3()
    }
    listcomponents(arr){
        if(arr.indexOf(null) == -1){
            const choiceComponent=arr.map(
                (item,index)=>{
                    return (
                        <ListTextBoxStyle key={index}>
                            <ItemTextBox>
                                <a>
                                    {item.data.herder}
                                </a>
                            </ItemTextBox>
                        {item.data.list.slice(0,4).map(er=>{
                                return (<UlListeBox key={er.jid}>
                                        <li>
                                            <a>
                                                <p className="titeltext">{er.corp}</p>
                                                <p className="pepelname">
                                                    <span className="manye">{er.salary}&nbsp;</span>
                                                    <span className="vertical">|</span>
                                                    &nbsp;林中奇&nbsp;
                                                    <span className="vertical">|</span>
                                                    &nbsp;企业商融集团
                                                </p>
                                                <IbackgrooundImageRight></IbackgrooundImageRight>
                                            </a>
                                        </li>
                                    </UlListeBox>)
                            })}
                            <MoreBox>
                                <Link to={'/more/'+item.data.moreId}>查看跟多...</Link> 
                            </MoreBox>
                </ListTextBoxStyle>)
            })
            return ( choiceComponent)
        }
    }
    render() {        
        return (
           <HomeBox>
             <ListTextBoxStyle>
                 <NewTopText>
                     今日更新
                 </NewTopText>
                 <NewToday>
                    <ItemBox>
                        <ItemBoxnow>
                           
                           <Spank>16K+</Spank>
                           <SpanOccupation>
                               全职
                           </SpanOccupation>
                           <svg width="60" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="28" stroke="#e5e8ea" strokeWidth="4" fill="#fff"></circle><path d="M55.72831281376129 18.952198419719586 A28 28 0 1 1 29.99999999999999 2" fill="transparent" stroke="#00a89e" strokeWidth="4"></path></svg>
                        </ItemBoxnow>
                    </ItemBox>
                    <ItemBox>
                        <ItemBoxnow>
                        <Spank>16</Spank>
                           <SpanOccupation>
                               项目
                           </SpanOccupation>
                           <svg width="60" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="28" stroke="#e5e8ea" strokeWidth="4" fill="#fff"></circle><path d="M30 2 A28 28 0 0 1 30.350098715072544 2.0021888196647666" fill="transparent" stroke="#559cd9" strokeWidth="4"></path></svg>
                        </ItemBoxnow>
                    </ItemBox>
                    <ItemBox>
                        <ItemBoxnow>
                        <Spank>177</Spank>
                           <SpanOccupation>
                               实习
                           </SpanOccupation>
                           <svg width="60" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="28" stroke="#e5e8ea" strokeWidth="4" fill="#fff"></circle><path d="M30.350098715072544 2.0021888196647666 A28 28 0 0 1 34.207181830138154 2.31788264875399" fill="transparent" stroke="#f69a2e" strokeWidth="4"></path></svg>
                        </ItemBoxnow>
                    </ItemBox>
                    <ItemBox>
                        <ItemBoxnow>
                        <Spank>1K+</Spank>
                           <SpanOccupation>
                               实习
                           </SpanOccupation>
                           <svg width="60" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="28" stroke="#e5e8ea" strokeWidth="4" fill="#fff"></circle><path d="M34.207181830138154 2.31788264875399 A28 28 0 0 1 55.72831281376129 18.952198419719586" fill="transparent" stroke="#e05a5a" strokeWidth="4"></path></svg>
                        </ItemBoxnow>
                    </ItemBox>
                 </NewToday>
             </ListTextBoxStyle>
             <ListTextBoxStyle>
                 <NewTopText>
                     我的求职
                 </NewTopText>
                 <NewToday>
                     登录后查看求职反馈
                 </NewToday>
            </ListTextBoxStyle>
            {this.listcomponents([this.props.page1,this.props.page2,this.props.page3])}
           </HomeBox>
        );
    }
}

export default getHome(HomeListComponent)
