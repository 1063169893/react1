import React, { Component } from 'react';

import {LoginBox,
    NamePsswordBox,
    NameBox,
    NameText,
    InputBox,
    CodeButton,
    LoginTextBox,
    LoginStateBox,
    OtherLoginBox
} from './loginStyles'


class Login extends Component {
    style={
        background:"#fff",
        height:'100%',
        width: '100%'

    }
    render() {
        return (
            <div style={this.style}>
                    <LoginBox>
                        <NamePsswordBox>
                            <NameBox>
                                <NameText>
                                    用户名
                                </NameText>
                                <InputBox>
                                    <input name="" id="" type="text" placeholder="手机号/邮箱" />
                                </InputBox>
                            </NameBox>
                            <NameBox>
                                <NameText>
                                    密码
                                </NameText>
                                <InputBox>
                                    <input name="" id="" type="password" placeholder="密码"/>
                                </InputBox>
                            </NameBox>
                        </NamePsswordBox>

                        <CodeButton>
                            <a>点击完成验证</a>
                        </CodeButton>
                        <LoginTextBox>
                            <a>登录</a>
                        </LoginTextBox>
                        <LoginStateBox>
                            <label for="fember">
                                <input type="checkbox" name="rememberMe" id="fember" /> <span>记住登录状态</span>
                            </label>
                            <a>忘记密码？</a>
                        </LoginStateBox>
                        <OtherLoginBox>
                            使用其他网站账号登录
                        </OtherLoginBox>
                    </LoginBox>
            </div>
        );
    }
}

export default Login;
