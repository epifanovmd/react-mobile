import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmbyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 2L6 7L7 8L2 13L7 18L8 17L13 22L18 17L17 16L22 11L17 6L16 7L11 2ZM10 8.5L16 12L10 15.5V8.5Z" />
    </Svg>
  );
};
