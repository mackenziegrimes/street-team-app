import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../Components/UI/Icon';
import styled from 'styled-components';
import { Dropdown, Image } from 'react-bootstrap';

const TEMP_IMAGE =
  // eslint-disable-next-line max-len
  'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

const artistPicture = null;

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
    borderTop: '1px solid gray',
  },
  a: {
    color: ({ theme }) => theme.colors.white,
    padding: '15px',
  },
  minWidth: '290px',
  width: '100%',
  top: 50,
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

const ArtistProfileDropdownToggle = React.forwardRef(
  ({ onClick, onToggle }, ref) => (
    <DropdownButton
      type="button"
      ref={ref}
      onToggle={onToggle}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {artistPicture ? (
        <Image
          src={artistPicture}
          roundedCircle
          style={{ width: 52, height: 52 }}
        />
      ) : (
        <Icon style={{ marginLeft: 10 }} name="FaUserCircle" color="gray" />
      )}
      <Icon
        style={{ marginLeft: 10 }}
        name="FaChevronDown"
        size={20}
        color="gray"
      />
    </DropdownButton>
  )
);

ArtistProfileDropdownToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export const ArtistProfileDropdown = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown onToggle={open => setIsOpen(open)} flip drop="down">
      <Dropdown.Toggle
        as={ArtistProfileDropdownToggle}
        isOpen={isOpen}
        id="dropdown-custom-components"
      />
      <Dropdown.Menu as={CustomMenu} align="right" style={{ top: '60px' }}>
        {menuItems}
      </Dropdown.Menu>
    </Dropdown>
  );
};

ArtistProfileDropdown.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
