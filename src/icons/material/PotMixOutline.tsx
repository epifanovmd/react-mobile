import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PotMixOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.6 8.99961L18 3.09961L19.7 4.09961L16.9 8.99961H14.6ZM16.3 9.99961H21V11.9996H19V18.9996C19 20.0996 18.1 20.9996 17 20.9996H7C5.9 20.9996 5 20.0996 5 18.9996V11.9996H3V9.99961H16.3ZM17 11.9996H7V18.9996H17V11.9996Z" />
    </Svg>
  );
};
