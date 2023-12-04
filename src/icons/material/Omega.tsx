import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OmegaIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.1501 18.9996H13.3901V16.8696C15.5001 15.2496 16.5901 13.2396 16.5901 10.8396C16.5901 9.33961 16.1601 8.15961 15.3201 7.28961C14.4701 6.41961 13.3701 5.99961 12.0301 5.99961C10.6801 5.99961 9.5701 6.41961 8.7101 7.29961C7.8401 8.16961 7.4101 9.36961 7.4101 10.8796C7.4101 13.2596 8.5001 15.2596 10.6101 16.8696V18.9996H4.8501V16.8696H8.4101C6.0401 15.3196 4.8501 13.2296 4.8501 10.5996C4.8501 8.49961 5.5001 6.85961 6.8101 5.65961C8.1201 4.44961 9.8401 3.84961 11.9701 3.84961C14.1501 3.84961 15.8901 4.44961 17.1901 5.63961C18.5001 6.82961 19.1501 8.49961 19.1501 10.5796C19.1501 13.2096 17.9501 15.3096 15.5501 16.8696H19.1501V18.9996Z" />
    </Svg>
  );
};
