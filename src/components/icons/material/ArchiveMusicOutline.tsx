import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArchiveMusicOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 3H3V9H21V3ZM19 7H5V5H19V7ZM18 11V10H20V11H18ZM14.5 11C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11H14.5ZM13.26 19C13.09 19.47 13 19.97 13 20.5C13 20.67 13 20.84 13.03 21H4V10H6V19H13.26ZM22 13V15H20V20.5C20 21.88 18.88 23 17.5 23C16.12 23 15 21.88 15 20.5C15 19.12 16.12 18 17.5 18C17.86 18 18.19 18.07 18.5 18.21V13H22Z" />
    </Svg>
  );
};
