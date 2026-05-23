import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

type Props = {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
  accent?: boolean;
};

export default function Card({ children, className, elevated, accent }: Props) {
  return (
    <div
      className={clsx(
        styles.card,
        elevated && styles.elevated,
        accent && styles.accent,
        className
      )}
    >
      {children}
    </div>
  );
}
