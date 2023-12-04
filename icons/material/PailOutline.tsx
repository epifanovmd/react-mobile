import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PailOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.5001 7.63C11.9701 7.35 12.5801 7.5 12.8601 8C13.1401 8.47 12.9701 9.09 12.5001 9.36L4.27011 14.11C3.79011 14.39 3.18011 14.23 2.90011 13.75C2.62011 13.27 2.79011 12.66 3.27011 12.38L11.5001 7.63ZM3.00011 4V6H4.00011L4.65011 9.27L6.50011 8.22L6.04011 6H17.9601L15.3601 19H8.64011L7.73011 14.43L5.90011 15.5L7.00011 21H17.0001L20.0001 6H21.0001V4H3.00011Z" />
    </Svg>
  );
};
