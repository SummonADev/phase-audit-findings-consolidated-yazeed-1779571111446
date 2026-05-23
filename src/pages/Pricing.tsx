import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';

export default function Pricing() {
  const { t } = useLocale();
  return (
    <Section>
      <Pill tone="accent">{t('nav.pricing')}</Pill>
      <SectionHeader title={t('pricing.title')} subtitle={t('pricing.subtitle')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        <Card>
          <h3>{t('pricing.free.title')}</h3>
          <p style={{ fontSize: 32, fontWeight: 800 }}>{t('pricing.free.price')}</p>
          <p style={{ color: 'var(--text-secondary)' }}>{t('pricing.free.body')}</p>
          <Button to="/download" variant="secondary">{t('cta.download')}</Button>
        </Card>
        <Card accent>
          <h3>{t('pricing.pro.title')}</h3>
          <p style={{ fontSize: 32, fontWeight: 800 }}>{t('pricing.pro.price')}</p>
          <p style={{ color: 'var(--text-secondary)' }}>{t('pricing.pro.body')}</p>
          <Button to="/contact">{t('cta.contact')}</Button>
        </Card>
        <Card>
          <h3>{t('pricing.enterprise.title')}</h3>
          <p style={{ fontSize: 32, fontWeight: 800 }}>{t('pricing.enterprise.price')}</p>
          <p style={{ color: 'var(--text-secondary)' }}>{t('pricing.enterprise.body')}</p>
          <Button to="/contact" variant="secondary">{t('cta.contact')}</Button>
        </Card>
      </div>
    </Section>
  );
}
