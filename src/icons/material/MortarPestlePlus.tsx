import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MortarPestlePlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 14H13V17H11V14H8V12H11V9H13V12H16V14ZM21 5H18.35L19.5 1.85L17.15 1L15.69 5H3V7L5 13L3 19V21H21V19L19 13L21 7V5Z" />
    </Svg>
  );
};
