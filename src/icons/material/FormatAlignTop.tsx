import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatAlignTopIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 15L15.5 17.5L16.92 16.08L12 11.16L7.08 16.08L8.5 17.5L11 15V21H13V15ZM3 3H21V5H3V3ZM3 7H13V9H3V7Z" />
    </Svg>
  );
};
