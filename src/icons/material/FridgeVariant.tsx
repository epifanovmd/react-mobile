import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FridgeVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 4V19C19 20.11 18.11 21 17 21V22H15V21H12.5V2H17C18.11 2 19 2.9 19 4ZM7 2H11.5V21H9V22H7V21C5.9 21 5 20.11 5 19V4C5 2.9 5.9 2 7 2ZM10 10H7V14H10V10Z" />
    </Svg>
  );
};
