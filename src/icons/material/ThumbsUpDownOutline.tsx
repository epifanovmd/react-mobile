import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ThumbsUpDownOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 6C12 5.45 11.55 5 11 5H5.82L6.5 1.82V1.59C6.5 1.28 6.37 1 6.17 0.79L5.38 0L0.44 4.94C0.17 5.21 0 5.59 0 6V12.5C0 13.33 0.67 14 1.5 14H8.25C8.87 14 9.4 13.62 9.63 13.09L11.89 7.8C11.96 7.63 12 7.44 12 7.25V6ZM10 7.13L7.92 12H2V6.21L3.93 4.28L3.36 7H10V7.13ZM22.5 10H15.75C15.13 10 14.6 10.38 14.37 10.91L12.11 16.2C12.04 16.37 12 16.56 12 16.75V18C12 18.55 12.45 19 13 19H18.18L17.5 22.18V22.42C17.5 22.73 17.63 23 17.83 23.22L18.62 24L23.56 19.06C23.83 18.79 24 18.41 24 18V11.5C24 10.67 23.33 10 22.5 10ZM22 17.79L20.07 19.72L20.64 17H14V16.87L16.08 12H22V17.79Z" />
    </Svg>
  );
};