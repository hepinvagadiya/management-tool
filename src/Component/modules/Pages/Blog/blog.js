import React, { Component } from 'react';
import { MTButton } from '../../component/MTForm';
import { BlogStyle } from './blogStyle'
import { Card } from 'antd';
import {posts} from '../../../../core/Array/array'
import coverImg from '../../../images/sample_blog-cover.png'
const { Meta } = Card;

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts: posts,
        };
    }

    render() {
        const {Posts} = this.state
        return (
            <BlogStyle>
                <div className="mainContent">
                    <div className="heading">
                        <div className="title">Blog</div>
                        <div><MTButton className="createEle">Create</MTButton></div>
                    </div>
                    <div className="cardcontent">
                        {Posts.map((menu, index) => (
                            <Card
                                key={index}
                                className="card"
                                cover={<img src={coverImg}/>}
                            >
                                <Meta
                                    title={menu.title}
                                    description={menu.createdTime}
                                />
                            </Card>
                        ))}
                    </div>
                </div>
            </BlogStyle>
        );
    }
}

export default Blog;