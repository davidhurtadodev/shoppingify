import { CSSObjectWithLabel, ControlProps } from 'react-select';
const selectStyles = {
  control: (baseStyles: CSSObjectWithLabel, state: ControlProps) => {
    let borderColor: string = '#BDBDBD';
    if (state.isFocused) borderColor = '#F9A109';

    if (state.isFocused && state.isDisabled) borderColor = '#F9A109';
    return {
      ...baseStyles,
      '&:hover': {
        borderColor: 'none',
      },
      '&:focus': {
        borderColor: '#F9A109',
      },
      borderColor,
      boxShadow: 'none',
      borderWidth: '2px',
      borderRadius: '12px',
      fontSize: '14px',
      padding: '0 0 0 1rem',
      height: '64px',
    };
  },
  valueContainer: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    padding: '0',
  }),
  placeholder: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    margin: '0',
    padding: '0',
    color: '#BDBDBD',
  }),
  input: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    margin: '0',
    padding: '0',
    fontSize: '0.875rem',
    fontWeight: '500',
  }),
  indicatorsContainer: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    margin: '0',
    padding: '0',
  }),
};

export default selectStyles;
