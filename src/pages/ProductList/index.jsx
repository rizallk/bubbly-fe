import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function ProductList() {
  return (
    <>
      <Helmet>
        <title>Product List - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
