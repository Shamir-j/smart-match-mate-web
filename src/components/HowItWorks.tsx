import { Card, Col, Row } from "antd";
import { HeartOutlined, MessageOutlined, SwapOutlined,} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";


export default function HowItWorks() {
    const steps = [
        {
            icon: <SwapOutlined style={{ fontSize: 32, color: "#FF3A8A" }} />,
            title: "Swipe",
            description: "Browse profiles and swipe right to like or left to pass.",
        },
        {
            icon: <HeartOutlined style={{ fontSize: 32, color: "#FF3A8A" }} />,
            title: "Match",
            description: "Get notified when someone likes you back. It's a match!",
        },
        {
            icon: <MessageOutlined style={{ fontSize: 32, color: "#FF3A8A" }} />,
            title: "Meet",
            description: "Chat with your matches and arrange a meet-up.",
        },
    ];

    return (
        <div
            style={{
                background: "black",
                color: "white",
                padding: "4rem 1rem",
                textAlign: "center",
            }}
            id="how-it-works"
        >
            <Title level={2} style={{ color: "white", marginBottom: "1rem" }}>
                How It Works
            </Title>
            <Paragraph style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.125rem" }}>
                Three simple steps to your next encounter.
            </Paragraph>

            <Row gutter={[24, 24]} style={{ marginTop: "3rem" }} justify="center">
                {steps.map((step, index) => (
                    <Col xs={24} md={8} key={index}>
                        <Card
                            variant="borderless"
                            style={{
                                background: "#1a1a1a",
                                color: "white",
                                textAlign: "center",
                                borderRadius: "12px",
                                padding: "2rem",
                            }}
                        >
                            <div style={{ marginBottom: "1rem" }}>{step.icon}</div>
                            <Title level={3} style={{ color: "white" }}>
                                {step.title}
                            </Title>
                            <Paragraph style={{ color: "rgba(255,255,255,0.7)" }}>
                                {step.description}
                            </Paragraph>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
