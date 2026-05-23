import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useLocale } from '@/hooks/useLocale';

export default function NotFound() {
  const { t } = useLocale();
  return (
    <Section>
      <SectionHeader title={t('notFound.title')} subtitle={t('notFound.subtitle')} />
      <Button to="/">{t('notFound.cta')}</Button>
    </Section>
  );
}
