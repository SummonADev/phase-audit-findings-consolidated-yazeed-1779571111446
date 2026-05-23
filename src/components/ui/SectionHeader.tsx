import styles from './SectionHeader.module.css';

type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: 'start' | 'center';
};

export default function SectionHeader({ eyebrow, title, sub, align = 'start' }: Props) {
  return (
    <div className={styles.wrap} data-align={align}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {sub ? <p className={styles.sub}>{sub}</p> : null}
    </div>
  );
}
