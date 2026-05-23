import { Flag, ShieldCheck, ClipboardCheck, Award } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';

export default function ForReferees() {
  const { t } = useLocale();
  return (
    <Section>
      <Pill tone="accent">{t('nav.referees')}</Pill>
      <SectionHeader title={t('referees.title')} subtitle={t('referees.subtitle')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        <Card>
          <Flag color="#22E39A" />
          <h3>{t('referees.feat1.title')}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('referees.feat1.body')}</p>
        </Card>
        <Card>
          <ClipboardCheck color="#22E39A" />
          <h3>{t('referees.feat2.title')}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('referees.feat2.body')}</p>
        </Card>
        <Card>
          <ShieldCheck color="#22E39A" />
          <h3>{t('referees.feat3.title')}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('referees.feat3.body')}</p>
        </Card>
        <Card>
          <Award color="#22E39A" />
          <h3>{t('referees.feat4.title')}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('referees.feat4.body')}</p>
        </Card>
      </div>
      <div style={{ marginTop: 40 }}>
        <Button to="/contact">{t('cta.contact')}</Button>
      </div>
    </Section>
  );
}
