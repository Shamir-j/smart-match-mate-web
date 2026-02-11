"use client";

import { Layout, Typography, Anchor, Space, Divider, Row, Col, Card, Alert } from "antd";
import { SafetyOutlined, WarningOutlined, SecurityScanOutlined, CheckCircleOutlined } from "@ant-design/icons";
import Footer from "@/components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function ChildSafety() {
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
                                    { key: "overview", href: "#overview", title: "Overview" },
                                    { key: "age-requirements", href: "#age-requirements", title: "Age Requirements" },
                                    { key: "verification", href: "#verification", title: "Age Verification" },
                                    { key: "prohibited-content", href: "#prohibited-content", title: "Prohibited Content" },
                                    { key: "detection", href: "#detection", title: "Detection & Prevention" },
                                    { key: "reporting", href: "#reporting", title: "Reporting Mechanisms" },
                                    { key: "enforcement", href: "#enforcement", title: "Enforcement" },
                                    { key: "cooperation", href: "#cooperation", title: "Law Enforcement Cooperation" },
                                    { key: "parental", href: "#parental", title: "Parental Controls" },
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
                                <SafetyOutlined style={{ fontSize: 48, color: "#FF3A8A", marginBottom: 16 }} />
                                <Title level={1} style={{ marginBottom: 8 }}>Child Safety Policy</Title>
                                <Space separator={<Divider orientation="vertical" />}>
                                    <Text strong style={{ color: "#FF3A8A" }}>One Night Stand</Text>
                                    <Text type="secondary">Last Updated: February 11, 2026</Text>
                                </Space>
                            </div>

                            <Divider />

                            {/* Critical Notice */}
                            <Alert
                                message="Zero Tolerance for Child Exploitation"
                                description="One Night Stand has a strict zero-tolerance policy for any content or behavior involving minors. We are committed to maintaining a safe, adults-only platform and actively work to prevent, detect, and report any child sexual abuse material (CSAM) or exploitation."
                                type="error"
                                showIcon
                                icon={<WarningOutlined />}
                                style={{ marginBottom: 24 }}
                            />

                            {/* Section 1: Overview */}
                            <div id="overview">
                                <Title level={2}>1. Overview</Title>
                                <Paragraph>
                                    One Night Stand is an <Text strong>adults-only dating platform</Text> designed exclusively for users aged 18 years and older. This Child Safety Policy outlines our comprehensive approach to:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>Preventing access by minors (anyone under 18 years of age)</li>
                                    <li>Detecting and removing child sexual abuse material (CSAM)</li>
                                    <li>Reporting illegal content to appropriate authorities</li>
                                    <li>Cooperating with law enforcement investigations</li>
                                    <li>Maintaining compliance with child protection laws worldwide</li>
                                </ul>
                                <Paragraph>
                                    We take our responsibility to protect children extremely seriously and employ multiple layers of protection, including automated detection systems, human moderation, and partnerships with child safety organizations.
                                </Paragraph>
                            </div>

                            {/* Section 2: Age Requirements */}
                            <div id="age-requirements">
                                <Title level={2}>2. Age Requirements</Title>

                                <Title level={3}>2.1. Minimum Age</Title>
                                <Card style={{ background: "#fff1f0", border: "2px solid #ff4d4f", marginBottom: 16 }}>
                                    <Text strong style={{ fontSize: 16, color: "#cf1322" }}>
                                        You must be at least 18 years old to create an account or use One Night Stand.
                                    </Text>
                                </Card>
                                <Paragraph>
                                    By creating an account, you represent and warrant that:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>You are at least 18 years of age</li>
                                    <li>You have the legal capacity to enter into a binding agreement</li>
                                    <li>You are not using the service on behalf of a minor</li>
                                    <li>All information you provide regarding your age is accurate and truthful</li>
                                </ul>

                                <Title level={3}>2.2. Geographic Variations</Title>
                                <Paragraph>
                                    In jurisdictions where the age of majority is higher than 18, users must meet the local age requirement. Our service automatically adjusts age requirements based on your location.
                                </Paragraph>

                                <Title level={3}>2.3. Consequences of Age Misrepresentation</Title>
                                <Paragraph>
                                    Providing false age information is a serious violation that results in:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li><Text strong>Immediate account termination</Text></li>
                                    <li>Permanent ban from the platform</li>
                                    <li>Potential reporting to law enforcement if a minor is involved</li>
                                    <li>Legal liability for fraud or terms of service violations</li>
                                </ul>
                            </div>

                            {/* Section 3: Age Verification */}
                            <div id="verification">
                                <Title level={2}>3. Age Verification Measures</Title>
                                <Paragraph>
                                    We employ multiple methods to verify user age and prevent minors from accessing the platform:
                                </Paragraph>

                                <Title level={3}>3.1. Registration Verification</Title>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title="Date of Birth Requirement" style={{ height: "100%" }}>
                                            <Paragraph>
                                                Users must provide their date of birth during registration. Accounts showing an age under 18 are automatically rejected.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title="Photo Verification" style={{ height: "100%" }}>
                                            <Paragraph>
                                                Our AI-powered photo verification analyzes facial features to estimate age and flags accounts that appear to belong to minors.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title="Document Verification (Optional)" style={{ height: "100%" }}>
                                            <Paragraph>
                                                Users can upload government-issued ID for enhanced verification. This helps confirm identity and age authenticity.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title="Payment Method Verification" style={{ height: "100%" }}>
                                            <Paragraph>
                                                Premium features require payment methods that typically require the account holder to be 18+.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                </Row>

                                <Title level={3} style={{ marginTop: 24 }}>3.2. Ongoing Monitoring</Title>
                                <Paragraph>
                                    Age verification doesn't stop at registration. We continuously monitor for:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>Profile photos that appear to show minors</li>
                                    <li>Self-reported age information in bios or messages</li>
                                    <li>User reports of suspected underage accounts</li>
                                    <li>Behavioral patterns inconsistent with adult users</li>
                                </ul>
                            </div>

                            {/* Section 4: Prohibited Content */}
                            <div id="prohibited-content">
                                <Title level={2}>4. Strictly Prohibited Content</Title>

                                <Alert
                                    message="CSAM is Illegal and Will Be Reported"
                                    description="Any child sexual abuse material (CSAM) or content sexualizing minors will result in immediate account termination and reporting to the National Center for Missing & Exploited Children (NCMEC) and law enforcement."
                                    type="error"
                                    showIcon
                                    style={{ marginBottom: 16 }}
                                />

                                <Title level={3}>4.1. Child Sexual Abuse Material (CSAM)</Title>
                                <Paragraph>
                                    The following content is absolutely prohibited:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>Any visual depiction of sexually explicit conduct involving minors</li>
                                    <li>Computer-generated, AI-generated, or drawn images depicting minors in sexual situations</li>
                                    <li>Content that sexualizes or exploits children in any way</li>
                                    <li>Content promoting, encouraging, or glorifying child exploitation</li>
                                    <li>Links to external sites containing CSAM</li>
                                </ul>

                                <Title level={3}>4.2. Grooming and Solicitation</Title>
                                <Paragraph>
                                    We prohibit any content or behavior that:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>Attempts to establish contact with minors for sexual purposes</li>
                                    <li>Solicits sexual or intimate content from minors</li>
                                    <li>Arranges in-person meetings with minors</li>
                                    <li>Engages in sexual conversation with or about minors</li>
                                </ul>

                                <Title level={3}>4.3. Minor-Related Content</Title>
                                <Paragraph>
                                    Additional prohibitions include:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>Using photos of minors in profiles (even non-sexual)</li>
                                    <li>Creating accounts on behalf of minors</li>
                                    <li>Sharing personal information about minors</li>
                                    <li>Content advocating for lowering age of consent</li>
                                </ul>
                            </div>

                            {/* Section 5: Detection & Prevention */}
                            <div id="detection">
                                <Title level={2}>5. Detection & Prevention Technologies</Title>

                                <Title level={3}>5.1. Automated Systems</Title>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={8}>
                                        <Card size="small" bordered={false} style={{ background: "#f6ffed", height: "100%" }}>
                                            <Space direction="vertical" align="center" style={{ width: "100%", textAlign: "center" }}>
                                                <SecurityScanOutlined style={{ fontSize: 32, color: "#52c41a" }} />
                                                <Title level={5}>PhotoDNA Technology</Title>
                                                <Paragraph style={{ marginBottom: 0 }}>
                                                    Microsoft's PhotoDNA hashes and matches known CSAM against our database to prevent re-upload.
                                                </Paragraph>
                                            </Space>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small" bordered={false} style={{ background: "#f6ffed", height: "100%" }}>
                                            <Space direction="vertical" align="center" style={{ width: "100%", textAlign: "center" }}>
                                                <SecurityScanOutlined style={{ fontSize: 32, color: "#52c41a" }} />
                                                <Title level={5}>AI Image Analysis</Title>
                                                <Paragraph style={{ marginBottom: 0 }}>
                                                    Machine learning algorithms scan all uploaded images for indicators of CSAM or underage users.
                                                </Paragraph>
                                            </Space>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small" bordered={false} style={{ background: "#f6ffed", height: "100%" }}>
                                            <Space direction="vertical" align="center" style={{ width: "100%", textAlign: "center" }}>
                                                <SecurityScanOutlined style={{ fontSize: 32, color: "#52c41a" }} />
                                                <Title level={5}>Text Analysis</Title>
                                                <Paragraph style={{ marginBottom: 0 }}>
                                                    Natural language processing detects grooming language, age indicators, and solicitation attempts.
                                                </Paragraph>
                                            </Space>
                                        </Card>
                                    </Col>
                                </Row>

                                <Title level={3} style={{ marginTop: 24 }}>5.2. Human Moderation</Title>
                                <Paragraph>
                                    Our Trust & Safety team includes:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>Trained content moderators available 24/7</li>
                                    <li>Specialists in child safety and CSAM detection</li>
                                    <li>Rapid response team for escalated reports</li>
                                    <li>Regular audits of automated systems</li>
                                </ul>

                                <Title level={3}>5.3. Prevention Measures</Title>
                                <Paragraph>
                                    Proactive measures include:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>Blocking known bad actors and devices</li>
                                    <li>IP address monitoring and geographic restrictions</li>
                                    <li>Device fingerprinting to prevent ban circumvention</li>
                                    <li>Education resources about online safety</li>
                                </ul>
                            </div>

                            {/* Section 6: Reporting */}
                            <div id="reporting">
                                <Title level={2}>6. Reporting Mechanisms</Title>

                                <Title level={3}>6.1. How to Report Underage Users or CSAM</Title>
                                <Card style={{ background: "#fff7e6", border: "1px solid #ffd591", marginBottom: 16 }}>
                                    <Title level={5}>In-App Reporting (Fastest)</Title>
                                    <ol>
                                        <li>Tap the three-dot menu on the user's profile or message</li>
                                        <li>Select "Report"</li>
                                        <li>Choose "Underage User" or "Inappropriate Content"</li>
                                        <li>Provide details and submit</li>
                                    </ol>
                                    <Text type="secondary">Reports are reviewed within 1 hour for urgent safety concerns.</Text>
                                </Card>

                                <Title level={5}>Email Reporting</Title>
                                <Paragraph>
                                    For immediate safety concerns:
                                </Paragraph>
                                <Space direction="vertical" size="small" style={{ width: "100%" }}>
                                    <div>
                                        <Text strong>Child Safety Email:</Text>{" "}
                                        <a href="mailto:safety@one-night-stand.co" style={{ color: "#FF3A8A" }}>
                                            safety@one-night-stand.co
                                        </a>
                                    </div>
                                    <div>
                                        <Text strong>CSAM Reports:</Text>{" "}
                                        <a href="mailto:csam-report@one-night-stand.co" style={{ color: "#FF3A8A" }}>
                                            csam-report@one-night-stand.co
                                        </a>
                                    </div>
                                </Space>

                                <Title level={3} style={{ marginTop: 24 }}>6.2. External Reporting</Title>
                                <Paragraph>
                                    You can also report directly to authorities:
                                </Paragraph>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Card size="small">
                                            <Title level={5}>NCMEC CyberTipline (US)</Title>
                                            <Paragraph>
                                                <a href="https://www.cybertipline.org" target="_blank" rel="noopener noreferrer" style={{ color: "#1677ff" }}>
                                                    www.cybertipline.org
                                                </a>
                                            </Paragraph>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                Or call: 1-800-843-5678
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small">
                                            <Title level={5}>Internet Watch Foundation (UK)</Title>
                                            <Paragraph>
                                                <a href="https://www.iwf.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#1677ff" }}>
                                                    www.iwf.org.uk
                                                </a>
                                            </Paragraph>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                For reporting CSAM globally
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                </Row>

                                <Title level={3} style={{ marginTop: 24 }}>6.3. Reporter Protections</Title>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>All reports are confidential</li>
                                    <li>Reporter identity is not shared with the reported user</li>
                                    <li>Good faith reports are protected, even if ultimately unfounded</li>
                                    <li>No retaliation against reporters</li>
                                </ul>
                            </div>

                            {/* Section 7: Enforcement */}
                            <div id="enforcement">
                                <Title level={2}>7. Enforcement Actions</Title>

                                <Title level={3}>7.1. Immediate Actions for CSAM/Underage Users</Title>
                                <Card style={{ background: "#fff1f0", border: "2px solid #ff4d4f" }}>
                                    <Space direction="vertical" style={{ width: "100%" }}>
                                        <Space>
                                            <CheckCircleOutlined style={{ color: "#cf1322" }} />
                                            <Text strong>Immediate account suspension and termination</Text>
                                        </Space>
                                        <Space>
                                            <CheckCircleOutlined style={{ color: "#cf1322" }} />
                                            <Text strong>Permanent ban from platform (all devices)</Text>
                                        </Space>
                                        <Space>
                                            <CheckCircleOutlined style={{ color: "#cf1322" }} />
                                            <Text strong>Preservation of evidence for law enforcement</Text>
                                        </Space>
                                        <Space>
                                            <CheckCircleOutlined style={{ color: "#cf1322" }} />
                                            <Text strong>Report to NCMEC within 24 hours</Text>
                                        </Space>
                                        <Space>
                                            <CheckCircleOutlined style={{ color: "#cf1322" }} />
                                            <Text strong>Report to local law enforcement as required</Text>
                                        </Space>
                                        <Space>
                                            <CheckCircleOutlined style={{ color: "#cf1322" }} />
                                            <Text strong>Sharing of information with other platforms via hash databases</Text>
                                        </Space>
                                    </Space>
                                </Card>

                                <Title level={3} style={{ marginTop: 24 }}>7.2. No Warnings for Severe Violations</Title>
                                <Paragraph>
                                    Unlike other policy violations, CSAM and child exploitation receive:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li><Text strong>Zero tolerance:</Text> No warnings, no appeals</li>
                                    <li><Text strong>Permanent bans:</Text> Cannot create new accounts</li>
                                    <li><Text strong>Device bans:</Text> All associated devices are blocked</li>
                                    <li><Text strong>Legal action:</Text> Full cooperation with prosecutions</li>
                                </ul>
                            </div>

                            {/* Section 8: Law Enforcement Cooperation */}
                            <div id="cooperation">
                                <Title level={2}>8. Law Enforcement Cooperation</Title>

                                <Title level={3}>8.1. NCMEC Reporting</Title>
                                <Paragraph>
                                    As required by US law (18 U.S.C. § 2258A), we report all apparent CSAM to the National Center for Missing & Exploited Children (NCMEC) CyberTipline, including:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>User information and account details</li>
                                    <li>Content and metadata</li>
                                    <li>Dates, times, and IP addresses</li>
                                    <li>Any other relevant information</li>
                                </ul>

                                <Title level={3}>8.2. Data Preservation</Title>
                                <Paragraph>
                                    When we identify or are notified of potential CSAM:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>Content and account data are immediately preserved</li>
                                    <li>Evidence is maintained for at least 90 days</li>
                                    <li>Longer retention if requested by law enforcement</li>
                                    <li>Secure storage with restricted access</li>
                                </ul>

                                <Title level={3}>8.3. International Cooperation</Title>
                                <Paragraph>
                                    We work with child protection agencies worldwide:
                                </Paragraph>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={8}>
                                        <Card size="small">
                                            <Text strong>Interpol</Text>
                                            <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                                                International Criminal Police Organization for cross-border cases
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small">
                                            <Text strong>Europol</Text>
                                            <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                                                European Union Agency for Law Enforcement Cooperation
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small">
                                            <Text strong>Local Authorities</Text>
                                            <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                                                We cooperate with local police and prosecutors in all jurisdictions
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            {/* Section 9: Parental Controls */}
                            <div id="parental">
                                <Title level={2}>9. Parental Information & Controls</Title>

                                <Title level={3}>9.1. For Parents and Guardians</Title>
                                <Paragraph>
                                    If you believe a minor has created an account on One Night Stand:
                                </Paragraph>
                                <ol>
                                    <li>Immediately report the account to <a href="mailto:safety@one-night-stand.co" style={{ color: "#FF3A8A" }}>safety@one-night-stand.co</a></li>
                                    <li>Provide the minor's account information or username</li>
                                    <li>Include proof of your relationship to the minor</li>
                                    <li>We will investigate and take immediate action</li>
                                </ol>

                                <Title level={3}>9.2. Device-Level Protections</Title>
                                <Paragraph>
                                    We recommend parents:
                                </Paragraph>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                                    <li>Enable parental controls on devices and app stores</li>
                                    <li>Use age-restriction features on iOS and Android</li>
                                    <li>Monitor device usage and installed apps</li>
                                    <li>Educate children about online safety and stranger danger</li>
                                </ul>

                                <Title level={3}>9.3. App Store Age Ratings</Title>
                                <Paragraph>
                                    One Night Stand is rated:
                                </Paragraph>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Card size="small">
                                            <Text strong>Apple App Store: 17+</Text>
                                            <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                                                Rated for Mature/Frequent Sexual Content or Nudity
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small">
                                            <Text strong>Google Play Store: Adults Only (18+)</Text>
                                            <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                                                Restricted to users 18 years and older
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            {/* Section 10: Contact */}
                            <div id="contact">
                                <Title level={2}>10. Contact Information</Title>

                                <Card style={{ background: "#f6ffed", border: "1px solid #b7eb8f" }}>
                                    <Title level={4}>Child Safety Contact Points</Title>
                                    <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                                        <div>
                                            <Text strong>General Child Safety Concerns:</Text><br />
                                            <a href="mailto:safety@one-night-stand.co" style={{ color: "#FF3A8A" }}>
                                                safety@one-night-stand.co
                                            </a>
                                        </div>
                                        <div>
                                            <Text strong>CSAM Reports (Urgent):</Text><br />
                                            <a href="mailto:csam-report@one-night-stand.co" style={{ color: "#FF3A8A" }}>
                                                csam-report@one-night-stand.co
                                            </a>
                                        </div>
                                        <div>
                                            <Text strong>Legal/Law Enforcement:</Text><br />
                                            <a href="mailto:legal@one-night-stand.co" style={{ color: "#FF3A8A" }}>
                                                legal@one-night-stand.co
                                            </a>
                                        </div>
                                        <div>
                                            <Text strong>Privacy Concerns:</Text><br />
                                            <a href="mailto:privacy@one-night-stand.co" style={{ color: "#FF3A8A" }}>
                                                privacy@one-night-stand.co
                                            </a>
                                        </div>
                                        <Divider />
                                        <Alert
                                            message="Emergency Situations"
                                            description="If a child is in immediate danger, please contact local emergency services (911 in the US) or your local police department immediately."
                                            type="warning"
                                            showIcon
                                        />
                                    </Space>
                                </Card>
                            </div>

                            {/* Commitment Statement */}
                            <Card style={{ background: "#e6f7ff", border: "1px solid #91d5ff", marginTop: 32 }}>
                                <Title level={4}>Our Commitment</Title>
                                <Paragraph>
                                    One Night Stand is committed to being a responsible member of the online community. We continuously invest in technology, training, and partnerships to keep children safe. We will:
                                </Paragraph>
                                <ul style={{ marginBottom: 0 }}>
                                    <li>Maintain and improve our detection and prevention systems</li>
                                    <li>Respond swiftly to reports and work closely with authorities</li>
                                    <li>Advocate for stronger child protection laws and industry standards</li>
                                    <li>Support organizations fighting child exploitation</li>
                                    <li>Regularly update this policy to reflect best practices</li>
                                </ul>
                            </Card>
                        </Space>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    );
}
