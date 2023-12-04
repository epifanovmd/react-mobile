import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountEyeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 8C6 5.79 7.79 4 10 4C12.21 4 14 5.79 14 8C14 10.21 12.21 12 10 12C7.79 12 6 10.21 6 8ZM9.14 19.75L8.85 19L9.14 18.25C9.84 16.5 11.08 15.14 12.61 14.22C11.79 14.08 10.92 14 10 14C5.58 14 2 15.79 2 18V20H9.27C9.23 19.91 9.18 19.83 9.14 19.75ZM17 18C16.44 18 16 18.44 16 19C16 19.56 16.44 20 17 20C17.56 20 18 19.56 18 19C18 18.44 17.56 18 17 18ZM23 19C22.06 21.34 19.73 23 17 23C14.27 23 11.94 21.34 11 19C11.94 16.66 14.27 15 17 15C19.73 15 22.06 16.66 23 19ZM19.5 19C19.5 17.62 18.38 16.5 17 16.5C15.62 16.5 14.5 17.62 14.5 19C14.5 20.38 15.62 21.5 17 21.5C18.38 21.5 19.5 20.38 19.5 19Z" />
    </Svg>
  );
};
