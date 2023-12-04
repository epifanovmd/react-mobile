import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BedDoubleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 5C7.5 5 7 5.21 6.61 5.6C6.22 5.99 6 6.45 6 7V10C5.47 10 5 10.19 4.59 10.59C4.18 10.99 4 11.47 4 12V17H5.34L6 19H7L7.69 17H16.36L17 19H18L18.66 17H20V12C20 11.47 19.81 11 19.41 10.59C19.01 10.18 18.53 10 18 10V7C18 6.45 17.8 6 17.39 5.6C16.98 5.2 16.5 5 16 5H8ZM8 7H11V10H8V7ZM13 7H16V10H13V7ZM6 12H18V15H6V12Z" />
    </Svg>
  );
};
