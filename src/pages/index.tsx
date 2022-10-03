import { DefaultLayout } from '../layouts/DefaultLayout';
import { GlobalMain } from '../styles/default';
import { NextPageWithLayout } from './_app';


const Home: NextPageWithLayout = () => {
  return (
    <GlobalMain>
      Oie
    </GlobalMain>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
}

export default Home
