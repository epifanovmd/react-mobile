import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VolumeVibrateIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 9.0007V15.0007H8L13 20.0007V4.0007L8 9.0007H4ZM16.55 2.4707L15.5 3.5307L17.93 6.0007L15 9.0007L17.93 12.0007L15 15.0007L17.93 18.0007L15.5 20.4707L16.55 21.5307L20 18.0007L17.07 15.0007L20 12.0007L17.07 9.0007L20 6.0007L16.55 2.4707Z" />
    </Svg>
  );
};
