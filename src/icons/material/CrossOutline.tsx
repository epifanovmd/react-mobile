import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CrossOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.5 6V1H8.5V6H3V13H8.5V23H15.5V13H21V6H15.5ZM19 11H13.5V21H10.5V11H5V8H10.5V3H13.5V8H19V11Z" />
    </Svg>
  );
};
