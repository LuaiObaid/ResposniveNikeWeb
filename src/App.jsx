import { CustomerReview, Footer, Hero, Nav, PopularProducts, Services, SpecialOffer, Subscribers, SuperQuality } from "./sections";
const App = () => (
  <main className="relative">
    <Nav/>    
    <section className="xl:sm:px-16 xl:px-8 xl:sm:py-24 xl:py-12 wide:sm:pl-16 wide:pl-8 sm:pb-24 pb-12">
      <Hero/>
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <PopularProducts/>
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SuperQuality/>
    </section>
    <section className="sm:px-16 px-8 py-10">
      <Services/>
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue sm:px-16 px-8 sm:py-24 py-12">
      <CustomerReview/>
    </section>
    <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
      <Subscribers/>
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12 bg-black">
      <Footer/>
    </section>
  </main>
);

export default App;
