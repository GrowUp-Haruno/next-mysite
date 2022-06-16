import { ArticleCard } from './ArticleCard';
import style from './ArticleCardList.module.scss';

export const ArticleCardList = () => {
  return (
    <section>
      <ul className={style.ArticleCardList}>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
      </ul>
    </section>
  );
};
