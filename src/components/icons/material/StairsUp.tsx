import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StairsUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 6H22V9H18V13H14V17H9.99996V21H2.99996V18H6.99996V14H11V10H15V6ZM10.17 6.66L4.65996 12.17L2.82996 10.34L8.33996 4.83L6.49996 3H12V8.5L10.17 6.66Z" />
    </Svg>
  );
};
