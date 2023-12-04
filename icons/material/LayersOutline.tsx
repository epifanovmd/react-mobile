import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LayersOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 18.54L19.37 12.8L21 14.07L12 21.07L3 14.07L4.62 12.81L12 18.54ZM12 16L3 9L12 2L21 9L12 16ZM12 4.53L6.26 9L12 13.47L17.74 9L12 4.53Z" />
    </Svg>
  );
};
