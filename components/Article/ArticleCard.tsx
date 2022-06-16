import { NextPage } from 'next';
import Image from 'next/image';
import style from './ArticleCard.module.scss';

type propsType = {
  eyecatchUrl: string | undefined;
  updatedAt: string;
  mainTitle: string;
  seriesTitle: string | undefined;
  categoryName: string;
};

export const ArticleCard: NextPage<{}> = (props) => {
  return (
    <article className={style.articleCard}>
      <div>

      </div>
      {/* <div>
        <Image src="/images/thumbnail01.jpg" alt="サムネイル１" layout="fill" objectFit="contain" />
      </div> */}
      <div>
        <p>
          <time dateTime="2022-06-15T02:32:47.000Z">2022.06.15[Wed]</time>
        </p>
        <h3>シリーズタイトル</h3>
        <h2>Shopify アプリ開発(GraphQL準備編)</h2>
        <div>
          <span>React</span>
          <span>Next.js</span>
        </div>
      </div>
    </article>
  );
};
