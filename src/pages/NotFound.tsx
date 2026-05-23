import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { useLocale } from '@/hooks/useLocale';
import styles from './NotFound.module.css';

export default function NotFound() {
  const { t } = useLocale();

  return (
    <Section>
      <div className={styles.wrap}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>{t('404.title')}</h1>
        <p className={styles.sub}>{t('404.sub')}</p>
        <Button to="/">{t('404.cta')}</Button>
      </div>
    </Section>
  );
}
