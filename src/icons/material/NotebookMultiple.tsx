import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NotebookMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.05 8.99906H7.06V5.99906H9.05V4.02906H7.06V3.02906C7.06 1.91906 7.95 1.03906 9.05 1.03906H15.03V7.99906L17.5 6.49906L20 7.99906V1.03906H21C22.05 1.03906 23 1.99906 23 3.02906V16.9991C23 18.0291 22.05 18.9991 21 18.9991H9.05C8 18.9991 7.06 18.0491 7.06 16.9991V15.9991H9.05V13.9991H7.06V10.9991H9.05V8.99906ZM1 17.9991H3V14.9991H1V12.9991H3V9.99906H1V7.99906H3V4.99906H5V7.99906H3V9.99906H5V12.9991H3V14.9991H5V17.9991H3V19.9991H5V20.9991H21V22.9991H5C4.46957 22.9991 3.96086 22.7883 3.58579 22.4133C3.21071 22.0382 3 21.5295 3 20.9991V19.9991H1V17.9991Z" />
    </Svg>
  );
};
