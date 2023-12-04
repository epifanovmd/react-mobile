import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MapMarkerLeftOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 6.5C16.38 6.5 17.5 7.62 17.5 9C17.5 10.38 16.38 11.5 15 11.5C13.62 11.5 12.5 10.38 12.5 9C12.5 7.62 13.62 6.5 15 6.5ZM15 2C18.87 2 22 5.13 22 9C22 14.25 15 22 15 22C15 22 8 14.25 8 9C8 5.13 11.13 2 15 2ZM10 9C10 10 10 12 15 18.71C20 12 20 10 20 9C20 6.24 17.76 4 15 4C12.24 4 10 6.24 10 9ZM6 7L1 12L6 17V7Z" />
    </Svg>
  );
};
