"use client";

import { Layout, Typography, Space, Divider, Row, Col, Card, Alert, Steps } from "antd";
import { DeleteOutlined, MailOutlined, CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import Footer from "@/components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function DataDeletionRequest() {
    return (
        <Layout style={{ minHeight: "100vh", background: "#fff", paddingTop: "80px" }}>
            <Content style={{ padding: "48px 24px", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
                <Row gutter={[48, 48]}>
                    {/* Main Content */}
                    <Col xs={24}>
                        <Space orientation="vertical" size="large" style={{ width: "100%" }}>
                            {/* Header */}
                            <div style={{ textAlign: "center" }}>
                                <DeleteOutlined style={{ fontSize: 48, color: "#FF3A8A", marginBottom: 16 }} />
                                <Title level={1} style={{ marginBottom: 8 }}>Account & Data Deletion Request</Title>
                                <Space separator={<Divider orientation="vertical" />}>
                                    <Text strong style={{ color: "#FF3A8A" }}>One Night Stand</Text>
                                    <Text type="secondary">Data Privacy & User Rights</Text>
                                </Space>
                            </div>

                            <Divider />

                            {/* Important Notice */}
                            <Alert
                                title="Important Information"
                                description="Deleting your account is permanent and cannot be undone. All your data, including your profile, matches, titles, and photos will be permanently removed from our systems."
                                type="warning"
                                showIcon
                                style={{ marginBottom: 24 }}
                            />

                            {/* What Gets Deleted */}
                            <div>
                                <Title level={2}>What Data Will Be Deleted</Title>
                                <Paragraph>
                                    When you request account deletion, the following information will be permanently removed:
                                </Paragraph>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Card size="small" style={{ background: "#fafafa" }}>
                                            <ul style={{ marginBottom: 0, paddingLeft: 20 }}>
                                                <li>Profile information (name, bio, photos)</li>
                                                <li>Personal details and preferences</li>
                                                <li>Match history</li>
                                                <li>All titles and conversations</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small" style={{ background: "#fafafa" }}>
                                            <ul style={{ marginBottom: 0, paddingLeft: 20 }}>
                                                <li>Location data</li>
                                                <li>Purchase history</li>
                                                <li>Activity logs</li>
                                                <li>Device and usage information</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            {/* Data Retention */}
                            <div>
                                <Title level={3}>Data Retention Period</Title>
                                <Card style={{ background: "#e6f7ff", border: "1px solid #91d5ff" }}>
                                    <Paragraph style={{ marginBottom: 8 }}>
                                        <Text strong>Standard Deletion:</Text> Most data is deleted within 30 days of your request.
                                    </Paragraph>
                                    <Paragraph style={{ marginBottom: 8 }}>
                                        <Text strong>Legal Retention:</Text> Some data may be retained longer if required by law, for safety and security purposes, or to comply with our legal obligations (e.g., financial records, fraud prevention).
                                    </Paragraph>
                                    <Paragraph style={{ marginBottom: 0 }}>
                                        <Text strong>Backup Systems:</Text> Data in backup systems may take up to 90 days to be fully removed.
                                    </Paragraph>
                                </Card>
                            </div>

                            {/* Deletion Process */}
                            <div>
                                <Title level={2}>How to Request Account Deletion</Title>
                                <Paragraph>
                                    You have two options to delete your account and data:
                                </Paragraph>

                                <Title level={3}>Option 1: Delete In-App (Recommended)</Title>
                                <Steps
                                    orientation="vertical"
                                    current={-1}
                                    items={[
                                        {
                                            title: 'Open the One Night Stand app',
                                            description: 'Launch the app on your device and log in to your account.',
                                            icon: <CheckCircleOutlined />,
                                        },
                                        {
                                            title: 'Go to Settings',
                                            description: 'Tap on your profile icon and select "Settings" from the menu.',
                                            icon: <CheckCircleOutlined />,
                                        },
                                        {
                                            title: 'Account Settings',
                                            description: 'Scroll down to "Account Settings" or "Privacy & Safety".',
                                            icon: <CheckCircleOutlined />,
                                        },
                                        {
                                            title: 'Delete Account',
                                            description: 'Tap "Delete Account" and follow the on-screen instructions to confirm.',
                                            icon: <DeleteOutlined />,
                                        },
                                    ]}
                                    style={{ marginTop: 24, marginBottom: 32 }}
                                />

                                <Title level={3}>Option 2: Email Request</Title>
                                <Paragraph>
                                    If you cannot access the app or prefer to request deletion via email, please send a deletion request to:
                                </Paragraph>
                                <Card style={{ background: "#f6ffed", border: "1px solid #b7eb8f", marginTop: 16 }}>
                                    <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                                        <div>
                                            <MailOutlined style={{ color: "#52c41a", fontSize: 20, marginRight: 8 }} />
                                            <Text strong style={{ fontSize: 16 }}>
                                                <a href="mailto:privacy@one-night-stand.co" style={{ color: "#FF3A8A" }}>
                                                    privacy@one-night-stand.co
                                                </a>
                                            </Text>
                                        </div>
                                        <Divider style={{ margin: 0 }} />
                                        <div>
                                            <Text strong>Subject Line:</Text> Account Deletion Request
                                        </div>
                                        <div>
                                            <Text strong>Required Information:</Text>
                                            <ul style={{ marginTop: 8, marginBottom: 0 }}>
                                                <li>Your registered email address</li>
                                                <li>Your phone number (if registered)</li>
                                                <li>Your display name or username</li>
                                                <li>Reason for deletion (optional)</li>
                                            </ul>
                                        </div>
                                        <Alert
                                            title="Verification Required"
                                            description="For security purposes, we may ask you to verify your identity before processing the deletion request. This helps protect your account from unauthorized deletion."
                                            type="info"
                                            showIcon
                                            style={{ marginTop: 8 }}
                                        />
                                    </Space>
                                </Card>
                            </div>

                            {/* Processing Timeline */}
                            <div>
                                <Title level={2}>What Happens After You Request Deletion</Title>
                                <Steps
                                    orientation="vertical"
                                    current={-1}
                                    items={[
                                        {
                                            title: 'Request Received',
                                            description: 'We receive your deletion request (in-app or via email).',
                                            icon: <ClockCircleOutlined />,
                                        },
                                        {
                                            title: 'Identity Verification',
                                            description: 'We verify your identity to ensure account security (email requests only).',
                                            icon: <ClockCircleOutlined />,
                                        },
                                        {
                                            title: 'Processing (24-48 hours)',
                                            description: 'Your account is deactivated and queued for deletion within 24-48 hours.',
                                            icon: <ClockCircleOutlined />,
                                        },
                                        {
                                            title: 'Data Deletion (30 days)',
                                            description: 'Your data is permanently deleted from our active systems within 30 days.',
                                            icon: <DeleteOutlined />,
                                        },
                                        {
                                            title: 'Confirmation',
                                            description: 'You receive a confirmation email once the deletion is complete.',
                                            icon: <CheckCircleOutlined />,
                                        },
                                    ]}
                                    style={{ marginTop: 24 }}
                                />
                            </div>

                            {/* Before You Delete */}
                            <div>
                                <Title level={2}>Before You Delete Your Account</Title>
                                <Alert
                                    title="Consider These Alternatives"
                                    description={
                                        <div>
                                            <Paragraph style={{ marginBottom: 8, marginTop: 8 }}>
                                                If you're concerned about privacy or taking a break, consider these options instead:
                                            </Paragraph>
                                            <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                                <li><Text strong>Pause Account:</Text> Temporarily hide your profile without deleting your data</li>
                                                <li><Text strong>Adjust Privacy Settings:</Text> Control who can see your profile and contact you</li>
                                                <li><Text strong>Delete Specific Data:</Text> Remove individual photos or titles without deleting everything</li>
                                                <li><Text strong>Logout:</Text> Simply log out if you want to take a break</li>
                                            </ul>
                                        </div>
                                    }
                                    type="info"
                                    showIcon
                                />
                            </div>

                            {/* Special Considerations */}
                            <div>
                                <Title level={3}>Special Considerations</Title>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Card title="Active Subscriptions" size="small">
                                            <Paragraph>
                                                Deleting your account does not automatically cancel subscriptions purchased through app stores. Cancel your subscription separately through:
                                            </Paragraph>
                                            <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                                <li>Apple App Store (for iOS users)</li>
                                                <li>Google Play Store (for Android users)</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card title="Data Shared With Others" size="small">
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                titles you sent to other users may remain visible to them even after your account is deleted. We cannot control data that others may have saved, such as screenshots of conversations.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            {/* Your Rights */}
                            <div>
                                <Title level={2}>Your Privacy Rights</Title>
                                <Paragraph>
                                    Under applicable privacy laws (including GDPR, CCPA, and others), you have the following rights regarding your data:
                                </Paragraph>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={8}>
                                        <Card size="small" style={{ height: "100%" }}>
                                            <Title level={5}>Right to Access</Title>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                Request a copy of all data we have about you
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small" style={{ height: "100%" }}>
                                            <Title level={5}>Right to Correction</Title>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                Update or correct inaccurate information
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small" style={{ height: "100%" }}>
                                            <Title level={5}>Right to Deletion</Title>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                Request permanent deletion of your data
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small" style={{ height: "100%" }}>
                                            <Title level={5}>Right to Portability</Title>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                Receive your data in a portable format
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small" style={{ height: "100%" }}>
                                            <Title level={5}>Right to Restrict</Title>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                Limit how we process your data
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small" style={{ height: "100%" }}>
                                            <Title level={5}>Right to Object</Title>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                Object to certain data processing activities
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <Title level={2}>Need Help?</Title>
                                <Card style={{ background: "#fff7e6", border: "1px solid #ffd591" }}>
                                    <Paragraph>
                                        If you have questions about the deletion process or need assistance, please contact our privacy team:
                                    </Paragraph>
                                    <Space orientation="vertical" size="small">
                                        <div>
                                            <Text strong>Email:</Text>{" "}
                                            <a href="mailto:privacy@one-night-stand.co" style={{ color: "#FF3A8A" }}>
                                                privacy@one-night-stand.co
                                            </a>
                                        </div>
                                        <div>
                                            <Text strong>Support Email:</Text>{" "}
                                            <a href="mailto:support@one-night-stand.co" style={{ color: "#FF3A8A" }}>
                                                support@one-night-stand.co
                                            </a>
                                        </div>
                                        <div>
                                            <Text strong>Response Time:</Text> We typically respond within 24-48 hours
                                        </div>
                                    </Space>
                                </Card>
                            </div>

                            {/* Related Policies */}
                            <div>
                                <Title level={3}>Related Policies</Title>
                                <Space size="middle" wrap>
                                    <a href="/legal/privacy-notice" style={{ color: "#1677ff" }}>Privacy Notice</a>
                                    <Divider orientation="vertical" />
                                    <a href="/legal/terms-of-service" style={{ color: "#1677ff" }}>Terms of Service</a>
                                    <Divider orientation="vertical" />
                                    <a href="/legal/consumer-health-privacy" style={{ color: "#1677ff" }}>Consumer Health Data Privacy</a>
                                    <Divider orientation="vertical" />
                                    <a href="/legal/user-generated-content" style={{ color: "#1677ff" }}>User-Generated Content Policy</a>
                                </Space>
                            </div>
                        </Space>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    );
}
