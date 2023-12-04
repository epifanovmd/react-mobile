import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BluetoothTransferIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.71 7.71L10.41 12L14.71 16.29L9 22H8V14.41L3.41 19L2 17.59L7.59 12L2 6.41L3.41 5L8 9.59V2H9L14.71 7.71ZM10 5.83V9.59L11.88 7.71L10 5.83ZM11.88 16.29L10 14.41V18.17L11.88 16.29ZM22 8H20V11H18V8H16L19 4L22 8ZM22 16L19 20L16 16H18V13H20V16H22Z" />
    </Svg>
  );
};
