import React, { Component } from 'react';
import { MTButton } from '../../component/MTForm';
import { ChatRoomStyle } from './chatRoomStyle'

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ChatRoomStyle>
                <div className="heading">
                    <div className="title">ChatRoom</div>
                    <div><MTButton className="createEle">Create</MTButton></div>
                </div>
            </ChatRoomStyle>
        );
    }
}

export default ChatRoom;