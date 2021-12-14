import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navbar, Dropdown } from 'react-bootstrap';
import { matchPath } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Icon } from '../../../Components/UI/Icon';
import logo from '../../../assets/mm_square_bright.png';
import { getBillingSessionUrl } from './hooks/getBillingSessionUrl';

const NavBarContainer = styled(Navbar)({
  display: 'flex',
  alignItems: 'center',
  padding: ({ theme }) => theme.spacing.md,
  background: ({ theme }) => theme.colors.gray3,
  borderBottom: '2px solid gray',
});

const Logo = styled.img({
  width: '42px',
});

const Header = styled.h2({
  fontSize: ({ theme }) => theme.fontSizes.lg,
  fontWeight: ({ theme }) => theme.fontWeights.bold,
  margin: 0,
  padding: 0,
});

const DropdownButton = styled.button({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  background: ({ theme }) => theme.colors.gray3,
  borderRadius: 4,
  border: 'none',
  '&:hover': {
    background: ({ theme }) => theme.colors.gray2,
  },
});

const DropdownMenu = styled.div({
  'a + a': {
    marginTop: 10,
  },
  a: {
    color: ({ theme }) => theme.colors.white,
  },
  minWidth: '290px',
  width: '100%',
  top: 50,
  backgroundColor: ({ theme }) => theme.colors.gray1,
});

const CustomToggle = React.forwardRef(
  ({ children, onClick, onToggle, isOpen }, ref) => (
    <DropdownButton
      type="button"
      ref={ref}
      onToggle={onToggle}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <Icon
        style={{ marginRight: 15 }}
        name={isOpen ? 'FaBars' : 'FaBars'}
        size={35}
        color="gray"
      />
      {children}
    </DropdownButton>
  )
);

CustomToggle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

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

const ArtistProfileToggle = React.forwardRef(
  ({ children, onClick, onToggle, isOpen }, ref) => (
    <ArtistProfileButton
      type="button"
      ref={ref}
      onToggle={onToggle}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <Icon
        style={{}}
        name={'MdArrowDropDownCircle'}
        size={35}
        color="gray"
      />
      {children}
    </ArtistProfileButton>
  )
);

const ArtistProfileButton = styled.button({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  background: ({ theme }) => theme.colors.gray3,
  borderRadius: 4,
  border: 'none',
  '&:hover': {
    background: ({ theme }) => theme.colors.gray2,
  },
});

const ArtistProfileMenu = React.forwardRef(
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

ArtistProfileMenu.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.string.isRequired,
  'aria-labelledby': PropTypes.string.isRequired,
};

ArtistProfileMenu.defaultProps = {
  style: {},
};

export const NavBar = ({ headerText, artistId, integrations, artistName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleBillingClick = async () => {
    console.log('calling handleBillingClick',artistId)
    if(artistId){
      let response = await getBillingSessionUrl(artistId)
      console.log(`stripe response in the handle click is`,response)
      let billingUrl = response?.url;
      if(billingUrl){
        //opens in a new window
        window.open(billingUrl);
      }
      else{
        console.log(`no billing account configured`)
      }
    }
  }
  const NAVBAR_ITEMS = [
    {
      label: 'Your Fan Funnel',
      icon: 'FaFilter',
      href: '/artist/create',
      showItem: true,
    },
    {
      label: 'Your Audience',
      icon: 'FaUsers',
      href: '/artist/audience',
      showItem: true,
    },
    {
      label: 'Your Reports',
      icon: 'IoAnalyticsOutline',
      href: 'https://analytics.amplitude.com/',
      target: '_blank',
      showItem: true,
    },
  ];

  const renderNavBarItem = () => {
    return NAVBAR_ITEMS.map(item => {
      // console.log('location', location);
      const match = matchPath(location.pathname, { path: item.href });
      {
        if(item.showItem){
        return (
          <Dropdown.Item href={item.href} onClick={item.onClick} active={match}>
            <Icon name={item.icon} style={{ marginRight: 15 }} target={item.target} />
            {item.label}
          </Dropdown.Item>
        );
      }
    }
    });
  };

  const ARTIST_PROFILE_ITEMS = [
    {
      label: 'Your Artist Profile',
      icon: 'FaUserAlt',
      href: '/artist/info',
      showItem: true,
    },
    {
      label: 'Training Portal',
      icon: 'FaFilter',
      href: '/artist/create',
      showItem: true,
    },
    {
      label: 'Integrations',
      icon: 'FaUsers',
      href: '/artist/audience',
      showItem: true,
    },
    {
      label: 'Account Billing',
      icon: 'FaCreditCard',
      onClick: handleBillingClick,
      showItem: integrations?.find(
        item => item.serviceName === 'StripeBilling'
      ),
    },
    {
      label: 'Logout',
      icon: 'FaSignOutAlt',
      onClick: handleBillingClick,
      showItem: integrations?.find(
        item => item.serviceName === 'StripeBilling'
      ),
    },
  ];

    const renderArtistProfileItems = () => {
      return ARTIST_PROFILE_ITEMS.map(item => {
        // console.log('location', location);
        const match = matchPath(location.pathname, { path: item.href });
        {
          if (item.showItem) {
            return (
              <Dropdown.Item
                href={item.href}
                onClick={item.onClick}
                active={match}
                target={item.target}
              >
                <Icon name={item.icon} style={{ marginRight: 15 }} />
                {item.label}
              </Dropdown.Item>
            );
          }
        }
      });
    };

  return (
    <NavBarContainer className="ml-auto" sticky="top">
      <Navbar.Brand href="#">
        <Logo src={logo} alt="Modern Musician Logo" />
      </Navbar.Brand>

      <Dropdown onToggle={open => setIsOpen(open)}>
        <Dropdown.Toggle
          as={CustomToggle}
          isOpen={isOpen}
          id="dropdown-custom-components"
        >
          <Header>{headerText}</Header>
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>{renderNavBarItem()}</Dropdown.Menu>
      </Dropdown>
      {/* Artist Profile Menu */}
      <Navbar.Brand
        className="ml-auto"
        href="https://modernmusician.typeform.com/to/b1MILDjf"
        target="_blank"
      >
        <Icon name={'FaQuestionCircle'} size={35} color="gray" />
      </Navbar.Brand>
      <Navbar.Brand
        target="_blank"
        href="https://modernmusician.notion.site/StreetTeam-Updates-4af35f77dbd54ebfa587d272c6932fb4">
        <Icon name={'FaBell'} size={35} color="gray" />
      </Navbar.Brand>
      <Dropdown onToggle={open => setIsOpen(open)}>
        <Dropdown.Toggle
          as={ArtistProfileToggle}
          isOpen={isOpen}
          id="dropdown-custom-components"
        ></Dropdown.Toggle>
        <Dropdown.Menu as={ArtistProfileMenu}>
          {renderArtistProfileItems()}
        </Dropdown.Menu>
      </Dropdown>
    </NavBarContainer>
  );
};

NavBar.propTypes = { headerText: PropTypes.string.isRequired };
