import React, { useEffect, useState } from 'react';
import { MTButton } from '../../component/MTForm';
import { useDispatch, useSelector } from 'react-redux';
import { BlogStyle } from './blogStyle'
import { GET, Delete } from '../../../../core/Redux/Blog/postAction';
import { Card, Button, Form, Input, Upload, message, Select, Tooltip } from 'antd';
import coverImg from '../../../../core/images/sample_blog-cover.png'
import Icons from '../../component/Icons/icons';
import MTModal from '../../component/MTmodel/modal';
import { DownloadOutlined } from '@ant-design/icons';

export const Blog = () => {
    const { Meta } = Card;
    const { Option } = Select;
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    let blogs = useSelector(state => state)
    const [delet, setDelete] = useState(false);
    const [create, setCreate] = useState(false);
    const [view, setView] = useState(false);
    const [title, setTitle] = useState("");
    // const Maindata = blogs.data.blogs
    const [index, setToken] = useState("")
    const [fileList, updateFileList] = useState([]);
    // const [DataSrc, setDataSrc] = useState(Maindata.posts);
    const children = [];
    // console.log(Maindata.posts, 'Maindata')
    console.log(blogs.data.blogs.posts, 'DataSrc')
    console.log(blogs, 'asd')

    useEffect(() => {
        dispatch(GET())
    }, [dispatch])

    const props1 = {
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
    const localFiles = {
        showUploadList: {
            showRemoveIcon: true,
            removeIcon: <Icons type="close" />,
        },
    }
    const deleteModal = (title, index) => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setDelete(true);
        setTitle(title)
        setToken(index)
    };
    const deleteEle = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        setDelete(false);
        dispatch(Delete(index))
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



    children.push(<Option></Option>);
    return (
        <BlogStyle>
            <div className="mainContent">
                <div className="heading">
                    <div className="title">Blog</div>
                    <div><MTButton className="createEle" onClick={CreatePostModal}>Create</MTButton></div>
                </div>
                <div className="cardcontent">
                    {blogs.data.blogs === undefined ? null : blogs.data.blogs.map((menu, index) => (
                        <Card key={index} className="card" cover={<img src={coverImg} alt="cardimg" onClick={ViewPostModal} />}>
                            <Meta
                                title={new String(menu.title).length > 32 ? <Tooltip placement="bottom" title={menu.title}>{menu.title}</Tooltip> : menu.title}
                                description={
                                    <span>
                                        {menu.createdTime}<br></br>
                                        <span className="user"><Icons type="author" /></span>
                                        <span className="author"> {menu.author}</span>  {menu.token}
                                        <span className="editDel">
                                            <Tooltip placement="bottom" title="edit">
                                                <span>
                                                    <Icons type="post_edit" />
                                                </span>
                                            </Tooltip>
                                            <Tooltip placement="bottom" title="delete">
                                                <span onClick={() => deleteModal(menu.title, menu.token)}>
                                                    <Icons type="post_delete" />
                                                </span>
                                            </Tooltip>
                                        </span>
                                    </span>
                                }
                            />
                        </Card>
                    ))}
                    {/* delete Post */}
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
                        onCancel={createEle}
                        closable={true}
                        maskClosable={false}
                        footer={[
                            <Button key="submit" form="create" className="deleteEle" htmlType="submit">Save</Button>,
                        ]}
                    >
                        <div className="newPostContent">
                            <Form form={form} onFinish={createEle} id="create">
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
                                        <Upload accept='.png' {...props1} className="upload-list-inline">
                                            <MTButton className="select">Select</MTButton>
                                        </Upload>
                                    </Form.Item>
                                </div>
                                <div className="inputs">
                                    <div className="label">Post Content</div>
                                    <Form.Item >
                                        <Input.TextArea
                                            placeholder="Enter Post Content"
                                            style={{ maxHeight: "130px" }}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="inputs">
                                    <div className="label">Attechments</div>
                                    <Form.Item>
                                        <Upload {...localFiles} className="upload-list-inline local">
                                            <MTButton className="select">Select</MTButton>
                                        </Upload>
                                    </Form.Item>
                                </div>
                                <div className="inputs">
                                    <div className="label">Hashtags</div>
                                    <Form.Item>
                                        <Select mode="tags" style={{ width: '100%' }} placeholder="Enter Tags">
                                            {children}
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </MTModal>
                </div>
            </div>
        </BlogStyle >
    )
}

export default Blog;