import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FloorLampTorchiereVariantOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.9699 4L12.6799 7H11.3199L10.0299 4H13.9699ZM16.9999 2H6.99992L9.99992 9H13.9999L16.9999 2ZM15.9199 22L12.9999 15V22H10.9999V15L8.07992 22H5.91992L10.9199 10H13.0799L18.0799 22H15.9199Z" />
    </Svg>
  );
};
