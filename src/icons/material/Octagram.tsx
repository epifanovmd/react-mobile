import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OctagramIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2.19995 16.0592L3.87995 11.9992L2.19995 7.93922L6.25995 6.25922L7.93995 2.19922L12 3.87922L16.06 2.19922L17.74 6.25922L21.7999 7.93922L20.12 11.9992L21.7999 16.0592L17.74 17.7392L16.06 21.7992L12 20.1192L7.93995 21.7992L6.25995 17.7392L2.19995 16.0592Z" />
    </Svg>
  );
};
