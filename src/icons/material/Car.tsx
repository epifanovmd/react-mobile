import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 11L6.5 6.5H17.5L19 11H5ZM17.5 16C17.1022 16 16.7206 15.842 16.4393 15.5607C16.158 15.2794 16 14.8978 16 14.5C16 14.1022 16.158 13.7206 16.4393 13.4393C16.7206 13.158 17.1022 13 17.5 13C17.8978 13 18.2794 13.158 18.5607 13.4393C18.842 13.7206 19 14.1022 19 14.5C19 14.8978 18.842 15.2794 18.5607 15.5607C18.2794 15.842 17.8978 16 17.5 16ZM6.5 16C6.10218 16 5.72064 15.842 5.43934 15.5607C5.15804 15.2794 5 14.8978 5 14.5C5 14.1022 5.15804 13.7206 5.43934 13.4393C5.72064 13.158 6.10218 13 6.5 13C6.89782 13 7.27936 13.158 7.56066 13.4393C7.84196 13.7206 8 14.1022 8 14.5C8 14.8978 7.84196 15.2794 7.56066 15.5607C7.27936 15.842 6.89782 16 6.5 16ZM18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H5C5.26522 21 5.51957 20.8946 5.70711 20.7071C5.89464 20.5196 6 20.2652 6 20V19H18V20C18 20.2652 18.1054 20.5196 18.2929 20.7071C18.4804 20.8946 18.7348 21 19 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V12L18.92 6Z" />
    </Svg>
  );
};
