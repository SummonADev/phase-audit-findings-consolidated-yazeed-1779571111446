import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Section.module.css';

type Props = {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'muted' | 'panel';
  id?: string;
};

export default function Section({ children, className, tone = 'default', id }: Props) {
  return (
    <section
      id={id}
      className={clsx(
        styles.section,
        tone === 'muted' && styles.muted,
        tone === 'panel' && styles.panel,
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
