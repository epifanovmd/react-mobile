import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OfficeBuildingMarkerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.19 21C14.12 19.43 13 17.36 13 15.5C13 13.67 13.96 12 15.4 11H15V9H17V10.23C17.5 10.09 18 10 18.5 10C18.67 10 18.84 10 19 10.03V3H5V21H11V17.5H13V21H15.19ZM15 5H17V7H15V5ZM9 19H7V17H9V19ZM9 15H7V13H9V15ZM9 11H7V9H9V11ZM9 7H7V5H9V7ZM11 5H13V7H11V5ZM11 9H13V11H11V9ZM11 15V13H13V15H11ZM18.5 12C16.6 12 15 13.61 15 15.5C15 18.11 18.5 22 18.5 22C18.5 22 22 18.11 22 15.5C22 13.61 20.4 12 18.5 12ZM18.5 16.81C17.8 16.81 17.3 16.21 17.3 15.61C17.3 14.91 17.9 14.41 18.5 14.41C19.1 14.41 19.7 15 19.7 15.61C19.8 16.21 19.2 16.81 18.5 16.81Z" />
    </Svg>
  );
};
