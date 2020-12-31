import React, { Component } from 'react';
import { MTButton } from '../../component/MTForm';
import { UserStyle } from './userStyle'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <UserStyle>
                <div className="heading">
                    <div className="title">User</div>
                    <div><MTButton className="createEle">Create</MTButton></div>
                </div>
            </UserStyle>
        );
    }
}

export default User;