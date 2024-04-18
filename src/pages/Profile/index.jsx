import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
