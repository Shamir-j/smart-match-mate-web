"use client";

import Link from "next/link";
import { Layout, Typography, Anchor, Space, Divider, Row, Col, Alert } from "antd";
import { ArrowLeftOutlined, WarningOutlined } from "@ant-design/icons";
import Footer from "@/components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function TermsOfUse() {
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
            Privacy Policy
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
                  { key: "acceptance", href: "#acceptance", title: "Acceptance of Terms" },
                  { key: "ownership", href: "#ownership", title: "Ownership and Operation" },
                  { key: "eligibility", href: "#eligibility", title: "Eligibility" },
                  { key: "accounts", href: "#accounts", title: "Accounts" },
                  { key: "conduct", href: "#conduct", title: "User Conduct" },
                  { key: "content", href: "#content", title: "User Content" },
                  { key: "safety", href: "#safety", title: "Safety Disclaimer" },
                  { key: "payments", href: "#payments", title: "Subscriptions and Payments" },
                  { key: "termination", href: "#termination", title: "Termination" },
                  { key: "intellectual", href: "#intellectual", title: "Intellectual Property" },
                  { key: "liability", href: "#liability", title: "Limitation of Liability" },
                  { key: "indemnification", href: "#indemnification", title: "Indemnification" },
                  { key: "governing", href: "#governing", title: "Governing Law" },
                  { key: "changes", href: "#changes", title: "Changes to Terms" },
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
                <Title level={1} style={{ marginBottom: 8 }}>Terms of Use</Title>
                <Space separator={<Divider orientation="vertical" />}>
                  <Text strong style={{ color: "#FF3A8A" }}>One Night Stand</Text>
                  <Text type="secondary">Last Updated: December 27, 2025</Text>
                </Space>
              </div>

              <Divider orientation="horizontal" />

              {/* Section 1 */}
              <div id="acceptance">
                <Title level={2}>1. Acceptance of Terms</Title>
                <Paragraph>
                  By accessing or using One Night Stand, you agree to be bound by these Terms of Use ("Terms"). If you do not agree, do not use the Services.
                </Paragraph>
              </div>

              {/* Section 2 */}
              <div id="ownership">
                <Title level={2}>2. Ownership and Operation</Title>
                <Paragraph>
                  One Night Stand is owned by <Text strong>Match Mate Group (Consumer Social Products)</Text> and developed and maintained by <Text strong>Quantum Times Technologies</Text>.
                </Paragraph>
              </div>

              {/* Section 3 */}
              <div id="eligibility">
                <Title level={2}>3. Eligibility</Title>
                <Paragraph>
                  You must be at least <Text strong>18 years old</Text> to use the Services. By using the Services, you represent and warrant that you meet this requirement.
                </Paragraph>
              </div>

              {/* Section 4 */}
              <div id="accounts">
                <Title level={2}>4. Accounts</Title>
                <Paragraph>
                  You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
                </Paragraph>
              </div>

              {/* Section 5 */}
              <div id="conduct">
                <Title level={2}>5. User Conduct</Title>
                <Paragraph>You agree not to:</Paragraph>
                <ul>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Use the Services for illegal or fraudulent purposes</li>
                  <li>Post misleading, offensive, or unlawful content</li>
                  <li>Use bots, scrapers, or automated systems</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div id="content">
                <Title level={2}>6. User Content</Title>
                <Paragraph>
                  You retain ownership of content you post. By posting content, you grant One Night Stand a non-exclusive, worldwide, royalty-free license to host, display, and distribute such content within the Services.
                </Paragraph>
              </div>

              {/* Section 7 */}
              <div id="safety">
                <Title level={2}>7. Safety Disclaimer</Title>
                <Alert
                  title="Important Safety Notice"
                  description="One Night Stand does not conduct background checks on users. You are solely responsible for your interactions with other users. Use caution when meeting offline."
                  type="warning"
                  icon={<WarningOutlined />}
                  showIcon
                  style={{ marginBottom: 16 }}
                />
              </div>

              {/* Section 8 */}
              <div id="payments">
                <Title level={2}>8. Subscriptions and Payments</Title>
                <Paragraph>
                  Paid features, if offered, are billed according to the terms presented at purchase. All payments are non-refundable unless required by law.
                </Paragraph>
              </div>

              {/* Section 9 */}
              <div id="termination">
                <Title level={2}>9. Termination</Title>
                <Paragraph>
                  We reserve the right to suspend or terminate accounts that violate these Terms or applicable laws, with or without notice.
                </Paragraph>
              </div>

              {/* Section 10 */}
              <div id="intellectual">
                <Title level={2}>10. Intellectual Property</Title>
                <Paragraph>
                  All platform software, trademarks, and branding are the property of Match Mate Group or its licensors.
                </Paragraph>
              </div>

              {/* Section 11 */}
              <div id="liability">
                <Title level={2}>11. Limitation of Liability</Title>
                <Paragraph>
                  The Services are provided "as is". To the maximum extent permitted by law, we disclaim all warranties and limit liability for damages.
                </Paragraph>
              </div>

              {/* Section 12 */}
              <div id="indemnification">
                <Title level={2}>12. Indemnification</Title>
                <Paragraph>
                  You agree to indemnify and hold harmless One Night Stand from claims arising from your use of the Services.
                </Paragraph>
              </div>

              {/* Section 13 */}
              <div id="governing">
                <Title level={2}>13. Governing Law</Title>
                <Paragraph>
                  These Terms are governed by the laws of the applicable operating jurisdiction.
                </Paragraph>
              </div>

              {/* Section 14 */}
              <div id="changes">
                <Title level={2}>14. Changes to Terms</Title>
                <Paragraph>
                  We may modify these Terms at any time. Continued use constitutes acceptance of updated Terms.
                </Paragraph>
              </div>

              {/* Section 15 */}
              <div id="contact">
                <Title level={2}>15. Contact</Title>
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
