import Main from '../components/main';
import Head from 'next/head'
import Footer from '../components/footer';
import Header from '../components/header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
</div>
  );
}
