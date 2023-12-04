import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WardrobeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 4V19C4 20.1 4.9 21 6 21V22H8V21H11.5V2H6C4.9 2 4 2.9 4 4ZM8 10H10V13H8V10ZM18 2H12.5V21H16V22H18V21C19.1 21 20 20.1 20 19V4C20 2.9 19.1 2 18 2ZM16 13H14V10H16V13Z" />
    </Svg>
  );
};
