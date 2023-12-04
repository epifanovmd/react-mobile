import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RewindOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 9.9L7 12L10 14.1V9.9ZM19 9.9L16 12L19 14.1V9.9ZM12 6V18L3.5 12L12 6ZM21 6V18L12.5 12L21 6Z" />
    </Svg>
  );
};
