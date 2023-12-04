import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContentSaveOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M8.20011 5.00047L6.20011 3.00047H17.0001L21.0001 7.00047V17.8005L12.2001 9.00047H15.0001V5.00047H8.20011ZM22.1101 21.4605L20.8401 22.7305L19.1001 21.0005C19.0701 21.0005 19.0301 21.0005 19.0001 21.0005H5.00011C3.90011 21.0005 3.00011 20.1105 3.00011 19.0005V5.00047C3.00011 4.97047 3.00011 4.93047 3.00011 4.90047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM7.11011 9.00047L5.00011 6.89047V9.00047H7.11011ZM14.8901 16.7805L11.2201 13.1105C9.95011 13.4605 9.00011 14.6105 9.00011 16.0005C9.00011 17.6605 10.3401 19.0005 12.0001 19.0005C13.3901 19.0005 14.5401 18.0505 14.8901 16.7805Z" />
    </Svg>
  );
};
