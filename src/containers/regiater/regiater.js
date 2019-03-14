import React, { Component } from 'react';
import {  CodeButton, LoginTextBox, InputBox } from '../login/loginStyles';
import { RegiaterTextBox, PhoneBox, PhoneNum86,RegiaterBox, PromptLogin, FootText } from './regiaterStyles';

import { Link } from 'react-router-dom';



class Regiater extends Component {
    style={
        background:"#fff",
        height:"100%",
        width:"100%",
        
    }
    render() {
        
        return (
            <div style={this.style}> 
               <RegiaterBox>
                   <RegiaterTextBox>
                       <PhoneBox>
                            <PhoneNum86>
                                +86    |
                            </PhoneNum86>
                            <InputBox>
                                <input type="text" placeholder="请输入您的手机号"></input>
                            </InputBox>
                       </PhoneBox>
                       <PhoneBox>
                            <PhoneNum86>
                                设置密码
                            </PhoneNum86>
                            <InputBox>
                                <input type="password" placeholder="6-20位字母加数字组合"></input>
                            </InputBox>
                       </PhoneBox>
                   </RegiaterTextBox>
                   <CodeButton>
                       <a>点击完成验证</a>
                   </CodeButton>
                   <LoginTextBox>
                       <a>下一步</a>
                   </LoginTextBox>
                   <PromptLogin>
                       已有账号？  
                       <Link to="/login">立即登录</Link>
                   </PromptLogin>
               </RegiaterBox>
               <FootText>
                   我已阅读并同意 
                   
                   <a>大街网服务条款</a>
               </FootText>
            </div>
        );
    }
}

export default Regiater;
