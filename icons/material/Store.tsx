import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const StoreIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 18H6V14H12V18ZM21 14V12L20 7H4L3 12V14H4V20H14V14H18V20H20V14H21ZM20 4H4V6H20V4Z" />
    </Svg>
  );
};
