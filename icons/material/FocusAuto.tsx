import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FocusAutoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19V19ZM19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3ZM5 5H9V3H5C3.9 3 3 3.9 3 5V9H5V5ZM5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15ZM8 7C6.9 7 6 7.9 6 9V17H8V13H10V17H12V9C12 7.9 11.1 7 10 7H8ZM8 9H10V11H8V9ZM13 7V17H15V13H17V11H15V9H18V7H13Z" />
    </Svg>
  );
};
