
import React from 'react';
import '../styles/globals.css'

import { Layout } from '../../components';

function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default App