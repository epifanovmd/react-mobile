import { SvgProps } from 'react-native-svg';
import { FlexProps } from '../components';

export type FlexSvgProps = FlexProps &
  Omit<SvgProps, 'fontStyle' | 'fontWeight'>;
