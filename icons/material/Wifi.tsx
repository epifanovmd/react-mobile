import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const WifiIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 21L15.6 16.2C14.6 15.45 13.35 15 12 15C10.65 15 9.39995 15.45 8.39995 16.2L12 21ZM12 3C7.94995 3 4.20995 4.34 1.19995 6.6L2.99995 9C5.49995 7.12 8.61995 6 12 6C15.38 6 18.5 7.12 21 9L22.7999 6.6C19.7899 4.34 16.05 3 12 3ZM12 9C9.29995 9 6.80995 9.89 4.79995 11.4L6.59995 13.8C8.09995 12.67 9.96995 12 12 12C14.03 12 15.9 12.67 17.4 13.8L19.2 11.4C17.19 9.89 14.7 9 12 9Z" />
    </Svg>
  );
};
