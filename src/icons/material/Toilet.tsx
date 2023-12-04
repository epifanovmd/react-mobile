import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToiletIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 22H17V19.5C19.41 17.87 21 15.12 21 12V4C21 3.46957 20.7893 2.96086 20.4142 2.58579C20.0391 2.21071 19.5304 2 19 2H15C13.89 2 13 2.9 13 4V12H3C3 15.09 5 18 9 19.5V22ZM5.29 14H18.71C18.14 15.91 16.77 17.5 15 18.33V20H11V18.33C9 18 5.86 15.91 5.29 14ZM15 4H19V12H15V4ZM16 5V8H18V5H16Z" />
    </Svg>
  );
};
