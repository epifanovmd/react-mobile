import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RelationOneToOneOrManyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 13V19H21L19 17V19H17V17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H17V13H19V15L21 13H22Z" />
    </Svg>
  );
};
