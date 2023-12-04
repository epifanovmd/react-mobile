import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GradientHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9 13V11H11V13H9ZM11 15V13H13V15H11ZM11 11V9H13V11H11ZM9 9V7H11V9H9ZM9 17V15H11V17H9ZM3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5ZM18 15V17H16V15H18ZM18 11V13H16V11H18ZM18 7V9H16V7H18ZM11 5V7H13V5H15V7H13V9H15V11H13V13H15V15H13V17H15V19H13V17H11V19H5V5H11Z" />
    </Svg>
  );
};
