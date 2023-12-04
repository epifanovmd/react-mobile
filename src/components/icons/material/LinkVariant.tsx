import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LinkVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.5901 13.4103C11.0001 13.8003 11.0001 14.4403 10.5901 14.8303C10.2001 15.2203 9.56007 15.2203 9.17007 14.8303C7.22007 12.8803 7.22007 9.71031 9.17007 7.76031L12.7101 4.22031C14.6601 2.27031 17.8301 2.27031 19.7801 4.22031C21.7301 6.17031 21.7301 9.34031 19.7801 11.2903L18.2901 12.7803C18.3001 11.9603 18.1701 11.1403 17.8901 10.3603L18.3601 9.88031C19.5401 8.71031 19.5401 6.81031 18.3601 5.64031C17.1901 4.46031 15.2901 4.46031 14.1201 5.64031L10.5901 9.17031C9.41007 10.3403 9.41007 12.2403 10.5901 13.4103ZM13.4101 9.17031C13.8001 8.78031 14.4401 8.78031 14.8301 9.17031C16.7801 11.1203 16.7801 14.2903 14.8301 16.2403L11.2901 19.7803C9.34007 21.7303 6.17007 21.7303 4.22007 19.7803C2.27007 17.8303 2.27007 14.6603 4.22007 12.7103L5.71007 11.2203C5.70007 12.0403 5.83007 12.8603 6.11007 13.6503L5.64007 14.1203C4.46007 15.2903 4.46007 17.1903 5.64007 18.3603C6.81007 19.5403 8.71007 19.5403 9.88007 18.3603L13.4101 14.8303C14.5901 13.6603 14.5901 11.7603 13.4101 10.5903C13.0001 10.2003 13.0001 9.56031 13.4101 9.17031Z" />
    </Svg>
  );
};
