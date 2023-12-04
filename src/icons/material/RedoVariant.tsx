import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RedoVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.5 7C8.77609 7 7.12279 7.68482 5.90381 8.90381C4.68482 10.1228 4 11.7761 4 13.5C4 15.2239 4.68482 16.8772 5.90381 18.0962C7.12279 19.3152 8.77609 20 10.5 20H14V18H10.5C8 18 6 16 6 13.5C6 11 8 9 10.5 9H16.17L13.09 12.09L14.5 13.5L20 8L14.5 2.5L13.08 3.91L16.17 7H10.5ZM18 18H16V20H18V18Z" />
    </Svg>
  );
};
