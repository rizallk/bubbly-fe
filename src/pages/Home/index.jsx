import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
