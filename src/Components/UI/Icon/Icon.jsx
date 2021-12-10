import React from 'react';
import PropTypes from 'prop-types';
import * as MaterialDesign from 'react-icons/md';
import * as Heroicons from 'react-icons/hi';
import * as FontAwesome from 'react-icons/fa';
import * as GameIcons from 'react-icons/gi';
import * as Ionicons5 from 'react-icons/io5';


// TEMPORARY back compat
const checkIconOld = name => {
  let icon;
  switch (name) {
    case 'Ticket':
      icon = FontAwesome.FaTicketAlt;
      break;
    case 'Trophy':
      icon = FontAwesome.FaTrophy;
      break;
    case 'Email':
      icon = Heroicons.HiOutlineMail;
      break;
    case 'Gift':
      icon = FontAwesome.FaGift;
      break;
    case 'Group':
      icon = Heroicons.HiUserGroup;
      break;
    case 'Music':
      icon = MaterialDesign.MdLibraryMusic;
      break;
    case 'Redeem':
      icon = MaterialDesign.MdRedeem;
      break;
    default:
      icon = null;
  }
  return icon;
};

const checkIcon = name => {
  let library;
  switch (name) {
    case 'Md':
      library = MaterialDesign;
      break;
    case 'Hi':
      library = Heroicons;
      break;
    case 'Fa':
      library = FontAwesome;
      break;
    case 'Gi':
      library = GameIcons;
      break;
    case 'Io':
      library = Ionicons5;
      break;
    default:
      library = FontAwesome;
      break;
  }
  return library;
};

export const Icon = ({ name, size, color, style }) => {
  const iconLibraryId = name.substring(0, 2);
  const Library = checkIcon(iconLibraryId);
  const IconDynamic = Library[name];

  const IconElement = checkIconOld(name);

  return IconElement ? (
    <IconElement size={size} style={{ color, ...style }} />
  ) : (
    <IconDynamic size={size} style={{ color, ...style }} />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.shape({}),
};

Icon.defaultProps = {
  name: null,
  size: 35,
  style: {},
  color: null,
};
