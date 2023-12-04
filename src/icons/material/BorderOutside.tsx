import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BorderOutsideIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 11H7V13H9V11ZM13 15H11V17H13V15ZM19 19H5V5H19V19ZM3 21H21V3H3V21ZM17 11H15V13H17V11ZM13 11H11V13H13V11ZM13 7H11V9H13V7Z" />
    </Svg>
  );
};
