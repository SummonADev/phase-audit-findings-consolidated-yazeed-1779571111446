import { ReactNode } from 'react';
import styles from './Pill.module.css';

type Props = {
  children: ReactNode;
  tone?: 'default' | 'accent';
};

export default function Pill({ children, tone = 'default' }: Props) {
  return <span className={tone === 'accent' ? styles.accent : styles.pill}>{children}</span>;
}
