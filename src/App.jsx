import BannerContent from './components/Banner/BannerContent';
import BannerHeader from './components/Banner/BannerHeader';
import BackHome from './components/Core/BackHome';
import Footer from './components/Core/Footer';
import Header from './components/Core/Header';
import JobContent from './components/Job/JobContent';
import JobHeader from './components/Job/JobHeader';
import Customer from './components/Others/Customer';
import Partner from './components/Others/Partner';
import Search from './components/Search';
import ListSuggest from './components/Suggest/ListSuggest';

function App() {

  return (
    <>
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <BannerHeader></BannerHeader>
      {/* Form search */}
      <Search></Search>
      {/* List suggest */}
      <ListSuggest></ListSuggest>
      {/* List Jobs */}
      <JobHeader></JobHeader>
      <JobContent></JobContent>
      {/* Customer && Partner */}
      <Customer></Customer>
      <Partner></Partner>
      {/* Footer */}
      <Footer></Footer>
      <BackHome></BackHome>
    </>
  )
}

export default App
