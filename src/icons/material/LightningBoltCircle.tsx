import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightningBoltCircleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.5 20L16.36 10.27H13V4L8 13.73H11.5V20ZM12 2C14.75 2 17.1 3 19.05 4.95C21 6.9 22 9.25 22 12C22 14.75 21 17.1 19.05 19.05C17.1 21 14.75 22 12 22C9.25 22 6.9 21 4.95 19.05C3 17.1 2 14.75 2 12C2 9.25 3 6.9 4.95 4.95C6.9 3 9.25 2 12 2Z" />
    </Svg>
  );
};
