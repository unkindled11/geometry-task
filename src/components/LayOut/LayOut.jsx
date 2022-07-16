import { Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import MainContainer from 'shared/components/MainContainer';
import SideContainer from 'shared/components/SideContainer';
import Searchbar from 'components/SearchBar/SearchBar';
const LayOut = () => {
  return (
    <MainContainer>
      <Sidebar />
      <SideContainer>
        <Searchbar />
        <Outlet />
        <section>
          <Footer />
        </section>
      </SideContainer>
    </MainContainer>
  );
};

export default LayOut;
