import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OfficeBuildingOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 3V21H13V17.5H11V21H5V3H19ZM15 7H17V5H15V7ZM11 7H13V5H11V7ZM7 7H9V5H7V7ZM15 11H17V9H15V11ZM11 11H13V9H11V11ZM7 11H9V9H7V11ZM15 15H17V13H15V15ZM11 15H13V13H11V15ZM7 15H9V13H7V15ZM15 19H17V17H15V19ZM7 19H9V17H7V19ZM21 1H3V23H21V1Z" />
    </Svg>
  );
};
