"use client";

import Link from "next/link";
import { Layout, Typography, Anchor, Space, Divider, Row, Col, Alert } from "antd";
import { ArrowLeftOutlined, CheckCircleOutlined } from "@ant-design/icons";
import Footer from "../../components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function Accessibility() {
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
          <Link href="/contact" style={{ color: "#FF3A8A", textDecoration: "none" }}>
            Contact Support
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
                  { key: "commitment", href: "#commitment", title: "Our Commitment" },
                  { key: "standards", href: "#standards", title: "Standards & Guidelines" },
                  { key: "features", href: "#features", title: "Accessibility Features" },
                  { key: "feedback", href: "#feedback", title: "Feedback & Assistance" },
                ]}
              />
            </div>
          </Col>

          {/* Main Content */}
          <Col xs={24} lg={18}>
            <Space orientation="vertical" size="large" style={{ width: "100%" }}>
              {/* Header */}
              <div>
                <Title level={1} style={{ marginBottom: 8 }}>Accessibility Statement</Title>
                <Space separator={<Divider orientation="vertical" />}>
                  <Text strong style={{ color: "#FF3A8A" }}>One Night Stand</Text>
                  <Text type="secondary">Last Updated: December 27, 2025</Text>
                </Space>
              </div>

              <Divider />

              {/* Section 1 */}
              <div id="commitment">
                <Title level={2}>1. Our Commitment</Title>
                <Paragraph>
                  One Night Stand is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards. We believe that the internet should be available and accessible to anyone, and are committed to providing a website that is accessible to the widest possible audience, regardless of circumstance and ability.
                </Paragraph>
              </div>

              {/* Section 2 */}
              <div id="standards">
                <Title level={2}>2. Standards & Guidelines</Title>
                <Paragraph>
                  To fulfill this promise, we aim to adhere as strictly as possible to the World Wide Web Consortium’s (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level. These guidelines explain how to make web content more accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that the website is accessible to all people: blind people, people with motor impairments, visual impairment, cognitive disabilities, and more.
                </Paragraph>
              </div>

              {/* Section 3 */}
              <div id="features">
                <Title level={2}>3. Accessibility Features</Title>
                <Paragraph>
                  We have implemented various features to improve accessibility, including:
                </Paragraph>
                <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                  <Alert
                    title="Keyboard Navigation"
                    description="Our site is fully navigable using a keyboard, ensuring that all interactive elements are accessible without a mouse."
                    type="success"
                    showIcon
                    icon={<CheckCircleOutlined />}
                  />
                  <Alert
                    title="Screen Reader Compatibility"
                    description="We use semantic HTML and ARIA attributes to ensure compatibility with popular screen readers."
                    type="success"
                    showIcon
                    icon={<CheckCircleOutlined />}
                  />
                  <Alert
                    title="Color Contrast"
                    description="We strive to maintain high color contrast ratios to assist users with visual impairments."
                    type="success"
                    showIcon
                    icon={<CheckCircleOutlined />}
                  />
                </Space>
              </div>

              {/* Section 4 */}
              <div id="feedback">
                <Title level={2}>4. Feedback & Assistance</Title>
                <Paragraph>
                  We welcome your feedback on the accessibility of One Night Stand. Please let us know if you encounter accessibility barriers on our site:
                </Paragraph>
                <Paragraph>
                  <Text strong>Email:</Text> <a href="mailto:accessibility@one-night-stand.co" style={{ color: "#FF3A8A" }}>accessibility@one-night-stand.co</a>
                </Paragraph>
                <Paragraph>
                  We try to respond to feedback within 2 business days.
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
