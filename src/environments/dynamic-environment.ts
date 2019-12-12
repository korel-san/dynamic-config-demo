declare var window: any;

export class DynamicEnvironment {
    public get environment() {
        return window && window.config ? window.config.environment : null;
    }
}
