import React, { useEffect, useState } from 'react';
import { MTButton } from '../../component/MTForm';
import { useDispatch, useSelector } from 'react-redux';
import { BlogStyle } from './blogStyle'
import { BlogData, BlogCreate, DeleteBlog } from '../../../../core/Redux/Blog/postAction';
import { Card, Button, Form, Input, Upload, Select, Tooltip } from 'antd';
import coverImg from '../../../../core/images/sample_blog-cover.png'
import Icons from '../../component/Icons/icons';
import MTModal from '../../component/MTmodel/modal';
import { DownloadOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';

export const Blog = () => {
    const { Meta } = Card;
    const { Option } = Select;
    const [form] = Form.useForm();
    const [delet, setDelete] = useState(false);
    const [create, setCreate] = useState(false);
    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [BlogToken, setBlogToken] = useState("")
    const [authorToken, setauthorToken] = useState("")
    const [fileList, updateFileList] = useState([]);
    const children = [];
    const dispatch = useDispatch()
    const blogs = useSelector(state => state)

    useEffect(() => {
        dispatch(BlogData())
    }, [dispatch])
    useEffect(() => {
        if (blogs.blogs.status === true) {
            setCreate(false)
            setLoading(false)
            form.resetFields();
        }
    }, [blogs.blogs.status, form])
    // console.log(blogs.blogs)
    const props1 = {
        action: 'http://10.1.1.20:8085/file/uploadFile',
        headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
        fileList,
        onChange: info => {
            info.file.response = null
            if (info.fileList.length === 2) {
                updateFileList(info.fileList.pop(info.fileList[1]));
            }
        },
        showUploadList: {
            showRemoveIcon: true,
            removeIcon: <Icons type="close" />,
        },
    };
    const localFiles = {
        multiple: true,
        action: 'http://10.1.1.20:8085/file/uploadFile',
        headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
        showUploadList: {
            showRemoveIcon: true,
            removeIcon: <Icons type="close" />,
        },
    }
    const onCancel = () => {
        form.resetFields();
        document.body.classList.add('ReactModal__Body--before-close')
        setDelete(false);
        setView(false);
        setCreate(false)
    }
    const deleteModal = (title, authorToken, BlogToken) => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setDelete(true);
        setTitle(title)
        setBlogToken(BlogToken)
        setauthorToken(authorToken)
    };
    const deleteEle = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setDelete(false);
        dispatch(DeleteBlog(BlogToken, authorToken))
    };
    const CreatePostModal = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setCreate(true);
    };
    const createEle = (value) => {
        document.body.classList.add('ReactModal__Body--before-close')
        value.coverImageToken = value.coverImageToken[0].response.response.token
        value.filesToken = value.filesToken.fileList.map((p, i) => p.response.response.token)
        const hash = value.hashTags
        const hash1 = hash.map((p) => "#" + p)
        const hash2 = hash1.join()
        value.hashTags = hash2;
        const authorToken = JSON.parse(sessionStorage.getItem('Login')).data.usertoken
        dispatch(BlogCreate(value, authorToken))
        setLoading(true);
    };
    const ViewPostModal = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setView(true);
    };
    const viewEle = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setView(false);
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }
    children.push(<Option></Option>);
    return (
        <BlogStyle>
            <div className="mainContent">
                <div className="heading">
                    <div className="title">Blog</div>
                    <div><MTButton className="createEle" onClick={CreatePostModal}>Create</MTButton></div>
                </div>
                <div className="body">
                    <div className="cardcontent">
                        <div className="cardBox">
                            {blogs.blogs.blogs === undefined ? null : blogs.blogs.blogs.map((menu, index) => (
                                <Card key={index} className="card" cover={<img src={coverImg} alt="cardimg" onClick={ViewPostModal} />}>
                                    <Meta title={menu.Title}
                                        description={
                                            <span>
                                                {menu.CreationTime}<br></br>
                                                <span className="user"><Icons type="author" /></span>
                                                <span className="author"> {menu.Author}</span>
                                                <span className="editDel">
                                                    <Tooltip placement="bottom" title="edit">
                                                        <span>
                                                            <Icons type="post_edit" />
                                                        </span>
                                                    </Tooltip>
                                                    <Tooltip placement="bottom" title="delete">
                                                        <span onClick={() => deleteModal(menu.Title, menu.authorToken, menu.BlogToken)}>
                                                            <Icons type="post_delete" />
                                                        </span>
                                                    </Tooltip>
                                                </span>
                                            </span>
                                        }
                                    />
                                </Card>
                            ))}
                        </div>
                    </div>
                    {/* <Pagination
                        showSizeChanger
                        onShowSizeChange={onShowSizeChange}
                        defaultCurrent={1}
                        total={50}
                        pageSize={10}
                    /> */}
                </div>
                {/* delete Post */}
                <MTModal
                    visible={delet}
                    title="Delete Post"
                    onOk={deleteEle}
                    closable={false}
                    maskClosable={false}
                    footer={[
                        <Button key="submit" className="deleteEle" onClick={deleteEle}>Delete</Button>,
                        <Button key="back" className="cancelEle" onClick={onCancel}>Cancel</Button>
                    ]}
                >
                    <p className="warning">Are you sure to delete this post permenently?</p>
                    <Icons type="del_postname" /> <span className="title">{title}</span>
                </MTModal>
                {/* View Post */}
                <MTModal
                    visible={view}
                    title="View Post"
                    className="footer"
                    onOk={viewEle}
                    onCancel={viewEle}
                    closable={true}
                    maskClosable={false}
                    width={850}
                >
                    <div className="viewHeader">First Sample Post For View</div>
                    <div className="viewContent">
                        <img src={coverImg} alt="cardimg" className="viewImg" />
                        <div>
                            <div className="createCont"><span className="sideHeading"> Created On :</span><br></br><p>02 Auguest 2020, 06:33</p></div>
                            <div className="author"><span className="sideHeading"> Author :</span><br></br><p>Hepin Vagadiya</p></div>
                            <div className="author"><span className="sideHeading"> HashTags :</span><br></br><p>#Tag1, #Reactjs, #usecases, #training, #postoftheday</p></div>
                        </div>
                    </div>
                    <div className="postDetail">
                        This is sample post created for design make sure if conetent is bigger then scroll will be automatic generated<br></br><br></br>
                            This is sample post created for design make sure if conetent is bigger then scroll will be automatic generated
                            This is sample post created for design make sure if conetent is bigger then scroll will be automatic generated
                        </div>
                    <div className="author">
                        <span className="sideHeading"> Attechments :</span><br></br>
                        <div className="attech">attechment1_post123.pdf <DownloadOutlined /></div>
                    </div>
                </MTModal>
                {/* Create Post*/}
                <MTModal
                    visible={create}
                    title="New Post"
                    onOk={form.submit}
                    onCancel={onCancel}
                    closable={true}
                    maskClosable={false}
                    footer={[
                        <Button key="submit" loading={loading} form="create" className="deleteEle" htmlType="submit">Save</Button>,
                    ]}
                >
                    <div className="newPostContent">
                        <Form form={form} layout="inline" onFinish={createEle} id="create">
                            <div className="inputs">
                                <div className="label">Post Title</div>
                                <Form.Item name='title' rules={[{ required: true, message: 'Please input Post Title!' }]} >
                                    <Input
                                        autoComplete="off"
                                        type="text"
                                        placeholder="Enter Post Title"
                                    />
                                </Form.Item>
                            </div>
                            <div className="inputs">
                                <div className="label">Post Cover Image </div>
                                <Form.Item
                                    name="coverImageToken"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                    rules={[{ required: true, message: 'Please Attech PNG file!' }]}
                                >
                                    <Upload accept='.png' {...props1} className="upload-list-inline">
                                        <MTButton className="select" >Select</MTButton>
                                    </Upload>
                                </Form.Item>
                            </div>
                            <div className="inputs">
                                <div className="label">Post Content</div>
                                <Form.Item name='content'>
                                    <Input.TextArea
                                        autoComplete="off"
                                        placeholder="Enter Post Content"
                                        style={{ maxHeight: "130px" }}
                                    />
                                </Form.Item>
                            </div>
                            <div className="inputs">
                                <div className="label">Attechments</div>
                                    
                                <Form.Item name="filesToken" getValueFromEvent={normFile} rules={[{ required: true, message: 'Please Attech any file !' }]} >
                                    <Upload {...localFiles} className="upload-list-inline local">
                                        <MTButton className="select">Select</MTButton>
                                    </Upload>
                                </Form.Item>
                            </div>
                            <div className="inputs">
                                <div className="label">Hashtags</div>
                                <Form.Item name="hashTags" rules={[{ required: true, message: 'Please Select Any Option!' }]} >
                                    <Select mode="tags" style={{ width: '100%' }} placeholder="Enter Tags">
                                        {children}
                                    </Select>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </MTModal>
            </div>
        </BlogStyle >
    )
}

export default Blog;