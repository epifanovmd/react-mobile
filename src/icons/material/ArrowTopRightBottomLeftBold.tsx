import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowTopRightBottomLeftBoldIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.17 8.66L21 11.5V3H12.5L15.34 5.83L5.83 15.34L3 12.5V21H11.5L8.66 18.17L18.17 8.66Z" />
    </Svg>
  );
};
