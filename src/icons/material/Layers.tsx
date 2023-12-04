import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LayersIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 16L19.36 10.27L21 9L12 2L3 9L4.63 10.27L12 16ZM12 18.54L4.62 12.81L3 14.07L12 21.07L21 14.07L19.37 12.8L12 18.54Z" />
    </Svg>
  );
};
