import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function ProductDetail() {
  return (
    <>
      <Helmet>
        <title>Product Detail - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
