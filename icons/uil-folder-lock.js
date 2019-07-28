import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilFolderLock = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M4,4H8.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,11,7h7a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H11.72l-.32-1A3,3,0,0,0,8.56,2H4A3,3,0,0,0,1,5V18a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4ZM21,15.18V14a3,3,0,0,0-6,0v1.18A3,3,0,0,0,13,18v2a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3V18A3,3,0,0,0,21,15.18ZM17,14a1,1,0,0,1,2,0v1H17Zm4,6a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Z" />
    </Svg>
  );
};

UilFolderLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilFolderLock.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilFolderLock;