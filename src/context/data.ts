import { v4 } from 'uuid';

import Netflixvideo from '../netflix/assets/Netflix demo animation.mp4';
import netflixSrc from '../netflix/assets/netflix-img.jpg';
import { HomeCardType } from './types';

// ------------------------

export const HomeCardsData: HomeCardType[] = [
  {
    id: v4(),
    img: netflixSrc,
    video: Netflixvideo,
    dribble:
      'https://dribbble.com/shots/20747661-new-netflix-animation-with-react-typescript-gsap-framer-motion',
    github:
      'https://github.com/Mahdi-Soultana/pintrest-inspirations/tree/master/src/netflix',
    linkedIn:
      'https://www.linkedin.com/feed/update/urn:li:activity:7034825580525047808/',
    instagram: 'https://www.instagram.com/p/CpCrLZsD2-3/',
    live: '/netflix',
    title: 'Hero Netflix Animation ',
  },
  {
    id: v4(),
    img: netflixSrc,
    video: Netflixvideo,
    dribble:
      'https://dribbble.com/shots/20747661-new-netflix-animation-with-react-typescript-gsap-framer-motion',
    github:
      'https://github.com/Mahdi-Soultana/pintrest-inspirations/tree/master/src/netflix',
    linkedIn:
      'https://www.linkedin.com/feed/update/urn:li:activity:7034825580525047808/',
    instagram: 'https://www.instagram.com/p/CpCrLZsD2-3/',
    live: '/netflix',
    title: 'Hero Netflix Animation ',
  },
  {
    id: v4(),
    img: netflixSrc,
    video: Netflixvideo,
    dribble:
      'https://dribbble.com/shots/20747661-new-netflix-animation-with-react-typescript-gsap-framer-motion',
    github:
      'https://github.com/Mahdi-Soultana/pintrest-inspirations/tree/master/src/netflix',
    linkedIn:
      'https://www.linkedin.com/feed/update/urn:li:activity:7034825580525047808/',
    instagram: 'https://www.instagram.com/p/CpCrLZsD2-3/',
    live: '/netflix',
    title: 'Hero Netflix Animation ',
  },
];
