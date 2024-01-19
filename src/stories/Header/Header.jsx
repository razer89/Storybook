import React from 'react';
import PropTypes from 'prop-types';
import { LinkButton } from '../Button/Button.stories';
import { Button } from '../Button/Button';
import './header.less';

const logoUrl = 'https://i.postimg.cc/JhwH6LXV/Whats-App-Image-2023-11-20-at-16-19-23-96445223.jpg';

const NotificationsIcon = (
  <svg
    className="custom-icon notifications-icon"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="NotificationsRoundedIcon"
  >
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16z"></path>
  </svg>
);

const PersonIcon = (
  <svg
    className="custom-icon person-icon"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 30 30" // Increased viewBox size for more space
    data-testid="PersonRoundedIcon"
  >
    <circle cx="15" cy="15" r="14" fill="transparent" stroke="white" strokeWidth="2" />
    <path d="M15 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"></path>
  </svg>
);

const ArrowDropDownIcon = (
  <svg
    className="custom-icon arrow-dropdown-icon"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="ArrowDropDownRoundedIcon"
  >
    <path d="m8.71 11.71 2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z" transform="translate(-9 2)"></path>
  </svg>
);

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="storybook-header">
      <div>
      <img src={logoUrl} alt="Logo" min-width="140" height="40" display="flex" align-items="center"/>
      </div>
      <div className="navbar-items">
        {user ? (
          <>
            <span className="icons-itm">
            {NotificationsIcon} {PersonIcon} {ArrowDropDownIcon}
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
