import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatColumnsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 3H11V5H3V3ZM13 3H21V5H13V3ZM3 7H11V9H3V7ZM13 7H21V9H13V7ZM3 11H11V13H3V11ZM13 11H21V13H13V11ZM3 15H11V17H3V15ZM13 15H21V17H13V15ZM3 19H11V21H3V19ZM13 19H21V21H13V19Z" />
    </Svg>
  );
};
