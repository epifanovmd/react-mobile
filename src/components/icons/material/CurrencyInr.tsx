import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CurrencyInrIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 3H18L17 5H13.74C14.22 5.58 14.58 6.26 14.79 7H18L17 9H15C14.75 11.57 12.74 13.63 10.2 13.96V14H9.5L15.5 21H13L7 14V12H9.5C11.26 12 12.72 10.7 12.96 9H7L8 7H12.66C12.1 5.82 10.9 5 9.5 5H7L8 3Z" />
    </Svg>
  );
};
