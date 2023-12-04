import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RelationOneOrManyToOnlyOneIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 15V17H21V19H19V17H18V19H16V17H11V9H7V11H5V9L3 11H2V5H3L5 7V5H7V7H13V15H16V13H18V15H19V13H21V15H22Z" />
    </Svg>
  );
};
