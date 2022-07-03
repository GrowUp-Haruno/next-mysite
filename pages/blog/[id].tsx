import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { client, dummyMicrocmsData } from '../../libs/client';
import { contentsType, microcmsDataType } from '../../models/microcms';
import { stringHtmlToJsxElement } from '../../libs/stringHtmlToJsxElement';

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const blog = stringHtmlToJsxElement(props?.blog.content);

  return (
    <main>
      <h1>{props.blog.mainTitle}</h1>
      <p>{props?.blog.createdAt}</p>
      {blog}
    </main>
  );
};
export default Blog;

// 静的生成のためのパスを指定
export async function getStaticPaths() {
  const data = await client.get<microcmsDataType>({ endpoint: 'blogs' });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
}

// データをテンプレートに受け渡す部分の処理を記述
export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string }>) {
  const blog = params && (await client.get<contentsType>({ endpoint: 'blogs', contentId: params.id }));
  if (!blog)
    return {
      notFound: true,
      props: {
        blog: dummyMicrocmsData,
      },
    };
  return {
    props: {
      blog,
    },
  };
}
