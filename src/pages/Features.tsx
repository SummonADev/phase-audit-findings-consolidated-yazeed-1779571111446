import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';

export default function Features() {
  const { t } = useLocale();
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <Section>
      <Pill tone="accent">{t('nav.features')}</Pill>
      <SectionHeader title={t('features.title')} subtitle={t('features.subtitle')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        {items.map((i) => (
          <Card key={i}>
            <h3>{t(`features.item${i}.title`)}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t(`features.item${i}.body`)}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
