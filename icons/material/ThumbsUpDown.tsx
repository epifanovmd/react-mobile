import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ThumbsUpDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.5 10H15.75C15.13 10 14.6 10.38 14.37 10.91L12.11 16.2C12.04 16.37 12 16.56 12 16.75V18C12 18.2652 12.1054 18.5196 12.2929 18.7071C12.4804 18.8946 12.7348 19 13 19H18.18L17.5 22.18V22.42C17.5 22.73 17.63 23 17.83 23.22L18.62 24L23.56 19.06C23.83 18.79 24 18.41 24 18V11.5C24 11.1022 23.842 10.7206 23.5607 10.4393C23.2794 10.158 22.8978 10 22.5 10ZM12 6C12 5.73478 11.8946 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5H5.82L6.5 1.82V1.59C6.5 1.28 6.37 1 6.17 0.79L5.38 0L0.44 4.94C0.17 5.21 0 5.59 0 6V12.5C0 12.8978 0.158035 13.2794 0.43934 13.5607C0.720644 13.842 1.10218 14 1.5 14H8.25C8.87 14 9.4 13.62 9.63 13.09L11.89 7.8C11.96 7.63 12 7.44 12 7.25V6Z" />
    </Svg>
  );
};
