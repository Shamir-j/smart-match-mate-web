import { Card, Col, Row } from "antd";
import { HeartOutlined, MessageOutlined, SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";


export default function HowItWorks() {
    const steps = [
        {
            icon: <UserAddOutlined style={{ fontSize: 32, color: "#FF3A8A" }} />,
            title: "Create Profile",
            description: "Add photos and your interests to let others know the real you.",
        },
        {
            icon: <SearchOutlined style={{ fontSize: 32, color: "#FF3A8A" }} />,
            title: "Discover Matches",
            description: "Browse profiles of real singles nearby and find your match.",
        },
        {
            icon: <MessageOutlined style={{ fontSize: 32, color: "#FF3A8A" }} />,
            title: "Chat Safely",
            description: "Start a conversation and get to know each other inside the app.",
        },
        {
            icon: <HeartOutlined style={{ fontSize: 32, color: "#FF3A8A" }} />,
            title: "Meet Responsibly",
            description: "Take things offline when you're ready and meet safely.",
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
