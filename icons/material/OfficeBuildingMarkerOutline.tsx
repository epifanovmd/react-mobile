import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const OfficeBuildingMarkerOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 9H17V11H15V9ZM17 5H15V7H17V5ZM11 15H13V13H11V15ZM13 5H11V7H13V5ZM11 11H13V9H11V11ZM9 5H7V7H9V5ZM9 9H7V11H9V9ZM14.55 21H13V17.5H11V21H5V3H19V11.03C19.71 11.09 20.39 11.31 21 11.63V1H3V23H15.91C15.5 22.44 15 21.76 14.55 21ZM7 19H9V17H7V19ZM9 13H7V15H9V13ZM22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13C20.4 13 22 14.6 22 16.5ZM19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6Z" />
    </Svg>
  );
};
