import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowExpandUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 20V22H22V20H13V5.83L18.5 11.33L19.92 9.92L12 2L4.08 9.92L5.5 11.33L11 5.83V20H2Z" />
    </Svg>
  );
};
