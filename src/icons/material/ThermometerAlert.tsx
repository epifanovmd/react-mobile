import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ThermometerAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 13V7H19V13H17ZM17 17V15H19V17H17ZM13 13V5C13 3.3 11.7 2 10 2C8.30004 2 7.00004 3.3 7.00004 5V13C4.80004 14.7 4.30004 17.8 6.00004 20C7.70004 22.2 10.8 22.7 13 21C15.2 19.3 15.7 16.2 14 14C13.7 13.6 13.4 13.3 13 13ZM10 4C10.6 4 11 4.4 11 5V8H9.00004V5C9.00004 4.4 9.40004 4 10 4Z" />
    </Svg>
  );
};
