import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SnowflakeAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.46 9.41L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.28995 3.41L11 5.12V7.38L8.49995 8.82L6.49995 7.69L5.91995 5.36L3.99995 5.88L4.46995 7.65L2.69995 8.12L3.21995 10.05L5.54995 9.43L7.54995 10.56V13.45L5.54995 14.58L3.21995 13.96L2.69995 15.89L4.46995 16.36L3.99995 18.12L5.92995 18.64L6.54995 16.31L8.54995 15.18L11 16.62V18.88L9.28995 20.59L10.71 22L12 20.71L13.29 22L14.7 20.59L13 18.88V16.62L16.46 14.61V9.41ZM9.49995 10.56L12 9.11L14.5 10.56V13.44L12 14.89L9.49995 13.44V10.56ZM19 13V7H21V13H19ZM19 17V15H21V17H19Z" />
    </Svg>
  );
};
