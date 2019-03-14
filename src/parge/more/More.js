import React, { Component } from 'react';
import { 
    MoreBox, 
    MoreSeekLiBox, 
    HeaderTopBox,
    CompanyNameBox,
    TreatmentListBox,
    SpanTextBox,
    EmImage
} from './StyleMore';
import { IbackgrooundImageRight } from '../../components/home/ListTextBoxStyle';

import getHome from './../../utils/getHome';

class More extends Component {
    constructor(props){
        super(props)
        this.state={
            text:null
        }
    }
    componentWillMount(){
        this.props.getList()
        console.log(this.props.match.params.moer)
        console.log(this.props)
        switch (this.props.match.params.moer) {
            case 'more1':
            this.state.text=this.props.page1
            console.log(this.state.text)
            console.log(this.props.page1)
            break;
            case 'more2':
            this.state.text=this.props.page2
            break;
            case 'more3':
            this.state.text=this.props.page3
            break;
        
            default:
                break;
        }
    }
    setComponet(){
        switch (this.props.match.params.moer) {
            case 'more1':
            this.state.text=this.props.page1
            break;
            case 'more2':
            this.state.text=this.props.page2
            break;
            case 'more3':
            this.state.text=this.props.page3
            break;
        
            default:
                break;
        }
        if(this.state.text){
            console.log(this.props)
            let {list} = this.state.text.data
               const lis=list.map(item=>{
                   return (
                    <MoreSeekLiBox key={item.jid}>
                        {item.vip?<EmImage />:''}
                        <a>
                            <HeaderTopBox>
                                {item.title}
                            </HeaderTopBox>
                            <CompanyNameBox>
                                {item.corp}
                                <i>**</i>
                            </CompanyNameBox>
                            <TreatmentListBox>
                                <span className="colorred">{item.salary}</span>
                                {
                                    item.keywords.map((ier,index)=>{
                                        return (
                                            <SpanTextBox key={index}>{ier}</SpanTextBox>
                                        )
                                    })
                                }
                            </TreatmentListBox>
                            <IbackgrooundImageRight></IbackgrooundImageRight>
                        </a>
                    </MoreSeekLiBox>

                   )
               })
               return(
                lis
               )
        }
    }
    render() {
        return (
            <div>
                <MoreBox>
                    {this.setComponet()}
                </MoreBox>
            </div>
        );
    }
}

export default getHome(More);
