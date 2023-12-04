import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HamburgerMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 9H3C3 9 3 3 12 3C21 3 21 9 21 9ZM13.35 17H3V18C3 19.66 4.34 21 6 21H13.35C13.13 20.37 13 19.7 13 19C13 18.3 13.13 17.63 13.35 17ZM21.86 13.73C21.95 13.5 22 13.26 22 13C22 11.9 21.11 11 20 11H11L8.5 13L6 11H4C2.9 11 2 11.9 2 13C2 14.1 2.9 15 4 15H14.54C15.64 13.78 17.23 13 19 13C20.04 13 21 13.26 21.86 13.73ZM15 18V20H23V18H15Z" />
    </Svg>
  );
};
