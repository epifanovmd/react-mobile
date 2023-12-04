import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FunctionVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.42 5.29018C11.32 5.19018 10.35 6.00018 10.25 7.11018L10 10.0002H12.82V12.0002H9.82L9.38 17.0702C9.18 19.2702 7.24 20.9002 5.04 20.7002C3.79 20.5902 2.66 19.9002 2 18.8302L3.5 17.3302C3.83 18.3802 4.96 18.9702 6 18.6302C6.78 18.3902 7.33 17.7002 7.4 16.8902L7.82 12.0002H4.82V10.0002H8L8.27 6.93018C8.46 4.73018 10.39 3.10018 12.6 3.28018C13.86 3.39018 15 4.09018 15.66 5.17018L14.16 6.67018C13.91 5.90018 13.23 5.36018 12.42 5.29018ZM22 13.6502L20.59 12.2402L17.76 15.0702L14.93 12.2402L13.5 13.6502L16.35 16.5002L13.5 19.3102L14.93 20.7202L17.76 17.8902L20.59 20.7202L22 19.3102L19.17 16.5002L22 13.6502Z" />
    </Svg>
  );
};
