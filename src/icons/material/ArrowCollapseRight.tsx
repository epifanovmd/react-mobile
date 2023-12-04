import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowCollapseRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.08 4.08L20 12L12.08 19.92L10.67 18.5L16.17 13H2V11H16.17L10.67 5.5L12.08 4.08ZM20 12V22H22V2H20V12Z" />
    </Svg>
  );
};
