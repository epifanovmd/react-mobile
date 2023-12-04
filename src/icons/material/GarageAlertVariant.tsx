import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GarageAlertVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 9V20H18V11H2V20H0V9L10 5L20 9ZM17 12H3V14H17V12ZM17 15H3V17H17V15ZM22 15V10H24V15H22ZM22 19V17H24V19H22Z" />
    </Svg>
  );
};
