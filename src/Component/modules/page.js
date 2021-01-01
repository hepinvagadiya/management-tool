import React, { Component } from 'react';
import { PageStyle } from "./PageStyle";
import { Layout } from 'antd';
import TopHeader from '../Layout/Header/header';
import Sidebar from '../Layout/Sidebar/sidebar';
// import Footer from '../Layout/Footer/footer';
// import PageRouter from './pageRouter'
import Cookies from 'js-cookie';
import PageRouter from './pageRouter';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            current: Cookies.get('current'),
            loading: true,
        }
    }
    handleClick = (e) => {
        this.setState({ current: e.key, });
        Cookies.set('current', e.key);
    }

    render() {
        const { Header, Content, Sider, loading, Footer } = Layout;
        return (
            <PageStyle>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <TopHeader current={this.state.current}/>
                    </Header>
                    <Layout className="site-layout">
                        <Sider className="site-layout-background">
                            < Sidebar handleClick={this.handleClick} current={this.state.current}/>
                        </Sider>
                        <Content style={{ padding: '14px' }} loading={loading}>
                            <PageRouter/>
                        </Content>
                    </Layout>
                    <Footer>Zeronsec India Pvt. Ltd. -2020</Footer>
                </Layout>
            </PageStyle>
        );
    }
}

export default Page;