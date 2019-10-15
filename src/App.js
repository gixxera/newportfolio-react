import React from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: '#fff' }} to="/">Home</Link>} scroll>
          <Navigation>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contacts</Link>
          </Navigation>
        </Header>
        <Drawer style={{ background: '#000' }} title={<Link style={{ textDecoration: 'none', color: '#fff' }} to="/">Home</Link>}>
          <Navigation>
            <Link style={{ color: '#fff' }} to="/about">About</Link>
            <Link style={{ color: '#fff' }} to="/projects">Projects</Link>
            <Link style={{ color: '#fff' }} to="/contact">Contacts</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
