import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';

export default function Download() {
  const { t } = useLocale();
  return (
    <Section>
      <Pill tone="accent">{t('nav.download')}</Pill>
      <SectionHeader title={t('download.title')} subtitle={t('download.subtitle')} />
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Button href="#">{t('download.ios')}</Button>
        <Button href="#" variant="secondary">{t('download.android')}</Button>
      </div>
    </Section>
  );
}
