import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TerraformIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 5.40039V11.8004L15.4 15.0004V8.70039L21 5.40039ZM14.8 8.70039V15.0004L9.2 11.8004V5.40039L14.8 8.70039ZM14.8 15.7004V22.1004L9.2 18.9004V12.5004L14.8 15.7004ZM8.6 5.10039V11.5004L3 8.30039V1.90039L8.6 5.10039Z" />
    </Svg>
  );
};
