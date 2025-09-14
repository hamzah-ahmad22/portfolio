import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
<header className={clsx('hero hero--primary', styles.heroBanner)}>
  <div className={clsx('container', styles.narrow, styles.heroInner)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title || 'Hamzah Ahmad | Technical Writer'}
        </Heading>

        <p className={clsx('hero__subtitle', styles.subtitle)}>
          I’m a Content Lead at YuJa, where I plan, write, and maintain customer-facing documentation for thousands of users in higher education.
          I focus on digital accessibility, online proctoring, and video streaming and cloud hosting SaaS products.
        </p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro" aria-label="View Portfolio">
            My Projects
          </Link>
         <Link className="button button--secondary button--lg" to="/resume">
  Resume
</Link>

          <Link className="button button--secondary button--lg" to="/contact" aria-label="Contact Hamzah">
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title ? `${siteConfig.title}` : 'Hamzah Ahmad | Technical Writer'}
      description="Portfolio of technical writing, documentation, and UX content."
    >
      <HomepageHeader />
      {/* Optional: keep or remove the features section below */}
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
