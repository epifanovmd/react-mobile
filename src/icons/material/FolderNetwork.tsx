import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderNetworkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 15V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11L13 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H13V19H14C14.2652 19 14.5196 19.1054 14.7071 19.2929C14.8946 19.4804 15 19.7348 15 20H22V22H15C15 22.2652 14.8946 22.5196 14.7071 22.7071C14.5196 22.8946 14.2652 23 14 23H10C9.73478 23 9.48043 22.8946 9.29289 22.7071C9.10536 22.5196 9 22.2652 9 22H2V20H9C9 19.7348 9.10536 19.4804 9.29289 19.2929C9.48043 19.1054 9.73478 19 10 19H11V17H5C4.46957 17 3.96086 16.7893 3.58579 16.4142C3.21071 16.0391 3 15.5304 3 15Z" />
    </Svg>
  );
};
