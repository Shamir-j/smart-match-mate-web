'use client';

import React, { useState } from "react";
import { Layout, Menu, Avatar, Button, Dropdown, Badge, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';
import {
  UserOutlined,
  HeartOutlined,
  MessageOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
  SearchOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { QueryProvider } from "../../providers/QueryProvider";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

// Mock user data
const currentUser = {
  id: '1',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  unreadMessages: 3
};

const menuItems: MenuProps['items'] = [
  {
    key: '/app',
    icon: <HomeOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/matches',
    icon: <HeartOutlined />,
    label: 'Discover',
  },
  {
    key: '/chat',
    icon: <MessageOutlined />,
    label: (
      <Badge count={currentUser.unreadMessages} offset={[10, 0]}>
        Messages
      </Badge>
    ),
  },
  {
    key: '/profile/edit',
    icon: <UserOutlined />,
    label: 'Profile',
  },
  {
    key: '/settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];

const userMenuItems: MenuProps['items'] = [
  {
    key: 'profile',
    icon: <UserOutlined />,
    label: 'View Profile',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: 'Logout',
    danger: true,
  },
];

// Authenticated Layout - App with Sidebar
export default function AuthenticatedLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('/app');

  const handleMenuClick = ({ key }: { key: string }) => {
    setSelectedKey(key);
    window.location.href = key;
  };

  const handleUserMenuClick = ({ key }: { key: string }) => {
    if (key === 'logout') {
      // Handle logout logic
      console.log('Logout clicked');
      // Redirect to landing page
      window.location.href = '/';
    } else if (key === 'profile') {
      window.location.href = '/profile/edit';
    } else if (key === 'settings') {
      window.location.href = '/settings';
    }
  };

  return (
    <QueryProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider 
          trigger={null} 
          collapsible 
          collapsed={collapsed}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div style={{ 
            height: 32, 
            margin: 16, 
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            {collapsed ? '❤️' : '❤️ One Night Stand'}
          </div>
          
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKey]}
            items={menuItems}
            onClick={handleMenuClick}
          />
        </Sider>
        
        <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
          <Header style={{ 
            padding: '0 24px', 
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 1px 4px rgba(0,21,41,.08)'
          }}>
            <Space>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              <Text strong style={{ fontSize: '18px' }}>
                One Night Stand
              </Text>
            </Space>
            
            <Space size="middle">
              <Button
                type="text"
                icon={<SearchOutlined />}
                size="large"
              />
              
              <Badge count={5} offset={[-5, 5]}>
                <Button
                  type="text"
                  icon={<BellOutlined />}
                  size="large"
                />
              </Badge>
              
              <Dropdown 
                menu={{ 
                  items: userMenuItems,
                  onClick: handleUserMenuClick 
                }} 
                placement="bottomRight"
              >
                <Space style={{ cursor: 'pointer' }}>
                  <Avatar src={currentUser.avatar} />
                  <Text>{currentUser.name}</Text>
                </Space>
              </Dropdown>
            </Space>
          </Header>
          
          <Content style={{
            margin: '24px 24px 0',
            overflow: 'initial',
          }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </QueryProvider>
  );
}