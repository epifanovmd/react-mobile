import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CalculatorVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM13 7.1L14.1 6L15.5 7.4L16.9 6L18 7.1L16.6 8.5L18 9.9L16.9 11L15.5 9.6L14.1 11L13 9.9L14.4 8.5L13 7.1ZM6.2 7.7H11.2V9.2H6.2V7.7ZM11.5 16H9.5V18H8V16H6V14.5H8V12.5H9.5V14.5H11.5V16ZM18 17.2H13V15.7H18V17.2ZM18 14.8H13V13.3H18V14.8Z" />
    </Svg>
  );
};
