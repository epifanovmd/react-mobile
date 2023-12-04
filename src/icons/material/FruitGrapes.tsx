import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FruitGrapesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12ZM7 10C5.9 10 5 10.9 5 12C5 13.1 5.9 14 7 14C8.1 14 9 13.1 9 12C9 10.9 8.1 10 7 10ZM17 10C15.9 10 15 10.9 15 12C15 13.1 15.9 14 17 14C18.1 14 19 13.1 19 12C19 10.9 18.1 10 17 10ZM14.5 6C13.4 6 12.5 6.9 12.5 8C12.5 9.1 13.4 10 14.5 10C15.6 10 16.5 9.1 16.5 8C16.5 6.9 15.6 6 14.5 6ZM9.5 6C8.4 6 7.5 6.9 7.5 8C7.5 9.1 8.4 10 9.5 10C10.6 10 11.5 9.1 11.5 8C11.5 6.9 10.6 6 9.5 6ZM14.5 14C13.4 14 12.5 14.9 12.5 16C12.5 17.1 13.4 18 14.5 18C15.6 18 16.5 17.1 16.5 16C16.5 14.9 15.6 14 14.5 14ZM9.5 14C8.4 14 7.5 14.9 7.5 16C7.5 17.1 8.4 18 9.5 18C10.6 18 11.5 17.1 11.5 16C11.5 14.9 10.6 14 9.5 14ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18ZM14.4 2.2L13.6 1C11.4 2 11.2 5.6 11.2 6H12.7C12.8 5.2 13.1 2.7 14.4 2.2Z" />
    </Svg>
  );
};
