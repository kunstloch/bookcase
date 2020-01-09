import Head from 'next/head';
import Header from './Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Palanquin', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: #18181A;
    color: #fff;
  }
`;

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>database of read books - BookCase</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta charset="utf-8"></meta>
        <link
          href="https://fonts.googleapis.com/css?family=Palanquin:300,400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <Header />

      {children}
    </>
  );
}

export default Layout;
