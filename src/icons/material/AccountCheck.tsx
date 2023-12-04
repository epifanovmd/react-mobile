import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.1 12.5L22.5 13.91L15.97 20.5L12.5 17L13.9 15.59L15.97 17.67L21.1 12.5ZM10 17L13 20H3V18C3 15.79 6.58 14 11 14L12.89 14.11L10 17ZM11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4Z" />
    </Svg>
  );
};
