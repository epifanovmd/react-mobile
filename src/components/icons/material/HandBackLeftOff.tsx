import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HandBackLeftOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.11 21.46L2.38999 1.73L1.10999 3L3.20999 5.1C3.08999 5.29 2.99999 5.5 2.99999 5.75V16C2.99999 20.42 6.57999 24 11 24C13.93 24 16.58 22.39 17.97 19.86L20.84 22.73L22.11 21.46ZM5.49999 12V7.39L6.49999 8.39V12H5.49999ZM9.99999 12H8.99999V10.89L9.99999 11.89V12ZM16 12.8L13.5 10.3V3.25C13.5 2.56 14.06 2 14.75 2C15.44 2 16 2.56 16 3.25V12.8ZM19.5 16.28L17.16 13.96L18.16 11.47C18.38 10.92 18.84 10.5 19.4 10.31L20.19 10.05C21 9.79 21.74 10.58 21.43 11.37L19.5 16.28ZM8.99999 5.8L6.49999 3.3V2.75C6.49999 2.06 7.05999 1.5 7.74999 1.5C8.43999 1.5 8.99999 2.06 8.99999 2.75V5.8ZM12.5 9.3L9.99999 6.8V1.25C9.99999 0.56 10.56 0 11.25 0C11.94 0 12.5 0.56 12.5 1.25V9.3Z" />
    </Svg>
  );
};
