import React, { useEffect } from 'react';
import { MTButton } from '../../component/MTForm';
import { useDispatch, useSelector } from 'react-redux';
import { BlogStyle } from './blogStyle'
import { GET } from '../../../../core/Redux/Blog/postAction';
import { Card } from 'antd';
import coverImg from '../../../../core/images/sample_blog-cover.png'
import Icons from '../../component/Icons/icons';

export const Blog = () => {
    const dispatch = useDispatch()
    let blogs = useSelector(state => state)
    useEffect(() => {
        dispatch(GET())
    }, [dispatch])
    const Maindata = blogs.data.blogs
    if (Maindata.length === 0) {
        var newData = [1, 2]
    } else {
        newData = Maindata.posts
    }
    const { Meta } = Card;
    const renderedPosts = newData.map((menu, index) => (
        <Card key={index} className="card" cover={<img src={coverImg} alt="cardimg" />}>
            <Meta title={menu.title}
                description={
                    <span>
                        {menu.createdTime}<br></br>
                        <span className="user"><Icons type="author" /></span>
                        <span className="author"> {menu.author}</span>
                        <span className="editDel"><Icons type="post_edit"/> <Icons type="post_delete" /></span>
                    </span>
                } />
        </Card>
    ))
    return (
        <BlogStyle>
            <div className="mainContent">
                <div className="heading">
                    <div className="title">Blog</div>
                    <div><MTButton className="createEle">Create</MTButton></div>
                </div>
                <div className="cardcontent">
                    {renderedPosts}
                </div>
            </div>
        </BlogStyle>
    )
}

export default Blog;