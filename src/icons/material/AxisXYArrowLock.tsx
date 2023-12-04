import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AxisXYArrowLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.8 5C22.4 5 23 5.6 23 6.3V9.8C23 10.4 22.4 11 21.7 11H16.2C15.6 11 15 10.4 15 9.7V6.2C15 5.6 15.6 5 16.2 5V3.5C16.2 2.1 17.6 1 19 1C20.4 1 21.8 2.1 21.8 3.5V5ZM20.5 5V3.5C20.5 2.7 19.8 2.2 19 2.2C18.2 2.2 17.5 2.7 17.5 3.5V5H20.5ZM1.73999 19.25L3.20999 13.79L4.67999 16.34L8.99999 13.85V3H11V13.85L17.53 17.61L19 15.03L20.5 20.5L15 21.96L16.53 19.35L9.99999 15.58L5.67999 18.07L7.20999 20.71L1.73999 19.25Z" />
    </Svg>
  );
};
