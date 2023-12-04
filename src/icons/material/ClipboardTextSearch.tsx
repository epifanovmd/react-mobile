import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClipboardTextSearchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.18 17H7V15H10C10.08 14.32 10.23 13.64 10.5 13H7V11H11.82C11.85 10.97 11.87 10.94 11.9 10.9C13.17 9.64 14.84 9 16.5 9H7V7H17V9H16.5C18.12 9 19.74 9.61 21 10.82V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H13.06C12.65 20.74 12.26 20.45 11.9 20.1C11 19.21 10.45 18.13 10.18 17ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM20.31 17.9C20.75 17.21 21 16.38 21 15.5C21 13 19 11 16.5 11C14 11 12 13 12 15.5C12 18 14 20 16.5 20C17.37 20 18.19 19.75 18.88 19.32L22 22.39L23.39 21L20.31 17.9ZM16.5 18C15.12 18 14 16.88 14 15.5C14 14.12 15.12 13 16.5 13C17.88 13 19 14.12 19 15.5C19 16.88 17.88 18 16.5 18Z" />
    </Svg>
  );
};
