declare global {
  interface Window {
    devcycleEnv?: {
      DEVCYCLE_CLIENT_SDK_KEY: string;
    };
  }
}

export const environment = {
  DEVCYCLE_CLIENT_SDK_KEY:
    window.devcycleEnv?.DEVCYCLE_CLIENT_SDK_KEY || "<DEVCYCLE_CLIENT_SDK_KEY>",
};
