import Card from './component/commun/Card';
import Layout from './component/layout/Layout';
import { HomeCardsData } from './context/data';
function App() {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-y-12 gap-5 m-auto w-[1200px] py-12">
        {HomeCardsData.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </Layout>
  );
}
export default App;
