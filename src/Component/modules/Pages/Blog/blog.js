import React, { useState } from 'react';
import { MTButton } from '../../component/MTForm';
import { BlogStyle } from './blogStyle'
import { Card } from 'antd';
import coverImg from '../../../../core/images/sample_blog-cover.png'
import { useSelector } from 'react-redux'
import Icons from '../../component/Icons/icons';
import { postdata } from '../../../../core/Redux/Blog/postAction';

export const Blog = () => {
    const posts = useSelector((state) => state.Posts)
    // const [data, setdata] = useState(posts)
    const hepin = () => {
        // setdata(data.filter(r => r.token != index))
        postdata()
    }
    const { Meta } = Card;
    // const renderedPosts = data.map((menu, index) => (
    //     <Card key={index} className="card" cover={<img onClick={() => hepin(menu.token)} src={coverImg} alt="cardimg" />}>
    //         <Meta title={menu.title}
    //             description={
    //                 <span>{menu.createdTime}<br></br><Icons type="author" /><span>{menu.token}</span><span className="author">{menu.author}</span></span>
    //             } />
    //     </Card>
    // ))
    return (
        <BlogStyle>
            <div className="mainContent">
                <div className="heading">
                    <div className="title">Blog</div>
                    <div><MTButton className="createEle" onClick={hepin}>Create</MTButton></div>
                </div>
                <div className="cardcontent">
                    {/* {renderedPosts} */}
                </div>
            </div>
        </BlogStyle>
    )
}

export default Blog;