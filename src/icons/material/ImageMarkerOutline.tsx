import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ImageMarkerOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 19C14.36 19.72 14.78 20.4 15.19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V10.63C20.39 10.3 19.71 10.09 19 10.03V5H5V19H14ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H13.22C13.09 16.5 13 16 13 15.5C13 14.35 13.38 13.26 14 12.37L13.96 12.29ZM22 15.5C22 18.1 18.5 22 18.5 22C18.5 22 15 18.1 15 15.5C15 13.6 16.6 12 18.5 12C20.4 12 22 13.6 22 15.5ZM19.7 15.6C19.7 15 19.1 14.4 18.5 14.4C17.9 14.4 17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8C19.2 16.8 19.8 16.2 19.7 15.6Z" />
    </Svg>
  );
};
