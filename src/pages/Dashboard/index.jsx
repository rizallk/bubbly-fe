import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
