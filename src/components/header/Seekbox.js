import React, { Component } from 'react';
import { Seekboxstyle, SeekInputbox, BackColor, InputBox } from './StyleSeekbox';

class SeekBox extends Component {
    constructor(prop){
        super(prop)
    }
    render() {
        return (
                <Seekboxstyle showheid={this.props.seekboxshowhid}>
                    <SeekInputbox>
                        <InputBox>
                            <input type="text" placeholder="请输入职位关键字" className="textinput"/>
                            <input type="submit" className="submitinput"/>
                        </InputBox>
                    </SeekInputbox>
                    <BackColor onClick={this.props.onClicks}></BackColor>
                </Seekboxstyle>
        );
    }
}

export default SeekBox;
