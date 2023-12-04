import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyboardOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 4.27L2.28 3L20 20.72L18.73 22L15.73 19H4C2.89 19 2 18.1 2 17V7C2 6.5 2.18 6.07 2.46 5.73L1 4.27ZM19 10V8H17V10H19ZM19 13V11H17V13H19ZM16 10V8H14V10H16ZM16 13V11H14V12.18L11.82 10H13V8H11V9.18L9.82 8L6.82 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.86 21.46 18.59 20.7 18.87L14.82 13H16ZM8 15V17H13.73L11.73 15H8ZM5 10H6.73L5 8.27V10ZM7 13V11H5V13H7ZM8 13H9.73L8 11.27V13Z" />
    </Svg>
  );
};
