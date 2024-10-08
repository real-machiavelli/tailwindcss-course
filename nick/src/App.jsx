import { Hero, PopulerProduct, SuperQaility, Services, SpacialOffer,  CustomerReviews, Subcribe, Footer } from './sections'
import Nav from './components/Nav';


const App = () => (
  <main className="relative">
      <Nav /> 
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopulerProduct />
    </section>
    <section className="padding">
      <SuperQaility />
    </section>
    <section className="padding-x py-10">
       <Services />
    </section>
    <section className="padding">
      <SpacialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subcribe /> 
    </section>
    <section className="bg-black padding-t padding-x pb-8">
      <Footer />
    </section>
  </main>

);

export default App;