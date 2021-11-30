/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'C Programming',
    title: 'C Programming',
    text:
      'I have completed my C programming from unschool online platform',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Web Development',
    title: 'Web Development',
    text:
      'I have completed my web development course from unschool and udemy',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Internet of things',
    title: 'Internet of things',
    text:
      'I have completed my Internet of things course from Bolt iot platform',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Machine learning',
    title: 'Machine learning',
    text:
      'I am learning machine learning from Bolt and udemy platforms',
  },
];

export default function Feature() {
  return (
   <section sx={{variant :'section.feature'}}>
     <Container>
       <SectionHeader
         title="Courses From"
         
       />

       <Grid sx={styles.grid}>
         {data.map((item) => ( 
           <FeatureCard 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
           
           />


         ))}

       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
