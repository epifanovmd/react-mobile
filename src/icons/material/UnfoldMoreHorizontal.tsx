import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UnfoldMoreHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17ZM11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83Z" />
    </Svg>
  );
};
