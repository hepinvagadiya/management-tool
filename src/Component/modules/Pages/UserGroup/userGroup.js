import React, { useEffect, useState } from 'react';
import { UserGroStyle } from './userGroStyle'
import { MTButton } from '../../component/MTForm';
import { Table, Tooltip } from 'antd';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Input, Radio, } from 'antd';
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
        dispatch(UserGroupData())
        dispatch(GetUserData())
    }, [dispatch])

    useEffect(() => {
        if (user.groupTable.status === true) {
            setCreateUserGro(false)
            setLoading(false);
            form.resetFields();
        }
        if (user.groupTable.editStatus === true) { setLoading(false); form.resetFields(); setEditUserGr(false) }
        if (user.groupTable.findStatus) {
            setEdittoken(user.groupTable.findUserGroup.data.token)
            form.setFieldsValue(user.groupTable.findUserGroup.data);
            if (user.groupTable.findStatus === true) { setEditUserGr(true) }
        }
    }, [user.groupTable.status, user.groupTable.findUserGroup, user.groupTable.findStatus, user.groupTable.editStatus, form])

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
        setCreateUserGro(true)
    };
    const createGroup = (value) => {
        document.body.classList.add('ReactModal__Body--before-close')
        dispatch(Registration(value))
        form.resetFields();
        setLoading(true);
    };
    const deleteTableRow = (title, token) => {
        setDelete(true);
        setTitle(title);
        setToken(token)
    }
    const deleteOk = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        dispatch(DeleteUserGroup(gettoken))
        setDelete(false);
    }
    const selectRow = (record, token) => {
        dispatch(FindUserGroup(record))
        selectIndex(token);
    }
    const editUserGrModal = (value) => {
        document.body.classList.add('ReactModal__Body--before-close')
        dispatch(UpdateGroup(value, editToken, select))
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
                {/* Delete Table Raw */}
                <MTModal
                    visible={delet}
                    title="Delete UserGroup"
                    onOk={deleteOk}
                    closable={false}
                    maskClosable={false}
                    footer={[
                        <Button key="submit" className="deleteEle" onClick={deleteOk}>Delete</Button>,
                        <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                    ]}
                >
                    <p className="warning">Are you sure to delete this UserGroup permenently?</p>
                    <Icons type="groupsMenu" /> <span className="title">{title}</span>
                </MTModal>
                <MTModal
                    visible={editUserGr === true ? editUserGr : createUserGro}
                    title={createUserGro === true ? 'User Group' : 'Edit UserGroup'}
                    onOk={form.submit}
                    onCancel={onCancel}
                    closable={true}
                    maskClosable={false}
                    footer={[
                        <Button key="submit" htmlType="submit" form="formgroup" loading={loading} className="deleteEle">Save</Button>,
                    ]}
                >
                    <Form layout="inline" id="formgroup" form={form} onFinish={editUserGr === true ? editUserGrModal : createGroup} >
                        <div className="inputs">
                            <div className="label">Group Name</div>
                            <Form.Item name="groupName" rules={[{ required: true, message: 'Please input Group Name!' }]} >
                                <Input
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Enter Group Name"
                                />
                            </Form.Item>
                        </div>
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
                    </Form>
                </MTModal>
                <div className="tableContent">
                    <Table
                        sticky
                        pagination={{ pageSize: 12 }}
                        pagination={{ position: ['bottomRight'] }}
                        columns={columns}
                        dataSource={user.groupTable.groupTable}
                        scroll={{ y: 'calc(77.5vh - 4em)' }}
                    />
                </div>
            </div>
        </UserGroStyle>
    );
}

export default UserGroup;