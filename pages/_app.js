import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css';
import Layout from '@components/Layout'

import React from 'react';
React.useEffectLayout = React.useEffect

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
