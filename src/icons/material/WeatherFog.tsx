import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherFogIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16C14 16.2652 13.8946 16.5196 13.7071 16.7071C13.5196 16.8946 13.2652 17 13 17H3C2.73478 17 2.48043 16.8946 2.29289 16.7071C2.10536 16.5196 2 16.2652 2 16C2 15.7348 2.10536 15.4804 2.29289 15.2929C2.48043 15.1054 2.73478 15 3 15ZM16 15H21C21.2652 15 21.5196 15.1054 21.7071 15.2929C21.8946 15.4804 22 15.7348 22 16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H16C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15ZM1 12C1 10.6739 1.52678 9.40215 2.46447 8.46447C3.40215 7.52678 4.67392 7 6 7C7 4.65 9.3 3 12 3C15.43 3 18.24 5.66 18.5 9.03L19 9C21.19 9 22.97 10.76 23 13H21C21 12.4696 20.7893 11.9609 20.4142 11.5858C20.0391 11.2107 19.5304 11 19 11H17V10C17 8.67392 16.4732 7.40215 15.5355 6.46447C14.5979 5.52678 13.3261 5 12 5C9.5 5 7.45 6.82 7.06 9.19C6.73 9.07 6.37 9 6 9C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12C3 12.35 3.06 12.69 3.17 13H1.1L1 12ZM3 19H5C5.26522 19 5.51957 19.1054 5.70711 19.2929C5.89464 19.4804 6 19.7348 6 20C6 20.2652 5.89464 20.5196 5.70711 20.7071C5.51957 20.8946 5.26522 21 5 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20C2 19.7348 2.10536 19.4804 2.29289 19.2929C2.48043 19.1054 2.73478 19 3 19ZM8 19H21C21.2652 19 21.5196 19.1054 21.7071 19.2929C21.8946 19.4804 22 19.7348 22 20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H8C7.73478 21 7.48043 20.8946 7.29289 20.7071C7.10536 20.5196 7 20.2652 7 20C7 19.7348 7.10536 19.4804 7.29289 19.2929C7.48043 19.1054 7.73478 19 8 19Z" />
    </Svg>
  );
};
