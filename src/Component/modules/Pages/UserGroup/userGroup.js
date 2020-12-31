import React, { Component } from 'react';
import { UserGroStyle } from './userGroStyle'
import { MTButton } from '../../component/MTForm';


class UserGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <UserGroStyle>
                <div className="heading">
                    <div className="title">UserGroup</div>
                    <div><MTButton className="createEle">Create</MTButton></div>
                </div>
            </UserGroStyle>
        );
    }
}

export default UserGroup;