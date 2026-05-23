import { Trophy, Users, Calendar, MapPin } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';

export default function ForPlayers() {
  const { t } = useLocale();
  return (
    <>
      <Section>
        <Pill tone="accent">{t('nav.players')}</Pill>
        <SectionHeader
          title={t('players.title')}
          subtitle={t('players.subtitle')}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          <Card>
            <Trophy color="#22E39A" />
            <h3>{t('players.feat1.title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('players.feat1.body')}</p>
          </Card>
          <Card>
            <Users color="#22E39A" />
            <h3>{t('players.feat2.title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('players.feat2.body')}</p>
          </Card>
          <Card>
            <Calendar color="#22E39A" />
            <h3>{t('players.feat3.title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('players.feat3.body')}</p>
          </Card>
          <Card>
            <MapPin color="#22E39A" />
            <h3>{t('players.feat4.title')}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('players.feat4.body')}</p>
          </Card>
        </div>
        <div style={{ marginTop: 40 }}>
          <Button to="/download">{t('cta.download')}</Button>
        </div>
      </Section>
    </>
  );
}
