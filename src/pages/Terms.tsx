import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLocale } from '@/hooks/useLocale';

export default function Terms() {
  const { t } = useLocale();
  return (
    <Section>
      <SectionHeader title={t('terms.title')} subtitle={t('terms.subtitle')} />
      <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 720 }}>
        <p>{t('terms.body')}</p>
      </div>
    </Section>
  );
}
