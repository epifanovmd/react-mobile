import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyboardF12Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 7H8V9H4V11H7V13H4V17H2V7ZM16 7H20C21.11 7 22 7.9 22 9V11C22 12.11 21.11 13 20 13H18V15H22V17H16V13C16 11.9 16.9 11 18 11H20V9H16V7ZM10 7H14V17H12V9H10V7Z" />
    </Svg>
  );
};
