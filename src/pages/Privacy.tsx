import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLocale } from '@/hooks/useLocale';

export default function Privacy() {
  const { t } = useLocale();
  return (
    <Section>
      <SectionHeader title={t('privacy.title')} subtitle={t('privacy.subtitle')} />
      <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 720 }}>
        <p>{t('privacy.body')}</p>
      </div>
    </Section>
  );
}
