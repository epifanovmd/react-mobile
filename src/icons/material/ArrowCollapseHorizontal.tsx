import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowCollapseHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 20V4H15.03V20H13ZM10 20V4H12.03V20H10ZM5 8L9.03 12L5 16V13H2V11H5V8ZM20 16L16 12L20 8V11H23V13H20V16Z" />
    </Svg>
  );
};
