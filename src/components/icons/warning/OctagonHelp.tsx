import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const OctagonHelpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M9.14648 9.07361C9.31728 8.54732 9.63015 8.07896 10.0508 7.71948C10.4714 7.36001 10.9838 7.12378 11.5303 7.03708C12.0768 6.95038 12.6362 7.0164 13.1475 7.22803C13.6587 7.43966 14.1014 7.78875 14.4268 8.23633C14.7521 8.68391 14.9469 9.21256 14.9904 9.76416C15.0339 10.3158 14.9238 10.8688 14.6727 11.3618C14.4215 11.8548 14.0394 12.2685 13.5676 12.5576C13.0958 12.8467 12.5533 12.9998 12 12.9998V14.0002M12.0498 17V17.1L11.9502 17.1002V17H12.0498ZM7.33173 3.9375L3.9375 7.33173L3.93442 7.33462C3.59057 7.67847 3.41824 7.85081 3.29492 8.05204C3.18526 8.23098 3.10425 8.4263 3.05526 8.63037C3 8.86055 3 9.10506 3 9.59424V14.4058C3 14.8949 3 15.1395 3.05526 15.3697C3.10425 15.5738 3.18526 15.7688 3.29492 15.9478C3.41857 16.1495 3.59182 16.3228 3.9375 16.6685L7.33173 20.0627C7.67763 20.4086 7.85021 20.5812 8.05204 20.7048C8.23099 20.8145 8.42581 20.8958 8.62988 20.9448C8.85971 21 9.10382 21 9.59151 21H14.4075C14.8952 21 15.1404 21 15.3702 20.9448C15.5743 20.8958 15.7693 20.8145 15.9482 20.7049C16.1501 20.5812 16.323 20.4086 16.6689 20.0627L20.0632 16.6685C20.4091 16.3226 20.5817 16.1496 20.7053 15.9478C20.815 15.7688 20.8953 15.5738 20.9443 15.3697C20.9996 15.1395 21 14.895 21 14.4058V9.59424C21 9.10506 20.9996 8.86055 20.9443 8.63037C20.8953 8.4263 20.815 8.23099 20.7053 8.05205C20.5817 7.85022 20.4091 7.67761 20.0632 7.33173L16.6689 3.9375C16.3233 3.59181 16.15 3.41857 15.9482 3.29492C15.7693 3.18526 15.5743 3.10425 15.3702 3.05526C15.14 3 14.8945 3 14.4053 3H9.59375C9.10457 3 8.86006 3 8.62988 3.05526C8.42581 3.10425 8.23099 3.18526 8.05204 3.29492C7.85204 3.41748 7.68106 3.58847 7.3414 3.92813L7.33173 3.9375Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
