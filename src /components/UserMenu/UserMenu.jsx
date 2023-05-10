
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { logOut } from 'redux/auth/auth-services';
import { useAuth } from 'hook/useAuthHook';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div >
      <p >Welcome, {user.name}</p>
      <Button variant="contained" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};