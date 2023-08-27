import css from "/css/style.module.css";
import staticData from "/static.data.json";

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await staticData.menu;

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      menu: data
    }
  }
}

const Header = () => {
  return (
    <header>
      <div className={ css.burger }>
        <div className={ [css.burger_line, css.burger_frstline].join(' ') }></div>
      </div>
      <div className={ css.hedaer_menu }>
        {
          staticData.menu.map((el) => (
            <a href={ el.link }>{ el.name }</a>
          ))
        }
      </div>

      {/* {
        menu.map(({ name, link }) => (
          <div>{ name }</div>
        ))
      } */}

    </header>
  );
}

export default Header;