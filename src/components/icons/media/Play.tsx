import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PlayIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M5 17.3336V6.66698C5 5.78742 5 5.34715 5.18509 5.08691C5.34664 4.85977 5.59564 4.71064 5.87207 4.67499C6.18868 4.63415 6.57701 4.84126 7.35254 5.25487L17.3525 10.5882L17.3562 10.5898C18.2132 11.0469 18.642 11.2756 18.7826 11.5803C18.9053 11.8462 18.9053 12.1531 18.7826 12.4189C18.6418 12.7241 18.212 12.9537 17.3525 13.4121L7.35254 18.7454C6.57645 19.1593 6.1888 19.3657 5.87207 19.3248C5.59564 19.2891 5.34664 19.1401 5.18509 18.9129C5 18.6527 5 18.2132 5 17.3336Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
