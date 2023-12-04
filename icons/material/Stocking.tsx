import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const StockingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 2C17.5305 2 18.0392 2.21071 18.4142 2.58579C18.7893 2.96086 19 3.46957 19 4V7C19 7.53043 18.7893 8.03914 18.4142 8.41421C18.0392 8.78929 17.5305 9 17 9V17C17 17.85 16.5 18.57 15.74 18.86L9.50002 21.77C8.50002 22.24 7.29002 21.81 6.83002 20.81L6.00002 19C5.50002 18 5.95002 16.8 6.95002 16.34L10 14.91V9C9.46959 9 8.96088 8.78929 8.58581 8.41421C8.21073 8.03914 8.00002 7.53043 8.00002 7V4C8.00002 3.46957 8.21073 2.96086 8.58581 2.58579C8.96088 2.21071 9.46959 2 10 2H17ZM10 4V7H17V4H10Z" />
    </Svg>
  );
};
