import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ViewDashboardVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5V19H8V5H2ZM9 5V10H15V5H9ZM16 5V14H22V5H16ZM9 11V19H15V11H9ZM16 15V19H22V15H16Z" />
    </Svg>
  );
};
