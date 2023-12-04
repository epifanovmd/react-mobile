import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KoalaIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 3C18.1 3 15.5 3 14.3 6.1C13.9 6 13.4 6 13 6H11C10.6 6 10.1 6 9.7 6.1C8.5 3 5.9 3 5 3C4 3 1 4 1 9C1 12.6 3.5 13.6 5 13.9V15C5 18.3 7.7 21 11 21H13C16.3 21 19 18.3 19 15V13.9C20.5 13.6 23 12.6 23 9C23 4 20 3 19 3ZM5 12V12.4C2.9 11.8 3.3 9.5 4.3 8.7C4 8.3 3 9 3 8.6C3 8.1 4.8 7.4 5.1 7.3C4.8 6.8 3.6 7 3.6 6.6C3.6 6.3 4.8 5.8 5.8 6C6.3 6.1 6.9 6.3 7.4 6.7C6 8 5 9.8 5 12ZM8.5 15C6.5 15 6.5 12 8.5 12C10.5 12 10.5 15 8.5 15ZM12.5 18H11.5C10.8 18 10.3 17.3 10.6 16.7L11.3 13.7C11.4 13.3 11.8 13.1 12.1 13C12.4 13 12.7 13.2 12.9 13.7L13.6 16.7C13.7 17.3 13.2 18 12.5 18ZM15.5 15C13.5 15 13.5 12 15.5 12C17.5 12 17.5 15 15.5 15ZM19.7 8.6C20.7 9.4 21.1 11.7 19 12.3C19.1 10.1 18.1 8 16.6 6.7C17.1 6.3 17.7 6.1 18.2 6C19.2 5.8 20.4 6.2 20.4 6.6C20.4 7 19.2 6.8 18.9 7.2C19.2 7.4 21 8.1 21 8.6C21 9 20.1 8.3 19.7 8.6Z" />
    </Svg>
  );
};
