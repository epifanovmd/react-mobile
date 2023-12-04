import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatFontSizeDecreaseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.12 14L7.5 7.67L9.87 14H5.12ZM6.5 5L1 19H3.25L4.37 16H10.62L11.75 19H14L8.5 5H6.5ZM18 17L23 11.93L21.59 10.5L19 13.1V7H17V13.1L14.41 10.5L13 11.93L18 17Z" />
    </Svg>
  );
};
