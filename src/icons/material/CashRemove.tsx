import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CashRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.46 18.12L16.88 19.54L19 17.41L21.12 19.54L22.54 18.12L20.41 16L22.54 13.88L21.12 12.46L19 14.59L16.88 12.46L15.46 13.88L17.59 16L15.46 18.12ZM14.97 11.62C14.86 10.28 13.58 8.97 12 9C10.3 9.04 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.39 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.62ZM13 16H7C7 14.9 6.1 14 5 14V10C6.1 10 7 9.1 7 8H17C17 9.1 17.9 10 19 10V10.05C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z" />
    </Svg>
  );
};
