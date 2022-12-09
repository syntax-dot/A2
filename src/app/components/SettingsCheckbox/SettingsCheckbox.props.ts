export interface SettingsCheckboxProps {
  modelValue: boolean
  label?: string
}

export interface SettingsCheckboxEmits {
  (event: 'update:modelValue', value: boolean): void
}
