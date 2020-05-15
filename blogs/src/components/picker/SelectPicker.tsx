import React, { useCallback } from 'react';
import { SelectPicker } from 'rsuite';
import { SelectPickerProps } from 'rsuite/lib/SelectPicker';

interface CustomSelectPickerProps extends SelectPickerProps {
  prependLabel?: string;
}

export const CustomSelectPicker = ({
  prependLabel,
  ...rest
}: CustomSelectPickerProps) => {
  const renderValue = useCallback((val, item, selectedEle) => {
    return (
      <>
        <span style={{ color: '#575757' }}>{prependLabel}</span>
        {selectedEle}
      </>
    );
  }, [prependLabel]);

  return (
    <SelectPicker
      {...(prependLabel !== undefined && {
        renderValue
      })}
      {...rest}
    />
  );
};
