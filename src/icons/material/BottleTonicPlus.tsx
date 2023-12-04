import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BottleTonicPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 4H11L10 2H14L13 4ZM14 8V6H15V5H9V6H10V8C7.24 8 5 10.24 5 13V22H19V13C19 10.24 16.76 8 14 8ZM16 17H13V20H11V17H8V15H11V12H13V15H16V17Z" />
    </Svg>
  );
};
