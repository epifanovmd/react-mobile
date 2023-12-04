import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WifiMediumIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M8.34375 14.5898C8.80959 14.0903 9.37285 13.6915 9.99877 13.418C10.6247 13.1446 11.2995 13.0024 11.9826 13C12.6656 12.9977 13.3418 13.1353 13.9697 13.4044C14.5975 13.6735 15.1637 14.0683 15.633 14.5646M6.14941 11.5439C6.89476 10.7446 7.79597 10.1065 8.79745 9.66899C9.79893 9.23146 10.8802 9.00386 11.9731 9.00005C13.066 8.99623 14.1475 9.21648 15.1521 9.64701C16.1566 10.0775 17.0617 10.7084 17.8127 11.5025M12 19C11.4477 19 11 18.5523 11 18C11 17.4478 11.4477 17 12 17C12.5523 17 13 17.4478 13 18C13 18.5523 12.5523 19 12 19Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
