export interface OtherSettingsProps {
  selectedTimezone: string
  isAutoJumpToNewPosts: boolean
}

export interface OtherSettingsEmits {
  (emit: 'update:isAutoJumpToNewPosts'): void
}
