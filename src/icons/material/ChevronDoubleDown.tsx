import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChevronDoubleDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16.59 5.58984L18 6.99984L12 12.9998L6 6.99984L7.41 5.58984L12 10.1698L16.59 5.58984ZM16.59 11.5898L18 12.9998L12 18.9998L6 12.9998L7.41 11.5898L12 16.1698L16.59 11.5898Z" />
    </Svg>
  );
};
