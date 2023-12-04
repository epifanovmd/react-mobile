import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ShowerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 14V15C21 16.91 19.93 18.57 18.35 19.41L19 22H17L16.5 20C16.33 20 16.17 20 16 20H8C7.83 20 7.67 20 7.5 20L7 22H5L5.65 19.41C4.07 18.57 3 16.91 3 15V14H2V12H20V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4C18.5 4 18.12 4.34 18 4.79C18.63 5.33 19 6.13 19 7H13C13 6.20435 13.3161 5.44129 13.8787 4.87868C14.4413 4.31607 15.2044 4 16 4C16.06 4 16.11 4 16.17 4C16.58 2.84 17.69 2 19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V14H21ZM19 14H5V15C5 15.7956 5.31607 16.5587 5.87868 17.1213C6.44129 17.6839 7.20435 18 8 18H16C16.7956 18 17.5587 17.6839 18.1213 17.1213C18.6839 16.5587 19 15.7956 19 15V14Z" />
    </Svg>
  );
};
