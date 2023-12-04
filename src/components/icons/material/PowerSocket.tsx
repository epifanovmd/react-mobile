import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PowerSocketIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 15H17V11H15V15ZM7 15H9V11H7V15ZM11 13H13V9H11V13ZM8.83 7H15.2L19 10.8V17H5V10.8L8.83 7ZM8 5L3 10V19H21V10L16 5H8Z" />
    </Svg>
  );
};
