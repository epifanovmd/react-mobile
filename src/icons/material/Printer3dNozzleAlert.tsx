import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Printer3dNozzleAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 2H17V8H19V13H16.5L13 17H11L7.5 13H5V8H7V2ZM10 22H2V20H10C10.6 20 11 19.5 11 19V18H13V19C13 20.7 11.7 22 10 22ZM21 13V7H23V13H21ZM21 17V15H23V17H21Z" />
    </Svg>
  );
};
