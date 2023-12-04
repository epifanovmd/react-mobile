import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MoveResizeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 1V2H10V5H9V6H12V5H11V2H12V1H9ZM9 7C7.89 7 7 7.89 7 9V21C7 22.11 7.89 23 9 23H21C22.11 23 23 22.11 23 21V9C23 7.89 22.11 7 21 7H9ZM1 9V12H2V11H5V12H6V9H5V10H2V9H1ZM9 9H21V21H9V9ZM14 10V11H15V16H11V15H10V18H11V17H15V19H14V20H17V19H16V17H19V18H20V15H19V16H16V11H17V10" />
    </Svg>
  );
};
