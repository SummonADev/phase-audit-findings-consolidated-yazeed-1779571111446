import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';

export default function Contact() {
  const { t } = useLocale();
  return (
    <Section>
      <Pill tone="accent">{t('nav.contact')}</Pill>
      <SectionHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />
      <Card>
        <p style={{ color: 'var(--text-secondary)' }}>{t('contact.body')}</p>
        <p>
          <a href="mailto:support@kickoffsa.com" style={{ color: 'var(--accent)' }}>
            support@kickoffsa.com
          </a>
        </p>
      </Card>
    </Section>
  );
}
