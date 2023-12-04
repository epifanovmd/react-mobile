import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShapeCirclePlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 19C12.5913 19 14.1174 18.3679 15.2426 17.2426C16.3679 16.1174 17 14.5913 17 13H19C19 15.1217 18.1571 17.1566 16.6569 18.6569C15.1566 20.1571 13.1217 21 11 21C8.87827 21 6.84344 20.1571 5.34315 18.6569C3.84285 17.1566 3 15.1217 3 13C3 10.8783 3.84285 8.84344 5.34315 7.34315C6.84344 5.84285 8.87827 5 11 5V7C9.4087 7 7.88258 7.63214 6.75736 8.75736C5.63214 9.88258 5 11.4087 5 13C5 14.5913 5.63214 16.1174 6.75736 17.2426C7.88258 18.3679 9.4087 19 11 19ZM19 5H22V7H19V10H17V7H14V5H17V2H19V5Z" />
    </Svg>
  );
};
