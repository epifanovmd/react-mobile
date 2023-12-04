import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BorderVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 13H17V11H15V13ZM15 21H17V19H15V21ZM15 5H17V3H15V5ZM19 9H21V7H19V9ZM19 5H21V3H19V5ZM19 13H21V11H19V13ZM19 21H21V19H19V21ZM11 21H13V3H11V21ZM19 17H21V15H19V17ZM7 5H9V3H7V5ZM3 17H5V15H3V17ZM3 21H5V19H3V21ZM3 13H5V11H3V13ZM7 13H9V11H7V13ZM7 21H9V19H7V21ZM3 5H5V3H3V5ZM3 9H5V7H3V9Z" />
    </Svg>
  );
};
