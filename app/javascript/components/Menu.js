import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { FaSignOutAlt, FaBook, FaStopwatch } from "react-icons/fa";
import { logout } from '../actions';
import Storage from '../helpers/Storage';

function Menu({ isLogged, logout }) {
  const { pathname } = useLocation();
  return !isLogged ? '' : (
    <nav className="footer">
      <ul>
        <li className={pathname === '/' || pathname.match(/home/) ? 'active' : ''}>
          <Link to="/">
            <FaSignOutAlt />
            <span>Home</span>
          </Link>
        </li>
        <li className={pathname === '/courses' ? 'active' : ''}>
          <Link to="/courses">
            <FaBook />
            <span>Subjects</span>
          </Link>
        </li>
        <li className={pathname === '/measurements/new' ? 'active' : ''}>
          <Link to="/measurements/new">
            <FaStopwatch />
            <span>+ Measure</span>
          </Link>
        </li>
        <li>
          <a
            href="/logout"
            onClick={e => {
              e.preventDefault();
              Storage.setToken('');
              logout();
            }}
          >
            <FaSignOutAlt />
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ isLogged: state.auth.isLogged });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));