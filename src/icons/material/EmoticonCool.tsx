import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonCoolIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3.22 7.22C4.91 4.11 8.21 2 12 2C15.79 2 19.09 4.11 20.78 7.22L20 8H4L3.22 7.22ZM21.4 8.6C21.78 9.67 22 10.81 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 10.81 2.22 9.67 2.6 8.6L4 10H5C5 11.38 7.12 12.5 8.5 12.5C9.88 12.5 11.25 11.38 11.25 10H12.75C12.75 11.38 14.12 12.5 15.5 12.5C16.88 12.5 19 11.38 19 10H20L21.4 8.6ZM16.19 15.42L14.77 14C14.32 14.72 13.25 15.23 12 15.23C10.75 15.23 9.68 14.72 9.23 14L7.81 15.42C8.71 16.5 10.25 17.23 12 17.23C13.75 17.23 15.29 16.5 16.19 15.42Z" />
    </Svg>
  );
};
