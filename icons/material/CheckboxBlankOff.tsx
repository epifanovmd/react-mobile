import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CheckboxBlankOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8401 22.73L19.1001 21C19.0601 21 19.0301 21 19.0001 21H5.00011C3.90011 21 3.00011 20.11 3.00011 19V4.99998C3.00011 4.96998 3.00011 4.93998 3.00011 4.89998L1.11011 2.99998L2.39011 1.72998L22.1101 21.46L20.8401 22.73ZM21.0001 4.99998C21.0001 3.88998 20.1001 2.99998 19.0001 2.99998H6.20011L21.0001 17.8V4.99998Z" />
    </Svg>
  );
};
