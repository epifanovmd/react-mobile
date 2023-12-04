import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkewLessIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.5 11L15.41 20H10.5L12.59 11H17.5ZM20 9H11L8 22H17L20 9ZM4 6L8 2V5H16V7H8V10L4 6Z" />
    </Svg>
  );
};
