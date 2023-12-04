import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const OctagramOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.19995 16.0592L3.87995 11.9992L2.19995 7.93922L6.25995 6.25922L7.93995 2.19922L12 3.87922L16.06 2.19922L17.74 6.25922L21.7999 7.93922L20.12 11.9992L21.7999 16.0592L17.74 17.7392L16.06 21.7992L12 20.1192L7.93995 21.7992L6.25995 17.7392L2.19995 16.0592ZM4.80995 8.99922L6.04995 11.9992L4.80995 14.9992L7.78995 16.2092L8.99995 19.1892L12 17.9492L15 19.1892L16.21 16.2092L19.19 14.9992L17.95 11.9992L19.19 8.99922L16.21 7.78922L15 4.80922L12 6.04922L8.99995 4.80922L7.78995 7.78922L4.80995 8.99922Z" />
    </Svg>
  );
};
