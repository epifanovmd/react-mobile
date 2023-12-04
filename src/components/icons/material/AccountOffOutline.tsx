import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AccountOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.75 7L4.03 5.75L13.26 15L20 21.72L18.73 23L15.73 20H4V17C4 15.14 6.61 13.92 9.09 13.36L2.75 7ZM20 17V19.18L18.1 17.28V17C18.1 16.74 17.6 16.35 16.8 16L14 13.18C16.71 13.63 20 14.91 20 17ZM5.9 17V18.1H13.83L10.72 15C8.19 15.3 5.9 16.45 5.9 17ZM12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.95 14.6 11.58 12.75 11.93L8.07 7.25C8.42 5.4 10.05 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6Z" />
    </Svg>
  );
};
