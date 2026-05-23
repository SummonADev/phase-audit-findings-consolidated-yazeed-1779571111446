import Section from '@/components/ui/Section';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';
import styles from './LegalPage.module.css';

export default function Privacy() {
  const { t } = useLocale();

  return (
    <Section>
      <div className={styles.legalWrap}>
        <Pill tone="accent">{t('privacy.eyebrow')}</Pill>
        <h1 className={styles.title}>{t('privacy.title')}</h1>
        <p className={styles.updated}>{t('privacy.updated')}</p>

        <div className={styles.body}>
          <h2>1. Who we are</h2>
          <p>Kickoff Technologies operates the Kickoff mobile application and website at kickoffsa.com. Our registered jurisdiction is the Kingdom of Saudi Arabia, courts of Riyadh.</p>

          <h2>2. Information we collect</h2>
          <p>When you create an account we collect: your name, email address, date of birth, city, profile photo, and in-app activity (teams, tournaments, match statistics). We do not sell personal data to third parties.</p>

          <h2>3. How we use your information</h2>
          <ul>
            <li>To operate and improve the Kickoff platform.</li>
            <li>To send push notifications you have opted into (match reminders, invites, results).</li>
            <li>To process entry-fee payments via Moyasar on behalf of tournament organisers.</li>
            <li>To resolve disputes and enforce our Terms of Service.</li>
          </ul>

          <h2>4. Third-party services</h2>
          <p>We use Apple and Google sign-in for authentication. Entry-fee payments are handled by Moyasar (Saudi Payment); their privacy policy applies to payment data. Push notifications are delivered via Apple APNs and Google FCM.</p>

          <h2>5. Data retention</h2>
          <p>We retain your account data for as long as your account is active. You may request deletion by emailing support@kickoffsa.com. We will action the request within 30 days, subject to any legal obligations.</p>

          <h2>6. Security</h2>
          <p>All data is transmitted over HTTPS. Passwords are hashed and never stored in plaintext. We perform regular security reviews.</p>

          <h2>7. Children</h2>
          <p>Kickoff is not directed at children under 13. If you believe a child has created an account, contact us and we will delete it promptly.</p>

          <h2>8. Your rights</h2>
          <p>You have the right to access, correct, or delete your personal data at any time. Contact support@kickoffsa.com to exercise these rights.</p>

          <h2>9. Changes to this policy</h2>
          <p>We will notify registered users by push notification or email before any material changes take effect.</p>

          <h2>10. Contact</h2>
          <p>Kickoff Technologies · support@kickoffsa.com · Kingdom of Saudi Arabia.</p>
        </div>
      </div>
    </Section>
  );
}
