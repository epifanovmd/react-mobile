import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShapeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 13.5V21.5H3V13.5H11ZM9 15.5H5V19.5H9V15.5ZM12 2L17.5 11H6.5L12 2ZM12 5.86L10.08 9H13.92L12 5.86ZM17.5 13C20 13 22 15 22 17.5C22 20 20 22 17.5 22C15 22 13 20 13 17.5C13 15 15 13 17.5 13ZM17.5 15C16.837 15 16.2011 15.2634 15.7322 15.7322C15.2634 16.2011 15 16.837 15 17.5C15 18.163 15.2634 18.7989 15.7322 19.2678C16.2011 19.7366 16.837 20 17.5 20C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5C20 16.837 19.7366 16.2011 19.2678 15.7322C18.7989 15.2634 18.163 15 17.5 15Z" />
    </Svg>
  );
};
