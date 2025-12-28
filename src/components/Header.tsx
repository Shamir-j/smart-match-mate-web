"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Layout, Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';

const { Header: AntHeader } = Layout;

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const menuItems = [
    { label: 'Home', key: '/', href: '/' },
    { label: 'Safety', key: '/safety', href: '/terms-of-service#safety' },
    { label: 'Privacy', key: '/privacy-notice', href: '/privacy-notice' },
    { label: 'Terms', key: '/terms-of-service', href: '/terms-of-service' },
  ];

  // Determine header styles based on state
  const isTransparent = isHomePage && !scrolled;
  const headerBg = isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.95)';
  const textColor = '#333';
  const boxShadow = isTransparent ? 'none' : '0 2px 8px rgba(0,0,0,0.06)';

  return (
    <>
      <AntHeader
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          width: '100%',
          background: headerBg,
          backdropFilter: isTransparent ? 'none' : 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          boxShadow: boxShadow,
          transition: 'all 0.3s ease',
          height: '80px',
        }}
      >
        {/* Logo */}
        <div className="logo" style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#FF3A8A',
              letterSpacing: '-0.5px',
              transition: 'color 0.3s ease'
            }}>
              One Night Stand
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="header-desktop">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              style={{
                color: textColor,
                fontWeight: 500,
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
            >
              {item.label}
            </Link>
          ))}
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{
              background: '#FF3A8A',
              borderColor: '#FF3A8A',
              fontWeight: 'bold',
              boxShadow: '0 4px 14px rgba(255, 58, 138, 0.4)'
            }}
            href="https://play.google.com/store/apps/details?id=com.continuummtechnologies.onenightstand&hl=en"
            target="_blank"
          >
            Download
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="header-mobile-btn">
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: '24px', color: textColor }} />}
            onClick={showDrawer}
          />
        </div>
      </AntHeader>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <span style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#FF3A8A'
          }}>
            One Night Stand
          </span>
        }
        placement="right"
        onClose={onClose}
        open={visible}
        size={280}
        closeIcon={<CloseOutlined style={{ fontSize: '20px' }} />}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={onClose}
              style={{
                color: '#333',
                fontWeight: 500,
                fontSize: '18px',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid #f0f0f0'
              }}
            >
              {item.label}
            </Link>
          ))}
          <Button
            type="primary"
            shape="round"
            size="large"
            block
            style={{
              background: '#FF3A8A',
              borderColor: '#FF3A8A',
              fontWeight: 'bold',
              marginTop: '16px'
            }}
            href="https://play.google.com/store/apps/details?id=com.continuummtechnologies.onenightstand&hl=en"
            target="_blank"
          >
            Download App
          </Button>
        </div>
      </Drawer>
    </>
  );
}
