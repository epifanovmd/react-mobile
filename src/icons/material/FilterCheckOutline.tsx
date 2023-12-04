import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilterCheckOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 19.88C13.04 20.18 12.94 20.5 12.72 20.71C12.32 21.1 11.69 21.1 11.3 20.71L7.28998 16.7C7.05998 16.47 6.95998 16.16 6.99998 15.87V10.75L2.20998 4.62C1.86998 4.19 1.94998 3.56 2.37998 3.22C2.56998 3.08 2.77998 3 2.99998 3H17C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L13 10.75V19.88ZM5.03998 5L8.99998 10.07V15.58L11 17.58V10.05L14.96 5H5.03998ZM17.75 21L15 18L16.16 16.84L17.75 18.43L21.34 14.84L22.5 16.25L17.75 21Z" />
    </Svg>
  );
};
