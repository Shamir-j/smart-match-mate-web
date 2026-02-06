"use client";

import { Layout, Typography, Anchor, Space, Divider, Row, Col, Alert } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import Footer from "@/components/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function TermsOfUse() {
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
                  You must be at least <Text strong>18 years old</Text> to use the Services. By using the Services, you represent and warrant that:
                </Paragraph>
                <ul>
                  <li>You can form a binding contract with One Night Stand.</li>
                  <li>You are not a person who is barred from using the Service under the laws of the United States or any other applicable jurisdiction.</li>
                  <li>You will comply with this Agreement and all applicable local, state, national and international laws, rules and regulations.</li>
                  <li>You have never been convicted of or pled no contest to a felony, a sex crime, or any crime involving violence, and that you are not required to register as a sex offender with any state, federal or local sex offender registry.</li>
                </ul>
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
                <Paragraph>You agree to treat other users with courtesy and respect. You agree not to:</Paragraph>
                <ul>
                  <li>Use the Service for any purpose that is illegal or prohibited by this Agreement.</li>
                  <li>Use the Service for any harmful or nefarious purpose.</li>
                  <li>Use the Service in order to damage One Night Stand.</li>
                  <li>Violate our Community Guidelines, as updated from time to time.</li>
                  <li>Spam, solicit money from or defraud any members.</li>
                  <li>Impersonate any person or entity or post any images of another person without his or her permission.</li>
                  <li>Bully, "stalk," intimidate, assault, harass, mistreat or defame any person.</li>
                  <li>Post any content that violates or infringes anyone's rights, including rights of publicity, privacy, copyright, trademark or other intellectual property or contract right.</li>
                  <li>Post any content that is hate speech, threatening, sexually explicit or pornographic; incites violence; or contains nudity or graphic or gratuitous violence.</li>
                  <li>Post any content that promotes racism, bigotry, hatred or physical harm of any kind against any group or individual.</li>
                  <li>Solicit passwords for any purpose, or personal identifying information for commercial or unlawful purposes from other users or disseminate another person's personal information without his or her permission.</li>
                  <li>Use another user's account, share an account with another user, or maintain more than one account.</li>
                  <li>Create another account if we have already terminated your account, unless you have our permission.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div id="content">
                <Title level={2}>6. User Content</Title>
                <Paragraph>
                  You retain ownership of the content you post. However, by posting content, you grant One Night Stand a <Text strong>worldwide, transferable, sub-licensable, royalty-free, right and license</Text> to host, store, use, copy, display, reproduce, adapt, edit, publish, modify, and distribute such content. This license includes the right to use your content for operating, developing, providing, promoting, and improving the Services.
                </Paragraph>
                <Paragraph>
                  <Text strong>Monitoring:</Text> We have the right, but not the obligation, to monitor all conduct on and content submitted to the Service. We reserve the right to remove any content at any time, for any reason, without notice.
                </Paragraph>
                <Paragraph>
                  <Text strong>Warranties:</Text> You represent and warrant that:
                </Paragraph>
                <ul>
                  <li>You own the Content or have the right to grant the license set forth in this section.</li>
                  <li>The Content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person.</li>
                  <li>The Content is not defamatory, obscene, pornographic, or otherwise offensive.</li>
                </ul>
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
                  <Text strong>Auto-Renewal:</Text> If you purchase an auto-recurring periodic subscription, your Payment Method will continue to be billed for the subscription until you cancel. After your initial subscription commitment period, and again after any subsequent subscription period, your subscription will automatically continue for an additional equivalent period, at the price you agreed to when subscribing.
                </Paragraph>
                <Paragraph>
                  <Text strong>App Store Purchases:</Text> If you purchased a subscription through an App Store (e.g., Apple App Store or Google Play), you will need to access your account with that App Store to manage or cancel your subscription.
                </Paragraph>
                <Paragraph>
                  <Text strong>Refunds:</Text> Generally, all charges for purchases are nonrefundable, and there are no refunds or credits for partially used periods. We may make an exception if a refund for a subscription offering is requested within fourteen days of the transaction date, or if the laws applicable in your jurisdiction provide for refunds.
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
