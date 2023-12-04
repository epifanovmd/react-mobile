import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BasketFillIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 2H6V5H3V2ZM6 7H9V10H6V7ZM8 2H11V5H8V2ZM17 11L12 6H15V2H19V6H22L17 11ZM7.5 22C6.72 22 6.04 21.55 5.71 20.9L3.1 13.44L3 13C3 12.7348 3.10536 12.4804 3.29289 12.2929C3.48043 12.1054 3.73478 12 4 12H20C20.2652 12 20.5196 12.1054 20.7071 12.2929C20.8946 12.4804 21 12.7348 21 13L20.96 13.29L18.29 20.9C17.96 21.55 17.28 22 16.5 22H7.5ZM7.61 20H16.39L18.57 14H5.42L7.61 20Z" />
    </Svg>
  );
};
