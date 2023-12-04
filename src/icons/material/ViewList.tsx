import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewListIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9 5V9H21V5H9ZM9 19H21V15H9V19ZM9 14H21V10H9V14ZM4 9H8V5H4V9ZM4 19H8V15H4V19ZM4 14H8V10H4V14Z" />
    </Svg>
  );
};
