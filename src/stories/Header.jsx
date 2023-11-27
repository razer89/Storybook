import React from 'react';
import PropTypes from 'prop-types';
import { LinkButton } from './Button.stories';
import { Button } from './Button';
import './header.css';

const logoUrl = 'https://i.postimg.cc/JhwH6LXV/Whats-App-Image-2023-11-20-at-16-19-23-96445223.jpg';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="storybook-header">
      <div>
      <img src={logoUrl} alt="Logo" min-width="140" height="40" display="flex" align-items="center"/>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <LinkButton className="headerlinks" size="small" onClick={onLogout} label="Sign Out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
