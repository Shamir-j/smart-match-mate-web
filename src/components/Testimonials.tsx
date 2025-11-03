import { Avatar, Card, Col, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const testimonials = [
    {
        name: "Alex R.",
        date: "2023-09-15",
        text: "This app is a game-changer! I’ve met so many interesting people for casual fun. Highly recommend!!",
    },
    {
        name: "Jordan S.",
        date: "2023-08-22",
        text: "Great app for meeting new people. The interface is clean and easy to use.",
    },
    {
        name: "Taylor M.",
        date: "2023-07-10",
        text: "I love the verified users feature. It makes me feel safer knowing I’m connecting with real people.",
    },
];

export default function Testimonials() {
    return (
        <div
            style={{
                background: "linear-gradient(to bottom, #1a1a1a, #000000)",
                color: "white",
                padding: "4rem 1rem",
                textAlign: "center",
            }}
            id="testimonials"
        >
            <Title level={2} style={{ color: "white", marginBottom: "2rem" }}>
                What People Are Saying
            </Title>

            <Row gutter={[24, 24]} justify="center">
                {testimonials.map((t, index) => (
                    <Col xs={24} md={8} key={index}>
                        <Card
                            variant="borderless"
                            style={{
                                background: "#121212",
                                color: "white",
                                borderRadius: "12px",
                                textAlign: "left",
                                padding: "1.5rem",
                                height: "100%",
                            }}
                        >
                            <Paragraph
                                italic
                                style={{
                                    color: "rgba(255,255,255,0.8)",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                &#34;{t.text}&#34;
                            </Paragraph>

                            <Space align="center">
                                <Avatar
                                    style={{
                                        backgroundColor: "#FF3A8A", // your brand pink
                                        verticalAlign: "middle",
                                    }}
                                >
                                    {t.name.charAt(0)}
                                </Avatar>
                                <div>
                                    <div
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.25rem",
                                        }}
                                    >
                                        {t.name}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "rgba(255,255,255,0.5)",
                                        }}
                                    >
                                        {t.date}
                                    </div>
                                </div>
                            </Space>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
