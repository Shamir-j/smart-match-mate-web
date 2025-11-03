import { Card, Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const features = [
    {
        icon: "🕵️",
        title: "Incognito Mode",
        desc: "Browse profiles discreetly without being seen by others.",
    },
    {
        icon: "🔥",
        title: "Hotspot Boosts",
        desc: "Increase your visibility in popular areas to get more matches.",
    },
    {
        icon: "✅",
        title: "Verified Users",
        desc: "Connect with real people with verified profiles.",
    },
];

export default function Features() {
    return (
        <div
            style={{
                background: "linear-gradient(to bottom, #000000, #1a1a1a)",
                color: "white",
                padding: "4rem 1rem",
                textAlign: "center",
            }}
            id="features"
        >
            <Title level={2} style={{ color: "white", marginBottom: "2rem" }}>
                Features
            </Title>

            <Row gutter={[24, 24]} justify="center">
                {features.map((feature, index) => (
                    <Col xs={24} md={8} key={index}>
                        <Card
                            variant="borderless"
                            style={{
                                background: "#121212",
                                color: "white",
                                borderRadius: "12px",
                                textAlign: "center",
                                padding: "2rem",
                                height: "100%",
                            }}
                        >
                            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                                {feature.icon}
                            </div>
                            <Title
                                level={3}
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {feature.title}
                            </Title>
                            <Paragraph
                                style={{
                                    color: "rgba(255,255,255,0.7)",
                                    fontSize: "1rem",
                                }}
                            >
                                {feature.desc}
                            </Paragraph>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
