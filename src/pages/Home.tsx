import { ArrowRight, Trophy, Users, UserCog, Whistle, ShieldCheck, Globe2, KeyRound, Layers } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import KickoffLogo from '@/components/brand/KickoffLogo';
import { useLocale } from '@/hooks/useLocale';
import styles from './Home.module.css';

export default function Home() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <span className={`eyebrow ${styles.heroEyebrow}`}>{t('home.hero.eyebrow')}</span>
          <h1 className={styles.heroTitle}>{t('home.hero.title')}</h1>
          <p className={styles.heroSub}>{t('home.hero.sub')}</p>
          <div className={styles.heroActions}>
            <Button to="/download">
              {t('home.hero.cta.primary')}
              <ArrowRight size={18} />
            </Button>
            <Button to="/for-organisers" variant="secondary">
              {t('home.hero.cta.secondary')}
            </Button>
          </div>
          <p className={styles.heroNote}>{t('home.hero.note')}</p>

          {/* Decorative bracket card */}
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.bracketCard}>
              <div className={styles.bracketHeader}>
                <KickoffLogo size={20} />
                <span className={styles.bracketTitle}>RIYADH 8s · GROUP A</span>
                <span className={styles.bracketBadge}>LIVE</span>
              </div>
              <div className={styles.standings}>
                <div className={styles.row}>
                  <span className={styles.rank}>1</span>
                  <span className={styles.team}>Al-Najma FC</span>
                  <span className={styles.score}>9</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.rank}>2</span>
                  <span className={styles.team}>Diriyah Stars</span>
                  <span className={styles.score}>6</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.rank}>3</span>
                  <span className={styles.team}>Olaya United</span>
                  <span className={styles.score}>3</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.rank}>4</span>
                  <span className={styles.team}>Qasr Khalid</span>
                  <span className={styles.score}>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-feature strip */}
      <Section>
        <SectionHeader title={t('home.strip.title')} align="center" />
        <div className={styles.stripGrid}>
          {[1, 2, 3].map((n) => (
            <Card key={n}>
              <div className={styles.stripNumber}>0{n}</div>
              <h3 className={styles.stripTitle}>{t(`home.strip.${n}.title`)}</h3>
              <p className={styles.stripBody}>{t(`home.strip.${n}.body`)}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Roles */}
      <Section tone="muted">
        <SectionHeader
          eyebrow="ROLES"
          title={t('home.roles.title')}
          sub={t('home.roles.sub')}
        />
        <div className={styles.rolesGrid}>
          <Card>
            <div className={styles.roleIcon}><Users size={22} /></div>
            <h3 className={styles.roleTitle}>{t('home.roles.player.title')}</h3>
            <p className={styles.roleBody}>{t('home.roles.player.body')}</p>
            <Button to="/for-players" variant="secondary">{t('home.roles.player.cta')}</Button>
          </Card>
          <Card>
            <div className={styles.roleIcon}><UserCog size={22} /></div>
            <h3 className={styles.roleTitle}>{t('home.roles.organiser.title')}</h3>
            <p className={styles.roleBody}>{t('home.roles.organiser.body')}</p>
            <Button to="/for-organisers" variant="secondary">{t('home.roles.organiser.cta')}</Button>
          </Card>
          <Card>
            <div className={styles.roleIcon}><Whistle size={22} /></div>
            <h3 className={styles.roleTitle}>{t('home.roles.referee.title')}</h3>
            <p className={styles.roleBody}>{t('home.roles.referee.body')}</p>
            <Button to="/for-referees" variant="secondary">{t('home.roles.referee.cta')}</Button>
          </Card>
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          eyebrow="HOW IT WORKS"
          title={t('home.how.title')}
          sub={t('home.how.sub')}
        />
        <div className={styles.howList}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className={styles.howRow}>
              <div className={styles.howNumber}>{String(n).padStart(2, '0')}</div>
              <div>
                <h3 className={styles.howTitle}>{t(`home.how.${n}.title`)}</h3>
                <p className={styles.howBody}>{t(`home.how.${n}.body`)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Proof points */}
      <Section tone="muted">
        <SectionHeader
          eyebrow="WHY KICKOFF"
          title={t('home.proof.title')}
          align="center"
        />
        <div className={styles.proofGrid}>
          <Card>
            <Globe2 size={20} className={styles.proofIcon} />
            <p>{t('home.proof.1')}</p>
          </Card>
          <Card>
            <KeyRound size={20} className={styles.proofIcon} />
            <p>{t('home.proof.2')}</p>
          </Card>
          <Card>
            <Layers size={20} className={styles.proofIcon} />
            <p>{t('home.proof.3')}</p>
          </Card>
          <Card>
            <ShieldCheck size={20} className={styles.proofIcon} />
            <p>{t('home.proof.4')}</p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Card accent className={styles.bigCta}>
          <Trophy size={32} className={styles.bigCtaIcon} />
          <h2 className={styles.bigCtaTitle}>{t('home.cta.title')}</h2>
          <p className={styles.bigCtaSub}>{t('home.cta.sub')}</p>
          <Button to="/download">{t('home.cta.button')}<ArrowRight size={18} /></Button>
        </Card>
      </Section>
    </>
  );
}
