import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArchivePlusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 13.09V10H20V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09ZM9.5 11C9.22 11 9 11.22 9 11.5V13H15V11.5C15 11.22 14.78 11 14.5 11H9.5ZM21 9H3V3H21V9ZM19 5H5V7H19V5ZM6 19V10H4V21H13.35C13.13 20.37 13 19.7 13 19H6ZM20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" />
    </Svg>
  );
};
