import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TextBoxSearchOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.5 12C18 12 20 14 20 16.5C20 17.38 19.75 18.21 19.31 18.9L22.39 22L21 23.39L17.88 20.32C17.19 20.75 16.37 21 15.5 21C13 21 11 19 11 16.5C11 14 13 12 15.5 12ZM15.5 14C14.837 14 14.2011 14.2634 13.7322 14.7322C13.2634 15.2011 13 15.837 13 16.5C13 17.163 13.2634 17.7989 13.7322 18.2678C14.2011 18.7366 14.837 19 15.5 19C16.163 19 16.7989 18.7366 17.2678 18.2678C17.7366 17.7989 18 17.163 18 16.5C18 15.837 17.7366 15.2011 17.2678 14.7322C16.7989 14.2634 16.163 14 15.5 14ZM5 3H19C20.11 3 21 3.89 21 5V13.03C20.5 12.23 19.81 11.54 19 11V5H5V19H9.5C9.81 19.75 10.26 20.42 10.81 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3ZM7 7H17V9H7V7ZM7 11H12.03C11.23 11.5 10.54 12.19 10 13H7V11ZM7 15H9.17C9.06 15.5 9 16 9 16.5V17H7V15Z" />
    </Svg>
  );
};
