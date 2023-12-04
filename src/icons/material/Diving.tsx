import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DivingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.26 5.2L13.3 5.18C13.72 4.82 14.35 4.88 14.71 5.3L16.97 8H20C20.55 8 21 8.45 21 9C21 9.55 20.55 10 20 10H16.5C16.15 10 15.85 9.82 15.67 9.56L14.17 7.77L11.64 10.13L14.57 12.18C14.83 12.36 15 12.66 15 13V17C15 17.55 14.55 18 14 18C13.45 18 13 17.55 13 17V13.5L9.77 11.26C8.82 10.6 8.74 9.23 9.6 8.46L13.26 5.2ZM16.5 5C17.34 5 18 4.33 18 3.5C18 2.67 17.34 2 16.5 2C15.66 2 15 2.67 15 3.5C15 4.33 15.68 5 16.5 5ZM6 19H5C3.34 19 2 20.34 2 22H6V20.5H15V19H6Z" />
    </Svg>
  );
};
