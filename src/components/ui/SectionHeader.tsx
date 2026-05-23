import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './SectionHeader.module.css';

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({ title, subtitle, eyebrow, align = 'left', className }: Props) {
  return (
    <div className={clsx(styles.header, align === 'center' && styles.center, className)}>
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
