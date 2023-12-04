import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SelectionDragIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 17H17V14H19V17H22V19H19V22H17V19H14V17ZM12 17V19H9V17H12ZM7 17V19H3V15H5V17H7ZM3 13V10H5V13H3ZM3 8V4H7V6H5V8H3ZM9 4H12V6H9V4ZM15 4H19V8H17V6H15V4ZM19 10V12H17V10H19Z" />
    </Svg>
  );
};
