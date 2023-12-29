const Zygot = {"url":"http:\/\/localhost","port":null,"routes":{"\/":{"methods":["GET"],"uri":"\/"},"register":{"methods":["GET","POST"],"uri":"register"},"login":{"methods":["GET","POST"],"uri":"login"},"magic-link":{"methods":["GET"],"uri":"login\/magic-link"},"verify-magic-link":{"methods":["GET"],"uri":"login\/verify-magic-link"},"logout":{"methods":["GET"],"uri":"logout"},"auth-action-show":{"methods":["GET"],"uri":"auth\/a\/show"},"login\/magic-link":{"methods":["POST"],"uri":"login\/magic-link"},"auth-action-handle":{"methods":["POST"],"uri":"auth\/a\/handle"},"auth-action-verify":{"methods":["POST"],"uri":"auth\/a\/verify"}},"defaults":{"locale":"en","supportedLocales":["fr","en"],"throwOnUnavailable":false}};

if (typeof window !== 'undefined' && typeof window.Zygot !== 'undefined') {
    Object.assign(Zygot.routes, window.Zygot.routes);
}

export { Zygot };
