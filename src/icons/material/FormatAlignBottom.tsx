import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatAlignBottomIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 9L15.5 6.5L16.92 7.92L12 12.84L7.08 7.92L8.5 6.5L11 9V3H13V9ZM3 15H21V17H3V15ZM3 19H13V21H3V19Z" />
    </Svg>
  );
};
