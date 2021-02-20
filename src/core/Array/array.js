import React from 'react'
import Icons from '../../Component/modules/component/Icons/icons';

export const columns = [
    {
        "title": "User Name",
        render: listUsers => `${listUsers.firstName} ${listUsers.lastName}`,
        "key": "firstName",
        "width": '25%',
    },
    {
        "title": "Designation",
        "dataIndex": "designation",
        "key": "designation",
        "width": '15%',
    },
    {
        "title": "Email",
        "dataIndex": "email",
        "key": "email",
        "width": '25%',
    },
    {
        "title": "Last Login",
        "dataIndex": "lastLogin",
        "key": "lastLogin",
        "width": '25%',
    },
    {
        "title": "Action",
        "dataIndex": "action",
        "key": "action",
        // eslint-disable-next-line react/display-name
        render: () => (<span><Icons type="post_edit" />  <Icons type="post_delete" /></span>
        ),
    }
];

export const sideBar = [
    {
        "SideMenu": [
            {
                key: 1,
                uniquekey: "users",
                name: "Users",
                iconName: "usersMenu",
                routingPath: "/users",
            },
            {
                key: 2,
                uniquekey: "userGroups",
                name: "User Groups",
                iconName: "groupsMenu",
                routingPath: "/groups"
            },
            {
                key: 3,
                uniquekey: "blog",
                name: "Blog",
                iconName: "blogMenu",
                routingPath: "/blog"
            },
            {
                key: 4,
                uniquekey: "chatroom",
                name: "Chatroom",
                iconName: "chatroomMenu",
                routingPath: "/chatroom"
            },
            {
                key: 5,
                uniquekey: "taskmanagement",
                name: "Task Management",
                iconName: "taskmanagementMenu",
                routingPath: "/taskmanagement"
            },
        ]
    }
]