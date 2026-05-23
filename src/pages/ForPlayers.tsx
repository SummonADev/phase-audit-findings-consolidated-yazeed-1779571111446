import { Trophy, Users, UserCircle, Star, Bell, BarChart2 } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';
import styles from './AudiencePage.module.css';

const ICONS = [UserCircle, Users, Trophy, Star, BarChart2, Bell];

export default function ForPlayers() {
  const { t } = useLocale();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Pill tone="accent">{t('players.eyebrow')}</Pill>
          <h1 className={styles.title}>{t('players.title')}</h1>
          <p className={styles.sub}>{t('players.sub')}</p>
          <div className={styles.ctaRow}>
            <Button to="/download">{t('nav.download')}</Button>
            <Button to="/pricing" variant="secondary">{t('nav.pricing')}</Button>
          </div>
        </div>
      </section>

      <Section tone="muted">
        <SectionHeader title={t('players.title')} subtitle={t('players.sub')} />
        <div className={styles.grid}>
          {[1,2,3,4,5,6].map((i) => {
            const Icon = ICONS[i - 1];
            return (
              <Card key={i}>
                <Icon color="#22E39A" size={28} className={styles.icon} />
                <h3 className={styles.cardTitle}>{t(`players.f.${i}.title`)}</h3>
                <p className={styles.cardBody}>{t(`players.f.${i}.body`)}</p>
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
