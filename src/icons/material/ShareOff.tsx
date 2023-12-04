import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShareOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.8001 22.6992L15.6001 17.4992L14.0001 18.9992V15.8992L13.1001 14.8992C8.6001 15.1992 5.4001 16.7992 3.0001 20.0992C3.5801 16.3092 5.7201 12.9392 8.9001 10.7992L1.1001 2.99922L2.4001 1.69922L22.1001 21.4992L20.8001 22.6992ZM18.1001 14.8992L21.0001 11.9992L14.0001 4.99922V8.99922L12.5001 9.29922" />
    </Svg>
  );
};
