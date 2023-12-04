import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AtomIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 11.0001C12.2652 11.0001 12.5196 11.1055 12.7071 11.293C12.8946 11.4805 13 11.7349 13 12.0001C13 12.2653 12.8946 12.5197 12.7071 12.7072C12.5196 12.8947 12.2652 13.0001 12 13.0001C11.7348 13.0001 11.4804 12.8947 11.2929 12.7072C11.1053 12.5197 11 12.2653 11 12.0001C11 11.7349 11.1053 11.4805 11.2929 11.293C11.4804 11.1055 11.7348 11.0001 12 11.0001ZM4.21998 4.2201C5.64998 2.7901 8.74998 3.4301 12 5.5601C15.25 3.4301 18.35 2.7901 19.78 4.2201C21.21 5.6501 20.57 8.7501 18.44 12.0001C20.57 15.2501 21.21 18.3501 19.78 19.7801C18.35 21.2101 15.25 20.5701 12 18.4401C8.74998 20.5701 5.64998 21.2101 4.21998 19.7801C2.78998 18.3501 3.42998 15.2501 5.55998 12.0001C3.42998 8.7501 2.78998 5.6501 4.21998 4.2201ZM15.54 8.4601C16.15 9.0801 16.71 9.7101 17.23 10.3401C18.61 8.2101 19.11 6.3801 18.36 5.6401C17.62 4.8901 15.79 5.3901 13.66 6.7701C14.29 7.2901 14.92 7.8501 15.54 8.4601ZM8.45998 15.5401C7.84998 14.9201 7.28998 14.2901 6.76998 13.6601C5.38998 15.7901 4.88998 17.6201 5.63998 18.3601C6.37998 19.1101 8.20998 18.6101 10.34 17.2301C9.70998 16.7101 9.07998 16.1501 8.45998 15.5401ZM5.63998 5.6401C4.88998 6.3801 5.38998 8.2101 6.76998 10.3401C7.28998 9.7101 7.84998 9.0801 8.45998 8.4601C9.07998 7.8501 9.70998 7.2901 10.34 6.7701C8.20998 5.3901 6.37998 4.8901 5.63998 5.6401ZM9.87998 14.1201C10.58 14.8201 11.3 15.4601 12 16.0301C12.7 15.4601 13.42 14.8201 14.12 14.1201C14.82 13.4201 15.46 12.7001 16.03 12.0001C15.46 11.3001 14.82 10.5801 14.12 9.8801C13.42 9.1801 12.7 8.5401 12 7.9701C11.3 8.5401 10.58 9.1801 9.87998 9.8801C9.17998 10.5801 8.53998 11.3001 7.96998 12.0001C8.53998 12.7001 9.17998 13.4201 9.87998 14.1201ZM18.36 18.3601C19.11 17.6201 18.61 15.7901 17.23 13.6601C16.71 14.2901 16.15 14.9201 15.54 15.5401C14.92 16.1501 14.29 16.7101 13.66 17.2301C15.79 18.6101 17.62 19.1101 18.36 18.3601Z" />
    </Svg>
  );
};
