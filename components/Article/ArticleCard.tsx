import { NextPage } from 'next';
import Image from 'next/image';
import { formatDate } from '../../libs/formatDate';
import { categoryType, eyecatchType } from '../../models/microcms';
import style from './ArticleCard.module.scss';

type propsType = {
  createdAt: string;
  updatedAt: string;
  mainTitle: string;
  subTitle: string | undefined;
  eyecatchUrl: eyecatchType;
  categories: Array<categoryType>;
};

export const ArticleCard: NextPage<propsType> = (props) => {
  const createDate = formatDate(new Date(props.createdAt));
  // const updateDate = formatDate(new Date(props.updatedAt))

  return (
    <article className={style.articleCard}>
      <Image src="/images/thumbnail01.jpg" alt="サムネイル１" width={360} height={189} objectFit="contain" />
      <div>
        <p>
          <time dateTime={props.createdAt}>{createDate}</time>
        </p>
        <h3>{props.subTitle}</h3>
        <h2>{props.mainTitle}</h2>
        <div>
          <span>React</span>
          <span>Next.js</span>
        </div>
      </div>
    </article>
  );
};
