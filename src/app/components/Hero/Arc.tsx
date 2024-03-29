import classes from './Arc.module.scss';

export default function Arc() {
  return (
    <main className="container mx-auto mt-16 flex justify-center pt-10 relative">
      <div className={`${classes.ellipse} ${classes.first}`}></div>
      <div className={`${classes.ellipse} ${classes.second}`}></div>
      <div className={`${classes.ellipse} ${classes.third}`}></div>
      <div className={classes.shadow}></div>
      <div className={`${classes.ellipse} ${classes.fourth}`}></div>
    </main>
  );
}
