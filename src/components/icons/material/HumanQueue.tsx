import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HumanQueueIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 6C3.9 6 3 6.9 3 8C3 9.1 3.9 10 5 10C6.1 10 7 9.11 7 8C7 6.89 6.11 6 5 6ZM12 4C10.9 4 10 4.89 10 6C10 7.11 10.9 8 12 8C13.1 8 14 7.11 14 6C14 4.89 13.11 4 12 4ZM19 2C17.9 2 17 2.9 17 4C17 5.1 17.9 6 19 6C20.1 6 21 5.11 21 4C21 2.89 20.11 2 19 2ZM3.5 11C2.67 11 2 11.67 2 12.5V17H3V22H7V17H8V12.5C8 11.67 7.33 11 6.5 11H3.5ZM10.5 9C9.67 9 9 9.67 9 10.5V15H10V20H14V15H15V10.5C15 9.67 14.33 9 13.5 9H10.5ZM17.5 7C16.67 7 16 7.67 16 8.5V13H17V18H21V13H22V8.5C22 7.67 21.33 7 20.5 7H17.5Z" />
    </Svg>
  );
};
