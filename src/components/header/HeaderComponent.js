import React, { Component } from 'react';
import { 
    HeaderBox,
    Mineleft, 
    Seekright,
    TitleBOX,
    HeaderImgBox
  } from './Header';
 

import Logo from '../../assets/images/logo.png'
import { Link,withRouter } from 'react-router-dom';

import setOveroer from './../../utils/setoverfalse';
import SeekBox from './Seekbox';


class HeaderComponent extends Component {
    componentDidMount(){
        this.props.setOver()
    }
    constructor(props){
        super(props) 
        this.state={
            seekboxshou:false
        }
    }
    setseekboxshowheid=()=>{
        this.setState({
           seekboxshou:!this.state.seekboxshou
        })
    }
    render() { 
        let {changeRight,headertext}=this.props
        return (
            <HeaderBox>
                <Mineleft onClick={changeRight}>
                <svg t="1551792883949" className="icon" viewBox="0 0 1024 1024" version="1.1" width="20" height="20"><defs></defs><path d="M896 128H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h768c17.7 0 32-14.3 32-32s-14.3-32-32-32zM896 480H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h768c17.7 0 32-14.3 32-32s-14.3-32-32-32zM896 832H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h768c17.7 0 32-14.3 32-32s-14.3-32-32-32z" fill="#fff" p-id="2089"></path></svg>
                </Mineleft>
                <TitleBOX>
                    <HeaderImgBox>
                   {!headertext?<Link to="/" > <img src={Logo} alt="首页"/></Link>:<span>{headertext}</span>} 
                    </HeaderImgBox>
                </TitleBOX>
                {
                    headertext =="登录大街网"&&headertext !="注册"?
                    <Seekright>
                        <Link to="/regiater">注册</Link>
                    </Seekright>
                    :headertext ==""?<Seekright>
                        <span onClick={this.setseekboxshowheid}>
                            <svg t="1551792491895" className="icon" viewBox="0 0 1024 1024" version="1.1" width="25" height="30"><defs></defs><path d="M532.48 622.7968L581.12 573.44l238.26432 241.7664a35.15392 35.15392 0 0 1 0 49.3568 34.14016 34.14016 0 0 1-48.64 0L532.48 622.7968zM399.36 665.6c-147.0464 0-266.24-119.1936-266.24-266.24s119.1936-266.24 266.24-266.24 266.24 119.1936 266.24 266.24-119.1936 266.24-266.24 266.24z m0-40.96c124.416 0 225.28-100.864 225.28-225.28s-100.864-225.28-225.28-225.28-225.28 100.864-225.28 225.28 100.864 225.28 225.28 225.28z" fill="#fff" p-id="3241"></path></svg>
                        </span>
                    </Seekright>:<Seekright/>
                }
               <SeekBox seekboxshowhid={this.state.seekboxshou} onClicks={this.setseekboxshowheid}></SeekBox>
            </HeaderBox>
        );
    }
}



export default withRouter(setOveroer(HeaderComponent));
