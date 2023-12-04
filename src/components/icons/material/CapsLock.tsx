import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CapsLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.96 13.71L12 8.29L14.03 13.72L9.96 13.71ZM11.14 6L6.43 18H8.36L9.32 15.43H14.68L15.64 18H17.57L12.86 6H11.14ZM20 2H4C2.89 2 2 2.89 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.89 21.1 2 20 2ZM20 20H4V4H20V20Z" />
    </Svg>
  );
};
