import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CursorDefaultOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.07 14.27C10.57 14.03 11.16 14.25 11.4 14.75L13.7 19.74L15.5 18.89L13.19 13.91C12.95 13.41 13.17 12.81 13.67 12.58L13.95 12.5L16.25 12.05L8 5.12V15.9L9.82 14.43L10.07 14.27ZM13.64 21.97C13.14 22.21 12.54 22 12.31 21.5L10.13 16.76L7.62 18.78C7.45 18.92 7.24 19 7 19C6.73478 19 6.48043 18.8946 6.29289 18.7071C6.10536 18.5196 6 18.2652 6 18V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.24 2 7.47 2.09 7.64 2.23L7.65 2.22L19.14 11.86C19.57 12.22 19.62 12.85 19.27 13.27C19.12 13.45 18.91 13.57 18.7 13.61L15.54 14.23L17.74 18.96C18 19.46 17.76 20.05 17.26 20.28L13.64 21.97Z" />
    </Svg>
  );
};
