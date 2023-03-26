import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startLogout } from '../store/auth';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(startLogout());
          navigate('/auth/login');
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Home;
