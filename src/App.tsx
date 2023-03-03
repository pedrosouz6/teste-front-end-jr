import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Topics } from './components/Topics';
import { RelatedProducts } from './components/RelatedProducts';
import { Partners } from './components/Partners';
import { SeeAll } from './components/SeeAll';
import { Products } from './components/Products';
import { Brand } from './components/Brand';

import '../src/styles/css/global.css';

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <Topics />
      <RelatedProducts />
      <Partners />
      <SeeAll />
      <Products />
      <Brand />
    </main>
  );
}

export default App;
