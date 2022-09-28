import type { NextPage } from 'next'
import { Navigation } from '../components/Navigation';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { NextPageWithLayout } from './_app';


const Home: NextPageWithLayout = () => {
  return (
    <div>
      Teste Maneiro
    </div>
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
