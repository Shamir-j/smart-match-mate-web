import { Button, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function HeroSection() {
    return (
        <Layout
            style={{
                background: "linear-gradient(to bottom, black, #FF3A8A, black)",
                color: "white",
                textAlign: "center",
                padding: "8rem 1rem",
            }}
        >
            <Content role="banner">
                <Title
                    level={1}
                    style={{
                        fontWeight: "bold",
                        color: "white",
                        maxWidth: "48rem",
                        margin: "0 auto",
                    }}
                >
                    Meet new people. Make real connections.
                </Title>

                <Paragraph
                    style={{
                        marginTop: "1rem",
                        fontSize: "1.25rem",
                        color: "rgba(255,255,255,1.9)",
                        maxWidth: "32rem",
                        marginInline: "auto",
                    }}
                >
                    Connect with like-minded singles in your area. Swipe, match, and start conversations today.
                </Paragraph>

                <div
                    style={{
                        marginTop: "2rem",
                        maxWidth: "20rem",
                        marginInline: "auto",
                    }}
                >
                    <a
                        href="https://play.google.com/store/apps/details?id=com.quantum.times.technologies.onenightstand&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                    >
                        <Button
                            type="default"
                            size="large"
                            block
                            aria-label="Download app from Play Store"
                            style={{
                                color: "#000000",
                                borderColor: "#FF3A8A",
                                backgroundColor: "white",
                                fontWeight: "bold",
                            }}
                        >
                            Download on Play Store
                        </Button>
                    </a>
                </div>
            </Content>
        </Layout>
    );
}
