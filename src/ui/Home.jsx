import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser'
import Button from './Button';
function Home() {
  const username = useSelector(state => state.user.username);
  return (
    <div className='my-10 text-center'>
      <h1 className="text-center text-xl font-semibold mb-8 md:text-3xl px-4">
        The best pizza.
        <br />
        <span className="text-yellow-500"  >
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? <CreateUser /> : 
      <Button type="primary" to = "/menu">
        Continue Ordering, {username}
      </Button>
}
    </div>
  );
}

export default Home;
