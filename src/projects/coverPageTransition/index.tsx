import CopyRightFooter from '../../component/CopyRightFooter';
import CardsList from './CardsList';
import DetailsCard from './DetailsCard';

function CoverPageTransition() {
  return (
    <section className="p-10 w-full min-h-screen bg-gradient-to-b from-black/30 to-gray-900/30">
      <CardsList />
      <DetailsCard />
      <CopyRightFooter
        imageSourceLink="https://unsplash.com/"
        imageSource="unsplash"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 text-yellow-700 font-semibold"
      />
    </section>
  );
}

export default CoverPageTransition;
