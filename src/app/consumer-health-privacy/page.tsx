"use client";

import Link from "next/link";
import { Layout, Typography, Anchor, Space, Divider, Row, Col, Card } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Footer from "../../components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function ConsumerHealthPrivacy() {
    return (
        <Layout style={{ minHeight: "100vh", background: "#fff" }}>
            {/* Top Navigation Bar */}
            <div style={{
                borderBottom: "1px solid #f0f0f0",
                padding: "16px 24px",
                position: "sticky",
                top: 0,
                background: "#fff",
                zIndex: 100,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, color: "#FF3A8A", textDecoration: "none" }}>
                        <ArrowLeftOutlined />
                        <span>Back to Home</span>
                    </Link>
                    <Link href="/privacy-notice" style={{ color: "#FF3A8A", textDecoration: "none" }}>
                        General Privacy Policy
                    </Link>
                </div>
            </div>

            <Content style={{ padding: "48px 24px", maxWidth: 1400, margin: "0 auto", width: "100%" }}>
                <Row gutter={[48, 48]}>
                    {/* Sidebar with Table of Contents */}
                    <Col xs={0} lg={6}>
                        <div style={{ position: "sticky", top: 100 }}>
                            <Title level={5} style={{ marginBottom: 16 }}>Contents</Title>
                            <Anchor
                                affix={false}
                                offsetTop={100}
                                items={[
                                    { key: "introduction", href: "#introduction", title: "Introduction" },
                                    { key: "collection", href: "#collection", title: "Collection of Health Data" },
                                    { key: "sources", href: "#sources", title: "Sources of Health Data" },
                                    { key: "use", href: "#use", title: "Use of Health Data" },
                                    { key: "sharing", href: "#sharing", title: "Sharing of Health Data" },
                                    { key: "rights", href: "#rights", title: "Your Rights" },
                                    { key: "contact", href: "#contact", title: "Contact Us" },
                                ]}
                            />
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col xs={24} lg={18}>
                        <Space orientation="vertical" size="large" style={{ width: "100%" }}>
                            {/* Header */}
                            <div>
                                <Title level={1} style={{ marginBottom: 8 }}>Consumer Health Data Privacy Policy</Title>
                                <Space separator={<Divider orientation="vertical" />}>
                                    <Text strong style={{ color: "#FF3A8A" }}>One Night Stand</Text>
                                    <Text type="secondary">Last Updated: December 27, 2025</Text>
                                </Space>
                            </div>
                            <Divider />

                            {/* Section 1: Introduction */}
                            <div id="introduction">
                                <Title level={2}>1. Introduction</Title>
                                <Paragraph>
                                    This Consumer Health Data Privacy Policy supplements the One Night Stand Privacy Policy and applies to "consumer health data" as defined by applicable state laws, including Washington's My Health My Data Act and Nevada's Consumer Health Data Privacy Law.
                                </Paragraph>
                                <Paragraph>
                                    We are committed to protecting your sensitive health-related information. This policy outlines how we collect, use, share, and protect your consumer health data.
                                </Paragraph>
                            </div>

                            {/* Section 2: Collection */}
                            <div id="collection">
                                <Title level={2}>2. Collection of Consumer Health Data</Title>
                                <Paragraph>
                                    We may collect the following categories of consumer health data:
                                </Paragraph>
                                <ul>
                                    <li>
                                        <Text strong>Sexual Health Information:</Text> Information about your sexual orientation, sexual preferences, and sexual history that you voluntarily provide in your profile or communications.
                                    </li>
                                    <li>
                                        <Text strong>Reproductive Health Information:</Text> Information related to reproductive health that you may choose to share.
                                    </li>
                                    <li>
                                        <Text strong>Gender Identity:</Text> Information about your gender identity and expression.
                                    </li>
                                    <li>
                                        <Text strong>Biometric Data:</Text> Facial geometry data used for identity verification purposes (e.g., "selfie verification").
                                    </li>
                                    <li>
                                        <Text strong>Inferences:</Text> Inferences drawn from other information that may reveal health status or sexual orientation.
                                    </li>
                                </ul>
                            </div>

                            {/* Section 3: Sources */}
                            <div id="sources">
                                <Title level={2}>3. Sources of Consumer Health Data</Title>
                                <Paragraph>
                                    We collect consumer health data directly from you when you:
                                </Paragraph>
                                <ul>
                                    <li>Create or update your profile.</li>
                                    <li>Participate in surveys or quizzes.</li>
                                    <li>Communicate with other users or our support team.</li>
                                    <li>Use specific features of the app that request this information.</li>
                                </ul>
                            </div>

                            {/* Section 4: Use */}
                            <div id="use">
                                <Title level={2}>4. Use of Consumer Health Data</Title>
                                <Paragraph>
                                    We use consumer health data for the following purposes:
                                </Paragraph>
                                <ul>
                                    <li>To provide and improve our matchmaking services.</li>
                                    <li>To personalize your experience and show you relevant matches.</li>
                                    <li>To ensure the safety and security of our platform.</li>
                                    <li>To comply with legal obligations.</li>
                                </ul>
                                <Card size="small" style={{ background: "#f6ffed", border: "1px solid #b7eb8f", marginTop: 16 }}>
                                    <Text strong style={{ color: "#389e0d" }}>We do not sell your consumer health data.</Text>
                                </Card>
                            </div>

                            {/* Section 5: Sharing */}
                            <div id="sharing">
                                <Title level={2}>5. Sharing of Consumer Health Data</Title>
                                <Paragraph>
                                    We may share consumer health data with:
                                </Paragraph>
                                <ul>
                                    <li>
                                        <Text strong>Service Providers:</Text> Companies that help us operate our services (e.g., cloud hosting, customer support), bound by strict confidentiality agreements.
                                    </li>
                                    <li>
                                        <Text strong>Legal Authorities:</Text> When required by law or to protect the safety of our users.
                                    </li>
                                    <li>
                                        <Text strong>Corporate Transactions:</Text> In the event of a merger, acquisition, or sale of assets, subject to appropriate safeguards.
                                    </li>
                                </ul>
                            </div>

                            {/* Section 6: Rights */}
                            <div id="rights">
                                <Title level={2}>6. Your Rights</Title>
                                <Paragraph>
                                    Depending on your location, you may have the following rights regarding your consumer health data:
                                </Paragraph>
                                <ul>
                                    <li>Right to access your data.</li>
                                    <li>Right to delete your data.</li>
                                    <li>Right to withdraw consent.</li>
                                    <li>Right to not be discriminated against for exercising your rights.</li>
                                </ul>
                                <Paragraph>
                                    To exercise these rights, please contact us using the information below.
                                </Paragraph>
                            </div>

                            {/* Section 7: Contact */}
                            <div id="contact">
                                <Title level={2}>7. Contact Us</Title>
                                <Paragraph>
                                    If you have questions about this Consumer Health Data Privacy Policy, please contact us at:
                                </Paragraph>
                                <Paragraph>
                                    <Text strong>Email:</Text> <a href="mailto:privacy@one-night-stand.co" style={{ color: "#FF3A8A" }}>privacy@one-night-stand.co</a>
                                </Paragraph>
                            </div>
                        </Space>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    );
}
