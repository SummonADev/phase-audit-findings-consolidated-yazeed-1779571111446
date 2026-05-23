import { Apple, SmartphoneNfc, Mail } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';
import styles from './Download.module.css';

export default function Download() {
  const { t } = useLocale();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Pill tone="accent">{t('download.eyebrow')}</Pill>
          <h1 className={styles.title}>{t('download.title')}</h1>
          <p className={styles.sub}>{t('download.sub')}</p>
          <div className={styles.ctaRow}>
            <Button href="mailto:support@kickoffsa.com">
              <Mail size={16} />
              {t('download.cta')}
            </Button>
          </div>
        </div>
      </section>

      <Section tone="muted">
        <SectionHeader title={t('download.title')} align="center" />
        <div className={styles.grid}>
          <Card>
            <Apple color="#22E39A" size={36} />
            <h3 className={styles.cardTitle}>{t('download.ios.title')}</h3>
            <p className={styles.cardBody}>{t('download.ios.body')}</p>
            <span className={styles.comingSoon}>Coming Soon</span>
          </Card>
          <Card>
            <SmartphoneNfc color="#22E39A" size={36} />
            <h3 className={styles.cardTitle}>{t('download.android.title')}</h3>
            <p className={styles.cardBody}>{t('download.android.body')}</p>
            <span className={styles.comingSoon}>Coming Soon</span>
          </Card>
        </div>
      </Section>

      <Section>
        <div className={styles.emailBox}>
          <Mail size={28} color="#22E39A" />
          <div>
            <h3 className={styles.emailTitle}>{t('contact.support.title')}</h3>
            <p className={styles.emailBody}>{t('download.sub')}</p>
            <a href="mailto:support@kickoffsa.com" className={styles.emailLink}>
              support@kickoffsa.com
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
