import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CarBackIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 11L7 7H17L18 11H6ZM18.92 6C18.71 5.4 18.14 5 17.5 5H6.5C5.86 5 5.29 5.4 5.08 6L3 12V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H5C5.26522 21 5.51957 20.8946 5.70711 20.7071C5.89464 20.5196 6 20.2652 6 20V18H18V20C18 20.2652 18.1054 20.5196 18.2929 20.7071C18.4804 20.8946 18.7348 21 19 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V12L18.92 6ZM7 16H5V14H7V16ZM19 16H17V14H19V16ZM14 16H10V14H14V16Z" />
    </Svg>
  );
};
