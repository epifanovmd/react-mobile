import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BulletIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 22H10V21H14V22ZM13 10V7H11V10L10 11.5V20H14V11.5L13 10ZM12 2C12 2 11 3 11 5V6H13V5C13 5 13 3 12 2Z" />
    </Svg>
  );
};
