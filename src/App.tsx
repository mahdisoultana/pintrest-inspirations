import Card from './component/commun/Card';
import Layout from './component/layout/Layout';
import { HomeCardsData } from './context/data';
function App() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-12 gap-5 m-auto max-w-[1200px] py-12 px-4">
        {HomeCardsData.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </Layout>
  );
}
export default App;
