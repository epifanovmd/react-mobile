import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderMultipleImageIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 15L11.5 9L15 13.5L17.5 10.5L21 15H7ZM22 4H14L12 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H22C22.5304 18 23.0391 17.7893 23.4142 17.4142C23.7893 17.0391 24 16.5304 24 16V6C24 5.46957 23.7893 4.96086 23.4142 4.58579C23.0391 4.21071 22.5304 4 22 4ZM2 6H0V11V20C0 20.5304 0.210714 21.0391 0.585786 21.4142C0.960859 21.7893 1.46957 22 2 22H20V20H2V6Z" />
    </Svg>
  );
};
