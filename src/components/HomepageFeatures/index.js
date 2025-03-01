import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const FeatureList = [
  {
    title: 'Technology',
    Svg: require('@site/static/img/technology.svg').default,
    description: (
      <>
        Information technology topics are part of my knowledge path, that will be documented here on the site
      </>
    ),
  },
  {
    title: 'Productivity',
    Svg: require('@site/static/img/productivity.svg').default,
    description: (
      <>
        Texts and information about productivity is consumed frequently by me, that will also added.
      </>
    ),
  },
  {
    title: 'Philosophy and thinking',
    Svg: require('@site/static/img/philosophy.svg').default,
    description: (
      <>
        I also like to think and reflect, so here I will share reading abstracts and texts
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

Feature.propTypes = {
  Svg: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
