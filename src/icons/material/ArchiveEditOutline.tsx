import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveEditOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 12.13V10H20V10.3C19.78 10.42 19.57 10.56 19.39 10.74L18 12.13ZM9.5 11C9.22 11 9 11.22 9 11.5V13H15V11.5C15 11.22 14.78 11 14.5 11H9.5ZM6 10H4V21H11V19.13L11.13 19H6V10ZM21 9H3V3H21V9ZM19 5H5V7H19V5ZM13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96ZM22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47Z" />
    </Svg>
  );
};
