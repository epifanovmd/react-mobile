import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MapMarkerRadiusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C15.31 2 18 4.66 18 7.95C18 12.41 12 19 12 19C12 19 6 12.41 6 7.95C6 4.66 8.69 2 12 2ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM20 19C20 21.21 16.42 23 12 23C7.58 23 4 21.21 4 19C4 17.71 5.22 16.56 7.11 15.83L7.75 16.74C6.67 17.19 6 17.81 6 18.5C6 19.88 8.69 21 12 21C15.31 21 18 19.88 18 18.5C18 17.81 17.33 17.19 16.25 16.74L16.89 15.83C18.78 16.56 20 17.71 20 19Z" />
    </Svg>
  );
};
