import { Trophy, Users, Flag, ShieldCheck, Globe2, KeyRound, Layers, Bell, BarChart2, CreditCard, Smartphone, Zap } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Pill from '@/components/ui/Pill';
import Button from '@/components/ui/Button';
import { useLocale } from '@/hooks/useLocale';
import styles from './Features.module.css';

type FeatureCat = {
  key: string;
  items: { icon: React.ElementType; label: string }[];
};

export default function Features() {
  const { t } = useLocale();

  const cats: FeatureCat[] = [
    {
      key: 'features.cat.tournaments',
      items: [
        { icon: Trophy, label: t('home.how.1.title') },
        { icon: Users, label: t('home.how.2.title') },
        { icon: Layers, label: t('home.how.3.title') },
        { icon: Flag, label: t('home.how.4.title') },
        { icon: Zap, label: t('home.how.5.title') },
      ],
    },
    {
      key: 'features.cat.teams',
      items: [
        { icon: Users, label: t('players.f.2.title') },
        { icon: KeyRound, label: t('players.f.3.title') },
        { icon: Globe2, label: t('home.proof.1') },
      ],
    },
    {
      key: 'features.cat.matches',
      items: [
        { icon: Flag, label: t('referees.f.2.title') },
        { icon: BarChart2, label: t('referees.f.3.title') },
        { icon: ShieldCheck, label: t('organisers.during.5') },
      ],
    },
    {
      key: 'features.cat.accounts',
      items: [
        { icon: Globe2, label: t('home.proof.2') },
        { icon: BarChart2, label: t('players.f.5.title') },
        { icon: Bell, label: t('players.f.6.title') },
      ],
    },
    {
      key: 'features.cat.platform',
      items: [
        { icon: Smartphone, label: t('home.hero.note') },
        { icon: Globe2, label: t('home.proof.1') },
        { icon: CreditCard, label: t('organisers.payments.title') },
      ],
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Pill tone="accent">{t('features.eyebrow')}</Pill>
          <h1 className={styles.title}>{t('features.title')}</h1>
          <p className={styles.sub}>{t('features.sub')}</p>
        </div>
      </section>

      {cats.map((cat) => (
        <Section key={cat.key} tone="muted">
          <SectionHeader title={t(cat.key)} />
          <div className={styles.featGrid}>
            {cat.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx}>
                  <Icon color="#22E39A" size={22} />
                  <p className={styles.featLabel}>{item.label}</p>
                </Card>
              );
            })}
          </div>
        </Section>
      ))}

      <Section>
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
