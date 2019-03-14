import React, { Component } from 'react';
import HeaderComponent from './components/header/HeaderComponent';
import HomeListComponent from './components/home/HomeListComponent';
import { ScrollBox, Scrll, RightBox, LeftBox } from './components/header/Header';
import LeftBanBox from './parge/leftnav/LeftNavBox';



import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from './containers/login/login';
import Regiater from './containers/regiater/regiater';

import BScroll from 'better-scroll'
import More from './parge/more/More';



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      right:false,
      headertext:''
    }
  }
  
  changeRight=()=>{
    this.setState({
      right:this.state.right = !this.state.right
    })
  }
  componentWillMount(){
    
   
  }
  componentDidMount(){
    new BScroll('.bigscrollbox',{
      scrollbar: {
        fade: true,
        interactive: false 
       },
       mouseWheel:true,
       click:true,
       bounce:false
    })
  }
  render() {
    switch (this.props.location.pathname) {
      case '/login':
      this.state.headertext='登录大街网'
      break;
      case '/regiater':
      this.state.headertext='注册'
      break;
      case '/home':
      this.state.headertext=''
      break;
    }
    
    let {right,headertext}=this.state
     return (
      <div className="App">
        <ScrollBox>
          <div className="bigscrollbox">
            <Scrll right={right}>
              <LeftBox res={right}>
                <LeftBanBox changeRight={this.changeRight}></LeftBanBox> 
              </LeftBox>
              <RightBox res={right}>
                <HeaderComponent changeRight={this.changeRight} headertext={headertext}></HeaderComponent>
                <Switch>
                  <Route path='/home' exact  component={HomeListComponent}/>
                  <Redirect from="/" exact to="/home" />
                  <Route path='/login' component={Login}/>
                  <Route path='/regiater' component={Regiater}/>
                  <Route path='/more/:moer' component={More} />
                </Switch>
              </RightBox>
            </Scrll>
          </div>
        </ScrollBox>
      </div>
    )
  }

}



export default withRouter(App);
