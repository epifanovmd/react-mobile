import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleCirclesExtendedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 19C16.89 19 16 18.1 16 17C16 15.89 16.89 15 18 15C18.5304 15 19.0391 15.2107 19.4142 15.5858C19.7893 15.9609 20 16.4696 20 17C20 17.5304 19.7893 18.0391 19.4142 18.4142C19.0391 18.7893 18.5304 19 18 19ZM18 13C16.9391 13 15.9217 13.4214 15.1716 14.1716C14.4214 14.9217 14 15.9391 14 17C14 18.0609 14.4214 19.0783 15.1716 19.8284C15.9217 20.5786 16.9391 21 18 21C19.0609 21 20.0783 20.5786 20.8284 19.8284C21.5786 19.0783 22 18.0609 22 17C22 15.9391 21.5786 14.9217 20.8284 14.1716C20.0783 13.4214 19.0609 13 18 13ZM12 11.1C11.7505 11.1 11.5034 11.1491 11.2729 11.2446C11.0424 11.3401 10.8329 11.4801 10.6565 11.6565C10.4801 11.8329 10.3401 12.0424 10.2446 12.2729C10.1491 12.5034 10.1 12.7505 10.1 13C10.1 13.5039 10.3002 13.9872 10.6565 14.3435C11.0128 14.6998 11.4961 14.9 12 14.9C12.5039 14.9 12.9872 14.6998 13.3435 14.3435C13.6998 13.9872 13.9 13.5039 13.9 13C13.9 12.7505 13.8509 12.5034 13.7554 12.2729C13.6599 12.0424 13.5199 11.8329 13.3435 11.6565C13.1671 11.4801 12.9576 11.3401 12.7271 11.2446C12.4966 11.1491 12.2495 11.1 12 11.1ZM6 19C4.89 19 4 18.1 4 17C4 15.89 4.89 15 6 15C6.53043 15 7.03914 15.2107 7.41421 15.5858C7.78929 15.9609 8 16.4696 8 17C8 17.5304 7.78929 18.0391 7.41421 18.4142C7.03914 18.7893 6.53043 19 6 19ZM6 13C4.93913 13 3.92172 13.4214 3.17157 14.1716C2.42143 14.9217 2 15.9391 2 17C2 18.0609 2.42143 19.0783 3.17157 19.8284C3.92172 20.5786 4.93913 21 6 21C7.06087 21 8.07828 20.5786 8.82843 19.8284C9.57857 19.0783 10 18.0609 10 17C10 15.9391 9.57857 14.9217 8.82843 14.1716C8.07828 13.4214 7.06087 13 6 13ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C10.89 8 10 7.1 10 6C10 4.89 10.89 4 12 4ZM12 10C13.0609 10 14.0783 9.57857 14.8284 8.82843C15.5786 8.07828 16 7.06087 16 6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6C8 7.06087 8.42143 8.07828 9.17157 8.82843C9.92172 9.57857 10.9391 10 12 10Z" />
    </Svg>
  );
};