import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {

  const styles = 'inline-block bg-yellow-400 text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5';

  if (to)
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles}>
      {children}
    </button>
  );
}

export default Button;
