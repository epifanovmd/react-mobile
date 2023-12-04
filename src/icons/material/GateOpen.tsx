import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GateOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 21V7H5V11H3V9H1V21H3V19H5V21H7ZM3 17V13H5V17H3ZM21 9V11H19V7H17V21H19V19H21V21H23V9H21ZM21 17H19V13H21V17Z" />
    </Svg>
  );
};
