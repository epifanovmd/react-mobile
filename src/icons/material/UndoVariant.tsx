import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UndoVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.5 7C15.2239 7 16.8772 7.68482 18.0962 8.90381C19.3152 10.1228 20 11.7761 20 13.5C20 15.2239 19.3152 16.8772 18.0962 18.0962C16.8772 19.3152 15.2239 20 13.5 20H10V18H13.5C16 18 18 16 18 13.5C18 11 16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5ZM6 18H8V20H6V18Z" />
    </Svg>
  );
};
