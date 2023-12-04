import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatTextdirectionLToRIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 18L17 14V17H5V19H17V22L21 18ZM9 10V15H11V4H13V15H15V4H17V2H9C7.93913 2 6.92172 2.42143 6.17157 3.17157C5.42143 3.92172 5 4.93913 5 6C5 7.06087 5.42143 8.07828 6.17157 8.82843C6.92172 9.57857 7.93913 10 9 10Z" />
    </Svg>
  );
};
