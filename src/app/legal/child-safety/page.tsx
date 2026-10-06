"use client";

import { Layout, Typography, Anchor, Space, Divider, Row, Col, Card, Alert, Tag } from "antd";
import { SafetyOutlined, WarningOutlined, SecurityScanOutlined, CheckCircleOutlined, StopOutlined, MailOutlined, GlobalOutlined, LockOutlined, AuditOutlined } from "@ant-design/icons";
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
                                    { key: "app-declaration", href: "#app-declaration", title: "Developer & App Declaration" },
                                    { key: "csae-prohibition", href: "#csae-prohibition", title: "Explicit CSAE & CSAM Prohibition" },
                                    { key: "age-requirements", href: "#age-requirements", title: "Strict Age Requirements (18+)" },
                                    { key: "age-verification", href: "#age-verification", title: "Age Verification Measures" },
                                    { key: "detection-technologies", href: "#detection-technologies", title: "Detection & Prevention Systems" },
                                    { key: "in-app-reporting", href: "#in-app-reporting", title: "In-App Feedback & Reporting Mechanism" },
                                    { key: "addressing-csam", href: "#addressing-csam", title: "Method for Addressing CSAM & Enforcement" },
                                    { key: "ncmec-reporting", href: "#ncmec-reporting", title: "NCMEC & Law Enforcement Reporting" },
                                    { key: "regulatory-compliance", href: "#regulatory-compliance", title: "Legal & Regulatory Compliance" },
                                    { key: "parental-controls", href: "#parental-controls", title: "Parental Information & Controls" },
                                    { key: "contact-point", href: "#contact-point", title: "Child Safety Point of Contact" },
                                ]}
                            />
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col xs={24} lg={18}>
                        <Space direction="vertical" size="large" style={{ width: "100%" }}>
                            {/* Header */}
                            <div>
                                <SafetyOutlined style={{ fontSize: 48, color: "#FF3A8A", marginBottom: 16 }} />
                                <Title level={1} style={{ marginBottom: 8 }}>Child Safety Standards & CSAE Prevention Policy</Title>
                                <Space wrap separator={<Divider type="vertical" />}>
                                    <Tag color="magenta" style={{ fontSize: 14, padding: "4px 8px" }}>App: One Night Stand: Meet & Date</Tag>
                                    <Tag color="blue" style={{ fontSize: 14, padding: "4px 8px" }}>Developer: Quantum Times Technologies</Tag>
                                    <Tag color="green" style={{ fontSize: 14, padding: "4px 8px" }}>Package: com.quantum.times.technologies.onenightstand</Tag>
                                    <Text type="secondary">Last Updated: October 06, 2026</Text>
                                </Space>
                            </div>

                            <Divider />

                            {/* Critical Zero-Tolerance Alert */}
                            <Alert
                                message="ZERO TOLERANCE: Explicit Prohibition of Child Sexual Abuse and Exploitation (CSAE)"
                                description="Quantum Times Technologies maintains an uncompromising, zero-tolerance policy against Child Sexual Abuse and Exploitation (CSAE) and Child Sexual Abuse Material (CSAM) across the One Night Stand: Meet & Date platform. Any attempted or actual engagement with, generation, distribution, facilitation, or solicitation of CSAE/CSAM will result in immediate permanent expulsion, account termination, device banning, and mandatory referral to the National Center for Missing & Exploited Children (NCMEC) and law enforcement authorities."
                                type="error"
                                showIcon
                                icon={<WarningOutlined />}
                                style={{ marginBottom: 16 }}
                            />

                            {/* Section 1: Developer & App Declaration */}
                            <div id="app-declaration">
                                <Title level={2}>1. Developer & App Declaration</Title>
                                <Card style={{ background: "#fafafa", border: "1px solid #d9d9d9", marginBottom: 16 }}>
                                    <Row gutter={[16, 16]}>
                                        <Col xs={24} sm={12}>
                                            <Paragraph style={{ marginBottom: 8 }}>
                                                <Text strong>Application Name:</Text> One Night Stand: Meet & Date
                                            </Paragraph>
                                            <Paragraph style={{ marginBottom: 8 }}>
                                                <Text strong>Application Package ID:</Text> <code>com.quantum.times.technologies.onenightstand</code>
                                            </Paragraph>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                <Text strong>Platform Rating:</Text> Adults Only (18+ / Rated 17+ on App Stores)
                                            </Paragraph>
                                        </Col>
                                        <Col xs={24} sm={12}>
                                            <Paragraph style={{ marginBottom: 8 }}>
                                                <Text strong>Developer / Publisher:</Text> Quantum Times Technologies
                                            </Paragraph>
                                            <Paragraph style={{ marginBottom: 8 }}>
                                                <Text strong>Child Safety Point of Contact:</Text> Child Safety & Protection Officer
                                            </Paragraph>
                                            <Paragraph style={{ marginBottom: 0 }}>
                                                <Text strong>Child Safety Email:</Text>{" "}
                                                <a href="mailto:contact@quantumtimes.co.ke" style={{ color: "#FF3A8A", fontWeight: 600 }}>
                                                    contact@quantumtimes.co.ke
                                                </a>
                                            </Paragraph>
                                        </Col>
                                    </Row>
                                </Card>
                                <Paragraph>
                                    This document establishes the official public <strong>Child Safety Standards</strong> for <strong>One Night Stand: Meet & Date</strong>, owned by <strong>Match Mate Group (Consumer Social Products)</strong> and developed, published, and maintained by <strong>Quantum Times Technologies</strong>. These standards are globally accessible to ensure total transparency and enforce rigorous safety protections against child sexual abuse and exploitation.
                                </Paragraph>
                            </div>

                            {/* Section 2: Explicit CSAE & CSAM Prohibition */}
                            <div id="csae-prohibition">
                                <Title level={2}>2. Explicit Prohibition of Child Sexual Abuse and Exploitation (CSAE)</Title>
                                <Paragraph>
                                    In accordance with global child protection statutes and the Google Play Child Safety Standards Policy, <strong>One Night Stand: Meet & Date</strong> strictly and explicitly prohibits all forms of:
                                </Paragraph>

                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title={<Space><StopOutlined style={{ color: "#cf1322" }} /><Text strong>Child Sexual Abuse Material (CSAM)</Text></Space>} style={{ height: "100%", borderLeft: "3px solid #ff4d4f" }}>
                                            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                                                <li>Any photographic, video, illustrative, or audio depiction of sexually explicit conduct involving a minor (under 18).</li>
                                                <li>Any AI-generated, synthetic, computer-generated, deepfake, or animated imagery depicting minors in sexual or suggestive situations.</li>
                                                <li>Hosting, uploading, transmitting, linking to, requesting, storing, or sharing CSAM in profiles, direct messages, or media attachments.</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title={<Space><StopOutlined style={{ color: "#cf1322" }} /><Text strong>Child Sexual Exploitation & Abuse (CSAE)</Text></Space>} style={{ height: "100%", borderLeft: "3px solid #ff4d4f" }}>
                                            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                                                <li><strong>Child Grooming:</strong> Attempting to build relationships, trust, or emotional connection with minors for sexual exploitation or abusive purposes.</li>
                                                <li><strong>Sextortion:</strong> Coercing, threatening, or blackmailing minors or using intimate imagery for extortion.</li>
                                                <li><strong>Commercial Exploitation & Trafficking:</strong> Soliciting, facilitating, or promoting child sexual trafficking, prostitution, or sexual favors involving minors.</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                </Row>

                                <Paragraph style={{ marginTop: 16 }}>
                                    We also explicitly prohibit:
                                </Paragraph>
                                <ul style={{ lineHeight: "1.8", paddingLeft: "30px" }}>
                                    <li>Any predatory behavior, sexual communication, or sexualized banter directed at or referencing minors.</li>
                                    <li>Using profile images depicting children or minors, even if non-sexual in nature, to prevent grooming and impersonation.</li>
                                    <li>Promoting, advocating, or seeking to normalize child sexual abuse, sexualization of minors, or lowering of statutory ages of consent.</li>
                                </ul>
                            </div>

                            {/* Section 3: Age Requirements */}
                            <div id="age-requirements">
                                <Title level={2}>3. Strict Age Requirements (18+ Adults Only)</Title>
                                <Card style={{ background: "#fff1f0", border: "2px solid #ff4d4f", marginBottom: 16 }}>
                                    <Text strong style={{ fontSize: 16, color: "#cf1322" }}>
                                        One Night Stand: Meet & Date is strictly an 18+ adults-only application. Individuals under the age of 18 are legally prohibited from creating accounts, accessing, or utilizing any portion of our service.
                                    </Text>
                                </Card>
                                <Paragraph>
                                    All users agree and warrant upon registration that:
                                </Paragraph>
                                <ul style={{ lineHeight: "1.8", paddingLeft: "30px" }}>
                                    <li>They are at least 18 years of age (or the legal age of majority in their jurisdiction, whichever is older).</li>
                                    <li>They are providing true, complete, and accurate date of birth details.</li>
                                    <li>They are not creating an account on behalf of, or facilitating access for, any underage individual.</li>
                                </ul>
                            </div>

                            {/* Section 4: Age Verification Measures */}
                            <div id="age-verification">
                                <Title level={2}>4. Age Verification & Gatekeeping Measures</Title>
                                <Paragraph>
                                    Quantum Times Technologies implements multi-tiered gating mechanisms to prevent underage access:
                                </Paragraph>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title="1. Date-of-Birth Verification" style={{ height: "100%" }}>
                                            <Paragraph>
                                                Mandatory registration date-of-birth input. Users indicating an age below 18 are rejected automatically with persistent device-level cookie/ID blocking.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title="2. AI Facial Age Estimation" style={{ height: "100%" }}>
                                            <Paragraph>
                                                Automated computer vision classifiers inspect submitted profile photos to estimate user age and flag accounts that appear to feature underage persons.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title="3. Identity & Document Verification" style={{ height: "100%" }}>
                                            <Paragraph>
                                                Integration with trusted identity verification providers to validate government-issued ID documents for suspicious or elevated-risk accounts.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title="4. Payment Credential Checks" style={{ height: "100%" }}>
                                            <Paragraph>
                                                Premium transactions require financial instruments (credit cards/authenticated mobile payment) requiring account holders to be of legal adult age.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            {/* Section 5: Detection & Prevention Systems */}
                            <div id="detection-technologies">
                                <Title level={2}>5. Detection & Prevention Technologies</Title>
                                <Paragraph>
                                    We employ modern automated technologies and dedicated human review to intercept CSAE before or immediately when it appears:
                                </Paragraph>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={8}>
                                        <Card size="small" style={{ background: "#f6ffed", border: "1px solid #b7eb8f", height: "100%" }}>
                                            <Space direction="vertical" align="center" style={{ width: "100%", textAlign: "center" }}>
                                                <SecurityScanOutlined style={{ fontSize: 32, color: "#52c41a" }} />
                                                <Title level={5}>Hash Matching & PhotoDNA</Title>
                                                <Paragraph style={{ marginBottom: 0 }}>
                                                    Cryptographic hash matching comparing media uploads against known CSAM hash lists to block known illegal content at the point of upload.
                                                </Paragraph>
                                            </Space>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small" style={{ background: "#f6ffed", border: "1px solid #b7eb8f", height: "100%" }}>
                                            <Space direction="vertical" align="center" style={{ width: "100%", textAlign: "center" }}>
                                                <SecurityScanOutlined style={{ fontSize: 32, color: "#52c41a" }} />
                                                <Title level={5}>Computer Vision AI Classifiers</Title>
                                                <Paragraph style={{ marginBottom: 0 }}>
                                                    Deep neural networks analyze all uploaded imagery in real-time to detect nudity, minors, and suggestive or illicit content.
                                                </Paragraph>
                                            </Space>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <Card size="small" style={{ background: "#f6ffed", border: "1px solid #b7eb8f", height: "100%" }}>
                                            <Space direction="vertical" align="center" style={{ width: "100%", textAlign: "center" }}>
                                                <SecurityScanOutlined style={{ fontSize: 32, color: "#52c41a" }} />
                                                <Title level={5}>NLP Text & Grooming Filters</Title>
                                                <Paragraph style={{ marginBottom: 0 }}>
                                                    Real-time NLP models scan bios and messages for underage keywords, grooming behavioral patterns, age disclosure, and solicitation attempts.
                                                </Paragraph>
                                            </Space>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            {/* Section 6: In-App Feedback & Reporting Mechanism */}
                            <div id="in-app-reporting">
                                <Title level={2}>6. In-App Feedback & Reporting Mechanism</Title>
                                <Paragraph>
                                    <strong>One Night Stand: Meet & Date</strong> provides built-in, accessible, real-time in-app feedback and reporting tools for users to flag child safety concerns immediately:
                                </Paragraph>

                                <Card style={{ background: "#fff7e6", border: "1px solid #ffd591", marginBottom: 16 }}>
                                    <Title level={4} style={{ color: "#d46b08" }}>Step-by-Step In-App Reporting Flow</Title>
                                    <ol style={{ lineHeight: "1.8", paddingLeft: "24px" }}>
                                        <li>
                                            <Text strong>On Any User Profile:</Text> Tap the three-dot overflow menu (<code>⋮</code>) located in the upper right corner of the profile card.
                                        </li>
                                        <li>
                                            <Text strong>Select "Report User":</Text> Choose the dedicated category <strong>"Underage User / Child Safety (CSAE)"</strong>.
                                        </li>
                                        <li>
                                            <Text strong>Within Chat Messaging:</Text> Tap the menu within the active conversation and select <strong>"Report / Safety Concern"</strong>.
                                        </li>
                                        <li>
                                            <Text strong>Submit Details:</Text> Attach optional context or screenshots. Upon submission, the reported user is immediately muted/blocked from your view and prioritized in our moderation queue.
                                        </li>
                                        <li>
                                            <Text strong>Direct Safety Feedback:</Text> In-app access under <em>Settings &gt; Safety Center &gt; Child Protection Feedback</em> allows submitting direct child safety inquiries.
                                        </li>
                                    </ol>
                                    <Text type="secondary">All reports filed under Child Safety/CSAE receive highest-priority queue escalation and are triaged immediately by our dedicated Trust & Safety moderators.</Text>
                                </Card>
                            </div>

                            {/* Section 7: Method for Addressing CSAM & Enforcement */}
                            <div id="addressing-csam">
                                <Title level={2}>7. Method for Addressing CSAM & Remediation Protocols</Title>
                                <Paragraph>
                                    When an incident of potential CSAE or CSAM is detected through automated systems or user reporting, Quantum Times Technologies enforces the following immediate protocol:
                                </Paragraph>
                                <Card style={{ background: "#fff1f0", border: "2px solid #ff4d4f" }}>
                                    <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                                        <Space align="start">
                                            <CheckCircleOutlined style={{ color: "#cf1322", fontSize: 18, marginTop: 4 }} />
                                            <div>
                                                <Text strong>1. Instant Content Removal & Quarantine:</Text>
                                                <Paragraph style={{ marginBottom: 0 }}>The infringing material is immediately suppressed, hidden from view, removed from public servers, and quarantined in a secure encrypted repository for evidence preservation.</Paragraph>
                                            </div>
                                        </Space>
                                        <Space align="start">
                                            <CheckCircleOutlined style={{ color: "#cf1322", fontSize: 18, marginTop: 4 }} />
                                            <div>
                                                <Text strong>2. Permanent Account Termination & Device Blacklisting:</Text>
                                                <Paragraph style={{ marginBottom: 0 }}>The offending user account is permanently terminated. Associated hardware identifiers, IP addresses, payment credentials, and phone numbers are permanently blacklisted to prevent re-registration.</Paragraph>
                                            </div>
                                        </Space>
                                        <Space align="start">
                                            <CheckCircleOutlined style={{ color: "#cf1322", fontSize: 18, marginTop: 4 }} />
                                            <div>
                                                <Text strong>3. Cryptographic Hash Generation:</Text>
                                                <Paragraph style={{ marginBottom: 0 }}>Cryptographic hashes of confirmed CSAM are generated and recorded into industry hash registries to ensure universal platform blocking.</Paragraph>
                                            </div>
                                        </Space>
                                        <Space align="start">
                                            <CheckCircleOutlined style={{ color: "#cf1322", fontSize: 18, marginTop: 4 }} />
                                            <div>
                                                <Text strong>4. Mandatory NCMEC & Law Enforcement Escalation:</Text>
                                                <Paragraph style={{ marginBottom: 0 }}>A formal report is submitted without delay to NCMEC and relevant statutory law enforcement authorities.</Paragraph>
                                            </div>
                                        </Space>
                                    </Space>
                                </Card>
                            </div>

                            {/* Section 8: NCMEC & Law Enforcement Reporting */}
                            <div id="ncmec-reporting">
                                <Title level={2}>8. NCMEC Reporting & Law Enforcement Cooperation</Title>
                                <Paragraph>
                                    Quantum Times Technologies complies strictly with mandatory statutory reporting obligations, including <strong>18 U.S.C. § 2258A</strong>:
                                </Paragraph>

                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title={<Space><AuditOutlined /><Text strong>NCMEC CyberTipline Reporting</Text></Space>} style={{ height: "100%" }}>
                                            <Paragraph>
                                                All apparent CSAM and CSAE incidents are reported directly to the <strong>National Center for Missing & Exploited Children (NCMEC)</strong> via CyberTipline. Reports include:
                                            </Paragraph>
                                            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                                                <li>User account identifiers, registration data, and email</li>
                                                <li>IP addresses, timestamps, and geolocation records</li>
                                                <li>File metadata and evidence packages</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Card size="small" title={<Space><GlobalOutlined /><Text strong>International & Local Law Enforcement</Text></Space>} style={{ height: "100%" }}>
                                            <Paragraph>
                                                We actively cooperate with domestic and international police authorities, including:
                                            </Paragraph>
                                            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                                                <li>Kenya DCI Child Protection & Cybercrime Units</li>
                                                <li>INTERPOL & Europol Specialized Child Protection Units</li>
                                                <li>Federal Bureau of Investigation (FBI) & Homeland Security Investigations (HSI)</li>
                                            </ul>
                                        </Card>
                                    </Col>
                                </Row>

                                <Title level={3} style={{ marginTop: 24 }}>8.1. External Direct Reporting Resources</Title>
                                <Paragraph>
                                    Anyone may report child sexual abuse material directly to national and international hotlines:
                                </Paragraph>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} sm={12}>
                                        <Card size="small">
                                            <Title level={5}>NCMEC CyberTipline (USA / Global)</Title>
                                            <Paragraph>
                                                Website: <a href="https://www.cybertipline.org" target="_blank" rel="noopener noreferrer" style={{ color: "#1677ff" }}>www.cybertipline.org</a><br />
                                                Hotline: <strong>1-800-843-5678 (1-800-THE-LOST)</strong>
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                    <Col xs={24} sm={12}>
                                        <Card size="small">
                                            <Title level={5}>Internet Watch Foundation (IWF)</Title>
                                            <Paragraph>
                                                Website: <a href="https://report.iwf.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#1677ff" }}>report.iwf.org.uk</a><br />
                                                Global reporting of online child sexual abuse content.
                                            </Paragraph>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            {/* Section 9: Legal & Regulatory Compliance */}
                            <div id="regulatory-compliance">
                                <Title level={2}>9. Legal & Regulatory Child Protection Compliance</Title>
                                <Paragraph>
                                    This policy and our operational procedures comply with applicable statutory frameworks:
                                </Paragraph>
                                <ul style={{ lineHeight: "1.8", paddingLeft: "30px" }}>
                                    <li><Text strong>18 U.S.C. § 2258A & Chapter 110:</Text> Federal requirements for online providers to report child sexual exploitation material.</li>
                                    <li><Text strong>Children's Online Privacy Protection Act (COPPA, 15 U.S.C. §§ 6501–6506):</Text> We do not knowingly collect personal data from anyone under 13, nor permit any minor under 18 to use the service.</li>
                                    <li><Text strong>Kenya Children Act (2022) & Computer Misuse and Cybercrimes Act (2018):</Text> Strict prohibitions against cyber-harassment, child grooming, and distribution of child pornography.</li>
                                    <li><Text strong>EU Digital Services Act (DSA Regulation 2022/2065) & GDPR (Article 8):</Text> Notice-and-action mechanisms and child privacy safeguards.</li>
                                    <li><Text strong>UK Online Safety Act (2023):</Text> Duty of care to prevent child access and suppress illegal child abuse content.</li>
                                    <li><Text strong>Google Play Child Safety Standards Policy:</Text> Full compliance with published standards, in-app user feedback, CSAM handling, and designated contact requirements.</li>
                                </ul>
                            </div>

                            {/* Section 10: Parental Controls */}
                            <div id="parental-controls">
                                <Title level={2}>10. Parental Information & Controls</Title>
                                <Paragraph>
                                    If you are a parent or legal guardian and suspect that a minor under your care has created an account or accessed One Night Stand: Meet & Date:
                                </Paragraph>
                                <ol style={{ lineHeight: "1.8", paddingLeft: "30px" }}>
                                    <li>Contact our Child Safety Officer immediately at <a href="mailto:contact@quantumtimes.co.ke" style={{ color: "#FF3A8A", fontWeight: 600 }}>contact@quantumtimes.co.ke</a> with the subject <code>"Minor Account Removal Request"</code>.</li>
                                    <li>Provide the account handle, phone number, or email associated with the profile.</li>
                                    <li>Our team will immediately verify, freeze, and purge the account records within 24 hours.</li>
                                </ol>
                                <Paragraph>
                                    We also encourage parents to employ OS-level parental controls (Google Family Link, Apple Screen Time) to restrict 17+ and Adults Only (18+) apps on minors' devices.
                                </Paragraph>
                            </div>

                            {/* Section 11: Child Safety Point of Contact */}
                            <div id="contact-point">
                                <Title level={2}>11. Dedicated Child Safety Point of Contact</Title>
                                <Card style={{ background: "#f6ffed", border: "2px solid #52c41a" }}>
                                    <Title level={4} style={{ color: "#237804", marginTop: 0 }}>
                                        <Space><MailOutlined /> Official Child Safety Point of Contact</Space>
                                    </Title>
                                    <Paragraph>
                                        For all child protection inquiries, law enforcement subpoenas, CSAE escalation notices, or parental inquiries regarding <strong>One Night Stand: Meet & Date</strong>:
                                    </Paragraph>
                                    <Space direction="vertical" size="small" style={{ width: "100%" }}>
                                        <div>
                                            <Text strong>Designated Role:</Text> Child Safety & Protection Officer / Trust & Safety Team
                                        </div>
                                        <div>
                                            <Text strong>Developer Entity:</Text> Quantum Times Technologies
                                        </div>
                                        <div>
                                            <Text strong>Application:</Text> One Night Stand: Meet & Date (<code>com.quantum.times.technologies.onenightstand</code>)
                                        </div>
                                        <div>
                                            <Text strong>Dedicated Email:</Text>{" "}
                                            <a href="mailto:contact@quantumtimes.co.ke" style={{ color: "#FF3A8A", fontWeight: 700, fontSize: 16 }}>
                                                contact@quantumtimes.co.ke
                                            </a>
                                        </div>
                                        <div>
                                            <Text strong>Priority Subject Line:</Text> <code>[URGENT CSAE / Child Safety Report]</code>
                                        </div>
                                        <div>
                                            <Text strong>Response SLA:</Text> Triage within 1 hour for urgent CSAE/CSAM reports; formal resolution within 24 hours.
                                        </div>
                                    </Space>

                                    <Divider style={{ margin: "16px 0" }} />

                                    <Alert
                                        message="Emergency Life Safety Warning"
                                        description="If a child is in immediate physical danger or an active emergency, immediately dial your local emergency services (911 in the United States, 999/112 in Kenya/UK, 112 in Europe) or contact local law enforcement."
                                        type="warning"
                                        showIcon
                                    />
                                </Card>
                            </div>
                        </Space>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    );
}
