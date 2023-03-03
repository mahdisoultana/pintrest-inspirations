import { v4 } from 'uuid';

import netflixVideo from '../projects/netflix/assets/Netflix demo animation.mp4';
import netflixSrc from '../projects/netflix/assets/netflix-img.jpg';
// -----------------------

import splitPageSrc from '../projects/split-page/assets/freelancer vs officier.jpeg';
import splitPageVideo from '../projects/split-page/assets/freelancer vs officier.mp4';
// -----------------------
import { HomeCardType } from './types';

// ------------------------

export const HomeCardsData: HomeCardType[] = [
  {
    id: v4(),
    img: netflixSrc,
    video: netflixVideo,
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
  {
    id: v4(),
    img: splitPageSrc,
    video: splitPageVideo,
    github:
      'https://github.com/Mahdi-Soultana/pintrest-inspirations/tree/master/src/projects/split-page',
    dribble:
      'https://dribbble.com/shots/20813856-Freelancer-Vs-Office-hero-by-framer-motion-gsap-React-TS',

    linkedIn:
      'https://www.linkedin.com/feed/update/urn:li:activity:7037385996702773248/',
    instagram:
      'https://www.instagram.com/reel/CpVlPi-D4G8/?utm_source=ig_web_copy_link',
    live: '/split-page',
    title: ' Freelance vs office hero page Animation   ',
  },
];
