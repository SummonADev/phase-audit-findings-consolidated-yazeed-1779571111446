import { Layers, ShieldCheck, KeyRound, Users } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';

export default function ForOrganisers() {
  const { t } = useLocale();
  return (
    <Section>
      <Pill tone="accent">{t('nav.organisers')}</Pill>
      <SectionHeader title={t('organisers.title')} subtitle={t('organisers.subtitle')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        <Card>
          <Layers color="#22E39A" />
          <h3>{t('organisers.feat1.title')}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('organisers.feat1.body')}</p>
        </Card>
        <Card>
          <Users color="#22E39A" />
          <h3>{t('organisers.feat2.title')}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('organisers.feat2.body')}</p>
        </Card>
        <Card>
          <ShieldCheck color="#22E39A" />
          <h3>{t('organisers.feat3.title')}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('organisers.feat3.body')}</p>
        </Card>
        <Card>
          <KeyRound color="#22E39A" />
          <h3>{t('organisers.feat4.title')}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('organisers.feat4.body')}</p>
        </Card>
      </div>
      <div style={{ marginTop: 40 }}>
        <Button to="/contact">{t('cta.contact')}</Button>
      </div>
    </Section>
  );
}
