import { Component } from "@angular/core";
import { StringFeatureFlagDirective } from "@openfeature/angular-sdk";
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";

@Component({
  selector: "app-description",
  standalone: true,
  imports: [
    StringFeatureFlagDirective,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: "./description.component.html",
})
export class DescriptionComponent {}
