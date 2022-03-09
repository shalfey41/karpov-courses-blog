import React from 'react';
import type { NextPage } from 'next';
import { Posts } from '../components/Posts/Posts';
import { IArticlePreview } from '../types/ArticlePreview';

interface Props {
  articles: IArticlePreview[];
}

const Home: NextPage<Props> = ({ articles }) => {
  return <Posts articles={articles} />;
};

export async function getStaticProps() {
  return {
    props: {
      articles: [
        {
          title: 'Когда времени на раскачку нет',
          text: '12 января 2022',
          slug: 'my-page',
        },
        {
          title: 'Удаленка vs работа в офисе',
          text: '23 июня 2021',
          slug: 'my-page2',
        },
        {
          title: 'Как быстро запускать проекты',
          text: '19 мая 2021',
          slug: 'my-page3',
        },
      ],
    },
  };
}

export default Home;
