import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CradleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 9H12V4H8C5.8 4 4 5.8 4 8V14C4 15.1 4.9 16 6 16H8V18.9C7.4 18.5 6.8 18.1 6.3 17.6L4.9 19C6.7 20.9 9.2 22 12 22C14.8 22 17.3 20.9 19.1 19.1L17.7 17.7C17.2 18.2 16.7 18.6 16.1 19V16H18.1C19.2 16 20.1 15.1 20.1 14V11C20 9.9 19.1 9 18 9ZM14 19.8C13.4 20 12.7 20 12 20C11.3 20 10.6 19.9 10 19.8V16H14V19.8ZM18 14H6V8C6 6.9 6.9 6 8 6H10V11H18V14Z" />
    </Svg>
  );
};
