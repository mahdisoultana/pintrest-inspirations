import { motion } from 'framer-motion';
import { v4 } from 'uuid';
import Card from './Card';
import { CardType } from './types';

function CardsList() {
  const items: Array<CardType> = [
    {
      id: v4(),
      title: 'ALEX MOULDER',
      text: 'I AM ONLY WAITING FOR LOVE TO GIVE MYSELF UP AT LAST INTO HIS HANDS. THAT IS WHY IT IS SO LATE AND WHY I HAVE BEEN GUILTY OF SUCH OMISSIONS.',
      year: '2022',
      src: '/fashion/1.jpg',
    },
    {
      id: v4(),
      title: 'ARIA BENNETT',
      text: 'I AM ONLY WAITING FOR LOVE TO GIVE MYSELF UP AT LAST INTO HIS HANDS. THAT IS WHY IT IS SO LATE AND WHY I HAVE BEEN GUILTY OF SUCH OMISSIONS.',
      year: '2023',
      src: '/fashion/2.jpg',
    },
    {
      id: v4(),
      title: 'ALEX MOULDER',
      text: 'I AM ONLY WAITING FOR LOVE TO GIVE MYSELF UP AT LAST INTO HIS HANDS. THAT IS WHY IT IS SO LATE AND WHY I HAVE BEEN GUILTY OF SUCH OMISSIONS.',
      year: '2020',
      src: '/fashion/3.jpg',
    },
  ];
  return (
    <div className="font-Nunito grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center place-items-center gap-8 lg:gap-20 text-sm text-gray-800 max-w-[1150px] m-auto ">
      {items.map((item, i) => (
        <motion.div
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.6, duration: 0.6 } },
          }}
          custom={i}
          initial="initial"
          animate="animate"
        >
          <Card {...item} key={i} />
        </motion.div>
      ))}
    </div>
  );
}
export default CardsList;
