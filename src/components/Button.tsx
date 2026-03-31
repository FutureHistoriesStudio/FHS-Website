import { type AnchorHTMLAttributes, type ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <a className={`btn btn-${variant}`} {...props}>
      {children}
    </a>
  );
}

export default Button;
