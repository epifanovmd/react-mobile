import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WindowClosedVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 20V2H3V20H1V23H23V20H21ZM19 4V11H13V4H19ZM5 4H11V11H5V4ZM5 20V13H11V20H5ZM13 20V13H19V20H13Z" />
    </Svg>
  );
};
