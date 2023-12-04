import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SortIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 21L14 17H17V7H14L18 3L22 7H19V17H22L18 21ZM2 19V17H12V19H2ZM2 13V11H9V13H2ZM2 7V5H6V7H2Z" />
    </Svg>
  );
};
