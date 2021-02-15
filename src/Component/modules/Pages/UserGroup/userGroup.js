import React, { useEffect, useState } from 'react';
import { UserGroStyle } from './userGroStyle'
import { MTButton, MTInput } from '../../component/MTForm';
import { Table, Tooltip } from 'antd';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Radio, } from 'antd';
import { UserGroupData, GetUserData, Registration, DeleteUserGroup, FindUserGroup, UpdateGroup } from '../../../../core/Redux/UserGroup/userGroupAction';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../modules/component/Icons/icons'
import { Select } from 'antd';

export const UserGroup = () => {
    const user = useSelector(state => state)
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [createUserGro, setCreateUserGro] = useState(false);
    const [delet, setDelete] = useState(false);
    const [editUserGr, setEditUserGr] = useState(false);
    const [editToken, setEdittoken] = useState("")
    const [title, setTitle] = useState("");
    const [gettoken, setToken] = useState("");
    const [select, selectIndex] = useState("")

    useEffect(() => {
        dispatch(GetUserData())
        dispatch(UserGroupData())
    }, [dispatch])
    useEffect(() => {
        if (user.groupTable.editStatus === true) { setLoading(false); form.resetFields(); setEditUserGr(false) }
        if (user.groupTable.delStatus === true) { setLoading(false); setDelete(false); }
        if (user.groupTable.status === true) { setCreateUserGro(false); setLoading(false); form.resetFields(); }
        if (user.groupTable.findStatus) {
            setEdittoken(user.groupTable.findUserGroup.data.token);
            form.setFieldsValue(user.groupTable.findUserGroup.data);
        }
    }, [user.groupTable.status, user.groupTable.findUserGroup, user.groupTable.findStatus, user.groupTable.editStatus, user.groupTable.delStatus, form])
    const columns = [
        {
            "title": "Group Name",
            "dataIndex": "groupName",
            "key": "groupName",
            "width": '45%',
            "ellipsis": true,
            sorter: (a, b) => a.groupName.length - b.groupName.length,
        },
        {
            "title": "Group Type",
            "dataIndex": "groupType",
            "key": "groupType",
            "width": '45%',
            "ellipsis": true,
        },
        {
            "title": "Action",
            "dataIndex": "action",
            "key": "action",
            "ellipsis": true,
            render: (text, record, index) => (
                <span>
                    <Tooltip placement="bottom" title="Edit">
                        <span onClick={() => selectRow(record.token, index)} style={{ cursor: "pointer" }}>
                            <Icons type="post_edit" />
                        </span>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Delete">
                        <span onClick={() => deleteTableRow(record.groupName, record.token)} style={{ cursor: "pointer" }}>
                            <Icons type="post_delete" />
                        </span>
                    </Tooltip>
                </span>
            ),
        },
    ];

    const CreatePostModal = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        form.resetFields();
        setCreateUserGro(true)
    };
    const deleteTableRow = (title, token) => {
        setDelete(true);
        setTitle(title);
        setToken(token)
    }
    const selectRow = (record, token) => {
        dispatch(FindUserGroup(record))
        selectIndex(token);
        setEditUserGr(!editUserGr)
    }
    const userGroupActions = (value) => {
        document.body.classList.add('ReactModal__Body--before-close')
        if (createUserGro) {
            dispatch(Registration(value))
        } else if (editUserGr) {
            dispatch(UpdateGroup(value, editToken, select))
        } else {
            dispatch(DeleteUserGroup(gettoken))
        }
        setLoading(true);
    }
    const onCancel = () => {
        form.resetFields();
        document.body.classList.add('ReactModal__Body--before-close')
        setDelete(false);
        setCreateUserGro(false)
        setLoading(false);
        setEditUserGr(false)
    }

    return (
        <UserGroStyle>
            <div className="heading">
                <div className="title">UserGroup</div>
                <div ><MTButton className="createEle" onClick={CreatePostModal}>Create</MTButton></div>
            </div>
            <div className="usergrContent">
                <div className="tableContent">
                    <Table
                        sticky
                        pagination={{ position: ['bottomRight'] }}
                        columns={columns}
                        dataSource={user.groupTable.groupTable}
                        scroll={{ y: 'calc(77.5vh - 4em)' }}
                    />
                </div>
            </div>
            <MTModal
                visible={delet ? delet : editUserGr ? editUserGr : createUserGro}
                title={delet ? "Delete UserGroup" : createUserGro === true ? 'User Group' : 'Edit UserGroup'}
                onOk={form.submit}
                onCancel={onCancel}
                closable={delet ? false : true}
                maskClosable={false}
                footer={delet ? [
                    <Button key="submit" loading={loading} className="deleteEle" onClick={userGroupActions}>Delete</Button>,
                    <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                ] : [<Button key="submit" loading={loading} htmlType="submit" form="formgroup" className="deleteEle">Save</Button>]}
            >
                {delet ? <span>
                    <p className="warning">Are you sure to delete this UserGroup permenently?</p>
                    <Icons type="groupsMenu" /> <span className="title">{title}</span>
                </span>
                    : <Form layout="inline" id="formgroup" form={form} onFinish={userGroupActions} >
                        <MTInput
                            className="inputs"
                            name="groupName"
                            type="text"
                            label="Group Name"
                            placeholder="Enter Group Name"
                            message="Please input Groupname!"
                            onKeyPress={true}
                        />
                        <div className="inputs">
                            <div className="label">Group Type</div>
                            <Form.Item name="groupType" rules={[{ required: true, message: 'Please pick public or private!' }]} >
                                <Radio.Group>
                                    <Radio value="Public" style={{ padding: "5px" }}>Public(Readable to user outside group)</Radio>
                                    <Radio value="Private" style={{ padding: "5px" }}>Private (Accessible to Group Users Only)</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Group Users</div>
                            <Form.Item name="groupUsers" rules={[{ required: true, message: 'Please input Group User!' }]} >
                                <Select mode="multiple" style={{ width: '100%' }} placeholder="Select Any Group" options={user.groupTable.getAllUser} />
                            </Form.Item>
                        </div>
                    </Form>}
            </MTModal>
        </UserGroStyle>
    );
}

export default UserGroup;