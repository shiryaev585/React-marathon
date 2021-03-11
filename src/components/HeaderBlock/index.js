import classes from"./style.module.css";

const HeaderBlock = ({title, hideBg = false}) => {
  return (
    <div>
      <div>
        <h1 className={classes.header}>{title}</h1>
        <p>Simple Triple Triad Card Game</p>
      </div>
    </div>
  );
};

export default HeaderBlock;