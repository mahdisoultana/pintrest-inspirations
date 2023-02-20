import { motion } from 'framer-motion';
import { MdOutlineArrowBack } from 'react-icons/md';
import { data, itemfound } from '../App';
import { usePageId } from './context/RouteProvider';
export const mainVar = (duration: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration } },
  exit: { opacity: 0, y: -30 },
});
function SinglePage() {
  const { setId, id } = usePageId();
  return (
    <motion.div
      layoutId={id}
      className="h-full w-[1100px] pr-4 fixed top-[18vh] left-[250px] z-[100]   "
    >
      <motion.div className="h-[74vh] w-full relative overflow-hidden shadow-sm shadow-black/40 p-12 rounded-md  ">
        <motion.img
          className="w-full h-full block object-cover  object-center  absolute top-0 left-0"
          src={data[itemfound(id)]?.img}
        />
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
          className="relative  text-5xl font-bold tracking-tight"
        >
          {data[itemfound(id)]?.title || "It's awesome to see everything here"}
        </motion.h1>
      </motion.div>
      <BackButton setId={setId} />
    </motion.div>
  );
}
function BackButton({ setId }: { setId: (id: string) => void }) {
  return (
    <p
      className=" pt-2 pb-5  italic flex items-center space-x-2  font-medium cursor-pointer"
      onClick={() => setId('sdsd')}
    >
      <MdOutlineArrowBack /> <span>back</span>
    </p>
  );
}
export default SinglePage;
