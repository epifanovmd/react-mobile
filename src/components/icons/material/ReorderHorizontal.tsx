import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ReorderHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 15H21V13H3V15ZM3 19H21V17H3V19ZM3 11H21V9H3V11ZM3 5V7H21V5H3Z" />
    </Svg>
  );
};
