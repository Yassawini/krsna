/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'C Programmin',
    title: ' C programming ',
    text:
      'C programmer at the intermediate stage ',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Web development',
    title: 'Web development',
    text:
      'Looking for the best jobs as an web developer',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Internet of things',
    title: 'Internet of things',
    text:
      'I have a good experience in building projects using Iot',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'ML',
    title: 'Machine Learning',
    text:
      ' I am a beginner in the field of Machine Learning ',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{variant:'section.keyFeature' }}id="feature">
       <Container>
         <SectionHeader
         slogan="Whats next!!!"
         title=" My Skills"
         />
         <Grid sx={styles.grid}>
           {
             data.map((item) => (
               <FeatureCardColumn
               key={item.id}
               src={item.imgSrc}
               alt={item.altText}
               title={item.title}
               text={item.text}
               
               />
             ))
           }

         </Grid>
       </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
