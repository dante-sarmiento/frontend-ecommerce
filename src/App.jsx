import React from 'react';
import  { Layout } from 'antd';
import { Home } from './pages/Home/Home';
const { Header, Footer, Sider, Content } = Layout;

export const App = () => {
    // const user = {
    //     fullName: 'john due',
    //     role: 'ADMIN_ROLE'
    // }
    // localStorage.setItem('user', JSON.stringify(user))
    const user = JSON.parse(localStorage.getItem('user')) || { fullName: 'Unkown', role: 'GUEST_ROLE' }
    const anotherInfo= 'Cualquier otr cosa'
    return(
        <>
            <Layout>
                <Header>HEADER COMPONENT</Header>
                <Layout>
                    <Sider>SIDER</Sider>
                    <Content>
                        <Home usuario={user} otroDato={anotherInfo}></Content>></Home>
                    </Content>
                </Layout>
                <Footer>FOOTER</Footer>
            </Layout>
        
        </>
    )
}