import Section from '@/components/ui/Section';
import Pill from '@/components/ui/Pill';
import { useLocale } from '@/hooks/useLocale';
import styles from './LegalPage.module.css';

export default function Terms() {
  const { t } = useLocale();

  return (
    <Section>
      <div className={styles.legalWrap}>
        <Pill tone="accent">{t('terms.eyebrow')}</Pill>
        <h1 className={styles.title}>{t('terms.title')}</h1>
        <p className={styles.updated}>{t('terms.updated')}</p>

        <div className={styles.body}>
          <h2>1. Acceptance</h2>
          <p>By downloading or using Kickoff you agree to these Terms of Service. If you do not agree, do not use the app.</p>

          <h2>2. Eligibility</h2>
          <p>You must be at least 13 years old to use Kickoff. By creating an account you confirm you meet this requirement.</p>

          <h2>3. Accounts</h2>
          <p>You are responsible for maintaining the security of your account credentials. Kickoff is not liable for losses caused by unauthorised access resulting from your failure to keep credentials secure.</p>

          <h2>4. User conduct</h2>
          <ul>
            <li>Do not impersonate another person or entity.</li>
            <li>Do not use Kickoff for any unlawful purpose.</li>
            <li>Do not attempt to reverse-engineer or disrupt the platform.</li>
            <li>Do not post content that is defamatory, harassing, or obscene.</li>
          </ul>

          <h2>5. Tournaments and entry fees</h2>
          <p>Entry fees are set by tournament organisers and processed by Moyasar. Kickoff is not the merchant of record and is not responsible for refund disputes between players and organisers. Refund attempts are initiated automatically on tournament cancellation, but Kickoff does not guarantee their success.</p>

          <h2>6. Intellectual property</h2>
          <p>All Kickoff branding, code, and content are owned by Kickoff Technologies. User-generated content (team names, profile photos) remains owned by the user; by submitting it you grant Kickoff a non-exclusive licence to display it within the platform.</p>

          <h2>7. Disclaimers</h2>
          <p>Kickoff is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service.</p>

          <h2>8. Limitation of liability</h2>
          <p>To the maximum extent permitted by Saudi law, Kickoff Technologies shall not be liable for indirect, incidental, or consequential damages arising from your use of the platform.</p>

          <h2>9. Governing law</h2>
          <p>These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Riyadh.</p>

          <h2>10. Changes to these terms</h2>
          <p>We may update these terms at any time. Continued use of Kickoff after changes are posted constitutes acceptance.</p>

          <h2>11. Contact</h2>
          <p>Kickoff Technologies · support@kickoffsa.com · Kingdom of Saudi Arabia.</p>
        </div>
      </div>
    </Section>
  );
}
