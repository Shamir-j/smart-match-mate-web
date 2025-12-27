"use client";

import { Form, Input, Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";


export default function Waitlist() {
    const onFinish = (values: { email: string }) => {
        console.log("Waitlist signup:", values.email);

        // Track the waitlist signup
        if (globalThis.window !== undefined && (globalThis.window as any).gtag) {
            (globalThis.window as any).gtag('event', 'waitlist_signup', {
                event_category: 'conversion',
                event_label: 'iOS Waitlist',
                value: 1
            });
        }

        // TODO: Hook up API call here
        // Example API call:
        // fetch('/api/waitlist', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: values.email })
        // });
    };

    return (
        <div
            style={{
                background: "linear-gradient(to bottom, #1a1a1a, #000000)",
                color: "white",
                padding: "4rem 1rem",
                textAlign: "center",
            }}
            id="waitlist"
        >
            <Title level={2} style={{ color: "white", marginBottom: "1rem" }}>
                Join our iOS waitlist
            </Title>
            <Paragraph style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2rem" }}>
                Be the first to know when our iOS app launches.
            </Paragraph>

            <Form
                name="waitlist"
                layout="inline"
                onFinish={onFinish}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                }}
            >
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Please enter a valid email" },
                    ]}
                >
                    <Input
                        placeholder="Enter your email"
                        style={{
                            borderRadius: "9999px",
                            padding: "0.75rem 1rem",
                            width: "20rem",
                        }}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        type="primary"
                        size="large"
                        style={{
                            background: "#FF3A8A",
                            borderColor: "#FF3A8A",
                            borderRadius: "9999px",
                        }}
                    >
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
