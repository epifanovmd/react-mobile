import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneReturnIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 6V11H19.5V7.5H13.87L16.3 9.93L15.24 11L11 6.75L15.24 2.5L16.3 3.57L13.87 6H21ZM8.82 8.58C9.08 8.32 9.17 7.93 9.06 7.58C8.69 6.42 8.5 5.22 8.5 4C8.5 3.73478 8.39464 3.48043 8.20711 3.29289C8.01957 3.10536 7.76522 3 7.5 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4C3 8.50868 4.79107 12.8327 7.97918 16.0208C11.1673 19.2089 15.4913 21 20 21C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16.5C21 16.2348 20.8946 15.9804 20.7071 15.7929C20.5196 15.6054 20.2652 15.5 20 15.5C18.79 15.5 17.58 15.31 16.43 14.93C16.08 14.82 15.69 14.91 15.43 15.17L13.23 17.37C10.39 15.92 8.09 13.62 6.64 10.78L8.82 8.58Z" />
    </Svg>
  );
};
