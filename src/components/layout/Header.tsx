import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import clsx from 'clsx';
import KickoffLogo from '@/components/brand/KickoffLogo';
import { useLocale } from '@/hooks/useLocale';
import styles from './Header.module.css';

type NavLinkDef = { to: string; key: string };

const NAV: NavLinkDef[] = [
  { to: '/for-players', key: 'nav.players' },
  { to: '/for-organisers', key: 'nav.organisers' },
  { to: '/for-referees', key: 'nav.referees' },
  { to: '/features', key: 'nav.features' },
  { to: '/pricing', key: 'nav.pricing' },
];

export default function Header() {
  const { t, toggle } = useLocale();
  const [open, setOpen] = useState<boolean>(false);
  useLocation(); // re-render on route change for active states

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.bar)}>
        <Link to="/" className={styles.logoLink} onClick={() => setOpen(false)}>
          <KickoffLogo size={28} />
          <span className={styles.wordmark}>KICKOFF</span>
          <span className={styles.subwordmark}>SAUDI</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => clsx(styles.navLink, isActive && styles.navLinkActive)}
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.langBtn}
            onClick={toggle}
            aria-label={t('lang.aria')}
          >
            <Globe size={14} aria-hidden="true" />
            <span>{t('lang.toggle')}</span>
          </button>

          <Link to="/download" className={styles.cta}>
            {t('nav.download')}
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setOpen(!open)}
            aria-label={open ? t('nav.close') : t('nav.menu')}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          <div className={clsx('container', styles.mobileInner)}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(styles.mobileLink, isActive && styles.mobileLinkActive)
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className={styles.mobileLink}>
              {t('nav.contact')}
            </Link>
            <Link to="/download" onClick={() => setOpen(false)} className={styles.mobileCta}>
              {t('nav.download')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
