import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GuitarElectricIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.59 3H22V5H20.41L15.12 10.29L13.71 8.9L19.59 3ZM12 9C12.26 9 12.5 9.1 12.71 9.3L14.71 11.3C14.89 11.5 15 11.73 15 12L14.9 12.4L10.9 20.4C10.71 20.75 10.36 20.93 10 20.93C9.65 20.93 9.29 20.75 9.11 20.4L7.25 16.7L3.55 14.9C3.18 14.7 3 14.35 3 14C3 13.65 3.18 13.3 3.55 13.1L11.55 9.1C11.69 9 11.84 9 12 9ZM9.35 11.82L8.65 12.5L11.5 15.35L12.18 14.65L9.35 11.82ZM7.94 13.23L7.23 13.94L10.06 16.77L10.77 16.06L7.94 13.23Z" />
    </Svg>
  );
};
