'use client';

import React, { useState } from 'react';
import { 
  Card, 
  Form, 
  Input, 
  InputNumber, 
  Select, 
  Upload, 
  Button, 
  Row, 
  Col, 
  Switch,
  Slider,
  Tag,
  message,
  Space,
  Divider
} from 'antd';
import { 
  PlusOutlined, 

  SaveOutlined,
  UserOutlined
} from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

interface ProfileData {
  name: string;
  age: number;
  bio: string;
  occupation: string;
  education: string;
  location: string;
  height: number;
  interests: string[];
  lookingFor: string;
  ageRange: [number, number];
  maxDistance: number;
  showAge: boolean;
  showDistance: boolean;
  photos: UploadFile[];
}

const interestOptions = [
  'Travel', 'Music', 'Sports', 'Movies', 'Reading', 'Cooking', 'Art',
  'Photography', 'Fitness', 'Dancing', 'Gaming', 'Nature', 'Food',
  'Technology', 'Fashion', 'Yoga', 'Hiking', 'Swimming', 'Running',
  'Cycling', 'Meditation', 'Writing', 'Volunteering', 'Languages'
];

const lookingForOptions = [
  'Something casual',
  'Long-term relationship', 
  'New friends',
  'Not sure yet'
];

export default function ProfileEditPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '1',
      name: 'photo1.jpg',
      status: 'done',
      url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop'
    },
    {
      uid: '2', 
      name: 'photo2.jpg',
      status: 'done',
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop'
    }
  ]);

  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Travel', 'Photography', 'Fitness', 'Music'
  ]);

  const initialValues: ProfileData = {
    name: 'Sarah Johnson',
    age: 25,
    bio: 'Adventure seeker and coffee enthusiast ☕ Love exploring new places and meeting interesting people. Yoga instructor by day, foodie by night 🧘‍♀️✨',
    occupation: 'Yoga Instructor',
    education: 'Bachelor\'s in Health Sciences',
    location: 'San Francisco, CA',
    height: 165,
    interests: selectedInterests,
    lookingFor: 'Long-term relationship',
    ageRange: [22, 35],
    maxDistance: 25,
    showAge: true,
    showDistance: true,
    photos: fileList
  };

  const handleUploadChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSave = async (values: ProfileData) => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Profile data:', {
        ...values,
        interests: selectedInterests,
        photos: fileList
      });
      
      message.success('Profile updated successfully!');
    } catch (error) {
      message.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
      <Card title="Edit Profile" extra={<UserOutlined />}>
        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
          onFinish={handleSave}
        >
          {/* Photos Section */}
          <Form.Item label="Photos" required>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={handleUploadChange}
              beforeUpload={() => false}
              maxCount={6}
            >
              {fileList.length >= 6 ? null : uploadButton}
            </Upload>
            <div style={{ marginTop: 8, color: '#666', fontSize: '12px' }}>
              Add up to 6 photos. First photo will be your main profile picture.
            </div>
          </Form.Item>

          <Divider />

          {/* Basic Info */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Name is required' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Age"
                name="age"
                rules={[{ required: true, message: 'Age is required' }]}
              >
                <InputNumber 
                  min={18} 
                  max={100} 
                  style={{ width: '100%' }}
                  placeholder="Age"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Bio"
            name="bio"
            rules={[{ required: true, message: 'Bio is required' }]}
          >
            <TextArea 
              rows={4} 
              maxLength={500}
              showCount
              placeholder="Tell people about yourself..."
            />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Occupation" name="occupation">
                <Input placeholder="Your job title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Education" name="education">
                <Input placeholder="Your education" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Location" name="location">
                <Input placeholder="City, State" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Height (cm)" name="height">
                <InputNumber 
                  min={120} 
                  max={250} 
                  style={{ width: '100%' }}
                  placeholder="Height in cm"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider />

          {/* Interests */}
          <Form.Item label="Interests" name="interests">
            <div style={{ marginBottom: 16 }}>
              <Space wrap>
                {selectedInterests.map(interest => (
                  <Tag
                    key={interest}
                    closable
                    onClose={() => handleInterestToggle(interest)}
                    color="blue"
                  >
                    {interest}
                  </Tag>
                ))}
              </Space>
            </div>
            <div>
              <Space wrap>
                {interestOptions
                  .filter(interest => !selectedInterests.includes(interest))
                  .map(interest => (
                    <Tag
                      key={interest}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleInterestToggle(interest)}
                    >
                      + {interest}
                    </Tag>
                  ))}
              </Space>
            </div>
          </Form.Item>

          <Divider />

          {/* Dating Preferences */}
          <Form.Item label="Looking for" name="lookingFor">
            <Select placeholder="What are you looking for?">
              {lookingForOptions.map(option => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Age Range" name="ageRange">
            <Slider
              range
              min={18}
              max={80}
              marks={{
                18: '18',
                30: '30',
                50: '50',
                80: '80+'
              }}
            />
          </Form.Item>

          <Form.Item label="Maximum Distance (km)" name="maxDistance">
            <Slider
              min={1}
              max={100}
              marks={{
                1: '1km',
                25: '25km',
                50: '50km',
                100: '100km+'
              }}
            />
          </Form.Item>

          <Divider />

          {/* Privacy Settings */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Show my age" name="showAge" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Show distance" name="showDistance" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
          </Row>

          <Divider />

          {/* Save Button */}
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              size="large"
              block
              icon={<SaveOutlined />}
            >
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}