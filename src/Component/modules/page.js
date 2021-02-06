import React, { useState } from 'react';
import { PageStyle } from "./PageStyle";
import { Layout } from 'antd';
import TopHeader from '../Layout/Header/header';
import Sidebar from '../Layout/Sidebar/sidebar';
import PageRouter from './pageRouter';

export const Page = () => {
    const [current, setcurrent] = useState(sessionStorage.getItem('current'))
    const handleClick = (e) => {
        setcurrent(e.key)
        sessionStorage.setItem('current', e.key);
    }
    const { Header, Content, Sider, Footer } = Layout;
    return (
        <PageStyle>
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="site-layout-background" style={{ padding: 0 }} >
                    <TopHeader current={current} />
                </Header>
                <Layout className="site-layout">
                    <Sider >
                        < Sidebar handleClick={handleClick} current={current} />
                    </Sider>
                    <Content style={{ padding: '15px 15px 0px 15px' }} >
                        <PageRouter />
                    </Content>
                </Layout>
                <Footer>Zeronsec India Pvt. Ltd. -2021</Footer>
            </Layout>
        </PageStyle>
    );
}

export default Page;