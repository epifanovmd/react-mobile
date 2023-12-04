import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BridgeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 14V10.91C6.28 10.58 5.61 10.18 5 9.71V14H7ZM5 18H3V16H1V14H3V7H5V8.43C6.8 10 9.27 11 12 11C14.73 11 17.2 10 19 8.43V7H21V14H23V16H21V18H19V16H5V18ZM17 10.91V14H19V9.71C18.39 10.18 17.72 10.58 17 10.91ZM16 14V11.32C15.36 11.55 14.69 11.72 14 11.84V14H16ZM13 14V11.96L12 12L11 11.96V14H13ZM10 14V11.84C9.31 11.72 8.64 11.55 8 11.32V14H10Z" />
    </Svg>
  );
};
