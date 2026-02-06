"use client";

import { Layout, Typography, Anchor, Space, Divider, Row, Col, Card, Alert } from "antd";
import { WarningOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Footer from "@/components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function UserGeneratedContent() {
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
                                    { key: "introduction", href: "#introduction", title: "Introduction" },
                                    { key: "definitions", href: "#definitions", title: "Definitions" },
                                    { key: "ownership", href: "#ownership", title: "Content Ownership" },
                                    { key: "license", href: "#license", title: "License Grant" },
                                    { key: "prohibited", href: "#prohibited", title: "Prohibited Content" },
                                    { key: "acceptable", href: "#acceptable", title: "Acceptable Content" },
                                    { key: "responsibilities", href: "#responsibilities", title: "User Responsibilities" },
                                    { key: "moderation", href: "#moderation", title: "Content Moderation" },
                                    { key: "reporting", href: "#reporting", title: "Reporting Violations" },
                                    { key: "removal", href: "#removal", title: "Content Removal" },
                                    { key: "consequences", href: "#consequences", title: "Consequences of Violations" },
                                    { key: "privacy", href: "#privacy", title: "Privacy & Visibility" },
                                    { key: "intellectual", href: "#intellectual", title: "Intellectual Property" },
                                    { key: "representations", href: "#representations", title: "Representations & Warranties" },
                                    { key: "indemnification", href: "#indemnification", title: "Indemnification" },
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
                                <Title level={1} style={{ marginBottom: 8 }}>User-Generated Content Policy</Title>
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
                                    This User-Generated Content Policy ("UGC Policy") governs all content created, uploaded, shared, or transmitted by users of One Night Stand ("Service"). This policy is incorporated by reference into our Terms of Service and Privacy Policy.
                                </Paragraph>
                                <Paragraph>
                                    By using One Night Stand, you acknowledge that you have read, understood, and agree to be bound by this UGC Policy. We reserve the right to update this policy at any time, and your continued use of the Service constitutes acceptance of any changes.
                                </Paragraph>
                            </div>

                            {/* Section 2: Definitions */}
                            <div id="definitions">
                                <Title level={2}>2. Definitions</Title>
                                <Paragraph>
                                    For purposes of this policy, <Text strong>"User-Generated Content"</Text> (or "Content") includes, but is not limited to:
                                </Paragraph>
                                <ul>
                                    <li><Text strong>Profile Information:</Text> Photos, bio, description, interests, preferences, and other profile details.</li>
                                    <li><Text strong>Messages:</Text> Direct messages, chat conversations, and any communication between users.</li>
                                    <li><Text strong>Media:</Text> Photos, videos, voice messages, GIFs, stickers, and other multimedia content.</li>
                                    <li><Text strong>Reactions:</Text> Likes, swipes, ratings, feedback, and other interactive responses.</li>
                                    <li><Text strong>Reviews & Feedback:</Text> Ratings, reviews, comments, and testimonials about the Service or other users.</li>
                                    <li><Text strong>Shared Links:</Text> External links, URLs, and third-party content shared within the platform.</li>
                                </ul>
                            </div>

                            {/* Section 3: Ownership */}
                            <div id="ownership">
                                <Title level={2}>3. Content Ownership</Title>
                                <Paragraph>
                                    <Text strong>You retain full ownership</Text> of all content you create and upload to One Night Stand. We do not claim ownership of your User-Generated Content.
                                </Paragraph>
                                <Card size="small" style={{ background: "#e6f7ff", border: "1px solid #91d5ff" }}>
                                    <Text>
                                        While you own your content, by uploading it to our Service, you grant us certain rights to use it as described in Section 4 below.
                                    </Text>
                                </Card>
                            </div>

                            {/* Section 4: License Grant */}
                            <div id="license">
                                <Title level={2}>4. License Grant to One Night Stand</Title>
                                <Paragraph>
                                    By posting Content on or through the Service, you grant One Night Stand a <Text strong>worldwide, non-exclusive, royalty-free, fully paid, transferable, sublicensable license</Text> to:
                                </Paragraph>
                                <ul>
                                    <li><Text strong>Host and Store:</Text> Store your content on our servers and content delivery networks.</li>
                                    <li><Text strong>Display and Distribute:</Text> Display your content to other users based on your privacy settings and the functionality of the Service.</li>
                                    <li><Text strong>Reproduce and Copy:</Text> Create backup copies and technical reproductions necessary for the operation of the Service.</li>
                                    <li><Text strong>Modify and Adapt:</Text> Resize, compress, format, or otherwise technically modify your content to ensure compatibility across different devices and platforms.</li>
                                    <li><Text strong>Use for Promotion:</Text> Use your content (with appropriate anonymization when necessary) in marketing materials, case studies, testimonials, and promotional campaigns to showcase the Service.</li>
                                    <li><Text strong>Improve Services:</Text> Analyze content patterns (in aggregate and anonymized form) to improve our algorithms, features, and user experience.</li>
                                </ul>
                                <Paragraph>
                                    This license exists only for the limited purpose of operating, developing, providing, promoting, and improving the Service and researching and developing new ones. This license will terminate when you delete your content or account, except where we are required to retain it for legal or safety reasons.
                                </Paragraph>
                            </div>

                            {/* Section 5: Prohibited Content */}
                            <div id="prohibited">
                                <Title level={2}>5. Prohibited Content</Title>
                                <Alert
                                    title="Strictly Prohibited"
                                    description="Posting prohibited content may result in immediate account suspension or termination."
                                    type="error"
                                    showIcon
                                    icon={<WarningOutlined />}
                                    style={{ marginBottom: 16 }}
                                />
                                <Paragraph>
                                    You agree <Text strong>NOT</Text> to post, upload, or share content that:
                                </Paragraph>

                                <Title level={4}>5.1. Illegal Content</Title>
                                <ul>
                                    <li>Violates any local, state, national, or international law or regulation.</li>
                                    <li>Promotes, facilitates, or depicts illegal activities, including drug use, human trafficking, or solicitation.</li>
                                    <li>Contains or promotes child sexual abuse material (CSAM) or exploitation of minors.</li>
                                </ul>

                                <Title level={4}>5.2. Sexually Explicit Content</Title>
                                <ul>
                                    <li>Contains pornographic material, explicit nudity, or sexually explicit imagery.</li>
                                    <li>Depicts sexual acts or sexually suggestive poses.</li>
                                    <li>Includes content intended to sexually arouse viewers.</li>
                                    <li>Promotes or facilitates prostitution, escort services, or sexual services in exchange for compensation.</li>
                                </ul>

                                <Title level={4}>5.3. Harmful Content</Title>
                                <ul>
                                    <li>Promotes violence, self-harm, suicide, eating disorders, or dangerous activities.</li>
                                    <li>Contains graphic violence, gore, or disturbing imagery.</li>
                                    <li>Depicts or glorifies terrorism or extremist ideologies.</li>
                                    <li>Encourages or instructs others to engage in harmful behavior.</li>
                                </ul>

                                <Title level={4}>5.4. Hateful Content</Title>
                                <ul>
                                    <li>Promotes hate speech, racism, sexism, homophobia, transphobia, or discrimination of any kind.</li>
                                    <li>Targets individuals or groups based on race, ethnicity, national origin, religion, disability, gender, age, veteran status, or sexual orientation.</li>
                                    <li>Contains slurs, derogatory language, or symbols associated with hate groups.</li>
                                </ul>

                                <Title level={4}>5.5. Harassment & Abuse</Title>
                                <ul>
                                    <li>Bullies, harasses, stalks, intimidates, or threatens other users.</li>
                                    <li>Discloses private information of others without consent (doxxing).</li>
                                    <li>Contains non-consensual intimate images (revenge porn).</li>
                                    <li>Impersonates another person or entity.</li>
                                </ul>

                                <Title level={4}>5.6. Spam & Scams</Title>
                                <ul>
                                    <li>Contains spam, commercial solicitation, or unsolicited advertising.</li>
                                    <li>Promotes pyramid schemes, multi-level marketing, or get-rich-quick schemes.</li>
                                    <li>Attempts to defraud, phish, or scam other users.</li>
                                    <li>Contains malware, viruses, or malicious code.</li>
                                </ul>

                                <Title level={4}>5.7. Intellectual Property Violations</Title>
                                <ul>
                                    <li>Infringes on copyrights, trademarks, trade secrets, or other intellectual property rights.</li>
                                    <li>Uses another person's photos, videos, or content without permission.</li>
                                    <li>Violates rights of publicity or privacy.</li>
                                </ul>

                                <Title level={4}>5.8. Misleading Content</Title>
                                <ul>
                                    <li>Contains false, misleading, or deceptive information.</li>
                                    <li>Misrepresents your identity, age, location, or relationship status.</li>
                                    <li>Uses fake or heavily edited photos that do not accurately represent you.</li>
                                    <li>Spreads misinformation or disinformation.</li>
                                </ul>
                            </div>

                            {/* Section 6: Acceptable Content */}
                            <div id="acceptable">
                                <Title level={2}>6. Acceptable Content Guidelines</Title>
                                <Alert
                                    title="Create Authentic, Respectful Content"
                                    description="Content that is genuine, respectful, and compliant with our guidelines creates a better experience for everyone."
                                    type="success"
                                    showIcon
                                    icon={<CheckCircleOutlined />}
                                    style={{ marginBottom: 16 }}
                                />
                                <Paragraph>
                                    We encourage content that:
                                </Paragraph>
                                <ul>
                                    <li><Text strong>Is Authentic:</Text> Genuinely represents who you are, your interests, and your intentions.</li>
                                    <li><Text strong>Is Respectful:</Text> Treats others with dignity, courtesy, and respect.</li>
                                    <li><Text strong>Is Appropriate:</Text> Adheres to community standards and is suitable for a dating platform.</li>
                                    <li><Text strong>Is Safe:</Text> Does not put yourself or others at risk.</li>
                                    <li><Text strong>Is Legal:</Text> Complies with all applicable laws and regulations.</li>
                                    <li><Text strong>Is Yours:</Text> You own the content or have permission to share it.</li>
                                </ul>

                                <Title level={4}>Profile Photo Guidelines</Title>
                                <Space orientation="vertical" size="small" style={{ width: "100%", marginTop: 16 }}>
                                    <Card size="small" style={{ background: "#f6ffed", border: "1px solid #b7eb8f" }}>
                                        <Space><CheckCircleOutlined style={{ color: "#52c41a" }} /><Text>Clear, recent photos of yourself</Text></Space>
                                    </Card>
                                    <Card size="small" style={{ background: "#f6ffed", border: "1px solid #b7eb8f" }}>
                                        <Space><CheckCircleOutlined style={{ color: "#52c41a" }} /><Text>Photos where your face is clearly visible</Text></Space>
                                    </Card>
                                    <Card size="small" style={{ background: "#f6ffed", border: "1px solid #b7eb8f" }}>
                                        <Space><CheckCircleOutlined style={{ color: "#52c41a" }} /><Text>Photos that accurately represent how you currently look</Text></Space>
                                    </Card>
                                    <Card size="small" style={{ background: "#fff2e8", border: "1px solid #ffbb96", marginTop: 8 }}>
                                        <Space><CloseCircleOutlined style={{ color: "#ff4d4f" }} /><Text>Group photos where you can't be identified</Text></Space>
                                    </Card>
                                    <Card size="small" style={{ background: "#fff2e8", border: "1px solid #ffbb96" }}>
                                        <Space><CloseCircleOutlined style={{ color: "#ff4d4f" }} /><Text>Photos of celebrities, children, or other people</Text></Space>
                                    </Card>
                                    <Card size="small" style={{ background: "#fff2e8", border: "1px solid #ffbb96" }}>
                                        <Space><CloseCircleOutlined style={{ color: "#ff4d4f" }} /><Text>Heavily filtered or edited photos that misrepresent your appearance</Text></Space>
                                    </Card>
                                </Space>
                            </div>

                            {/* Section 7: Responsibilities */}
                            <div id="responsibilities">
                                <Title level={2}>7. User Responsibilities</Title>
                                <Paragraph>
                                    As a user creating and sharing content on One Night Stand, you are responsible for:
                                </Paragraph>
                                <ul>
                                    <li><Text strong>Accuracy:</Text> Ensuring all information you provide is truthful and accurate.</li>
                                    <li><Text strong>Legality:</Text> Ensuring your content complies with all applicable laws.</li>
                                    <li><Text strong>Permissions:</Text> Obtaining necessary permissions, licenses, and consents before posting content.</li>
                                    <li><Text strong>Backups:</Text> Maintaining your own backups of important content.</li>
                                    <li><Text strong>Monitoring:</Text> Regularly reviewing and updating your content to ensure continued compliance.</li>
                                    <li><Text strong>Minors:</Text> Ensuring no content involving minors is posted on the platform.</li>
                                    <li><Text strong>Consent:</Text> Obtaining explicit consent from all individuals depicted in your content.</li>
                                    <li><Text strong>Context:</Text> Providing appropriate context for content that might be misunderstood.</li>
                                </ul>
                            </div>

                            {/* Section 8: Moderation */}
                            <div id="moderation">
                                <Title level={2}>8. Content Moderation</Title>
                                <Paragraph>
                                    One Night Stand employs a multi-layered approach to content moderation:
                                </Paragraph>

                                <Title level={4}>8.1. Automated Moderation</Title>
                                <Paragraph>
                                    We use automated systems, including artificial intelligence and machine learning, to:
                                </Paragraph>
                                <ul>
                                    <li>Scan uploaded content for prohibited material.</li>
                                    <li>Detect patterns of abusive behavior.</li>
                                    <li>Flag potentially violating content for human review.</li>
                                    <li>Prevent known prohibited content from being re-uploaded.</li>
                                </ul>

                                <Title level={4}>8.2. Human Moderation</Title>
                                <Paragraph>
                                    Our human moderation team:
                                </Paragraph>
                                <ul>
                                    <li>Reviews flagged content and user reports.</li>
                                    <li>Makes final decisions on content removal and account actions.</li>
                                    <li>Investigates complex or nuanced cases.</li>
                                    <li>Continuously improves our moderation systems and policies.</li>
                                </ul>

                                <Title level={4}>8.3. Community Reporting</Title>
                                <Paragraph>
                                    Users play a crucial role in maintaining a safe community by reporting violations (see Section 9).
                                </Paragraph>

                                <Card size="small" style={{ background: "#fffbe6", border: "1px solid #ffe58f", marginTop: 16 }}>
                                    <Text strong>Moderation Standards:</Text>
                                    <Paragraph style={{ marginBottom: 0, marginTop: 8 }}>
                                        We strive to apply our policies fairly and consistently. However, content moderation involves human judgment, and decisions may vary based on context. We commit to transparency and continuous improvement.
                                    </Paragraph>
                                </Card>
                            </div>

                            {/* Section 9: Reporting */}
                            <div id="reporting">
                                <Title level={2}>9. Reporting Violations</Title>
                                <Paragraph>
                                    If you encounter content that violates this policy, please report it immediately using one of the following methods:
                                </Paragraph>

                                <Title level={4}>9.1. In-App Reporting</Title>
                                <ul>
                                    <li>Tap the three-dot menu on any profile or message.</li>
                                    <li>Select "Report."</li>
                                    <li>Choose the reason for reporting.</li>
                                    <li>Provide additional details if requested.</li>
                                </ul>

                                <Title level={4}>9.2. Email Reporting</Title>
                                <Paragraph>
                                    For serious violations or if you prefer email:
                                </Paragraph>
                                <ul>
                                    <li><Text strong>Safety Concerns:</Text> <a href="mailto:safety@one-night-stand.co" style={{ color: "#FF3A8A" }}>safety@one-night-stand.co</a></li>
                                    <li><Text strong>Copyright Issues:</Text> <a href="mailto:copyright@one-night-stand.co" style={{ color: "#FF3A8A" }}>copyright@one-night-stand.co</a></li>
                                    <li><Text strong>General Policy Violations:</Text> <a href="mailto:legal@one-night-stand.co" style={{ color: "#FF3A8A" }}>legal@one-night-stand.co</a></li>
                                </ul>

                                <Title level={4}>9.3. What Happens After You Report</Title>
                                <Paragraph>
                                    When you submit a report:
                                </Paragraph>
                                <ul>
                                    <li>Your report is reviewed by our moderation team, typically within 24-48 hours.</li>
                                    <li>We may take immediate action for severe violations.</li>
                                    <li>You will receive confirmation that we received your report.</li>
                                    <li>For privacy reasons, we may not share specific actions taken.</li>
                                    <li>Reports are confidential, and the reported user will not know who reported them.</li>
                                </ul>
                            </div>

                            {/* Section 10: Removal */}
                            <div id="removal">
                                <Title level={2}>10. Content Removal</Title>
                                <Paragraph>
                                    We reserve the right to remove any content, with or without notice, that:
                                </Paragraph>
                                <ul>
                                    <li>Violates this UGC Policy, our Terms of Service, or other policies.</li>
                                    <li>Violates applicable laws or regulations.</li>
                                    <li>Is subject to a valid legal request (e.g., court order, subpoena, DMCA takedown).</li>
                                    <li>Poses a risk to user safety or platform security.</li>
                                    <li>Is determined to be inappropriate, even if not explicitly prohibited.</li>
                                </ul>

                                <Title level={4}>10.1. User-Initiated Removal</Title>
                                <Paragraph>
                                    You can delete your own content at any time through your account settings. Deleted content:
                                </Paragraph>
                                <ul>
                                    <li>Is immediately removed from public view.</li>
                                    <li>May persist in backups for up to 90 days.</li>
                                    <li>May be retained longer if required by law or for safety/security purposes.</li>
                                    <li>May remain visible to users who have already downloaded or saved it.</li>
                                </ul>

                                <Title level={4}>10.2. Appeals</Title>
                                <Paragraph>
                                    If your content is removed and you believe it was done in error, you may appeal by contacting <a href="mailto:appeals@one-night-stand.co" style={{ color: "#FF3A8A" }}>appeals@one-night-stand.co</a> within 30 days.
                                </Paragraph>
                            </div>

                            {/* Section 11: Consequences */}
                            <div id="consequences">
                                <Title level={2}>11. Consequences of Violations</Title>
                                <Paragraph>
                                    Violations of this UGC Policy may result in:
                                </Paragraph>

                                <Title level={4}>11.1. Content Removal</Title>
                                <Paragraph>
                                    Individual pieces of content may be removed without account penalties for first-time or minor violations.
                                </Paragraph>

                                <Title level={4}>11.2. Warnings</Title>
                                <Paragraph>
                                    You may receive a formal warning notifying you of the violation and potential consequences of continued violations.
                                </Paragraph>

                                <Title level={4}>11.3. Feature Restrictions</Title>
                                <Paragraph>
                                    Temporary or permanent restrictions on certain features, such as:
                                </Paragraph>
                                <ul>
                                    <li>Inability to upload new photos.</li>
                                    <li>Restrictions on messaging or other communication features.</li>
                                    <li>Limitations on profile visibility.</li>
                                </ul>

                                <Title level={4}>11.4. Account Suspension</Title>
                                <Paragraph>
                                    Temporary suspension of your account for a specified period (e.g., 7 days, 30 days).
                                </Paragraph>

                                <Title level={4}>11.5. Account Termination</Title>
                                <Paragraph>
                                    Permanent ban from the platform for:
                                </Paragraph>
                                <ul>
                                    <li>Severe violations (e.g., CSAM, threats of violence).</li>
                                    <li>Repeated violations after warnings.</li>
                                    <li>Circumventing previous bans or restrictions.</li>
                                </ul>

                                <Title level={4}>11.6. Legal Action</Title>
                                <Paragraph>
                                    We may refer serious violations to law enforcement authorities and cooperate with investigations. We may also pursue civil action for damages caused by violations.
                                </Paragraph>

                                <Card size="small" style={{ background: "#fff1f0", border: "1px solid #ffccc7", marginTop: 16 }}>
                                    <Text strong style={{ color: "#cf1322" }}>Zero Tolerance:</Text>
                                    <Paragraph style={{ marginBottom: 0, marginTop: 8 }}>
                                        Certain violations result in immediate permanent ban with no warnings, including CSAM, violent threats, human trafficking, and other severe illegal activity.
                                    </Paragraph>
                                </Card>
                            </div>

                            {/* Section 12: Privacy */}
                            <div id="privacy">
                                <Title level={2}>12. Privacy & Visibility Controls</Title>
                                <Paragraph>
                                    You have control over the visibility of your content through:
                                </Paragraph>
                                <ul>
                                    <li><Text strong>Profile Privacy Settings:</Text> Control who can see your profile and content.</li>
                                    <li><Text strong>Photo Visibility:</Text> Choose which photos are public or visible only to matches.</li>
                                    <li><Text strong>Location Sharing:</Text> Control precision and visibility of your location.</li>
                                    <li><Text strong>Blocking:</Text> Block specific users from seeing your content or contacting you.</li>
                                </ul>
                                <Paragraph>
                                    However, please note:
                                </Paragraph>
                                <ul>
                                    <li>Once shared with another user, you cannot control what they do with it.</li>
                                    <li>Users may take screenshots or save content outside our platform.</li>
                                    <li>Deleted content may remain in backups or caches temporarily.</li>
                                    <li>Content shared publicly may be indexed by search engines.</li>
                                </ul>
                            </div>

                            {/* Section 13: Intellectual Property */}
                            <div id="intellectual">
                                <Title level={2}>13. Intellectual Property Rights</Title>
                                
                                <Title level={4}>13.1. Your Rights</Title>
                                <Paragraph>
                                    You retain all ownership rights to your Content. The license you grant us (Section 4) is non-exclusive, meaning you can share your content elsewhere.
                                </Paragraph>

                                <Title level={4}>13.2. Third-Party Rights</Title>
                                <Paragraph>
                                    You must ensure you have all necessary rights, licenses, and permissions before posting content that includes:
                                </Paragraph>
                                <ul>
                                    <li>Other people's faces or likenesses.</li>
                                    <li>Copyrighted music, art, or media.</li>
                                    <li>Trademarked logos or brands.</li>
                                    <li>Private property or locations that require permission to photograph.</li>
                                </ul>

                                <Title level={4}>13.3. DMCA Compliance</Title>
                                <Paragraph>
                                    We comply with the Digital Millennium Copyright Act (DMCA). If you believe your copyright has been infringed:
                                </Paragraph>
                                <ul>
                                    <li>Submit a DMCA takedown notice to <a href="mailto:copyright@one-night-stand.co" style={{ color: "#FF3A8A" }}>copyright@one-night-stand.co</a>.</li>
                                    <li>Include all required elements per 17 U.S.C. § 512(c)(3).</li>
                                    <li>Provide specific identification of the infringing content.</li>
                                </ul>
                            </div>

                            {/* Section 14: Representations */}
                            <div id="representations">
                                <Title level={2}>14. Representations & Warranties</Title>
                                <Paragraph>
                                    By posting Content, you represent and warrant that:
                                </Paragraph>
                                <ul>
                                    <li>You are the sole author and owner of the Content, or have all necessary rights and permissions.</li>
                                    <li>The Content does not and will not infringe any third-party intellectual property rights.</li>
                                    <li>The Content does not violate any law, regulation, or third-party rights.</li>
                                    <li>The Content is not defamatory, libelous, or otherwise tortious.</li>
                                    <li>The Content does not contain viruses, malware, or malicious code.</li>
                                    <li>All individuals depicted in the Content have provided consent to be photographed and have their likeness shared.</li>
                                    <li>The Content accurately represents you and is not misleading.</li>
                                    <li>You are at least 18 years of age.</li>
                                </ul>
                            </div>

                            {/* Section 15: Indemnification */}
                            <div id="indemnification">
                                <Title level={2}>15. Indemnification</Title>
                                <Paragraph>
                                    You agree to indemnify, defend, and hold harmless One Night Stand, Match Mate Group, Quantum Times Technologies, and their respective officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
                                </Paragraph>
                                <ul>
                                    <li>Your violation of this UGC Policy.</li>
                                    <li>Your violation of any law or regulation.</li>
                                    <li>Your violation of any third-party rights, including intellectual property rights, privacy rights, or publicity rights.</li>
                                    <li>Any Content you post on the platform.</li>
                                    <li>Any claim that your Content caused damage to a third party.</li>
                                </ul>
                            </div>

                            {/* Section 16: Contact */}
                            <div id="contact">
                                <Title level={2}>16. Contact Us</Title>
                                <Paragraph>
                                    If you have questions about this User-Generated Content Policy, please contact us:
                                </Paragraph>
                                <Space orientation="vertical" size="small" style={{ width: "100%" }}>
                                    <Paragraph>
                                        <Text strong>General Inquiries:</Text> <a href="mailto:legal@one-night-stand.co" style={{ color: "#FF3A8A" }}>legal@one-night-stand.co</a>
                                    </Paragraph>
                                    <Paragraph>
                                        <Text strong>Safety Concerns:</Text> <a href="mailto:safety@one-night-stand.co" style={{ color: "#FF3A8A" }}>safety@one-night-stand.co</a>
                                    </Paragraph>
                                    <Paragraph>
                                        <Text strong>Copyright Issues:</Text> <a href="mailto:copyright@one-night-stand.co" style={{ color: "#FF3A8A" }}>copyright@one-night-stand.co</a>
                                    </Paragraph>
                                    <Paragraph style={{ marginBottom: 0 }}>
                                        <Text strong>Appeals:</Text> <a href="mailto:appeals@one-night-stand.co" style={{ color: "#FF3A8A" }}>appeals@one-night-stand.co</a>
                                    </Paragraph>
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
