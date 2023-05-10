import CardsList from './CardsList';
import DetailsCard from './DetailsCard';

function CoverPageTransition() {
  return (
    <section className="p-10 w-full min-h-screen bg-gradient-to-b from-black/30 to-gray-900/30">
      <CardsList />
      <DetailsCard />
    </section>
  );
}

export default CoverPageTransition;
