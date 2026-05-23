import { ClipboardList, Users, CalendarDays, Gavel, CreditCard, Zap } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';
import styles from './AudiencePage.module.css';

export default function ForOrganisers() {
  const { t } = useLocale();

  const steps = [1, 2, 3];
  const duringItems = [1, 2, 3, 4, 5, 6];
  const duringIcons = [Users, CalendarDays, Zap, ClipboardList, Gavel, Zap];

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Pill tone="accent">{t('organisers.eyebrow')}</Pill>
          <h1 className={styles.title}>{t('organisers.title')}</h1>
          <p className={styles.sub}>{t('organisers.sub')}</p>
          <div className={styles.ctaRow}>
            <Button to="/contact">{t('nav.contact')}</Button>
            <Button to="/pricing" variant="secondary">{t('nav.pricing')}</Button>
          </div>
        </div>
      </section>

      <Section tone="muted">
        <SectionHeader title={t('organisers.title')} subtitle={t('organisers.sub')} />
        <div className={styles.stepsGrid}>
          {steps.map((i) => (
            <Card key={i} accent={i === 1}>
              <div className={styles.stepNum}>0{i}</div>
              <h3 className={styles.cardTitle}>{t(`organisers.step.${i}.title`)}</h3>
              <p className={styles.cardBody}>{t(`organisers.step.${i}.body`)}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title={t('organisers.during.title')} />
        <div className={styles.grid}>
          {duringItems.map((i) => {
            const Icon = duringIcons[i - 1];
            return (
              <Card key={i}>
                <Icon color="#22E39A" size={24} className={styles.icon} />
                <p className={styles.cardBody}>{t(`organisers.during.${i}`)}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section tone="muted">
        <div className={styles.paymentsBox}>
          <CreditCard color="#22E39A" size={32} />
          <div>
            <h3 className={styles.cardTitle}>{t('organisers.payments.title')}</h3>
            <p className={styles.cardBody}>{t('organisers.payments.body')}</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.ctaPanel}>
          <h2 className={styles.ctaPanelTitle}>{t('home.cta.title')}</h2>
          <p className={styles.ctaPanelSub}>{t('home.cta.sub')}</p>
          <div className={styles.ctaRow}>
            <Button to="/contact">{t('nav.contact')}</Button>
            <Button to="/download" variant="secondary">{t('nav.download')}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
