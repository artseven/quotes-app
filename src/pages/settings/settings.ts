import { SettingsService } from '../../services/settings';
import { Toggle } from 'ionic-angular';
import { Component, EventEmitter } from '@angular/core';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  
  constructor(private settingsService: SettingsService) {}

  onToggle(toggle: Toggle) {
    this.settingsService.setBackground(toggle.checked);
  }
}
