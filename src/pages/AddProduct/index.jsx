import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function AddProduct() {
  return (
    <>
      <Helmet>
        <title>Add Product - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
