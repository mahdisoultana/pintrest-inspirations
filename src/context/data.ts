import { v4 } from 'uuid';

import Netflixvideo from '../projects/netflix/assets/Netflix demo animation.mp4';
import netflixSrc from '../projects/netflix/assets/netflix-img.jpg';
import { HomeCardType } from './types';

// ------------------------

export const HomeCardsData: HomeCardType[] = [
  {
    selected: false,
    id: v4(),
    img: netflixSrc,
    video: Netflixvideo,
    dribble:
      'https://dribbble.com/shots/20747661-new-netflix-animation-with-react-typescript-gsap-framer-motion',
    github:
      'https://github.com/Mahdi-Soultana/pintrest-inspirations/tree/master/src/projects/netflix',
    linkedIn:
      'https://www.linkedin.com/feed/update/urn:li:activity:7034825580525047808/',
    instagram: 'https://www.instagram.com/p/CpCrLZsD2-3/',
    live: '/netflix',
    title: '📺 New Hero Netflix Animation   ',
  },
];
