import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Video3dOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2.60995 2L21.35 20.74L19.94 22.15L14.8 17H13V15.2L11 13.23V15.21C10.93 15.68 10.74 16.08 10.41 16.41C10.08 16.73 9.67995 16.93 9.20995 17H4.99995V15H8.99995V13H5.99995V11H8.79995L6.78995 9H4.99995V7.23L1.19995 3.41L2.60995 2ZM16 7H16.22C17 7.07 17.6299 7.36 18.1399 7.88C18.65 8.39 18.93 9 19 9.76V14.24C18.95 14.63 18.8699 15 18.7199 15.3L17 13.6V9.85C16.95 9.63 16.84 9.44 16.69 9.28C16.53 9.13 16.34 9.03 16.12 9H15V11.59L13 9.57V7H16Z" />
    </Svg>
  );
};
