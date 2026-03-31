import { useEffect, useState } from 'react';
import { ElevenLabsChatbot } from './components/ElevenLabsChatbot';
import openingImage from '../images/Opening Image.png';
import logoImage from '../images/FHS Logo middle.png';
import rectangle31 from '../images/Rectangle 31.png';
import rectangle39 from '../images/Rectangle 39.png';
import rectangle40 from '../images/Rectangle 40.png';
import fellowFlorineImage from '../images/Union.png';
import previousWorkOne from '../images/image 20.png';
import previousWorkTwo from '../images/image 21.png';
import previousWorkThree from '../images/image 22.png';
import aboutOpeningImage from '../images/opening image in About us.png';
import fellowsHeaderImage from '../images/Header with image.png';
import fellowDreImage from '../images/image 7.png';
import fellowYuxiangImage from '../images/Screenshot 2025-11-10 at 1.08.30 PM 3.png';
import fellowMayaImage from '../images/Screenshot 2025-11-10 at 1.08.30 PM 4.png';
import fellowTrishaImage from '../images/image 6.png';
import peopleHeaderImage from '../images/Header with image-Alumni.png';
import stephanieDinkinsImage from '../images/_Stephanie Dinkins latest headshot 1.png';
import laurenRuizImage from '../images/image 10.png';
import riaRajanImage from '../images/image 12.png';
import hagarMasoudImage from '../images/image 13.png';
import ziyeZhangImage from '../images/Screenshot 2026-02-12 at 5.43.17 PM 1.png';
import genelAmbroseImage from '../images/image 24.png';
import dianaZhuImage from '../images/image 16.png';
import josieWilliamsImage from '../images/image 17.png';
import colemanCollinsImage from '../images/image 18.png';
import newsHeaderImage from '../images/image 28.png';
import taraAsgarImage from '../images/image 29.png';
import dianaNewsImage from '../images/image 32.png';
import tonyPatrickImage from '../images/image 33.png';
import hagarNewsImageOne from '../images/image 36.png';
import hagarNewsImageTwo from '../images/image 37.png';
import dianaLisbonImageOne from '../images/image 38.png';
import dianaLisbonImageTwo from '../images/image 39.png';
import josieNewsImage from '../images/image 42.png';
import stephanieAwardImageOne from '../images/image 43.png';
import stephanieAwardImageTwo from '../images/image 44.png';
import dianaAfterimageOne from '../images/image 45.png';
import dianaAfterimageTwo from '../images/image 46.png';
import josieSxswImageOne from '../images/image 47.png';
import josieSxswImageTwo from '../images/image 48.png';
import bodiesObjectImageOne from '../images/image 50.png';
import bodiesObjectImageTwo from '../images/image 54.png';
import allOverAgainImageOne from '../images/image 51.png';
import allOverAgainImageTwo from '../images/image 52.png';
import allOverAgainImageThree from '../images/image 53.png';
import lectureFeaturedImage from '../images/image 55.png';
import moontaeLeeImage from '../images/image 56.png';
import carolineGarciaImage from '../images/image 57.png';
import crystalFlemingImage from '../images/image 58.png';
import taraWorkshopImage from '../images/image 59.png';
import ancestralArchivesLectureImage from '../images/image 60.png';
import glennCantaveImage from '../images/image 61.png';
import valenciaJamesImage from '../images/image 62.png';
import miljohnRupertoImage from '../images/image 63.png';
import dorothySantosImage from '../images/image 66.png';
import agnieszkaKurantImage from '../images/image 67.png';
import jenniferRheeImage from '../images/image 71.png';
import motherCyborgImage from '../images/image 72.png';
import johannDiedrickImage from '../images/image 73.png';
import marisaMoranJahnImage from '../images/image 74.png';
import tegaBrainImage from '../images/image 76.png';
import moreshinAllahyariImage from '../images/image 79.png';
import ayannaDozierImage from '../images/image 80.png';
import openHouseImage from '../images/image 81.png';
import miaBrownellImage from '../images/image 83.png';
import jeremyDennisImage from '../images/image 84.png';
import peterBurrImage from '../images/image 85.png';
import elizabethChodosImage from '../images/image 86.png';
import studioCollageImage from '../images/Group 28.png';
import workshopsHeaderImage from '../images/workshop.png';
import mariaHupfieldImage from '../images/image 89.png';
import contactHeaderImage from '../images/contact-bg.png';

type Route = 'home' | 'about' | 'fellows' | 'people' | 'news' | 'lectures' | 'workshops' | 'studio' | 'contact' | 'learning-resources' | 'residue';

function getRouteFromHash(): Route {
  if (window.location.hash === '#/about') {
    return 'about';
  }

  if (window.location.hash === '#/fellows') {
    return 'fellows';
  }

  if (window.location.hash === '#/people') {
    return 'people';
  }

  if (window.location.hash === '#/news') {
    return 'news';
  }

  if (window.location.hash === '#/lectures') {
    return 'lectures';
  }

  if (window.location.hash === '#/workshops') {
    return 'workshops';
  }

  if (window.location.hash === '#/studio') {
    return 'studio';
  }

  if (window.location.hash === '#/contact') {
    return 'contact';
  }

  if (window.location.hash === '#/learning-resources') {
    return 'learning-resources';
  }

  if (window.location.hash === '#/residue') {
    return 'residue';
  }

  return 'home';
}

type NavLink = {
  href: string;
  label: string;
};

