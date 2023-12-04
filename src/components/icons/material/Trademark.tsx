import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TrademarkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.8 8.44H6.87V16H4.89V8.44H2V7H9.8V8.44ZM13.5 7L15.96 13.5L18.41 7H21V16H19V13.5L19.22 9.24L16.63 16H15.28L12.7 9.25L12.9 13.5V16H10.93V7H13.5Z" />
    </Svg>
  );
};
