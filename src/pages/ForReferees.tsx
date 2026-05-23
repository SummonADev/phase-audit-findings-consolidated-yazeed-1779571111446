import { CalendarClock, ClipboardCheck, Activity } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';
import styles from './AudiencePage.module.css';

const ICONS = [CalendarClock, ClipboardCheck, Activity];

export default function ForReferees() {
  const { t } = useLocale();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Pill tone="accent">{t('referees.eyebrow')}</Pill>
          <h1 className={styles.title}>{t('referees.title')}</h1>
          <p className={styles.sub}>{t('referees.sub')}</p>
          <div className={styles.ctaRow}>
            <Button to="/download">{t('nav.download')}</Button>
          </div>
        </div>
      </section>

      <Section tone="muted">
        <SectionHeader title={t('referees.title')} subtitle={t('referees.sub')} />
        <div className={styles.stepsGrid}>
          {[1, 2, 3].map((i) => {
            const Icon = ICONS[i - 1];
            return (
              <Card key={i}>
                <Icon color="#22E39A" size={28} className={styles.icon} />
                <h3 className={styles.cardTitle}>{t(`referees.f.${i}.title`)}</h3>
                <p className={styles.cardBody}>{t(`referees.f.${i}.body`)}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className={styles.ctaPanel}>
          <h2 className={styles.ctaPanelTitle}>{t('home.cta.title')}</h2>
          <p className={styles.ctaPanelSub}>{t('home.cta.sub')}</p>
          <div className={styles.ctaRow}>
            <Button to="/download">{t('nav.download')}</Button>
            <Button to="/contact" variant="secondary">{t('nav.contact')}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
