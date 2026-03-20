import { Row, Col, Space } from "antd";
import { InstagramOutlined, TwitterOutlined, YoutubeOutlined, FacebookOutlined, } from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                background: "#fff",
                color: "#333",
                padding: "3rem 2rem",
                fontSize: "14px",
            }}
        >
            {/* Top section: Legal / Careers / Social / FAQ */}
            <Row gutter={[32, 24]} justify="space-between">
                <Col xs={24} md={6}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>Legal</h4>
                    <Space orientation="vertical">
                        <Link href="/legal/privacy-notice" style={{ color: '#1677ff', textDecoration: 'none' }}>Privacy Notice</Link>
                        <Link href="/legal/consumer-health-privacy" style={{ color: '#1677ff', textDecoration: 'none' }}>Consumer Health Data Privacy Policy</Link>
                        <Link href="/legal/terms-of-service" style={{ color: '#1677ff', textDecoration: 'none' }}>Terms of Service</Link>
                        <Link href="/legal/cookie-policy" style={{ color: '#1677ff', textDecoration: 'none' }}>Cookie Policy</Link>
                        <Link href="/legal/intellectual-property" style={{ color: '#1677ff', textDecoration: 'none' }}>Intellectual Property</Link>
                        <Link href="/legal/user-generated-content" style={{ color: '#1677ff', textDecoration: 'none' }}>User-Generated Content Policy</Link>
                        <Link href="/legal/child-safety" style={{ color: '#1677ff', textDecoration: 'none' }}>Child Safety Policy</Link>
                        <Link href="/legal/data-deletion-request" style={{ color: '#1677ff', textDecoration: 'none' }}>Data Deletion Request</Link>
                        <Link href="/legal/accessibility" style={{ color: '#1677ff', textDecoration: 'none' }}>Accessibility Statement</Link>
                    </Space>
                </Col>

                <Col xs={24} md={6}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>Careers</h4>
                    <Space orientation="vertical">
                        <Link href="#">Careers Portal</Link>
                        <Link href="#">Tech Blog</Link>
                    </Space>
                </Col>

                <Col xs={24} md={6}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>Social</h4>
                    <Space size="large">
                        <Link href="#"><InstagramOutlined style={{ fontSize: 20 }} /></Link>
                        <Link href="#"><TwitterOutlined style={{ fontSize: 20 }} /></Link>
                        <Link href="#"><YoutubeOutlined style={{ fontSize: 20 }} /></Link>
                        <Link href="#"><FacebookOutlined style={{ fontSize: 20 }} /></Link>
                    </Space>
                </Col>

                <Col xs={24} md={6}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>More</h4>
                    <Space orientation="vertical">
                        <Link href="#">FAQ</Link>
                        <Link href="#">Destinations</Link>
                        <Link href="#">Press Room</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">Promo Code</Link>
                    </Space>
                </Col>
            </Row>

            <hr style={{ margin: "2rem 0", borderTop: "1px solid #eee" }} />

            {/* App Store Badges */}
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Space size="large">
                    <Link href="#">
                        <Image
                            src="/appstore-badge.png"
                            alt="Download on the App Store"
                            width={120}
                            height={40}
                            style={{ height: 45, width: "auto" }}
                        />
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.quantum.times.technologies.onenightstand" target="_blank">
                        <Image
                            src="/googleplay-badge.png"
                            alt="Get it on Google Play"
                            width={120}
                            height={40}
                            style={{ height: 45, width: "auto" }}
                        />
                    </Link>
                </Space>
            </div>


            {/* Marketing Text */}
            <Paragraph style={{ maxWidth: 900, margin: "0 auto 2rem", textAlign: "center" }}>
                One Night Stand is a modern dating app for adults who want honest connections 
                and meaningful conversations. Whether you’re looking to meet someone new, 
                chat with local singles, or explore dating opportunities near you, 
                One Night Stand helps you connect with real people in your area.
            </Paragraph>
            <Paragraph style={{ maxWidth: 900, margin: "0 auto 2rem", textAlign: "center" }}>
                Designed for adults 18+, our platform focuses on authentic profiles, 
                privacy, and safety, so you can date with confidence. 
                Meet real singles, start conversations, and explore dating at your own pace.
            </Paragraph>

            <hr style={{ margin: "2rem 0", borderTop: "1px solid #eee" }} />

            {/* Bottom links */}
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <Space size="middle" wrap>
                    <Link href="/faq" className="ant-typography ant-typography-link">FAQ</Link>
                    <Link href="/safety-tips" className="ant-typography ant-typography-link">Safety Tips</Link>
                    <Link href="/legal/terms-of-service" className="ant-typography ant-typography-link">Terms of Service</Link>
                    <Link href="/legal/cookie-policy" className="ant-typography ant-typography-link">Cookie Policy</Link>
                    <Link href="/legal/privacy-notice" className="ant-typography ant-typography-link">Privacy Settings</Link>
                </Space>
            </div>

            {/* Copyright */}
            <Text type="secondary" style={{ display: "block", textAlign: "center" }}>
                © {year} One Night Stand, All Rights Reserved.
            </Text>
        </footer>
    );
}
