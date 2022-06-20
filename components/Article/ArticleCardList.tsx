import { NextPage } from 'next';
import { contentsType, microcmsDataType } from '../../models/microcms';
import { ArticleCard } from './ArticleCard';
import style from './ArticleCardList.module.scss';

export const ArticleCardList: NextPage<{ blogContents: Array<contentsType> }> = ({ blogContents }) => {
  return (
    <section>
      <ul className={style.ArticleCardList}>
        {blogContents.map((contents) => (
          <li key={contents.id}>
            <ArticleCard contents={contents} />
          </li>
        ))}
      </ul>
    </section>
  );
};
