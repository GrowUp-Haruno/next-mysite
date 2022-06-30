import Image from 'next/image';
import { FC } from 'react';

export const h1: FC<{ children?: JSX.Element }> = (props) => <h1>{props.children}</h1>;
export const h2: FC<{ children?: JSX.Element }> = (props) => <h2>{props.children}</h2>;
export const h3: FC<{ children?: JSX.Element }> = (props) => <h3>{props.children}</h3>;
export const h4: FC<{ children?: JSX.Element }> = (props) => <h4>{props.children}</h4>;
export const h5: FC<{ children?: JSX.Element }> = (props) => <h5>{props.children}</h5>;
export const p: FC<{ children?: JSX.Element }> = (props) => <p>{props.children}</p>;
export const ul: FC<{ children?: JSX.Element }> = (props) => <ul>{props.children}</ul>;
export const li: FC<{ children?: JSX.Element }> = (props) => <li>{props.children}</li>;
export const strong: FC<{ children?: JSX.Element }> = (props) => <strong>{props.children}</strong>;
export const a: FC<{
  children?: JSX.Element;
  anchorAttr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}> = (props) => <a href={props.anchorAttr?.href}>{props.children}</a>;
export const img: FC<{ imgAttr?: React.ImgHTMLAttributes<HTMLImageElement> }> = (props) => {
  return <Image src={props.imgAttr?.src!} alt="" width={360} height={189} />;
};
