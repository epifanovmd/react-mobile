import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HomeLightningBoltOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2L2 12H4V21H20V12H22L12 2ZM12 5L18 11V19H6V11L12 5ZM11.5 14H9L12.5 7V11H15L11.5 18V14Z" />
    </Svg>
  );
};
