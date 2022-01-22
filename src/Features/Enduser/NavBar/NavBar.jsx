import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { useLocation, useParams } from 'react-router-dom';
import { Navbar as BootstrapNavBar, Image, Dropdown } from 'react-bootstrap';
import { matchPath } from 'react-router';
import logo from '../../../assets/streetteam_logo.png';
import { Icon } from '../../../Components/UI/Icon';

const signOut = () => {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  window.location.reload(false);
};

const NAVBAR_ITEMS = [
  {
    label: 'Your Profile',
    href: '/profile',
    showItem: true,
  },
  {
    label: 'Earn Points',
    href: '/',
    showItem: true,
  },
  {
    label: 'Rankings',
    href: '/ranking',
    showItem: true,
  },
  {
    label: 'Rewards',
    href: '/rewards',
    // target: '_blank',
    showItem: true,
  },
  {
    label: 'Logout',
    onClick: signOut,
    showItem: true,
  },
];

const DropdownMenu = styled.div({
  a: {
    color: ({ theme }) => theme.colors.white,
    padding: '15px',
    '&:hover': {
      background: ({ theme }) => theme.colors.primary,
      color: ({ theme }) => theme.colors.white,
    },
  },
  minWidth: '290px',
  width: '100%',
  borderRadius: 12,
  backgroundColor: ({ theme }) => theme.colors.gray1,
});

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    return (
      <DropdownMenu
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul style={{ margin: 0 }} className="list-unstyled">
          {children}
        </ul>
      </DropdownMenu>
    );
  }
);

CustomMenu.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.string.isRequired,
  'aria-labelledby': PropTypes.string.isRequired,
};

CustomMenu.defaultProps = {
  style: {},
};

const DropdownButton = styled.button({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textTransform: 'uppercase',
  color: ({ theme }) => theme.colors.white,
  background: ({ theme }) => theme.colors.gray2,
  fontSize: ({ theme }) => theme.fontSizes.xxl,
  fontWeight: ({ theme }) => theme.fontWeights.medium,
  borderRadius: 4,
  border: 'none',
  '&:hover': {
    background: ({ theme }) => theme.colors.gray2,
  },
});

const EnduserDropdownToggle = React.forwardRef(
  ({ onClick, onToggle, children }, ref) => (
    <DropdownButton
      type="button"
      ref={ref}
      onToggle={onToggle}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <Icon
        style={{ marginLeft: 10 }}
        name="FaCaretDown"
        size={25}
        color="white"
      />
    </DropdownButton>
  )
);

EnduserDropdownToggle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const NavBarContainer = styled(BootstrapNavBar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: ({ theme }) => theme.spacing.xl,
  paddingRight: ({ theme }) => theme.spacing.xl,
  paddingTop: ({ theme }) => theme.spacing.md,
  paddingBottom: ({ theme }) => theme.spacing.md,
  background: ({ theme }) => theme.colors.gray2,
});

const Logo = styled.img({
  width: '42px',
});

export const NavBar = ({ artistPicture }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState('');
  const location = useLocation();
  const { artist } = useParams();
  console.log('artist', artist);

  const renderNavBarItem = () => {
    return NAVBAR_ITEMS.map(item => {
      console.log('item', item);

      const match = matchPath(location.pathname, {
        path: `/secure/${artist}${item.href}`,
        exact: true,
      });
      if (match && !activeTitle) {
        setActiveTitle(item.label);
      }

      if (item.showItem) {
        return (
          <Dropdown.Item
            {...(item?.href && { href: `/secure/${artist}${item.href}` })}
            onClick={() => {
              if (item.onClick) {
                item.onClick();
              }
            }}
            active={match}
          >
            {item.label}
          </Dropdown.Item>
        );
      }
      return null;
    });
  };

  return (
    <NavBarContainer>
      <BootstrapNavBar.Brand>
        <Logo src={logo} alt="Modern Musician Logo" />
      </BootstrapNavBar.Brand>

      <Dropdown onToggle={open => setIsOpen(open)} flip drop="down">
        <Dropdown.Toggle
          as={EnduserDropdownToggle}
          isOpen={isOpen}
          id="dropdown-custom-components"
        >
          {activeTitle}
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu} align="right" style={{ top: '60px' }}>
          {renderNavBarItem()}
        </Dropdown.Menu>
      </Dropdown>

      {artistPicture ? (
        <Image
          src={artistPicture}
          roundedCircle
          style={{ width: 52, height: 52 }}
        />
      ) : (
        <Icon style={{ marginLeft: 10 }} name="FaUserCircle" color="gray" />
      )}
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  artistPicture: PropTypes.string,
};

NavBar.defaultProps = {
  artistPicture: null,
};
