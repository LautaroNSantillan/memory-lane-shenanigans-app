import React from 'react';
import { Layout, Space } from 'antd';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
    return (
        <Layout>
            <Header>
                <Typography variant="h3" align="center">Memory Lane Shenanigans</Typography>
            </Header>
            <Layout>
                <Content>
                    <Container maxWidth="lg">
                        <Grow in>
                            <Container><Grid container justify="space-between" alignItems="stretch" spacing={3}></Grid></Container>
                        </Grow>
                    </Container>
                </Content>
                <Sider>right sidebar</Sider>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    );
}

export default App;