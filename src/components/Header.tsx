"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';

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

  const toggleDrawer = () => setVisible(!visible);
  const closeDrawer = () => setVisible(false);

  const menuItems = [
    { label: 'Home', key: '/', href: '/' },
    { label: 'Safety', key: '/safety', href: '/legal/child-safety' },
    { label: 'Privacy', key: '/privacy-notice', href: '/legal/privacy-notice' },
    { label: 'Terms', key: '/terms-of-service', href: '/legal/terms-of-service' },
  ];

  const isTransparent = isHomePage && !scrolled;
  const headerClass = isTransparent ? `${styles.header} ${styles.headerTransparent}` : `${styles.header} ${styles.headerSolid}`;
  const textColor = isTransparent ? 'white' : '#333'; // Make text white on home top to match Hero, wait Hero text is white but original header bg was transparent and text was #333? Original said textColor = '#333' always. So we keep it or adapt. Original code had `const textColor = '#333';` directly.

  return (
    <>
      <header className={headerClass}>
        <div style={{ zIndex: 1001 }}>
          <Link href="/" className={styles.logoText}>
            One Night Stand
          </Link>
        </div>

        <nav className={styles.navDesktop}>
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={styles.navLink}
              style={{ color: '#333' }}
            >
              {item.label}
            </Link>
          ))}
          <a href="https://play.google.com/store/apps/details?id=com.quantum.times.technologies.onenightstand&hl=en" target="_blank" rel="noreferrer">
            <button className={styles.primaryBtn}>
              Download
            </button>
          </a>
        </nav>

        <button className={styles.mobileMenuBtn} onClick={toggleDrawer}>
          <Menu size={28} color="#333" />
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.drawerOverlay} ${visible ? styles.drawerOverlayOpen : ''}`} onClick={closeDrawer} />
      <div className={`${styles.drawer} ${visible ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>One Night Stand</span>
          <button className={styles.drawerCloseBtn} onClick={closeDrawer}>
            <X size={24} />
          </button>
        </div>
        <div className={styles.drawerContent}>
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={closeDrawer}
              className={styles.drawerLink}
            >
              {item.label}
            </Link>
          ))}
          <a href="https://play.google.com/store/apps/details?id=com.quantum.times.technologies.onenightstand&hl=en" target="_blank" rel="noreferrer" style={{ marginTop: '16px' }}>
            <button className={styles.primaryBtn} style={{ width: '100%' }}>
              Download App
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
