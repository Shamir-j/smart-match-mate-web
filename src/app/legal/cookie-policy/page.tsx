"use client";

import { Layout, Typography, Anchor, Space, Divider, Row, Col, Table } from "antd";
import Footer from "../../../components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function CookiePolicy() {
  const cookieColumns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '25%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  const cookieData = [
    {
      key: '1',
      category: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.',
    },
    {
      key: '2',
      category: 'Performance Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.',
    },
    {
      key: '3',
      category: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.',
    },
    {
      key: '4',
      category: 'Targeting Cookies',
      description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.',
    },
  ];

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
                  { key: "what-are-cookies", href: "#what-are-cookies", title: "What Are Cookies?" },
                  { key: "how-we-use", href: "#how-we-use", title: "How We Use Cookies" },
                  { key: "types", href: "#types", title: "Types of Cookies We Use" },
                  { key: "managing", href: "#managing", title: "Managing Cookies" },
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
                <Title level={1} style={{ marginBottom: 8 }}>Cookie Policy</Title>
                <Space separator={<Divider orientation="vertical" />}>
                  <Text strong style={{ color: "#FF3A8A" }}>One Night Stand</Text>
                  <Text type="secondary">Last Updated: December 27, 2025</Text>
                </Space>
              </div>

              <Divider />

              {/* Section 1 */}
              <div id="what-are-cookies">
                <Title level={2}>1. What Are Cookies?</Title>
                <Paragraph>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                </Paragraph>
              </div>

              {/* Section 2 */}
              <div id="how-we-use">
                <Title level={2}>2. How We Use Cookies</Title>
                <Paragraph>
                  We use cookies to:
                </Paragraph>
               <ul style={{ lineHeight: '1.8', paddingLeft: '30px' }}>
                  <li>Authenticate you and keep you logged in.</li>
                  <li>Remember your preferences and settings.</li>
                  <li>Analyze how you use our services to improve them.</li>
                  <li>Deliver relevant advertising (if you consent).</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div id="types">
                <Title level={2}>3. Types of Cookies We Use</Title>
                <Table 
                  columns={cookieColumns} 
                  dataSource={cookieData} 
                  pagination={false} 
                  bordered
                  size="middle"
                />
              </div>

              {/* Section 4 */}
              <div id="managing">
                <Title level={2}>4. Managing Cookies</Title>
                <Paragraph>
                  You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible.
                </Paragraph>
                <Paragraph>
                  Most browsers allow you to view, manage, delete, and block cookies for a website. Be aware that if you delete all cookies then any preferences you have set will be lost, including the ability to opt-out from cookies as this function itself requires placement of an opt-out cookie on your device.
                </Paragraph>
              </div>

              {/* Section 5 */}
              <div id="contact">
                <Title level={2}>5. Contact Us</Title>
                <Paragraph>
                  If you have questions about this Cookie Policy, please contact us at:
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
