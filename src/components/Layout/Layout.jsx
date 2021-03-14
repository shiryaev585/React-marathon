import classes from "./Layout.module.css";

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  const LayoutStyles = {};

  if (urlBg) {
    LayoutStyles.backgroundImage = `url(${urlBg})`;
  }

  if (colorBg) {
    LayoutStyles.backgroundColor = colorBg;
  }

  return (
    <section 
      id={id} 
      style={LayoutStyles} 
      className={classes.root}
    >
      <div className={classes.wrapper}>
        <article>
          <div className={classes.title}>
            <h3>{title}</h3>
            <span className={classes.separator}></span>
          </div>
          <div className={`${classes.desc} ${classes.full}`}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
