import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DownloadNetworkOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 20C15 19.7348 14.8946 19.4804 14.7071 19.2929C14.5196 19.1054 14.2652 19 14 19H13V17H17C17.5304 17 18.0391 16.7893 18.4142 16.4142C18.7893 16.0391 19 15.5304 19 15V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H11V19H10C9.73478 19 9.48043 19.1054 9.29289 19.2929C9.10536 19.4804 9 19.7348 9 20H2V22H9C9 22.2652 9.10536 22.5196 9.29289 22.7071C9.48043 22.8946 9.73478 23 10 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22H22V20H15ZM7 15V5H17V15H7ZM12 14L16 10H13V6H11V10H8L12 14Z" />
    </Svg>
  );
};
