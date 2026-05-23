import { Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';
import styles from './Pricing.module.css';

export default function Pricing() {
  const { t } = useLocale();

  const playerBullets = [1, 2, 3].map((i) => t(`pricing.players.bullet.${i}`));
  const organiserBullets = [1, 2, 3].map((i) => t(`pricing.organisers.bullet.${i}`));

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Pill tone="accent">{t('pricing.eyebrow')}</Pill>
          <h1 className={styles.title}>{t('pricing.title')}</h1>
          <p className={styles.sub}>{t('pricing.sub')}</p>
        </div>
      </section>

      <Section>
        <SectionHeader title={t('pricing.title')} subtitle={t('pricing.sub')} />
        <div className={styles.grid}>
          <Card>
            <div className={styles.planLabel}>{t('pricing.players.title')}</div>
            <div className={styles.price}>{t('pricing.players.price')}</div>
            <p className={styles.planBody}>{t('pricing.players.body')}</p>
            <ul className={styles.bullets}>
              {playerBullets.map((b, i) => (
                <li key={i} className={styles.bullet}>
                  <Check size={15} color="#22E39A" className={styles.checkIcon} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className={styles.planCta}>
              <Button to="/download">{t('nav.download')}</Button>
            </div>
          </Card>

          <Card accent elevated>
            <div className={styles.planLabel}>{t('pricing.organisers.title')}</div>
            <div className={styles.priceAccent}>{t('pricing.organisers.price')}</div>
            <p className={styles.planBody}>{t('pricing.organisers.body')}</p>
            <ul className={styles.bullets}>
              {organiserBullets.map((b, i) => (
                <li key={i} className={styles.bullet}>
                  <Check size={15} color="#22E39A" className={styles.checkIcon} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className={styles.planCta}>
              <Button to="/contact">{t('nav.contact')}</Button>
            </div>
          </Card>
        </div>

        <p className={styles.note}>{t('pricing.note')}</p>
      </Section>

      <Section tone="muted">
        <div className={styles.ctaPanel}>
          <h2 className={styles.ctaTitle}>{t('home.cta.title')}</h2>
          <p className={styles.ctaSub}>{t('home.cta.sub')}</p>
          <div className={styles.ctaRow}>
            <Button to="/download">{t('nav.download')}</Button>
            <Button to="/contact" variant="secondary">{t('nav.contact')}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
