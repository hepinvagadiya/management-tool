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
        render: () => (
            <span> <Icons type="post_edit" />   <Icons type="post_delete" /> </span>
        ),
    }
];