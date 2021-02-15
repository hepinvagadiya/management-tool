import React, { useEffect, useState } from 'react';
import { MTButton, MTInput } from '../../component/MTForm';
import { useDispatch, useSelector } from 'react-redux';
import { BlogStyle } from './blogStyle'
import { BlogData, BlogCreate, DeleteBlog, viewBlog, updateBlog } from '../../../../core/Redux/Blog/postAction';
import { Card, Button, Form, Input, Upload, Select, Tooltip, message, Image } from 'antd';
import Icons from '../../component/Icons/icons';
import MTModal from '../../component/MTmodel/modal';
import { DownloadOutlined } from '@ant-design/icons';
import axios from 'axios';

export const Blog = () => {
    const { Meta } = Card;
    const { Option } = Select;
    const [form] = Form.useForm();
    const [delet, setDelete] = useState(false);
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [upload, setupload] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [BlogToken, setBlogToken] = useState("")
    const [EditToken, setEditToken] = useState("")
    const [authorToken, setauthorToken] = useState("")
    const [fileList, updateFileList] = useState([]);
    const children = [];
    const dispatch = useDispatch()
    const blogs = useSelector(state => state).blogs

    useEffect(() => {
        dispatch(BlogData())
    }, [dispatch])
    useEffect(() => {
        if (blogs.status) { setCreate(false); setLoading(false); form.resetFields(); }
        if (blogs.UpdateStatus) { setEdit(false); setLoading(false); form.resetFields(); }
        if (edit && blogs.viewStatus) {
            form.setFieldsValue({
                title: blogs.viewBlog.title,
                content: blogs.viewBlog.content,
                hashTags: blogs.viewBlog.hashTags.split(','),
                coverImageToken: [{ 'name': blogs.viewBlog.coverImageName, 'uid': -1 }],
            });
            updateFileList(blogs.viewBlog.fileNames.map((h, k) => ({ 'uid': Math.random(), 'name': h })))
        }
    }, [edit, blogs.status, blogs.viewStatus, blogs.UpdateStatus, blogs.viewBlog, form])
    const props1 = {
        "name": 'image',
        'method': 'post',
        'action': 'http://10.1.1.20:8085/blogImage/uploadCoverImage',
        'headers': { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
        fileList,
        onChange: info => {
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
        beforeUpload: file => {
            console.log(file, "file")
            updateFileList([...fileList, file])
            return false;
        },
        fileList,
        onChange: info => {
            if (info.file.status !== undefined) {
                const deleteItem = fileList.filter(p => p.uid !== info.file.uid)
                updateFileList(deleteItem)
            }
        },
        showUploadList: {
            showRemoveIcon: true,
            removeIcon: <Icons type="close" />,
        },
    }
    const deleteModal = (Deletetitle, author, token) => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setDelete(true);
        setTitle(Deletetitle)
        setBlogToken(token)
        setauthorToken(author)
    };
    const CreatePostModal = () => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setCreate(true);
        updateFileList([])
    };
    const EditPostModal = (token) => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setEdit(true);
        dispatch(viewBlog(token))
        setEditToken(token)
    };
    const ViewPostModal = (token) => {
        document.body.classList.remove('ReactModal__Body--before-close')
        document.body.classList.add('ReactModal__Body--open')
        setView(true);
        dispatch(viewBlog(token))
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const handleUpload = () => {
        const formData = new FormData();
        fileList.forEach(file => { formData.append('files', file); });
        axios({
            url: 'http://10.1.1.20:8085/files/uploadMultipleFiles',
            method: 'post',
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
            processData: false,
            data: formData,
        }).then((response) => {
            message.success({ content: `Blog : ${response.data.message}` });
            setupload(response.data)
        }, (error) => {
            message.error({ content: `Blog : ${error.response.data.message}` });
        });

    };
    const userActions = (value) => {
        document.body.classList.add('ReactModal__Body--before-close')
        const AuthorToken = JSON.parse(sessionStorage.getItem('Login')).data.usertoken
        if (view) {
            setView(false);
        } else if (delet) {
            setDelete(false);
            dispatch(DeleteBlog(BlogToken, authorToken))
        } else if (create || edit) {
            value.coverImageToken = value.coverImageToken[0].response.response.token
            value.filesToken = upload.data.map((p, i) => p.token)
            const hash = value.hashTags
            const hash1 = hash.map((p) => '#' + p)
            const hash2 = hash1.join()
            value.hashTags = hash2;
            const token = EditToken
            if (edit) { dispatch(updateBlog(value, AuthorToken, token)); } else { dispatch(BlogCreate(value, AuthorToken)) }
        }
        setLoading(true);
    }
    const Cancel = () => {
        document.body.classList.add('ReactModal__Body--before-close')
        form.resetFields();
        setView(false);
        setCreate(false);
        setEdit(false);
        setLoading(false);
        setDelete(false);
    }
    const download = (urls) => {
        axios({
            url: urls,
            method: 'GET',
            headers: { 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('Login')).data.jwtToken.token}` },
            responseType: 'blob',
        }).then((response) => {
            console.log(response)
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'image.jpg');
            document.body.appendChild(link);
            link.click();
        }, (error) => {
            console.log(error.response)
        });
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
                            {blogs.blogs === undefined ? null : blogs.blogs.map((menu, index) => (
                                <Card
                                    key={index}
                                    className="card"
                                    cover={<Image preview={false} style={{ height: '24vh' }} src={menu.coverImage} alt="cardimg" onClick={() => ViewPostModal(menu.token)} />}
                                >
                                    <Meta title={menu.title}
                                        description={
                                            <span>
                                                {menu.createdTime}<br></br>
                                                <span className="user"><Icons type="author" /></span>
                                                <span className="author"> {menu.authorName}</span>
                                                <span className="editDel">
                                                    <Tooltip placement="bottom" title="edit">
                                                        <span onClick={() => EditPostModal(menu.token)}>
                                                            <Icons type="post_edit" />
                                                        </span>
                                                    </Tooltip>
                                                    <Tooltip placement="bottom" title="delete">
                                                        <span onClick={() => deleteModal(menu.title, menu.authorToken, menu.token)}>
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
                </div>
            </div>
            <MTModal
                visible={edit ? edit : create ? create : delet ? delet : view}
                title={edit ? "Edit Post" : create ? "New Post" : delet ? "Delete Post" : "View Post"}
                className={edit || create || delet ? null : "footer"}
                onOk={form.submit}
                onCancel={Cancel}
                closable={true}
                maskClosable={false}
                width={create || edit || delet ? 520 : 850}
                footer={create || edit ? [<Button key="submit" loading={loading} form="create" className="deleteEle" htmlType="submit">Save</Button>] :
                    delet ? [<Button key="submit" className="deleteEle" onClick={userActions}>Delete</Button>,
                    <Button key="back" className="cancelEle" onClick={Cancel}>Cancel</Button>] : null}
            >
                {create || edit ? <div className="newPostContent">
                    <Form form={form} layout="inline" onFinish={userActions} id="create">
                        <MTInput
                            className="inputs"
                            label="Post Title"
                            name="title"
                            type="text"
                            placeholder="Enter Post Title"
                            message="Please input Post Title!"
                            onKeyPress={true}
                        />
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
                            <Form.Item name="filesToken" rules={[{ required: true, message: 'Please Attech any file !' }]} >
                                <Upload {...localFiles} className="upload-list-inline local">
                                    <MTButton className="select">Select</MTButton>
                                </Upload>
                            </Form.Item>
                            <span onClick={handleUpload} style={{ color: 'Royalblue ' }}>Upload</span>
                        </div>
                        <div className="inputs">
                            <div className="label">Hashtags</div>
                            <Form.Item name="hashTags" getValueFromEvent={normFile} rules={[{ required: true, message: 'Please Select Any Option!' }]} >
                                <Select mode="tags" style={{ width: '100%' }} placeholder="Enter Tags">
                                    {children}
                                </Select>
                            </Form.Item>
                        </div>
                    </Form>
                </div> : delet ? <span>
                    <p className="warning">Are you sure to delete this post permenently?</p>
                    <Icons type="del_postname" /> <span className="title">{title}</span>
                </span> : view ? <span>
                    <div className="viewHeader">{blogs.viewBlog === undefined ? null : blogs.viewBlog.title}</div>
                    <div className="viewContent">
                        <Image preview={false} src={blogs.viewBlog === undefined ? null : blogs.viewBlog.coverImageUrl} alt="cardimg" className="viewImg" />
                        <div>
                            <div className="createCont"><span className="sideHeading"> Created On :</span><br></br><p>{blogs.viewBlog === undefined ? null : blogs.viewBlog.createdTime}</p></div>
                            <div className="author"><span className="sideHeading"> Author :</span><br></br><p>{blogs.viewBlog === undefined ? null : blogs.viewBlog.authorName}</p></div>
                            <div className="author"><span className="sideHeading"> HashTags :</span><br></br><p style={{ wordBreak: 'break-all' }}>{blogs.viewBlog === undefined ? null : blogs.viewBlog.hashTags}   </p></div>
                        </div>
                    </div>
                    <div className="postDetail">
                        {blogs.viewBlog === undefined ? null : blogs.viewBlog.content}
                    </div>
                    <div className="author">
                        <span className="sideHeading"> Attechments :</span><br></br>
                        <span style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {blogs.viewBlog === undefined ? null : blogs.viewBlog.fileNames === 'Not available' ? null : blogs.viewBlog.fileNames.map((d, i) =>
                                <div className="attech" key={i}>{d}
                                    <span onClick={() => download(blogs.viewBlog.fileUrls[i])}>
                                        <span style={{ color: '#8FA8BA' }}> <DownloadOutlined /></span>
                                    </span>
                                </div>
                            )}
                        </span>
                    </div>
                </span> : null}
            </MTModal>
        </BlogStyle >
    )
}

export default Blog;