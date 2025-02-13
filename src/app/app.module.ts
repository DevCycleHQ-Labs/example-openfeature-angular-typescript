import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { OpenFeature, OpenFeatureModule } from "@openfeature/angular-sdk";
import DevCycleAngularProvider from "@devcycle/openfeature-angular-provider";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";

const devCycleProvider = new DevCycleAngularProvider(
  environment.DEVCYCLE_CLIENT_SDK_KEY,
  {
    logLevel: "debug",
  }
);

OpenFeature.setContext({
  targetingKey: "user123",
  name: "Jane Doe",
  email: "jane.doe@email.com",
});

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    OpenFeatureModule.forRoot({
      provider: devCycleProvider,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
