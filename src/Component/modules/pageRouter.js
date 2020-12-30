import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './Pages/User/user';
import UserGroup from './Pages/UserGroup/userGroup';
import Blog from './Pages/Blog/blog'
import ChatRoom from './Pages/Chat_Room/chatRoom';
import TaskManagement from './Pages/Task_Manager/taskMan'

const PageRouter = () => {
    return <div>
        <Switch>
            <Route exact path={`/Admin/User`} component={User} />
            <Route exact path={`/Admin/UserGroup`} component={UserGroup} />
            <Route exact path={`/Admin/Blog`} component={Blog} />
            <Route exact path={`/Admin/Chat_Room`} component={ChatRoom} />
            <Route exact path={`/Admin/Task_Management`} component={TaskManagement} />
        </Switch>
  </div>
};

export default PageRouter;