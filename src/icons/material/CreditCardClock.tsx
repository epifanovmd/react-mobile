import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardClockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 14H17.5V16.82L19.94 18.23L19.19 19.53L16 17.69V14ZM24 17C24 18.8565 23.2625 20.637 21.9497 21.9497C20.637 23.2625 18.8565 24 17 24C14.21 24 11.8 22.36 10.67 20H4C2.89 20 2 19.1 2 18V6C2 4.89 2.89 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V12.1C23.24 13.36 24 15.09 24 17ZM17 12C15.6739 12 14.4021 12.5268 13.4645 13.4645C12.5268 14.4021 12 15.6739 12 17C12 18.3261 12.5268 19.5979 13.4645 20.5355C14.4021 21.4732 15.6739 22 17 22C18.3261 22 19.5979 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17C22 15.6739 21.4732 14.4021 20.5355 13.4645C19.5979 12.5268 18.3261 12 17 12ZM20 10V7H4V10H20Z" />
    </Svg>
  );
};
