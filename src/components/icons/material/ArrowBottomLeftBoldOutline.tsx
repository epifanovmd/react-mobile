import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ArrowBottomLeftBoldOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.36 19.78H4.21997V5.63997L8.46997 9.87997L14.12 4.21997L19.78 9.87997L14.12 15.54L18.36 19.78ZM6.33997 17.66H13.41L11.29 15.54L16.95 9.87997L14.12 7.04997L8.45997 12.71L6.33997 10.59V17.66Z" />
    </Svg>
  );
};
