import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AccountEyeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12ZM10 6C11.11 6 12 6.9 12 8C12 9.1 11.11 10 10 10C8.89 10 8 9.11 8 8C8 6.89 8.9 6 10 6ZM9.27 20H2V17C2 14.33 7.33 13 10 13C11.04 13 12.5 13.21 13.86 13.61C13 13.95 12.2 14.42 11.5 15C11 14.94 10.5 14.9 10 14.9C7.03 14.9 3.9 16.36 3.9 17V18.1H9.22C9.2 18.15 9.17 18.2 9.14 18.25L8.85 19L9.14 19.75C9.18 19.83 9.23 19.91 9.27 20ZM17 18C17.56 18 18 18.44 18 19C18 19.56 17.56 20 17 20C16.44 20 16 19.56 16 19C16 18.44 16.44 18 17 18ZM17 15C14.27 15 11.94 16.66 11 19C11.94 21.34 14.27 23 17 23C19.73 23 22.06 21.34 23 19C22.06 16.66 19.73 15 17 15ZM17 21.5C15.62 21.5 14.5 20.38 14.5 19C14.5 17.62 15.62 16.5 17 16.5C18.38 16.5 19.5 17.62 19.5 19C19.5 20.38 18.38 21.5 17 21.5Z" />
    </Svg>
  );
};
