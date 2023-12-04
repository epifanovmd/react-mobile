import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AirHumidifierOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.1 21.5L2.39998 1.70001L1.09998 3.00001L3.79998 5.70001C3.29998 6.30001 2.99998 7.10001 2.99998 8.00001V22H18V19.9L20.8 22.7L22.1 21.5ZM9.59998 11.5L12.4 14.3C12.1 14.7 11.6 15 11 15C9.89997 15 8.99998 14.1 8.99998 13C8.99998 12.4 9.29998 11.9 9.59998 11.5ZM16 17.9V20H4.99998V8.00001C4.99998 7.70001 5.09998 7.40001 5.19998 7.10001L8.19998 10.1C7.49998 10.8 6.99998 11.9 6.99998 13C6.99998 15.2 8.79998 17 11 17C12.1 17 13.2 16.5 13.9 15.8L16 17.9ZM17 13.8C17.1 12.5 19 10.5 19 10.5C19 10.5 21 12.7 21 14C21 15 20.2 15.9 19.2 16L17 13.8ZM9.19998 6.00001L7.19998 4.00001H14C16.2 4.00001 18 5.80001 18 8.00001V9.00001H16V8.00001C16 6.90001 15.1 6.00001 14 6.00001H9.19998Z" />
    </Svg>
  );
};
