import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AltimeterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 3V5H17V3H7ZM9 7V9H15V7H9ZM2 7.96V16.04L6.03 12L2 7.96ZM22.03 7.96L18 12L22.03 16.04V7.96ZM7 11V13H17V11H7ZM9 15V17H15V15H9ZM7 19V21H17V19H7Z" />
    </Svg>
  );
};
