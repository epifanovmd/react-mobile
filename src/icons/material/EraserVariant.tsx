import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EraserVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.1399 3C14.6299 3 14.1199 3.2 13.7299 3.59L2.58988 14.73C1.80988 15.5 1.80988 16.77 2.58988 17.56L5.02988 20H12.6899L21.4099 11.27C22.1999 10.5 22.1999 9.23 21.4099 8.44L16.5599 3.59C16.1699 3.2 15.6499 3 15.1399 3ZM16.9999 18L14.9999 20H21.9999V18" />
    </Svg>
  );
};
