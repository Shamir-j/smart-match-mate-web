import { Row, Col, Space } from "antd";
import { InstagramOutlined, TwitterOutlined, YoutubeOutlined, FacebookOutlined, } from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import AntLink from "antd/es/typography/Link";
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
                        <Link href="/privacy-notice"><AntLink>Privacy Notice</AntLink></Link>
                        <Link href="/consumer-health-privacy"><AntLink>Consumer Health Data Privacy Policy</AntLink></Link>
                        <Link href="/terms-of-service"><AntLink>Terms of Service</AntLink></Link>
                        <Link href="/cookie-policy"><AntLink>Cookie Policy</AntLink></Link>
                        <Link href="/intellectual-property"><AntLink>Intellectual Property</AntLink></Link>
                        <Link href="/accessibility"><AntLink>Accessibility Statement</AntLink></Link>
                    </Space>
                </Col>

                <Col xs={24} md={6}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>Careers</h4>
                    <Space orientation="vertical">
                        <AntLink href="#">Careers Portal</AntLink>
                        <AntLink href="#">Tech Blog</AntLink>
                    </Space>
                </Col>

                <Col xs={24} md={6}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>Social</h4>
                    <Space size="large">
                        <AntLink href="#"><InstagramOutlined style={{ fontSize: 20 }} /></AntLink>
                        <AntLink href="#"><TwitterOutlined style={{ fontSize: 20 }} /></AntLink>
                        <AntLink href="#"><YoutubeOutlined style={{ fontSize: 20 }} /></AntLink>
                        <AntLink href="#"><FacebookOutlined style={{ fontSize: 20 }} /></AntLink>
                    </Space>
                </Col>

                <Col xs={24} md={6}>
                    <h4 style={{ fontWeight: 600, marginBottom: 12 }}>More</h4>
                    <Space orientation="vertical">
                        <AntLink href="#">FAQ</AntLink>
                        <AntLink href="#">Destinations</AntLink>
                        <AntLink href="#">Press Room</AntLink>
                        <AntLink href="#">Contact</AntLink>
                        <AntLink href="#">Promo Code</AntLink>
                    </Space>
                </Col>
            </Row>

            <hr style={{ margin: "2rem 0", borderTop: "1px solid #eee" }} />

            {/* App Store Badges */}
            {/* App Store Badges */}
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Space size="large">
                    <Image
                        src="/appstore-badge.png"
                        alt="Download on the App Store"
                        width={120}
                        height={40}
                        style={{ height: 45, width: "auto" }}
                    />
                    <Image
                        src="/googleplay-badge.png"
                        alt="Get it on Google Play"
                        width={120}
                        height={40}
                        style={{ height: 45, width: "auto" }}
                    />
                </Space>
            </div>


            {/* Marketing Text */}
            <Paragraph style={{ maxWidth: 900, margin: "0 auto 2rem", textAlign: "center" }}>
                Single people, listen up: If you’re looking for love, want to start dating,
                or just keep it casual, you need to be here. With millions of matches made,
                it’s the place to meet your next best match.
            </Paragraph>
            <Paragraph style={{ maxWidth: 900, margin: "0 auto 2rem", textAlign: "center" }}>
                There really is something for everyone. Want to get into a relationship? You got it.
                Trying to find new friends? Say no more. Everyone’s invited to make connections,
                memories, and everything in between.
            </Paragraph>

            <hr style={{ margin: "2rem 0", borderTop: "1px solid #eee" }} />

            {/* Bottom links */}
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <Space size="middle" wrap>
                    <AntLink href="/faq">FAQ</AntLink>
                    <AntLink href="/safety-tips">Safety Tips</AntLink>
                    <Link href="/terms-of-service"><AntLink>Terms of Service</AntLink></Link>
                    <AntLink href="/cookie-policy">Cookie Policy</AntLink>
                    <Link href="/privacy-notice"><AntLink>Privacy Settings</AntLink></Link>
                </Space>
            </div>

            {/* Copyright */}
            <Text type="secondary" style={{ display: "block", textAlign: "center" }}>
                © {year} One Night Stand, All Rights Reserved.
            </Text>
        </footer>
    );
}
