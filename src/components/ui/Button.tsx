import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.css';

type CommonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

type LinkProps = CommonProps & {
  to: string;
  href?: never;
  onClick?: never;
};

type AnchorProps = CommonProps & {
  href: string;
  to?: never;
  onClick?: never;
};

type ButtonProps = CommonProps & {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: never;
  href?: never;
};

type Props = LinkProps | AnchorProps | ButtonProps;

export default function Button(props: Props) {
  const { children, variant = 'primary', className } = props;
  const cls = clsx(styles.btn, variant === 'primary' ? styles.primary : styles.secondary, className);

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={cls}>
        {children}
      </a>
    );
  }

  const onClick = 'onClick' in props ? props.onClick : undefined;
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
