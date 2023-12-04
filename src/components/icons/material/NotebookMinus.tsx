import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const NotebookMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 7V5H5V4C5 2.9 5.9 2 7 2H13V9L15.5 7.5L18 9V2H19C20 2 21 3 21 4V13.8C20.1 13.3 19.1 13 18 13C14.7 13 12 15.7 12 19C12 20.1 12.3 21.1 12.8 22H7C5.9 22 5 21 5 20V19H3V17H5V13H3V11H5V7H3ZM5 5V7H7V5H5ZM5 19H7V17H5V19ZM5 13H7V11H5V13ZM14 18V20H22V18H14Z" />
    </Svg>
  );
};
