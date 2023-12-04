import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PlayProtectedContentIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5V18H11V16H4V7H17V11H19V5H2ZM9 9V14L12.5 11.5L9 9ZM21.04 11.67L16.09 16.62L13.96 14.5L12.55 15.91L16.09 19.45L22.45 13.09L21.04 11.67Z" />
    </Svg>
  );
};
