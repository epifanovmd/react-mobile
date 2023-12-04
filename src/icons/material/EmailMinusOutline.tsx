import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailMinusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 18V20H24V18H16ZM14 19C14 18.66 14.04 18.33 14.09 18H3V8L11 13L19 8V13.09C19.33 13.04 19.66 13 20 13C20.34 13 20.67 13.04 21 13.09V6C21 4.9 20.1 4 19 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H14.09C14.04 19.67 14 19.34 14 19ZM19 6L11 11L3 6H19Z" />
    </Svg>
  );
};
