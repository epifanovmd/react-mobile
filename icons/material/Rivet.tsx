import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RivetIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.43 2C10.61 2 9.93995 2.65 9.93995 3.5C9.93995 4.64 9.93995 5.8 9.93995 6.96H7.94995V7.95H15.91V6.96H13.92C13.92 5.8 13.92 4.64 13.92 3.5C13.92 2.65 13.25 2 12.43 2H11.43ZM10.94 8.95V21.87L11.93 22.87L12.92 21.87V8.95H10.94Z" />
    </Svg>
  );
};
