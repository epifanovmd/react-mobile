import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyeArrowLeftIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C12.36 19.5 12.72 19.5 13.08 19.45C13.03 19.13 13 18.82 13 18.5C13 17.94 13.08 17.38 13.24 16.84C12.83 16.94 12.42 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 12.29 16.97 12.59 16.92 12.88C17.58 12.63 18.29 12.5 19 12.5C20.17 12.5 21.31 12.84 22.29 13.5C22.56 13 22.8 12.5 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM18 15V17H22V19H18V21L15 18L18 15Z" />
    </Svg>
  );
};
