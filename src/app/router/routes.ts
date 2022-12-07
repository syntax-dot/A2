import { RouteRecordRaw } from 'vue-router'
import SettingsPageVue from '../views/SettingsPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '', component: SettingsPageVue, name: 'settings' },
]
