import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilterPlusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.0001 17H18.0001V14H20.0001V17H23.0001V19H20.0001V22H18.0001V19H15.0001V17ZM13.0001 19.88C13.0401 20.18 12.9401 20.5 12.7201 20.71C12.3201 21.1 11.6901 21.1 11.3001 20.71L7.2901 16.7C7.0601 16.47 6.9601 16.16 7.0001 15.87V10.75L2.2101 4.62C1.8701 4.19 1.9501 3.56 2.3801 3.22C2.5701 3.08 2.7801 3 3.0001 3H17.0001C17.2201 3 17.4301 3.08 17.6201 3.22C18.0501 3.56 18.1301 4.19 17.7901 4.62L13.0001 10.75V19.88ZM5.0401 5L9.0001 10.07V15.58L11.0001 17.58V10.05L14.9601 5H5.0401Z" />
    </Svg>
  );
};
