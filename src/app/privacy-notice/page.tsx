"use client";

import Link from "next/link";
import { Layout, Typography, Anchor, Space, Divider, Row, Col, Card } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Footer from "@/components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function PrivacyPolicy() {
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
          <Link href="/terms-of-service" style={{ color: "#FF3A8A", textDecoration: "none" }}>
            Terms of Use
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
                  { key: "eligibility", href: "#eligibility", title: "Eligibility" },
                  { key: "information", href: "#information", title: "Information We Collect" },
                  { key: "usage", href: "#usage", title: "How We Use Your Information" },
                  { key: "legal-basis", href: "#legal-basis", title: "Legal Basis" },
                  { key: "sharing", href: "#sharing", title: "Sharing of Information" },
                  { key: "content", href: "#content", title: "User Content" },
                  { key: "cookies", href: "#cookies", title: "Cookies and Tracking" },
                  { key: "retention", href: "#retention", title: "Data Retention" },
                  { key: "rights", href: "#rights", title: "Your Rights" },
                  { key: "security", href: "#security", title: "Security" },
                  { key: "transfers", href: "#transfers", title: "International Transfers" },
                  { key: "changes", href: "#changes", title: "Changes to Policy" },
                  { key: "contact", href: "#contact", title: "Contact" },
                ]}
              />
            </div>
          </Col>

          {/* Main Content */}
          <Col xs={24} lg={18}>
            <Space orientation="vertical" size="large" style={{ width: "100%" }}>
              {/* Header */}
              <div>
                <Title level={1} style={{ marginBottom: 8 }}>Privacy Policy</Title>
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
                  One Night Stand ("we", "us", "our") is a consumer social product owned and operated by <Text strong>Match Mate Group (Consumer Social Products)</Text> and developed by <Text strong>Quantum Times Technologies</Text>. This Privacy Policy explains how we collect, use, disclose, and protect personal data when you use our website, mobile applications, and related services (collectively, the "Services").
                </Paragraph>
                <Paragraph>
                  By using the Services, you acknowledge that you have read and understood this Privacy Policy.
                </Paragraph>
              </div>

              {/* Section 2: Eligibility */}
              <div id="eligibility">
                <Title level={2}>2. Eligibility</Title>
                <Paragraph>
                  The Services are strictly for users <Text strong>18 years and above</Text>. We do not knowingly collect data from minors.
                </Paragraph>
              </div>

              {/* Section 3: Information We Collect */}
              <div id="information">
                <Title level={2}>3. Information We Collect</Title>

                <Title level={4}>3.1 Information You Provide</Title>
                <ul>
                  <li>Account information (email, phone number, date of birth)</li>
                  <li>Profile data (photos, bio, gender, preferences)</li>
                  <li>Communications with other users or support</li>
                  <li>Payment and subscription information (if applicable)</li>
                </ul>

                <Title level={4}>3.2 Information Collected Automatically</Title>
                <ul>
                  <li>Device identifiers, IP address, browser type</li>
                  <li>Usage data (swipes, matches, interactions)</li>
                  <li>Approximate or precise location (with permission)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <Title level={4}>3.3 Information from Third Parties</Title>
                <ul>
                  <li>Social login providers (e.g., Google, Apple)</li>
                  <li>Analytics and advertising partners</li>
                </ul>
              </div>

              {/* Section 4: How We Use Your Information */}
              <div id="usage">
                <Title level={2}>4. How We Use Your Information</Title>
                <Paragraph>We use personal data to:</Paragraph>
                <ul>
                  <li>Provide and improve matchmaking and social features</li>
                  <li>Operate, maintain, and secure the Services</li>
                  <li>Personalize user experience</li>
                  <li>Process payments and subscriptions</li>
                  <li>Enforce our Terms of Use</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Section 5: Legal Basis */}
              <div id="legal-basis">
                <Title level={2}>5. Legal Basis for Processing</Title>
                <Paragraph>Where applicable, we process personal data based on:</Paragraph>
                <ul>
                  <li>Performance of a contract</li>
                  <li>User consent</li>
                  <li>Legitimate interests</li>
                  <li>Legal obligations</li>
                </ul>
              </div>

              {/* Section 6: Sharing */}
              <div id="sharing">
                <Title level={2}>6. Sharing of Information</Title>
                <Paragraph>We may share information with:</Paragraph>
                <ul>
                  <li>Service providers and infrastructure partners</li>
                  <li>Analytics and marketing partners (with consent)</li>
                  <li>Law enforcement or regulators where required by law</li>
                </ul>
                <Card size="small" style={{ background: "#fff1f0", border: "1px solid #ffa39e", marginTop: 16 }}>
                  <Text strong style={{ color: "#cf1322" }}>We do not sell personal data.</Text>
                </Card>
              </div>

              {/* Section 7: User Content */}
              <div id="content">
                <Title level={2}>7. User Content and Visibility</Title>
                <Paragraph>
                  Profiles and certain information are visible to other users. You are responsible for the content you choose to share. We strongly discourage sharing sensitive personal information publicly.
                </Paragraph>
              </div>

              {/* Section 8: Cookies */}
              <div id="cookies">
                <Title level={2}>8. Cookies and Tracking</Title>
                <Paragraph>
                  We use cookies for functionality, analytics, and optional marketing. Users can manage cookie preferences through browser settings or in-app controls.
                </Paragraph>
              </div>

              {/* Section 9: Data Retention */}
              <div id="retention">
                <Title level={2}>9. Data Retention</Title>
                <Paragraph>
                  We retain personal data only for as long as necessary to provide the Services and comply with legal obligations. Deleted accounts are anonymized or permanently removed within a reasonable timeframe.
                </Paragraph>
              </div>

              {/* Section 10: Your Rights */}
              <div id="rights">
                <Title level={2}>10. Your Rights</Title>
                <Paragraph>Depending on your jurisdiction, you may have the right to:</Paragraph>
                <ul>
                  <li>Access your data</li>
                  <li>Request correction or deletion</li>
                  <li>Object to or restrict processing</li>
                  <li>Request data portability</li>
                </ul>
                <Paragraph>Requests can be made via support channels.</Paragraph>
              </div>

              {/* Section 11: Security */}
              <div id="security">
                <Title level={2}>11. Security</Title>
                <Paragraph>
                  We implement technical and organizational measures including encryption, access controls, and monitoring to protect personal data. However, no system is completely secure.
                </Paragraph>
              </div>

              {/* Section 12: International Transfers */}
              <div id="transfers">
                <Title level={2}>12. International Transfers</Title>
                <Paragraph>
                  Your data may be processed in countries outside your residence. We ensure appropriate safeguards are in place.
                </Paragraph>
              </div>

              {/* Section 13: Changes */}
              <div id="changes">
                <Title level={2}>13. Changes to This Policy</Title>
                <Paragraph>
                  We may update this Privacy Policy from time to time. Material changes will be communicated through the Services.
                </Paragraph>
              </div>

              {/* Section 14: Contact */}
              <div id="contact">
                <Title level={2}>14. Contact</Title>
                <Paragraph>
                  For privacy inquiries:<br />
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
