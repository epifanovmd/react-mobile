import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AppleKeyboardCapsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 14V8H17.17L12 2.83L6.83 8H9V14H15ZM12 0L22 10H17V16H7V10H2L12 0ZM7 18H17V24H7V18ZM15 20H9V22H15V20Z" />
    </Svg>
  );
};
