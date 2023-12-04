import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArrowLeftRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.45 17.45L1 12L6.45 6.55005L7.86 7.96005L4.83 11H19.17L16.14 7.96005L17.55 6.55005L23 12L17.55 17.45L16.14 16.04L19.17 13H4.83L7.86 16.04L6.45 17.45Z" />
    </Svg>
  );
};
