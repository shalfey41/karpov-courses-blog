import React, { FC } from 'react';
import classNames from 'classnames';
import plural from 'plural-ru';
import themeClasses from '../../styles/theme.module.css';
import postsClasses from './posts.module.css';
import { ArticlePreview } from '../ArticlePreview/ArticlePreview';
import { IArticlePreview } from '../../types/ArticlePreview';

interface Props {
  articles: IArticlePreview[];
}

export const Posts: FC<Props> = ({ articles }) => {
  return (
    <section>
      <header className={postsClasses.header}>
        <h1 className={classNames(themeClasses.h1, postsClasses.h1)}>
          {articles.length > 0
            ? `${plural(
                articles.length,
                '%d заметка',
                '%d заметки',
                '%d заметок',
              )} Димы Безуглого`
            : 'Нет заметок'}
        </h1>
      </header>

      {Boolean(articles.length) && (
        <div className={postsClasses.list}>
          {articles.map(({ title, text, slug }) => (
            <ArticlePreview key={slug} title={title} text={text} slug={slug} />
          ))}
        </div>
      )}
    </section>
  );
};
