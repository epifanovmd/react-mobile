import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatListBulletedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 5H21V7H7V5ZM7 13V11H21V13H7ZM4 4.5C4.39782 4.5 4.77936 4.65804 5.06066 4.93934C5.34196 5.22064 5.5 5.60218 5.5 6C5.5 6.39782 5.34196 6.77936 5.06066 7.06066C4.77936 7.34196 4.39782 7.5 4 7.5C3.60218 7.5 3.22064 7.34196 2.93934 7.06066C2.65804 6.77936 2.5 6.39782 2.5 6C2.5 5.60218 2.65804 5.22064 2.93934 4.93934C3.22064 4.65804 3.60218 4.5 4 4.5ZM4 10.5C4.39782 10.5 4.77936 10.658 5.06066 10.9393C5.34196 11.2206 5.5 11.6022 5.5 12C5.5 12.3978 5.34196 12.7794 5.06066 13.0607C4.77936 13.342 4.39782 13.5 4 13.5C3.60218 13.5 3.22064 13.342 2.93934 13.0607C2.65804 12.7794 2.5 12.3978 2.5 12C2.5 11.6022 2.65804 11.2206 2.93934 10.9393C3.22064 10.658 3.60218 10.5 4 10.5ZM7 19V17H21V19H7ZM4 16.5C4.39782 16.5 4.77936 16.658 5.06066 16.9393C5.34196 17.2206 5.5 17.6022 5.5 18C5.5 18.3978 5.34196 18.7794 5.06066 19.0607C4.77936 19.342 4.39782 19.5 4 19.5C3.60218 19.5 3.22064 19.342 2.93934 19.0607C2.65804 18.7794 2.5 18.3978 2.5 18C2.5 17.6022 2.65804 17.2206 2.93934 16.9393C3.22064 16.658 3.60218 16.5 4 16.5Z" />
    </Svg>
  );
};
