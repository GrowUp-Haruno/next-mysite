import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <div>Logo</div>
        <ul>
          <li>
            <p>blog</p>
          </li>
        </ul>
      </div>
    </header>
  );
};
