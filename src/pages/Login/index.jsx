import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login - Bubbly</title>
      </Helmet>

      <Layout />
    </>
  );
}
