import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArchiveMarkerOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.5 11C14.72 11 14.9 11.14 14.97 11.33C14.42 11.79 13.96 12.36 13.63 13H9V11.5C9 11.22 9.22 11 9.5 11H14.5ZM21 9H3V3H21V9ZM19 5H5V7H19V5ZM6 19V10H4V21H15.19C14.78 20.4 14.36 19.72 14 19H6ZM22 15.5C22 18.1 18.5 22 18.5 22C18.5 22 15 18.1 15 15.5C15 13.6 16.6 12 18.5 12C20.4 12 22 13.6 22 15.5ZM19.7 15.6C19.7 15 19.1 14.4 18.5 14.4C17.9 14.4 17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8C19.2 16.8 19.8 16.2 19.7 15.6Z" />
    </Svg>
  );
};
