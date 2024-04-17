import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function Shop() {
  return (
    <>
      <Helmet>
        <title>Shop - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
