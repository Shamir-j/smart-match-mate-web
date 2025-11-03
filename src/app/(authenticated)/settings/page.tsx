'use client';

import React, { useState } from 'react';
import {
  Card,
  List,
  Switch,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
  Divider,
  Space,
  Typography,
  Alert,
  Popconfirm
} from 'antd';
import {
  BellOutlined,
  LockOutlined,
  UserOutlined,
  HeartOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SafetyOutlined,
  GlobalOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

interface NotificationSettings {
  newMatches: boolean;
  messages: boolean;
  likes: boolean;
  superLikes: boolean;
  pushNotifications: boolean;
  emailNotifications: boolean;
  soundEnabled: boolean;
  vibrationEnabled: boolean;
}

interface PrivacySettings {
  showOnlineStatus: boolean;
  showLastSeen: boolean;
  showReadReceipts: boolean;
  incognitoMode: boolean;
  hideFromContacts: boolean;
  locationSharing: boolean;
}

export default function SettingsPage() {
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    newMatches: true,
    messages: true,
    likes: true,
    superLikes: true,
    pushNotifications: true,
    emailNotifications: false,
    soundEnabled: true,
    vibrationEnabled: true
  });

  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    showOnlineStatus: true,
    showLastSeen: true,
    showReadReceipts: true,
    incognitoMode: false,
    hideFromContacts: false,
    locationSharing: true
  });

  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNotificationChange = (key: keyof NotificationSettings, value: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: value
    }));
    message.success('Notification setting updated');
  };

  const handlePrivacyChange = (key: keyof PrivacySettings, value: boolean) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: value
    }));
    message.success('Privacy setting updated');
  };

  const handleChangePassword = async (values: { currentPassword: string; newPassword: string; confirmPassword: string }) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      message.success('Password changed successfully');
      setChangePasswordModal(false);
    } catch (error) {
      message.error('Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      message.success('Account deletion initiated. You will receive a confirmation email.');
      setDeleteAccountModal(false);
    } catch (error) {
      message.error('Failed to delete account');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Modal.confirm({
      title: 'Logout',
      content: 'Are you sure you want to logout?',
      onOk: () => {
        message.success('Logged out successfully');
        // Redirect to login page
      }
    });
  };

  const notificationItems = [
    {
      title: 'New Matches',
      description: 'Get notified when someone likes you back',
      key: 'newMatches' as keyof NotificationSettings,
      icon: <HeartOutlined />
    },
    {
      title: 'Messages',
      description: 'Get notified about new messages',
      key: 'messages' as keyof NotificationSettings,
      icon: <BellOutlined />
    },
    {
      title: 'Likes',
      description: 'Get notified when someone likes you',
      key: 'likes' as keyof NotificationSettings,
      icon: <HeartOutlined />
    },
    {
      title: 'Super Likes',
      description: 'Get notified about Super Likes',
      key: 'superLikes' as keyof NotificationSettings,
      icon: <HeartOutlined />
    },
    {
      title: 'Push Notifications',
      description: 'Enable push notifications on your device',
      key: 'pushNotifications' as keyof NotificationSettings,
      icon: <BellOutlined />
    },
    {
      title: 'Email Notifications',
      description: 'Receive notifications via email',
      key: 'emailNotifications' as keyof NotificationSettings,
      icon: <BellOutlined />
    },
    {
      title: 'Sound',
      description: 'Play sound for notifications',
      key: 'soundEnabled' as keyof NotificationSettings,
      icon: <BellOutlined />
    },
    {
      title: 'Vibration',
      description: 'Vibrate for notifications',
      key: 'vibrationEnabled' as keyof NotificationSettings,
      icon: <BellOutlined />
    }
  ];

  const privacyItems = [
    {
      title: 'Show Online Status',
      description: 'Let others see when you\'re online',
      key: 'showOnlineStatus' as keyof PrivacySettings,
      icon: <GlobalOutlined />
    },
    {
      title: 'Show Last Seen',
      description: 'Let others see when you were last active',
      key: 'showLastSeen' as keyof PrivacySettings,
      icon: <GlobalOutlined />
    },
    {
      title: 'Read Receipts',
      description: 'Let others know when you\'ve read their messages',
      key: 'showReadReceipts' as keyof PrivacySettings,
      icon: <EyeInvisibleOutlined />
    },
    {
      title: 'Incognito Mode',
      description: 'Browse profiles privately without being seen',
      key: 'incognitoMode' as keyof PrivacySettings,
      icon: <EyeInvisibleOutlined />
    },
    {
      title: 'Hide from Contacts',
      description: 'Don\'t show your profile to people in your contacts',
      key: 'hideFromContacts' as keyof PrivacySettings,
      icon: <EyeInvisibleOutlined />
    },
    {
      title: 'Location Sharing',
      description: 'Share your location for distance calculations',
      key: 'locationSharing' as keyof PrivacySettings,
      icon: <GlobalOutlined />
    }
  ];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
      <Title level={2}>Settings</Title>

      {/* Notifications */}
      <Card title="Notifications" style={{ marginBottom: 16 }} extra={<BellOutlined />}>
        <List
          dataSource={notificationItems}
          renderItem={item => (
            <List.Item
              actions={[
                <Switch
                  key="switch"
                  checked={notificationSettings[item.key]}
                  onChange={checked => handleNotificationChange(item.key, checked)}
                />
              ]}
            >
              <List.Item.Meta
                avatar={item.icon}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>

      {/* Privacy & Safety */}
      <Card title="Privacy & Safety" style={{ marginBottom: 16 }} extra={<SafetyOutlined />}>
        <List
          dataSource={privacyItems}
          renderItem={item => (
            <List.Item
              actions={[
                <Switch
                  key="switch"
                  checked={privacySettings[item.key]}
                  onChange={checked => handlePrivacyChange(item.key, checked)}
                />
              ]}
            >
              <List.Item.Meta
                avatar={item.icon}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>

      {/* Account Settings */}
      <Card title="Account" style={{ marginBottom: 16 }} extra={<UserOutlined />}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button 
            icon={<LockOutlined />}
            onClick={() => setChangePasswordModal(true)}
            block
          >
            Change Password
          </Button>
          
          <Button 
            icon={<UserOutlined />}
            onClick={() => window.location.href = '/profile/edit'}
            block
          >
            Edit Profile
          </Button>

          <Button 
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            block
          >
            Logout
          </Button>

          <Divider />

          <Alert
            message="Danger Zone"
            type="warning"
            showIcon
            style={{ marginBottom: 16 }}
          />

          <Popconfirm
            title="Delete Account"
            description="Are you sure you want to delete your account? This action cannot be undone."
            onConfirm={() => setDeleteAccountModal(true)}
            okText="Yes"
            cancelText="No"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <Button 
              danger
              icon={<DeleteOutlined />}
              block
            >
              Delete Account
            </Button>
          </Popconfirm>
        </Space>
      </Card>

      {/* Change Password Modal */}
      <Modal
        title="Change Password"
        open={changePasswordModal}
        onCancel={() => setChangePasswordModal(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleChangePassword}>
          <Form.Item
            label="Current Password"
            name="currentPassword"
            rules={[{ required: true, message: 'Please enter your current password' }]}
          >
            <Input.Password placeholder="Enter current password" />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              { required: true, message: 'Please enter a new password' },
              { min: 8, message: 'Password must be at least 8 characters' }
            ]}
          >
            <Input.Password placeholder="Enter new password" />
          </Form.Item>

          <Form.Item
            label="Confirm New Password"
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Please confirm your new password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match'));
                }
              })
            ]}
          >
            <Input.Password placeholder="Confirm new password" />
          </Form.Item>

          <Form.Item>
            <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
              <Button onClick={() => setChangePasswordModal(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Change Password
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* Delete Account Modal */}
      <Modal
        title="Delete Account"
        open={deleteAccountModal}
        onCancel={() => setDeleteAccountModal(false)}
        footer={null}
      >
        <Alert
          message="Warning"
          description="Deleting your account is permanent and cannot be undone. All your matches, messages, and profile data will be lost."
          type="warning"
          showIcon
          style={{ marginBottom: 16 }}
        />

        <Form layout="vertical" onFinish={handleDeleteAccount}>
          <Form.Item
            label="Type 'DELETE' to confirm"
            name="confirmation"
            rules={[
              { required: true, message: 'Please type DELETE to confirm' },
              {
                validator: (_, value) =>
                  value === 'DELETE' 
                    ? Promise.resolve()
                    : Promise.reject(new Error('Please type DELETE exactly'))
              }
            ]}
          >
            <Input placeholder="Type DELETE" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
              <Button onClick={() => setDeleteAccountModal(false)}>
                Cancel
              </Button>
              <Button type="primary" danger htmlType="submit" loading={loading}>
                Delete Account
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}