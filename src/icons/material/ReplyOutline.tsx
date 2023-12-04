import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ReplyOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 9.8V10.7L9.7 11C12.3 11.4 14.2 12.4 15.6 13.7C13.9 13.2 12.1 12.9 10 12.9H8V14.2L5.8 12L8 9.8ZM10 5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9" />
    </Svg>
  );
};
