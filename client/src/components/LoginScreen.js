import React from 'react';

const LoginScreen = () => {
  return (
    <div>
      <h2>
        <a className="button is-link" href="/auth/google">
          Login with Google
        </a>
      </h2>
      <h2>
        <a className="button is-link" href="/auth/reddit">
          Login with Reddit
        </a>
      </h2>
    </div>
  );
};
export default LoginScreen;
