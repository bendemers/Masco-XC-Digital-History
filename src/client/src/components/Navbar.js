import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../common/Colors';
import { AuthContext } from '../context';

const NavBarItems = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

function Navbar() {
  const auth = useContext(AuthContext);
  const history = useHistory();

  async function handleLogout() {
    await auth.logout();
  }

  return (
    <nav className="navbar" style={{ background: '#E32636' }}>
      <div className="container">
        <div className="navbar-brand">
          <a
            style={{ color: '#F0EAD6' }}
            href="/"
            className="navbar-item title is-4"
          >
            Masco XC Digital History
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {auth.isAuthenticated ? (
              <NavBarItems
                className="navbar-item"
                onClick={() => handleLogout()}
              >
                Logout
              </NavBarItems>
            ) : (
              <>
                <Link
                  to="/login"
                  className="navbar-item"
                  style={{ color: '#F0EAD6' }}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
