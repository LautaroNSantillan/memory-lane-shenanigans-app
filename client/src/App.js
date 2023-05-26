import React from 'react';
import { Layout, Space } from 'antd';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './style';
import { headerStyle, contentStyle, siderStyle, footerStyle } from './style';


const { Header, Footer, Sider, Content } = Layout;

const App = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Header style={headerStyle} >
                <Typography classNamw={classes.heading} variant="h3" align="center">Memory Lane Shenanigans</Typography>
            </Header>
            <Layout>
                <Content style={contentStyle}>
                    <Container maxWidth="lg">
                        <Grow in>
                            <Container>
                                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                                    <Grid item xs={12} sm={7}>
                                        <Posts/>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Form/>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grow>
                    </Container>
                </Content>
                <Sider style={siderStyle}>right sidebar</Sider>
            </Layout>
            <Footer style={footerStyle}>footer</Footer>
        </Layout>
    );
}

export default App;