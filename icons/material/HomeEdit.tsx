import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HomeEditIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L2 12H5V20H10V14H14V15.11L19.43 9.68L12 3ZM21.04 11.14C20.9 11.14 20.76 11.2 20.65 11.3L19.65 12.3L21.7 14.35L22.7 13.35C22.91 13.14 22.91 12.79 22.7 12.58L21.42 11.3C21.32 11.2 21.18 11.14 21.04 11.14ZM19.06 12.88L13 18.94V21H15.06L21.11 14.93L19.06 12.88Z" />
    </Svg>
  );
};
