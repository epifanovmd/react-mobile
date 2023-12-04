import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RestartIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 3.99961C14.1 3.99961 16.1 4.79961 17.6 6.29961C20.7 9.39961 20.7 14.4996 17.6 17.5996C15.8 19.4996 13.3 20.1996 10.9 19.8996L11.4 17.8996C13.1 18.0996 14.9 17.4996 16.2 16.1996C18.5 13.8996 18.5 10.0996 16.2 7.69961C15.1 6.59961 13.5 5.99961 12 5.99961V10.5996L7.00003 5.59961L12 0.599609V3.99961ZM6.30003 17.5996C3.70003 14.9996 3.30003 10.9996 5.10003 7.89961L6.60003 9.39961C5.50003 11.5996 5.90003 14.3996 7.80003 16.1996C8.30003 16.6996 8.90003 17.0996 9.60003 17.3996L9.00003 19.3996C8.00003 18.9996 7.10003 18.3996 6.30003 17.5996Z" />
    </Svg>
  );
};
