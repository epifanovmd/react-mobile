import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatAnnotationPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.5 7H10.5L16 21H13.6L12.5 18H6.3L5.2 21H3L8.5 7ZM7.1 16H11.9L9.5 9.7L7.1 16ZM22 5V7H19V10H17V7H14V5H17V2H19V5H22Z" />
    </Svg>
  );
};
