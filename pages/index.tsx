import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleCard } from '../components/Article/ArticleCard';
import { ArticleCardList } from '../components/Article/ArticleCardList';
import { Header } from '../components/Header/Header';
import { client } from '../libs/client';
import { microcmsDataType } from '../models/microcms';

const Home: NextPage<{ blogs: microcmsDataType }> = ({ blogs }) => {
  console.log(blogs);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <main>
        <ArticleCardList />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const blogs = await client.get({
    endpoint: 'blogs',
  });

  return {
    props: {
      blogs,
    },
  };
};

export default Home;
