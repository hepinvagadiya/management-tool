import React, { useEffect, useState } from 'react';
import { MTButton } from '../../component/MTForm';
import { useDispatch, useSelector } from 'react-redux';
import { BlogStyle } from './blogStyle'
import { GET } from '../../../../core/Redux/Blog/postAction';
import { Card, Button, Form, Input, Upload, message } from 'antd';
import coverImg from '../../../../core/images/sample_blog-cover.png'
import Icons from '../../component/Icons/icons';
import MTModal from '../../component/MTmodel/modal';

export const Blog = () => {
    const dispatch = useDispatch()
    let blogs = useSelector(state => state)
    const [delet, setDelete] = useState(false);
    const [create, setCreate] = useState(false);
    const [title, setTitle] = useState("")
    const [fileList, updateFileList] = useState([]);

    useEffect(() => {
        dispatch(GET())
    }, [dispatch])

    const props = {
        fileList,
        beforeUpload: file => {
            if (file.type !== 'image/png') {
                message.error(`${file.name} is not a png file`);
            }
            return file.type === 'image/png';
        },
        onChange: info => {
            updateFileList(info.fileList.filter(file => !!file.status));
        },
        showUploadList: {
            showRemoveIcon: true,
            removeIcon: <Icons type="close" />,
        },
    };

    const deleteModal = (title) => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setDelete(true);
        setTitle(title)
    };
    const deleteEle = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setDelete(false);
    };

    const CreatePostModal = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setCreate(true);
    };

    const createEle = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setCreate(false);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const Maindata = blogs.data.blogs
    if (Maindata.length === 0) {
        var newData = [1, 2]
    } else {
        newData = Maindata.posts
    }

    const { Meta } = Card;
    return (
        <BlogStyle>
            <div className="mainContent">
                <div className="heading">
                    <div className="title">Blog</div>
                    <div><MTButton className="createEle" onClick={CreatePostModal}>Create</MTButton></div>
                </div>
                <div className="cardcontent">
                    {newData.map((menu, index) => (
                        <Card key={index} className="card" cover={<img src={coverImg} alt="cardimg" />}>
                            <Meta title={menu.title}
                                description={
                                    <span>
                                        {menu.createdTime}<br></br>
                                        <span className="user"><Icons type="author" /></span>
                                        <span className="author"> {menu.author}</span>
                                        <span className="editDel">
                                            <Icons type="post_edit" /> <span onClick={() => deleteModal(menu.title)}><Icons type="post_delete" /></span>
                                        </span>
                                    </span>
                                }
                            />
                        </Card>
                    ))}
                    <MTModal
                        visible={delet}
                        title="Delete Post"
                        onOk={deleteEle}
                        closable={false}
                        maskClosable={false}
                        footer={[
                            <Button key="submit" className="deleteEle" onClick={deleteEle}>Delete</Button>,
                            <Button key="back" className="cancelEle" onClick={deleteEle}>Cancel</Button>
                        ]}
                    >
                        <p className="warning">Are you sure to delete this post permenently?</p>
                        <Icons type="del_postname" /> <span className="title">{title}</span>
                    </MTModal>
                    <MTModal
                        visible={create}
                        title="New Post"
                        onOk={createEle}
                        maskClosable={false}
                        footer={[
                            <Button key="submit" className="deleteEle">Save</Button>,
                        ]}
                    >
                        <div className="newPostContent">
                            <Form>
                                <div className="inputs">
                                    <div className="label">Post Title</div>
                                    <Form.Item name={['user', 'name']} rules={[{ required: true, message: 'Please input Post Title!' }]} >
                                        <Input
                                            name="email"
                                            type="text"
                                            placeholder="Enter Post Title"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="inputs">
                                    <div className="label">Post Cover Image </div>
                                    <Form.Item
                                        name="upload"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                    >
                                        <Upload accept='.png' {...props} className="upload-list-inline">
                                            <MTButton className="select">Select</MTButton>
                                        </Upload>
                                    </Form.Item>
                                </div>
                                <div className="inputs">
                                    <div className="label">Post Content</div>
                                    <Form.Item>
                                        
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </MTModal>
                </div>
            </div>
        </BlogStyle>
    )
}

export default Blog;