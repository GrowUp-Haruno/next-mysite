import { NextPage } from 'next';
import Image from 'next/image';
import { formatDate } from '../../libs/formatDate';
import { contentsType } from '../../models/microcms';
import style from './ArticleCard.module.scss';

export const ArticleCard: NextPage<{ contents: contentsType }> = (props) => {
  const createDate = formatDate(new Date(props.contents.createdAt));
  const updateDate = formatDate(new Date(props.contents.updatedAt));

  return (
    <article className={style.articleCard}>
      <Image src={props.contents.eyecatch.url} alt="サムネイル１" width={360} height={189} objectFit="contain" />
      <div>
        <h3>{props.contents.subTitle}</h3>
        <h2>{props.contents.mainTitle}</h2>
        <p>
          <time dateTime={props.contents.createdAt}>
            <Image src="/icons/filePenSolid.svg" width={12} height={12} alt="作成日時" />
            {createDate}
          </time>

          <time dateTime={props.contents.updatedAt}>
            <Image src="/icons/arrowsRotateSolid.svg" width={12} height={12} alt="更新日時" />
            {updateDate}
          </time>
        </p>
        <div>
          <ul>
            {props.contents.categories.map((category) => (
              <li key={category.id}>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
