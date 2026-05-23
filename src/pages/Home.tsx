import { ArrowRight, Trophy, Users, UserCog, Flag, ShieldCheck, Globe2, KeyRound, Layers } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';
import styles from './Home.module.css';

export default function Home() {
  const { t } = useLocale();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <Pill tone="accent">{t('home.pill')}</Pill>
            <h1 className={styles.title}>
              {t('home.title1')} <span className={styles.accent}>{t('home.titleAccent')}</span> {t('home.title2')}
            </h1>
            <p className={styles.lede}>{t('home.lede')}</p>
            <div className={styles.ctaRow}>
              <Button to="/download">
                {t('cta.download')} <ArrowRight size={18} />
              </Button>
              <Button to="/features" variant="secondary">
                {t('cta.explore')}
              </Button>
            </div>

            <div className={styles.stats}>
              <div>
                <div className={styles.statNum}>10K+</div>
                <div className={styles.statLabel}>{t('home.stat.players')}</div>
              </div>
              <div>
                <div className={styles.statNum}>500+</div>
                <div className={styles.statLabel}>{t('home.stat.tournaments')}</div>
              </div>
              <div>
                <div className={styles.statNum}>50+</div>
                <div className={styles.statLabel}>{t('home.stat.cities')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="muted">
        <SectionHeader title={t('home.audience.title')} subtitle={t('home.audience.subtitle')} />
        <div className={styles.audienceGrid}>
          <Card>
            <Trophy className={styles.audienceIcon} />
            <h3 className={styles.featTitle}>{t('home.audience.players.title')}</h3>
            <p className={styles.featBody}>{t('home.audience.players.body')}</p>
          </Card>
          <Card>
            <UserCog className={styles.audienceIcon} />
            <h3 className={styles.featTitle}>{t('home.audience.organisers.title')}</h3>
            <p className={styles.featBody}>{t('home.audience.organisers.body')}</p>
          </Card>
          <Card>
            <Flag className={styles.audienceIcon} />
            <h3 className={styles.featTitle}>{t('home.audience.referees.title')}</h3>
            <p className={styles.featBody}>{t('home.audience.referees.body')}</p>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeader title={t('home.features.title')} subtitle={t('home.features.subtitle')} />
        <div className={styles.featGrid}>
          <Card>
            <Users color="#22E39A" />
            <h3 className={styles.featTitle}>{t('home.features.f1.title')}</h3>
            <p className={styles.featBody}>{t('home.features.f1.body')}</p>
          </Card>
          <Card>
            <Layers color="#22E39A" />
            <h3 className={styles.featTitle}>{t('home.features.f2.title')}</h3>
            <p className={styles.featBody}>{t('home.features.f2.body')}</p>
          </Card>
          <Card>
            <ShieldCheck color="#22E39A" />
            <h3 className={styles.featTitle}>{t('home.features.f3.title')}</h3>
            <p className={styles.featBody}>{t('home.features.f3.body')}</p>
          </Card>
          <Card>
            <Globe2 color="#22E39A" />
            <h3 className={styles.featTitle}>{t('home.features.f4.title')}</h3>
            <p className={styles.featBody}>{t('home.features.f4.body')}</p>
          </Card>
          <Card>
            <KeyRound color="#22E39A" />
            <h3 className={styles.featTitle}>{t('home.features.f5.title')}</h3>
            <p className={styles.featBody}>{t('home.features.f5.body')}</p>
          </Card>
          <Card>
            <Trophy color="#22E39A" />
            <h3 className={styles.featTitle}>{t('home.features.f6.title')}</h3>
            <p className={styles.featBody}>{t('home.features.f6.body')}</p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className={styles.ctaPanel}>
          <h2 className={styles.ctaPanelTitle}>{t('home.cta.title')}</h2>
          <p className={styles.ctaPanelSub}>{t('home.cta.subtitle')}</p>
          <div className={styles.ctaRow}>
            <Button to="/download">{t('cta.download')}</Button>
            <Button to="/contact" variant="secondary">{t('cta.contact')}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
