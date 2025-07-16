import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Monitoring Kesehatan Real-time',
    Svg: require('@site/static/img/undraw_data-trends_kv5v.svg').default,
    description: (
      <>
        Pantau data kesehatan ibu hamil secara langsung dari perangkat BLE, termasuk BPM dan status kesehatan.
      </>
    ),
  },
  {
    title: 'Riwayat & Berbagi Data',
    Svg: require('@site/static/img/undraw_online-collaboration_xon8.svg').default,
    description: (
      <>
        Lihat riwayat hasil monitoring dan bagikan data ke dokter dengan mudah melalui fitur share terintegrasi.
      </>
    ),
  },
  {
    title: 'Notifikasi & Integrasi API',
    Svg: require('@site/static/img/undraw_my-notifications_fy5v.svg').default,
    description: (
      <>
        Dapatkan notifikasi otomatis dan integrasi REST API untuk komunikasi data yang aman dan efisien.
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
