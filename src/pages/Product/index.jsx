import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function Product() {
  return (
    <>
      <Helmet>
        <title>Product - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
