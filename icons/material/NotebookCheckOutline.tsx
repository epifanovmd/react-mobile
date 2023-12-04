import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const NotebookCheckOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16ZM17 4V10L15 8L13 10V4H9V20H12.08C12.2 20.72 12.45 21.39 12.8 22H7C5.95 22 5 21.05 5 20V19H3V17H5V13H3V11H5V7H3V5H5V4C5 2.89 5.9 2 7 2H19C20.05 2 21 2.95 21 4V13.8C20.39 13.45 19.72 13.2 19 13.08V4H17ZM5 19H7V17H5V19ZM5 13H7V11H5V13ZM5 7H7V5H5V7Z" />
    </Svg>
  );
};