function SiteNav({
  buttonHref,
  buttonLabel,
  links = [
    { href: '#page-1', label: 'Page' },
    { href: '#page-2', label: 'Page' },
    { href: '#page-3', label: 'Page' }
  ]
}: {
  buttonHref: string;
  buttonLabel: string;
  links?: NavLink[];
}) {
  return (
    <header className="site-nav">
      <img className="nav-logo" src={logoImage} alt="FHS logo" />
      <nav aria-label="Primary">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a className="nav-button" href={buttonHref}>
              {buttonLabel}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img className="footer-logo" src={logoImage} alt="Future Histories Studio logo" />
        <div className="footer-address">
          <p>Future Histories Studio</p>
          <p>Staller Center for the Arts</p>
          <p>Fourth floor, Room 4222</p>
          <p>100 Nicolls Rd, Stony Brook, NY 11794</p>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <a href="#/">Home</a>
          <a href="#/about">About</a>
          <a href="#/news">News</a>
          <a href="#/lectures">Lectures &amp; Events</a>
          <a href="#/workshops">Workshops</a>
          <a href="#/studio">Studio</a>
          <a href="#/contact">Contact</a>
          <a href="#/learning-resources">Learning Resources</a>
          <a href="#/residue">Residue</a>
          <a href="#/people">People</a>
        </div>
        <div className="footer-column">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://vimeo.com" target="_blank" rel="noreferrer">
            Vimeo
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <main className="home-shell">
        <div className="hero-about-wrap">
          <section className="hero-panel">
            <SiteNav
              buttonHref="#/about"
              buttonLabel="About"
              links={[
                { href: '#/fellows', label: 'Fellows' },
                { href: '#/about', label: 'About' },
                { href: '#/people', label: 'People' }
              ]}
            />

            <div className="hero-art-wrap">
              <img className="hero-art" src={openingImage} alt="Portrait artwork" />
              <h1 className="hero-title">
                Future Histories
                <br />
                Studio
              </h1>
            </div>
          </section>

          <img className="center-logo" src={logoImage} alt="Future Histories Studio seal" />

          <section className="about-section">
            <div className="ambient-blocks" aria-hidden="true">
              <img className="block b1" src={rectangle31} alt="" />
              <img className="block b2" src={rectangle40} alt="" />
              <img className="block b3" src={rectangle39} alt="" />
              <img className="block b4" src={rectangle39} alt="" />
              <img className="block b5" src={rectangle31} alt="" />
              <img className="block b6" src={rectangle39} alt="" />
            </div>

            <div className="mission-card">
              <p>
                At FHS, we challenge, reconfigure, and model alternatives to the status quo of how art, technology and humanity/society intersect,
                intervene, and reforms through interdisciplinary art practices, hands-on inquiry, and other forms of research to interrogate conceptions of
                race, gender, aging, disability, and class.
              </p>
            </div>

            <div className="content-section">
              <div className="section-label">
                <h2>About the Future Histories Studio</h2>
              </div>

              <div className="about-copy">
                <p>
                  Founded by Stephanie Dinkins as part of the Mellon Funded <a href="#disco-network">DISCO Network</a>, the Future Histories Studio (FHS)
                  is a laboratory that explores emerging modes of arts-centered research, production, and presentation. FHS is an exploratory hub for those
                  interested in hybrid inquiry to develop practice-based research at the intersections of art, technology, race, storytelling, and social
                  justice.
                </p>
                <p>
                  The FHS is situated in the <a href="#stony-brook">Department of Art at Stony Brook University</a>.
                </p>
              </div>

              <div className="section-label previous-works-label">
                <h2>Previous Works</h2>
              </div>

              <div className="works-collage" aria-label="Previous works gallery">
                <div className="works-ambient-blocks" aria-hidden="true">
                  <img className="works-block works-block-left" src={rectangle31} alt="" />
                  <img className="works-block works-block-top-right" src={rectangle39} alt="" />
                  <img className="works-block works-block-mid-left" src={rectangle39} alt="" />
                  <img className="works-block works-block-bottom-right" src={rectangle40} alt="" />
                </div>
                <img className="work-card work-card-top-left" src={previousWorkOne} alt="Algorithmic Equity presentation event" />
                <img className="work-card work-card-right" src={previousWorkTwo} alt="Afro Nowism neon installation" />
                <img className="work-card work-card-bottom-left" src={previousWorkThree} alt="Interactive digital projection artwork" />
              </div>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <main className="about-shell">
        <section className="about-hero">
          <div className="about-hero-frame">
            <img className="about-hero-background" src={aboutOpeningImage} alt="About us gallery wall" />
            <div className="about-hero-overlay">
              <SiteNav buttonHref="#/" buttonLabel="Home" />
              <h1 className="about-hero-title">About Us</h1>
            </div>
          </div>
        </section>

        <section className="about-info-section">
          <div className="about-info-inner">
            <div className="section-label about-info-label">
              <h2>Future Histories Studio</h2>
            </div>

            <div className="about-info-copy">
              <p>
                The Future Histories Studio (FHS) is a new laboratory for emerging modes of arts-centered research, production, and presentation founded by
                Stephanie Dinkins with support from the Mellon Foundation. It is an exploratory hub for those interested in hybrid inquiry and developing
                practice-based research at the intersections of art, technology, race, storytelling, and social justice.
              </p>

              <p>
                Located in the Department of Art at Stony Brook University, FHS experiments with art at the intersection of emerging technologies. Specific
                research areas include, but are not limited to artificial intelligence, blockchain, robotics, and bio-art inclusive of computer vision, data
                equity, community agreement, governance, and care. Emphasis is on art and knowledge production exploring concepts, questions, and intuitions
                through free study, practice, craft, tinkering, and collaboration with the aim of combating techno supremacy by modeling alternative
                methodologies with the potential for tangible social impact.
              </p>

              <p>Visit us in Staller Room 4222 if you are in the area.</p>
              <p>Fall 2022 Hours: TBD</p>
            </div>

            <div className="about-gradient-card">
              <h2>
                <a href="#disco-network">Digital Inquiry, Speculation, Collaboration &amp; Optimism Network</a>
              </h2>

              <div className="about-gradient-copy">
                <p>
                  FHS is a part of <a href="#disco-network">The Digital Inquiry, Speculation, Collaboration, &amp; Optimism (DISCO) network</a>. Initiated
                  in April 2021 with the generous support of the Mellon Foundation, DISCO envisions a new anti-racist, anti-ableist digital future through a
                  speculative, experimental, nuanced, and critical lens to be investigated with a variety of approaches at labs on five leading public
                  research universities.
                </p>

                <p>
                  The DISCO network consists of labs run by professor Lisa Nakamura and associate professor Remi Yergeau, University of Michigan; professor
                  Andre Brock, Georgia Institute of Technology; professor Rayvon Fouche, Purdue University; professor Catherine Knight Steele, the University
                  of Maryland; and professor Stephanie Dinkins, Stony Brook University.
                </p>
              </div>
            </div>

            <section className="about-optimism-section">
              <h2>Both the FHS and DISCO are grounded in Digital Optimism</h2>

              <div className="about-optimism-copy">
                <p>
                  Optimism is the belief that the interval between the now and liberation is where we can act. Think of optimism as the resources, the excess
                  of life, that we pull together in order to thrive amidst the desiccation of modernity, the extraction of capitalism, and the violence of
                  the state. It is more than survival and it often falls short of celebration and ecstasy. Optimism is the recognition that there are
                  elements of life that vivify and energize in the here and the now, despite and amidst the purgatory one must endure. Sometimes that energy
                  is found in stillness; sometimes in refusal; and sometimes even in moments of catharsis.
                </p>

                <p>
                  Optimism doesn't mean that everything is going to be okay, or even that everything could be okay, but rather there is a commitment to being
                  okay because if not now, when?
                </p>

                <p>
                  Rather than asking how we might regain the optimism of/for a digital future, we ask, what choice do we have other than to be optimistic?
                  Really! What are the alternatives? Fear? Anger? Coercion? Nihilism? Solipsism? "The society of enmity"? (Mbembe 2016;2019).
                </p>
              </div>
            </section>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function FellowsPage() {
  return (
    <div className="fellows-page">
      <main className="fellows-shell">
        <section className="fellows-hero">
          <div className="fellows-hero-frame">
            <img className="fellows-hero-background" src={fellowsHeaderImage} alt="FHS fellows collage" />
            <div className="fellows-hero-overlay">
              <SiteNav
                buttonHref="#/"
                buttonLabel="Home"
                links={[
                  { href: '#/about', label: 'About' },
                  { href: '#/fellows', label: 'Fellows' },
                  { href: '#/people', label: 'People' }
                ]}
              />
            </div>
          </div>
        </section>

        <section className="fellows-content-section">
          <div className="fellows-content-inner">
            <h2 className="fellows-profile-title">M. Florine Demosthene</h2>

            <div className="fellows-profile-grid">
              <div className="fellows-profile-image-wrap">
                <img className="fellows-profile-image" src={fellowFlorineImage} alt="Portrait of M. Florine Demosthene" />
              </div>

              <div className="fellows-profile-card">
                <p>
                  M. Florine Demosthene was born in the United States and raised between Port-au-Prince, Haiti and New York. Demosthene earned her Bachelor
                  of Fine Arts from Parsons School for Design in New York and her Master of Fine Arts from Hunter College-City University of New York.
                </p>

                <p>
                  She has exhibited extensively through solo and selected exhibitions in the United States, Caribbean, UK, Europe, and Africa, with recent
                  solo shows including, What The Body Carries, with Frist Art Museum Nashville, Mastering The Dream, with SCAD Museum of Art Savannah and In
                  The Realm Of Love, with Marianne Ibrahim Gallery Paris, France. She is a recipient of a New York Foundation of the Arts Artist Fellowship,
                  Wachtmeister Award, Tulsa Artist Fellowship, Arts Moves Africa Grant, Black Star Award and a Joan Mitchell Foundation Grant.
                </p>

                <p>
                  She has participated in artist residencies in the United States, Caribbean, UK, Slovakia, South Africa, Ghana and Tanzania. Her works are
                  on view at National Museum For African American History and Culture, Africa First Collection, University of South Africa (UNISA), Lowe
                  Museum of Art, Hessler Museum of Art, PFF Collection of African American Art, the City of Seattle Washington and in various private
                  collections worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="fellows-alt-section">
          <div className="fellows-content-inner">
            <h2 className="fellows-profile-title fellows-profile-title-alt">Dre Jacome</h2>

            <div className="fellows-profile-grid fellows-profile-grid-alt">
              <div className="fellows-profile-card fellows-profile-card-dark">
                <p>
                  Dre Jacome (she/her) is a transdisciplinary storyteller and strategist weaving across digital and land-based technologies. As a trained
                  herbalist, historian, and organizer, she grounds her creative work in archival research, oral history, critical ethnobotany, and
                  collaboration with chosen family and community organizations.
                </p>

                <p>
                  Working across design, poetry, assemblage, and computation, she has shown work at Smack Mellon, Lincoln Center, and MOCADA's Abolition
                  House. Currently, she sits on the Powerhouse Arts Community Advisory Council and collaborates with Healing Justice Lineages, National Queer
                  &amp; Trans Therapists of Color Network, and the New Economy Coalition. She holds a B.A. in History &amp; Latin American Studies from
                  Swarthmore College and an MS from NYU's Interactive Telecommunications Program.
                </p>
              </div>

              <div className="fellows-profile-image-wrap fellows-profile-image-wrap-alt">
                <img className="fellows-profile-image" src={fellowDreImage} alt="Portrait of Dre Jacome" />
              </div>
            </div>
          </div>
        </section>

        <section className="fellows-content-section">
          <div className="fellows-content-inner">
            <h2 className="fellows-profile-title">Yuxiang Dong</h2>

            <div className="fellows-profile-grid">
              <div className="fellows-profile-image-wrap">
                <img className="fellows-profile-image" src={fellowYuxiangImage} alt="Portrait of Yuxiang Dong" />
              </div>

              <div className="fellows-profile-card">
                <p>
                  Yuxiang Dong is an art, educational, and social worker. His current practices and research are driven by the contradiction between
                  ethnography in the Anthropocene and the speculation of object-oriented ontology.
                </p>

                <p>
                  He received an Honorable Mention of the PhMuseum Photography Grant (2023) and was a finalist of the Three Shadows Photography Award (2016).
                  He has exhibited at Hermitage Museum &amp; Gardens, Norfolk, VA (USA), Goldsmiths, University of London (UK); OCAT Institute, Beijing
                  (China); Verzasca Foto, Canton of Ticino (Switzerland); Jakarta International Photo Festival, Jakarta, (Indonesia); and other international
                  venues.
                </p>

                <p>
                  His documentaries and filmic works have been screened at Obskuur Ghent Film Festival (Belgium), Doc.Boston Documentary Film Festival (USA),
                  Stay Art Festival (China), and other global festivals. He writes extensively at the nexus of art, technology, and society. His articles have
                  been published in Leonardo, Photographies, Media-N, and other journals. He has presented his research at Tate Liverpool, College Art
                  Association Annual Conference, and other international institutions and conferences. Dong currently teaches in the University of Miami.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="fellows-alt-section">
          <div className="fellows-content-inner">
            <h2 className="fellows-profile-title fellows-profile-title-alt">Maya Williams</h2>

            <div className="fellows-profile-grid fellows-profile-grid-alt">
              <div className="fellows-profile-card fellows-profile-card-dark">
                <p>
                  Maya Williams (b. Los Angeles, CA; lives and works in Brooklyn, NY) is a multimedia artist and writer. They are exploring the ecological
                  foundations of Black, Indigenous, and Queer cultural technologies as a means for informing how we live with and design emerging
                  technologies. Their work is particularly informed by practices of caretaking, resistance, and land stewardship.
                </p>

                <p>
                  With a background in manufacturing and fabrication, they create installations, tangible objects, and events to engage, reclaim, and reorient
                  how we experience physical spaces. Williams holds a BA in Sociology from New York University (NYU) Shanghai, and an MPS in Interactive
                  Telecommunications from NYU Tisch School.
                </p>
              </div>

              <div className="fellows-profile-image-wrap fellows-profile-image-wrap-alt">
                <img className="fellows-profile-image" src={fellowMayaImage} alt="Portrait of Maya Williams" />
              </div>
            </div>
          </div>
        </section>

        <section className="fellows-content-section">
          <div className="fellows-content-inner">
            <h2 className="fellows-profile-title">Trisha Barton</h2>

            <div className="fellows-profile-grid">
              <div className="fellows-profile-image-wrap">
                <img className="fellows-profile-image" src={fellowTrishaImage} alt="Portrait of Trisha Barton" />
              </div>

              <div className="fellows-profile-card">
                <p>
                  Trisha Barton is an Interaction Designer and STEM/Maker Education consultant driven by a deep commitment to empowering diverse learners
                  through innovative education. With a Bachelor's degree in Psychology and an Ed.M in Creative Technology, she explores how technology can
                  transform learning, spark creativity, and facilitate social impact. Her focus on hands-on experiences enables students to integrate and
                  understand multiple subjects, making learning both engaging and meaningful.
                </p>

                <p>
                  Over the past decade, Trisha has dedicated herself to researching and developing inclusive STEAM curricula tailored to the needs of diverse
                  communities. She has facilitated over 800 hours of virtual workshops centered around social justice and design, crafting custom experiences
                  that resonate with participants from various backgrounds.
                </p>

                <p>
                  She is passionate about consulting for organizations to implement impactful STEAM initiatives that equip educators and youth with the skills
                  needed for the 21st century. Believing in the power of representation, Trisha works to inspire underrepresented minorities to engage in and
                  pursue careers in STEM.
                </p>

                <p>
                  As a speaker at events such as the Blacks at Microsoft Culture Slam and the Smithsonian Air &amp; Space Museum, she shares insights on the
                  intersection of technology, education, and community engagement. Her journey is fueled by a desire to create equitable access to
                  transformative learning experiences that uplift and empower.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function PeoplePage() {
  return (
    <div className="people-page">
      <main className="people-shell">
        <section className="people-hero">
          <div className="people-hero-frame">
            <img className="people-hero-background" src={peopleHeaderImage} alt="People and alumni collage" />
            <div className="people-hero-overlay">
              <SiteNav
                buttonHref="#/"
                buttonLabel="Home"
                links={[
                  { href: '#/about', label: 'About' },
                  { href: '#/fellows', label: 'Fellows' },
                  { href: '#/people', label: 'People' }
                ]}
              />
            </div>
          </div>
        </section>

        <section className="people-content-section">
          <div className="people-content-inner">
            <h2 className="people-profile-title">Stephanie Dinkins</h2>
            <p className="people-profile-role">Founder</p>

            <div className="people-profile-grid">
              <div className="people-profile-image-wrap">
                <img className="people-profile-image" src={stephanieDinkinsImage} alt="Portrait of Stephanie Dinkins" />
              </div>

              <div className="people-profile-card">
                <p>
                  Stephanie Dinkins is a transmedia artist who creates experiences that spark dialog about race, gender, aging, and our future histories. Her
                  work in AI and other mediums uses emerging technologies and social collaboration to work toward technological ecosystems based on care and
                  social equity. Dinkins teaches at Stony Brook University where she holds the Kusama Endowed Chair in Art. Dinkins earned an MFA from the
                  Maryland Institute College of Art and is an alumna of the Whitney Independent Studies Program.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="people-alt-section">
          <div className="people-content-inner">
            <h2 className="people-profile-title people-profile-title-alt">Lauren Ruiz</h2>
            <p className="people-profile-role people-profile-role-alt">Manager of Research and Operations</p>

            <div className="people-profile-grid people-profile-grid-alt">
              <div className="people-profile-card people-profile-card-dark">
                <p>
                  Lauren is a research-based multimedia artist interrogating perceptions of nature, authoritative systems, and their complex intersections with
                  class, labor, and identity. Drawing from various modes of knowledge-making (historical data, scientific journals, climate fiction, and
                  biblical texts) and her bodily logic, she creates immersive installations, digital soundscapes, web-based projects, and multimedia
                  sculptures to understand and challenge perceptions of identity amidst unseen environments. Lauren examines spaces that can't fully be
                  experienced by human perception; deciphering the reverberations of socioeconomic disparities, ecologic crises, religious, and political
                  systems in both human and nonhuman lifeworlds.
                </p>
              </div>

              <div className="people-profile-image-wrap people-profile-image-wrap-alt">
                <img className="people-profile-image" src={laurenRuizImage} alt="Portrait of Lauren Ruiz" />
              </div>
            </div>
          </div>
        </section>

        <section className="people-content-section">
          <div className="people-content-inner">
            <h2 className="people-profile-title">Ria Rajan</h2>
            <p className="people-profile-role">FHS Graduate Assistant</p>

            <div className="people-profile-grid">
              <div className="people-profile-image-wrap">
                <img className="people-profile-image" src={riaRajanImage} alt="Portrait of Ria Rajan" />
              </div>

              <div className="people-profile-card">
                <p>
                  Ria Rajan is an Intermedia artist working across analog and digital mediums, focussing on the intimate relationships between people, places
                  and the technosphere. Ria has been a fellow and artist-in-residence at the International Residency Exchange Program - Bamboo Curtain Studio,
                  (Taipei), TIFA Working Studios (IN), Walkin Studios (IN), Jaaga, Figment (NY), Art-A-HACK (NY) and has been supported by cultural
                  institutions such as the Goethe Institute and Alliance Francaise. She is also a part of the core creative team that organises Cyberia - a
                  new media festival in Poona (IN), since it's inception in 2019. Currently, she is pursuing an MFA in Studio Art at Stony Brook University,
                  NY and is a Research Assistant at the Future Histories Studios.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="people-alt-section">
          <div className="people-content-inner">
            <h2 className="people-profile-title people-profile-title-alt">Hagar Masoud</h2>
            <p className="people-profile-role people-profile-role-alt">FHS Graduate Assistant</p>

            <div className="people-profile-grid people-profile-grid-alt">
              <div className="people-profile-card people-profile-card-dark">
                <p>
                  Hagar Masoud is a New York-based interdisciplinary artist, creative technologist, scholar, and storyteller who draws from her Cairo roots
                  to inform her work. Her research-based practice incorporates sound art, sculpture, installation, video, technology such as Artificial
                  intelligence (AI), and extended reality. Masoud investigates questions of gentrification, childhood trauma, and collective memory to reflect
                  on their effect on the body. Her work negotiates the way the body, sexuality, gender, place, trauma, and violence intersect in the
                  aftermath of such horrors. By adopting new media and oral history as methodologies, Masoud re-contextualizes socio-political commentary and
                  cultural transformations.
                </p>
              </div>

              <div className="people-profile-image-wrap people-profile-image-wrap-alt">
                <img className="people-profile-image" src={hagarMasoudImage} alt="Portrait of Hagar Masoud" />
              </div>
            </div>
          </div>
        </section>

        <section className="people-content-section">
          <div className="people-content-inner">
            <h2 className="people-profile-title">Ziye Zhang</h2>

            <div className="people-profile-grid">
              <div className="people-profile-image-wrap">
                <img className="people-profile-image" src={ziyeZhangImage} alt="Portrait of Ziye Zhang" />
              </div>

              <div className="people-profile-card">
                <p>
                  Ziye Zhang is a multimedia artist and creative technologist based in New York. He excels at creating electronic and installation art that
                  engages audiences through interactive logic and game mechanics. Based on his interdisciplinary background and practice, Ziye has a high
                  level of expertise in emerging technologies in game engine, machine learning, VR, virtual production, motion capture and other new media
                  technologies. In addition, Ziye has led workshops on games and new media art at institutions such as MIT, NYU, and Tsinghua University. He
                  has also served as a guest speaker for Hasbro China.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="people-alt-section">
          <div className="people-content-inner">
            <h2 className="people-profile-title people-profile-title-alt">Genel Ambrose</h2>

            <div className="people-profile-grid people-profile-grid-alt">
              <div className="people-profile-card people-profile-card-dark">
                <p>Genel Ambrose is a strategist, curator and cultural producer working at the intersection of technology and creativity.</p>
              </div>

              <div className="people-profile-image-wrap people-profile-image-wrap-alt">
                <img className="people-profile-image" src={genelAmbroseImage} alt="Portrait of Genel Ambrose" />
              </div>
            </div>
          </div>
        </section>

        <section className="people-content-section">
          <div className="people-content-inner">
            <h2 className="people-profile-title">Diana Mulan Zhu</h2>
            <p className="people-profile-role">Alumni</p>
            <p className="people-profile-role">FHS Graduate Assistant &amp; DISCO Graduate Fellow</p>

            <div className="people-profile-grid">
              <div className="people-profile-image-wrap">
                <img className="people-profile-image" src={dianaZhuImage} alt="Portrait of Diana Mulan Zhu" />
              </div>

              <div className="people-profile-card">
                <p>
                  Diana Mulan Zhu is a second-generation Chinese-American artist, visual activist, filmmaker, technologist, and scholar seeking to understand
                  identity, the body, gender, and the digital gaze through painting, video art, performance, and installation. She holds a BA in Studio Art
                  and Computer Science from Vanderbilt University and an MA in Media, Culture, and Communication from NYU. Diana has screened and exhibited
                  her work in New York and at international venues including Anthology Film Archives and Prisma Estudio. Diana Mulan Zhu is currently
                  pursuing her MFA in Art at SUNY Stony Brook University. Diana Mulan Zhu works and lives in Brooklyn, NY.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="people-alt-section">
          <div className="people-content-inner">
            <h2 className="people-profile-title people-profile-title-alt">Josie Williams</h2>
            <p className="people-profile-role people-profile-role-alt">Alumni</p>
            <p className="people-profile-role people-profile-role-alt">FHS Research Assistant &amp; DISCO Graduate Fellow</p>

            <div className="people-profile-grid people-profile-grid-alt">
              <div className="people-profile-card people-profile-card-dark">
                <p>
                  Josie Williams is an afro-nowist, creative technologist, and founder of <a href="#algorithmic-equity">Algorithmic Equity</a>, an
                  interactive digital platform that empowers any New Yorker to report, record, or respond to law enforcement behavior. Currently, she is an
                  MFA at Stony Brook University where she is also participating in a research fellowship with Stephanie Dinkins at the Future Histories
                  Studio. Her primary interests revolve around artificial intelligence, data equity, cultivating Black radical imagination, and creating
                  sentient-centered AI.
                </p>
              </div>

              <div className="people-profile-image-wrap people-profile-image-wrap-alt">
                <img className="people-profile-image" src={josieWilliamsImage} alt="Portrait of Josie Williams" />
              </div>
            </div>
          </div>
        </section>

        <section className="people-content-section">
          <div className="people-content-inner">
            <h2 className="people-profile-title">Coleman Collins</h2>
            <p className="people-profile-role">Extended Family</p>
            <p className="people-profile-role">FHS Artist in Residence &amp; DISCO Fellow</p>

            <div className="people-image-only-wrap">
              <img className="people-image-only" src={colemanCollinsImage} alt="Portrait of Coleman Collins" />
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function NewsPage() {
  return (
    <div className="news-page">
      <main className="news-shell">
        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media">
              <img className="news-feature-image" src={newsHeaderImage} alt="Open call fellowship preview collage" />
            </div>

            <div className="news-feature-copy">
              <h1 className="news-feature-title">
                Open Call Fellowship
                <br />
                2025
              </h1>

              <p>
                We are excited to announce a unique fellowship opportunity at the Future Histories Studio (FHS) at Stony Brook University for the Spring-Fall
                2025 period. We are seeking innovative artists, researchers, and practitioners to join our prestigious program starting March 2025.
              </p>

              <p>
                <a href="#open-call">Click HERE for more information</a>
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={taraAsgarImage} alt="Portrait of Tara Asgar" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                FHS welcomes Tara
                <br />
                Asgar as Project
                <br />
                Fellow for Spring
                <br />
                2024
              </h2>

              <p className="news-article-date">April 10, 2024</p>

              <p>
                Tara Asgar is a Brooklyn-based Bangladeshi Transgender (she/her) artist, educator, and activist. Tara's hybrid practice utilizes archive,
                History, and personal narrative to create political and community-engaged collaborations around LGBTQIA+ liberation, Immigrant stories, and
                community organizing. Through public performances, texts, and videos, Tara explores themes of gender, desire, displacement, trauma, and
                migration. Tara's work has garnered attention from critic Hans Ulrich Obrist and has been featured in publications such as Hyperallergic, Le
                Arte, Frieze Magazine, Emergency Index, and The Daily Star. Her visual art and durational performances have been showcased globally,
                including at the Dhaka Art Summits, Asian Art Biennale, Queens Museum, Pen World Voice Festival, Asian Art initiative, and Shrine Empire
                gallery. Tara has been awarded residencies and fellowships at the University of Maine, Montalvo Arts Center, University of Connecticut, and
                Oxbow School of Art. Actively involved in grassroots activism, Tara founded the Bangladesh Trans, Hijra, and Koti Rights Coalition, focusing
                on the economic and social well-being of these communities in Bangladesh. With a BFA from the University of Dhaka and an MFA from the School
                of the Art Institute of Chicago, Tara has held visiting artist positions at various educational institutions and is currently a 2024 NYSCA
                interdisciplinary/moving image awardee and a visiting fellow at Stony Brook University's future histories studio.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media">
              <img className="news-feature-image" src={dianaNewsImage} alt="Still from Hand Me Down: Xiaohui" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Diana Mulan Zhu
                <br />
                announces
                <br />
                upcoming film Hand
                <br />
                Me Down: Xiaohui
              </h2>

              <p className="news-feature-date">April 2, 2024</p>

              <p>
                In collaboration with Future Histories Studio, 986 Pictures presents upcoming film Hand Me Down: Xiaohui. The film is the first chapter in a
                saga of experimental documentary films tracing American-born Chinese woman Diana Mulan Zhu's, matrilineal family history across oceans and
                decades as they survived the Cultural Revolution, 1989 Tiananmen Protests and assimilated into the middle-class suburban American dream.
                Through translation by her mother, Diana asks her grandma about subjects that are typically taboo for immigrant Asian families, like sex
                education, menstruation, and feminism. The film blends anachronistic and hypermodern media aesthetics with genAI prompted by iconic Chinese
                American literature such as Amy Tan and Ling Ma to reveal the thorny mediascape of stereotypes, Western bias, and colonial indoctrination
                that alienates her from her ancestral legacy.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={tonyPatrickImage} alt="Portrait of Tony Patrick" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                FHS welcomes
                <br />
                Tony Patrick as
                <br />
                Project Fellow for
                <br />
                Spring 2024
              </h2>

              <p className="news-article-date">March 29, 2024</p>

              <p>
                Tony Patrick is a worldbuilder, social practice artist, comics creator, and immersive director. Patrick is a Sundance Institute
                World-building Fellow, 2021 Sundance Film Festival New Frontier Artist, IFP/RYOT 5G Storytelling Alum, Guild of Future Architects
                Founding Member, NYU ITP &amp; IMA Professor, NYU Future Imagination Collaboratory Fellow, NYU Red Burns Fellow, CommonField Fellow, NEW INC
                alum, For Freedoms Artist, Wide Awakes Founding Member, Buckminster Fuller Institute Design Science Studio Advisor/Mentor, RLAB Mentor,
                Today@Apple NYC Youth Program Mentor, Futurist Writers Room Co-Designer, and Restoring the Future Co-Designer. Patrick attended the
                Dramatic Writing Program at New York University.
                <br />
                <br />
                As an author/director of numerous screenplays, short films, and documentaries (HBO, Cinemax, and the CBC) in conjunction with a series of
                published comics under his belt (Batman &amp; The Signal, X'ed), Tony's penchant for creating fictional and immersive worlds catapulted him
                into numerous future-facing residencies and served as the inspiration for sculpting co-creation spaces which produce new artworks,
                prototypes, frameworks, and civic solutions in his Community-World-building initiative (the ReWriters Room) with artists, entrepreneurs,
                institutions, and communities-at-large.
                <br />
                <br />
                When he's not advocating for underrepresented students to embark on game design/tech careers through his Tenfold Gaming Initiative (TGI),
                he's building his latest venture, the School of Lived Experience, a renewal center framework comprised of somatic community-centric
                programs, interactive public art experiences, co-creation hubs, and virtual engagement platforms which provide ongoing opportunities for
                local communities, students, and artists to interact, heal, &amp; build together.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media news-feature-media-stack">
              <img className="news-feature-image" src={hagarNewsImageOne} alt="Wooden Room_Wedding room exhibition installation view" />
              <img className="news-feature-image" src={hagarNewsImageTwo} alt="Wooden Room_Wedding room exhibition installation seating view" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Hagar Masoud
                <br />
                presents her first
                <br />
                solo exhibition
                <br />
                Wooden
                <br />
                Room_Wedding
                <br />
                room
              </h2>

              <p className="news-feature-date">March 1, 2024</p>

              <p>
                Wooden Room_Wedding Room is a socially engaged, multimedia installation project that addresses the traumatic impact of Female Genital
                Mutilation (FGM). It sheds light on this violent practice, which involves the non-medical, ritual removal of external female genitalia,
                often without consent, and is widely seen as a patriarchal instrument to dominate girls' sexuality. FGM is prevalent across Africa, Asia,
                and the Middle East, rooted in cultural beliefs about femininity and marriageability. The project aims to raise awareness about the
                physical and emotional pain inflicted by FGM and advocate for its end, emphasizing the importance of protecting girls' bodily autonomy.
                <br />
                <br />
                <a href="#wooden-room">Wooden Room_Wedding Room</a> installation reimagines the colonialized interiors of Egyptian middle-class living
                rooms in a gallery setting, where narrators share their experiences of Female Genital Mutilation (FGM) that occurred in such spaces. The
                ambiance includes serving Traditional Egyptian tea and tropical fruits.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media news-article-media-stack">
              <img className="news-article-image" src={dianaLisbonImageOne} alt="Diana Mulan Zhu preparing dumplings during the Prisma Estudio residency" />
              <img className="news-article-image" src={dianaLisbonImageTwo} alt="Close-up of dumpling making during the Prisma Estudio screening event" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Diana Mulan Zhu
                <br />
                screens film at
                <br />
                Prisma Estudio in
                <br />
                Lisbon
              </h2>

              <p className="news-article-date">Jan 12, 2024</p>

              <p>
                As a culmination of an artist residency in Lisbon at Prisma Estudio, FHS Graduate Assistant Diana Mulan Zhu screened a sneak preview of her
                upcoming film Hand Me Down Chapter Two: Liuyang.
                <br />
                <br />
                Liuyang is the second chapter in the trilogy of experimental documentary films tracing my familial history across generations and immigration
                from China to America. As my mother teaches me the family recipe for dumplings, I ask her about her first years in America as an immigrant
                pursuing her graduate degree in rural Washington. She shares her experience as a woman of color in a male dominated tech industry and how
                she dealt with the unique tribulations of raising American daughters. She tells stories about remarrying a white Canadian man, my stepfather.
                I use Bolex 16mm footage of my mother teaching me how to make dumplings in a New Jersey Airbnb kitchen with screen recordings of YouTube
                videos and vintage commercials from the 1990s.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media news-feature-media-stack">
              <img className="news-feature-image" src={stephanieAwardImageOne} alt="Stephanie Dinkins speaking at a microphone" />
              <img className="news-feature-image" src={stephanieAwardImageTwo} alt="LG Guggenheim award event installation view" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Stephanie Dinkins
                <br />
                receives inaugural
                <br />
                LG Guggenheim
                <br />
                Award
              </h2>

              <p className="news-feature-date">May 19, 2023</p>

              <p>
                The <a href="#lg-guggenheim">LG Guggenheim Art and Technology Initiative</a> was launched in 2022 with the goal of supporting the most
                groundbreaking artists working with technology today. As part of the initiative, the newly created LG Guggenheim Award honors one artist
                each year for their achievements in technology-based art with an unrestricted honorarium of $100,000.
                <br />
                <br />
                The recipient of the first LG Guggenheim Award is Stephanie Dinkins, a visionary artist and educator whose career spans over twenty years of
                artistic inquiry. Stephanie's pioneering work in artificial intelligence centers equity, transparency, and social engagement through an ethics
                of participation, dialogue, and care.
                <br />
                <br />
                AI is a massive topic today. It is already impacting our environment, our jobs, our education and healthcare systems, and even our
                understanding of reality. Dinkins envisions models for AI repair that grows from local engagement with marginalized communities that are most
                impacted by big data AI.
                <br />
                <br />
                Her works inspire us to imagine better futures through the intersection of art and technology on a global scale.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media">
              <img className="news-article-image" src={josieNewsImage} alt="Streaming Consciousness exhibition poster" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Josie Williams
                <br />
                presents her first
                <br />
                solo exhibition
                <br />
                Streaming
                <br />
                Consciousness
              </h2>

              <p className="news-article-date">Nov 3, 2022</p>

              <p>
                Very excited to announce the opening of Josie Williams' solo show, streaming consciousness, which is open for viewing at the Alloway Gallery
                inside of the library. The gallery is open from Nov. 3rd to Nov. 18th on Monday, Wednesday from 10 am to 11:30 am and Tuesday, Thursday
                from 10 am to 1 pm. The opening reception will be happening on Wednesday, November 9th from 5 pm to 7 pm - hope to see you there!
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media news-feature-media-stack">
              <img className="news-feature-image" src={dianaAfterimageOne} alt="Afterimage exhibition gallery view" />
              <img className="news-feature-image" src={dianaAfterimageTwo} alt="Afterimage installation screens and headphones" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Diana Mulan Zhu
                <br />
                presents first solo
                <br />
                exhibition <span className="news-inline-underline">Afterimage</span>
              </h2>

              <p className="news-feature-date">February 19, 2022</p>

              <p>
                How does the aftermath of trauma linger even when healing and acceptance of the memories have been processed? <em>Afterimage</em> meditates
                on the way artist Diana Mulan Zhu uses conceptual painting to reflect on past traumatic experiences and the pre-existing body of work that
                has already addressed these memories. Zhu references her multi-media installation and performance completed in April 2022, where she
                re-enacted a painful childhood experience of encountering racialized online pornography for the first time as a young woman.
                <br />
                <br />
                In <em>Afterimage</em>, Zhu takes images from her previous digital and sculptural work to further remediate and re-process this ritualistic
                self-care event. She uses painting as an embodied form of ritualistic self-care that echoes the way she uses binge-eating as a proxy for the
                visual consumption of fetish Asian porn. How does the many iterations and versions of her body, and the hypersexualized images of Asian
                women conduct new meanings as they proliferate from digital video, to metaphorical performance, to figure paintings. She finds a dialectic
                of both pleasure and pain, both subject and object, and both consumed and consumer.
                <br />
                <br />
                <em>Afterimage</em> is open March 20th - April 2, 2023. Monday-Thursday 10:00 am - 4:00 pm or by appointment.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media news-article-media-stack">
              <img className="news-article-image" src={josieSxswImageOne} alt="Ancestral Archives promotional artwork" />
              <img className="news-article-image" src={josieSxswImageTwo} alt="Ancestral Archives mask visual in a jungle environment" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Josie Williams
                <br />
                exhibits at South by
                <br />
                Southwest in
                <br />
                association with EY
                <br />
                Metaverse Lab and
                <br />
                NEW INC
              </h2>

              <p className="news-article-date">March 11, 2023</p>

              <p>
                Ancestral Archives is a collection of chatbots trained on the work of Black thought leaders. By building a collection of chatbots trained on
                the work of Black leaders like Zora Neale Hurston, James Baldwin, Audre Lorde, and Octavia Butler, we hope to recontextualize and
                reintroduce their work to a new generation of critical thinkers, activists, and creators. The project primarily takes three manifestations:
                actively engaging in 1:1 conversations with the bots, passively observing conversations or performances between the bots, and data archiving
                which is the collection and preservation of Black thought. Basing our ideas on afrocentric principles of space and time, we're creating
                moments that simultaneously exist in the past, present, and future by having AI contextually repurpose these bodies of work.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media news-feature-media-stack">
              <img className="news-feature-image" src={bodiesObjectImageOne} alt="Bodies Object exhibition portrait grid installation" />
              <img className="news-feature-image" src={bodiesObjectImageTwo} alt="Bodies Object exhibition video installation" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Stephanie Dinkins,
                <br />
                Coleman Collins,
                <br />
                Josie Williams and
                <br />
                Diana Mulan Zhu
                <br />
                exhibit at group
                <br />
                show Bodies
                <br />
                Object at Sagtikos
                <br />
                Gallery
              </h2>

              <p className="news-feature-date">February 19, 2022</p>

              <p>
                How do we relate the physical self to its aesthetic presentation in digital space? As information translates from the material to the
                immaterial, the perception of time, memory and identity adjusts to the altered conditions of cyberspace. Bodies Object is an exhibition
                featuring the work of Coleman Collins, Stephanie Dinkins, Josie Williams and Diana Mulan Zhu.
                <br />
                <br />
                The exhibition will run from September 12- October 21, 2022. The reception and artist talks will be on Wednesday September 21 at 4:30 pm.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media news-article-media-stack">
              <img className="news-article-image" src={allOverAgainImageOne} alt="All Over Again exhibition installation overview" />
              <img className="news-article-image" src={allOverAgainImageTwo} alt="All Over Again exhibition title on gallery window" />
              <img className="news-article-image" src={allOverAgainImageThree} alt="All Over Again installation bed and projected light piece" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Josie Williams and
                <br />
                Diana Mulan Zhu
                <br />
                exhibit in group
                <br />
                show All Over Again
                <br />
                at Lawrence
                <br />
                Alloway Memorial
                <br />
                Gallery
              </h2>

              <p className="news-article-date">Sep 10, 2022</p>

              <p>
                All Over Again features work by four first year MFA students in the Stony Brook Studio Art program who engage themes of reinvention,
                remembrance, oscillation, and cycles (of life, nature, or otherwise). Working in painting, video, performance, fiber, embroidery, digital
                rendering, and installation; Emma Fiona Jones, Sehee Kim, Josie Williams, Diana Mulan Zhu utilize these diverse mediums to bring to light to
                various non-linear, non-chronological, and yet ever-present cyclical patterns. "All over again" implies the frustration of repeating a
                process already thought to be completed. But for these artists, it also refers to second chances, to returning to places of healing, to
                restarting something afresh, and to the natural cycles of ebb and flow.
                <br />
                <br />
                Josie Williams's LifeDeathLife is a digital rendering artist's imagined mushroom wonderland that takes the form of a lush forest scene. The
                viewer engages with the scene from the perspective of a small creature on the ground floor of the forest, below several towering mushrooms,
                and is joined alongside several anthropomorphized insect creatures and a disembodied humanoid head. For its properties of growth from death
                and detritus, Williams uses the mushroom to represent various cyclical patterns including the processes of life and death; the repetitive
                nature of breathing practices in meditation, with one exhale as the beginning of the next exhale; and the ephemeral emotional states of
                rage, anxiety, and fear.
                <br />
                <br />
                Diana Zhu's installation, Consumed, consists of several mixed media elements including a bed with bedsheets covered in stains from Chinese
                takeout, a video work made up of vintage pornography clips projected onto the bed, and a recorded performance work by the artist displayed on
                a laptop. Having experienced the traumatizing experience of being exposed to and subsequently obsessively watching porn as a young child, the
                artist revisits this trauma in this absurd and cheeky installation as a means of rewriting her painful childhood experience. In the video
                work, Zhu visually and sonically overlays porn scenes from 1990s-2000s that feature Asian women, recalling that pornography was the only
                form of media where Zhu saw Asian women on the screen. In the recorded performance that plays on the laptop, Zhu sits on the bed while
                watching her video work and devours American-style Chinese takeout. This frenzied binging refers to cycles of shame and the body, as well as
                stands as a metaphor for the obligatory force-feeding of Americanized images of Asian culture through her childhood.
              </p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function LecturesPage() {
  return (
    <div className="news-page">
      <main className="news-shell">
        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={lectureFeaturedImage} alt="Portrait of Louis Chude-Sokei" />
            </div>

            <div className="news-feature-copy">
              <h1 className="news-feature-title">
                FEATURED
                <br />
                KEYNOTE // Louis
                <br />
                Chude-Sokei:
                <br />
                Electronic
                <br />
                personhood and
                <br />
                human futurity in
                <br />
                that age of AI
              </h1>

              <p className="news-feature-date">Sep 21, 2023</p>

              <p>
                Electronic personhood and human futurity are considered in relation to history and rapidly proliferating technological ecosystems. As it
                becomes increasingly clear that intelligent machines may soon outpace or at least calculate faster than human intelligence, and the list of
                nonliving entities with personhood grows, we must consider how humans will (re)define themselves, their institutions and agreements. Writer,
                scholar, and AI sound artist Louis Chude-Sokei will share his thoughts on the topic. He will also share his artistic endeavors and
                collaborations including collaborations with choreographer Bill T. Jones, and Berlin electronic artist, Mouse on Mars with whom he has
                produced sound installations and the celebrated album Anarchic Artificial Intelligence (Thrill Jockey Records 2021).'
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={moontaeLeeImage} alt="Portrait of Moontae Lee" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Atlas of Intelligence
                <br />
                - How Generative AI
                <br />
                shapes knowledge
                <br />
                and creativity. Talk
                <br />
                by Moontae Lee
              </h2>

              <p className="news-article-date">Mar 13, 2025</p>

              <p>
                Generative AI is transforming how we understand, create, and interact with information. Large Language Models (LLMs) comprehend contexts,
                answer non-trivial questions, and spark creative ideas. This talk introduces the evolution of these models, highlighting the most recent
                advancements in planning, reasoning, and evaluation. The talk also touches on the critical considerations for both model developers and
                users, carefully addressing limitations of LLMs as well as ethical and societal implications. Finally, the talk provides ongoing directions
                in research and production: from the rise of personalized AI agents to the future frontiers of AI.
                <br />
                <br />
                Moontae Lee is the Director of the Superintelligence Lab at LG AI Research and an Assistant Professor of Information and Decision Sciences at
                the University of Illinois Chicago. His journey with Large Language Models began as a visiting scholar at Microsoft Research in 2019,
                continuously consulting the Deep Learning Group at Redmond until joining LG. He holds a PhD in Computer Science from Cornell, an MS from
                Stanford, and BS degrees in Computer Science, Mathematics, and Psychology from Sogang University.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={carolineGarciaImage} alt="Portrait of Caroline Garcia in her studio" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Artist Talk : Caroline
                <br />
                Garcia
              </h2>

              <p className="news-feature-date">Nov 20, 2024</p>

              <p>
                Caroline is a culturally promiscuous, interdisciplinary artist. She works across performance, moving image, and installation through a
                hybridized aesthetic of cross-cultural movement, embodied research, and new media. Her practice traverses a highly personalized aggregation
                of distinct systems that interlace ethnotraditional forms of knowledge (such as dance, botany, poetry, and ceramics) with digital
                technologies (including green screening, robotics, motion capture, extended realities [AR/VR], and 3D processes).
                <br />
                <br />
                Caroline’s research inquiries are uniquely shaped to create archipelagic constellations that intersect the past, present, and future. Using
                found footage, archives, and artifacts, she digitally samples popular culture and colonial imagery to critically re-appropriate problematic
                narratives of cultural representation, further complicating them through cultural cannibalism. In her work, she centers peripheral bodies by
                assuming the role of shape shifter - sliding into the gaps between cultures and experiences of alterity. Her practice involves a reimagining
                of forgotten choreographies to provide alternate ways of viewing images of the past that eschew classical myths.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={taraWorkshopImage} alt="Portrait of Tara Asgar" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Decolonial Art
                <br />
                Anthology : A
                <br />
                workshop series
                <br />
                with Tara Asgar
              </h2>

              <p className="news-article-date">Oct 29, Nov 11, Nov 19, 2024</p>

              <p>
                This three-part seminar/workshop was designed to introduce students to the concepts of decoloniality in art, helping them critically engage
                with the legacies of colonialism and find ways to create art that challenges dominant narratives.
                <br />
                The workshop covered the following topics:
                <br />
                • Understanding Decoloniality in Art
                <br />
                • Exploring Decolonial Aesthetics and Methods
                <br />
                • Creating Decolonial Art as a Collective
                <br />
                Participants engaged in various activities, including group discussions, hands-on experimentation, and collaborative projects exploring the
                idea of kinship and relationship building as a decolonial method and aesthetic.
                <br />
                <br />
                Tara Asgar is a Brooklyn-based Bangladeshi Transgender (she/her) artist, educator, and activist. Tara’s hybrid practice utilizes archive,
                history, and personal narrative to create political and community-engaged collaborations around LGBTQIA+ liberation, Immigrant stories, and
                decolonial methods. Through public performances, texts, and videos, Tara explores themes of gender, desire, displacement, trauma, and
                migration.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={crystalFlemingImage} alt="Portrait of Crystal Fleming" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Conversation with
                <br />
                Luis Chude-Sokei:
                <br />
                Crystal Fleming as
                <br />
                Moderator
              </h2>

              <p className="news-feature-date">Sep 21, 2023</p>

              <p>
                Crystal Marie Fleming, Professor of Sociology and Africana Studies, is a critical race sociologist, the author/editor of four books and an
                internationally recognized expert on racism and antiracism. Her work empowers people of all backgrounds to become change agents and dismantle
                white supremacy. Dr. Fleming’s passion for speaking truth to power and promoting social transformation infuses her scholarship, writing and
                pedagogy. She earned a Ph.D. and a master’s degree in Sociology from Harvard University and graduated with honors in Sociology and French from
                Wellesley College. Her research appears in leading journals such as Social Problems, The Sociology of Race and Ethnicity, Ethnic and Racial
                Studies, Poetics, Du Bois Review: Social Science Research on Race and Mindfulness.is a critical race sociologist, the author/editor of four
                books and an internationally recognized expert on racism and antiracism. Her work empowers people of all backgrounds to become change agents
                and dismantle white supremacy.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media">
              <img className="news-article-image" src={ancestralArchivesLectureImage} alt="Ancestral Archives mask artwork" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Ancestral Archives:
                <br />
                Josie Williams and
                <br />
                Daniella McPhatter
              </h2>

              <p className="news-article-date">Sep 21, 2023</p>

              <p>
                Cultivating new connections between revolutionary leaders of the past and a future generation of critical thinkers, Ancestral Archives brings
                historically significant Black leaders, who inspired artist Josie Williams, to present-day communities in the form of virtual poets and
                authors: Audre Lorde, James Baldwin, Zora Neale Hurston, and Octavia Butler. This work explores how generative AI can be enriched with the
                connections, experience, and knowledge of the past. In doing so, it leverages the learning capabilities of deep neural networks with Black
                culture to create a thoughtful, one-of-a-kind physical and digital experience, showcasing the power of harnessing technology for positive
                human impact and building a better world.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={glennCantaveImage} alt="Portrait of Glenn Cantave" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Artist Talk: Glenn
                <br />
                Cantave
              </h2>

              <p className="news-feature-date">Apr 11, 2023</p>

              <p>
                Glenn Cantave is an activist, performance artist, and social entrepreneur. Past pieces include running the NYC Marathon in Chains, a slave
                auction pop/up AR exhibit and a 30 day water fast in Times Square for the duration of Black History Month 2020 calling for a more equitable
                blueprint of NYC. Glenn was recently named on the Forbes 30 Under 30 list for education entrepreneurs, he is also a Camelback Fellow, and
                Eyebeam Alum. His TED Talk on ‘How Augmented Reality is Changing Activism’ was featured on the homepage of TED.com in July 2019. He is also
                the Co-Founder of Kinfolk, a nonprofit that uses the arts and emerging technology to maximize the impact and accessibility of Black and Brown
                Narratives. Kinfolk was recently featured at the New York, New Publics Exhibit at the MoMA and recently won the Special Jury Prize at
                Tribeca Festival.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={valenciaJamesImage} alt="Portrait of Valencia James" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Artist Talk: Valencia
                <br />
                James
              </h2>

              <p className="news-article-date">Apr 11, 2023</p>

              <p>
                Valencia James is a Barbadian freelance performer, maker and researcher interested in the intersection between dance, theatre, technology and
                activism. Valencia’s work explores remote interdisciplinary collaboration with creative technologists and how emerging technologies like
                machine learning and computer vision might enhance creativity in her contemporary dance practice and vice-versa. This research has resulted
                in collaboratively built, novel open-source software tools that push the boundaries of live performance.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={miljohnRupertoImage} alt="Portrait of Miljohn Ruperto" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Artist Talk: Miljohn
                <br />
                Ruperto
              </h2>

              <p className="news-feature-date">Apr 18, 2023</p>

              <p>
                Miljohn Ruperto is a cross-disciplinary artist working across photography, cinema, performance, and digital animation. His work refers to
                historical and anecdotal occurrences, and speculates on the nature of assumed facts and the construction of truth. Often involving replicas,
                modified versions, and enactments, Ruperto takes cultural and historical references and untethers them from their original context to
                challenge our perception and generate something altogether new. Through a richness and diversity of lenses and preferencing the obscure,
                mysterious and the magical, his work challenges fixed conceptions of truth and history, and instead speaks of an indeterminacy and
                subjectivity of experience that renders truth and fiction near indistinguishable.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={dorothySantosImage} alt="Portrait of Dorothy Santos" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Artist Talk: Dorothy
                <br />
                Santos
              </h2>

              <p className="news-article-date">Mar 28, 2023</p>

              <p>
                Dorothy R. Santos, Ph.D. (she/they) is a Filipino American storyteller, poet, artist, and scholar. She earned her Ph.D. in Film and Digital
                Media with a designated emphasis in Computational Media from the University of California, Santa Cruz. She is currently a Visiting Assistant
                Professor for the Everett Program for Technology and Social Change in the Department of Sociology at the University of California, Santa
                Cruz.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={agnieszkaKurantImage} alt="Portrait of Agnieszka Kurant" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Artist Talk:
                <br />
                Agnieszka Kurant
              </h2>

              <p className="news-feature-date">Feb 7, 2023</p>

              <p>
                Born in Poland and based in New York City, Kurant probes the “unknown unknowns” of knowledge and the speculations and exploits of capitalism
                by integrating elements of science and philosophy, and analyzing certain phenomena-collective intelligence, emergence, virtual capital,
                immaterial and digital labor, evolution of memes, civilizations and social movements, artificial societies, energy circuits, and the editing
                process-as political acts. She explores the hybrid and shifting status of objects in relation to value, aura, authorship, production, and
                circulation. Many of her works emulate nature and behave like living organisms, self-organized complex systems, or bachelor machines.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={jenniferRheeImage} alt="Portrait of Dr. Jennifer Rhee" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Lecture: Dr.
                <br />
                Jennifer Rhee
              </h2>

              <p className="news-article-date">Sep 29, 2022</p>

              <p>
                In her research Rhee analyzes artificial intelligence and robotics technologies in relation to race, gender, and labor. More specifically,
                she examines the different visions of humanness that shape AI technologies and bring these technologies into conversation with theorizations
                of AI in speculative fiction and art. Her scholarship and teaching are in the areas of speculative fiction studies, literature and science,
                feminist science and technology studies, critical AI studies, and ecocritical media studies.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={motherCyborgImage} alt="Portrait of Mother Cyborg with light trails" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Artist Talk: Mother
                <br />
                Cyborg
              </h2>

              <p className="news-feature-date">Sep 14, 2022</p>

              <p>
                Mother Cyborg grows out of more than twenty years as a musician, technologist, community organizer and educator. I am motivated by a vision
                of the future where the greatest possibilities for collective liberation, art and technology merge. I develop music, art, and educational
                tools to reveal the complexities that occur where technology intersects with social spaces, economies, and relationships.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={johannDiedrickImage} alt="Portrait of Johann Diedrick" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Artist Talk: Johann
                <br />
                Diedrick
              </h2>

              <p className="news-article-date">Oct 19, 2022</p>

              <p>
                Johann Diedrick is an artist, engineer, and musician that makes installations, performances, and sculptures for encountering the world
                through our ears. He surfaces vibratory histories of past interactions inscribed in material and embedded in space, peeling back sonic layers
                to reveal hidden memories and untold stories. He shares his tools and techniques through listening tours, workshops, and open-source
                hardware/software. He is the founder of A Quiet Life, a sonic engineering and research studio that designs and builds audio-related software
                and hardware products for revealing new sonic possibilities of the grid.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={marisaMoranJahnImage} alt="Portrait of Marisa Morán Jahn" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Artist Talk: Marisa
                <br />
                Moran Jahn
              </h2>

              <p className="news-feature-date">Nov 8, 2022</p>

              <p>
                An artist, filmmaker, and transmedia producer of Ecuadorian and Chinese descent, Marisa Morán Jahn’s work redistributes power,
                “exemplifying the possibilities of art as social practice” (ArtForum). Codesigned with youth, new immigrants, and working families, Jahn’s
                civic-scale projects have engaged millions both on the street and at venues such as the Museum of Modern Art, the Venice Biennale of
                Architecture, the United Nations, Tribeca Film Festival, and Obama’s White House. She has received grants and awards from National Endowment
                for the Arts, Rockefeller Foundation, Creative Capital, Open Society, Tribeca Film Institute, Anonymous Was A Woman, and more.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={moreshinAllahyariImage} alt="Moreshin Allahyari presenting during an artist talk" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Artist Talk:
                <br />
                Moreshin Allahyari
              </h2>

              <p className="news-article-date">Sep 7, 2022</p>

              <p>
                Moreshin Allahyari (Persian: موژان الهیاری) is a NY based Iranian-Kurdish artist using 3D simulation, video, sculpture, and digital
                fabrication as tools to re-figure myth and history. Through archival practices and storytelling, her work weaves together complex
                counternarratives in opposition to the lasting influence of Western technological colonialism in the context of MENA (Middle East and North
                Africa).
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={tegaBrainImage} alt="Tega Brain speaking during an artist talk" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Artist Talk: Tega
                <br />
                Brain
              </h2>

              <p className="news-feature-date">Apr 26, 2022</p>

              <p>
                Tega Brain is an Australian-born artist and environmental engineer exploring issues of ecology, data, automation, and infrastructure. She
                has created digital networks that are controlled by environmental phenomena, schemes for obfuscating personal data, and a wildly popular,
                online smell-based dating service. Through these provisional systems she investigates how technologies orchestrate and reorchestrate agency.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={ayannaDozierImage} alt="Dr. Ayanna Dozier giving a lecture" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">Dr. Ayana Dozier</h2>

              <p className="news-article-date">April 25 ,2022</p>

              <p>
                Ayanna Dozier (PhD) is a Brooklyn-based artist-writer. Her art practice centers film (both motion picture and still), performance, and
                installation work with a specific concentration on surrealist, conceptual, and feminist practices. She is the author of Janet Jackson’s The
                Velvet Rope (2020). Her films have been screened at the selected festivals; Open City Docs (2020), BlackStar (2021), Alchemy Film and
                Moving Image Festival (2021), Prismatic Ground (2022) and Aesthetic Film Festival where she was the recipient of Best Experimental in 2020
                for her film Softer.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media">
              <img className="news-feature-image" src={openHouseImage} alt="Poster for the 1st Annual FHS Open House" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                1st Annual FHS Open
                <br />
                House
              </h2>

              <p className="news-feature-date">Apr 25, 2022</p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={jeremyDennisImage} alt="Portrait of Jeremy Dennis" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Artist Talk: Jeremy
                <br />
                Dennis
              </h2>

              <p className="news-article-date">Apr 18, 2022</p>

              <p>
                Jeremy Dennis (b. 1990) is a contemporary fine art photographer, an enrolled Tribal Member of the Shinnecock Indian Nation in Southampton,
                NY, and lead artist and founder of the non-profit Ma’s House &amp; BIPOC Art Studio, Inc. on the Shinnecock Reservation. In his work, he
                explores Indigenous identity, culture, and assimilation. Jeremy was among ten recipients of a 2016 Dreamstarter Grant from the national
                non-profit organization Running Strong for American Indian Youth. He was awarded $10,000 to pursue his project, On This Site — Indigenous
                Long Island, which uses photography and an interactive online map to showcase culturally significant Native American sites on Long Island, a
                topic of special meaning for Jeremy, who was raised on the Shinnecock Nation Reservation. He also created a book and exhibition from this
                project. In 2020, Jeremy received Dreamstarter GOLD, which includes an additional $50,000.00 in support from Running Strong for American
                Indian Youth. Most recently, Jeremy received the Artist to Artist Fellowship from the Art Matter Foundation.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={peterBurrImage} alt="Peter Burr presenting during an artist talk" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Artist Talk: Peter
                <br />
                Burr
              </h2>

              <p className="news-feature-date">Apr 4, 2022</p>

              <p>
                Peter Burr is an artist from Brooklyn, NY. His practice often engages with tools of the video game industry in the form of immersive
                cinematic artworks. These pieces have been presented internationally by various institutions including the Museum of Modern Art, The Barbican
                Centre, Documenta 14, and the Whitney Museum of American Art. Previously Burr worked under the alias Hooliganship and founded the video
                label Cartune Xprez through which he produced hundreds of live multimedia exhibitions and touring programs showcasing a multi-generational
                group of artists at the forefront of experimental animation. His practice has been recognized through grants and awards including a
                Guggenheim Fellowship, a Creative Capital Grant, and a Sundance New Frontier Fellowship.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={elizabethChodosImage} alt="Portrait of Elizabeth Chodos" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Lecture: Elizabeth
                <br />
                Chodos
              </h2>

              <p className="news-article-date">Mar 28, 2022</p>

              <p>
                Elizabeth Chodos is the director of the Miller Institute for Contemporary Art at Carnegie Mellon. She joined the university in fall 2017
                from Ox-Bow, school of art and artists’ residency (Saugatuck, Michigan), where she most recently served as executive and creative director.
                To date, Chodos has focused her career on promoting the work of contemporary artists through residencies, higher education, exhibitions and
                public programming, and she hopes to continue that at Miller ICA.
              </p>
            </div>
          </div>
        </section>

        <section className="news-feature-section">
          <div className="news-feature-inner">
            <div className="news-feature-media person-square-media">
              <img className="news-feature-image person-square-image" src={miaBrownellImage} alt="Mia Brownell giving an artist talk" />
            </div>

            <div className="news-feature-copy">
              <h2 className="news-feature-title">
                Artist Talk: Mia
                <br />
                Brownell
              </h2>

              <p className="news-feature-date">Feb 22, 2022</p>

              <p>
                Mia Brownell is a New York and Connecticut based artist whose paintings use the illusionistic conventions of traditional food still-life
                painting, simultaneously referencing 17th century Dutch realism and the coiling configurations of scientific molecular imaging. The culture,
                science, and environmental issues surrounding the global industrial food complex often inspire Brownell’s sci-fi still life paintings.
              </p>
            </div>
          </div>
        </section>

        <section className="news-article-section">
          <div className="news-article-inner">
            <div className="news-article-media person-square-media">
              <img className="news-article-image person-square-image" src={mariaHupfieldImage} alt="Maria Hupfield during an artist talk session" />
            </div>

            <div className="news-article-copy">
              <h2 className="news-article-title">
                Artist Talk: Maria
                <br />
                Hupfield
              </h2>

              <p className="news-article-date">Feb 14, 2022</p>

              <p>
                Maria Hupfield is an artist and transdisciplinary maker working with Industrial felt at the intersection of performance art, design and
                sculpture; an Assistant Professor in Indigenous Performance and Digital Arts, and Canadian Research Chair in Transdisciplinary Indigenous
                Arts, Director / Lead Artist of the Indigenous Creation Studio, Department of Visual Studies / English and Drama, at the University of
                Toronto Mississauga.
              </p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function WorkshopsPage() {
  return (
    <div className="workshops-page">
      <main className="workshops-shell">
        <section className="workshops-hero">
          <div className="workshops-hero-frame">
            <img className="workshops-hero-background" src={workshopsHeaderImage} alt="Workshops interface collage" />

            <div className="workshops-hero-overlay">
              <SiteNav
                buttonHref="#/"
                buttonLabel="Home"
                links={[
                  { href: '#/about', label: 'About' },
                  { href: '#/lectures', label: 'Lectures' },
                  { href: '#/workshops', label: 'Workshops' }
                ]}
              />

              <h1 className="workshops-hero-title">Workshops</h1>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function StudioPage() {
  return (
    <div className="workshops-page">
      <main className="workshops-shell">
        <section className="workshops-hero">
          <div className="workshops-hero-frame">
            <img className="workshops-hero-background" src={workshopsHeaderImage} alt="Studio interface collage" />

            <div className="workshops-hero-overlay">
              <SiteNav
                buttonHref="#/"
                buttonLabel="Home"
                links={[
                  { href: '#/about', label: 'About' },
                  { href: '#/workshops', label: 'Workshops' },
                  { href: '#/studio', label: 'Studio' }
                ]}
              />

              <h1 className="workshops-hero-title">Studio</h1>
            </div>
          </div>
        </section>

        <section className="studio-gallery-section">
          <div className="studio-gallery-inner">
            <img className="studio-gallery-image" src={studioCollageImage} alt="Studio workspace collage" />
          </div>
        </section>

        <section className="studio-info-section">
          <div className="studio-info-inner">
            <div className="about-gradient-card studio-gradient-card">
              <div className="about-gradient-copy studio-gradient-copy">
                <p>
                  The FHS experiments with art, technology and ideas at the intersection of far-reaching technologies from oral traditions to artificial
                  intelligence and beyond. Specific research areas include, but are not limited to artificial intelligence, blockchain, robotics, and bio-art
                  inclusive of computer vision, data equity, community agreement, governance, and care. Emphasis is on art and knowledge production
                  exploring concepts, questions, and intuitions through free study, practice, craft, tinkering, collaboration and process with the aim of
                  combating techno supremacy by modeling and alternative methodologies with the potential for tangible social impact.
                </p>

                <p>
                  Technologies used in the studio include fast GPU based computer workstations for AI computation, state of the art Optitrack motion capture
                  system, 3d scanning, digital material cutting, 3-d printing, a variety of micro computers and sensors for the creation of interactive
                  experiences, tools for the creations of augmented and virtual reality and volumetric experiences. These equipment are optimized for
                  research in emerging technologies impacting society and technologically enabled storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="studio-capabilities-section">
          <div className="studio-capabilities-inner">
            <h2 className="studio-capabilities-title">Capabilities:</h2>

            <div className="studio-capabilities-list">
              <p>Motion Capture</p>
              <p>Volumetric Capture</p>
              <p>AI / Machine Learning</p>
              <p>3d Scanning</p>
              <p>3d Printing</p>
              <p>Laser Cutting</p>
              <p>Spatial Computing</p>
              <p>Augmented Reality</p>
              <p>Virtual Reality</p>
              <p>Physical Computing</p>
              <p>Cross-Disciplinary Thought &amp; Exploration</p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="about-page">
      <main className="about-shell">
        <section className="about-hero">
          <div className="about-hero-frame">
            <img className="about-hero-background" src={contactHeaderImage} alt="Contact page background collage" />
            <div className="about-hero-overlay">
              <SiteNav
                buttonHref="#/"
                buttonLabel="Home"
                links={[
                  { href: '#/about', label: 'About' },
                  { href: '#/studio', label: 'Studio' },
                  { href: '#/contact', label: 'Contact' }
                ]}
              />

              <h1 className="about-hero-title">Contact</h1>
            </div>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="contact-info-inner">
            <div className="contact-intro-copy">
              <p>Have a question about the studio?</p>
              <p>Want to get involved?</p>
              <p>Have a project you'd like to work on at FHS?</p>
            </div>

            <div className="about-gradient-card contact-gradient-card">
              <h2>We would love to hear from you!</h2>

              <div className="about-gradient-copy contact-gradient-copy">
                <p>
                  <strong>Email:</strong> <a href="mailto:creators@futurehistories.studio">creators@futurehistories.studio</a>
                </p>
                <p>
                  <strong>Instagram:</strong> @futurehistories.studio
                </p>
                <p>
                  <strong>Twitter:</strong> @hello_fhs
                </p>
                <p>
                  <strong>Github:</strong> @Future-Histories-Studio
                </p>
                <p>
                  <strong>Discord:</strong> <a href="#discord">Future Histories Studio</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function LearningResourcesPage() {
  return (
    <div className="about-page">
      <main className="about-shell">
        <section className="about-hero">
          <div className="about-hero-frame">
            <img className="about-hero-background" src={contactHeaderImage} alt="Learning resources page background collage" />
            <div className="about-hero-overlay">
              <SiteNav
                buttonHref="#/"
                buttonLabel="Home"
                links={[
                  { href: '#/about', label: 'About' },
                  { href: '#/contact', label: 'Contact' },
                  { href: '#/learning-resources', label: 'Learning Resources' }
                ]}
              />

              <h1 className="about-hero-title">
                Learning
                <br />
                Resources
              </h1>
            </div>
          </div>
        </section>

        <section className="learning-resources-section">
          <div className="learning-resources-inner">
            <div className="about-gradient-card learning-resources-card">
              <div className="learning-resources-copy">
                <div className="learning-resources-group">
                  <h2>Gallery for Digital Artworks</h2>
                  <p>
                    • <a href="https://daata.art/" target="_blank" rel="noreferrer">Daata.art</a>
                  </p>
                </div>

                <div className="learning-resources-group">
                  <h2>Artificial Intelligence</h2>
                  <p>
                    • <a href="https://www.elementsofai.com/" target="_blank" rel="noreferrer">Elements of AI</a> -- an online course about AI for everyone
                  </p>
                  <p>
                    • <a href="https://peopleandai.com/" target="_blank" rel="noreferrer">People&apos;s Guide to AI</a>
                  </p>
                </div>

                <div className="learning-resources-group">
                  <h2>Distributive Technologies about Blockchain</h2>
                  <p>
                    <a href="https://www.youtube.com/results?search_query=what+is+a+blockchain" target="_blank" rel="noreferrer">what is a blockchain?</a>
                  </p>
                  <p>
                    <a href="https://hackernoon.com/blockchain-a-short-and-simple-explanation-with-pictures-q26h3xak" target="_blank" rel="noreferrer">
                      blockchain-a-short-and-simple-explanation-with-pictures (Hackernoon)
                    </a>
                  </p>
                  <p>
                    <a href="https://www.youtube.com/results?search_query=consensus+decision+making" target="_blank" rel="noreferrer">
                      consensus decision making
                    </a>
                  </p>
                </div>

                <div className="learning-resources-group">
                  <p>
                    <a href="https://disco.coop/" target="_blank" rel="noreferrer">Disco Coop</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function ResiduePage() {
  return (
    <div className="about-page">
      <main className="about-shell">
        <section className="about-hero">
          <div className="about-hero-frame">
            <img className="about-hero-background" src={contactHeaderImage} alt="Residue page background collage" />
            <div className="about-hero-overlay">
              <SiteNav
                buttonHref="#/"
                buttonLabel="Home"
                links={[
                  { href: '#/about', label: 'About' },
                  { href: '#/learning-resources', label: 'Resources' },
                  { href: '#/residue', label: 'Residue' }
                ]}
              />

              <h1 className="about-hero-title">Residue</h1>
            </div>
          </div>
        </section>

        <section className="residue-info-section">
          <div className="residue-info-inner">
            <div className="about-gradient-card residue-gradient-card">
              <h2>
                <a href="#ai-bill-of-rights">A Collaborative Response to the White House&apos;s Call For contributions to an AI Bill of Rights</a>
              </h2>

              <div className="about-gradient-copy residue-gradient-copy">
                <p>
                  The White House invited interested stakeholders ( we are all stakeholders) to provide public input on a Bill of Rights to limit the harms
                  of AI, specifically on the topic of facial recognition and other biometric tools used to identify people or assess their emotions or mental
                  states and character. The Future Histories Studio took up the call, inviting various constituents from the SBU campus, DISCO, and beyond
                  to contribute to a collaborative response written from a people&apos;s point of view, grounded in ideas of community care and thriving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState<Route>(() => getRouteFromHash());

  useEffect(() => {
    const syncRoute = () => setRoute(getRouteFromHash());

    window.addEventListener('hashchange', syncRoute);
    syncRoute();

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  let page = <HomePage />;

  if (route === 'about') {
    page = <AboutPage />;
  } else if (route === 'fellows') {
    page = <FellowsPage />;
  } else if (route === 'people') {
    page = <PeoplePage />;
  } else if (route === 'news') {
    page = <NewsPage />;
  } else if (route === 'lectures') {
    page = <LecturesPage />;
  } else if (route === 'workshops') {
    page = <WorkshopsPage />;
  } else if (route === 'studio') {
    page = <StudioPage />;
  } else if (route === 'contact') {
    page = <ContactPage />;
  } else if (route === 'learning-resources') {
    page = <LearningResourcesPage />;
  } else if (route === 'residue') {
    page = <ResiduePage />;
  }

  return (
    <>
      {page}
      <ElevenLabsChatbot />
    </>
  );
}

export default App;
