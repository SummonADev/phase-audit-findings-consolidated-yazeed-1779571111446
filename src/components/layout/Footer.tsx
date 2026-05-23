import { Link } from 'react-router-dom';
import KickoffLogo from '@/components/brand/KickoffLogo';
import { useLocale } from '@/hooks/useLocale';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <KickoffLogo size={32} />
              <div>
                <div className={styles.wordmark}>KICKOFF</div>
                <div className={styles.sub}>SAUDI</div>
              </div>
            </div>
            <p className={styles.tagline}>{t('footer.tagline')}</p>
            <p className={styles.riyadh}>{t('footer.riyadh')}</p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.product')}</h4>
            <Link to="/for-players" className={styles.link}>{t('nav.players')}</Link>
            <Link to="/for-organisers" className={styles.link}>{t('nav.organisers')}</Link>
            <Link to="/for-referees" className={styles.link}>{t('nav.referees')}</Link>
            <Link to="/features" className={styles.link}>{t('nav.features')}</Link>
            <Link to="/pricing" className={styles.link}>{t('nav.pricing')}</Link>
            <Link to="/download" className={styles.link}>{t('nav.download')}</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.legal')}</h4>
            <Link to="/privacy" className={styles.link}>{t('footer.privacy')}</Link>
            <Link to="/terms" className={styles.link}>{t('footer.terms')}</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.contactCol')}</h4>
            <a href="mailto:support@kickoffsa.com" className={styles.link}>{t('footer.support')}</a>
            <Link to="/contact" className={styles.link}>{t('nav.contact')}</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {year} {t('footer.company')}. {t('footer.rights')}
          </span>
          <span className={styles.domain}>kickoffsa.com</span>
        </div>
      </div>
    </footer>
  );
}
