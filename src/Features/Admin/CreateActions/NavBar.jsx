import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navbar, Dropdown } from 'react-bootstrap';
import { Icon } from '../../../Components/UI/Icon';
import logo from '../../../assets/mm_square_bright.png';

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
        name={isOpen ? 'FaChevronDown' : 'FaChevronRight'}
        size={45}
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
  style: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
  'aria-labelledby': PropTypes.string.isRequired,
};

export const NavBar = ({ headerText }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavBarContainer sticky="top">
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

        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item href="/artist/info">
            <Icon name="FaUserAlt" style={{ marginRight: 15 }} />
            Artist Info
          </Dropdown.Item>
          <Dropdown.Item href="/artist/create">
            <Icon name="FaFilter" style={{ marginRight: 15 }} />
            Your Fan Funnel
          </Dropdown.Item>
          <Dropdown.Item href="/artist/audience">
            <Icon name="FaUsers" style={{ marginRight: 15 }} />
            Your Audience
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </NavBarContainer>
  );
};

NavBar.propTypes = { headerText: PropTypes.string.isRequired };
