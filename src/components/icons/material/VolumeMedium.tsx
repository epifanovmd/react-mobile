import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VolumeMediumIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 9V15H9L14 20V4L9 9H5ZM18.5 12C18.5 10.23 17.5 8.71 16 7.97V16C17.5 15.29 18.5 13.76 18.5 12Z" />
    </Svg>
  );
};
