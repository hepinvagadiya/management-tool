import React, { useEffect, useState } from 'react';
import { UserGroStyle } from './userGroStyle'
import { MTButton } from '../../component/MTForm';
import { Table } from 'antd';
import MTModal from '../../component/MTmodel/modal';
import { Button, Form, Input, Radio, } from 'antd';
import { UserGroupData, GetUser, Registration } from '../../../../core/Redux/UserGroup/userGroupAction';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../modules/component/Icons/icons'

import { Select } from 'antd';

export const UserGroup = () => {
    const [createUserGro, setCreateUserGro] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;
    const dispatch = useDispatch()
    const user = useSelector(state => state).groupTable
    const [delet, setDelete] = useState(false);
    const [title, setTitle] = useState("");

    useEffect(() => {
        dispatch(UserGroupData())
        dispatch(GetUser())
    }, [dispatch])

    console.log(user.findUserGroup, 'user')
    const columns = [
        {
            "title": "Group Name",
            "dataIndex": "groupName",
            "key": "groupName",
            "width": '30%',
        },
        {
            "title": "Group Type",
            "dataIndex": "groupType",
            "key": "groupType",
            "width": '30%',
        },
        {
            "title": "Group Users",
            "dataIndex": "groupUsers",
            "key": "groupUsers",
            "width": '30%',
        },

        {
            "title": "Action",
            "dataIndex": "action",
            "key": "action",
            render: (text, record) => (
                <span>
                    <span>
                        <Icons type="post_edit" />
                    </span>
                    <span onClick={() => deleteTableRow(record.groupName)}>
                        <Icons type="post_delete" />
                    </span>
                </span>
            ),
        },

    ];

    const onCancel = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setDelete(false);
    }
    const CreatePostModal = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setCreateUserGro(true)
    };
    const createGroup = (value) => {
        console.log(value, "value")
        document.body.classList.add('ReactModal__Body--before-close')
        setCreateUserGro(false)
        dispatch(Registration(value))
    };
    const deleteTableRow = (title) => {
        setDelete(true);
        setTitle(title);
    }
    const deleteOk = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setDelete(false);
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
                    title="Delete Post"
                    onOk={deleteOk}
                    closable={false}
                    maskClosable={false}
                    footer={[
                        <Button key="submit" className="deleteEle" onClick={deleteOk}>Delete</Button>,
                        <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                    ]}
                >
                    <p className="warning">Are you sure to delete this post permenently?</p>
                    <Icons type="groupsMenu" /> <span className="title">{title}</span>
                </MTModal>
                <MTModal
                    visible={createUserGro}
                    title="User Group"
                    onOk={form.submit}
                    onCancel={createGroup}
                    closable={true}
                    maskClosable={false}
                    footer={[
                        <Button key="submit" htmlType="submit" form="formgroup" className="deleteEle">Save</Button>,
                    ]}
                >
                    <Form id="formgroup" form={form} onFinish={createGroup}>
                        <div className="inputs">
                            <div className="label">Group Name</div>
                            <Form.Item name="groupName" rules={[{ required: true, message: 'Please input Post Title!' }]} >
                                <Input
                                    name="email"
                                    type="text"
                                    placeholder="Enter Group Name"
                                />
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Group Type</div>
                            <Form.Item name="groupType" rules={[{ required: true, message: 'Please pick an item!' }]} >
                                <Radio.Group>
                                    <Radio value="a" style={{ padding: "5px" }}>Public(Readable to user outside group)</Radio>
                                    <Radio value="b" style={{ padding: "5px" }}>Private (Accessible to Group Users Only)</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className="inputs">
                            <div className="label">Group Type</div>
                            <Form.Item name="groupUsers" rules={[{ required: true, message: 'Please input Post Title!' }]} >
                                <Select mode="multiple" style={{ width: '100%' }} placeholder="Select Any Group">
                                    
                                </Select>
                            </Form.Item>
                        </div>
                    </Form>
                </MTModal>
                <div className="tableContent">
                    <Table
                        sticky
                        pagination={{ pageSize: 12 }}
                        columns={columns}
                        dataSource={user.groupTable}
                        scroll={{ y: 'calc(77.5vh - 4em)' }}
                    />
                </div>
            </div>
        </UserGroStyle>
    );
}

export default UserGroup;