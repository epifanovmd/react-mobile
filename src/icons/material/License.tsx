import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LicenseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.00011 10.0008C9.01047 9.20834 9.32986 8.45128 9.89024 7.8909C10.4506 7.33053 11.2077 7.01113 12.0001 7.00077C12.7925 7.01113 13.5496 7.33053 14.11 7.8909C14.6704 8.45128 14.9897 9.20834 15.0001 10.0008C14.9897 10.7932 14.6704 11.5503 14.11 12.1106C13.5496 12.671 12.7925 12.9904 12.0001 13.0008C11.2077 12.9904 10.4506 12.671 9.89024 12.1106C9.32986 11.5503 9.01047 10.7932 9.00011 10.0008ZM12.0001 19.0008L16.0001 20.0008V16.9208C14.7938 17.6472 13.4081 18.0214 12.0001 18.0008C10.5921 18.0214 9.20643 17.6472 8.00011 16.9208V20.0008L12.0001 19.0008ZM12.0001 4.00077C11.2121 3.98639 10.4294 4.13333 9.70027 4.43256C8.97112 4.73179 8.31087 5.17698 7.76011 5.74077C7.19022 6.29214 6.73988 6.95487 6.4371 7.68774C6.13431 8.42061 5.98557 9.20795 6.00011 10.0008C5.98969 10.7886 6.14044 11.5702 6.4431 12.2976C6.74576 13.025 7.19394 13.6829 7.76011 14.2308C8.3083 14.8 8.9674 15.2507 9.69668 15.5552C10.426 15.8596 11.2099 16.0113 12.0001 16.0008C12.7903 16.0113 13.5743 15.8596 14.3035 15.5552C15.0328 15.2507 15.6919 14.8 16.2401 14.2308C16.8063 13.6829 17.2545 13.025 17.5571 12.2976C17.8598 11.5702 18.0105 10.7886 18.0001 10.0008C18.0146 9.20795 17.8659 8.42061 17.5631 7.68774C17.2603 6.95487 16.81 6.29214 16.2401 5.74077C15.6893 5.17698 15.0291 4.73179 14.2999 4.43256C13.5708 4.13333 12.7881 3.98639 12.0001 4.00077ZM20.0001 10.0008C19.9788 10.9607 19.7858 11.909 19.4301 12.8008C19.1097 13.7082 18.6249 14.5489 18.0001 15.2808V23.0008L12.0001 21.0008L6.00011 23.0008V15.2808C4.7058 13.8272 3.99361 11.947 4.00011 10.0008C3.98248 8.95135 4.18014 7.90946 4.58089 6.93942C4.98163 5.96937 5.57696 5.09176 6.33011 4.36077C7.06381 3.60087 7.94547 2.9994 8.92067 2.5935C9.89587 2.1876 10.9439 1.98587 12.0001 2.00077C13.0563 1.98587 14.1043 2.1876 15.0795 2.5935C16.0547 2.9994 16.9364 3.60087 17.6701 4.36077C18.4233 5.09176 19.0186 5.96937 19.4193 6.93942C19.8201 7.90946 20.0177 8.95135 20.0001 10.0008Z" />
    </Svg>
  );
};
