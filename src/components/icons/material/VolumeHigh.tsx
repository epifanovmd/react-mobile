import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VolumeHighIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 3.23047V5.29047C16.89 6.15047 19 8.83047 19 12.0005C19 15.1705 16.89 17.8405 14 18.7005V20.7705C18 19.8605 21 16.2805 21 12.0005C21 7.72047 18 4.14047 14 3.23047ZM16.5 12.0005C16.5 10.2305 15.5 8.71047 14 7.97047V16.0005C15.5 15.2905 16.5 13.7605 16.5 12.0005ZM3 9.00047V15.0005H7L12 20.0005V4.00047L7 9.00047H3Z" />
    </Svg>
  );
};
