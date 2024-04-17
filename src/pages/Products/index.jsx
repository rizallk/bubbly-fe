import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function Products() {
  return (
    <>
      <Helmet>
        <title>All Product - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
