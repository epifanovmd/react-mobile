export type MaskItem = string | RegExp | [RegExp];

export type MaskArray = Array<MaskItem>;

export type Mask = MaskArray | ((value?: string) => MaskArray);

export type FormatWithMaskProps = {
  text?: string;
  mask?: Mask;
};

export type FormatWithMaskResult = {
  masked: string;
  unmasked: string;
};

export const formatWithMask = (
  props: FormatWithMaskProps,
): FormatWithMaskResult => {
  const { text, mask } = props;

  // make sure it'll not break with null or undefined inputs
  if (!text) {
    return { masked: '', unmasked: '' };
  }
  if (!mask) {
    return {
      masked: text || '',
      unmasked: text || '',
    };
  }

  let maskArray = typeof mask === 'function' ? mask(text) : mask;

  let masked = '';
  let unmasked = '';

  let maskCharIndex = 0;
  let valueCharIndex = 0;

  while (true) {
    // if mask is ended, break.
    if (maskCharIndex === maskArray.length) {
      break;
    }

    let maskChar = maskArray[maskCharIndex];
    let valueChar = text[valueCharIndex];

    // if value is ended, break.
    if (valueCharIndex === text.length) {
      break;
    }

    // value equals mask: add to masked result and advance on both mask and value indexes
    if (maskChar === valueChar) {
      masked += maskChar;

      valueCharIndex += 1;
      maskCharIndex += 1;
      continue;
    }

    let unmaskedValueChar = text[valueCharIndex];

    // it's a regex maskChar: let's advance on value index and validate the value within the regex
    if (typeof maskChar === 'object') {
      // advance on value index
      valueCharIndex += 1;

      const maskCharRegex = Array.isArray(maskChar) ? maskChar[0] : maskChar;

      const matchRegex = RegExp(maskCharRegex).test(valueChar);

      // value match regex: add to masked and unmasked result and advance on mask index too
      if (matchRegex) {
        masked += valueChar;
        unmasked += unmaskedValueChar;

        maskCharIndex += 1;
      }

      continue;
    } else {
      // it's a fixed maskChar: add to maskedResult and advance on mask index
      masked += maskChar;

      maskCharIndex += 1;
      continue;
    }
  }

  return { masked, unmasked };
};
