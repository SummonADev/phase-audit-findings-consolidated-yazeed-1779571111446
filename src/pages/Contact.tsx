import { Mail, Scale } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLocale();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Pill tone="accent">{t('contact.eyebrow')}</Pill>
          <h1 className={styles.title}>{t('contact.title')}</h1>
          <p className={styles.sub}>{t('contact.sub')}</p>
        </div>
      </section>

      <Section>
        <SectionHeader title={t('contact.title')} subtitle={t('contact.sub')} />
        <div className={styles.grid}>
          <Card elevated>
            <Mail color="#22E39A" size={28} />
            <h3 className={styles.cardTitle}>{t('contact.support.title')}</h3>
            <p className={styles.cardBody}>{t('contact.support.body')}</p>
            <a href="mailto:support@kickoffsa.com" className={styles.emailLink}>
              {t('contact.support.cta')}
            </a>
          </Card>

          <Card>
            <Scale color="#22E39A" size={28} />
            <h3 className={styles.cardTitle}>{t('contact.legal.title')}</h3>
            <p className={styles.cardBody}>{t('contact.legal.body')}</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
