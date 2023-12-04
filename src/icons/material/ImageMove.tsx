import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ImageMoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 3H19V0L24 5L19 10V7H15V3ZM21 11.94V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H12.06C12 3.33 12 3.67 12 4C12 6.12173 12.8429 8.15656 14.3431 9.65685C15.8434 11.1571 17.8783 12 20 12C20.33 12 20.67 12 21 11.94ZM19 18L14.5 12L11 16.5L8.5 13.5L5 18H19Z" />
    </Svg>
  );
};
