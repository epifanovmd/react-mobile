import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RhombusSplitOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.0001 2C11.5001 2 11.0001 2.19 10.5901 2.59L2.59006 10.59C1.80006 11.37 1.80006 12.63 2.59006 13.41L10.5901 21.41C11.3701 22.2 12.6301 22.2 13.4101 21.41L21.4101 13.41C22.2001 12.63 22.2001 11.37 21.4101 10.59L13.4101 2.59C13.0001 2.19 12.5001 2 12.0001 2ZM12.0001 4L15.2901 7.29L12.0001 10.59L8.71006 7.29L12.0001 4ZM7.29006 8.71L10.5901 12L7.29006 15.29L4.00006 12L7.29006 8.71ZM16.7101 8.71L20.0001 12L16.7101 15.29L13.4101 12L16.7101 8.71ZM12.0001 13.41L15.2901 16.71L12.0001 20L8.71006 16.71L12.0001 13.41Z" />
    </Svg>
  );
};
