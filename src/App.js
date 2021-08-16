import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, BrowserRouter, Link } from "react-router-dom";
import { Skeleton } from 'antd';
import Chart from './Pages/Chart'
import { Layout, Menu, Breadcrumb } from 'antd';
import Tom from './Pages/Tom';
import Billi from './Pages/Billi';
import ChartTwo from './Pages/ChartTwo';
import Bar from './Pages/Bar';
import Pie from './Pages/Pie';
import Liquid from './Pages/Liquid';
import { Switch } from 'antd';
import React, {useState} from "react";
import { Avatar, Image } from 'antd';
import { Statistic, Row, Col, Button } from 'antd';

import DarkModeToggle from "react-dark-mode-toggle";
import { Card } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  TranslationOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from "./themes.js";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed]= useState();
  const [theme, setTheme] = useState("light");
  const themeToggler = () =>{
theme=== "light" ? setTheme("dark"): setTheme("light");

  };
  //const [isDarkMode, setIsDarkMode] = useState(() => false);

  function Switchclicked(){
    debugger;
    if(document.getElementById('dashboardrows').className=="blacktheme"){
      document.getElementById('dashboardrows').className="whitetheme";
      document.getElementById('headerrow').className="whitetheme";
      document.getElementById('maincontent').className="whitetheme";
      document.getElementById('breadcrumb').className="whitetheme";
    }else{
      document.getElementById('dashboardrows').className="blacktheme";
      document.getElementById('headerrow').className="blacktheme";
      document.getElementById('maincontent').className="blacktheme";
      document.getElementById('breadcrumb').className="blacktheme";
    }
  }
  return (


    //<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
     // <div class="relative py-3 sm:max-w-xl sm:mx-auto">
     <div>

       {/* <BrowserRouter>
       <Route path="/Tom" component={Tom}></Route>
       
       
       
       </BrowserRouter> */}

    <Layout style={{ minHeight: '100vh' }} class="bg-black-600">
      
        <Sider collapsible collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)}>
         
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="2" icon={<TranslationOutlined />}>
             <span> AKileesh </span>
              Online Store
            </Menu.Item>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
             Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Locations
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Items
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Stock
            </Menu.Item>

            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header id="headerrow" className="blacktheme">
            <h4 class="text-white mt-3" > {<SearchOutlined />}<input placeholder="Search Here...." className="searchcsss" type="text"/><span style={{ marginLeft:'49%'}}><span>Admin</span><Avatar  className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span> </h4>

       
          </Header>
         



         
          <Content className="blacktheme" id="maincontent">
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item id="breadcrumb" className="blacktheme" style={{fontWeight:800,fontSize:'23px', marginLeft:'2%'}}>Dashboard</Breadcrumb.Item>
              {/* <ThemeProvider theme={theme==="light"? "lightTheme" : "darkTheme"}>
              {/* <Switch className="switch" checkedChildren="Light" onClick={()=>themeToggler()} unCheckedChildren="Dark" defaultChecked /> */}
            
               <Switch className="switch" checkedChildren="Dark" onClick={Switchclicked} unCheckedChildren="Light" defaultChecked /> 
              {/* <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}font-size: 23px;
    margin-left: 2%;
    /> */}

              
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div class="blacktheme" id="dashboardrows">
            <div class="row " >
              {/* <div class="col-md-6 col-sm-4">
              <Bar/>
              </div> */}
             <div class="col-md-5 shadow cardscss margintop">
                 <Bar/>
              </div> 
              <div class="col-md-3 shadow cardscss visitorsrow">
                <Liquid/>
              </div>



{/* <div style={{backgrounColor:'red'}}>
              <div class="col-md-4  border rounded shadow">
              <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
              </div>
</div> */}



              <div class="col-md-3 cardscss shadow">
           <span className="Topactivity" >Top Search</span>
           <hr/>
           <span className="Topsearchone"><b>1. granellyvid 90ml &nbsp;&nbsp;&nbsp;&nbsp; 5563</b></span><br/><br/>
           <span className="Topsearchone"><b>2. delddyl ghh 70ml&nbsp;&nbsp;&nbsp;&nbsp; 5534</b></span><br/><br/>
           <span className="Topsearchone"><b>3. ddht djdjdy 50ml&nbsp;&nbsp;&nbsp;&nbsp; 5000</b></span><br/><br/>
           <span className="Topsearchone" style={{color:'grey'}}>4. granelly video 20ml&nbsp;&nbsp;&nbsp;&nbsp;4456</span><br/><br/>
           <span className="Topsearchone" style={{color:'grey'}}>5. dlksjl ddjjk yytik tu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4256</span><br/><br/>
           <span className="Topsearchone" style={{color:'grey'}}>6. jjjutiil tiii ddu lskki &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3335</span><br/><br/>
           <span className="Topsearchone" style={{color:'grey'}}>7. chole ht tiddillertih&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2244</span><br/><br/>
           <span  className="Topsearchone"style={{color:'grey'}}>8. hthtj tthy tyye yykk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1256</span>
              </div>
      




              <br/>
              <br/>
              <br/>
              <br/>
              <div class="col-md-5 col-sm-5 charttwocss  shadow mt-5">
              <ChartTwo/>
              </div>
              <div class="col-md-6 col-sm-6 piecss shadow mt-5" style={{height:'30%'}}>
           <Pie/>
              </div>
              </div>
            </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer Details</Footer>
        </Layout>
      </Layout>
       </div>
      //</div>
  );  
}

export default App;
