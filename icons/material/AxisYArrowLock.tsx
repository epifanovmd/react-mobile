import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AxisYArrowLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.9999 13.82L17.9999 17.88L19.4999 15.28L20.9999 20.74L15.4999 22.21L16.9999 19.61L9.99992 15.56L3.16992 19.5L2.16992 17.77L8.99992 13.82V3H10.9999V13.82ZM21.7999 5C22.3999 5 22.9999 5.6 22.9999 6.3V9.8C22.9999 10.4 22.3999 11 21.6999 11H16.1999C15.5999 11 14.9999 10.4 14.9999 9.7V6.2C14.9999 5.6 15.5999 5 16.1999 5V3.5C16.1999 2.1 17.5999 1 18.9999 1C20.3999 1 21.7999 2.1 21.7999 3.5V5ZM20.4999 5V3.5C20.4999 2.7 19.7999 2.2 18.9999 2.2C18.1999 2.2 17.4999 2.7 17.4999 3.5V5H20.4999Z" />
    </Svg>
  );
};
