import { Component, OnInit } from "@angular/core";
import { OpenFeature } from "@openfeature/web-sdk";
import { environment } from "../environments/environment";
import { ToggleBotComponent } from "./components/togglebot.component";
import { DescriptionComponent } from "./components/description.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ToggleBotComponent, DescriptionComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  ngOnInit() {
    if (!environment.DEVCYCLE_CLIENT_SDK_KEY) {
      alert(
        "Set your DEVCYCLE_CLIENT_SDK_KEY environment variable to use the DevCycle SDK."
      );
    }

    OpenFeature.setContext({
      targetingKey: "user123",
      name: "Jane Doe",
      email: "jane.doe@email.com",
    });
  }
}
