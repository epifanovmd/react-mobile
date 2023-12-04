import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BorderBottomVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 15H3V17H5V15ZM3 21H21V19H3V21ZM5 11H3V13H5V11ZM19 9H21V7H19V9ZM19 5H21V3H19V5ZM5 7H3V9H5V7ZM19 17H21V15H19V17ZM19 13H21V11H19V13ZM17 3H15V5H17V3ZM13 3H11V5H13V3ZM5 3H3V5H5V3ZM9 3H7V5H9" />
    </Svg>
  );
};
