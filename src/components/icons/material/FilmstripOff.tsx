import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FilmstripOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 4.27L2.28 3L21 21.72L19.73 23L16 19.27V21H8V19H6V21H4V7.27L1 4.27ZM18 9V7H16V9H18ZM18 13V11H16V13H18ZM18 15H16.82L6.82 5H8V3H16V5H18V3H20V18.18L18 16.18V15ZM8 13V11.27L7.73 11H6V13H8ZM8 17V15H6V17H8ZM6 3V4.18L4.82 3H6Z" />
    </Svg>
  );
};
