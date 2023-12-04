import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TortoiseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.31 5.60084C18.09 5.56084 16.88 6.50084 16.5 8.00084C16 10.0008 16 10.0008 15 11.0008C13 13.0008 10 14.0008 4 15.0008C3 15.1608 2.5 15.5008 2 16.0008C4 16.0008 6 16.0008 4.5 17.5008L3 19.0008H6L8 17.0008C10 18.0008 11.33 18.0008 13.33 17.0008L14 19.0008H17L16 16.0008C16 16.0008 17 12.0008 18 11.0008C19 10.0008 19 11.0008 20 11.0008C21 11.0008 22 10.0008 22 8.50084C22 8.00084 22 7.00084 20.5 6.00084C20.15 5.76084 19.74 5.62084 19.31 5.60084ZM9 6.00084C7.4087 6.00084 5.88258 6.63298 4.75736 7.7582C3.63214 8.88342 3 10.4095 3 12.0008C3 12.6008 3.13 13.0808 3.23 13.6008C9.15 12.6208 12.29 11.5908 13.93 9.94084L14.43 9.44084C13.44 7.34084 11.32 6.00084 9 6.00084Z" />
    </Svg>
  );
};
