import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WardrobeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6 2C4.89 2 4 2.9 4 4V19C4 20.11 4.89 21 6 21V22H8V21H16V22H18V21C19.11 21 20 20.11 20 19V4C20 2.9 19.11 2 18 2H6ZM6 4H11V19H6V4ZM13 4H18V19H13V4ZM8 10V13H10V10H8ZM14 10V13H16V10H14Z" />
    </Svg>
  );
};
