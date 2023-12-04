import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraMarkerOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.5 16.8C17.8 16.8 17.3 16.2 17.3 15.6C17.3 14.9 17.9 14.4 18.5 14.4C19.1 14.4 19.7 15 19.7 15.6C19.8 16.2 19.2 16.8 18.5 16.8ZM18.5 12C16.6 12 15 13.6 15 15.5C15 18.1 18.5 22 18.5 22C18.5 22 22 18.1 22 15.5C22 13.6 20.4 12 18.5 12ZM9 2L7.2 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H14.5C14.1 19.4 13.7 18.7 13.5 18H4V6H8.1L9.9 4H14.1L15.9 6H20V10.2C20.7 10.4 21.4 10.8 22 11.3V6C22 4.9 21.1 4 20 4H16.8L15 2H9ZM12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C12.4 17 12.8 17 13.2 16.9C13.1 16.4 13 16 13 15.5V14.8C12.7 14.9 12.3 15 12 15C10.3 15 9 13.7 9 12C9 10.3 10.3 9 12 9C13.4 9 14.6 10 14.9 11.3C15.4 10.9 16 10.5 16.7 10.3C16 8.3 14.1 7 12 7Z" />
    </Svg>
  );
};
