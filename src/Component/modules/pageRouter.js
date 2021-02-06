import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import User from './Pages/User/user';
import UserGroup from './Pages/UserGroup/userGroup';
import Blog from './Pages/Blog/blog'
import ChatRoom from './Pages/Chat_Room/chatRoom';
import TaskManagement from './Pages/Task_Manager/taskMan'
import { sideBar } from '../../core/Array/array'

const PageRouter = () => {
    return <div>
        <Switch>
            <Route exact path={`/ZeronSec/users`} component={User} />
            <Route exact path={`/ZeronSec/groups`} component={UserGroup} />
            <Route exact path={`/ZeronSec/blog`} component={Blog} />
            <Route exact path={`/ZeronSec/chatroom`} component={ChatRoom} />
            <Route exact path={`/ZeronSec/taskmanagement`} component={TaskManagement} />
            <Redirect to={`/ZeronSec${sideBar[0].SideMenu[sessionStorage.getItem('current')].routingPath}`} />
        </Switch>
    </div>
};

export default PageRouter;