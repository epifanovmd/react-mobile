import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowCollapseUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4.08 11.92L12 4L19.92 11.92L18.5 13.33L13 7.83V22H11V7.83L5.5 13.33L4.08 11.92ZM12 4H22V2H2V4H12Z" />
    </Svg>
  );
};
