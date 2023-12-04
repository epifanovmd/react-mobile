import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewModuleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 5V11H21V5H16ZM10 11H15V5H10V11ZM16 18H21V12H16V18ZM10 18H15V12H10V18ZM4 18H9V12H4V18ZM4 11H9V5H4V11Z" />
    </Svg>
  );
};
