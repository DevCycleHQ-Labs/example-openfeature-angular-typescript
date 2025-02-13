import { Component } from "@angular/core";
import {
  BooleanFeatureFlagDirective,
  StringFeatureFlagDirective,
} from "@openfeature/angular-sdk";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-togglebot",
  standalone: true,
  imports: [
    BooleanFeatureFlagDirective,
    StringFeatureFlagDirective,
    CommonModule,
  ],
  templateUrl: "./togglebot.component.html",
  styles: [
    `
      @media (prefers-reduced-motion: no-preference) {
        .spin-slow {
          animation: Spin infinite 5s linear;
        }
        .spin-fast {
          animation: Spin infinite 1s linear;
        }
        .spin-off-axis {
          animation: SpinOffAxis 3s linear infinite;
        }
      }

      @keyframes Spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes SpinOffAxis {
        from {
          transform: rotate(0deg) translate(10px) rotate(0deg);
        }
        to {
          transform: rotate(360deg) translate(10px) rotate(-360deg);
        }
      }
    `,
  ],
})
export class ToggleBotComponent {
  variationName = "Default"; // TODO: implement feature access

  getMessage(spinSpeed: string): string {
    switch (spinSpeed) {
      case "slow":
        return "Awesome, look at you go!";
      case "fast":
        return "This is fun!";
      case "off-axis":
        return "...I'm gonna be sick...";
      case "surprise":
        return "What the unicorn?";
      default:
        return "Hello! Nice to meet you.";
    }
  }

  getImageSource(spinSpeed: string, shouldWink: boolean): string {
    if (spinSpeed === "surprise") return "/assets/unicorn.svg";
    return shouldWink ? "/assets/togglebot-wink.svg" : "/assets/togglebot.svg";
  }

  getClassNames(spinSpeed: string): string {
    return `ToggleBot-logo ${spinSpeed ? `spin-${spinSpeed}` : ""}`;
  }
}
