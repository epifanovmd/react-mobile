import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MouseMoveVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 6H23L19 2L15 6H18V18H15L19 22L23 18H20V6ZM9 3.09C11.83 3.57 14 6.04 14 9H9V3.09ZM14 11V15C14 18.3 11.3 21 8 21C4.7 21 2 18.3 2 15V11H14ZM7 9H2C2 6.04 4.17 3.57 7 3.09V9Z" />
    </Svg>
  );
};
