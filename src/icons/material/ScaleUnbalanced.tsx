import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScaleUnbalancedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 20V8.8C13.5 8.6 14 8.3 14.3 7.9L17.8 9.2L14.9 16C14.4 18 15.9 19 18.4 19C20.9 19 22.5 18 21.9 16L19.3 9.7L20.2 10L20.9 8.1L15 6C15 4.8 14.3 3.6 13 3.1C11.8 2.6 10.5 3.1 9.7 4L3.9 2L3.2 3.8L4.8 4.4L2.1 11C1.6 13 3.1 14 5.6 14C8.1 14 9.7 13 9.1 11L6.6 5.1L9 6C9 7.2 9.7 8.4 11 8.9V20H2V22H22V20H13ZM19.9 16H16.9L18.4 12.2L19.9 16ZM7.1 11H4.1L5.6 7.2L7.1 11ZM11.1 5.7C11.3 5.2 11.9 4.9 12.4 5.1C12.9 5.3 13.2 5.9 13 6.4C12.8 6.9 12.2 7.2 11.7 7C11.2 6.8 10.9 6.2 11.1 5.7Z" />
    </Svg>
  );
};
