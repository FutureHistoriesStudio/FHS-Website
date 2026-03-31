import { type ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
};

function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        {(eyebrow || title) && (
          <header className="section-header">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
