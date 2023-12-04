import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BatteryMinusVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16.67 4C17.4 4 18 4.6 18 5.33V20.67C18 21.0227 17.8599 21.361 17.6105 21.6105C17.361 21.8599 17.0227 22 16.67 22H7.33C6.6 22 6 21.4 6 20.67V5.33C6 4.97726 6.14012 4.63897 6.38955 4.38955C6.63897 4.14012 6.97726 4 7.33 4H9V2H15V4H16.67ZM8 12V14H16V12" />
    </Svg>
  );
};
