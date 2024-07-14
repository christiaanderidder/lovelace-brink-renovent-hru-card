/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $24c52f343453d62d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $24c52f343453d62d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $24c52f343453d62d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $24c52f343453d62d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $24c52f343453d62d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $24c52f343453d62d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $24c52f343453d62d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
var $24c52f343453d62d$export$2e2bcd8739ae039 = {
    __extends: $24c52f343453d62d$export$a8ba968b8961cb8a,
    __assign: $24c52f343453d62d$export$18ce0697a983be9b,
    __rest: $24c52f343453d62d$export$3c9a16f847548506,
    __decorate: $24c52f343453d62d$export$29e00dfd3077644b,
    __param: $24c52f343453d62d$export$d5ad3fd78186038f,
    __metadata: $24c52f343453d62d$export$f1db080c865becb9,
    __awaiter: $24c52f343453d62d$export$1050f835b63b671e,
    __generator: $24c52f343453d62d$export$67ebef60e6f28a6,
    __createBinding: $24c52f343453d62d$export$45d3717a4c69092e,
    __exportStar: $24c52f343453d62d$export$f33643c0debef087,
    __values: $24c52f343453d62d$export$19a8beecd37a4c45,
    __read: $24c52f343453d62d$export$8d051b38c9118094,
    __spread: $24c52f343453d62d$export$afc72e2116322959,
    __spreadArrays: $24c52f343453d62d$export$6388937ca91ccae8,
    __spreadArray: $24c52f343453d62d$export$1216008129fb82ed,
    __await: $24c52f343453d62d$export$10c90e4f7922046c,
    __asyncGenerator: $24c52f343453d62d$export$e427f37a30a4de9b,
    __asyncDelegator: $24c52f343453d62d$export$bbd80228419bb833,
    __asyncValues: $24c52f343453d62d$export$e3b29a3d6162315f,
    __makeTemplateObject: $24c52f343453d62d$export$4fb47efe1390b86f,
    __importStar: $24c52f343453d62d$export$c21735bcef00d192,
    __importDefault: $24c52f343453d62d$export$da59b14a69baef04,
    __classPrivateFieldGet: $24c52f343453d62d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $24c52f343453d62d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $24c52f343453d62d$export$81fdc39f203e4e04,
    __addDisposableResource: $24c52f343453d62d$export$88ac25d8e944e405,
    __disposeResources: $24c52f343453d62d$export$8f076105dc360e92
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$r, getOwnPropertyNames: $19fe8e3abedf4df0$var$h, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$y = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $19fe8e3abedf4df0$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $19fe8e3abedf4df0$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$h(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ 	\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$E = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$P = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$V {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$P(t, s);
        if (this.el = $f58f44579a4747ac$var$V.createElement(f, n), $f58f44579a4747ac$var$E.currentNode = this.el.content, 2 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$E.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$k : "?" === e[1] ? $f58f44579a4747ac$var$H : "@" === e[1] ? $f58f44579a4747ac$var$I : $f58f44579a4747ac$var$R
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$E.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$N(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$N(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$S {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$E.currentNode = e;
        let h = $f58f44579a4747ac$var$E.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$L(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$E.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$E.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$M {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$N(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    S(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$V.createElement($f58f44579a4747ac$var$C(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$S(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$V(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$M(this.S($f58f44579a4747ac$var$l()), this.S($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$R {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$N(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$N(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$k extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$R {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$N(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$L {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$N(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    P: $f58f44579a4747ac$var$e,
    A: $f58f44579a4747ac$var$h,
    C: $f58f44579a4747ac$var$o,
    M: 1,
    L: $f58f44579a4747ac$var$P,
    R: $f58f44579a4747ac$var$S,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$N,
    I: $f58f44579a4747ac$var$M,
    H: $f58f44579a4747ac$var$R,
    N: $f58f44579a4747ac$var$H,
    U: $f58f44579a4747ac$var$I,
    B: $f58f44579a4747ac$var$k,
    F: $f58f44579a4747ac$var$L
}, $f58f44579a4747ac$var$Z = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$Z?.($f58f44579a4747ac$var$V, $f58f44579a4747ac$var$M), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.1.4");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$M(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$r = globalThis.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$r?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.0.6");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $19fe8e3abedf4df0$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $19fe8e3abedf4df0$export$53a6892c50694894)
}, $9cd908ed2625c047$export$8d623b1670eb40f4 = (t = $9cd908ed2625c047$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.P(o, void 0, t), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $9cd908ed2625c047$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, r ? {
                ...t,
                wrapped: !0
            } : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(r) {
    return (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $ed34c589b230c255$var$e;
function $ed34c589b230c255$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($ed34c589b230c255$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}





const $13632afec4749c69$export$9dd6ff9ea0189349 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    .hru {
        align-items: center;
        justify-content: center;
    }

    .hru-house {
        width: 100%;
        margin: 0;
    }

    .hru-house .hru-house-roof {
        z-index: 0;
        height: 100%;
        width: 100%;
        height: 40px;
    }

    .hru-house .hru-house-roof svg {
        width: 100%;
        height: 100%;
    }

    .hru-house .hru-house-roof #roof {
        fill: var(--card-background-color);
        stroke: var(--primary-text-color);
        stroke-width: 6px; /* Double width, the outer half is clipped */
    }

    .hru-house .hru-house-body {
        border: 3px solid var(--primary-text-color);
        background: var(--card-background-color);
        border-top: 0 none;
        min-height: 120px;
        padding: 5px 60px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10px;
    }

    .hru-sensors, .hru-fan-modes, .hru-zones {
        display: flex;
        justify-content: space-around;
        width: 100%;
        flex-shrink: 0;
    }

    .hru-zones .hru-zone-line {
        cursor: pointer;
    }

    .state-focus {
        color: var(--mdc-theme-primary);
    }
    
    .state-available {
        color: var(--primary-text-color);
    }

    .state-unavailable {
        color: var(--state-unavailable-color);
    }

    .state-error {
        color: var(--state-icon-error-color);
    }

    .hru-temperature {
        position: absolute;
        left: -15px;
    }

    ha-icon {
        padding-top: -10px;
    }

    .hru-temperature .hru-temperature-line {
        border: 3px solid var(--primary-text-color);
        border-left: 0 none;
        border-right: 0 none;
        background: var(--card-background-color);
        margin: 5px 0;
        padding: 0 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
    }
`;


var $8944235bd8be49ac$var$__assign = undefined && undefined.__assign || function() {
    $8944235bd8be49ac$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $8944235bd8be49ac$var$__assign.apply(this, arguments);
};
var $8944235bd8be49ac$var$MS_PER_SECOND = 1e3;
var $8944235bd8be49ac$var$SECS_PER_MIN = 60;
var $8944235bd8be49ac$var$SECS_PER_HOUR = $8944235bd8be49ac$var$SECS_PER_MIN * 60;
var $8944235bd8be49ac$var$SECS_PER_DAY = $8944235bd8be49ac$var$SECS_PER_HOUR * 24;
var $8944235bd8be49ac$var$SECS_PER_WEEK = $8944235bd8be49ac$var$SECS_PER_DAY * 7;
function $8944235bd8be49ac$export$b8f7189986dd5395(from, to, thresholds) {
    if (to === void 0) to = Date.now();
    if (thresholds === void 0) thresholds = {};
    var resolvedThresholds = $8944235bd8be49ac$var$__assign($8944235bd8be49ac$var$__assign({}, $8944235bd8be49ac$export$f4fd60e41371f80d), thresholds || {});
    var secs = (+from - +to) / $8944235bd8be49ac$var$MS_PER_SECOND;
    if (Math.abs(secs) < resolvedThresholds.second) return {
        value: Math.round(secs),
        unit: "second"
    };
    var mins = secs / $8944235bd8be49ac$var$SECS_PER_MIN;
    if (Math.abs(mins) < resolvedThresholds.minute) return {
        value: Math.round(mins),
        unit: "minute"
    };
    var hours = secs / $8944235bd8be49ac$var$SECS_PER_HOUR;
    if (Math.abs(hours) < resolvedThresholds.hour) return {
        value: Math.round(hours),
        unit: "hour"
    };
    var days = secs / $8944235bd8be49ac$var$SECS_PER_DAY;
    if (Math.abs(days) < resolvedThresholds.day) return {
        value: Math.round(days),
        unit: "day"
    };
    var fromDate = new Date(from);
    var toDate = new Date(to);
    var years = fromDate.getFullYear() - toDate.getFullYear();
    if (Math.round(Math.abs(years)) > 0) return {
        value: Math.round(years),
        unit: "year"
    };
    var months = years * 12 + fromDate.getMonth() - toDate.getMonth();
    if (Math.round(Math.abs(months)) > 0) return {
        value: Math.round(months),
        unit: "month"
    };
    var weeks = secs / $8944235bd8be49ac$var$SECS_PER_WEEK;
    return {
        value: Math.round(weeks),
        unit: "week"
    };
}
var $8944235bd8be49ac$export$f4fd60e41371f80d = {
    second: 45,
    minute: 45,
    hour: 22,
    day: 5
};


var $ee1328194d522913$export$27bce688931fdfcc, $ee1328194d522913$export$7fd1ce15b01d50ca, $ee1328194d522913$export$1a0dc7c974e8444d = function(e, t) {
    return $ee1328194d522913$var$i(t).format(e);
}, $ee1328194d522913$var$i = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
}, $ee1328194d522913$export$3ae94a2503e890a1 = function(e, t) {
    return $ee1328194d522913$var$o(t).format(e);
}, $ee1328194d522913$var$o = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}, $ee1328194d522913$export$fbb9ef859002af37 = function(e, t) {
    return $ee1328194d522913$var$c(t).format(e);
}, $ee1328194d522913$var$c = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });
}, $ee1328194d522913$export$7813392c1f00426f = function(e, t) {
    return $ee1328194d522913$var$s(t).format(e);
}, $ee1328194d522913$var$s = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        day: "numeric",
        month: "short"
    });
}, $ee1328194d522913$export$295e1e57d6713bf4 = function(e, t) {
    return $ee1328194d522913$var$d(t).format(e);
}, $ee1328194d522913$var$d = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        month: "long",
        year: "numeric"
    });
}, $ee1328194d522913$export$cbc7ca92d37b9650 = function(e, t) {
    return $ee1328194d522913$var$g(t).format(e);
}, $ee1328194d522913$var$g = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        month: "long"
    });
}, $ee1328194d522913$export$5a252a405018366 = function(e, t) {
    return $ee1328194d522913$var$h(t).format(e);
}, $ee1328194d522913$var$h = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric"
    });
};
!function(e) {
    e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
}($ee1328194d522913$export$27bce688931fdfcc || ($ee1328194d522913$export$27bce688931fdfcc = {})), function(e) {
    e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}($ee1328194d522913$export$7fd1ce15b01d50ca || ($ee1328194d522913$export$7fd1ce15b01d50ca = {}));
var $ee1328194d522913$var$b = function(e) {
    if (e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.language || e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.system) {
        var t = e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.language ? e.language : void 0, n = (new Date).toLocaleString(t);
        return n.includes("AM") || n.includes("PM");
    }
    return e.time_format === $ee1328194d522913$export$7fd1ce15b01d50ca.am_pm;
}, $ee1328194d522913$export$8b492ed8828f789c = function(e, t) {
    return $ee1328194d522913$var$_(t).format(e);
}, $ee1328194d522913$var$_ = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$c2c7ff0067c06a13 = function(e, t) {
    return $ee1328194d522913$var$w(t).format(e);
}, $ee1328194d522913$var$w = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$c8a72f22956ccab0 = function(e, t) {
    return $ee1328194d522913$var$x(t).format(e);
}, $ee1328194d522913$var$x = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$3203edd9e5edd663 = function(e, t) {
    return $ee1328194d522913$var$S(t).format(e);
}, $ee1328194d522913$var$S = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: "numeric",
        minute: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$ec86e83f20e68cd8 = function(e, t) {
    return $ee1328194d522913$var$T(t).format(e);
}, $ee1328194d522913$var$T = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$ad627f6ad084f5a2 = function(e, t) {
    return $ee1328194d522913$var$N(t).format(e);
}, $ee1328194d522913$var$N = function(e) {
    return new Intl.DateTimeFormat(e.language, {
        hour: $ee1328194d522913$var$b(e) ? "numeric" : "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: $ee1328194d522913$var$b(e)
    });
}, $ee1328194d522913$export$caddcc104251c1d7 = function(t, r, n, i) {
    void 0 === i && (i = !0);
    var a = (0, $8944235bd8be49ac$export$b8f7189986dd5395)(t, n);
    return i ? (function(e) {
        return new Intl.RelativeTimeFormat(e.language, {
            numeric: "auto"
        });
    })(r).format(a.value, a.unit) : Intl.NumberFormat(r.language, {
        style: "unit",
        unit: a.unit,
        unitDisplay: "long"
    }).format(Math.abs(a.value));
};
function $ee1328194d522913$export$50fe296bd2427aef(e) {
    var t, r = 3600 * (t = e.attributes.remaining.split(":").map(Number))[0] + 60 * t[1] + t[2];
    if ("active" === e.state) {
        var n = (new Date).getTime(), i = new Date(e.last_changed).getTime();
        r = Math.max(r - (n - i) / 1e3, 0);
    }
    return r;
}
function $ee1328194d522913$var$O() {
    return ($ee1328194d522913$var$O = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var r = arguments[t];
            for(var n in r)Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }).apply(this, arguments);
}
var $ee1328194d522913$export$2a5af2efac2f8dc = function(e, t, r, n) {
    void 0 === n && (n = !1), e._themes || (e._themes = {});
    var i = t.default_theme;
    ("default" === r || r && t.themes[r]) && (i = r);
    var a = $ee1328194d522913$var$O({}, e._themes);
    if ("default" !== i) {
        var o = t.themes[i];
        Object.keys(o).forEach(function(t) {
            var r = "--" + t;
            e._themes[r] = "", a[r] = o[t];
        });
    }
    if (e.updateStyles ? e.updateStyles(a) : window.ShadyCSS && window.ShadyCSS.styleSubtree(e, a), n) {
        var u = document.querySelector("meta[name=theme-color]");
        if (u) {
            u.hasAttribute("default-content") || u.setAttribute("default-content", u.getAttribute("content"));
            var c = a["--primary-color"] || u.getAttribute("default-content");
            u.setAttribute("content", c);
        }
    }
}, $ee1328194d522913$export$67835a66b9f6da52 = function(e) {
    return "function" == typeof e.getCardSize ? e.getCardSize() : 4;
};
function $ee1328194d522913$export$2044bdc9670769ab(e) {
    return e.substr(0, e.indexOf("."));
}
function $ee1328194d522913$export$4c7757901b2ff860(e) {
    return e.substr(e.indexOf(".") + 1);
}
function $ee1328194d522913$export$5cacf63e4bbfecae(e) {
    var t, r = (null == e || null == (t = e.locale) ? void 0 : t.language) || "en";
    return e.translationMetadata.translations[r] && e.translationMetadata.translations[r].isRTL || !1;
}
function $ee1328194d522913$export$703829fe2802931b(e) {
    return $ee1328194d522913$export$5cacf63e4bbfecae(e) ? "rtl" : "ltr";
}
function $ee1328194d522913$export$5b7b50e8043fabe(e) {
    return $ee1328194d522913$export$2044bdc9670769ab(e.entity_id);
}
var $ee1328194d522913$export$88bfc1035e667f37 = function(e) {
    return !!e.attributes.unit_of_measurement || !!e.attributes.state_class;
}, $ee1328194d522913$export$5e25e39d6a8c0c11 = function(e) {
    switch(e.number_format){
        case $ee1328194d522913$export$27bce688931fdfcc.comma_decimal:
            return [
                "en-US",
                "en"
            ];
        case $ee1328194d522913$export$27bce688931fdfcc.decimal_comma:
            return [
                "de",
                "es",
                "it"
            ];
        case $ee1328194d522913$export$27bce688931fdfcc.space_comma:
            return [
                "fr",
                "sv",
                "cs"
            ];
        case $ee1328194d522913$export$27bce688931fdfcc.system:
            return;
        default:
            return e.language;
    }
}, $ee1328194d522913$export$2077e0241d6afd3c = function(e, t) {
    return void 0 === t && (t = 2), Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
}, $ee1328194d522913$export$f5dd818bff069720 = function(e, r, n) {
    var i = r ? $ee1328194d522913$export$5e25e39d6a8c0c11(r) : void 0;
    if (Number.isNaN = Number.isNaN || function e(t) {
        return "number" == typeof t && e(t);
    }, (null == r ? void 0 : r.number_format) !== $ee1328194d522913$export$27bce688931fdfcc.none && !Number.isNaN(Number(e)) && Intl) try {
        return new Intl.NumberFormat(i, $ee1328194d522913$var$V(e, n)).format(Number(e));
    } catch (t) {
        return console.error(t), new Intl.NumberFormat(void 0, $ee1328194d522913$var$V(e, n)).format(Number(e));
    }
    return "string" == typeof e ? e : $ee1328194d522913$export$2077e0241d6afd3c(e, null == n ? void 0 : n.maximumFractionDigits).toString() + ("currency" === (null == n ? void 0 : n.style) ? " " + n.currency : "");
}, $ee1328194d522913$var$V = function(e, t) {
    var r = $ee1328194d522913$var$O({
        maximumFractionDigits: 2
    }, t);
    if ("string" != typeof e) return r;
    if (!t || !t.minimumFractionDigits && !t.maximumFractionDigits) {
        var n = e.indexOf(".") > -1 ? e.split(".")[1].length : 0;
        r.minimumFractionDigits = n, r.maximumFractionDigits = n;
    }
    return r;
}, $ee1328194d522913$export$278f9ea9192cff94 = function(e, t, r, n) {
    var i = void 0 !== n ? n : t.state;
    if ("unknown" === i || "unavailable" === i) return e("state.default." + i);
    if ($ee1328194d522913$export$88bfc1035e667f37(t)) {
        if ("monetary" === t.attributes.device_class) try {
            return $ee1328194d522913$export$f5dd818bff069720(i, r, {
                style: "currency",
                currency: t.attributes.unit_of_measurement
            });
        } catch (e) {}
        return $ee1328194d522913$export$f5dd818bff069720(i, r) + (t.attributes.unit_of_measurement ? " " + t.attributes.unit_of_measurement : "");
    }
    var o = $ee1328194d522913$export$5b7b50e8043fabe(t);
    if ("input_datetime" === o) {
        var u;
        if (void 0 === n) return t.attributes.has_date && t.attributes.has_time ? (u = new Date(t.attributes.year, t.attributes.month - 1, t.attributes.day, t.attributes.hour, t.attributes.minute), $ee1328194d522913$export$8b492ed8828f789c(u, r)) : t.attributes.has_date ? (u = new Date(t.attributes.year, t.attributes.month - 1, t.attributes.day), $ee1328194d522913$export$3ae94a2503e890a1(u, r)) : t.attributes.has_time ? ((u = new Date).setHours(t.attributes.hour, t.attributes.minute), $ee1328194d522913$export$3203edd9e5edd663(u, r)) : t.state;
        try {
            var c = n.split(" ");
            if (2 === c.length) return $ee1328194d522913$export$8b492ed8828f789c(new Date(c.join("T")), r);
            if (1 === c.length) {
                if (n.includes("-")) return $ee1328194d522913$export$3ae94a2503e890a1(new Date(n + "T00:00"), r);
                if (n.includes(":")) {
                    var m = new Date;
                    return $ee1328194d522913$export$3203edd9e5edd663(new Date(m.toISOString().split("T")[0] + "T" + n), r);
                }
            }
            return n;
        } catch (e) {
            return n;
        }
    }
    return "humidifier" === o && "on" === i && t.attributes.humidity ? t.attributes.humidity + " %" : "counter" === o || "number" === o || "input_number" === o ? $ee1328194d522913$export$f5dd818bff069720(i, r) : t.attributes.device_class && e("component." + o + ".state." + t.attributes.device_class + "." + i) || e("component." + o + ".state._." + i) || i;
}, $ee1328194d522913$export$25978a5d5a562f09 = "mdi:bookmark", $ee1328194d522913$export$f78a3169a0f9f31b = "lovelace", $ee1328194d522913$export$6df9924792233bc = [
    "climate",
    "cover",
    "configurator",
    "input_select",
    "input_number",
    "input_text",
    "lock",
    "media_player",
    "scene",
    "script",
    "timer",
    "vacuum",
    "water_heater",
    "weblink"
], $ee1328194d522913$export$b9a2b37e93bb73f2 = [
    "alarm_control_panel",
    "automation",
    "camera",
    "climate",
    "configurator",
    "cover",
    "fan",
    "group",
    "history_graph",
    "input_datetime",
    "light",
    "lock",
    "media_player",
    "script",
    "sun",
    "updater",
    "vacuum",
    "water_heater",
    "weather"
], $ee1328194d522913$export$ca927753507128f6 = [
    "input_number",
    "input_select",
    "input_text",
    "scene",
    "weblink"
], $ee1328194d522913$export$60e836dfbaf943c5 = [
    "camera",
    "configurator",
    "history_graph",
    "scene"
], $ee1328194d522913$export$23bace2b7923e5d1 = [
    "closed",
    "locked",
    "off"
], $ee1328194d522913$export$1b64f44bed0feb66 = new Set([
    "fan",
    "input_boolean",
    "light",
    "switch",
    "group",
    "automation"
]), $ee1328194d522913$export$3ed39d80c7b24b62 = "\xb0C", $ee1328194d522913$export$5c7f540eb0eef6a6 = "\xb0F", $ee1328194d522913$export$2c7beb20637e0bd1 = "group.default_view", $ee1328194d522913$export$43835e9acf248a15 = function(e, t, r, n) {
    n = n || {}, r = null == r ? {} : r;
    var i = new Event(t, {
        bubbles: void 0 === n.bubbles || n.bubbles,
        cancelable: Boolean(n.cancelable),
        composed: void 0 === n.composed || n.composed
    });
    return i.detail = r, e.dispatchEvent(i), i;
}, $ee1328194d522913$var$ie = new Set([
    "call-service",
    "divider",
    "section",
    "weblink",
    "cast",
    "select"
]), $ee1328194d522913$var$ae = {
    alert: "toggle",
    automation: "toggle",
    climate: "climate",
    cover: "cover",
    fan: "toggle",
    group: "group",
    input_boolean: "toggle",
    input_number: "input-number",
    input_select: "input-select",
    input_text: "input-text",
    light: "toggle",
    lock: "lock",
    media_player: "media-player",
    remote: "toggle",
    scene: "scene",
    script: "script",
    sensor: "sensor",
    timer: "timer",
    switch: "toggle",
    vacuum: "toggle",
    water_heater: "climate",
    input_datetime: "input-datetime"
}, $ee1328194d522913$export$5ad555b55cd85e0c = function(e, t) {
    void 0 === t && (t = !1);
    var r = function(e, t) {
        return n("hui-error-card", {
            type: "error",
            error: e,
            config: t
        });
    }, n = function(e, t) {
        var n = window.document.createElement(e);
        try {
            if (!n.setConfig) return;
            n.setConfig(t);
        } catch (n) {
            return console.error(e, n), r(n.message, t);
        }
        return n;
    };
    if (!e || "object" != typeof e || !t && !e.type) return r("No type defined", e);
    var i = e.type;
    if (i && i.startsWith("custom:")) i = i.substr(7);
    else if (t) {
        if ($ee1328194d522913$var$ie.has(i)) i = "hui-" + i + "-row";
        else {
            if (!e.entity) return r("Invalid config given.", e);
            var a = e.entity.split(".", 1)[0];
            i = "hui-" + ($ee1328194d522913$var$ae[a] || "text") + "-entity-row";
        }
    } else i = "hui-" + i + "-card";
    if (customElements.get(i)) return n(i, e);
    var o = r("Custom element doesn't exist: " + e.type + ".", e);
    o.style.display = "None";
    var u = setTimeout(function() {
        o.style.display = "";
    }, 2e3);
    return customElements.whenDefined(e.type).then(function() {
        clearTimeout(u), $ee1328194d522913$export$43835e9acf248a15(o, "ll-rebuild", {}, o);
    }), o;
}, $ee1328194d522913$export$61fc7d43ac8f84b0 = function(e, t, r) {
    var n;
    return void 0 === r && (r = !1), function() {
        var i = [].slice.call(arguments), a = this, o = function() {
            n = null, r || e.apply(a, i);
        }, u = r && !n;
        clearTimeout(n), n = setTimeout(o, t), u && e.apply(a, i);
    };
}, $ee1328194d522913$export$a76407ec79ca4ea3 = {
    alert: "mdi:alert",
    automation: "mdi:playlist-play",
    calendar: "mdi:calendar",
    camera: "mdi:video",
    climate: "mdi:thermostat",
    configurator: "mdi:settings",
    conversation: "mdi:text-to-speech",
    device_tracker: "mdi:account",
    fan: "mdi:fan",
    group: "mdi:google-circles-communities",
    history_graph: "mdi:chart-line",
    homeassistant: "mdi:home-assistant",
    homekit: "mdi:home-automation",
    image_processing: "mdi:image-filter-frames",
    input_boolean: "mdi:drawing",
    input_datetime: "mdi:calendar-clock",
    input_number: "mdi:ray-vertex",
    input_select: "mdi:format-list-bulleted",
    input_text: "mdi:textbox",
    light: "mdi:lightbulb",
    mailbox: "mdi:mailbox",
    notify: "mdi:comment-alert",
    person: "mdi:account",
    plant: "mdi:flower",
    proximity: "mdi:apple-safari",
    remote: "mdi:remote",
    scene: "mdi:google-pages",
    script: "mdi:file-document",
    sensor: "mdi:eye",
    simple_alarm: "mdi:bell",
    sun: "mdi:white-balance-sunny",
    switch: "mdi:flash",
    timer: "mdi:timer",
    updater: "mdi:cloud-upload",
    vacuum: "mdi:robot-vacuum",
    water_heater: "mdi:thermometer",
    weblink: "mdi:open-in-new"
};
function $ee1328194d522913$export$13fcd5035aa1446(e, t) {
    if (e in $ee1328194d522913$export$a76407ec79ca4ea3) return $ee1328194d522913$export$a76407ec79ca4ea3[e];
    switch(e){
        case "alarm_control_panel":
            switch(t){
                case "armed_home":
                    return "mdi:bell-plus";
                case "armed_night":
                    return "mdi:bell-sleep";
                case "disarmed":
                    return "mdi:bell-outline";
                case "triggered":
                    return "mdi:bell-ring";
                default:
                    return "mdi:bell";
            }
        case "binary_sensor":
            return t && "off" === t ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
        case "cover":
            return "closed" === t ? "mdi:window-closed" : "mdi:window-open";
        case "lock":
            return t && "unlocked" === t ? "mdi:lock-open" : "mdi:lock";
        case "media_player":
            return t && "off" !== t && "idle" !== t ? "mdi:cast-connected" : "mdi:cast";
        case "zwave":
            switch(t){
                case "dead":
                    return "mdi:emoticon-dead";
                case "sleeping":
                    return "mdi:sleep";
                case "initializing":
                    return "mdi:timer-sand";
                default:
                    return "mdi:z-wave";
            }
        default:
            return console.warn("Unable to find icon for domain " + e + " (" + t + ")"), "mdi:bookmark";
    }
}
var $ee1328194d522913$export$e2b36fa5c60547b2 = function(e, t) {
    var r = t.value || t, n = t.attribute ? e.attributes[t.attribute] : e.state;
    switch(t.operator || "=="){
        case "==":
            return n === r;
        case "<=":
            return n <= r;
        case "<":
            return n < r;
        case ">=":
            return n >= r;
        case ">":
            return n > r;
        case "!=":
            return n !== r;
        case "regex":
            return n.match(r);
        default:
            return !1;
    }
}, $ee1328194d522913$export$8bcf112cf396c716 = function(e) {
    $ee1328194d522913$export$43835e9acf248a15(window, "haptic", e);
}, $ee1328194d522913$export$ff7962acd6052c28 = function(e, t, r) {
    void 0 === r && (r = !1), r ? history.replaceState(null, "", t) : history.pushState(null, "", t), $ee1328194d522913$export$43835e9acf248a15(window, "location-changed", {
        replace: r
    });
}, $ee1328194d522913$export$3303cc16da6bc061 = function(e, t, r) {
    void 0 === r && (r = !0);
    var n, i = $ee1328194d522913$export$2044bdc9670769ab(t), a = "group" === i ? "homeassistant" : i;
    switch(i){
        case "lock":
            n = r ? "unlock" : "lock";
            break;
        case "cover":
            n = r ? "open_cover" : "close_cover";
            break;
        default:
            n = r ? "turn_on" : "turn_off";
    }
    return e.callService(a, n, {
        entity_id: t
    });
}, $ee1328194d522913$export$4f6896672dcf12b1 = function(e, t) {
    var r = $ee1328194d522913$export$23bace2b7923e5d1.includes(e.states[t].state);
    return $ee1328194d522913$export$3303cc16da6bc061(e, t, r);
}, $ee1328194d522913$export$fe63bc0ae3396800 = function(e, t, r, n) {
    if (n || (n = {
        action: "more-info"
    }), !n.confirmation || n.confirmation.exemptions && n.confirmation.exemptions.some(function(e) {
        return e.user === t.user.id;
    }) || ($ee1328194d522913$export$8bcf112cf396c716("warning"), confirm(n.confirmation.text || "Are you sure you want to " + n.action + "?"))) switch(n.action){
        case "more-info":
            (r.entity || r.camera_image) && $ee1328194d522913$export$43835e9acf248a15(e, "hass-more-info", {
                entityId: r.entity ? r.entity : r.camera_image
            });
            break;
        case "navigate":
            n.navigation_path && $ee1328194d522913$export$ff7962acd6052c28(0, n.navigation_path);
            break;
        case "url":
            n.url_path && window.open(n.url_path);
            break;
        case "toggle":
            r.entity && ($ee1328194d522913$export$4f6896672dcf12b1(t, r.entity), $ee1328194d522913$export$8bcf112cf396c716("success"));
            break;
        case "call-service":
            if (!n.service) return void $ee1328194d522913$export$8bcf112cf396c716("failure");
            var i = n.service.split(".", 2);
            t.callService(i[0], i[1], n.service_data, n.target), $ee1328194d522913$export$8bcf112cf396c716("success");
            break;
        case "fire-dom-event":
            $ee1328194d522913$export$43835e9acf248a15(e, "ll-custom", n);
    }
}, $ee1328194d522913$export$6c6c3f4b7541eaf1 = function(e, t, r, n) {
    var i;
    "double_tap" === n && r.double_tap_action ? i = r.double_tap_action : "hold" === n && r.hold_action ? i = r.hold_action : "tap" === n && r.tap_action && (i = r.tap_action), $ee1328194d522913$export$fe63bc0ae3396800(e, t, r, i);
}, $ee1328194d522913$export$b981489921ee18cd = function(e, t, r, n, i) {
    var a;
    if (i && r.double_tap_action ? a = r.double_tap_action : n && r.hold_action ? a = r.hold_action : !n && r.tap_action && (a = r.tap_action), a || (a = {
        action: "more-info"
    }), !a.confirmation || a.confirmation.exemptions && a.confirmation.exemptions.some(function(e) {
        return e.user === t.user.id;
    }) || confirm(a.confirmation.text || "Are you sure you want to " + a.action + "?")) switch(a.action){
        case "more-info":
            (a.entity || r.entity || r.camera_image) && ($ee1328194d522913$export$43835e9acf248a15(e, "hass-more-info", {
                entityId: a.entity ? a.entity : r.entity ? r.entity : r.camera_image
            }), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic));
            break;
        case "navigate":
            a.navigation_path && ($ee1328194d522913$export$ff7962acd6052c28(0, a.navigation_path), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic));
            break;
        case "url":
            a.url_path && window.open(a.url_path), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic);
            break;
        case "toggle":
            r.entity && ($ee1328194d522913$export$4f6896672dcf12b1(t, r.entity), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic));
            break;
        case "call-service":
            if (!a.service) return;
            var o = a.service.split(".", 2), u = o[0], c = o[1], m = $ee1328194d522913$var$O({}, a.service_data);
            "entity" === m.entity_id && (m.entity_id = r.entity), t.callService(u, c, m, a.target), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic);
            break;
        case "fire-dom-event":
            $ee1328194d522913$export$43835e9acf248a15(e, "ll-custom", a), a.haptic && $ee1328194d522913$export$8bcf112cf396c716(a.haptic);
    }
};
function $ee1328194d522913$export$e217e69099d082f5(e) {
    return void 0 !== e && "none" !== e.action;
}
function $ee1328194d522913$export$695b4dbcc1028091(e, t, r) {
    if (t.has("config") || r) return !0;
    if (e.config.entity) {
        var n = t.get("hass");
        return !n || n.states[e.config.entity] !== e.hass.states[e.config.entity];
    }
    return !1;
}
function $ee1328194d522913$export$72d503079d05a3cf(e) {
    return void 0 !== e && "none" !== e.action;
}
var $ee1328194d522913$export$8d080c28108db9dd = function(e, t, r) {
    void 0 === r && (r = !0);
    var n = {};
    t.forEach(function(t) {
        if ($ee1328194d522913$export$23bace2b7923e5d1.includes(e.states[t].state) === r) {
            var i = $ee1328194d522913$export$2044bdc9670769ab(t), a = [
                "cover",
                "lock"
            ].includes(i) ? i : "homeassistant";
            a in n || (n[a] = []), n[a].push(t);
        }
    }), Object.keys(n).forEach(function(t) {
        var i;
        switch(t){
            case "lock":
                i = r ? "unlock" : "lock";
                break;
            case "cover":
                i = r ? "open_cover" : "close_cover";
                break;
            default:
                i = r ? "turn_on" : "turn_off";
        }
        e.callService(t, i, {
            entity_id: n[t]
        });
    });
}, $ee1328194d522913$export$b5e56594b0d6a61e = function() {
    var e = document.querySelector("home-assistant");
    if (e = (e = (e = (e = (e = (e = (e = (e = e && e.shadowRoot) && e.querySelector("home-assistant-main")) && e.shadowRoot) && e.querySelector("app-drawer-layout partial-panel-resolver")) && e.shadowRoot || e) && e.querySelector("ha-panel-lovelace")) && e.shadowRoot) && e.querySelector("hui-root")) {
        var t = e.lovelace;
        return t.current_view = e.___curView, t;
    }
    return null;
}, $ee1328194d522913$var$xe = {
    humidity: "mdi:water-percent",
    illuminance: "mdi:brightness-5",
    temperature: "mdi:thermometer",
    pressure: "mdi:gauge",
    power: "mdi:flash",
    signal_strength: "mdi:wifi"
}, $ee1328194d522913$var$De = {
    binary_sensor: function(e, t) {
        var r = "off" === e;
        switch(null == t ? void 0 : t.attributes.device_class){
            case "battery":
                return r ? "mdi:battery" : "mdi:battery-outline";
            case "battery_charging":
                return r ? "mdi:battery" : "mdi:battery-charging";
            case "cold":
                return r ? "mdi:thermometer" : "mdi:snowflake";
            case "connectivity":
                return r ? "mdi:server-network-off" : "mdi:server-network";
            case "door":
                return r ? "mdi:door-closed" : "mdi:door-open";
            case "garage_door":
                return r ? "mdi:garage" : "mdi:garage-open";
            case "power":
                return r ? "mdi:power-plug-off" : "mdi:power-plug";
            case "gas":
            case "problem":
            case "safety":
            case "tamper":
                return r ? "mdi:check-circle" : "mdi:alert-circle";
            case "smoke":
                return r ? "mdi:check-circle" : "mdi:smoke";
            case "heat":
                return r ? "mdi:thermometer" : "mdi:fire";
            case "light":
                return r ? "mdi:brightness-5" : "mdi:brightness-7";
            case "lock":
                return r ? "mdi:lock" : "mdi:lock-open";
            case "moisture":
                return r ? "mdi:water-off" : "mdi:water";
            case "motion":
                return r ? "mdi:walk" : "mdi:run";
            case "occupancy":
                return r ? "mdi:home-outline" : "mdi:home";
            case "opening":
                return r ? "mdi:square" : "mdi:square-outline";
            case "plug":
                return r ? "mdi:power-plug-off" : "mdi:power-plug";
            case "presence":
                return r ? "mdi:home-outline" : "mdi:home";
            case "running":
                return r ? "mdi:stop" : "mdi:play";
            case "sound":
                return r ? "mdi:music-note-off" : "mdi:music-note";
            case "update":
                return r ? "mdi:package" : "mdi:package-up";
            case "vibration":
                return r ? "mdi:crop-portrait" : "mdi:vibrate";
            case "window":
                return r ? "mdi:window-closed" : "mdi:window-open";
            default:
                return r ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
        }
    },
    cover: function(e) {
        var t = "closed" !== e.state;
        switch(e.attributes.device_class){
            case "garage":
                return t ? "mdi:garage-open" : "mdi:garage";
            case "door":
                return t ? "mdi:door-open" : "mdi:door-closed";
            case "shutter":
                return t ? "mdi:window-shutter-open" : "mdi:window-shutter";
            case "blind":
                return t ? "mdi:blinds-open" : "mdi:blinds";
            case "window":
                return t ? "mdi:window-open" : "mdi:window-closed";
            default:
                return $ee1328194d522913$export$13fcd5035aa1446("cover", e.state);
        }
    },
    sensor: function(e) {
        var t = e.attributes.device_class;
        if (t && t in $ee1328194d522913$var$xe) return $ee1328194d522913$var$xe[t];
        if ("battery" === t) {
            var r = Number(e.state);
            if (isNaN(r)) return "mdi:battery-unknown";
            var n = 10 * Math.round(r / 10);
            return n >= 100 ? "mdi:battery" : n <= 0 ? "mdi:battery-alert" : "hass:battery-" + n;
        }
        var i = e.attributes.unit_of_measurement;
        return "\xb0C" === i || "\xb0F" === i ? "mdi:thermometer" : $ee1328194d522913$export$13fcd5035aa1446("sensor");
    },
    input_datetime: function(e) {
        return e.attributes.has_date ? e.attributes.has_time ? $ee1328194d522913$export$13fcd5035aa1446("input_datetime") : "mdi:calendar" : "mdi:clock";
    }
}, $ee1328194d522913$export$d138d1363acbec1f = function(e) {
    if (!e) return "mdi:bookmark";
    if (e.attributes.icon) return e.attributes.icon;
    var t = $ee1328194d522913$export$2044bdc9670769ab(e.entity_id);
    return t in $ee1328194d522913$var$De ? $ee1328194d522913$var$De[t](e) : $ee1328194d522913$export$13fcd5035aa1446(t, e.state);
};


window.customCards = window.customCards || [];
window.customCards.push({
    type: "brink-renovent-hru-card",
    name: "Brink Renovent HRU card",
    description: "A custom card for the Brink Renovent HRU"
});
class $a399cc6bbb0eb26a$export$4e8be944e36a02b4 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static{
        this.styles = (0, $13632afec4749c69$export$9dd6ff9ea0189349);
    }
    static getStubConfig() {
        return {
            fanModeReadEntity: "sensor.ebusd_excellent400_fanmode",
            fanModeWriteEntity: "select.ebusd_excellent400_fanmode",
            indoorAirTemperatureEntity: "sensor.ebusd_excellent400_insidetemperature",
            outdoorAirTemperatureEntity: "sensor.ebusd_excellent400_outsidetemperature",
            bypassValvePositionEntity: "sensor.ebusd_excellent400_bypassstatus",
            airFilterEntity: "sensor.ebusd_excellent400_filternotification",
            zoneValvePositionEntity: "sensor.ebusd_zonevalve_valveposition_zone",
            co2Level1Entity: "number.ebusd_excellent400_co2sensor1level",
            co2Level2Entity: "number.ebusd_excellent400_co2sensor2level",
            co2Level3Entity: "number.ebusd_excellent400_co2sensor3level",
            co2Level4Entity: "number.ebusd_excellent400_co2sensor4level"
        };
    }
    setConfig(config) {
        this.config = config;
    }
    set hass(hass) {
        this.ha = hass;
        this.fanModeRead = hass.states[this.config.fanModeReadEntity];
        this.fanModeWrite = hass.states[this.config.fanModeWriteEntity];
        this.outdoorAirTemperature = hass.states[this.config.outdoorAirTemperatureEntity];
        this.indoorAirTemperature = hass.states[this.config.indoorAirTemperatureEntity];
        this.bypassValvePosition = hass.states[this.config.bypassValvePositionEntity];
        this.airFilter = hass.states[this.config.airFilterEntity];
        this.zoneValvePosition = hass.states[this.config.zoneValvePositionEntity];
        this.co2Level1 = hass.states[this.config.co2Level1Entity];
        this.co2Level2 = hass.states[this.config.co2Level2Entity];
        this.co2Level3 = hass.states[this.config.co2Level3Entity];
        this.co2Level4 = hass.states[this.config.co2Level4Entity];
    }
    render() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-card header="Renovent HRU">
                <div class="card-content hru">
                    <div class="hru-house">
                        <div class="hru-house-roof">
                            <svg preserveAspectRatio="none" viewBox="0 0 400 45">
                                <!-- https://alexwlchan.net/2021/inner-outer-strokes-svg/ -->
                                <defs>
                                    <!-- polyline to prevent bottom border -->
                                    <polyline id="roof-shape" points="400,45 400,40 200,0 0,40 0,45" vector-effect="non-scaling-stroke"></polyline>
                                    <clipPath id="roof-shape-inside-only">
                                        <polygon points="400,45 400,40 200,0 0,40 0,45"></polygon>
                                    </clipPath>
                                </defs>
                                <use id="roof" xlink:href="#roof-shape" clip-path="url(#roof-shape-inside-only)" />
                            </svg>
                        </div>
                        <div class="hru-house-body">
                            <div class="hru-temperature">${this.renderAirTemperature()}</div>
                            <div class="hru-sensors">${this.renderSensors()}</div>
                            <div class="hru-zones">${this.renderZones()}</div>
                            <div class="hru-fan-modes">${this.renderFanModes()}</div>
                        </div>
                    </div>
                </div>
            </ha-card>
        `;
    }
    renderAirTemperature() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="hru-temperature-line ${this.entityStateClass(this.outdoorAirTemperature)}">
                <ha-icon icon="mdi:arrow-right-thin"></ha-icon> ${this.renderTemperature(this.outdoorAirTemperature)}
            </div>
            <div class="hru-temperature-line ${this.entityStateClass(this.indoorAirTemperature)}">
                <ha-icon icon="mdi:arrow-left-thin"></ha-icon> ${this.renderTemperature(this.indoorAirTemperature)}
            </div>
        `;
    }
    entityStateClass(entity) {
        return entity ? "state-available" : "state-unavailable";
    }
    renderTemperature(entity) {
        if (!entity) return "0.0";
        return entity.state + entity.attributes.unit_of_measurement;
    }
    renderZones() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div>${this.renderZoneValvePosition(this.zoneValvePosition)}</div>
            <div>
                ${this.renderCO2Level(this.co2Level1)}
                ${this.renderCO2Level(this.co2Level2)}
                ${this.renderCO2Level(this.co2Level3)}
                ${this.renderCO2Level(this.co2Level4)}
            </div>
        `;
    }
    renderZoneValvePosition(entity) {
        if (!entity) return;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
                <ha-icon icon="mdi:fan"></ha-icon> ${entity.state}
            </div>
        `;
    }
    renderCO2Level(entity) {
        if (!entity) return;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
                <ha-icon icon="mdi:molecule-co2"></ha-icon> ${entity.state}${entity.attributes.unit_of_measurement}
            </div>
        `;
    }
    renderFanModes() {
        if (!this.fanModeRead || !this.fanModeWrite) return;
        return this.fanModes.map((button)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                <mwc-icon-button
                    .value=${button.value}
                    .entity=${this.fanModeWrite}
                    @click=${this.setFanMode}>
                    <ha-icon icon=${button.icon} class=${this.fanModeStateClass(button.value)}></ha-icon>
                </mwc-icon-button>
            `);
    }
    setFanMode(ev) {
        var entity = ev.currentTarget.entity;
        var value = ev.currentTarget.value;
        var domain = entity.entity_id.slice(0, entity.entity_id.indexOf("."));
        if (domain !== "select" && domain !== "input_select") return;
        console.log("setFanMode", domain, entity, value);
        this.ha.callService(domain, "select_option", {
            option: value
        }, {
            entity_id: entity.entity_id
        });
    }
    fanModeStateClass(state) {
        if (!this.fanModeRead) return "state-unavailable";
        if (this.fanModeRead.state === state) return "state-focus";
        return "state-available";
    }
    renderSensors() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <mwc-icon-button .entity=${this.airFilter} @click=${this.moreInfo}>
                <ha-icon icon="mdi:air-filter" class=${this.airFilterStateClass()}></ha-icon>
            </mwc-icon-button>
            <mwc-icon-button .entity=${this.bypassValvePosition} @click=${this.moreInfo}>
                <ha-icon icon=${this.bypassValveIcon()} class=${this.bypassValveStateClass()}></ha-icon>
            </mwc-icon-button>
        `;
    }
    airFilterStateClass() {
        if (!this.airFilter) return "state-unavailable";
        if (this.airFilter.state === "Clean") return "state-available";
        if (this.airFilter.state === "Dirty") return "state-error";
        return "state-error";
    }
    bypassValveIcon() {
        if (!this.bypassValvePosition) return "mdi:valve";
        if (this.bypassValvePosition.state === "Open") return "mdi:valve-open";
        if (this.bypassValvePosition.state === "Closed") return "mdi:valve-closed";
        return "mdi:valve";
    }
    bypassValveStateClass() {
        if (!this.bypassValvePosition) return "state-unavailable";
        if (this.bypassValvePosition.state === "Error") return "state-error";
        return "state-available";
    }
    moreInfo(ev) {
        var entityId = ev.currentTarget.entity.entity_id;
        var config = {
            entity: entityId,
            tap_action: {
                entity: entityId,
                action: "more-info"
            }
        };
        (0, $ee1328194d522913$export$6c6c3f4b7541eaf1)(this, this.ha, config, "tap");
    }
    constructor(...args){
        super(...args);
        this.fanModes = [
            {
                value: "Auto",
                icon: "mdi:fan-auto"
            },
            {
                value: "Holiday",
                icon: "mdi:fan-off"
            },
            {
                value: "Reduced",
                icon: "mdi:fan-speed-1"
            },
            {
                value: "Normal",
                icon: "mdi:fan-speed-2"
            },
            {
                value: "High",
                icon: "mdi:fan-speed-3"
            }
        ];
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "fanModeRead", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "fanModeWrite", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "outdoorAirTemperature", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "indoorAirTemperature", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "bypassValvePosition", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "airFilter", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "zoneValvePosition", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "co2Level1", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "co2Level2", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "co2Level3", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4.prototype, "co2Level4", void 0);
$a399cc6bbb0eb26a$export$4e8be944e36a02b4 = (0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $14742f68afc766d6$export$da64fc29f17f9d0e)("brink-renovent-hru-card")
], $a399cc6bbb0eb26a$export$4e8be944e36a02b4);


export {$a399cc6bbb0eb26a$export$4e8be944e36a02b4 as BrinkRenoventHruCard};
//# sourceMappingURL=card.js.map
