import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const KeyAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 6.5C4 4 6 2 8.5 2C11 2 13 4 13 6.5C13 8.46 11.75 10.13 10 10.74V15H13V18H10V22H7V10.74C5.25 10.13 4 8.46 4 6.5ZM7 6.5C7 7.33 7.67 8 8.5 8C9.33 8 10 7.33 10 6.5C10 5.67 9.33 5 8.5 5C7.67 5 7 5.67 7 6.5ZM18 7H20V13H18V7ZM18 17H20V15H18" />
    </Svg>
  );
};
