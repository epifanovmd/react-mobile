import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatColorTextIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.62 12L12 5.67L14.37 12H9.62ZM11 3L5.5 17H7.75L8.87 14H15.12L16.25 17H18.5L13 3H11Z" />
    </Svg>
  );
};
