import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiCancelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 6C8.61995 6 5.49995 7.12 2.99995 9L1.19995 6.6C4.20995 4.34 7.94995 3 12 3C16.05 3 19.7899 4.34 22.7999 6.6L21 9C18.5 7.12 15.38 6 12 6ZM15.53 12.72C16.42 12.26 17.43 12 18.5 12C18.58 12 18.66 12 18.74 12L19.2 11.4C17.19 9.89 14.7 9 12 9C9.29995 9 6.80995 9.89 4.79995 11.4L6.59995 13.8C8.09995 12.67 9.96995 12 12 12C13.26 12 14.45 12.26 15.53 12.72ZM12 15C10.65 15 9.39995 15.45 8.39995 16.2L12 21L12.34 20.54C12.13 19.9 12 19.22 12 18.5C12 17.24 12.36 16.08 13 15.08C12.66 15.03 12.33 15 12 15ZM23 18.5C23 21 21 23 18.5 23C16 23 14 21 14 18.5C14 16 16 14 18.5 14C21 14 23 16 23 18.5ZM20 21.08L15.92 17C15.65 17.42 15.5 17.94 15.5 18.5C15.5 20.16 16.84 21.5 18.5 21.5C19.0599 21.5 19.58 21.35 20 21.08ZM21.5 18.5C21.5 16.84 20.16 15.5 18.5 15.5C17.94 15.5 17.42 15.65 17 15.92L21.08 20C21.35 19.58 21.5 19.06 21.5 18.5Z" />
    </Svg>
  );
};
