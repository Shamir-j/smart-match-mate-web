"use client";

import Link from "next/link";
import { Layout, Typography, Anchor, Space, Divider, Row, Col, Card } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import Footer from "../../../components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function IntellectualProperty() {
    return (
        <Layout style={{ minHeight: "100vh", background: "#fff", paddingTop: "80px" }}>
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
                                    { key: "ownership", href: "#ownership", title: "Ownership of Content" },
                                    { key: "trademarks", href: "#trademarks", title: "Trademarks" },
                                    { key: "user-content", href: "#user-content", title: "User Content" },
                                    { key: "copyright-complaints", href: "#copyright-complaints", title: "Copyright Complaints" },
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
                                <Title level={1} style={{ marginBottom: 8 }}>Intellectual Property Policy</Title>
                                <Space separator={<Divider orientation="vertical" />}>
                                    <Text strong style={{ color: "#FF3A8A" }}>One Night Stand</Text>
                                    <Text type="secondary">Last Updated: December 27, 2025</Text>
                                </Space>
                            </div>

                            <Divider orientation="horizontal" />

                            {/* Section 1 */}
                            <div id="ownership">
                                <Title level={2}>1. Ownership of Content</Title>
                                <Paragraph>
                                    The One Night Stand Service, including all text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, artwork, and computer code (collectively, "Content"), including but not limited to the design, structure, selection, coordination, expression, "look and feel," and arrangement of such Content, is owned, controlled, or licensed by or to One Night Stand, and is protected by trade dress, copyright, patent, and trademark laws, and various other intellectual property rights and unfair competition laws.
                                </Paragraph>
                                <Card size="small" style={{ background: "#fafafa" }}>
                                    <Space>
                                        <CopyrightOutlined style={{ color: "#FF3A8A" }} />
                                        <Text>All rights reserved. No part of the Service may be copied, reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, or distributed in any way without our express prior written consent.</Text>
                                    </Space>
                                </Card>
                            </div>

                            {/* Section 2 */}
                            <div id="trademarks">
                                <Title level={2}>2. Trademarks</Title>
                                <Paragraph>
                                    "One Night Stand", the One Night Stand logo, and other One Night Stand graphics, logos, designs, page headers, button icons, scripts, and service names are registered trademarks, common law trademarks, or trade dress of One Night Stand in the U.S. and/or other countries.
                                </Paragraph>
                                <Paragraph>
                                    Our trademarks and trade dress may not be used in connection with any product or service that is not ours, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits One Night Stand.
                                </Paragraph>
                            </div>

                            {/* Section 3 */}
                            <div id="user-content">
                                <Title level={2}>3. User Content License</Title>
                                <Paragraph>
                                    While you retain ownership of your content, you grant One Night Stand a broad license to use it for the operation and promotion of the Service, as detailed in our <Link href="/legal/terms-of-service" style={{ color: "#FF3A8A" }}>Terms of Use</Link> and <Link href="/legal/user-generated-content" style={{ color: "#FF3A8A" }}>User-Generated Content Policy</Link>. This includes the right to host, display, modify, and distribute your content.
                                </Paragraph>
                            </div>

                            {/* Section 4 */}
                            <div id="copyright-complaints">
                                <Title level={2}>4. Copyright Complaints (DMCA)</Title>
                                <Paragraph>
                                    We respect the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information:
                                </Paragraph>
                               <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
                                    <li>A description of the copyrighted work that you claim has been infringed.</li>
                                    <li>A description of where the material that you claim is infringing is located on the site.</li>
                                    <li>Your address, telephone number, and email address.</li>
                                    <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                                </ul>
                            </div>

                            {/* Section 5 */}
                            <div id="contact">
                                <Title level={2}>5. Contact Us</Title>
                                <Paragraph>
                                    For intellectual property inquiries, please contact us at:
                                </Paragraph>
                                <Paragraph>
                                    <Text strong>Email:</Text> <a href="mailto:legal@one-night-stand.co" style={{ color: "#FF3A8A" }}>legal@one-night-stand.co</a>
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
