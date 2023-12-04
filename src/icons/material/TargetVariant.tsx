import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TargetVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22.08 11.04H20.08V4H13.05V2H11.04V4H4V11.04H2V13.05H4V20.08H11.04V22.08H13.05V20.08H20.08V13.05H22.08V11.04ZM18.07 18.07H13.05V16.06H11.04V18.07H6V13.05H8.03V11.04H6V6H11.04V8.03H13.05V6H18.07V11.04H16.06V13.05H18.07V18.07ZM13.05 12.05C13.05 12.3152 12.9446 12.5696 12.7571 12.7571C12.5696 12.9446 12.3152 13.05 12.05 13.05C11.5 13.05 11.04 12.6 11.04 12.05C11.04 11.5 11.5 11.04 12.05 11.04C12.6 11.04 13.05 11.5 13.05 12.05Z" />
    </Svg>
  );
};
