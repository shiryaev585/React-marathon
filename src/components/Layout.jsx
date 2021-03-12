import classes from "./Layout.module.css";

const Layout = (props) => {
  const LayoutStyles = {
    backgroundColor: props.colorBg,
    backgroundImage: `url(${props.UrlBg})`,
  };

  return (
    <section style={LayoutStyles} className={classes.root}>
      <div className={classes.wrapper}>
        <article>
          <div className={classes.title}>
            <h3>{props.title}</h3>
            <span className={classes.separator}></span>
          </div>
          <div className={`${classes.desc} ${classes.full}`}>
            <p>{props.descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
