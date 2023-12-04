import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DoorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 3C6.89 3 6 3.89 6 5V21H18V5C18 3.89 17.11 3 16 3H8ZM8 5H16V19H8V5ZM13 11V13H15V11H13Z" />
    </Svg>
  );
};
