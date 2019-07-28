import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilEnvelopes = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M17,21.63H5a3,3,0,0,1-3-3v-8a1,1,0,0,0-2,0v8a5,5,0,0,0,5,5H17a1,1,0,0,0,0-2Zm4-18H7a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3v-10A3,3,0,0,0,21,3.63Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L7.41,5.63Zm1.41,11a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7l5.88,5.88a3,3,0,0,0,4.24,0L22,7Z" />
    </Svg>
  );
};

UilEnvelopes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilEnvelopes.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilEnvelopes;