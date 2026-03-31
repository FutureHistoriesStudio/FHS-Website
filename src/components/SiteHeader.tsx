import Button from './Button';
import { navLinks } from '../data/siteContent';

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="logo" href="#top" aria-label="FHS home">
          FHS
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href="#contact">Get Involved</Button>
      </div>
    </header>
  );
}

export default SiteHeader;
