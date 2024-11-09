import {e as ac} from "./events-a2vpiPAD.js";
import {B as Fu, D as cc, E as cs} from "./index-IT1gKaF9.js";
import {e as Gu} from "./index-tTQKUB83.js";
const Uu = 100
  , qu = 101
  , zu = 201
  , Vu = 202
  , Wu = 203
  , Zu = 204
  , Ku = 205
  , Xu = 206
  , Ju = 207
  , Yu = 300
  , Qu = 301
  , el = 310
  , tl = 311
  , nl = 400
  , rl = 402
  , il = 405
  , sl = 407
  , ol = 408
  , al = 410
  , cl = 411
  , dl = 412
  , ul = 413
  , ll = 414
  , fl = 415
  , hl = 416
  , ml = 417
  , pl = 418
  , gl = 419
  , yl = 420
  , vl = 421
  , bl = 422
  , _l = 423
  , wl = 424
  , xl = 425
  , El = 426
  , Il = 427
  , Tl = 428
  , Sl = 429
  , kl = 430
  , Al = 431
  , Pl = 432
  , Rl = 433
  , Bl = 434
  , Cl = 435
  , Nl = 436
  , Ol = 437
  , Ll = 438
  , Ml = 439
  , $l = 440
  , Hl = 441
  , jl = 500
  , Dl = 503
  , Fl = 505
  , Gl = 506
  , Ul = 507
  , ql = 600
  , zl = 602
  , Vl = 603
  , Wl = 604
  , Zl = 701
  , Kl = 702
  , Xl = 703
  , Jl = 704
  , Yl = 705
  , Ql = 706
  , ef = 707
  , tf = 709
  , nf = 801
  , rf = 802
  , sf = 4001
  , of = 4100
  , af = 4200
  , cf = 4900
  , df = 4901
  , uf = 902
  , lf = 903
  , ff = 1001
  , hf = 1002
  , mf = 1003
  , pf = 1004
  , gf = 1005
  , yf = 1006
  , vf = 1008
  , bf = 1009
  , _f = 1010
  , wf = 1011
  , xf = 1012
  , Ef = 1014
  , If = 1100
  , dc = 1101
  , Tf = 1200
  , Wr = -32700
  , Zr = -32600
  , Kr = -32601
  , Xr = -32602
  , Jr = -32603
  , Yr = -32e3
  , Qr = -32001
  , ei = -32002
  , ti = -32003
  , ni = -32004
  , ri = -32005
  , ii = -32006;
class q extends Error {
    constructor(e, n) {
        super(e),
        this.innerError = n,
        this.name = this.constructor.name,
        typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(new.target.constructor) : this.stack = new Error().stack
    }
    static convertToString(e, n=!1) {
        if (e == null)
            return "undefined";
        const r = JSON.stringify(e, (i, s) => typeof s == "bigint" ? s.toString() : s);
        return n && ["bigint", "string"].includes(typeof e) ? r.replace(/['\\"]+/g, "") : r
    }
    toJSON() {
        return {
            name: this.name,
            code: this.code,
            message: this.message,
            innerError: this.innerError
        }
    }
}
class J extends q {
    constructor(e, n) {
        super(`Invalid value given "${q.convertToString(e, !0)}". Error: ${n}.`),
        this.name = this.constructor.name
    }
}
class ca extends q {
    constructor() {
        super("Private key must be 32 bytes."),
        this.code = Zl
    }
}
class Sf extends q {
    constructor() {
        super("Invalid Private Key, Not a valid string or uint8Array"),
        this.code = Kl
    }
}
class kf extends q {
    constructor(e) {
        super(`"${e}"`),
        this.code = rf
    }
}
class uc extends q {
    constructor() {
        super("Invalid key derivation function"),
        this.code = Xl
    }
}
class Af extends q {
    constructor() {
        super("Key derivation failed - possibly wrong password"),
        this.code = Jl
    }
}
class Pf extends q {
    constructor() {
        super("Unsupported key store version"),
        this.code = Yl
    }
}
class Rf extends q {
    constructor() {
        super("Password cannot be empty"),
        this.code = Ql
    }
}
class Bf extends q {
    constructor() {
        super("Initialization vector must be 16 bytes"),
        this.code = ef
    }
}
class Cf extends q {
    constructor() {
        super("c > 1000, pbkdf2 is less secure with less iterations"),
        this.code = tf
    }
}
class kr extends q {
    constructor(e, n) {
        super(e),
        this.code = jl,
        n && (this.errorCode = n.code,
        this.errorReason = n.reason)
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            errorCode: this.errorCode,
            errorReason: this.errorReason
        })
    }
}
class ks extends kr {
    constructor(e) {
        super("Connection not open", e),
        this.code = Dl
    }
}
class Nf extends kr {
    constructor(e) {
        super(`Maximum number of reconnect attempts reached! (${e})`),
        this.code = Fl
    }
}
class Of extends kr {
    constructor() {
        super("CONNECTION ERROR: Provider started to reconnect before the response got received!"),
        this.code = Gl
    }
}
class Lf extends kr {
    constructor(e) {
        super(`Request already sent with following id: ${e}`),
        this.code = Ul
    }
}
class $e extends q {
    constructor(e, n) {
        super(e),
        this.code = Yu,
        this.receipt = n
    }
}
class da extends q {
    constructor(e, n) {
        super(`The resolver at ${e} does not implement requested method: "${n}".`),
        this.address = e,
        this.name = n,
        this.code = Qu
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            address: this.address,
            name: this.name
        })
    }
}
class Oi extends $e {
    constructor(e) {
        if (super(e.message || "Error"),
        this.name = "name"in e && e.name || this.constructor.name,
        this.stack = "stack"in e && e.stack || void 0,
        this.code = e.code,
        typeof e.data == "object") {
            let n;
            "originalError"in e.data ? n = e.data.originalError : n = e.data,
            this.data = n.data,
            this.innerError = new Oi(n)
        } else
            this.data = e.data
    }
    setDecodedProperties(e, n, r) {
        this.errorName = e,
        this.errorSignature = n,
        this.errorArgs = r
    }
    toJSON() {
        let e = Object.assign(Object.assign({}, super.toJSON()), {
            data: this.data
        });
        return this.errorName && (e = Object.assign(Object.assign({}, e), {
            errorName: this.errorName,
            errorSignature: this.errorSignature,
            errorArgs: this.errorArgs
        })),
        e
    }
}
class Qt extends $e {
    constructor(e) {
        super("Error happened while trying to execute a function inside a smart contract"),
        this.code = el,
        this.innerError = new Oi(e)
    }
}
class Mf extends J {
    constructor(e) {
        var n, r;
        super(`data: ${(n = e.data) !== null && n !== void 0 ? n : "undefined"}, input: ${(r = e.input) !== null && r !== void 0 ? r : "undefined"}`, `You can't have "data" and "input" as properties of a contract at the same time, please use either "data" or "input" instead.`),
        this.code = tl
    }
}
class $f extends q {
    constructor(e) {
        super(`ENS is not supported on network ${e}`),
        this.code = uf
    }
}
class Hf extends q {
    constructor() {
        super("Network not synced"),
        this.code = lf
    }
}
class ua extends q {
    constructor(e) {
        super(`Invalid parameters passed. "${typeof e < "u" ? e : ""}"`),
        this.hint = e,
        this.code = Ju
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            hint: this.hint
        })
    }
}
class As extends q {
    constructor() {
        super(...arguments),
        this.code = zu
    }
}
class dt extends q {
    constructor() {
        super("The method you're trying to call is not implemented."),
        this.code = Vu
    }
}
class lc extends q {
    constructor() {
        super(...arguments),
        this.code = Wu
    }
}
class jf extends q {
    constructor() {
        super(...arguments),
        this.code = Zu
    }
}
class ne extends q {
    constructor(e, n) {
        super(e),
        this.code = Ku,
        this.props = n ?? {}
    }
}
class Df extends q {
    constructor(e) {
        super(`A plugin with the namespace: ${e} has already been registered.`),
        this.code = Xu
    }
}
class jr extends q {
    constructor() {
        super(...arguments),
        this.code = ql
    }
}
class Ps extends q {
    constructor(e) {
        super(`Client URL "${e}" is invalid.`),
        this.code = zl
    }
}
class Ke extends q {
    constructor() {
        super(...arguments),
        this.code = Vl
    }
}
class Ff extends q {
    constructor() {
        super(...arguments),
        this.code = Wl
    }
}
class Gf extends J {
    constructor() {
        super(...arguments),
        this.code = nf
    }
}
class ao extends q {
    constructor(e, n) {
        super(e),
        this.receipt = n,
        this.code = nl
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            receipt: this.receipt
        })
    }
}
class si extends q {
    constructor(e, n, r, i) {
        super(`Transaction has been reverted by the EVM${r === void 0 ? "" : `:
 ${q.convertToString(r)}`}`),
        this.reason = e,
        this.signature = n,
        this.receipt = r,
        this.data = i,
        this.code = rl
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            reason: this.reason,
            signature: this.signature,
            receipt: this.receipt,
            data: this.data
        })
    }
}
class fc extends si {
    constructor(e, n, r, i, s, o, a) {
        super(e),
        this.reason = e,
        this.customErrorName = n,
        this.customErrorDecodedSignature = r,
        this.customErrorArguments = i,
        this.signature = s,
        this.receipt = o,
        this.data = a,
        this.code = Ll
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            reason: this.reason,
            customErrorName: this.customErrorName,
            customErrorDecodedSignature: this.customErrorDecodedSignature,
            customErrorArguments: this.customErrorArguments,
            signature: this.signature,
            receipt: this.receipt,
            data: this.data
        })
    }
}
class hc extends ao {
    constructor(e) {
        super(`Transaction has been reverted by the EVM${e === void 0 ? "" : `:
 ${q.convertToString(e)}`}`, e),
        this.code = il
    }
}
class Uf extends ao {
    constructor() {
        super("Raw transaction undefined"),
        this.code = sl
    }
}
class la extends ao {
    constructor() {
        super("Transaction not found"),
        this.code = kl
    }
}
class qf extends J {
    constructor(e) {
        super(e, "invalid transaction with invalid sender"),
        this.code = ol
    }
}
class zf extends J {
    constructor(e) {
        super(e, "invalid transaction with invalid receiver"),
        this.code = Ol
    }
}
class Vf extends J {
    constructor() {
        super("MissingCustomChainError", "If tx.common is provided it must have tx.common.customChain"),
        this.code = al
    }
}
class Wf extends J {
    constructor() {
        super("MissingCustomChainIdError", "If tx.common is provided it must have tx.common.customChain and tx.common.customChain.chainId"),
        this.code = cl
    }
}
class Zf extends J {
    constructor(e) {
        super(JSON.stringify(e), "Chain Id doesnt match in tx.chainId tx.common.customChain.chainId"),
        this.code = dl
    }
}
class Kf extends J {
    constructor(e) {
        super(JSON.stringify(e), "Chain doesnt match in tx.chain tx.common.basechain"),
        this.code = Cl
    }
}
class Xf extends J {
    constructor(e) {
        super(JSON.stringify(e), "hardfork doesnt match in tx.hardfork tx.common.hardfork"),
        this.code = Nl
    }
}
class Jf extends J {
    constructor() {
        super("CommonOrChainAndHardforkError", "Please provide the common object or the chain and hardfork property but not all together."),
        this.code = ul
    }
}
class Yf extends J {
    constructor(e) {
        var n, r;
        super("MissingChainOrHardforkError", `When specifying chain and hardfork, both values must be defined. Received "chain": ${(n = e.chain) !== null && n !== void 0 ? n : "undefined"}, "hardfork": ${(r = e.hardfork) !== null && r !== void 0 ? r : "undefined"}`),
        this.code = ll
    }
}
class Qf extends q {
    constructor() {
        super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions'),
        this.code = $l
    }
}
class eh extends J {
    constructor(e) {
        var n, r, i, s;
        super(`gas: ${(n = e.gas) !== null && n !== void 0 ? n : "undefined"}, gasPrice: ${(r = e.gasPrice) !== null && r !== void 0 ? r : "undefined"}, maxPriorityFeePerGas: ${(i = e.maxPriorityFeePerGas) !== null && i !== void 0 ? i : "undefined"}, maxFeePerGas: ${(s = e.maxFeePerGas) !== null && s !== void 0 ? s : "undefined"}`, '"gas" is missing'),
        this.code = fl,
        this.innerError = new Qf
    }
}
class th extends q {
    constructor() {
        super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions, not both'),
        this.code = Hl
    }
}
class nh extends J {
    constructor(e) {
        var n, r, i, s;
        super(`gas: ${(n = e.gas) !== null && n !== void 0 ? n : "undefined"}, gasPrice: ${(r = e.gasPrice) !== null && r !== void 0 ? r : "undefined"}, maxPriorityFeePerGas: ${(i = e.maxPriorityFeePerGas) !== null && i !== void 0 ? i : "undefined"}, maxFeePerGas: ${(s = e.maxFeePerGas) !== null && s !== void 0 ? s : "undefined"}`, "transaction must specify legacy or fee market gas properties, not both"),
        this.code = Bl,
        this.innerError = new th
    }
}
class rh extends J {
    constructor(e) {
        var n, r;
        super(`gas: ${(n = e.gas) !== null && n !== void 0 ? n : "undefined"}, gasPrice: ${(r = e.gasPrice) !== null && r !== void 0 ? r : "undefined"}`, "Gas or gasPrice is lower than 0"),
        this.code = hl
    }
}
class ih extends J {
    constructor(e) {
        var n, r;
        super(`maxPriorityFeePerGas: ${(n = e.maxPriorityFeePerGas) !== null && n !== void 0 ? n : "undefined"}, maxFeePerGas: ${(r = e.maxFeePerGas) !== null && r !== void 0 ? r : "undefined"}`, "maxPriorityFeePerGas or maxFeePerGas is lower than 0"),
        this.code = ml
    }
}
class sh extends J {
    constructor(e) {
        super(e, "eip-1559 transactions don't support gasPrice"),
        this.code = pl
    }
}
class mc extends J {
    constructor(e) {
        var n, r;
        super(`maxPriorityFeePerGas: ${(n = e.maxPriorityFeePerGas) !== null && n !== void 0 ? n : "undefined"}, maxFeePerGas: ${(r = e.maxFeePerGas) !== null && r !== void 0 ? r : "undefined"}`, "pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas"),
        this.code = gl
    }
}
class oh extends J {
    constructor(e) {
        super(e, "invalid transaction object"),
        this.code = yl
    }
}
class ah extends J {
    constructor(e) {
        var n, r;
        super(`nonce: ${(n = e.nonce) !== null && n !== void 0 ? n : "undefined"}, chainId: ${(r = e.chainId) !== null && r !== void 0 ? r : "undefined"}`, "Nonce or chainId is lower than 0"),
        this.code = vl
    }
}
class ch extends J {
    constructor() {
        super("UnableToPopulateNonceError", "unable to populate nonce, no from address available"),
        this.code = bl
    }
}
class dh extends J {
    constructor() {
        super("Eip1559NotSupportedError", "Network doesn't support eip-1559"),
        this.code = _l
    }
}
class fa extends J {
    constructor(e) {
        super(e, "unsupported transaction type"),
        this.code = wl
    }
}
class pc extends J {
    constructor(e) {
        var n, r;
        super(`data: ${(n = e.data) !== null && n !== void 0 ? n : "undefined"}, input: ${(r = e.input) !== null && r !== void 0 ? r : "undefined"}`, `You can't have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.`),
        this.code = xl
    }
}
class uh extends q {
    constructor(e) {
        super(`The connected Ethereum Node did not respond within ${e.numberOfSeconds} seconds, please make sure your transaction was properly sent and you are connected to a healthy Node. Be aware that transaction might still be pending or mined!
	Transaction Hash: ${e.transactionHash ? e.transactionHash.toString() : "not available"}`),
        this.code = Al
    }
}
function gc(t) {
    return `Please make sure your transaction was properly sent and there are no previous pending transaction for the same account. However, be aware that it might still be mined!
	Transaction Hash: ${t ? t.toString() : "not available"}`
}
class lh extends q {
    constructor(e) {
        super(`Transaction was not mined within ${e.numberOfSeconds} seconds. ${gc(e.transactionHash)}`),
        this.code = El
    }
}
class yc extends q {
    constructor(e) {
        super(`Transaction started at ${e.starterBlockNumber} but was not mined within ${e.numberOfBlocks} blocks. ${gc(e.transactionHash)}`),
        this.code = Pl
    }
}
class fh extends J {
    constructor(e) {
        var n, r;
        super(`receipt: ${JSON.stringify(e.receipt)}, blockHash: ${(n = e.blockHash) === null || n === void 0 ? void 0 : n.toString()}, transactionHash: ${(r = e.transactionHash) === null || r === void 0 ? void 0 : r.toString()}`, "Receipt missing or blockHash null"),
        this.code = Il
    }
}
class hh extends J {
    constructor(e) {
        super(`receipt: ${JSON.stringify(e.receipt)}`, "Receipt missing block number"),
        this.code = Tl
    }
}
class Rs extends q {
    constructor(e) {
        super(`Invalid signature. "${e}"`),
        this.code = Rl
    }
}
class ha extends J {
    constructor() {
        super("LocalWalletNotAvailableError", "Attempted to index account in local wallet, but no wallet is available"),
        this.code = Sl
    }
}
class mh extends q {
    constructor(e, n) {
        const r = [];
        e.forEach(i => r.push(i.keyword)),
        super(`The following properties are invalid for the transaction type ${n}: ${r.join(", ")}`),
        this.code = Ml
    }
}
class rr extends J {
    constructor(e) {
        super(e, "can not parse as byte data"),
        this.code = hf
    }
}
class co extends J {
    constructor(e) {
        super(e, "can not parse as number data"),
        this.code = mf
    }
}
class uo extends J {
    constructor(e) {
        super(e, "invalid ethereum address"),
        this.code = gf
    }
}
class ph extends J {
    constructor(e) {
        super(e, "not a valid string"),
        this.code = ff
    }
}
class vc extends J {
    constructor(e) {
        super(e, "invalid unit"),
        this.code = pf
    }
}
class gh extends J {
    constructor(e) {
        super(e, "can not be converted to hex"),
        this.code = yf
    }
}
class bc extends J {
    constructor(e) {
        super(e, "value greater than the nibble width"),
        this.code = Ef
    }
}
class lo extends J {
    constructor(e) {
        super(e, "not a valid boolean."),
        this.code = vf
    }
}
class yh extends J {
    constructor(e) {
        super(e, "not a valid unsigned integer."),
        this.code = bf
    }
}
class ma extends J {
    constructor(e) {
        super(e, "invalid size given."),
        this.code = _f
    }
}
class pa extends J {
    constructor(e) {
        super(e, "value is larger than size."),
        this.code = wf
    }
}
class vh extends J {
    constructor(e) {
        super(e, "invalid string given"),
        this.code = xf
    }
}
const bh = t => !Array.isArray(t) && t.jsonrpc === "2.0" && !!t && (t.result === void 0 || t.result === null) && "error"in t && (typeof t.id == "number" || typeof t.id == "string")
  , ga = t => bh(t) ? t.error.message : "";
class ht extends q {
    constructor(e, n, r) {
        var i;
        super(n ?? `Returned error: ${Array.isArray(e) ? e.map(o => ga(o)).join(",") : ga(e)}`),
        this.code = Uu,
        n || (this.data = Array.isArray(e) ? e.map(o => {
            var a;
            return (a = o.error) === null || a === void 0 ? void 0 : a.data
        }
        ) : (i = e == null ? void 0 : e.error) === null || i === void 0 ? void 0 : i.data),
        this.request = r;
        let s;
        "error"in e ? s = e.error : e instanceof Array && (s = e.map(o => o.error)),
        this.innerError = s
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            data: this.data,
            request: this.request
        })
    }
}
class ar extends ht {
    constructor(e, n) {
        super(e, void 0, n),
        this.code = qu;
        let r;
        "error"in e ? r = e.error : e instanceof Array && (r = e.map(i => i.error)),
        this.innerError = r
    }
}
class ya extends q {
    constructor(e, n) {
        super(`Web3Config hardfork doesnt match in defaultHardfork ${e} and common.hardfork ${n}`),
        this.code = dc
    }
}
class va extends q {
    constructor(e, n) {
        super(`Web3Config chain doesnt match in defaultHardfork ${e} and common.hardfork ${n}`),
        this.code = dc
    }
}
const _c = "An Rpc error has occured with a code of *code*"
  , Te = {
    [Wr]: {
        message: "Parse error",
        description: "Invalid JSON"
    },
    [Zr]: {
        message: "Invalid request",
        description: "JSON is not a valid request object	"
    },
    [Kr]: {
        message: "Method not found",
        description: "Method does not exist	"
    },
    [Xr]: {
        message: "Invalid params",
        description: "Invalid method parameters"
    },
    [Jr]: {
        message: "Internal error",
        description: "Internal JSON-RPC error"
    },
    [Yr]: {
        message: "Invalid input",
        description: "Missing or invalid parameters"
    },
    [Qr]: {
        message: "Resource not found",
        description: "Requested resource not found"
    },
    [ei]: {
        message: "Resource unavailable",
        description: "Requested resource not available"
    },
    [ti]: {
        message: "Transaction rejected",
        description: "Transaction creation failed"
    },
    [ni]: {
        message: "Method not supported",
        description: "Method is not implemented"
    },
    [ri]: {
        message: "Limit exceeded",
        description: "Request exceeds defined limit"
    },
    [ii]: {
        message: "JSON-RPC version not supported",
        description: "Version of JSON-RPC protocol is not supported"
    },
    [sf]: {
        name: "User Rejected Request",
        message: "The user rejected the request."
    },
    [of]: {
        name: "Unauthorized",
        message: "The requested method and/or account has not been authorized by the user."
    },
    [af]: {
        name: "Unsupported Method",
        message: "The Provider does not support the requested method."
    },
    [cf]: {
        name: "Disconnected",
        message: "The Provider is disconnected from all chains."
    },
    [df]: {
        name: "Chain Disconnected",
        message: "The Provider is not connected to the requested chain."
    },
    "0-999": {
        name: "",
        message: "Not used."
    },
    1e3: {
        name: "Normal Closure",
        message: "The connection successfully completed the purpose for which it was created."
    },
    1001: {
        name: "Going Away",
        message: "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection."
    },
    1002: {
        name: "Protocol error",
        message: "The endpoint is terminating the connection due to a protocol error."
    },
    1003: {
        name: "Unsupported Data",
        message: "The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)"
    },
    1004: {
        name: "Reserved",
        message: "Reserved. A meaning might be defined in the future."
    },
    1005: {
        name: "No Status Rcvd",
        message: "Reserved. Indicates that no status code was provided even though one was expected."
    },
    1006: {
        name: "Abnormal Closure",
        message: "Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected."
    },
    1007: {
        name: "Invalid frame payload data",
        message: "The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message)."
    },
    1008: {
        name: "Policy Violation",
        message: "The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable."
    },
    1009: {
        name: "Message Too Big",
        message: "The endpoint is terminating the connection because a data frame was received that is too large."
    },
    1010: {
        name: "Mandatory Ext.",
        message: "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
    },
    1011: {
        name: "Internal Error",
        message: "The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."
    },
    1012: {
        name: "Service Restart",
        message: "The server is terminating the connection because it is restarting."
    },
    1013: {
        name: "Try Again Later",
        message: "The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients."
    },
    1014: {
        name: "Bad Gateway",
        message: "The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code."
    },
    1015: {
        name: "TLS handshake",
        message: "Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
    },
    "1016-2999": {
        name: "",
        message: "For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications."
    },
    "3000-3999": {
        name: "",
        message: "For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol."
    },
    "4000-4999": {
        name: "",
        message: "For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol."
    }
};
class De extends q {
    constructor(e, n) {
        super(n ?? _c.replace("*code*", e.error.code.toString())),
        this.code = e.error.code,
        this.id = e.id,
        this.jsonrpc = e.jsonrpc,
        this.jsonRpcError = e.error
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            error: this.jsonRpcError,
            id: this.id,
            jsonRpc: this.jsonrpc
        })
    }
}
class _h extends q {
    constructor(e, n) {
        var r, i, s, o;
        if (!e)
            super();
        else if (!((r = Te[e]) === null || r === void 0) && r.message)
            super(Te[e].message);
        else {
            const a = Object.keys(Te).find(u => typeof u == "string" && e >= parseInt(u.split("-")[0], 10) && e <= parseInt(u.split("-")[1], 10));
            super((s = (i = Te[a ?? ""]) === null || i === void 0 ? void 0 : i.message) !== null && s !== void 0 ? s : _c.replace("*code*", (o = e == null ? void 0 : e.toString()) !== null && o !== void 0 ? o : '""'))
        }
        this.code = e,
        this.data = n
    }
}
class wh extends De {
    constructor(e) {
        super(e, Te[Wr].message),
        this.code = Wr
    }
}
class xh extends De {
    constructor(e) {
        super(e, Te[Zr].message),
        this.code = Zr
    }
}
class Eh extends De {
    constructor(e) {
        super(e, Te[Kr].message),
        this.code = Kr
    }
}
class Ih extends De {
    constructor(e) {
        super(e, Te[Xr].message),
        this.code = Xr
    }
}
class Th extends De {
    constructor(e) {
        super(e, Te[Jr].message),
        this.code = Jr
    }
}
class Sh extends De {
    constructor(e) {
        super(e, Te[Yr].message),
        this.code = Yr
    }
}
class kh extends De {
    constructor(e) {
        super(e, Te[ni].message),
        this.code = ni
    }
}
class Ah extends De {
    constructor(e) {
        super(e, Te[ei].message),
        this.code = ei
    }
}
class Ph extends De {
    constructor(e) {
        super(e, Te[Qr].message),
        this.code = Qr
    }
}
class Rh extends De {
    constructor(e) {
        super(e, Te[ii].message),
        this.code = ii
    }
}
class Bh extends De {
    constructor(e) {
        super(e, Te[ti].message),
        this.code = ti
    }
}
class Ch extends De {
    constructor(e) {
        super(e, Te[ri].message),
        this.code = ri
    }
}
const Ae = new Map;
Ae.set(Wr, {
    error: wh
});
Ae.set(Zr, {
    error: xh
});
Ae.set(Kr, {
    error: Eh
});
Ae.set(Xr, {
    error: Ih
});
Ae.set(Jr, {
    error: Th
});
Ae.set(Yr, {
    error: Sh
});
Ae.set(ni, {
    error: kh
});
Ae.set(ei, {
    error: Ah
});
Ae.set(ti, {
    error: Bh
});
Ae.set(Qr, {
    error: Ph
});
Ae.set(ii, {
    error: Rh
});
Ae.set(ri, {
    error: Ch
});
class Nh extends q {
    constructor(e) {
        super(`Format for the type ${e} is unsupported`),
        this.type = e,
        this.code = Tf
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), {
            type: this.type
        })
    }
}
function Bs(t) {
    if (!Number.isSafeInteger(t) || t < 0)
        throw new Error(`Wrong positive integer: ${t}`)
}
function Oh(t) {
    if (typeof t != "boolean")
        throw new Error(`Expected boolean, not ${t}`)
}
function wc(t, ...e) {
    if (!(t instanceof Uint8Array))
        throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(t.length))
        throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
}
function Lh(t) {
    if (typeof t != "function" || typeof t.create != "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
    Bs(t.outputLen),
    Bs(t.blockLen)
}
function Mh(t, e=!0) {
    if (t.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && t.finished)
        throw new Error("Hash#digest() has already been called")
}
function $h(t, e) {
    wc(t);
    const n = e.outputLen;
    if (t.length < n)
        throw new Error(`digestInto() expects output buffer of length at least ${n}`)
}
const le = {
    number: Bs,
    bool: Oh,
    bytes: wc,
    hash: Lh,
    exists: Mh,
    output: $h
}
  , Lr = BigInt(2 ** 32 - 1)
  , Cs = BigInt(32);
function xc(t, e=!1) {
    return e ? {
        h: Number(t & Lr),
        l: Number(t >> Cs & Lr)
    } : {
        h: Number(t >> Cs & Lr) | 0,
        l: Number(t & Lr) | 0
    }
}
function Hh(t, e=!1) {
    let n = new Uint32Array(t.length)
      , r = new Uint32Array(t.length);
    for (let i = 0; i < t.length; i++) {
        const {h: s, l: o} = xc(t[i], e);
        [n[i],r[i]] = [s, o]
    }
    return [n, r]
}
const jh = (t, e) => BigInt(t >>> 0) << Cs | BigInt(e >>> 0)
  , Dh = (t, e, n) => t >>> n
  , Fh = (t, e, n) => t << 32 - n | e >>> n
  , Gh = (t, e, n) => t >>> n | e << 32 - n
  , Uh = (t, e, n) => t << 32 - n | e >>> n
  , qh = (t, e, n) => t << 64 - n | e >>> n - 32
  , zh = (t, e, n) => t >>> n - 32 | e << 64 - n
  , Vh = (t, e) => e
  , Wh = (t, e) => t
  , Zh = (t, e, n) => t << n | e >>> 32 - n
  , Kh = (t, e, n) => e << n | t >>> 32 - n
  , Xh = (t, e, n) => e << n - 32 | t >>> 64 - n
  , Jh = (t, e, n) => t << n - 32 | e >>> 64 - n;
function Yh(t, e, n, r) {
    const i = (e >>> 0) + (r >>> 0);
    return {
        h: t + n + (i / 2 ** 32 | 0) | 0,
        l: i | 0
    }
}
const Qh = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0)
  , em = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0
  , tm = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0)
  , nm = (t, e, n, r, i) => e + n + r + i + (t / 2 ** 32 | 0) | 0
  , rm = (t, e, n, r, i) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0)
  , im = (t, e, n, r, i, s) => e + n + r + i + s + (t / 2 ** 32 | 0) | 0
  , G = {
    fromBig: xc,
    split: Hh,
    toBig: jh,
    shrSH: Dh,
    shrSL: Fh,
    rotrSH: Gh,
    rotrSL: Uh,
    rotrBH: qh,
    rotrBL: zh,
    rotr32H: Vh,
    rotr32L: Wh,
    rotlSH: Zh,
    rotlSL: Kh,
    rotlBH: Xh,
    rotlBL: Jh,
    add: Yh,
    add3L: Qh,
    add3H: em,
    add4L: tm,
    add4H: nm,
    add5H: im,
    add5L: rm
}
  , Dr = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ec = t => t instanceof Uint8Array
  , Fr = t => new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength / 4))
  , Gr = t => new DataView(t.buffer,t.byteOffset,t.byteLength)
  , tt = (t, e) => t << 32 - e | t >>> e
  , sm = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!sm)
    throw new Error("Non little-endian hardware is not supported");
Array.from({
    length: 256
}, (t, e) => e.toString(16).padStart(2, "0"));
function Ln(t) {
    if (typeof t != "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t))
}
function sn(t) {
    if (typeof t == "string" && (t = Ln(t)),
    !Ec(t))
        throw new Error(`expected Uint8Array, got ${typeof t}`);
    return t
}
function oi(...t) {
    const e = new Uint8Array(t.reduce( (r, i) => r + i.length, 0));
    let n = 0;
    return t.forEach(r => {
        if (!Ec(r))
            throw new Error("Uint8Array expected");
        e.set(r, n),
        n += r.length
    }
    ),
    e
}
class fo {
    clone() {
        return this._cloneInto()
    }
}
const om = t => Object.prototype.toString.call(t) === "[object Object]" && t.constructor === Object;
function Ic(t, e) {
    if (e !== void 0 && (typeof e != "object" || !om(e)))
        throw new Error("Options should be object or undefined");
    return Object.assign(t, e)
}
function pn(t) {
    const e = r => t().update(sn(r)).digest()
      , n = t();
    return e.outputLen = n.outputLen,
    e.blockLen = n.blockLen,
    e.create = () => t(),
    e
}
function am(t) {
    const e = (r, i) => t(i).update(sn(r)).digest()
      , n = t({});
    return e.outputLen = n.outputLen,
    e.blockLen = n.blockLen,
    e.create = r => t(r),
    e
}
function Tc(t=32) {
    if (Dr && typeof Dr.getRandomValues == "function")
        return Dr.getRandomValues(new Uint8Array(t));
    throw new Error("crypto.getRandomValues must be defined")
}
const [Sc,kc,Ac] = [[], [], []]
  , cm = BigInt(0)
  , Xn = BigInt(1)
  , dm = BigInt(2)
  , um = BigInt(7)
  , lm = BigInt(256)
  , fm = BigInt(113);
for (let t = 0, e = Xn, n = 1, r = 0; t < 24; t++) {
    [n,r] = [r, (2 * n + 3 * r) % 5],
    Sc.push(2 * (5 * r + n)),
    kc.push((t + 1) * (t + 2) / 2 % 64);
    let i = cm;
    for (let s = 0; s < 7; s++)
        e = (e << Xn ^ (e >> um) * fm) % lm,
        e & dm && (i ^= Xn << (Xn << BigInt(s)) - Xn);
    Ac.push(i)
}
const [hm,mm] = G.split(Ac, !0)
  , ba = (t, e, n) => n > 32 ? G.rotlBH(t, e, n) : G.rotlSH(t, e, n)
  , _a = (t, e, n) => n > 32 ? G.rotlBL(t, e, n) : G.rotlSL(t, e, n);
function pm(t, e=24) {
    const n = new Uint32Array(10);
    for (let r = 24 - e; r < 24; r++) {
        for (let o = 0; o < 10; o++)
            n[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
        for (let o = 0; o < 10; o += 2) {
            const a = (o + 8) % 10
              , u = (o + 2) % 10
              , d = n[u]
              , c = n[u + 1]
              , l = ba(d, c, 1) ^ n[a]
              , f = _a(d, c, 1) ^ n[a + 1];
            for (let h = 0; h < 50; h += 10)
                t[o + h] ^= l,
                t[o + h + 1] ^= f
        }
        let i = t[2]
          , s = t[3];
        for (let o = 0; o < 24; o++) {
            const a = kc[o]
              , u = ba(i, s, a)
              , d = _a(i, s, a)
              , c = Sc[o];
            i = t[c],
            s = t[c + 1],
            t[c] = u,
            t[c + 1] = d
        }
        for (let o = 0; o < 50; o += 10) {
            for (let a = 0; a < 10; a++)
                n[a] = t[o + a];
            for (let a = 0; a < 10; a++)
                t[o + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10]
        }
        t[0] ^= hm[r],
        t[1] ^= mm[r]
    }
    n.fill(0)
}
class Li extends fo {
    constructor(e, n, r, i=!1, s=24) {
        if (super(),
        this.blockLen = e,
        this.suffix = n,
        this.outputLen = r,
        this.enableXOF = i,
        this.rounds = s,
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        le.number(r),
        0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200),
        this.state32 = Fr(this.state)
    }
    keccak() {
        pm(this.state32, this.rounds),
        this.posOut = 0,
        this.pos = 0
    }
    update(e) {
        le.exists(this);
        const {blockLen: n, state: r} = this;
        e = sn(e);
        const i = e.length;
        for (let s = 0; s < i; ) {
            const o = Math.min(n - this.pos, i - s);
            for (let a = 0; a < o; a++)
                r[this.pos++] ^= e[s++];
            this.pos === n && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        const {state: e, suffix: n, pos: r, blockLen: i} = this;
        e[r] ^= n,
        n & 128 && r === i - 1 && this.keccak(),
        e[i - 1] ^= 128,
        this.keccak()
    }
    writeInto(e) {
        le.exists(this, !1),
        le.bytes(e),
        this.finish();
        const n = this.state
          , {blockLen: r} = this;
        for (let i = 0, s = e.length; i < s; ) {
            this.posOut >= r && this.keccak();
            const o = Math.min(r - this.posOut, s - i);
            e.set(n.subarray(this.posOut, this.posOut + o), i),
            this.posOut += o,
            i += o
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return le.number(e),
        this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (le.output(e, this),
        this.finished)
            throw new Error("digest() was already called");
        return this.writeInto(e),
        this.destroy(),
        e
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0,
        this.state.fill(0)
    }
    _cloneInto(e) {
        const {blockLen: n, suffix: r, outputLen: i, rounds: s, enableXOF: o} = this;
        return e || (e = new Li(n,r,i,o,s)),
        e.state32.set(this.state32),
        e.pos = this.pos,
        e.posOut = this.posOut,
        e.finished = this.finished,
        e.rounds = s,
        e.suffix = r,
        e.outputLen = i,
        e.enableXOF = o,
        e.destroyed = this.destroyed,
        e
    }
}
const Ft = (t, e, n) => pn( () => new Li(e,t,n));
Ft(6, 144, 224 / 8);
Ft(6, 136, 256 / 8);
Ft(6, 104, 384 / 8);
Ft(6, 72, 512 / 8);
Ft(1, 144, 224 / 8);
const wa = Ft(1, 136, 256 / 8);
Ft(1, 104, 384 / 8);
Ft(1, 72, 512 / 8);
const Pc = (t, e, n) => am( (r={}) => new Li(e,t,r.dkLen === void 0 ? n : r.dkLen,!0));
Pc(31, 168, 128 / 8);
Pc(31, 136, 256 / 8);
const ai = le.bytes;
function Rc(t) {
    if (!(t instanceof Uint8Array))
        throw new TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof t}`);
    return new TextDecoder().decode(t)
}
function gm(t, e) {
    if (t.length !== e.length)
        return !1;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e[n])
            return !1;
    return !0
}
function ym(t) {
    return e => (le.bytes(e),
    t(e))
}
( () => {
    const t = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0
      , e = typeof module < "u" && typeof module.require == "function" && module.require.bind(module);
    return {
        node: e && !t ? e("crypto") : void 0,
        web: t
    }
}
)();
const Se = ( () => {
    const t = ym(wa);
    return t.create = wa.create,
    t
}
)();
var ie;
(function(t) {
    t.assertEqual = i => i;
    function e(i) {}
    t.assertIs = e;
    function n(i) {
        throw new Error
    }
    t.assertNever = n,
    t.arrayToEnum = i => {
        const s = {};
        for (const o of i)
            s[o] = o;
        return s
    }
    ,
    t.getValidEnumValues = i => {
        const s = t.objectKeys(i).filter(a => typeof i[i[a]] != "number")
          , o = {};
        for (const a of s)
            o[a] = i[a];
        return t.objectValues(o)
    }
    ,
    t.objectValues = i => t.objectKeys(i).map(function(s) {
        return i[s]
    }),
    t.objectKeys = typeof Object.keys == "function" ? i => Object.keys(i) : i => {
        const s = [];
        for (const o in i)
            Object.prototype.hasOwnProperty.call(i, o) && s.push(o);
        return s
    }
    ,
    t.find = (i, s) => {
        for (const o of i)
            if (s(o))
                return o
    }
    ,
    t.isInteger = typeof Number.isInteger == "function" ? i => Number.isInteger(i) : i => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
    function r(i, s=" | ") {
        return i.map(o => typeof o == "string" ? `'${o}'` : o).join(s)
    }
    t.joinValues = r,
    t.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s
}
)(ie || (ie = {}));
var Ns;
(function(t) {
    t.mergeShapes = (e, n) => ({
        ...e,
        ...n
    })
}
)(Ns || (Ns = {}));
const B = ie.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , Nt = t => {
    switch (typeof t) {
    case "undefined":
        return B.undefined;
    case "string":
        return B.string;
    case "number":
        return isNaN(t) ? B.nan : B.number;
    case "boolean":
        return B.boolean;
    case "function":
        return B.function;
    case "bigint":
        return B.bigint;
    case "symbol":
        return B.symbol;
    case "object":
        return Array.isArray(t) ? B.array : t === null ? B.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? B.promise : typeof Map < "u" && t instanceof Map ? B.map : typeof Set < "u" && t instanceof Set ? B.set : typeof Date < "u" && t instanceof Date ? B.date : B.object;
    default:
        return B.unknown
    }
}
  , T = ie.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , vm = t => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Je extends Error {
    constructor(e) {
        super(),
        this.issues = [],
        this.addIssue = r => {
            this.issues = [...this.issues, r]
        }
        ,
        this.addIssues = (r=[]) => {
            this.issues = [...this.issues, ...r]
        }
        ;
        const n = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n,
        this.name = "ZodError",
        this.issues = e
    }
    get errors() {
        return this.issues
    }
    format(e) {
        const n = e || function(s) {
            return s.message
        }
          , r = {
            _errors: []
        }
          , i = s => {
            for (const o of s.issues)
                if (o.code === "invalid_union")
                    o.unionErrors.map(i);
                else if (o.code === "invalid_return_type")
                    i(o.returnTypeError);
                else if (o.code === "invalid_arguments")
                    i(o.argumentsError);
                else if (o.path.length === 0)
                    r._errors.push(n(o));
                else {
                    let a = r
                      , u = 0;
                    for (; u < o.path.length; ) {
                        const d = o.path[u];
                        u === o.path.length - 1 ? (a[d] = a[d] || {
                            _errors: []
                        },
                        a[d]._errors.push(n(o))) : a[d] = a[d] || {
                            _errors: []
                        },
                        a = a[d],
                        u++
                    }
                }
        }
        ;
        return i(this),
        r
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, ie.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e=n => n.message) {
        const n = {}
          , r = [];
        for (const i of this.issues)
            i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [],
            n[i.path[0]].push(e(i))) : r.push(e(i));
        return {
            formErrors: r,
            fieldErrors: n
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
Je.create = t => new Je(t);
const cr = (t, e) => {
    let n;
    switch (t.code) {
    case T.invalid_type:
        t.received === B.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
        break;
    case T.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(t.expected, ie.jsonStringifyReplacer)}`;
        break;
    case T.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${ie.joinValues(t.keys, ", ")}`;
        break;
    case T.invalid_union:
        n = "Invalid input";
        break;
    case T.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${ie.joinValues(t.options)}`;
        break;
    case T.invalid_enum_value:
        n = `Invalid enum value. Expected ${ie.joinValues(t.options)}, received '${t.received}'`;
        break;
    case T.invalid_arguments:
        n = "Invalid function arguments";
        break;
    case T.invalid_return_type:
        n = "Invalid function return type";
        break;
    case T.invalid_date:
        n = "Invalid date";
        break;
    case T.invalid_string:
        typeof t.validation == "object" ? "includes"in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`,
        typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith"in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith"in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : ie.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
        break;
    case T.too_small:
        t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
        break;
    case T.too_big:
        t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
        break;
    case T.custom:
        n = "Invalid input";
        break;
    case T.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;
    case T.not_multiple_of:
        n = `Number must be a multiple of ${t.multipleOf}`;
        break;
    case T.not_finite:
        n = "Number must be finite";
        break;
    default:
        n = e.defaultError,
        ie.assertNever(t)
    }
    return {
        message: n
    }
}
;
let Bc = cr;
function bm(t) {
    Bc = t
}
function ci() {
    return Bc
}
const di = t => {
    const {data: e, path: n, errorMaps: r, issueData: i} = t
      , s = [...n, ...i.path || []]
      , o = {
        ...i,
        path: s
    };
    let a = "";
    const u = r.filter(d => !!d).slice().reverse();
    for (const d of u)
        a = d(o, {
            data: e,
            defaultError: a
        }).message;
    return {
        ...i,
        path: s,
        message: i.message || a
    }
}
  , _m = [];
function N(t, e) {
    const n = di({
        issueData: e,
        data: t.data,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ci(), cr].filter(r => !!r)
    });
    t.common.issues.push(n)
}
class ke {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, n) {
        const r = [];
        for (const i of n) {
            if (i.status === "aborted")
                return V;
            i.status === "dirty" && e.dirty(),
            r.push(i.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
    static async mergeObjectAsync(e, n) {
        const r = [];
        for (const i of n)
            r.push({
                key: await i.key,
                value: await i.value
            });
        return ke.mergeObjectSync(e, r)
    }
    static mergeObjectSync(e, n) {
        const r = {};
        for (const i of n) {
            const {key: s, value: o} = i;
            if (s.status === "aborted" || o.status === "aborted")
                return V;
            s.status === "dirty" && e.dirty(),
            o.status === "dirty" && e.dirty(),
            s.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (r[s.value] = o.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
}
const V = Object.freeze({
    status: "aborted"
})
  , Cc = t => ({
    status: "dirty",
    value: t
})
  , Pe = t => ({
    status: "valid",
    value: t
})
  , Os = t => t.status === "aborted"
  , Ls = t => t.status === "dirty"
  , dr = t => t.status === "valid"
  , ui = t => typeof Promise < "u" && t instanceof Promise;
var M;
(function(t) {
    t.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {},
    t.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
}
)(M || (M = {}));
class st {
    constructor(e, n, r, i) {
        this._cachedPath = [],
        this.parent = e,
        this.data = n,
        this._path = r,
        this._key = i
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const xa = (t, e) => {
    if (dr(e))
        return {
            success: !0,
            data: e.value
        };
    if (!t.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const n = new Je(t.common.issues);
            return this._error = n,
            this._error
        }
    }
}
;
function W(t) {
    if (!t)
        return {};
    const {errorMap: e, invalid_type_error: n, required_error: r, description: i} = t;
    if (e && (n || r))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: i
    } : {
        errorMap: (o, a) => o.code !== "invalid_type" ? {
            message: a.defaultError
        } : typeof a.data > "u" ? {
            message: r ?? a.defaultError
        } : {
            message: n ?? a.defaultError
        },
        description: i
    }
}
class K {
    constructor(e) {
        this.spa = this.safeParseAsync,
        this._def = e,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this)
    }
    get description() {
        return this._def.description
    }
    _getType(e) {
        return Nt(e.data)
    }
    _getOrReturnCtx(e, n) {
        return n || {
            common: e.parent.common,
            data: e.data,
            parsedType: Nt(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new ke,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: Nt(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const n = this._parse(e);
        if (ui(n))
            throw new Error("Synchronous parse encountered promise.");
        return n
    }
    _parseAsync(e) {
        const n = this._parse(e);
        return Promise.resolve(n)
    }
    parse(e, n) {
        const r = this.safeParse(e, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    safeParse(e, n) {
        var r;
        const i = {
            common: {
                issues: [],
                async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
                contextualErrorMap: n == null ? void 0 : n.errorMap
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Nt(e)
        }
          , s = this._parseSync({
            data: e,
            path: i.path,
            parent: i
        });
        return xa(i, s)
    }
    async parseAsync(e, n) {
        const r = await this.safeParseAsync(e, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    async safeParseAsync(e, n) {
        const r = {
            common: {
                issues: [],
                contextualErrorMap: n == null ? void 0 : n.errorMap,
                async: !0
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Nt(e)
        }
          , i = this._parse({
            data: e,
            path: r.path,
            parent: r
        })
          , s = await (ui(i) ? i : Promise.resolve(i));
        return xa(r, s)
    }
    refine(e, n) {
        const r = i => typeof n == "string" || typeof n > "u" ? {
            message: n
        } : typeof n == "function" ? n(i) : n;
        return this._refinement( (i, s) => {
            const o = e(i)
              , a = () => s.addIssue({
                code: T.custom,
                ...r(i)
            });
            return typeof Promise < "u" && o instanceof Promise ? o.then(u => u ? !0 : (a(),
            !1)) : o ? !0 : (a(),
            !1)
        }
        )
    }
    refinement(e, n) {
        return this._refinement( (r, i) => e(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n),
        !1))
    }
    _refinement(e) {
        return new Qe({
            schema: this,
            typeName: $.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    optional() {
        return bt.create(this, this._def)
    }
    nullable() {
        return cn.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return Ye.create(this, this._def)
    }
    promise() {
        return $n.create(this, this._def)
    }
    or(e) {
        return hr.create([this, e], this._def)
    }
    and(e) {
        return mr.create(this, e, this._def)
    }
    transform(e) {
        return new Qe({
            ...W(this._def),
            schema: this,
            typeName: $.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default(e) {
        const n = typeof e == "function" ? e : () => e;
        return new br({
            ...W(this._def),
            innerType: this,
            defaultValue: n,
            typeName: $.ZodDefault
        })
    }
    brand() {
        return new Oc({
            typeName: $.ZodBranded,
            type: this,
            ...W(this._def)
        })
    }
    catch(e) {
        const n = typeof e == "function" ? e : () => e;
        return new mi({
            ...W(this._def),
            innerType: this,
            catchValue: n,
            typeName: $.ZodCatch
        })
    }
    describe(e) {
        const n = this.constructor;
        return new n({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return Ar.create(this, e)
    }
    readonly() {
        return gi.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const wm = /^c[^\s-]{8,}$/i
  , xm = /^[a-z][a-z0-9]*$/
  , Em = /^[0-9A-HJKMNP-TV-Z]{26}$/
  , Im = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , Tm = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , Sm = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ds;
const km = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/
  , Am = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/
  , Pm = t => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Rm(t, e) {
    return !!((e === "v4" || !e) && km.test(t) || (e === "v6" || !e) && Am.test(t))
}
class Xe extends K {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== B.string) {
            const s = this._getOrReturnCtx(e);
            return N(s, {
                code: T.invalid_type,
                expected: B.string,
                received: s.parsedType
            }),
            V
        }
        const r = new ke;
        let i;
        for (const s of this._def.checks)
            if (s.kind === "min")
                e.data.length < s.value && (i = this._getOrReturnCtx(e, i),
                N(i, {
                    code: T.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "max")
                e.data.length > s.value && (i = this._getOrReturnCtx(e, i),
                N(i, {
                    code: T.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "length") {
                const o = e.data.length > s.value
                  , a = e.data.length < s.value;
                (o || a) && (i = this._getOrReturnCtx(e, i),
                o ? N(i, {
                    code: T.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message
                }) : a && N(i, {
                    code: T.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message
                }),
                r.dirty())
            } else if (s.kind === "email")
                Tm.test(e.data) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    validation: "email",
                    code: T.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "emoji")
                ds || (ds = new RegExp(Sm,"u")),
                ds.test(e.data) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    validation: "emoji",
                    code: T.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "uuid")
                Im.test(e.data) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    validation: "uuid",
                    code: T.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "cuid")
                wm.test(e.data) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    validation: "cuid",
                    code: T.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "cuid2")
                xm.test(e.data) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    validation: "cuid2",
                    code: T.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "ulid")
                Em.test(e.data) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    validation: "ulid",
                    code: T.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "url")
                try {
                    new URL(e.data)
                } catch {
                    i = this._getOrReturnCtx(e, i),
                    N(i, {
                        validation: "url",
                        code: T.invalid_string,
                        message: s.message
                    }),
                    r.dirty()
                }
            else
                s.kind === "regex" ? (s.regex.lastIndex = 0,
                s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    validation: "regex",
                    code: T.invalid_string,
                    message: s.message
                }),
                r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    code: T.invalid_string,
                    validation: {
                        includes: s.value,
                        position: s.position
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    code: T.invalid_string,
                    validation: {
                        startsWith: s.value
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    code: T.invalid_string,
                    validation: {
                        endsWith: s.value
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "datetime" ? Pm(s).test(e.data) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    code: T.invalid_string,
                    validation: "datetime",
                    message: s.message
                }),
                r.dirty()) : s.kind === "ip" ? Rm(e.data, s.version) || (i = this._getOrReturnCtx(e, i),
                N(i, {
                    validation: "ip",
                    code: T.invalid_string,
                    message: s.message
                }),
                r.dirty()) : ie.assertNever(s);
        return {
            status: r.value,
            value: e.data
        }
    }
    _regex(e, n, r) {
        return this.refinement(i => e.test(i), {
            validation: n,
            code: T.invalid_string,
            ...M.errToObj(r)
        })
    }
    _addCheck(e) {
        return new Xe({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...M.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...M.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...M.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...M.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...M.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...M.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...M.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...M.errToObj(e)
        })
    }
    datetime(e) {
        var n;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            offset: (n = e == null ? void 0 : e.offset) !== null && n !== void 0 ? n : !1,
            ...M.errToObj(e == null ? void 0 : e.message)
        })
    }
    regex(e, n) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...M.errToObj(n)
        })
    }
    includes(e, n) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: n == null ? void 0 : n.position,
            ...M.errToObj(n == null ? void 0 : n.message)
        })
    }
    startsWith(e, n) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...M.errToObj(n)
        })
    }
    endsWith(e, n) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...M.errToObj(n)
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...M.errToObj(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...M.errToObj(n)
        })
    }
    length(e, n) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...M.errToObj(n)
        })
    }
    nonempty(e) {
        return this.min(1, M.errToObj(e))
    }
    trim() {
        return new Xe({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new Xe({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new Xe({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get minLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
Xe.create = t => {
    var e;
    return new Xe({
        checks: [],
        typeName: $.ZodString,
        coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
        ...W(t)
    })
}
;
function Bm(t, e) {
    const n = (t.toString().split(".")[1] || "").length
      , r = (e.toString().split(".")[1] || "").length
      , i = n > r ? n : r
      , s = parseInt(t.toFixed(i).replace(".", ""))
      , o = parseInt(e.toFixed(i).replace(".", ""));
    return s % o / Math.pow(10, i)
}
class Mt extends K {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== B.number) {
            const s = this._getOrReturnCtx(e);
            return N(s, {
                code: T.invalid_type,
                expected: B.number,
                received: s.parsedType
            }),
            V
        }
        let r;
        const i = new ke;
        for (const s of this._def.checks)
            s.kind === "int" ? ie.isInteger(e.data) || (r = this._getOrReturnCtx(e, r),
            N(r, {
                code: T.invalid_type,
                expected: "integer",
                received: "float",
                message: s.message
            }),
            i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r),
            N(r, {
                code: T.too_small,
                minimum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }),
            i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r),
            N(r, {
                code: T.too_big,
                maximum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }),
            i.dirty()) : s.kind === "multipleOf" ? Bm(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r),
            N(r, {
                code: T.not_multiple_of,
                multipleOf: s.value,
                message: s.message
            }),
            i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r),
            N(r, {
                code: T.not_finite,
                message: s.message
            }),
            i.dirty()) : ie.assertNever(s);
        return {
            status: i.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, M.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, M.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, M.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, M.toString(n))
    }
    setLimit(e, n, r, i) {
        return new Mt({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: r,
                message: M.toString(i)
            }]
        })
    }
    _addCheck(e) {
        return new Mt({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: M.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: M.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: M.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: M.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: M.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: M.toString(n)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: M.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: M.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: M.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && ie.isInteger(e.value))
    }
    get isFinite() {
        let e = null
          , n = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
                return !0;
            r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value)
        }
        return Number.isFinite(n) && Number.isFinite(e)
    }
}
Mt.create = t => new Mt({
    checks: [],
    typeName: $.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...W(t)
});
class $t extends K {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce && (e.data = BigInt(e.data)),
        this._getType(e) !== B.bigint) {
            const s = this._getOrReturnCtx(e);
            return N(s, {
                code: T.invalid_type,
                expected: B.bigint,
                received: s.parsedType
            }),
            V
        }
        let r;
        const i = new ke;
        for (const s of this._def.checks)
            s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r),
            N(r, {
                code: T.too_small,
                type: "bigint",
                minimum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }),
            i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r),
            N(r, {
                code: T.too_big,
                type: "bigint",
                maximum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }),
            i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r),
            N(r, {
                code: T.not_multiple_of,
                multipleOf: s.value,
                message: s.message
            }),
            i.dirty()) : ie.assertNever(s);
        return {
            status: i.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, M.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, M.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, M.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, M.toString(n))
    }
    setLimit(e, n, r, i) {
        return new $t({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: r,
                message: M.toString(i)
            }]
        })
    }
    _addCheck(e) {
        return new $t({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: M.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: M.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: M.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: M.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: M.toString(n)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
$t.create = t => {
    var e;
    return new $t({
        checks: [],
        typeName: $.ZodBigInt,
        coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
        ...W(t)
    })
}
;
class ur extends K {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== B.boolean) {
            const r = this._getOrReturnCtx(e);
            return N(r, {
                code: T.invalid_type,
                expected: B.boolean,
                received: r.parsedType
            }),
            V
        }
        return Pe(e.data)
    }
}
ur.create = t => new ur({
    typeName: $.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...W(t)
});
class on extends K {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== B.date) {
            const s = this._getOrReturnCtx(e);
            return N(s, {
                code: T.invalid_type,
                expected: B.date,
                received: s.parsedType
            }),
            V
        }
        if (isNaN(e.data.getTime())) {
            const s = this._getOrReturnCtx(e);
            return N(s, {
                code: T.invalid_date
            }),
            V
        }
        const r = new ke;
        let i;
        for (const s of this._def.checks)
            s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i),
            N(i, {
                code: T.too_small,
                message: s.message,
                inclusive: !0,
                exact: !1,
                minimum: s.value,
                type: "date"
            }),
            r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i),
            N(i, {
                code: T.too_big,
                message: s.message,
                inclusive: !0,
                exact: !1,
                maximum: s.value,
                type: "date"
            }),
            r.dirty()) : ie.assertNever(s);
        return {
            status: r.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new on({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: M.toString(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: M.toString(n)
        })
    }
    get minDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
}
on.create = t => new on({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: $.ZodDate,
    ...W(t)
});
class li extends K {
    _parse(e) {
        if (this._getType(e) !== B.symbol) {
            const r = this._getOrReturnCtx(e);
            return N(r, {
                code: T.invalid_type,
                expected: B.symbol,
                received: r.parsedType
            }),
            V
        }
        return Pe(e.data)
    }
}
li.create = t => new li({
    typeName: $.ZodSymbol,
    ...W(t)
});
class lr extends K {
    _parse(e) {
        if (this._getType(e) !== B.undefined) {
            const r = this._getOrReturnCtx(e);
            return N(r, {
                code: T.invalid_type,
                expected: B.undefined,
                received: r.parsedType
            }),
            V
        }
        return Pe(e.data)
    }
}
lr.create = t => new lr({
    typeName: $.ZodUndefined,
    ...W(t)
});
class fr extends K {
    _parse(e) {
        if (this._getType(e) !== B.null) {
            const r = this._getOrReturnCtx(e);
            return N(r, {
                code: T.invalid_type,
                expected: B.null,
                received: r.parsedType
            }),
            V
        }
        return Pe(e.data)
    }
}
fr.create = t => new fr({
    typeName: $.ZodNull,
    ...W(t)
});
class Mn extends K {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(e) {
        return Pe(e.data)
    }
}
Mn.create = t => new Mn({
    typeName: $.ZodAny,
    ...W(t)
});
class en extends K {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(e) {
        return Pe(e.data)
    }
}
en.create = t => new en({
    typeName: $.ZodUnknown,
    ...W(t)
});
class _t extends K {
    _parse(e) {
        const n = this._getOrReturnCtx(e);
        return N(n, {
            code: T.invalid_type,
            expected: B.never,
            received: n.parsedType
        }),
        V
    }
}
_t.create = t => new _t({
    typeName: $.ZodNever,
    ...W(t)
});
class fi extends K {
    _parse(e) {
        if (this._getType(e) !== B.undefined) {
            const r = this._getOrReturnCtx(e);
            return N(r, {
                code: T.invalid_type,
                expected: B.void,
                received: r.parsedType
            }),
            V
        }
        return Pe(e.data)
    }
}
fi.create = t => new fi({
    typeName: $.ZodVoid,
    ...W(t)
});
class Ye extends K {
    _parse(e) {
        const {ctx: n, status: r} = this._processInputParams(e)
          , i = this._def;
        if (n.parsedType !== B.array)
            return N(n, {
                code: T.invalid_type,
                expected: B.array,
                received: n.parsedType
            }),
            V;
        if (i.exactLength !== null) {
            const o = n.data.length > i.exactLength.value
              , a = n.data.length < i.exactLength.value;
            (o || a) && (N(n, {
                code: o ? T.too_big : T.too_small,
                minimum: a ? i.exactLength.value : void 0,
                maximum: o ? i.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: i.exactLength.message
            }),
            r.dirty())
        }
        if (i.minLength !== null && n.data.length < i.minLength.value && (N(n, {
            code: T.too_small,
            minimum: i.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: i.minLength.message
        }),
        r.dirty()),
        i.maxLength !== null && n.data.length > i.maxLength.value && (N(n, {
            code: T.too_big,
            maximum: i.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: i.maxLength.message
        }),
        r.dirty()),
        n.common.async)
            return Promise.all([...n.data].map( (o, a) => i.type._parseAsync(new st(n,o,n.path,a)))).then(o => ke.mergeArray(r, o));
        const s = [...n.data].map( (o, a) => i.type._parseSync(new st(n,o,n.path,a)));
        return ke.mergeArray(r, s)
    }
    get element() {
        return this._def.type
    }
    min(e, n) {
        return new Ye({
            ...this._def,
            minLength: {
                value: e,
                message: M.toString(n)
            }
        })
    }
    max(e, n) {
        return new Ye({
            ...this._def,
            maxLength: {
                value: e,
                message: M.toString(n)
            }
        })
    }
    length(e, n) {
        return new Ye({
            ...this._def,
            exactLength: {
                value: e,
                message: M.toString(n)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
Ye.create = (t, e) => new Ye({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: $.ZodArray,
    ...W(e)
});
function kn(t) {
    if (t instanceof me) {
        const e = {};
        for (const n in t.shape) {
            const r = t.shape[n];
            e[n] = bt.create(kn(r))
        }
        return new me({
            ...t._def,
            shape: () => e
        })
    } else
        return t instanceof Ye ? new Ye({
            ...t._def,
            type: kn(t.element)
        }) : t instanceof bt ? bt.create(kn(t.unwrap())) : t instanceof cn ? cn.create(kn(t.unwrap())) : t instanceof ot ? ot.create(t.items.map(e => kn(e))) : t
}
class me extends K {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const e = this._def.shape()
          , n = ie.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: n
        }
    }
    _parse(e) {
        if (this._getType(e) !== B.object) {
            const d = this._getOrReturnCtx(e);
            return N(d, {
                code: T.invalid_type,
                expected: B.object,
                received: d.parsedType
            }),
            V
        }
        const {status: r, ctx: i} = this._processInputParams(e)
          , {shape: s, keys: o} = this._getCached()
          , a = [];
        if (!(this._def.catchall instanceof _t && this._def.unknownKeys === "strip"))
            for (const d in i.data)
                o.includes(d) || a.push(d);
        const u = [];
        for (const d of o) {
            const c = s[d]
              , l = i.data[d];
            u.push({
                key: {
                    status: "valid",
                    value: d
                },
                value: c._parse(new st(i,l,i.path,d)),
                alwaysSet: d in i.data
            })
        }
        if (this._def.catchall instanceof _t) {
            const d = this._def.unknownKeys;
            if (d === "passthrough")
                for (const c of a)
                    u.push({
                        key: {
                            status: "valid",
                            value: c
                        },
                        value: {
                            status: "valid",
                            value: i.data[c]
                        }
                    });
            else if (d === "strict")
                a.length > 0 && (N(i, {
                    code: T.unrecognized_keys,
                    keys: a
                }),
                r.dirty());
            else if (d !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const d = this._def.catchall;
            for (const c of a) {
                const l = i.data[c];
                u.push({
                    key: {
                        status: "valid",
                        value: c
                    },
                    value: d._parse(new st(i,l,i.path,c)),
                    alwaysSet: c in i.data
                })
            }
        }
        return i.common.async ? Promise.resolve().then(async () => {
            const d = [];
            for (const c of u) {
                const l = await c.key;
                d.push({
                    key: l,
                    value: await c.value,
                    alwaysSet: c.alwaysSet
                })
            }
            return d
        }
        ).then(d => ke.mergeObjectSync(r, d)) : ke.mergeObjectSync(r, u)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return M.errToObj,
        new me({
            ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (n, r) => {
                    var i, s, o, a;
                    const u = (o = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
                    return n.code === "unrecognized_keys" ? {
                        message: (a = M.errToObj(e).message) !== null && a !== void 0 ? a : u
                    } : {
                        message: u
                    }
                }
            } : {}
        })
    }
    strip() {
        return new me({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new me({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new me({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new me({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: $.ZodObject
        })
    }
    setKey(e, n) {
        return this.augment({
            [e]: n
        })
    }
    catchall(e) {
        return new me({
            ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const n = {};
        return ie.objectKeys(e).forEach(r => {
            e[r] && this.shape[r] && (n[r] = this.shape[r])
        }
        ),
        new me({
            ...this._def,
            shape: () => n
        })
    }
    omit(e) {
        const n = {};
        return ie.objectKeys(this.shape).forEach(r => {
            e[r] || (n[r] = this.shape[r])
        }
        ),
        new me({
            ...this._def,
            shape: () => n
        })
    }
    deepPartial() {
        return kn(this)
    }
    partial(e) {
        const n = {};
        return ie.objectKeys(this.shape).forEach(r => {
            const i = this.shape[r];
            e && !e[r] ? n[r] = i : n[r] = i.optional()
        }
        ),
        new me({
            ...this._def,
            shape: () => n
        })
    }
    required(e) {
        const n = {};
        return ie.objectKeys(this.shape).forEach(r => {
            if (e && !e[r])
                n[r] = this.shape[r];
            else {
                let s = this.shape[r];
                for (; s instanceof bt; )
                    s = s._def.innerType;
                n[r] = s
            }
        }
        ),
        new me({
            ...this._def,
            shape: () => n
        })
    }
    keyof() {
        return Nc(ie.objectKeys(this.shape))
    }
}
me.create = (t, e) => new me({
    shape: () => t,
    unknownKeys: "strip",
    catchall: _t.create(),
    typeName: $.ZodObject,
    ...W(e)
});
me.strictCreate = (t, e) => new me({
    shape: () => t,
    unknownKeys: "strict",
    catchall: _t.create(),
    typeName: $.ZodObject,
    ...W(e)
});
me.lazycreate = (t, e) => new me({
    shape: t,
    unknownKeys: "strip",
    catchall: _t.create(),
    typeName: $.ZodObject,
    ...W(e)
});
class hr extends K {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , r = this._def.options;
        function i(s) {
            for (const a of s)
                if (a.result.status === "valid")
                    return a.result;
            for (const a of s)
                if (a.result.status === "dirty")
                    return n.common.issues.push(...a.ctx.common.issues),
                    a.result;
            const o = s.map(a => new Je(a.ctx.common.issues));
            return N(n, {
                code: T.invalid_union,
                unionErrors: o
            }),
            V
        }
        if (n.common.async)
            return Promise.all(r.map(async s => {
                const o = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await s._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: o
                    }),
                    ctx: o
                }
            }
            )).then(i);
        {
            let s;
            const o = [];
            for (const u of r) {
                const d = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                }
                  , c = u._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: d
                });
                if (c.status === "valid")
                    return c;
                c.status === "dirty" && !s && (s = {
                    result: c,
                    ctx: d
                }),
                d.common.issues.length && o.push(d.common.issues)
            }
            if (s)
                return n.common.issues.push(...s.ctx.common.issues),
                s.result;
            const a = o.map(u => new Je(u));
            return N(n, {
                code: T.invalid_union,
                unionErrors: a
            }),
            V
        }
    }
    get options() {
        return this._def.options
    }
}
hr.create = (t, e) => new hr({
    options: t,
    typeName: $.ZodUnion,
    ...W(e)
});
const Ur = t => t instanceof gr ? Ur(t.schema) : t instanceof Qe ? Ur(t.innerType()) : t instanceof yr ? [t.value] : t instanceof Ht ? t.options : t instanceof vr ? Object.keys(t.enum) : t instanceof br ? Ur(t._def.innerType) : t instanceof lr ? [void 0] : t instanceof fr ? [null] : null;
class Mi extends K {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== B.object)
            return N(n, {
                code: T.invalid_type,
                expected: B.object,
                received: n.parsedType
            }),
            V;
        const r = this.discriminator
          , i = n.data[r]
          , s = this.optionsMap.get(i);
        return s ? n.common.async ? s._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }) : s._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }) : (N(n, {
            code: T.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r]
        }),
        V)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(e, n, r) {
        const i = new Map;
        for (const s of n) {
            const o = Ur(s.shape[e]);
            if (!o)
                throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const a of o) {
                if (i.has(a))
                    throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                i.set(a, s)
            }
        }
        return new Mi({
            typeName: $.ZodDiscriminatedUnion,
            discriminator: e,
            options: n,
            optionsMap: i,
            ...W(r)
        })
    }
}
function Ms(t, e) {
    const n = Nt(t)
      , r = Nt(e);
    if (t === e)
        return {
            valid: !0,
            data: t
        };
    if (n === B.object && r === B.object) {
        const i = ie.objectKeys(e)
          , s = ie.objectKeys(t).filter(a => i.indexOf(a) !== -1)
          , o = {
            ...t,
            ...e
        };
        for (const a of s) {
            const u = Ms(t[a], e[a]);
            if (!u.valid)
                return {
                    valid: !1
                };
            o[a] = u.data
        }
        return {
            valid: !0,
            data: o
        }
    } else if (n === B.array && r === B.array) {
        if (t.length !== e.length)
            return {
                valid: !1
            };
        const i = [];
        for (let s = 0; s < t.length; s++) {
            const o = t[s]
              , a = e[s]
              , u = Ms(o, a);
            if (!u.valid)
                return {
                    valid: !1
                };
            i.push(u.data)
        }
        return {
            valid: !0,
            data: i
        }
    } else
        return n === B.date && r === B.date && +t == +e ? {
            valid: !0,
            data: t
        } : {
            valid: !1
        }
}
class mr extends K {
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e)
          , i = (s, o) => {
            if (Os(s) || Os(o))
                return V;
            const a = Ms(s.value, o.value);
            return a.valid ? ((Ls(s) || Ls(o)) && n.dirty(),
            {
                status: n.value,
                value: a.data
            }) : (N(r, {
                code: T.invalid_intersection_types
            }),
            V)
        }
        ;
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then( ([s,o]) => i(s, o)) : i(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
mr.create = (t, e, n) => new mr({
    left: t,
    right: e,
    typeName: $.ZodIntersection,
    ...W(n)
});
class ot extends K {
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== B.array)
            return N(r, {
                code: T.invalid_type,
                expected: B.array,
                received: r.parsedType
            }),
            V;
        if (r.data.length < this._def.items.length)
            return N(r, {
                code: T.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            V;
        !this._def.rest && r.data.length > this._def.items.length && (N(r, {
            code: T.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        n.dirty());
        const s = [...r.data].map( (o, a) => {
            const u = this._def.items[a] || this._def.rest;
            return u ? u._parse(new st(r,o,r.path,a)) : null
        }
        ).filter(o => !!o);
        return r.common.async ? Promise.all(s).then(o => ke.mergeArray(n, o)) : ke.mergeArray(n, s)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new ot({
            ...this._def,
            rest: e
        })
    }
}
ot.create = (t, e) => {
    if (!Array.isArray(t))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new ot({
        items: t,
        typeName: $.ZodTuple,
        rest: null,
        ...W(e)
    })
}
;
class pr extends K {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== B.object)
            return N(r, {
                code: T.invalid_type,
                expected: B.object,
                received: r.parsedType
            }),
            V;
        const i = []
          , s = this._def.keyType
          , o = this._def.valueType;
        for (const a in r.data)
            i.push({
                key: s._parse(new st(r,a,r.path,a)),
                value: o._parse(new st(r,r.data[a],r.path,a))
            });
        return r.common.async ? ke.mergeObjectAsync(n, i) : ke.mergeObjectSync(n, i)
    }
    get element() {
        return this._def.valueType
    }
    static create(e, n, r) {
        return n instanceof K ? new pr({
            keyType: e,
            valueType: n,
            typeName: $.ZodRecord,
            ...W(r)
        }) : new pr({
            keyType: Xe.create(),
            valueType: e,
            typeName: $.ZodRecord,
            ...W(n)
        })
    }
}
class hi extends K {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== B.map)
            return N(r, {
                code: T.invalid_type,
                expected: B.map,
                received: r.parsedType
            }),
            V;
        const i = this._def.keyType
          , s = this._def.valueType
          , o = [...r.data.entries()].map( ([a,u], d) => ({
            key: i._parse(new st(r,a,r.path,[d, "key"])),
            value: s._parse(new st(r,u,r.path,[d, "value"]))
        }));
        if (r.common.async) {
            const a = new Map;
            return Promise.resolve().then(async () => {
                for (const u of o) {
                    const d = await u.key
                      , c = await u.value;
                    if (d.status === "aborted" || c.status === "aborted")
                        return V;
                    (d.status === "dirty" || c.status === "dirty") && n.dirty(),
                    a.set(d.value, c.value)
                }
                return {
                    status: n.value,
                    value: a
                }
            }
            )
        } else {
            const a = new Map;
            for (const u of o) {
                const d = u.key
                  , c = u.value;
                if (d.status === "aborted" || c.status === "aborted")
                    return V;
                (d.status === "dirty" || c.status === "dirty") && n.dirty(),
                a.set(d.value, c.value)
            }
            return {
                status: n.value,
                value: a
            }
        }
    }
}
hi.create = (t, e, n) => new hi({
    valueType: e,
    keyType: t,
    typeName: $.ZodMap,
    ...W(n)
});
class an extends K {
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== B.set)
            return N(r, {
                code: T.invalid_type,
                expected: B.set,
                received: r.parsedType
            }),
            V;
        const i = this._def;
        i.minSize !== null && r.data.size < i.minSize.value && (N(r, {
            code: T.too_small,
            minimum: i.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: i.minSize.message
        }),
        n.dirty()),
        i.maxSize !== null && r.data.size > i.maxSize.value && (N(r, {
            code: T.too_big,
            maximum: i.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: i.maxSize.message
        }),
        n.dirty());
        const s = this._def.valueType;
        function o(u) {
            const d = new Set;
            for (const c of u) {
                if (c.status === "aborted")
                    return V;
                c.status === "dirty" && n.dirty(),
                d.add(c.value)
            }
            return {
                status: n.value,
                value: d
            }
        }
        const a = [...r.data.values()].map( (u, d) => s._parse(new st(r,u,r.path,d)));
        return r.common.async ? Promise.all(a).then(u => o(u)) : o(a)
    }
    min(e, n) {
        return new an({
            ...this._def,
            minSize: {
                value: e,
                message: M.toString(n)
            }
        })
    }
    max(e, n) {
        return new an({
            ...this._def,
            maxSize: {
                value: e,
                message: M.toString(n)
            }
        })
    }
    size(e, n) {
        return this.min(e, n).max(e, n)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
an.create = (t, e) => new an({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: $.ZodSet,
    ...W(e)
});
class Bn extends K {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== B.function)
            return N(n, {
                code: T.invalid_type,
                expected: B.function,
                received: n.parsedType
            }),
            V;
        function r(a, u) {
            return di({
                data: a,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, ci(), cr].filter(d => !!d),
                issueData: {
                    code: T.invalid_arguments,
                    argumentsError: u
                }
            })
        }
        function i(a, u) {
            return di({
                data: a,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, ci(), cr].filter(d => !!d),
                issueData: {
                    code: T.invalid_return_type,
                    returnTypeError: u
                }
            })
        }
        const s = {
            errorMap: n.common.contextualErrorMap
        }
          , o = n.data;
        if (this._def.returns instanceof $n) {
            const a = this;
            return Pe(async function(...u) {
                const d = new Je([])
                  , c = await a._def.args.parseAsync(u, s).catch(h => {
                    throw d.addIssue(r(u, h)),
                    d
                }
                )
                  , l = await Reflect.apply(o, this, c);
                return await a._def.returns._def.type.parseAsync(l, s).catch(h => {
                    throw d.addIssue(i(l, h)),
                    d
                }
                )
            })
        } else {
            const a = this;
            return Pe(function(...u) {
                const d = a._def.args.safeParse(u, s);
                if (!d.success)
                    throw new Je([r(u, d.error)]);
                const c = Reflect.apply(o, this, d.data)
                  , l = a._def.returns.safeParse(c, s);
                if (!l.success)
                    throw new Je([i(c, l.error)]);
                return l.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...e) {
        return new Bn({
            ...this._def,
            args: ot.create(e).rest(en.create())
        })
    }
    returns(e) {
        return new Bn({
            ...this._def,
            returns: e
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(e, n, r) {
        return new Bn({
            args: e || ot.create([]).rest(en.create()),
            returns: n || en.create(),
            typeName: $.ZodFunction,
            ...W(r)
        })
    }
}
class gr extends K {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: n.data,
            path: n.path,
            parent: n
        })
    }
}
gr.create = (t, e) => new gr({
    getter: t,
    typeName: $.ZodLazy,
    ...W(e)
});
class yr extends K {
    _parse(e) {
        if (e.data !== this._def.value) {
            const n = this._getOrReturnCtx(e);
            return N(n, {
                received: n.data,
                code: T.invalid_literal,
                expected: this._def.value
            }),
            V
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
yr.create = (t, e) => new yr({
    value: t,
    typeName: $.ZodLiteral,
    ...W(e)
});
function Nc(t, e) {
    return new Ht({
        values: t,
        typeName: $.ZodEnum,
        ...W(e)
    })
}
class Ht extends K {
    _parse(e) {
        if (typeof e.data != "string") {
            const n = this._getOrReturnCtx(e)
              , r = this._def.values;
            return N(n, {
                expected: ie.joinValues(r),
                received: n.parsedType,
                code: T.invalid_type
            }),
            V
        }
        if (this._def.values.indexOf(e.data) === -1) {
            const n = this._getOrReturnCtx(e)
              , r = this._def.values;
            return N(n, {
                received: n.data,
                code: T.invalid_enum_value,
                options: r
            }),
            V
        }
        return Pe(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Values() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    extract(e) {
        return Ht.create(e)
    }
    exclude(e) {
        return Ht.create(this.options.filter(n => !e.includes(n)))
    }
}
Ht.create = Nc;
class vr extends K {
    _parse(e) {
        const n = ie.getValidEnumValues(this._def.values)
          , r = this._getOrReturnCtx(e);
        if (r.parsedType !== B.string && r.parsedType !== B.number) {
            const i = ie.objectValues(n);
            return N(r, {
                expected: ie.joinValues(i),
                received: r.parsedType,
                code: T.invalid_type
            }),
            V
        }
        if (n.indexOf(e.data) === -1) {
            const i = ie.objectValues(n);
            return N(r, {
                received: r.data,
                code: T.invalid_enum_value,
                options: i
            }),
            V
        }
        return Pe(e.data)
    }
    get enum() {
        return this._def.values
    }
}
vr.create = (t, e) => new vr({
    values: t,
    typeName: $.ZodNativeEnum,
    ...W(e)
});
class $n extends K {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== B.promise && n.common.async === !1)
            return N(n, {
                code: T.invalid_type,
                expected: B.promise,
                received: n.parsedType
            }),
            V;
        const r = n.parsedType === B.promise ? n.data : Promise.resolve(n.data);
        return Pe(r.then(i => this._def.type.parseAsync(i, {
            path: n.path,
            errorMap: n.common.contextualErrorMap
        })))
    }
}
$n.create = (t, e) => new $n({
    type: t,
    typeName: $.ZodPromise,
    ...W(e)
});
class Qe extends K {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === $.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e)
          , i = this._def.effect || null
          , s = {
            addIssue: o => {
                N(r, o),
                o.fatal ? n.abort() : n.dirty()
            }
            ,
            get path() {
                return r.path
            }
        };
        if (s.addIssue = s.addIssue.bind(s),
        i.type === "preprocess") {
            const o = i.transform(r.data, s);
            return r.common.issues.length ? {
                status: "dirty",
                value: r.data
            } : r.common.async ? Promise.resolve(o).then(a => this._def.schema._parseAsync({
                data: a,
                path: r.path,
                parent: r
            })) : this._def.schema._parseSync({
                data: o,
                path: r.path,
                parent: r
            })
        }
        if (i.type === "refinement") {
            const o = a => {
                const u = i.refinement(a, s);
                if (r.common.async)
                    return Promise.resolve(u);
                if (u instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return a
            }
            ;
            if (r.common.async === !1) {
                const a = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? V : (a.status === "dirty" && n.dirty(),
                o(a.value),
                {
                    status: n.value,
                    value: a.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(a => a.status === "aborted" ? V : (a.status === "dirty" && n.dirty(),
                o(a.value).then( () => ({
                    status: n.value,
                    value: a.value
                }))))
        }
        if (i.type === "transform")
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!dr(o))
                    return o;
                const a = i.transform(o.value, s);
                if (a instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: n.value,
                    value: a
                }
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(o => dr(o) ? Promise.resolve(i.transform(o.value, s)).then(a => ({
                    status: n.value,
                    value: a
                })) : o);
        ie.assertNever(i)
    }
}
Qe.create = (t, e, n) => new Qe({
    schema: t,
    typeName: $.ZodEffects,
    effect: e,
    ...W(n)
});
Qe.createWithPreprocess = (t, e, n) => new Qe({
    schema: e,
    effect: {
        type: "preprocess",
        transform: t
    },
    typeName: $.ZodEffects,
    ...W(n)
});
class bt extends K {
    _parse(e) {
        return this._getType(e) === B.undefined ? Pe(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
bt.create = (t, e) => new bt({
    innerType: t,
    typeName: $.ZodOptional,
    ...W(e)
});
class cn extends K {
    _parse(e) {
        return this._getType(e) === B.null ? Pe(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
cn.create = (t, e) => new cn({
    innerType: t,
    typeName: $.ZodNullable,
    ...W(e)
});
class br extends K {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        let r = n.data;
        return n.parsedType === B.undefined && (r = this._def.defaultValue()),
        this._def.innerType._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
br.create = (t, e) => new br({
    innerType: t,
    typeName: $.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...W(e)
});
class mi extends K {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , r = {
            ...n,
            common: {
                ...n.common,
                issues: []
            }
        }
          , i = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: {
                ...r
            }
        });
        return ui(i) ? i.then(s => ({
            status: "valid",
            value: s.status === "valid" ? s.value : this._def.catchValue({
                get error() {
                    return new Je(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: i.status === "valid" ? i.value : this._def.catchValue({
                get error() {
                    return new Je(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
mi.create = (t, e) => new mi({
    innerType: t,
    typeName: $.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...W(e)
});
class pi extends K {
    _parse(e) {
        if (this._getType(e) !== B.nan) {
            const r = this._getOrReturnCtx(e);
            return N(r, {
                code: T.invalid_type,
                expected: B.nan,
                received: r.parsedType
            }),
            V
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
pi.create = t => new pi({
    typeName: $.ZodNaN,
    ...W(t)
});
const Cm = Symbol("zod_brand");
class Oc extends K {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , r = n.data;
        return this._def.type._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    unwrap() {
        return this._def.type
    }
}
class Ar extends K {
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.common.async)
            return (async () => {
                const s = await this._def.in._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return s.status === "aborted" ? V : s.status === "dirty" ? (n.dirty(),
                Cc(s.value)) : this._def.out._parseAsync({
                    data: s.value,
                    path: r.path,
                    parent: r
                })
            }
            )();
        {
            const i = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return i.status === "aborted" ? V : i.status === "dirty" ? (n.dirty(),
            {
                status: "dirty",
                value: i.value
            }) : this._def.out._parseSync({
                data: i.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(e, n) {
        return new Ar({
            in: e,
            out: n,
            typeName: $.ZodPipeline
        })
    }
}
class gi extends K {
    _parse(e) {
        const n = this._def.innerType._parse(e);
        return dr(n) && (n.value = Object.freeze(n.value)),
        n
    }
}
gi.create = (t, e) => new gi({
    innerType: t,
    typeName: $.ZodReadonly,
    ...W(e)
});
const Lc = (t, e={}, n) => t ? Mn.create().superRefine( (r, i) => {
    var s, o;
    if (!t(r)) {
        const a = typeof e == "function" ? e(r) : typeof e == "string" ? {
            message: e
        } : e
          , u = (o = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && o !== void 0 ? o : !0
          , d = typeof a == "string" ? {
            message: a
        } : a;
        i.addIssue({
            code: "custom",
            ...d,
            fatal: u
        })
    }
}
) : Mn.create()
  , Nm = {
    object: me.lazycreate
};
var $;
(function(t) {
    t.ZodString = "ZodString",
    t.ZodNumber = "ZodNumber",
    t.ZodNaN = "ZodNaN",
    t.ZodBigInt = "ZodBigInt",
    t.ZodBoolean = "ZodBoolean",
    t.ZodDate = "ZodDate",
    t.ZodSymbol = "ZodSymbol",
    t.ZodUndefined = "ZodUndefined",
    t.ZodNull = "ZodNull",
    t.ZodAny = "ZodAny",
    t.ZodUnknown = "ZodUnknown",
    t.ZodNever = "ZodNever",
    t.ZodVoid = "ZodVoid",
    t.ZodArray = "ZodArray",
    t.ZodObject = "ZodObject",
    t.ZodUnion = "ZodUnion",
    t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    t.ZodIntersection = "ZodIntersection",
    t.ZodTuple = "ZodTuple",
    t.ZodRecord = "ZodRecord",
    t.ZodMap = "ZodMap",
    t.ZodSet = "ZodSet",
    t.ZodFunction = "ZodFunction",
    t.ZodLazy = "ZodLazy",
    t.ZodLiteral = "ZodLiteral",
    t.ZodEnum = "ZodEnum",
    t.ZodEffects = "ZodEffects",
    t.ZodNativeEnum = "ZodNativeEnum",
    t.ZodOptional = "ZodOptional",
    t.ZodNullable = "ZodNullable",
    t.ZodDefault = "ZodDefault",
    t.ZodCatch = "ZodCatch",
    t.ZodPromise = "ZodPromise",
    t.ZodBranded = "ZodBranded",
    t.ZodPipeline = "ZodPipeline",
    t.ZodReadonly = "ZodReadonly"
}
)($ || ($ = {}));
const Om = (t, e={
    message: `Input not instance of ${t.name}`
}) => Lc(n => n instanceof t, e)
  , Mc = Xe.create
  , $c = Mt.create
  , Lm = pi.create
  , Mm = $t.create
  , Hc = ur.create
  , $m = on.create
  , Hm = li.create
  , jm = lr.create
  , Dm = fr.create
  , Fm = Mn.create
  , Gm = en.create
  , Um = _t.create
  , qm = fi.create
  , zm = Ye.create
  , Vm = me.create
  , Wm = me.strictCreate
  , Zm = hr.create
  , Km = Mi.create
  , Xm = mr.create
  , Jm = ot.create
  , Ym = pr.create
  , Qm = hi.create
  , ep = an.create
  , tp = Bn.create
  , np = gr.create
  , rp = yr.create
  , ip = Ht.create
  , sp = vr.create
  , op = $n.create
  , Ea = Qe.create
  , ap = bt.create
  , cp = cn.create
  , dp = Qe.createWithPreprocess
  , up = Ar.create
  , lp = () => Mc().optional()
  , fp = () => $c().optional()
  , hp = () => Hc().optional()
  , mp = {
    string: t => Xe.create({
        ...t,
        coerce: !0
    }),
    number: t => Mt.create({
        ...t,
        coerce: !0
    }),
    boolean: t => ur.create({
        ...t,
        coerce: !0
    }),
    bigint: t => $t.create({
        ...t,
        coerce: !0
    }),
    date: t => on.create({
        ...t,
        coerce: !0
    })
}
  , pp = V;
var nt = Object.freeze({
    __proto__: null,
    defaultErrorMap: cr,
    setErrorMap: bm,
    getErrorMap: ci,
    makeIssue: di,
    EMPTY_PATH: _m,
    addIssueToContext: N,
    ParseStatus: ke,
    INVALID: V,
    DIRTY: Cc,
    OK: Pe,
    isAborted: Os,
    isDirty: Ls,
    isValid: dr,
    isAsync: ui,
    get util() {
        return ie
    },
    get objectUtil() {
        return Ns
    },
    ZodParsedType: B,
    getParsedType: Nt,
    ZodType: K,
    ZodString: Xe,
    ZodNumber: Mt,
    ZodBigInt: $t,
    ZodBoolean: ur,
    ZodDate: on,
    ZodSymbol: li,
    ZodUndefined: lr,
    ZodNull: fr,
    ZodAny: Mn,
    ZodUnknown: en,
    ZodNever: _t,
    ZodVoid: fi,
    ZodArray: Ye,
    ZodObject: me,
    ZodUnion: hr,
    ZodDiscriminatedUnion: Mi,
    ZodIntersection: mr,
    ZodTuple: ot,
    ZodRecord: pr,
    ZodMap: hi,
    ZodSet: an,
    ZodFunction: Bn,
    ZodLazy: gr,
    ZodLiteral: yr,
    ZodEnum: Ht,
    ZodNativeEnum: vr,
    ZodPromise: $n,
    ZodEffects: Qe,
    ZodTransformer: Qe,
    ZodOptional: bt,
    ZodNullable: cn,
    ZodDefault: br,
    ZodCatch: mi,
    ZodNaN: pi,
    BRAND: Cm,
    ZodBranded: Oc,
    ZodPipeline: Ar,
    ZodReadonly: gi,
    custom: Lc,
    Schema: K,
    ZodSchema: K,
    late: Nm,
    get ZodFirstPartyTypeKind() {
        return $
    },
    coerce: mp,
    any: Fm,
    array: zm,
    bigint: Mm,
    boolean: Hc,
    date: $m,
    discriminatedUnion: Km,
    effect: Ea,
    enum: ip,
    function: tp,
    instanceof: Om,
    intersection: Xm,
    lazy: np,
    literal: rp,
    map: Qm,
    nan: Lm,
    nativeEnum: sp,
    never: Um,
    null: Dm,
    nullable: cp,
    number: $c,
    object: Vm,
    oboolean: hp,
    onumber: fp,
    optional: ap,
    ostring: lp,
    pipeline: up,
    preprocess: dp,
    promise: op,
    record: Ym,
    set: ep,
    strictObject: Wm,
    string: Mc,
    symbol: Hm,
    transformer: Ea,
    tuple: Jm,
    undefined: jm,
    union: Zm,
    unknown: Gm,
    void: qm,
    NEVER: pp,
    ZodIssueCode: T,
    quotelessJson: vm,
    ZodError: Je
});
const gp = t => t.message ? t.message : "unspecified error";
class Hn extends q {
    constructor(e) {
        super(),
        this.code = If,
        this.errors = e,
        super.message = `Web3 validator found ${e.length} error[s]:
${this._compileErrors().join(`
`)}`
    }
    _compileErrors() {
        return this.errors.map(gp)
    }
}
const yp = ["bool", "int", "uint", "bytes", "string", "address", "tuple"]
  , jc = t => typeof t == "object" && "type"in t && "name"in t
  , ho = t => typeof t == "string"
  , se = t => typeof t == "string" && /^((-)?0x[0-9a-f]+|(0x))$/i.test(t);
function Dc(t, e) {
    return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || typeof e < "u" && e > 0 && t.length !== 2 + 2 * e)
}
const mo = t => typeof t == "number" || typeof t == "bigint" || typeof t == "string" && /^((-0x|0x|-)?[0-9a-f]+|(0x))$/i.test(t);
function po(t) {
    if (typeof t != "string")
        throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof t}`);
    return t.startsWith("0x")
}
const go = function(t) {
    for (const [e,n] of Object.entries(t))
        if (n !== void 0 && n.length > 0 && n[0] === 0)
            throw new Error(`${e} cannot have leading zeroes, received: ${n.toString()}`)
}
  , vp = ["hex", "number", "blockNumber", "blockNumberOrTag", "filter", "bloom"]
  , gn = t => {
    let e = t.replace(/ /, ""), n, r = !1, i = [];
    if (t.includes("[") && (e = e.slice(0, e.indexOf("[")),
    i = [...t.matchAll(/(?:\[(\d*)\])/g)].map(s => parseInt(s[1], 10)).map(s => Number.isNaN(s) ? -1 : s),
    r = i.length > 0),
    yp.includes(e))
        return {
            baseType: e,
            isArray: r,
            baseTypeSize: n,
            arraySizes: i
        };
    if (e.startsWith("int"))
        n = parseInt(e.substring(3), 10),
        e = "int";
    else if (e.startsWith("uint"))
        n = parseInt(t.substring(4), 10),
        e = "uint";
    else if (e.startsWith("bytes"))
        n = parseInt(e.substring(5), 10),
        e = "bytes";
    else
        return {
            baseType: void 0,
            isArray: !1,
            baseTypeSize: void 0,
            arraySizes: i
        };
    return {
        baseType: e,
        isArray: r,
        baseTypeSize: n,
        arraySizes: i
    }
}
  , us = (t, e={}) => {
    if (Object.keys(e).includes("type"))
        throw new Hn([{
            keyword: "eth",
            message: 'Either "eth" or "type" can be presented in schema',
            params: {
                eth: t
            },
            instancePath: "",
            schemaPath: ""
        }]);
    const {baseType: r, baseTypeSize: i} = gn(t);
    if (!r && !vp.includes(t))
        throw new Hn([{
            keyword: "eth",
            message: `Eth data type "${t}" is not valid`,
            params: {
                eth: t
            },
            instancePath: "",
            schemaPath: ""
        }]);
    if (r) {
        if (r === "tuple")
            throw new Error('"tuple" type is not implemented directly.');
        return {
            format: `${r}${i ?? ""}`,
            required: !0
        }
    }
    return t ? {
        format: t,
        required: !0
    } : {}
}
  , yi = (t, e="/0") => {
    const n = {
        type: "array",
        items: [],
        maxItems: t.length,
        minItems: t.length
    };
    for (const [r,i] of t.entries()) {
        let s, o, a = [];
        jc(i) ? (s = i.type,
        o = i.name,
        a = i.components) : typeof i == "string" ? (s = i,
        o = `${e}/${r}`) : Array.isArray(i) && (i[0] && typeof i[0] == "string" && i[0].startsWith("tuple") && !Array.isArray(i[0]) && i[1] && Array.isArray(i[1]) ? (s = i[0],
        o = `${e}/${r}`,
        a = i[1]) : (s = "tuple",
        o = `${e}/${r}`,
        a = i));
        const {baseType: u, isArray: d, arraySizes: c} = gn(s);
        let l, f = n;
        for (let h = c.length - 1; h > 0; h -= 1)
            l = {
                type: "array",
                items: [],
                maxItems: c[h],
                minItems: c[h]
            },
            c[h] < 0 && (delete l.maxItems,
            delete l.minItems),
            Array.isArray(f.items) ? f.items.length === 0 ? f.items = l : f.items.push(l) : f.items = [f.items, l],
            f = l;
        if (u === "tuple" && !d) {
            const h = yi(a, o);
            h.$id = o,
            f.items.push(h)
        } else if (u === "tuple" && d) {
            const h = c[0]
              , p = {
                $id: o,
                type: "array",
                items: yi(a, o),
                maxItems: h,
                minItems: h
            };
            h < 0 && (delete p.maxItems,
            delete p.minItems),
            f.items.push(p)
        } else if (d) {
            const h = c[0]
              , p = {
                type: "array",
                $id: o,
                items: us(String(u)),
                minItems: h,
                maxItems: h
            };
            h < 0 && (delete p.maxItems,
            delete p.minItems),
            f.items.push(p)
        } else
            Array.isArray(f.items) ? f.items.push(Object.assign({
                $id: o
            }, us(s))) : f.items.items.push(Object.assign({
                $id: o
            }, us(s)));
        f = n
    }
    return n
}
  , yo = t => yi(t)
  , vo = (t, e) => e === 1 ? t : vo(t[0], e - 1)
  , ir = (t, e, n) => {
    const r = [];
    for (const [i,s] of t.entries()) {
        let o, a, u = [];
        jc(s) ? (o = s.type,
        a = s.name,
        u = s.components) : typeof s == "string" ? o = s : Array.isArray(s) && (s[1] && Array.isArray(s[1]) ? (o = s[0],
        u = s[1]) : (o = "tuple",
        u = s));
        const {baseType: d, isArray: c, arraySizes: l} = gn(o)
          , f = Array.isArray(e) ? e[i] : e[a];
        if (d === "tuple" && !c)
            r.push(ir(u, f, n));
        else if (d === "tuple" && c) {
            const h = [];
            for (const p of f)
                if (l.length > 1) {
                    const m = vo(p, l.length - 1)
                      , g = [];
                    for (const y of m)
                        g.push(ir(u, y, n));
                    h.push(g)
                } else
                    h.push(ir(u, p, n));
            r.push(h)
        } else
            r.push(f)
    }
    return n = n ?? [],
    n.push(...r),
    n
}
  , Fc = t => {
    if (t >= 48 && t <= 57)
        return t - 48;
    if (t >= 65 && t <= 70)
        return t - 55;
    if (t >= 97 && t <= 102)
        return t - 87;
    throw new Error(`Invalid code point: ${t}`)
}
  , $i = t => {
    if (!se(t))
        throw new Error("Invalid hex string");
    const [e,n] = t.startsWith("-") ? [!0, t.slice(1)] : [!1, t]
      , r = BigInt(n);
    return r > Number.MAX_SAFE_INTEGER ? e ? -r : r : r < Number.MIN_SAFE_INTEGER ? r : e ? -1 * Number(r) : Number(r)
}
  , Hi = t => {
    if ((typeof t == "number" || typeof t == "bigint") && t < 0)
        return `-0x${t.toString(16).slice(1)}`;
    if ((typeof t == "number" || typeof t == "bigint") && t >= 0)
        return `0x${t.toString(16)}`;
    if (typeof t == "string" && se(t)) {
        const [e,n] = t.startsWith("-") ? [!0, t.slice(1)] : [!1, t]
          , r = n.split(/^(-)?0(x|X)/).slice(-1)[0];
        return `${e ? "-" : ""}0x${r.replace(/^0+/, "").toLowerCase()}`
    }
    if (typeof t == "string" && !se(t))
        return Hi(BigInt(t));
    throw new co(t)
}
  , vi = (t, e, n="0") => {
    if (typeof t == "string" && !se(t))
        return t.padStart(e, n);
    const r = typeof t == "string" && se(t) ? t : Hi(t)
      , [i,s] = r.startsWith("-") ? ["-0x", r.slice(3)] : ["0x", r.slice(2)];
    return `${i}${s.padStart(e, n)}`
}
;
function Gt(t) {
    let e = "0x";
    for (const n of t) {
        const r = n.toString(16);
        e += r.length === 1 ? `0${r}` : r
    }
    return e
}
function yn(t) {
    let e;
    if (t.toLowerCase().startsWith("0x") ? e = t.slice(2) : e = t,
    e.length % 2 !== 0)
        throw new rr(`hex string has odd length: ${t}`);
    const n = new Uint8Array(Math.ceil(e.length / 2));
    for (let r = 0; r < n.length; r += 1) {
        const i = parseInt(e.substring(r * 2, r * 2 + 2), 16);
        n[r] = i
    }
    return n
}
const Gc = Object.freeze(Object.defineProperty({
    __proto__: null,
    abiSchemaToJsonSchema: yi,
    codePointToInt: Fc,
    ethAbiToJsonSchema: yo,
    fetchArrayElement: vo,
    hexToNumber: $i,
    hexToUint8Array: yn,
    numberToHex: Hi,
    padLeft: vi,
    parseBaseType: gn,
    transformJsonDataToAbiFormat: ir,
    uint8ArrayToHexString: Gt
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Uc = t => {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(t))
        return !1;
    const e = t.slice(2)
      , n = Ln(e.toLowerCase())
      , r = Gt(Se(n)).slice(2);
    for (let i = 0; i < 40; i += 1)
        if (parseInt(r[i], 16) > 7 && e[i].toUpperCase() !== e[i] || parseInt(r[i], 16) <= 7 && e[i].toLowerCase() !== e[i])
            return !1;
    return !0
}
  , Ve = (t, e=!0) => {
    if (typeof t != "string" && !(t instanceof Uint8Array))
        return !1;
    let n;
    return t instanceof Uint8Array ? n = Gt(t) : typeof t == "string" && !se(t) ? n = t.toLowerCase().startsWith("0x") ? t : `0x${t}` : n = t,
    /^(0x)?[0-9a-f]{40}$/i.test(n) ? /^(0x|0X)?[0-9a-f]{40}$/.test(n) || /^(0x|0X)?[0-9A-F]{40}$/.test(n) ? !0 : e ? Uc(n) : !0 : !1
}
;
var ze;
(function(t) {
    t.NUMBER = "NUMBER_NUMBER",
    t.HEX = "NUMBER_HEX",
    t.STR = "NUMBER_STR",
    t.BIGINT = "NUMBER_BIGINT"
}
)(ze || (ze = {}));
var wt;
(function(t) {
    t.HEX = "BYTES_HEX",
    t.UINT8ARRAY = "BYTES_UINT8ARRAY"
}
)(wt || (wt = {}));
const O = {
    number: ze.BIGINT,
    bytes: wt.HEX
}
  , U = {
    number: ze.HEX,
    bytes: wt.HEX
};
var mt;
(function(t) {
    t.EARLIEST = "earliest",
    t.LATEST = "latest",
    t.PENDING = "pending",
    t.SAFE = "safe",
    t.FINALIZED = "finalized"
}
)(mt || (mt = {}));
var sr;
(function(t) {
    t.chainstart = "chainstart",
    t.frontier = "frontier",
    t.homestead = "homestead",
    t.dao = "dao",
    t.tangerineWhistle = "tangerineWhistle",
    t.spuriousDragon = "spuriousDragon",
    t.byzantium = "byzantium",
    t.constantinople = "constantinople",
    t.petersburg = "petersburg",
    t.istanbul = "istanbul",
    t.muirGlacier = "muirGlacier",
    t.berlin = "berlin",
    t.london = "london",
    t.altair = "altair",
    t.arrowGlacier = "arrowGlacier",
    t.grayGlacier = "grayGlacier",
    t.bellatrix = "bellatrix",
    t.merge = "merge",
    t.capella = "capella",
    t.shanghai = "shanghai"
}
)(sr || (sr = {}));
const bo = Object.getPrototypeOf(Uint8Array);
var Ia = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const Ta = Symbol.for("web3/base-provider");
class Pr {
    static isWeb3Provider(e) {
        return e instanceof Pr || !!(e && e[Ta])
    }
    get[Ta]() {
        return !0
    }
    send(e, n) {
        this.request(e).then(r => {
            n(null, r)
        }
        ).catch(r => {
            n(r)
        }
        )
    }
    sendAsync(e) {
        return Ia(this, void 0, void 0, function*() {
            return this.request(e)
        })
    }
    asEIP1193Provider() {
        const e = Object.create(this)
          , n = e.request;
        return e.request = function(i) {
            return Ia(this, void 0, void 0, function*() {
                return (yield n(i)).result
            })
        }
        ,
        e.asEIP1193Provider = void 0,
        e
    }
}
class bp extends Array {
    constructor(e) {
        super(),
        this._accountProvider = e
    }
}
const _r = (t, e) => {
    let n = t;
    for (let r = 1; r < e; r += 1)
        n *= t;
    return n
}
  , dn = (t, e={
    abiType: "uint"
}) => {
    if (!["number", "string", "bigint"].includes(typeof t) || typeof t == "string" && t.length === 0)
        return !1;
    let n;
    if (e != null && e.abiType) {
        const {baseTypeSize: i} = gn(e.abiType);
        i && (n = i)
    } else
        e.bitSize && (n = e.bitSize);
    const r = _r(BigInt(2), BigInt(n ?? 256)) - BigInt(1);
    try {
        const i = typeof t == "string" && se(t) ? BigInt($i(t)) : BigInt(t);
        return i >= 0 && i <= r
    } catch {
        return !1
    }
}
  , ji = (t, e={
    abiType: "int"
}) => {
    if (!["number", "string", "bigint"].includes(typeof t) || typeof t == "number" && t > Number.MAX_SAFE_INTEGER)
        return !1;
    let n;
    if (e != null && e.abiType) {
        const {baseTypeSize: s, baseType: o} = gn(e.abiType);
        if (o !== "int")
            return !1;
        s && (n = s)
    } else
        e.bitSize && (n = e.bitSize);
    const r = _r(BigInt(2), BigInt((n ?? 256) - 1))
      , i = BigInt(-1) * _r(BigInt(2), BigInt((n ?? 256) - 1));
    try {
        const s = typeof t == "string" && se(t) ? BigInt($i(t)) : BigInt(t);
        return s >= i && s <= r
    } catch {
        return !1
    }
}
  , qc = t => !!(ji(t) || typeof t == "string" && /[0-9.]/.test(t) && t.indexOf(".") === t.lastIndexOf(".") || typeof t == "number")
  , zc = t => dn(t)
  , xe = t => Object.values(mt).includes(t)
  , $s = t => xe(t) || zc(t)
  , Vn = t => typeof t != "string" || !/^(0x)?[0-9a-f]{512}$/i.test(t) ? !1 : !!(/^(0x)?[0-9a-f]{512}$/.test(t) || /^(0x)?[0-9A-F]{512}$/.test(t))
  , Di = (t, e) => {
    if (typeof e == "string" && !se(e) || !Vn(t))
        return !1;
    const n = typeof e == "string" ? yn(e) : e
      , r = Gt(Se(n)).slice(2);
    for (let i = 0; i < 12; i += 4) {
        const s = (parseInt(r.slice(i, i + 2), 16) << 8) + parseInt(r.slice(i + 2, i + 4), 16) & 2047
          , o = Fc(t.charCodeAt(t.length - 1 - Math.floor(s / 4)))
          , a = 1 << s % 4;
        if ((o & a) !== a)
            return !1
    }
    return !0
}
  , _p = (t, e) => {
    if (!Vn(t) || !Ve(e))
        return !1;
    const n = vi(e, 64);
    return Di(t, n)
}
  , wp = (t, e) => !Vn(t) || !Ve(e) ? !1 : Di(t, e)
  , xp = t => ["number", "string", "boolean"].includes(typeof t) ? typeof t == "boolean" ? !0 : typeof t == "string" && !se(t) ? t === "1" || t === "0" : typeof t == "string" && se(t) ? t === "0x1" || t === "0x0" : t === 1 || t === 0 : !1
  , Ut = (t, e={
    abiType: "bytes"
}) => {
    if (typeof t != "string" && !Array.isArray(t) && !(t instanceof Uint8Array) || typeof t == "string" && se(t) && t.startsWith("-") || typeof t == "string" && !se(t))
        return !1;
    let n;
    if (typeof t == "string") {
        if (t.length % 2 !== 0)
            return !1;
        n = yn(t)
    } else if (Array.isArray(t)) {
        if (t.some(r => r < 0 || r > 255 || !Number.isInteger(r)))
            return !1;
        n = new Uint8Array(t)
    } else
        n = t;
    if (e != null && e.abiType) {
        const {baseTypeSize: r} = gn(e.abiType);
        return r ? n.length === r : !0
    }
    return e != null && e.size ? n.length === (e == null ? void 0 : e.size) : !0
}
  , b = t => t == null
  , Cn = t => typeof t == "object" && !b(t) && !Array.isArray(t) && !(t instanceof bo)
  , bi = t => typeof t != "string" || !/^(0x)?[0-9a-f]{64}$/i.test(t) ? !1 : !!(/^(0x)?[0-9a-f]{64}$/.test(t) || /^(0x)?[0-9A-F]{64}$/.test(t))
  , Ep = (t, e) => !Vn(t) || !bi(e) ? !1 : Di(t, e)
  , Ip = t => {
    const e = ["fromBlock", "toBlock", "address", "topics", "blockHash"];
    if (b(t) || typeof t != "object" || !Object.keys(t).every(n => e.includes(n)) || !b(t.fromBlock) && !$s(t.fromBlock) || !b(t.toBlock) && !$s(t.toBlock))
        return !1;
    if (!b(t.address)) {
        if (Array.isArray(t.address)) {
            if (!t.address.every(n => Ve(n)))
                return !1
        } else if (!Ve(t.address))
            return !1
    }
    return !(!b(t.topics) && !t.topics.every(n => b(n) ? !0 : Array.isArray(n) ? n.every(r => bi(r)) : !!bi(n)))
}
  , un = {
    address: t => Ve(t),
    bloom: t => Vn(t),
    blockNumber: t => zc(t),
    blockTag: t => xe(t),
    blockNumberOrTag: t => $s(t),
    bool: t => xp(t),
    bytes: t => Ut(t),
    filter: t => Ip(t),
    hex: t => se(t),
    uint: t => dn(t),
    int: t => ji(t),
    number: t => qc(t),
    string: t => ho(t)
};
for (let t = 8; t <= 256; t += 8)
    un[`int${t}`] = e => ji(e, {
        bitSize: t
    }),
    un[`uint${t}`] = e => dn(e, {
        bitSize: t
    });
for (let t = 1; t <= 32; t += 1)
    un[`bytes${t}`] = e => Ut(e, {
        size: t
    });
un.bytes256 = un.bytes;
const tr = t => {
    if ((!(t != null && t.type) || (t == null ? void 0 : t.type) === "object") && (t != null && t.properties)) {
        const e = {};
        for (const n of Object.keys(t.properties)) {
            const r = tr(t.properties[n]);
            r && (e[n] = r)
        }
        return Array.isArray(t.required) ? nt.object(e).partial().required(t.required.reduce( (n, r) => Object.assign(Object.assign({}, n), {
            [r]: !0
        }), {})) : nt.object(e).partial()
    }
    if ((t == null ? void 0 : t.type) === "array" && (t != null && t.items)) {
        if (Array.isArray(t.items) && t.items.length > 0) {
            const e = [];
            for (const n of t.items) {
                const r = tr(n);
                r && e.push(r)
            }
            return nt.tuple(e)
        }
        return nt.array(tr(t.items))
    }
    if (t.oneOf && Array.isArray(t.oneOf))
        return nt.union(t.oneOf.map(e => tr(e)));
    if (t != null && t.format) {
        if (!un[t.format])
            throw new Nh(t.format);
        return nt.any().refine(un[t.format], e => ({
            params: {
                value: e,
                format: t.format
            }
        }))
    }
    return t != null && t.type && (t == null ? void 0 : t.type) !== "object" && typeof nt[String(t.type)] == "function" ? nt[String(t.type)]() : nt.object({
        data: nt.any()
    }).partial()
}
;
class Rn {
    static factory() {
        return Rn.validatorInstance || (Rn.validatorInstance = new Rn),
        Rn.validatorInstance
    }
    validate(e, n, r) {
        var i, s;
        const a = tr(e).safeParse(n);
        if (!a.success) {
            const u = this.convertErrors((s = (i = a.error) === null || i === void 0 ? void 0 : i.issues) !== null && s !== void 0 ? s : []);
            if (u) {
                if (r != null && r.silent)
                    return u;
                throw new Hn(u)
            }
        }
    }
    convertErrors(e) {
        if (e && Array.isArray(e) && e.length > 0)
            return e.map(n => {
                var r;
                let i, s, o, a;
                a = n.path.join("/");
                const u = String(n.path[n.path.length - 1])
                  , d = n.path.join("/");
                if (n.code === T.too_big)
                    s = "maxItems",
                    a = `${d}/maxItems`,
                    o = {
                        limit: n.maximum
                    },
                    i = `must NOT have more than ${n.maximum} items`;
                else if (n.code === T.too_small)
                    s = "minItems",
                    a = `${d}/minItems`,
                    o = {
                        limit: n.minimum
                    },
                    i = `must NOT have fewer than ${n.minimum} items`;
                else if (n.code === T.custom) {
                    const {value: c, format: l} = (r = n.params) !== null && r !== void 0 ? r : {};
                    typeof c > "u" ? i = `value at "/${a}" is required` : i = `value "${typeof c == "object" ? JSON.stringify(c) : c}" at "/${a}" must pass "${l}" validation`,
                    o = {
                        value: c
                    }
                }
                return {
                    keyword: s ?? u,
                    instancePath: d ? `/${d}` : "",
                    schemaPath: a ? `#${a}` : "#",
                    params: o ?? {
                        value: n.message
                    },
                    message: i ?? n.message
                }
            }
            )
    }
}
class Tp {
    constructor() {
        this._validator = Rn.factory()
    }
    validateJSONSchema(e, n, r) {
        return this._validator.validate(e, n, r)
    }
    validate(e, n, r={
        silent: !1
    }) {
        var i, s;
        const o = yo(e);
        if (!(Array.isArray(o.items) && ((i = o.items) === null || i === void 0 ? void 0 : i.length) === 0 && n.length === 0)) {
            if (Array.isArray(o.items) && ((s = o.items) === null || s === void 0 ? void 0 : s.length) === 0 && n.length !== 0)
                throw new Hn([{
                    instancePath: "/0",
                    schemaPath: "/",
                    keyword: "required",
                    message: "empty schema against data can not be validated",
                    params: n
                }]);
            return this._validator.validate(o, n, r)
        }
    }
}
const H = new Tp
  , _o = {
    noether: BigInt(0),
    wei: BigInt(1),
    kwei: BigInt(1e3),
    Kwei: BigInt(1e3),
    babbage: BigInt(1e3),
    femtoether: BigInt(1e3),
    mwei: BigInt(1e6),
    Mwei: BigInt(1e6),
    lovelace: BigInt(1e6),
    picoether: BigInt(1e6),
    gwei: BigInt(1e9),
    Gwei: BigInt(1e9),
    shannon: BigInt(1e9),
    nanoether: BigInt(1e9),
    nano: BigInt(1e9),
    szabo: BigInt(1e12),
    microether: BigInt(1e12),
    micro: BigInt(1e12),
    finney: BigInt(1e15),
    milliether: BigInt(1e15),
    milli: BigInt(1e15),
    ether: BigInt("1000000000000000000"),
    kether: BigInt("1000000000000000000000"),
    grand: BigInt("1000000000000000000000"),
    mether: BigInt("1000000000000000000000000"),
    gether: BigInt("1000000000000000000000000000"),
    tether: BigInt("1000000000000000000000000000000")
}
  , at = t => {
    if (H.validate(["bytes"], [t]),
    t instanceof Uint8Array)
        return t;
    if (Array.isArray(t))
        return new Uint8Array(t);
    if (typeof t == "string")
        return yn(t);
    throw new rr(t)
}
  , {uint8ArrayToHexString: Sp} = Gc
  , X = t => Sp(at(t))
  , ue = t => typeof t == "string" && t.slice(0, 2).toLowerCase() !== "0x" ? at(`0x${t}`) : at(t)
  , Rr = t => (H.validate(["hex"], [t]),
$i(t))
  , kp = Rr
  , He = (t, e) => {
    typeof t != "bigint" && H.validate(["int"], [t]);
    let n = Hi(t);
    return e && (!n.startsWith("-") && n.length % 2 === 1 ? n = "0x0".concat(n.slice(2)) : n.length % 2 === 0 && n.startsWith("-") && (n = "-0x0".concat(n.slice(3)))),
    n
}
  , Ap = He
  , Pp = t => Rr(t).toString()
  , et = t => {
    H.validate(["string"], [t]);
    let e = t.replace(/^(?:\u0000)/, "");
    return e = e.replace(/(?:\u0000)$/, ""),
    X(new TextEncoder().encode(e))
}
  , Vc = et
  , Rp = et
  , Fi = t => Rc(ue(t))
  , Bp = t => typeof t == "string" ? Fi(t) : (H.validate(["bytes"], [t]),
Rc(t))
  , wo = Ln
  , Cp = Fi
  , Wc = t => {
    H.validate(["string"], [t]);
    let e = "";
    for (let n = 0; n < t.length; n += 1) {
        const r = t.charCodeAt(n).toString(16);
        e += r.length % 2 !== 0 ? `0${r}` : r
    }
    return `0x${e}`
}
  , Np = Wc
  , Zc = t => new TextDecoder("ascii").decode(ue(t))
  , Op = Zc
  , jt = (t, e) => {
    if (typeof t == "string" && Ve(t))
        return e ? "address" : `0x${t.toLowerCase().replace(/^0x/i, "")}`;
    if (typeof t == "boolean")
        return e ? "bool" : t ? "0x01" : "0x00";
    if (typeof t == "number")
        return e ? t < 0 ? "int256" : "uint256" : He(t);
    if (typeof t == "bigint")
        return e ? "bigint" : He(t);
    if (typeof t == "object" && t)
        return e ? "string" : et(JSON.stringify(t));
    if (typeof t == "string") {
        if (t.startsWith("-0x") || t.startsWith("-0X"))
            return e ? "int256" : He(t);
        if (se(t))
            return e ? "bytes" : t;
        if (mo(t) && !ji(t))
            return e ? "bytes" : `0x${t}`;
        if (!Number.isFinite(t))
            return e ? "string" : et(t)
    }
    throw new gh(t)
}
  , Ne = t => {
    if (typeof t == "number")
        return t;
    if (typeof t == "bigint")
        return t >= Number.MIN_SAFE_INTEGER && t <= Number.MAX_SAFE_INTEGER ? Number(t) : t;
    if (typeof t == "string" && se(t))
        return Rr(t);
    try {
        return Ne(BigInt(t))
    } catch {
        throw new co(t)
    }
}
  , Zt = t => {
    if (typeof t == "number")
        return BigInt(t);
    if (typeof t == "bigint")
        return t;
    if (typeof t == "string" && mo(t))
        return t.startsWith("-") ? -BigInt(t.substring(1)) : BigInt(t);
    throw new co(t)
}
  , Lp = (t, e) => {
    const n = _o[e];
    if (!n)
        throw new vc(e);
    const r = String(Ne(t))
      , i = n.toString().length - 1;
    if (i <= 0)
        return r.toString();
    const s = r.padStart(i, "0")
      , o = s.slice(0, -i)
      , a = s.slice(-i).replace(/\.?0+$/, "");
    return o === "" ? `0.${a}` : a === "" ? o : `${o}.${a}`
}
  , Mp = (t, e) => {
    H.validate(["number"], [t]);
    const n = _o[e];
    if (!n)
        throw new vc(e);
    const [r,i] = String(typeof t == "string" && !se(t) ? t : Ne(t)).split(".").concat("")
      , o = BigInt(`${r}${i}`) * n
      , a = n.toString().length - 1
      , u = Math.min(i.length, a);
    return u === 0 ? o.toString() : o.toString().padStart(u, "0").slice(0, -u)
}
  , ct = t => {
    if (!Ve(t, !1))
        throw new uo(t);
    const e = t.toLowerCase().replace(/^0x/i, "")
      , n = Gt(Se(wo(e)));
    if (b(n) || n === "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470")
        return "";
    let r = "0x";
    const i = n.replace(/^0x/i, "");
    for (let s = 0; s < e.length; s += 1)
        parseInt(i[s], 16) > 7 ? r += e[s].toUpperCase() : r += e[s];
    return r
}
  , Kc = t => {
    if (typeof t == "boolean")
        return t;
    if (typeof t == "number" && (t === 0 || t === 1) || typeof t == "bigint" && (t === BigInt(0) || t === BigInt(1)))
        return !!t;
    if (typeof t == "string" && !se(t) && (t === "1" || t === "0" || t === "false" || t === "true"))
        return t === "true" ? !0 : t === "false" ? !1 : !!Number(t);
    if (typeof t == "string" && se(t) && (t === "0x1" || t === "0x0"))
        return !!Ne(t);
    throw new lo(t)
}
;
var $p = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const Hp = t => e => t(e.detail);
class jp extends EventTarget {
    constructor() {
        super(...arguments),
        this._listeners = {},
        this.maxListeners = Number.MAX_SAFE_INTEGER
    }
    on(e, n) {
        return this.addEventListener(e, n),
        this
    }
    once(e, n) {
        const r = i => $p(this, void 0, void 0, function*() {
            this.off(e, r),
            yield n(i)
        });
        return this.on(e, r)
    }
    off(e, n) {
        return this.removeEventListener(e, n),
        this
    }
    emit(e, n) {
        const r = new CustomEvent(e,{
            detail: n
        });
        return super.dispatchEvent(r)
    }
    listenerCount(e) {
        const n = this._listeners[e];
        return n ? n.length : 0
    }
    listeners(e) {
        return this._listeners[e].map(n => n[0]) || []
    }
    eventNames() {
        return Object.keys(this._listeners)
    }
    removeAllListeners() {
        return Object.keys(this._listeners).forEach(e => {
            this._listeners[e].forEach(n => {
                super.removeEventListener(e, n[1])
            }
            )
        }
        ),
        this._listeners = {},
        this
    }
    setMaxListeners(e) {
        return this.maxListeners = e,
        this
    }
    getMaxListeners() {
        return this.maxListeners
    }
    addEventListener(e, n) {
        const r = Hp(n);
        super.addEventListener(e, r),
        this._listeners[e] || (this._listeners[e] = []),
        this._listeners[e].push([n, r])
    }
    removeEventListener(e, n) {
        const r = this._listeners[e];
        if (r) {
            const i = r.findIndex(s => s[0] === n);
            i !== -1 && (super.removeEventListener(e, r[i][1]),
            r.splice(i, 1))
        }
    }
}
let Hs;
typeof window > "u" ? Hs = ac.EventEmitter : Hs = jp;
class xo extends Hs {
}
const Dp = se
  , Fp = mo
  , Gp = Uc
  , Up = Ve
  , qp = Vn
  , zp = Di
  , Vp = _p
  , Wp = wp
  , Zp = bi
  , Kp = Ep
  , Xp = (t, e) => {
    const n = typeof t == "string" && xe(t)
      , r = typeof e == "string" && xe(e);
    if (t === e || (t === "earliest" || t === 0) && (e === "earliest" || e === 0))
        return 0;
    if (t === "earliest" && e > 0)
        return -1;
    if (e === "earliest" && t > 0)
        return 1;
    if (n && r) {
        const o = {
            [mt.EARLIEST]: 1,
            [mt.FINALIZED]: 2,
            [mt.SAFE]: 3,
            [mt.LATEST]: 4,
            [mt.PENDING]: 5
        };
        return o[t] < o[e] ? -1 : 1
    }
    if (n && !r || !n && r)
        throw new vh("Cannot compare blocktag with provided non-blocktag input.");
    const i = BigInt(t)
      , s = BigInt(e);
    return i < s ? -1 : i === s ? 0 : 1
}
  , Ot = t => typeof t == "object" && !b(t) && Object.keys(t).length !== 0 && ["input", "data", "from", "gas", "gasPrice", "gasLimit", "address", "jsonInterface", "syncWithContext", "dataInputFill"].some(e => e in t)
  , z = b
  , Sa = t => typeof t == "object" && !b(t) && !Array.isArray(t) && !(t instanceof bo)
  , qt = (t, ...e) => {
    const n = t;
    if (!Sa(n))
        return n;
    for (const r of e)
        for (const i in r)
            Sa(r[i]) ? (n[i] || (n[i] = {}),
            qt(n[i], r[i])) : !b(r[i]) && Object.hasOwnProperty.call(r, i) && (Array.isArray(r[i]) || r[i]instanceof bo ? n[i] = r[i].slice(0) : n[i] = r[i]);
    return n
}
  , jn = (t, e, n="0") => typeof t == "string" ? se(t) ? vi(t, e, n) : t.padStart(e, n) : (H.validate(["int"], [t]),
vi(t, e, n))
  , Xc = (t, e, n="0") => {
    if (typeof t == "string" && !se(t))
        return t.padEnd(e, n);
    H.validate(["int"], [t]);
    const r = typeof t == "string" && se(t) ? t : He(t)
      , i = r.startsWith("-") ? 3 : 2;
    return r.padEnd(e + i, n)
}
  , Jc = Xc
  , wr = jn
  , Yc = (t, e=64) => {
    H.validate(["int"], [t]);
    const n = Ne(t);
    if (n >= 0)
        return jn(jt(n), e);
    const r = _r(BigInt(2), BigInt(e * 4));
    if (-n >= r)
        throw new bc(`value: ${t}, nibbleWidth: ${e}`);
    const s = BigInt(n) + r;
    return jn(He(s), e)
}
  , Jp = (t, e=64) => {
    H.validate(["int"], [t]);
    const n = Ne(t);
    if (n < 0)
        return n;
    const r = Math.ceil(Math.log(Number(n)) / Math.log(2));
    if (r > e * 4)
        throw new bc(`value: "${t}", nibbleWidth: "${e}"`);
    if (e * 4 !== r)
        return n;
    const i = _r(BigInt(2), BigInt(e) * BigInt(4));
    return Ne(BigInt(n) - i)
}
;
function Re(...t) {
    const e = t.reduce( (i, s) => i + s.length, 0)
      , n = new Uint8Array(e);
    let r = 0;
    for (const i of t)
        n.set(i, r),
        r += i.length;
    return n
}
function Gi(t, e) {
    if (t === e)
        return !0;
    if (t.byteLength !== e.byteLength)
        return !1;
    for (let n = 0; n < t.byteLength; n += 1)
        if (t[n] !== e[n])
            return !1;
    return !0
}
const {parseBaseType: Yp} = Gc
  , ft = t => typeof t == "object" && !b(t) && "number"in t && "bytes"in t
  , Qp = (t, e, n=[]) => {
    let r = Object.assign({}, t), i;
    for (const s of e) {
        if (r.oneOf && i) {
            const o = n.find(function(a) {
                return this === a[0]
            }, i ?? "");
            o && o[0] === i && (r = r.oneOf[o[1]])
        }
        if (!r.properties && !r.items)
            return;
        if (r.properties)
            r = r.properties[s];
        else if (r.items && r.items.properties) {
            const o = r.items.properties;
            if (!o)
                return;
            r = o[s]
        } else
            r.items && Cn(r.items) ? r = r.items : r.items && Array.isArray(r.items) && (r = r.items[parseInt(s, 10)]);
        r && s && (i = s)
    }
    return r
}
  , nr = (t, e, n) => {
    try {
        const {baseType: r, baseTypeSize: i} = Yp(e);
        if (r === "int" || r === "uint")
            switch (n.number) {
            case ze.NUMBER:
                return Number(Zt(t));
            case ze.HEX:
                return He(Zt(t));
            case ze.STR:
                return Zt(t).toString();
            case ze.BIGINT:
                return Zt(t);
            default:
                throw new As(`Invalid format: ${String(n.number)}`)
            }
        if (r === "bytes") {
            let s;
            switch (i ? typeof t == "string" ? s = jn(t, i * 2) : t instanceof Uint8Array && (s = Re(new Uint8Array(i - t.length), t)) : s = t,
            n.bytes) {
            case wt.HEX:
                return X(at(s));
            case wt.UINT8ARRAY:
                return at(s);
            default:
                throw new As(`Invalid format: ${String(n.bytes)}`)
            }
        }
    } catch {
        return t
    }
    return t
}
  , _i = (t, e, n, r, i=[]) => {
    var s, o;
    if (!Cn(t) && !Array.isArray(t))
        return nr(t, e == null ? void 0 : e.format, r);
    const a = t;
    for (const [u,d] of Object.entries(a)) {
        n.push(u);
        const c = Qp(e, n, i);
        if (b(c)) {
            delete a[u],
            n.pop();
            continue
        }
        if (Cn(d)) {
            _i(d, e, n, r),
            n.pop();
            continue
        }
        if (Array.isArray(d)) {
            let l = c;
            if ((c == null ? void 0 : c.oneOf) !== void 0 && c.oneOf.forEach( (f, h) => {
                var p, m;
                !Array.isArray(c == null ? void 0 : c.items) && (typeof d[0] == "object" && ((p = f == null ? void 0 : f.items) === null || p === void 0 ? void 0 : p.type) === "object" || typeof d[0] == "string" && ((m = f == null ? void 0 : f.items) === null || m === void 0 ? void 0 : m.type) !== "object") && (l = f,
                i.push([u, h]))
            }
            ),
            b(l == null ? void 0 : l.items)) {
                delete a[u],
                n.pop();
                continue
            }
            if (Cn(l.items) && !b(l.items.format)) {
                for (let f = 0; f < d.length; f += 1)
                    a[u][f] = nr(d[f], (s = l == null ? void 0 : l.items) === null || s === void 0 ? void 0 : s.format, r);
                n.pop();
                continue
            }
            if (!Array.isArray(l == null ? void 0 : l.items) && ((o = l == null ? void 0 : l.items) === null || o === void 0 ? void 0 : o.type) === "object") {
                for (const f of d)
                    _i(f, e, n, r, i);
                n.pop();
                continue
            }
            if (Array.isArray(l == null ? void 0 : l.items)) {
                for (let f = 0; f < d.length; f += 1)
                    a[u][f] = nr(d[f], l.items[f].format, r);
                n.pop();
                continue
            }
        }
        a[u] = nr(d, c.format, r),
        n.pop()
    }
    return a
}
  , I = (t, e, n) => {
    let r;
    Cn(e) ? r = qt({}, e) : Array.isArray(e) ? r = [...e] : r = e;
    const i = Cn(t) ? t : yo(t);
    if (!i.properties && !i.items && !i.format)
        throw new As("Invalid json schema for formatting");
    return _i(r, i, [], n)
}
  , Qc = "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"
  , Br = t => {
    let e;
    typeof t == "string" ? t.startsWith("0x") && se(t) ? e = ue(t) : e = Ln(t) : e = t;
    const n = X(Se(e));
    return n === Qc ? void 0 : n
}
  , je = t => {
    const e = Br(t);
    return b(e) ? Qc : e
}
  , xr = t => {
    let e;
    return typeof t == "bigint" || typeof t == "number" ? e = Ln(t.toString()) : Array.isArray(t) ? e = new Uint8Array(t) : typeof t == "string" && !se(t) ? e = Ln(t) : e = at(t),
    X(Se(e))
}
  , e0 = t => {
    if (Array.isArray(t))
        throw new Error("Autodetection of array types is not supported.");
    let e, n;
    if (typeof t == "object" && ("t"in t || "type"in t) && ("v"in t || "value"in t))
        e = "t"in t ? t.t : t.type,
        n = "v"in t ? t.v : t.value,
        e = e.toLowerCase() === "bigint" ? "int" : e;
    else {
        if (typeof t == "bigint")
            return ["int", t];
        e = jt(t, !0),
        n = jt(t),
        !e.startsWith("int") && !e.startsWith("uint") && (e = "bytes")
    }
    return (e.startsWith("int") || e.startsWith("uint")) && typeof n == "string" && !/^(-)?0x/i.test(n) && (n = Zt(n)),
    [e, n]
}
  , t0 = t => t.startsWith("int[") ? `int256${t.slice(3)}` : t === "int" ? "int256" : t.startsWith("uint[") ? `uint256'${t.slice(4)}` : t === "uint" ? "uint256" : t
  , ls = (t, e) => {
    const n = /^(\d+).*$/.exec(t.slice(e));
    return n ? parseInt(n[1], 10) : 0
}
  , ka = t => t.toString(2).length
  , Aa = (t, e) => {
    const n = e.toString();
    if (t === "string") {
        if (typeof e == "string")
            return et(e);
        throw new ph(e)
    }
    if (t === "bool" || t === "boolean") {
        if (typeof e == "boolean")
            return e ? "01" : "00";
        throw new lo(e)
    }
    if (t === "address") {
        if (!Ve(n))
            throw new uo(n);
        return n
    }
    const r = t0(t);
    if (t.startsWith("uint")) {
        const i = ls(r, 4);
        if (i % 8 || i < 8 || i > 256)
            throw new ma(n);
        const s = Ne(n);
        if (ka(s) > i)
            throw new pa(n);
        if (s < BigInt(0))
            throw new yh(n);
        return i ? wr(s.toString(16), i / 8 * 2) : s.toString(16)
    }
    if (t.startsWith("int")) {
        const i = ls(r, 3);
        if (i % 8 || i < 8 || i > 256)
            throw new ma(t);
        const s = Ne(n);
        if (ka(s) > i)
            throw new pa(n);
        return s < BigInt(0) ? Yc(s.toString(), i / 8 * 2) : i ? wr(s.toString(16), i / 4) : s.toString(16)
    }
    if (r === "bytes") {
        if (n.replace(/^0x/i, "").length % 2 !== 0)
            throw new rr(n);
        return n
    }
    if (t.startsWith("bytes")) {
        if (n.replace(/^0x/i, "").length % 2 !== 0)
            throw new rr(n);
        const i = ls(t, 5);
        if (!i || i < 1 || i > 64 || i < n.replace(/^0x/i, "").length / 2)
            throw new rr(n);
        return Jc(n, i * 2)
    }
    return ""
}
  , ed = t => {
    const [e,n] = e0(t);
    return Array.isArray(n) ? n.map(s => Aa(e, s).replace("0x", "")).join("") : Aa(e, n).replace("0x", "")
}
  , Eo = (...t) => `0x${t.map(ed).join("").toLowerCase()}`
  , n0 = (...t) => Br(Eo(...t))
  , r0 = (...t) => je(Eo(...t))
  , i0 = t => Br(`0x${(typeof t == "number" ? t.toString() : t).padStart(64, "0")}`);
function s0(t) {
    return Tc(t)
}
const Er = t => s0(t)
  , o0 = t => X(Er(t));
var Ui = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
function td(t) {
    return (typeof t == "object" || typeof t == "function") && typeof t.then == "function"
}
function nd(t, e, n) {
    return Ui(this, void 0, void 0, function*() {
        let r;
        const i = yield Promise.race([t instanceof Promise ? t : t(), new Promise( (s, o) => {
            r = setTimeout( () => n ? o(n) : s(void 0), e)
        }
        )]);
        if (r && clearTimeout(r),
        i instanceof Error)
            throw i;
        return i
    })
}
function Io(t, e) {
    let n;
    return [new Promise( (i, s) => {
        n = setInterval(function o() {
            return Ui(this, void 0, void 0, function*() {
                try {
                    const a = yield nd(t, e);
                    b(a) || (clearInterval(n),
                    i(a))
                } catch (a) {
                    clearInterval(n),
                    s(a)
                }
            }),
            o
        }(), e)
    }
    ), n]
}
function a0(t, e) {
    return Ui(this, void 0, void 0, function*() {
        return Io(t, e)[0]
    })
}
function To(t, e) {
    let n;
    const r = new Promise( (i, s) => {
        n = setTimeout( () => {
            s(e)
        }
        , t)
    }
    );
    return [n, r]
}
function rd(t, e) {
    let n;
    const r = new Promise( (i, s) => {
        n = setInterval( () => {
            Ui(this, void 0, void 0, function*() {
                const o = yield t();
                o && (clearInterval(n),
                s(o))
            })
        }
        , e)
    }
    );
    return [n, r]
}
const So = () => {
    const t = Er(16);
    t[6] = t[6] & 15 | 64,
    t[8] = t[8] & 63 | 128;
    const e = X(t);
    return [e.substring(2, 10), e.substring(10, 14), e.substring(14, 18), e.substring(18, 22), e.substring(22, 34)].join("-")
}
  , ko = t => {
    const e = t.error.code;
    return Ae.has(e) || e >= -32099 && e <= -32e3
}
  , gt = t => !Array.isArray(t) && !!t && t.jsonrpc === "2.0" && "result"in t && b(t.error) && (typeof t.id == "number" || typeof t.id == "string")
  , yt = t => !Array.isArray(t) && t.jsonrpc === "2.0" && !!t && b(t.result) && "error"in t && (typeof t.id == "number" || typeof t.id == "string")
  , qi = t => !Array.isArray(t) && !!t && t.jsonrpc === "2.0" && !b(t.params) && !b(t.method)
  , id = t => !Array.isArray(t) && !!t && t.jsonrpc === "2.0" && "id"in t && "result"in t
  , wi = t => gt(t) || yt(t)
  , Ao = t => Array.isArray(t) ? t.every(wi) : wi(t)
  , Ir = t => Array.isArray(t) && t.length > 0 && Ao(t);
let qr;
const sd = t => {
    qr = t
}
  , ln = t => {
    var e, n, r, i;
    return typeof qr < "u" && (qr += 1),
    {
        jsonrpc: (e = t.jsonrpc) !== null && e !== void 0 ? e : "2.0",
        id: (r = (n = t.id) !== null && n !== void 0 ? n : qr) !== null && r !== void 0 ? r : So(),
        method: t.method,
        params: (i = t.params) !== null && i !== void 0 ? i : void 0
    }
}
  , Po = t => t.map(e => ln(e))
  , Ze = t => Array.isArray(t) && t.length > 0
  , c0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    isBatchRequest: Ze,
    isBatchResponse: Ir,
    isResponseRpcError: ko,
    isResponseWithError: yt,
    isResponseWithNotification: qi,
    isResponseWithResult: gt,
    isSubscriptionResult: id,
    isValidResponse: Ao,
    setRequestIdStart: sd,
    toBatchPayload: Po,
    toPayload: ln,
    validateResponse: wi
}, Symbol.toStringTag, {
    value: "Module"
}));
var fs = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
}, od;
class xi {
    constructor({timeout: e, eagerStart: n, timeoutMessage: r}={
        timeout: 0,
        eagerStart: !1,
        timeoutMessage: "DeferredPromise timed out"
    }) {
        this[od] = "Promise",
        this._state = "pending",
        this._promise = new Promise( (i, s) => {
            this._resolve = i,
            this._reject = s
        }
        ),
        this._timeoutMessage = r,
        this._timeoutInterval = e,
        n && this.startTimer()
    }
    get state() {
        return this._state
    }
    then(e, n) {
        return fs(this, void 0, void 0, function*() {
            return this._promise.then(e, n)
        })
    }
    catch(e) {
        return fs(this, void 0, void 0, function*() {
            return this._promise.catch(e)
        })
    }
    finally(e) {
        return fs(this, void 0, void 0, function*() {
            return this._promise.finally(e)
        })
    }
    resolve(e) {
        this._resolve(e),
        this._state = "fulfilled",
        this._clearTimeout()
    }
    reject(e) {
        this._reject(e),
        this._state = "rejected",
        this._clearTimeout()
    }
    startTimer() {
        this._timeoutInterval && this._timeoutInterval > 0 && (this._timeoutId = setTimeout(this._checkTimeout.bind(this), this._timeoutInterval))
    }
    _checkTimeout() {
        this._state === "pending" && this._timeoutId && this.reject(new lc(this._timeoutMessage))
    }
    _clearTimeout() {
        this._timeoutId && clearTimeout(this._timeoutId)
    }
}
od = Symbol.toStringTag;
class ad {
    constructor(e, n) {
        this.eventEmitter = e,
        this.autoReconnect = n
    }
    clearQueues() {
        typeof this._clearQueues == "function" && this._clearQueues()
    }
    onError(e) {
        this._clearQueues = e
    }
    parseResponse(e) {
        const n = [];
        return e.replace(/\}[\n\r]?\{/g, "}|--|{").replace(/\}\][\n\r]?\[\{/g, "}]|--|[{").replace(/\}[\n\r]?\[\{/g, "}|--|[{").replace(/\}\][\n\r]?\{/g, "}]|--|{").split("|--|").forEach(i => {
            let s = i;
            this.lastChunk && (s = this.lastChunk + s);
            let o;
            try {
                o = JSON.parse(s)
            } catch {
                this.lastChunk = s,
                this.lastChunkTimeout && clearTimeout(this.lastChunkTimeout),
                this.lastChunkTimeout = setTimeout( () => {
                    this.autoReconnect || (this.clearQueues(),
                    this.eventEmitter.emit("error", new ar({
                        id: 1,
                        jsonrpc: "2.0",
                        error: {
                            code: 2,
                            message: "Chunk timeout"
                        }
                    })))
                }
                , 1e3 * 15);
                return
            }
            clearTimeout(this.lastChunkTimeout),
            this.lastChunk = void 0,
            o && n.push(o)
        }
        ),
        n
    }
}
var Pa = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class cd extends Pr {
    constructor() {
        super(...arguments),
        this._eventEmitter = new ac.EventEmitter,
        this._chainId = "",
        this._accounts = []
    }
    _getChainId() {
        var e;
        return Pa(this, void 0, void 0, function*() {
            const n = yield this.request(ln({
                method: "eth_chainId",
                params: []
            }));
            return (e = n == null ? void 0 : n.result) !== null && e !== void 0 ? e : ""
        })
    }
    _getAccounts() {
        var e;
        return Pa(this, void 0, void 0, function*() {
            const n = yield this.request(ln({
                method: "eth_accounts",
                params: []
            }));
            return (e = n == null ? void 0 : n.result) !== null && e !== void 0 ? e : []
        })
    }
    _onConnect() {
        Promise.all([this._getChainId().then(e => {
            e !== this._chainId && (this._chainId = e,
            this._eventEmitter.emit("chainChanged", this._chainId))
        }
        ).catch(e => {
            console.error(e)
        }
        ), this._getAccounts().then(e => {
            this._accounts.length === e.length && e.every(n => e.includes(n)) || (this._accounts = e,
            this._onAccountsChanged())
        }
        ).catch(e => {
            console.error(e)
        }
        )]).then( () => this._eventEmitter.emit("connect", {
            chainId: this._chainId
        })).catch(e => {
            console.error(e)
        }
        )
    }
    _onDisconnect(e, n) {
        this._eventEmitter.emit("disconnect", new _h(e,n))
    }
    _onAccountsChanged() {
        this._eventEmitter.emit("accountsChanged", this._accounts)
    }
}
var hs = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const d0 = {
    autoReconnect: !0,
    delay: 5e3,
    maxAttempts: 5
}
  , u0 = 1e3;
class dd extends cd {
    constructor(e, n, r) {
        if (super(),
        this._connectionStatus = "connecting",
        this._onMessageHandler = this._onMessage.bind(this),
        this._onOpenHandler = this._onConnect.bind(this),
        this._onCloseHandler = this._onCloseEvent.bind(this),
        this._onErrorHandler = this._onError.bind(this),
        !this._validateProviderPath(e))
            throw new Ps(e);
        this._socketPath = e,
        this._socketOptions = n,
        this._reconnectOptions = Object.assign(Object.assign({}, d0), r ?? {}),
        this._pendingRequestsQueue = new Map,
        this._sentRequestsQueue = new Map,
        this._init(),
        this.connect(),
        this.chunkResponseParser = new ad(this._eventEmitter,this._reconnectOptions.autoReconnect),
        this.chunkResponseParser.onError( () => {
            this._clearQueues()
        }
        ),
        this.isReconnecting = !1
    }
    get SocketConnection() {
        return this._socketConnection
    }
    _init() {
        this._reconnectAttempts = 0
    }
    connect() {
        try {
            this._openSocketConnection(),
            this._connectionStatus = "connecting",
            this._addSocketListeners()
        } catch (e) {
            if (this.isReconnecting)
                setImmediate( () => {
                    this._reconnect()
                }
                );
            else
                throw this._connectionStatus = "disconnected",
                e && e.message ? new kr(`Error while connecting to ${this._socketPath}. Reason: ${e.message}`) : new Ps(this._socketPath)
        }
    }
    _validateProviderPath(e) {
        return !!e
    }
    getPendingRequestQueueSize() {
        return this._pendingRequestsQueue.size
    }
    getSentRequestsQueueSize() {
        return this._sentRequestsQueue.size
    }
    supportsSubscriptions() {
        return !0
    }
    on(e, n) {
        this._eventEmitter.on(e, n)
    }
    once(e, n) {
        this._eventEmitter.once(e, n)
    }
    removeListener(e, n) {
        this._eventEmitter.removeListener(e, n)
    }
    _onDisconnect(e, n) {
        this._connectionStatus = "disconnected",
        super._onDisconnect(e, n)
    }
    disconnect(e, n) {
        const r = e ?? u0;
        this._removeSocketListeners(),
        this.getStatus() !== "disconnected" && this._closeSocketConnection(r, n),
        this._onDisconnect(r, n)
    }
    safeDisconnect(e, n, r=!1, i=1e3) {
        return hs(this, void 0, void 0, function*() {
            let s = 0;
            yield hs(this, void 0, void 0, function*() {
                return new Promise(a => {
                    const u = setInterval( () => {
                        r && s === 5 && this.clearQueues(),
                        this.getPendingRequestQueueSize() === 0 && this.getSentRequestsQueueSize() === 0 && (clearInterval(u),
                        a(!0)),
                        s += 1
                    }
                    , i)
                }
                )
            }),
            this.disconnect(e, n)
        })
    }
    removeAllListeners(e) {
        this._eventEmitter.removeAllListeners(e)
    }
    _onError(e) {
        this.isReconnecting ? this._reconnect() : this._eventEmitter.emit("error", e)
    }
    reset() {
        this._sentRequestsQueue.clear(),
        this._pendingRequestsQueue.clear(),
        this._init(),
        this._removeSocketListeners(),
        this._addSocketListeners()
    }
    _reconnect() {
        this.isReconnecting || (this.isReconnecting = !0,
        this._sentRequestsQueue.size > 0 && this._sentRequestsQueue.forEach( (e, n) => {
            e.deferredPromise.reject(new Of),
            this._sentRequestsQueue.delete(n)
        }
        ),
        this._reconnectAttempts < this._reconnectOptions.maxAttempts ? (this._reconnectAttempts += 1,
        setTimeout( () => {
            this._removeSocketListeners(),
            this.connect(),
            this.isReconnecting = !1
        }
        , this._reconnectOptions.delay)) : (this.isReconnecting = !1,
        this._clearQueues(),
        this._removeSocketListeners(),
        this._eventEmitter.emit("error", new Nf(this._reconnectOptions.maxAttempts))))
    }
    request(e) {
        return hs(this, void 0, void 0, function*() {
            if (z(this._socketConnection))
                throw new Error("Connection is undefined");
            this.getStatus() === "disconnected" && this.connect();
            const n = Ze(e) ? e[0].id : e.id;
            if (!n)
                throw new Ff("Request Id not defined");
            if (this._sentRequestsQueue.has(n))
                throw new Lf(n);
            const r = new xi;
            r.catch(s => {
                this._eventEmitter.emit("error", s)
            }
            );
            const i = {
                payload: e,
                deferredPromise: r
            };
            if (this.getStatus() === "connecting")
                return this._pendingRequestsQueue.set(n, i),
                i.deferredPromise;
            this._sentRequestsQueue.set(n, i);
            try {
                this._sendToSocket(i.payload)
            } catch (s) {
                this._sentRequestsQueue.delete(n),
                this._eventEmitter.emit("error", s)
            }
            return r
        })
    }
    _onConnect() {
        this._connectionStatus = "connected",
        this._reconnectAttempts = 0,
        super._onConnect(),
        this._sendPendingRequests()
    }
    _sendPendingRequests() {
        for (const [e,n] of this._pendingRequestsQueue.entries())
            this._sendToSocket(n.payload),
            this._pendingRequestsQueue.delete(e),
            this._sentRequestsQueue.set(e, n)
    }
    _onMessage(e) {
        const n = this._parseResponses(e);
        if (!(z(n) || n.length === 0))
            for (const r of n) {
                if (qi(r) && r.method.endsWith("_subscription")) {
                    this._eventEmitter.emit("message", r);
                    return
                }
                const i = Ir(r) ? r[0].id : r.id
                  , s = this._sentRequestsQueue.get(i);
                if (!s)
                    return;
                (Ir(r) || gt(r) || yt(r)) && (this._eventEmitter.emit("message", r),
                s.deferredPromise.resolve(r)),
                this._sentRequestsQueue.delete(i)
            }
    }
    clearQueues(e) {
        this._clearQueues(e)
    }
    _clearQueues(e) {
        this._pendingRequestsQueue.size > 0 && this._pendingRequestsQueue.forEach( (n, r) => {
            n.deferredPromise.reject(new ks(e)),
            this._pendingRequestsQueue.delete(r)
        }
        ),
        this._sentRequestsQueue.size > 0 && this._sentRequestsQueue.forEach( (n, r) => {
            n.deferredPromise.reject(new ks(e)),
            this._sentRequestsQueue.delete(r)
        }
        ),
        this._removeSocketListeners()
    }
}
const ud = Object.freeze(Object.defineProperty({
    __proto__: null,
    ChunkResponseParser: ad,
    Eip1193Provider: cd,
    EventEmitter: xo,
    SocketProvider: dd,
    Web3DeferredPromise: xi,
    asciiToHex: Wc,
    bytesToHex: X,
    bytesToUint8Array: at,
    checkAddressCheckSum: Gp,
    compareBlockNumbers: Xp,
    convert: _i,
    convertScalarValue: nr,
    encodePacked: Eo,
    ethUnitMap: _o,
    format: I,
    fromAscii: Np,
    fromDecimal: Ap,
    fromTwosComplement: Jp,
    fromUtf8: Vc,
    fromWei: Lp,
    getStorageSlotNumForLongString: i0,
    hexToAscii: Zc,
    hexToBytes: ue,
    hexToNumber: Rr,
    hexToNumberString: Pp,
    hexToString: Cp,
    hexToUtf8: Fi,
    isAddress: Up,
    isBatchRequest: Ze,
    isBatchResponse: Ir,
    isBloom: qp,
    isContractAddressInBloom: Wp,
    isContractInitOptions: Ot,
    isDataFormat: ft,
    isHex: Fp,
    isHexStrict: Dp,
    isInBloom: zp,
    isNullish: z,
    isPromise: td,
    isResponseRpcError: ko,
    isResponseWithError: yt,
    isResponseWithNotification: qi,
    isResponseWithResult: gt,
    isSubscriptionResult: id,
    isTopic: Zp,
    isTopicInBloom: Kp,
    isUserEthereumAddressInBloom: Vp,
    isValidResponse: Ao,
    jsonRpc: c0,
    keccak256: xr,
    keccak256Wrapper: xr,
    leftPad: wr,
    mergeDeep: qt,
    numberToHex: He,
    padLeft: jn,
    padRight: Xc,
    pollTillDefined: a0,
    pollTillDefinedAndReturnIntervalId: Io,
    processSolidityEncodePackedArgs: ed,
    randomBytes: Er,
    randomHex: o0,
    rejectIfConditionAtInterval: rd,
    rejectIfTimeout: To,
    rightPad: Jc,
    setRequestIdStart: sd,
    sha3: Br,
    sha3Raw: je,
    soliditySha3: n0,
    soliditySha3Raw: r0,
    stringToHex: Rp,
    toAscii: Op,
    toBatchPayload: Po,
    toBigInt: Zt,
    toBool: Kc,
    toChecksumAddress: ct,
    toDecimal: kp,
    toHex: jt,
    toNumber: Ne,
    toPayload: ln,
    toTwosComplement: Yc,
    toUtf8: Bp,
    toWei: Mp,
    uint8ArrayConcat: Re,
    uint8ArrayEquals: Gi,
    utf8ToBytes: wo,
    utf8ToHex: et,
    uuidV4: So,
    validateResponse: wi,
    waitWithTimeout: nd
}, Symbol.toStringTag, {
    value: "Module"
}));
class zi {
    constructor() {
        this._emitter = new xo
    }
    on(e, n) {
        this._emitter.on(e, n)
    }
    once(e, n) {
        this._emitter.once(e, n)
    }
    off(e, n) {
        this._emitter.off(e, n)
    }
    emit(e, n) {
        this._emitter.emit(e, n)
    }
    listenerCount(e) {
        return this._emitter.listenerCount(e)
    }
    listeners(e) {
        return this._emitter.listeners(e)
    }
    eventNames() {
        return this._emitter.eventNames()
    }
    removeAllListeners() {
        return this._emitter.removeAllListeners()
    }
    setMaxListenerWarningThreshold(e) {
        this._emitter.setMaxListeners(e)
    }
    getMaxListeners() {
        return this._emitter.getMaxListeners()
    }
}
var fn;
(function(t) {
    t.CONFIG_CHANGE = "CONFIG_CHANGE"
}
)(fn || (fn = {}));
class l0 extends zi {
    constructor(e) {
        super(),
        this.config = {
            handleRevert: !1,
            defaultAccount: void 0,
            defaultBlock: "latest",
            transactionBlockTimeout: 50,
            transactionConfirmationBlocks: 24,
            transactionPollingInterval: 1e3,
            transactionPollingTimeout: 750 * 1e3,
            transactionReceiptPollingInterval: void 0,
            transactionSendTimeout: 750 * 1e3,
            transactionConfirmationPollingInterval: void 0,
            blockHeaderTimeout: 10,
            maxListenersWarningThreshold: 100,
            contractDataInputFill: "data",
            defaultNetworkId: void 0,
            defaultChain: "mainnet",
            defaultHardfork: "london",
            defaultCommon: void 0,
            defaultTransactionType: "0x2",
            defaultMaxPriorityFeePerGas: jt(25e8),
            enableExperimentalFeatures: {
                useSubscriptionWhenCheckingBlockTimeout: !1,
                useRpcCallSpecification: !1
            },
            transactionBuilder: void 0,
            transactionTypeParser: void 0
        },
        this.setConfig(e ?? {})
    }
    setConfig(e) {
        const n = Object.keys(e);
        for (const r of n)
            this._triggerConfigChange(r, e[r]);
        Object.assign(this.config, e)
    }
    get handleRevert() {
        return this.config.handleRevert
    }
    set handleRevert(e) {
        this._triggerConfigChange("handleRevert", e),
        this.config.handleRevert = e
    }
    get contractDataInputFill() {
        return this.config.contractDataInputFill
    }
    set contractDataInputFill(e) {
        this._triggerConfigChange("contractDataInputFill", e),
        this.config.contractDataInputFill = e
    }
    get defaultAccount() {
        return this.config.defaultAccount
    }
    set defaultAccount(e) {
        this._triggerConfigChange("defaultAccount", e),
        this.config.defaultAccount = e
    }
    get defaultBlock() {
        return this.config.defaultBlock
    }
    set defaultBlock(e) {
        this._triggerConfigChange("defaultBlock", e),
        this.config.defaultBlock = e
    }
    get transactionSendTimeout() {
        return this.config.transactionSendTimeout
    }
    set transactionSendTimeout(e) {
        this._triggerConfigChange("transactionSendTimeout", e),
        this.config.transactionSendTimeout = e
    }
    get transactionBlockTimeout() {
        return this.config.transactionBlockTimeout
    }
    set transactionBlockTimeout(e) {
        this._triggerConfigChange("transactionBlockTimeout", e),
        this.config.transactionBlockTimeout = e
    }
    get transactionConfirmationBlocks() {
        return this.config.transactionConfirmationBlocks
    }
    set transactionConfirmationBlocks(e) {
        this._triggerConfigChange("transactionConfirmationBlocks", e),
        this.config.transactionConfirmationBlocks = e
    }
    get transactionPollingInterval() {
        return this.config.transactionPollingInterval
    }
    set transactionPollingInterval(e) {
        this._triggerConfigChange("transactionPollingInterval", e),
        this.config.transactionPollingInterval = e,
        this.transactionReceiptPollingInterval = e,
        this.transactionConfirmationPollingInterval = e
    }
    get transactionPollingTimeout() {
        return this.config.transactionPollingTimeout
    }
    set transactionPollingTimeout(e) {
        this._triggerConfigChange("transactionPollingTimeout", e),
        this.config.transactionPollingTimeout = e
    }
    get transactionReceiptPollingInterval() {
        return this.config.transactionReceiptPollingInterval
    }
    set transactionReceiptPollingInterval(e) {
        this._triggerConfigChange("transactionReceiptPollingInterval", e),
        this.config.transactionReceiptPollingInterval = e
    }
    get transactionConfirmationPollingInterval() {
        return this.config.transactionConfirmationPollingInterval
    }
    set transactionConfirmationPollingInterval(e) {
        this._triggerConfigChange("transactionConfirmationPollingInterval", e),
        this.config.transactionConfirmationPollingInterval = e
    }
    get blockHeaderTimeout() {
        return this.config.blockHeaderTimeout
    }
    set blockHeaderTimeout(e) {
        this._triggerConfigChange("blockHeaderTimeout", e),
        this.config.blockHeaderTimeout = e
    }
    get enableExperimentalFeatures() {
        return this.config.enableExperimentalFeatures
    }
    set enableExperimentalFeatures(e) {
        this._triggerConfigChange("enableExperimentalFeatures", e),
        this.config.enableExperimentalFeatures = e
    }
    get maxListenersWarningThreshold() {
        return this.config.maxListenersWarningThreshold
    }
    set maxListenersWarningThreshold(e) {
        this._triggerConfigChange("maxListenersWarningThreshold", e),
        this.setMaxListenerWarningThreshold(e),
        this.config.maxListenersWarningThreshold = e
    }
    get defaultNetworkId() {
        return this.config.defaultNetworkId
    }
    set defaultNetworkId(e) {
        this._triggerConfigChange("defaultNetworkId", e),
        this.config.defaultNetworkId = e
    }
    get defaultChain() {
        return this.config.defaultChain
    }
    set defaultChain(e) {
        if (!z(this.config.defaultCommon) && !z(this.config.defaultCommon.baseChain) && e !== this.config.defaultCommon.baseChain)
            throw new va(this.config.defaultChain,e);
        this._triggerConfigChange("defaultChain", e),
        this.config.defaultChain = e
    }
    get defaultHardfork() {
        return this.config.defaultHardfork
    }
    set defaultHardfork(e) {
        if (!z(this.config.defaultCommon) && !z(this.config.defaultCommon.hardfork) && e !== this.config.defaultCommon.hardfork)
            throw new ya(this.config.defaultCommon.hardfork,e);
        this._triggerConfigChange("defaultHardfork", e),
        this.config.defaultHardfork = e
    }
    get defaultCommon() {
        return this.config.defaultCommon
    }
    set defaultCommon(e) {
        if (!z(this.config.defaultHardfork) && !z(e) && !z(e.hardfork) && this.config.defaultHardfork !== e.hardfork)
            throw new ya(this.config.defaultHardfork,e.hardfork);
        if (!z(this.config.defaultChain) && !z(e) && !z(e.baseChain) && this.config.defaultChain !== e.baseChain)
            throw new va(this.config.defaultChain,e.baseChain);
        this._triggerConfigChange("defaultCommon", e),
        this.config.defaultCommon = e
    }
    get defaultTransactionType() {
        return this.config.defaultTransactionType
    }
    set defaultTransactionType(e) {
        this._triggerConfigChange("defaultTransactionType", e),
        this.config.defaultTransactionType = e
    }
    get defaultMaxPriorityFeePerGas() {
        return this.config.defaultMaxPriorityFeePerGas
    }
    set defaultMaxPriorityFeePerGas(e) {
        this._triggerConfigChange("defaultMaxPriorityFeePerGas", e),
        this.config.defaultMaxPriorityFeePerGas = e
    }
    get transactionBuilder() {
        return this.config.transactionBuilder
    }
    set transactionBuilder(e) {
        this._triggerConfigChange("transactionBuilder", e),
        this.config.transactionBuilder = e
    }
    get transactionTypeParser() {
        return this.config.transactionTypeParser
    }
    set transactionTypeParser(e) {
        this._triggerConfigChange("transactionTypeParser", e),
        this.config.transactionTypeParser = e
    }
    _triggerConfigChange(e, n) {
        this.emit(fn.CONFIG_CHANGE, {
            name: e,
            oldValue: this.config[e],
            newValue: n
        })
    }
}
var f0 = Fu();
const h0 = cc(f0);
var m0 = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class Ro extends Pr {
    constructor(e, n) {
        if (super(),
        !Ro.validateClientUrl(e))
            throw new Ps(e);
        this.clientUrl = e,
        this.httpProviderOptions = n
    }
    static validateClientUrl(e) {
        return typeof e == "string" ? /^http(s)?:\/\//i.test(e) : !1
    }
    getStatus() {
        throw new dt
    }
    supportsSubscriptions() {
        return !1
    }
    request(e, n) {
        var r;
        return m0(this, void 0, void 0, function*() {
            const i = Object.assign(Object.assign({}, (r = this.httpProviderOptions) === null || r === void 0 ? void 0 : r.providerOptions), n)
              , s = yield h0(this.clientUrl, Object.assign(Object.assign({}, i), {
                method: "POST",
                headers: Object.assign(Object.assign({}, i.headers), {
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(e)
            }));
            if (!s.ok)
                throw new ht(yield s.json());
            return yield s.json()
        })
    }
    on() {
        throw new dt
    }
    removeListener() {
        throw new dt
    }
    once() {
        throw new dt
    }
    removeAllListeners() {
        throw new dt
    }
    connect() {
        throw new dt
    }
    disconnect() {
        throw new dt
    }
    reset() {
        throw new dt
    }
    reconnect() {
        throw new dt
    }
}
var An = null;
typeof WebSocket < "u" ? An = WebSocket : typeof MozWebSocket < "u" ? An = MozWebSocket : typeof global < "u" ? An = global.WebSocket || global.MozWebSocket : typeof window < "u" ? An = window.WebSocket || window.MozWebSocket : typeof self < "u" && (An = self.WebSocket || self.MozWebSocket);
const p0 = An;
class g0 extends dd {
    constructor(e, n, r) {
        super(e, n, r)
    }
    _validateProviderPath(e) {
        return typeof e == "string" ? /^ws(s)?:\/\//i.test(e) : !1
    }
    getStatus() {
        if (this._socketConnection && !z(this._socketConnection))
            switch (this._socketConnection.readyState) {
            case this._socketConnection.CONNECTING:
                return "connecting";
            case this._socketConnection.OPEN:
                return "connected";
            default:
                return "disconnected"
            }
        return "disconnected"
    }
    _openSocketConnection() {
        this._socketConnection = new p0(this._socketPath,void 0,this._socketOptions && Object.keys(this._socketOptions).length === 0 ? void 0 : this._socketOptions)
    }
    _closeSocketConnection(e, n) {
        var r;
        (r = this._socketConnection) === null || r === void 0 || r.close(e, n)
    }
    _sendToSocket(e) {
        var n;
        if (this.getStatus() === "disconnected")
            throw new ks;
        (n = this._socketConnection) === null || n === void 0 || n.send(JSON.stringify(e))
    }
    _parseResponses(e) {
        return this.chunkResponseParser.parseResponse(e.data)
    }
    _addSocketListeners() {
        var e, n, r, i;
        (e = this._socketConnection) === null || e === void 0 || e.addEventListener("open", this._onOpenHandler),
        (n = this._socketConnection) === null || n === void 0 || n.addEventListener("message", this._onMessageHandler),
        (r = this._socketConnection) === null || r === void 0 || r.addEventListener("close", s => this._onCloseHandler(s)),
        (i = this._socketConnection) === null || i === void 0 || i.addEventListener("error", this._onErrorHandler)
    }
    _removeSocketListeners() {
        var e, n, r;
        (e = this._socketConnection) === null || e === void 0 || e.removeEventListener("message", this._onMessageHandler),
        (n = this._socketConnection) === null || n === void 0 || n.removeEventListener("open", this._onOpenHandler),
        (r = this._socketConnection) === null || r === void 0 || r.removeEventListener("close", this._onCloseHandler)
    }
    _onCloseEvent(e) {
        var n;
        if (this._reconnectOptions.autoReconnect && (![1e3, 1001].includes(e.code) || !e.wasClean)) {
            this._reconnect();
            return
        }
        this._clearQueues(e),
        this._removeSocketListeners(),
        this._onDisconnect(e.code, e.reason),
        (n = this._socketConnection) === null || n === void 0 || n.removeEventListener("error", this._onErrorHandler)
    }
}
const ld = t => Pr.isWeb3Provider(t)
  , fd = t => typeof t != "string" && "request"in t && t.request.constructor.name === "Function"
  , hd = t => typeof t != "string" && "request"in t && t.request.constructor.name === "AsyncFunction"
  , md = t => typeof t != "string" && "send"in t
  , pd = t => typeof t != "string" && "sendAsync"in t
  , Ei = t => t && (ld(t) || hd(t) || fd(t) || pd(t) || md(t))
  , y0 = t => t && "supportsSubscriptions"in t ? t.supportsSubscriptions() : !!(t && typeof t != "string" && "on"in t);
var ms = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
}, Dn;
(function(t) {
    t.PROVIDER_CHANGED = "PROVIDER_CHANGED",
    t.BEFORE_PROVIDER_CHANGE = "BEFORE_PROVIDER_CHANGE"
}
)(Dn || (Dn = {}));
const Ra = {
    HttpProvider: Ro,
    WebsocketProvider: g0
};
class tn extends zi {
    constructor(e, n) {
        super(),
        z(e) || this.setProvider(e),
        this.useRpcCallSpecification = n
    }
    static get providers() {
        return Ra
    }
    get provider() {
        return this._provider
    }
    get providers() {
        return Ra
    }
    setProvider(e) {
        let n;
        if (e && typeof e == "string" && this.providers)
            if (/^http(s)?:\/\//i.test(e))
                n = new this.providers.HttpProvider(e);
            else if (/^ws(s)?:\/\//i.test(e))
                n = new this.providers.WebsocketProvider(e);
            else
                throw new jr(`Can't autodetect provider for "${e}"`);
        else
            z(e) ? n = void 0 : n = e;
        return this.emit(Dn.BEFORE_PROVIDER_CHANGE, this._provider),
        this._provider = n,
        this.emit(Dn.PROVIDER_CHANGED, this._provider),
        !0
    }
    send(e) {
        return ms(this, void 0, void 0, function*() {
            const n = yield this._sendRequest(e);
            if (gt(n))
                return n.result;
            throw new ht(n)
        })
    }
    sendBatch(e) {
        return ms(this, void 0, void 0, function*() {
            return yield this._sendRequest(e)
        })
    }
    _sendRequest(e) {
        return ms(this, void 0, void 0, function*() {
            const {provider: n} = this;
            if (z(n))
                throw new jr("Provider not available. Use `.setProvider` or `.provider=` to initialize the provider.");
            const r = Ze(e) ? Po(e) : ln(e);
            if (ld(n)) {
                let i;
                try {
                    i = yield n.request(r)
                } catch (s) {
                    i = s
                }
                return this._processJsonRpcResponse(r, i, {
                    legacy: !1,
                    error: !1
                })
            }
            if (hd(n))
                return n.request(r).then(i => this._processJsonRpcResponse(r, i, {
                    legacy: !0,
                    error: !1
                })).catch(i => this._processJsonRpcResponse(r, i, {
                    legacy: !0,
                    error: !0
                }));
            if (fd(n))
                return new Promise( (i, s) => {
                    const o = d => s(this._processJsonRpcResponse(r, d, {
                        legacy: !0,
                        error: !0
                    }))
                      , a = d => i(this._processJsonRpcResponse(r, d, {
                        legacy: !0,
                        error: !1
                    }))
                      , u = n.request(r, (d, c) => d ? o(d) : a(c));
                    td(u) && u.then(a).catch(o)
                }
                );
            if (md(n))
                return new Promise( (i, s) => {
                    n.send(r, (o, a) => {
                        if (o)
                            return s(this._processJsonRpcResponse(r, o, {
                                legacy: !0,
                                error: !0
                            }));
                        if (z(a))
                            throw new ht("",'Got a "nullish" response from provider.');
                        return i(this._processJsonRpcResponse(r, a, {
                            legacy: !0,
                            error: !1
                        }))
                    }
                    )
                }
                );
            if (pd(n))
                return n.sendAsync(r).then(i => this._processJsonRpcResponse(r, i, {
                    legacy: !0,
                    error: !1
                })).catch(i => this._processJsonRpcResponse(r, i, {
                    legacy: !0,
                    error: !0
                }));
            throw new jr("Provider does not have a request or send method to use.")
        })
    }
    _processJsonRpcResponse(e, n, {legacy: r, error: i}) {
        if (z(n))
            return this._buildResponse(e, null, i);
        if (yt(n)) {
            if (this.useRpcCallSpecification && ko(n)) {
                const s = n;
                if (Ae.get(s.error.code)) {
                    const o = Ae.get(s.error.code).error;
                    throw new o(s)
                } else
                    throw new De(s)
            } else if (!tn._isReverted(n))
                throw new ar(n,e)
        }
        if (gt(n))
            return n;
        if (n instanceof Error)
            throw tn._isReverted(n),
            n;
        if (!r && Ze(e) && Ir(n) || r && !i && Ze(e))
            return n;
        if (r && i && Ze(e))
            throw n;
        if (r && !yt(n) && !gt(n))
            return this._buildResponse(e, n, i);
        throw Ze(e) && !Array.isArray(n) ? new ht(n,"Got normal response for a batch request.") : !Ze(e) && Array.isArray(n) ? new ht(n,"Got batch response for a normal request.") : (yt(n) || gt(n)) && !Ze(e) && n.id && e.id !== n.id ? new ar(n) : new ht(n,"Invalid response")
    }
    static _isReverted(e) {
        let n;
        if (yt(e) ? n = e.error : e instanceof Error && (n = e),
        n != null && n.message.includes("revert"))
            throw new Qt(n);
        return !1
    }
    _buildResponse(e, n, r) {
        const i = {
            jsonrpc: "2.0",
            id: Ze(e) ? e[0].id : "id"in e ? e.id : null
        };
        return r ? Object.assign(Object.assign({}, i), {
            error: n
        }) : Object.assign(Object.assign({}, i), {
            result: n
        })
    }
}
var Jn = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class js {
    constructor(e, n, r=!1) {
        this.requestManager = e,
        this.registeredSubscriptions = n,
        this.tolerateUnlinkedSubscription = r,
        this._subscriptions = new Map,
        this.requestManager.on(Dn.BEFORE_PROVIDER_CHANGE, () => Jn(this, void 0, void 0, function*() {
            yield this.unsubscribe()
        })),
        this.requestManager.on(Dn.PROVIDER_CHANGED, () => {
            this.clear(),
            this.listenToProviderEvents()
        }
        ),
        this.listenToProviderEvents()
    }
    listenToProviderEvents() {
        const e = this.requestManager.provider;
        !this.requestManager.provider || typeof (e == null ? void 0 : e.supportsSubscriptions) == "function" && !(e != null && e.supportsSubscriptions()) || typeof this.requestManager.provider.on == "function" && (typeof this.requestManager.provider.request == "function" ? this.requestManager.provider.on("message", n => this.messageListener(n)) : e.on("data", n => this.messageListener(n)))
    }
    messageListener(e) {
        var n, r, i;
        if (!e)
            throw new Ke("Should not call messageListener with no data. Type was");
        const s = ((n = e.params) === null || n === void 0 ? void 0 : n.subscription) || ((r = e.data) === null || r === void 0 ? void 0 : r.subscription) || ((i = e.id) === null || i === void 0 ? void 0 : i.toString(16));
        if (s) {
            const o = this._subscriptions.get(s);
            o == null || o.processSubscriptionData(e)
        }
    }
    subscribe(e, n, r=O) {
        return Jn(this, void 0, void 0, function*() {
            const i = this.registeredSubscriptions[e];
            if (!i)
                throw new Ke("Invalid subscription type");
            const s = new i(n ?? void 0,{
                subscriptionManager: this,
                returnFormat: r
            });
            return yield this.addSubscription(s),
            s
        })
    }
    get subscriptions() {
        return this._subscriptions
    }
    addSubscription(e) {
        return Jn(this, void 0, void 0, function*() {
            if (!this.requestManager.provider)
                throw new jr("Provider not available");
            if (!this.supportsSubscriptions())
                throw new Ke("The current provider does not support subscriptions");
            if (e.id && this._subscriptions.has(e.id))
                throw new Ke(`Subscription with id "${e.id}" already exists`);
            if (yield e.sendSubscriptionRequest(),
            z(e.id))
                throw new Ke("Subscription is not subscribed yet.");
            return this._subscriptions.set(e.id, e),
            e.id
        })
    }
    removeSubscription(e) {
        return Jn(this, void 0, void 0, function*() {
            const {id: n} = e;
            if (z(n))
                throw new Ke("Subscription is not subscribed yet. Or, had already been unsubscribed but not through the Subscription Manager.");
            if (!this._subscriptions.has(n) && !this.tolerateUnlinkedSubscription)
                throw new Ke(`Subscription with id "${n.toString()}" does not exists`);
            return yield e.sendUnsubscribeRequest(),
            this._subscriptions.delete(n),
            n
        })
    }
    unsubscribe(e) {
        return Jn(this, void 0, void 0, function*() {
            const n = [];
            for (const [r,i] of this.subscriptions.entries())
                (!e || typeof e == "function" && e({
                    id: r,
                    sub: i
                })) && n.push(this.removeSubscription(i));
            return Promise.all(n)
        })
    }
    clear() {
        this._subscriptions.clear()
    }
    supportsSubscriptions() {
        return z(this.requestManager.provider) ? !1 : y0(this.requestManager.provider)
    }
}
var Yn = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class Cr extends zi {
    constructor(e, n) {
        var r;
        super(),
        this.args = e;
        const {requestManager: i} = n
          , {subscriptionManager: s} = n;
        if (i && s)
            throw new Ke("Only requestManager or subscriptionManager should be provided at Subscription constructor");
        if (!i && !s)
            throw new Ke("Either requestManager or subscriptionManager should be provided at Subscription constructor");
        i ? this._subscriptionManager = new js(i,{},!0) : this._subscriptionManager = s,
        this._returnFormat = (r = n == null ? void 0 : n.returnFormat) !== null && r !== void 0 ? r : O
    }
    get id() {
        return this._id
    }
    get lastBlock() {
        return this._lastBlock
    }
    subscribe() {
        return Yn(this, void 0, void 0, function*() {
            return this._subscriptionManager.addSubscription(this)
        })
    }
    processSubscriptionData(e) {
        var n, r;
        e != null && e.data ? this._processSubscriptionResult((r = (n = e == null ? void 0 : e.data) === null || n === void 0 ? void 0 : n.result) !== null && r !== void 0 ? r : e == null ? void 0 : e.data) : e && qi(e) && this._processSubscriptionResult(e == null ? void 0 : e.params.result)
    }
    sendSubscriptionRequest() {
        return Yn(this, void 0, void 0, function*() {
            return this._id = yield this._subscriptionManager.requestManager.send({
                method: "eth_subscribe",
                params: this._buildSubscriptionParams()
            }),
            this.emit("connected", this._id),
            this._id
        })
    }
    get returnFormat() {
        return this._returnFormat
    }
    get subscriptionManager() {
        return this._subscriptionManager
    }
    resubscribe() {
        return Yn(this, void 0, void 0, function*() {
            yield this.unsubscribe(),
            yield this.subscribe()
        })
    }
    unsubscribe() {
        return Yn(this, void 0, void 0, function*() {
            this.id && (yield this._subscriptionManager.removeSubscription(this))
        })
    }
    sendUnsubscribeRequest() {
        return Yn(this, void 0, void 0, function*() {
            yield this._subscriptionManager.requestManager.send({
                method: "eth_unsubscribe",
                params: [this.id]
            }),
            this._id = void 0
        })
    }
    formatSubscriptionResult(e) {
        return e
    }
    _processSubscriptionResult(e) {
        this.emit("data", this.formatSubscriptionResult(e))
    }
    _processSubscriptionError(e) {
        this.emit("error", e)
    }
    _buildSubscriptionParams() {
        throw new Error("Implement in the child class")
    }
}
var xn = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class Ii extends bp {
    constructor() {
        super(...arguments),
        this._addressMap = new Map,
        this._defaultKeyName = "web3js_wallet"
    }
    static getStorage() {
        let e;
        try {
            e = window.localStorage;
            const n = "__storage_test__";
            return e.setItem(n, n),
            e.removeItem(n),
            e
        } catch (n) {
            return n && (n.code === 22 || n.code === 1014 || n.name === "QuotaExceededError" || n.name === "NS_ERROR_DOM_QUOTA_REACHED") && !b(e) && e.length !== 0 ? e : void 0
        }
    }
    create(e) {
        for (let n = 0; n < e; n += 1)
            this.add(this._accountProvider.create());
        return this
    }
    add(e) {
        var n;
        if (typeof e == "string")
            return this.add(this._accountProvider.privateKeyToAccount(e));
        let r = this.length;
        return this.get(e.address) && (console.warn(`Account ${e.address.toLowerCase()} already exists.`),
        r = (n = this._addressMap.get(e.address.toLowerCase())) !== null && n !== void 0 ? n : r),
        this._addressMap.set(e.address.toLowerCase(), r),
        this[r] = e,
        this
    }
    get(e) {
        if (typeof e == "string") {
            const n = this._addressMap.get(e.toLowerCase());
            return b(n) ? void 0 : this[n]
        }
        return this[e]
    }
    remove(e) {
        if (typeof e == "string") {
            const n = this._addressMap.get(e.toLowerCase());
            return b(n) ? !1 : (this._addressMap.delete(e.toLowerCase()),
            this.splice(n, 1),
            !0)
        }
        return this[e] ? (this.splice(e, 1),
        !0) : !1
    }
    clear() {
        return this._addressMap.clear(),
        this.length = 0,
        this
    }
    encrypt(e, n) {
        return xn(this, void 0, void 0, function*() {
            return Promise.all(this.map(r => xn(this, void 0, void 0, function*() {
                return r.encrypt(e, n)
            })))
        })
    }
    decrypt(e, n, r) {
        return xn(this, void 0, void 0, function*() {
            const i = yield Promise.all(e.map(s => xn(this, void 0, void 0, function*() {
                return this._accountProvider.decrypt(s, n, r)
            })));
            for (const s of i)
                this.add(s);
            return this
        })
    }
    save(e, n) {
        return xn(this, void 0, void 0, function*() {
            const r = Ii.getStorage();
            if (!r)
                throw new Error("Local storage not available.");
            return r.setItem(n ?? this._defaultKeyName, JSON.stringify(yield this.encrypt(e))),
            !0
        })
    }
    load(e, n) {
        return xn(this, void 0, void 0, function*() {
            const r = Ii.getStorage();
            if (!r)
                throw new Error("Local storage not available.");
            const i = r.getItem(n ?? this._defaultKeyName);
            return i && (yield this.decrypt(JSON.parse(i) || [], e)),
            this
        })
    }
}
const it = {
    web: Dr
};
function gd(t, e, n) {
    if (!n.startsWith("aes-"))
        throw new Error(`AES submodule doesn't support mode ${n}`);
    if (e.length !== 16)
        throw new Error("AES: wrong IV length");
    if (n.startsWith("aes-128") && t.length !== 16 || n.startsWith("aes-256") && t.length !== 32)
        throw new Error("AES: wrong key length")
}
async function yd(t, e, n) {
    if (!it.web)
        throw new Error("Browser crypto not available.");
    let r;
    if (["aes-128-cbc", "aes-256-cbc"].includes(t) && (r = "cbc"),
    ["aes-128-ctr", "aes-256-ctr"].includes(t) && (r = "ctr"),
    !r)
        throw new Error("AES: unsupported mode");
    return [await it.web.subtle.importKey("raw", e, {
        name: `AES-${r.toUpperCase()}`,
        length: e.length * 8
    }, !0, ["encrypt", "decrypt"]), {
        name: `aes-${r}`,
        iv: n,
        counter: n,
        length: 128
    }]
}
async function Bo(t, e, n, r="aes-128-ctr", i=!0) {
    if (gd(e, n, r),
    it.web) {
        const [s,o] = await yd(r, e, n)
          , a = await it.web.subtle.encrypt(o, s, t);
        let u = new Uint8Array(a);
        return !i && o.name === "aes-cbc" && !(t.length % 16) && (u = u.slice(0, -16)),
        u
    } else if (it.node) {
        const s = it.node.createCipheriv(r, e, n);
        return s.setAutoPadding(i),
        oi(s.update(t), s.final())
    } else
        throw new Error("The environment doesn't have AES module")
}
async function v0(t, e, n, r) {
    const i = t.slice(-16);
    for (let o = 0; o < 16; o++)
        i[o] ^= n[o] ^ 16;
    return (await Bo(i, e, n, r)).slice(0, 16)
}
async function b0(t, e, n, r="aes-128-ctr", i=!0) {
    if (gd(e, n, r),
    it.web) {
        const [s,o] = await yd(r, e, n);
        if (!i && o.name === "aes-cbc") {
            const d = await v0(t, e, n, r);
            t = oi(t, d)
        }
        const a = await it.web.subtle.decrypt(o, s, t)
          , u = new Uint8Array(a);
        if (o.name === "aes-cbc") {
            const d = await Bo(u, e, n, r);
            if (!gm(d, t))
                throw new Error("AES: wrong padding")
        }
        return u
    } else if (it.node) {
        const s = it.node.createDecipheriv(r, e, n);
        return s.setAutoPadding(i),
        oi(s.update(t), s.final())
    } else
        throw new Error("The environment doesn't have AES module")
}
class vd extends fo {
    constructor(e, n) {
        super(),
        this.finished = !1,
        this.destroyed = !1,
        le.hash(e);
        const r = sn(n);
        if (this.iHash = e.create(),
        typeof this.iHash.update != "function")
            throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen,
        this.outputLen = this.iHash.outputLen;
        const i = this.blockLen
          , s = new Uint8Array(i);
        s.set(r.length > i ? e.create().update(r).digest() : r);
        for (let o = 0; o < s.length; o++)
            s[o] ^= 54;
        this.iHash.update(s),
        this.oHash = e.create();
        for (let o = 0; o < s.length; o++)
            s[o] ^= 106;
        this.oHash.update(s),
        s.fill(0)
    }
    update(e) {
        return le.exists(this),
        this.iHash.update(e),
        this
    }
    digestInto(e) {
        le.exists(this),
        le.bytes(e, this.outputLen),
        this.finished = !0,
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy()
    }
    digest() {
        const e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e),
        e
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        const {oHash: n, iHash: r, finished: i, destroyed: s, blockLen: o, outputLen: a} = this;
        return e = e,
        e.finished = i,
        e.destroyed = s,
        e.blockLen = o,
        e.outputLen = a,
        e.oHash = n._cloneInto(e.oHash),
        e.iHash = r._cloneInto(e.iHash),
        e
    }
    destroy() {
        this.destroyed = !0,
        this.oHash.destroy(),
        this.iHash.destroy()
    }
}
const Co = (t, e, n) => new vd(t,e).update(n).digest();
Co.create = (t, e) => new vd(t,e);
function _0(t, e, n, r) {
    le.hash(t);
    const i = Ic({
        dkLen: 32,
        asyncTick: 10
    }, r)
      , {c: s, dkLen: o, asyncTick: a} = i;
    if (le.number(s),
    le.number(o),
    le.number(a),
    s < 1)
        throw new Error("PBKDF2: iterations (c) should be >= 1");
    const u = sn(e)
      , d = sn(n)
      , c = new Uint8Array(o)
      , l = Co.create(t, u)
      , f = l._cloneInto().update(d);
    return {
        c: s,
        dkLen: o,
        asyncTick: a,
        DK: c,
        PRF: l,
        PRFSalt: f
    }
}
function w0(t, e, n, r, i) {
    return t.destroy(),
    e.destroy(),
    r && r.destroy(),
    i.fill(0),
    n
}
function No(t, e, n, r) {
    const {c: i, dkLen: s, DK: o, PRF: a, PRFSalt: u} = _0(t, e, n, r);
    let d;
    const c = new Uint8Array(4)
      , l = Gr(c)
      , f = new Uint8Array(a.outputLen);
    for (let h = 1, p = 0; p < s; h++,
    p += a.outputLen) {
        const m = o.subarray(p, p + a.outputLen);
        l.setInt32(0, h, !1),
        (d = u._cloneInto(d)).update(c).digestInto(f),
        m.set(f.subarray(0, m.length));
        for (let g = 1; g < i; g++) {
            a._cloneInto(d).update(f).digestInto(f);
            for (let y = 0; y < m.length; y++)
                m[y] ^= f[y]
        }
    }
    return w0(a, u, o, d, f)
}
function x0(t, e, n, r) {
    if (typeof t.setBigUint64 == "function")
        return t.setBigUint64(e, n, r);
    const i = BigInt(32)
      , s = BigInt(4294967295)
      , o = Number(n >> i & s)
      , a = Number(n & s)
      , u = r ? 4 : 0
      , d = r ? 0 : 4;
    t.setUint32(e + u, o, r),
    t.setUint32(e + d, a, r)
}
class bd extends fo {
    constructor(e, n, r, i) {
        super(),
        this.blockLen = e,
        this.outputLen = n,
        this.padOffset = r,
        this.isLE = i,
        this.finished = !1,
        this.length = 0,
        this.pos = 0,
        this.destroyed = !1,
        this.buffer = new Uint8Array(e),
        this.view = Gr(this.buffer)
    }
    update(e) {
        le.exists(this);
        const {view: n, buffer: r, blockLen: i} = this;
        e = sn(e);
        const s = e.length;
        for (let o = 0; o < s; ) {
            const a = Math.min(i - this.pos, s - o);
            if (a === i) {
                const u = Gr(e);
                for (; i <= s - o; o += i)
                    this.process(u, o);
                continue
            }
            r.set(e.subarray(o, o + a), this.pos),
            this.pos += a,
            o += a,
            this.pos === i && (this.process(n, 0),
            this.pos = 0)
        }
        return this.length += e.length,
        this.roundClean(),
        this
    }
    digestInto(e) {
        le.exists(this),
        le.output(e, this),
        this.finished = !0;
        const {buffer: n, view: r, blockLen: i, isLE: s} = this;
        let {pos: o} = this;
        n[o++] = 128,
        this.buffer.subarray(o).fill(0),
        this.padOffset > i - o && (this.process(r, 0),
        o = 0);
        for (let l = o; l < i; l++)
            n[l] = 0;
        x0(r, i - 8, BigInt(this.length * 8), s),
        this.process(r, 0);
        const a = Gr(e)
          , u = this.outputLen;
        if (u % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
        const d = u / 4
          , c = this.get();
        if (d > c.length)
            throw new Error("_sha2: outputLen bigger than state");
        for (let l = 0; l < d; l++)
            a.setUint32(4 * l, c[l], s)
    }
    digest() {
        const {buffer: e, outputLen: n} = this;
        this.digestInto(e);
        const r = e.slice(0, n);
        return this.destroy(),
        r
    }
    _cloneInto(e) {
        e || (e = new this.constructor),
        e.set(...this.get());
        const {blockLen: n, buffer: r, length: i, finished: s, destroyed: o, pos: a} = this;
        return e.length = i,
        e.pos = a,
        e.finished = s,
        e.destroyed = o,
        i % n && e.buffer.set(r),
        e
    }
}
const E0 = (t, e, n) => t & e ^ ~t & n
  , I0 = (t, e, n) => t & e ^ t & n ^ e & n
  , T0 = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
  , At = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
  , Pt = new Uint32Array(64);
class _d extends bd {
    constructor() {
        super(64, 32, 8, !1),
        this.A = At[0] | 0,
        this.B = At[1] | 0,
        this.C = At[2] | 0,
        this.D = At[3] | 0,
        this.E = At[4] | 0,
        this.F = At[5] | 0,
        this.G = At[6] | 0,
        this.H = At[7] | 0
    }
    get() {
        const {A: e, B: n, C: r, D: i, E: s, F: o, G: a, H: u} = this;
        return [e, n, r, i, s, o, a, u]
    }
    set(e, n, r, i, s, o, a, u) {
        this.A = e | 0,
        this.B = n | 0,
        this.C = r | 0,
        this.D = i | 0,
        this.E = s | 0,
        this.F = o | 0,
        this.G = a | 0,
        this.H = u | 0
    }
    process(e, n) {
        for (let l = 0; l < 16; l++,
        n += 4)
            Pt[l] = e.getUint32(n, !1);
        for (let l = 16; l < 64; l++) {
            const f = Pt[l - 15]
              , h = Pt[l - 2]
              , p = tt(f, 7) ^ tt(f, 18) ^ f >>> 3
              , m = tt(h, 17) ^ tt(h, 19) ^ h >>> 10;
            Pt[l] = m + Pt[l - 7] + p + Pt[l - 16] | 0
        }
        let {A: r, B: i, C: s, D: o, E: a, F: u, G: d, H: c} = this;
        for (let l = 0; l < 64; l++) {
            const f = tt(a, 6) ^ tt(a, 11) ^ tt(a, 25)
              , h = c + f + E0(a, u, d) + T0[l] + Pt[l] | 0
              , m = (tt(r, 2) ^ tt(r, 13) ^ tt(r, 22)) + I0(r, i, s) | 0;
            c = d,
            d = u,
            u = a,
            a = o + h | 0,
            o = s,
            s = i,
            i = r,
            r = h + m | 0
        }
        r = r + this.A | 0,
        i = i + this.B | 0,
        s = s + this.C | 0,
        o = o + this.D | 0,
        a = a + this.E | 0,
        u = u + this.F | 0,
        d = d + this.G | 0,
        c = c + this.H | 0,
        this.set(r, i, s, o, a, u, d, c)
    }
    roundClean() {
        Pt.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0),
        this.buffer.fill(0)
    }
}
class S0 extends _d {
    constructor() {
        super(),
        this.A = -1056596264,
        this.B = 914150663,
        this.C = 812702999,
        this.D = -150054599,
        this.E = -4191439,
        this.F = 1750603025,
        this.G = 1694076839,
        this.H = -1090891868,
        this.outputLen = 28
    }
}
const Vi = pn( () => new _d);
pn( () => new S0);
const [k0,A0] = G.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t)))
  , Rt = new Uint32Array(80)
  , Bt = new Uint32Array(80);
class Wi extends bd {
    constructor() {
        super(128, 64, 16, !1),
        this.Ah = 1779033703,
        this.Al = -205731576,
        this.Bh = -1150833019,
        this.Bl = -2067093701,
        this.Ch = 1013904242,
        this.Cl = -23791573,
        this.Dh = -1521486534,
        this.Dl = 1595750129,
        this.Eh = 1359893119,
        this.El = -1377402159,
        this.Fh = -1694144372,
        this.Fl = 725511199,
        this.Gh = 528734635,
        this.Gl = -79577749,
        this.Hh = 1541459225,
        this.Hl = 327033209
    }
    get() {
        const {Ah: e, Al: n, Bh: r, Bl: i, Ch: s, Cl: o, Dh: a, Dl: u, Eh: d, El: c, Fh: l, Fl: f, Gh: h, Gl: p, Hh: m, Hl: g} = this;
        return [e, n, r, i, s, o, a, u, d, c, l, f, h, p, m, g]
    }
    set(e, n, r, i, s, o, a, u, d, c, l, f, h, p, m, g) {
        this.Ah = e | 0,
        this.Al = n | 0,
        this.Bh = r | 0,
        this.Bl = i | 0,
        this.Ch = s | 0,
        this.Cl = o | 0,
        this.Dh = a | 0,
        this.Dl = u | 0,
        this.Eh = d | 0,
        this.El = c | 0,
        this.Fh = l | 0,
        this.Fl = f | 0,
        this.Gh = h | 0,
        this.Gl = p | 0,
        this.Hh = m | 0,
        this.Hl = g | 0
    }
    process(e, n) {
        for (let w = 0; w < 16; w++,
        n += 4)
            Rt[w] = e.getUint32(n),
            Bt[w] = e.getUint32(n += 4);
        for (let w = 16; w < 80; w++) {
            const S = Rt[w - 15] | 0
              , E = Bt[w - 15] | 0
              , A = G.rotrSH(S, E, 1) ^ G.rotrSH(S, E, 8) ^ G.shrSH(S, E, 7)
              , C = G.rotrSL(S, E, 1) ^ G.rotrSL(S, E, 8) ^ G.shrSL(S, E, 7)
              , v = Rt[w - 2] | 0
              , j = Bt[w - 2] | 0
              , x = G.rotrSH(v, j, 19) ^ G.rotrBH(v, j, 61) ^ G.shrSH(v, j, 6)
              , P = G.rotrSL(v, j, 19) ^ G.rotrBL(v, j, 61) ^ G.shrSL(v, j, 6)
              , L = G.add4L(C, P, Bt[w - 7], Bt[w - 16])
              , D = G.add4H(L, A, x, Rt[w - 7], Rt[w - 16]);
            Rt[w] = D | 0,
            Bt[w] = L | 0
        }
        let {Ah: r, Al: i, Bh: s, Bl: o, Ch: a, Cl: u, Dh: d, Dl: c, Eh: l, El: f, Fh: h, Fl: p, Gh: m, Gl: g, Hh: y, Hl: _} = this;
        for (let w = 0; w < 80; w++) {
            const S = G.rotrSH(l, f, 14) ^ G.rotrSH(l, f, 18) ^ G.rotrBH(l, f, 41)
              , E = G.rotrSL(l, f, 14) ^ G.rotrSL(l, f, 18) ^ G.rotrBL(l, f, 41)
              , A = l & h ^ ~l & m
              , C = f & p ^ ~f & g
              , v = G.add5L(_, E, C, A0[w], Bt[w])
              , j = G.add5H(v, y, S, A, k0[w], Rt[w])
              , x = v | 0
              , P = G.rotrSH(r, i, 28) ^ G.rotrBH(r, i, 34) ^ G.rotrBH(r, i, 39)
              , L = G.rotrSL(r, i, 28) ^ G.rotrBL(r, i, 34) ^ G.rotrBL(r, i, 39)
              , D = r & s ^ r & a ^ s & a
              , pe = i & o ^ i & u ^ o & u;
            y = m | 0,
            _ = g | 0,
            m = h | 0,
            g = p | 0,
            h = l | 0,
            p = f | 0,
            {h: l, l: f} = G.add(d | 0, c | 0, j | 0, x | 0),
            d = a | 0,
            c = u | 0,
            a = s | 0,
            u = o | 0,
            s = r | 0,
            o = i | 0;
            const k = G.add3L(x, L, pe);
            r = G.add3H(k, j, P, D),
            i = k | 0
        }
        ({h: r, l: i} = G.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)),
        {h: s, l: o} = G.add(this.Bh | 0, this.Bl | 0, s | 0, o | 0),
        {h: a, l: u} = G.add(this.Ch | 0, this.Cl | 0, a | 0, u | 0),
        {h: d, l: c} = G.add(this.Dh | 0, this.Dl | 0, d | 0, c | 0),
        {h: l, l: f} = G.add(this.Eh | 0, this.El | 0, l | 0, f | 0),
        {h, l: p} = G.add(this.Fh | 0, this.Fl | 0, h | 0, p | 0),
        {h: m, l: g} = G.add(this.Gh | 0, this.Gl | 0, m | 0, g | 0),
        {h: y, l: _} = G.add(this.Hh | 0, this.Hl | 0, y | 0, _ | 0),
        this.set(r, i, s, o, a, u, d, c, l, f, h, p, m, g, y, _)
    }
    roundClean() {
        Rt.fill(0),
        Bt.fill(0)
    }
    destroy() {
        this.buffer.fill(0),
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class P0 extends Wi {
    constructor() {
        super(),
        this.Ah = -1942145080,
        this.Al = 424955298,
        this.Bh = 1944164710,
        this.Bl = -1982016298,
        this.Ch = 502970286,
        this.Cl = 855612546,
        this.Dh = 1738396948,
        this.Dl = 1479516111,
        this.Eh = 258812777,
        this.El = 2077511080,
        this.Fh = 2011393907,
        this.Fl = 79989058,
        this.Gh = 1067287976,
        this.Gl = 1780299464,
        this.Hh = 286451373,
        this.Hl = -1848208735,
        this.outputLen = 28
    }
}
class R0 extends Wi {
    constructor() {
        super(),
        this.Ah = 573645204,
        this.Al = -64227540,
        this.Bh = -1621794909,
        this.Bl = -934517566,
        this.Ch = 596883563,
        this.Cl = 1867755857,
        this.Dh = -1774684391,
        this.Dl = 1497426621,
        this.Eh = -1775747358,
        this.El = -1467023389,
        this.Fh = -1101128155,
        this.Fl = 1401305490,
        this.Gh = 721525244,
        this.Gl = 746961066,
        this.Hh = 246885852,
        this.Hl = -2117784414,
        this.outputLen = 32
    }
}
class B0 extends Wi {
    constructor() {
        super(),
        this.Ah = -876896931,
        this.Al = -1056596264,
        this.Bh = 1654270250,
        this.Bl = 914150663,
        this.Ch = -1856437926,
        this.Cl = 812702999,
        this.Dh = 355462360,
        this.Dl = -150054599,
        this.Eh = 1731405415,
        this.El = -4191439,
        this.Fh = -1900787065,
        this.Fl = 1750603025,
        this.Gh = -619958771,
        this.Gl = 1694076839,
        this.Hh = 1203062813,
        this.Hl = -1090891868,
        this.outputLen = 48
    }
}
const C0 = pn( () => new Wi);
pn( () => new P0);
pn( () => new R0);
pn( () => new B0);
function wd(t, e, n, r, i) {
    if (!["sha256", "sha512"].includes(i))
        throw new Error("Only sha256 and sha512 are supported");
    return ai(t),
    ai(e),
    No(i === "sha256" ? Vi : C0, t, e, {
        c: n,
        dkLen: r
    })
}
const re = (t, e) => t << e | t >>> 32 - e;
function Ba(t, e, n, r, i, s) {
    let o = t[e++] ^ n[r++]
      , a = t[e++] ^ n[r++]
      , u = t[e++] ^ n[r++]
      , d = t[e++] ^ n[r++]
      , c = t[e++] ^ n[r++]
      , l = t[e++] ^ n[r++]
      , f = t[e++] ^ n[r++]
      , h = t[e++] ^ n[r++]
      , p = t[e++] ^ n[r++]
      , m = t[e++] ^ n[r++]
      , g = t[e++] ^ n[r++]
      , y = t[e++] ^ n[r++]
      , _ = t[e++] ^ n[r++]
      , w = t[e++] ^ n[r++]
      , S = t[e++] ^ n[r++]
      , E = t[e++] ^ n[r++]
      , A = o
      , C = a
      , v = u
      , j = d
      , x = c
      , P = l
      , L = f
      , D = h
      , pe = p
      , k = m
      , R = g
      , F = y
      , te = _
      , Q = w
      , ce = S
      , ye = E;
    for (let Ee = 0; Ee < 8; Ee += 2)
        x ^= re(A + te | 0, 7),
        pe ^= re(x + A | 0, 9),
        te ^= re(pe + x | 0, 13),
        A ^= re(te + pe | 0, 18),
        k ^= re(P + C | 0, 7),
        Q ^= re(k + P | 0, 9),
        C ^= re(Q + k | 0, 13),
        P ^= re(C + Q | 0, 18),
        ce ^= re(R + L | 0, 7),
        v ^= re(ce + R | 0, 9),
        L ^= re(v + ce | 0, 13),
        R ^= re(L + v | 0, 18),
        j ^= re(ye + F | 0, 7),
        D ^= re(j + ye | 0, 9),
        F ^= re(D + j | 0, 13),
        ye ^= re(F + D | 0, 18),
        C ^= re(A + j | 0, 7),
        v ^= re(C + A | 0, 9),
        j ^= re(v + C | 0, 13),
        A ^= re(j + v | 0, 18),
        L ^= re(P + x | 0, 7),
        D ^= re(L + P | 0, 9),
        x ^= re(D + L | 0, 13),
        P ^= re(x + D | 0, 18),
        F ^= re(R + k | 0, 7),
        pe ^= re(F + R | 0, 9),
        k ^= re(pe + F | 0, 13),
        R ^= re(k + pe | 0, 18),
        te ^= re(ye + ce | 0, 7),
        Q ^= re(te + ye | 0, 9),
        ce ^= re(Q + te | 0, 13),
        ye ^= re(ce + Q | 0, 18);
    i[s++] = o + A | 0,
    i[s++] = a + C | 0,
    i[s++] = u + v | 0,
    i[s++] = d + j | 0,
    i[s++] = c + x | 0,
    i[s++] = l + P | 0,
    i[s++] = f + L | 0,
    i[s++] = h + D | 0,
    i[s++] = p + pe | 0,
    i[s++] = m + k | 0,
    i[s++] = g + R | 0,
    i[s++] = y + F | 0,
    i[s++] = _ + te | 0,
    i[s++] = w + Q | 0,
    i[s++] = S + ce | 0,
    i[s++] = E + ye | 0
}
function ps(t, e, n, r, i) {
    let s = r + 0
      , o = r + 16 * i;
    for (let a = 0; a < 16; a++)
        n[o + a] = t[e + (2 * i - 1) * 16 + a];
    for (let a = 0; a < i; a++,
    s += 16,
    e += 16)
        Ba(n, o, t, e, n, s),
        a > 0 && (o += 16),
        Ba(n, s, t, e += 16, n, o)
}
function N0(t, e, n) {
    const r = Ic({
        dkLen: 32,
        asyncTick: 10,
        maxmem: 1073742848
    }, n)
      , {N: i, r: s, p: o, dkLen: a, asyncTick: u, maxmem: d, onProgress: c} = r;
    if (le.number(i),
    le.number(s),
    le.number(o),
    le.number(a),
    le.number(u),
    le.number(d),
    c !== void 0 && typeof c != "function")
        throw new Error("progressCb should be function");
    const l = 128 * s
      , f = l / 4;
    if (i <= 1 || i & i - 1 || i >= 2 ** (l / 8) || i > 2 ** 32)
        throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
    if (o < 0 || o > (2 ** 32 - 1) * 32 / l)
        throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
    if (a < 0 || a > (2 ** 32 - 1) * 32)
        throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
    const h = l * (i + o);
    if (h > d)
        throw new Error(`Scrypt: parameters too large, ${h} (128 * r * (N + p)) > ${d} (maxmem)`);
    const p = No(Vi, t, e, {
        c: 1,
        dkLen: l * o
    })
      , m = Fr(p)
      , g = Fr(new Uint8Array(l * i))
      , y = Fr(new Uint8Array(l));
    let _ = () => {}
    ;
    if (c) {
        const w = 2 * i * o
          , S = Math.max(Math.floor(w / 1e4), 1);
        let E = 0;
        _ = () => {
            E++,
            c && (!(E % S) || E === w) && c(E / w)
        }
    }
    return {
        N: i,
        r: s,
        p: o,
        dkLen: a,
        blockSize32: f,
        V: g,
        B32: m,
        B: p,
        tmp: y,
        blockMixCb: _,
        asyncTick: u
    }
}
function O0(t, e, n, r, i) {
    const s = No(Vi, t, n, {
        c: 1,
        dkLen: e
    });
    return n.fill(0),
    r.fill(0),
    i.fill(0),
    s
}
function L0(t, e, n) {
    const {N: r, r: i, p: s, dkLen: o, blockSize32: a, V: u, B32: d, B: c, tmp: l, blockMixCb: f} = N0(t, e, n);
    for (let h = 0; h < s; h++) {
        const p = a * h;
        for (let m = 0; m < a; m++)
            u[m] = d[p + m];
        for (let m = 0, g = 0; m < r - 1; m++)
            ps(u, g, u, g += a, i),
            f();
        ps(u, (r - 1) * a, d, p, i),
        f();
        for (let m = 0; m < r; m++) {
            const g = d[p + a - 16] % r;
            for (let y = 0; y < a; y++)
                l[y] = d[p + y] ^ u[g * a + y];
            ps(l, 0, d, p, i),
            f()
        }
    }
    return O0(t, o, c, u, l)
}
function xd(t, e, n, r, i, s, o) {
    return ai(t),
    ai(e),
    L0(t, e, {
        N: n,
        r: i,
        p: r,
        dkLen: s,
        onProgress: o
    })
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ed = BigInt(0)
  , Zi = BigInt(1)
  , M0 = BigInt(2)
  , Ki = t => t instanceof Uint8Array
  , $0 = Array.from({
    length: 256
}, (t, e) => e.toString(16).padStart(2, "0"));
function Fn(t) {
    if (!Ki(t))
        throw new Error("Uint8Array expected");
    let e = "";
    for (let n = 0; n < t.length; n++)
        e += $0[t[n]];
    return e
}
function Id(t) {
    const e = t.toString(16);
    return e.length & 1 ? `0${e}` : e
}
function Oo(t) {
    if (typeof t != "string")
        throw new Error("hex string expected, got " + typeof t);
    return BigInt(t === "" ? "0" : `0x${t}`)
}
function Gn(t) {
    if (typeof t != "string")
        throw new Error("hex string expected, got " + typeof t);
    const e = t.length;
    if (e % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(e / 2);
    for (let r = 0; r < n.length; r++) {
        const i = r * 2
          , s = t.slice(i, i + 2)
          , o = Number.parseInt(s, 16);
        if (Number.isNaN(o) || o < 0)
            throw new Error("Invalid byte sequence");
        n[r] = o
    }
    return n
}
function nn(t) {
    return Oo(Fn(t))
}
function Lo(t) {
    if (!Ki(t))
        throw new Error("Uint8Array expected");
    return Oo(Fn(Uint8Array.from(t).reverse()))
}
function Nn(t, e) {
    return Gn(t.toString(16).padStart(e * 2, "0"))
}
function Td(t, e) {
    return Nn(t, e).reverse()
}
function H0(t) {
    return Gn(Id(t))
}
function Ge(t, e, n) {
    let r;
    if (typeof e == "string")
        try {
            r = Gn(e)
        } catch (s) {
            throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`)
        }
    else if (Ki(e))
        r = Uint8Array.from(e);
    else
        throw new Error(`${t} must be hex string or Uint8Array`);
    const i = r.length;
    if (typeof n == "number" && i !== n)
        throw new Error(`${t} expected ${n} bytes, got ${i}`);
    return r
}
function Tr(...t) {
    const e = new Uint8Array(t.reduce( (r, i) => r + i.length, 0));
    let n = 0;
    return t.forEach(r => {
        if (!Ki(r))
            throw new Error("Uint8Array expected");
        e.set(r, n),
        n += r.length
    }
    ),
    e
}
function j0(t, e) {
    if (t.length !== e.length)
        return !1;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e[n])
            return !1;
    return !0
}
function D0(t) {
    if (typeof t != "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t))
}
function F0(t) {
    let e;
    for (e = 0; t > Ed; t >>= Zi,
    e += 1)
        ;
    return e
}
function G0(t, e) {
    return t >> BigInt(e) & Zi
}
const U0 = (t, e, n) => t | (n ? Zi : Ed) << BigInt(e)
  , Mo = t => (M0 << BigInt(t - 1)) - Zi
  , gs = t => new Uint8Array(t)
  , Ca = t => Uint8Array.from(t);
function Sd(t, e, n) {
    if (typeof t != "number" || t < 2)
        throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2)
        throw new Error("qByteLen must be a number");
    if (typeof n != "function")
        throw new Error("hmacFn must be a function");
    let r = gs(t)
      , i = gs(t)
      , s = 0;
    const o = () => {
        r.fill(1),
        i.fill(0),
        s = 0
    }
      , a = (...l) => n(i, r, ...l)
      , u = (l=gs()) => {
        i = a(Ca([0]), l),
        r = a(),
        l.length !== 0 && (i = a(Ca([1]), l),
        r = a())
    }
      , d = () => {
        if (s++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let l = 0;
        const f = [];
        for (; l < e; ) {
            r = a();
            const h = r.slice();
            f.push(h),
            l += r.length
        }
        return Tr(...f)
    }
    ;
    return (l, f) => {
        o(),
        u(l);
        let h;
        for (; !(h = f(d())); )
            u();
        return o(),
        h
    }
}
const q0 = {
    bigint: t => typeof t == "bigint",
    function: t => typeof t == "function",
    boolean: t => typeof t == "boolean",
    string: t => typeof t == "string",
    isSafeInteger: t => Number.isSafeInteger(t),
    array: t => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: t => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Nr(t, e, n={}) {
    const r = (i, s, o) => {
        const a = q0[s];
        if (typeof a != "function")
            throw new Error(`Invalid validator "${s}", expected function`);
        const u = t[i];
        if (!(o && u === void 0) && !a(u, t))
            throw new Error(`Invalid param ${String(i)}=${u} (${typeof u}), expected ${s}`)
    }
    ;
    for (const [i,s] of Object.entries(e))
        r(i, s, !1);
    for (const [i,s] of Object.entries(n))
        r(i, s, !0);
    return t
}
const z0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    bitGet: G0,
    bitLen: F0,
    bitMask: Mo,
    bitSet: U0,
    bytesToHex: Fn,
    bytesToNumberBE: nn,
    bytesToNumberLE: Lo,
    concatBytes: Tr,
    createHmacDrbg: Sd,
    ensureBytes: Ge,
    equalBytes: j0,
    hexToBytes: Gn,
    hexToNumber: Oo,
    numberToBytesBE: Nn,
    numberToBytesLE: Td,
    numberToHexUnpadded: Id,
    numberToVarBytesBE: H0,
    utf8ToBytes: D0,
    validateObject: Nr
}, Symbol.toStringTag, {
    value: "Module"
}));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const we = BigInt(0)
  , ve = BigInt(1)
  , Wt = BigInt(2)
  , V0 = BigInt(3)
  , Ds = BigInt(4)
  , Na = BigInt(5)
  , Oa = BigInt(8);
BigInt(9);
BigInt(16);
function Be(t, e) {
    const n = t % e;
    return n >= we ? n : e + n
}
function W0(t, e, n) {
    if (n <= we || e < we)
        throw new Error("Expected power/modulo > 0");
    if (n === ve)
        return we;
    let r = ve;
    for (; e > we; )
        e & ve && (r = r * t % n),
        t = t * t % n,
        e >>= ve;
    return r
}
function Fe(t, e, n) {
    let r = t;
    for (; e-- > we; )
        r *= r,
        r %= n;
    return r
}
function Fs(t, e) {
    if (t === we || e <= we)
        throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
    let n = Be(t, e)
      , r = e
      , i = we
      , s = ve;
    for (; n !== we; ) {
        const a = r / n
          , u = r % n
          , d = i - s * a;
        r = n,
        n = u,
        i = s,
        s = d
    }
    if (r !== ve)
        throw new Error("invert: does not exist");
    return Be(i, e)
}
function Z0(t) {
    const e = (t - ve) / Wt;
    let n, r, i;
    for (n = t - ve,
    r = 0; n % Wt === we; n /= Wt,
    r++)
        ;
    for (i = Wt; i < t && W0(i, e, t) !== t - ve; i++)
        ;
    if (r === 1) {
        const o = (t + ve) / Ds;
        return function(u, d) {
            const c = u.pow(d, o);
            if (!u.eql(u.sqr(c), d))
                throw new Error("Cannot find square root");
            return c
        }
    }
    const s = (n + ve) / Wt;
    return function(a, u) {
        if (a.pow(u, e) === a.neg(a.ONE))
            throw new Error("Cannot find square root");
        let d = r
          , c = a.pow(a.mul(a.ONE, i), n)
          , l = a.pow(u, s)
          , f = a.pow(u, n);
        for (; !a.eql(f, a.ONE); ) {
            if (a.eql(f, a.ZERO))
                return a.ZERO;
            let h = 1;
            for (let m = a.sqr(f); h < d && !a.eql(m, a.ONE); h++)
                m = a.sqr(m);
            const p = a.pow(c, ve << BigInt(d - h - 1));
            c = a.sqr(p),
            l = a.mul(l, p),
            f = a.mul(f, c),
            d = h
        }
        return l
    }
}
function K0(t) {
    if (t % Ds === V0) {
        const e = (t + ve) / Ds;
        return function(r, i) {
            const s = r.pow(i, e);
            if (!r.eql(r.sqr(s), i))
                throw new Error("Cannot find square root");
            return s
        }
    }
    if (t % Oa === Na) {
        const e = (t - Na) / Oa;
        return function(r, i) {
            const s = r.mul(i, Wt)
              , o = r.pow(s, e)
              , a = r.mul(i, o)
              , u = r.mul(r.mul(a, Wt), o)
              , d = r.mul(a, r.sub(u, r.ONE));
            if (!r.eql(r.sqr(d), i))
                throw new Error("Cannot find square root");
            return d
        }
    }
    return Z0(t)
}
const X0 = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function J0(t) {
    const e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    }
      , n = X0.reduce( (r, i) => (r[i] = "function",
    r), e);
    return Nr(t, n)
}
function Y0(t, e, n) {
    if (n < we)
        throw new Error("Expected power > 0");
    if (n === we)
        return t.ONE;
    if (n === ve)
        return e;
    let r = t.ONE
      , i = e;
    for (; n > we; )
        n & ve && (r = t.mul(r, i)),
        i = t.sqr(i),
        n >>= ve;
    return r
}
function Q0(t, e) {
    const n = new Array(e.length)
      , r = e.reduce( (s, o, a) => t.is0(o) ? s : (n[a] = s,
    t.mul(s, o)), t.ONE)
      , i = t.inv(r);
    return e.reduceRight( (s, o, a) => t.is0(o) ? s : (n[a] = t.mul(s, n[a]),
    t.mul(s, o)), i),
    n
}
function $o(t, e) {
    const n = e !== void 0 ? e : t.toString(2).length
      , r = Math.ceil(n / 8);
    return {
        nBitLength: n,
        nByteLength: r
    }
}
function eg(t, e, n=!1, r={}) {
    if (t <= we)
        throw new Error(`Expected Fp ORDER > 0, got ${t}`);
    const {nBitLength: i, nByteLength: s} = $o(t, e);
    if (s > 2048)
        throw new Error("Field lengths over 2048 bytes are not supported");
    const o = K0(t)
      , a = Object.freeze({
        ORDER: t,
        BITS: i,
        BYTES: s,
        MASK: Mo(i),
        ZERO: we,
        ONE: ve,
        create: u => Be(u, t),
        isValid: u => {
            if (typeof u != "bigint")
                throw new Error(`Invalid field element: expected bigint, got ${typeof u}`);
            return we <= u && u < t
        }
        ,
        is0: u => u === we,
        isOdd: u => (u & ve) === ve,
        neg: u => Be(-u, t),
        eql: (u, d) => u === d,
        sqr: u => Be(u * u, t),
        add: (u, d) => Be(u + d, t),
        sub: (u, d) => Be(u - d, t),
        mul: (u, d) => Be(u * d, t),
        pow: (u, d) => Y0(a, u, d),
        div: (u, d) => Be(u * Fs(d, t), t),
        sqrN: u => u * u,
        addN: (u, d) => u + d,
        subN: (u, d) => u - d,
        mulN: (u, d) => u * d,
        inv: u => Fs(u, t),
        sqrt: r.sqrt || (u => o(a, u)),
        invertBatch: u => Q0(a, u),
        cmov: (u, d, c) => c ? d : u,
        toBytes: u => n ? Td(u, s) : Nn(u, s),
        fromBytes: u => {
            if (u.length !== s)
                throw new Error(`Fp.fromBytes: expected ${s}, got ${u.length}`);
            return n ? Lo(u) : nn(u)
        }
    });
    return Object.freeze(a)
}
function tg(t, e, n=!1) {
    t = Ge("privateHash", t);
    const r = t.length
      , i = $o(e).nByteLength + 8;
    if (i < 24 || r < i || r > 1024)
        throw new Error(`hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${r}`);
    const s = n ? Lo(t) : nn(t);
    return Be(s, e - ve) + ve
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ng = BigInt(0)
  , ys = BigInt(1);
function rg(t, e) {
    const n = (i, s) => {
        const o = s.negate();
        return i ? o : s
    }
      , r = i => {
        const s = Math.ceil(e / i) + 1
          , o = 2 ** (i - 1);
        return {
            windows: s,
            windowSize: o
        }
    }
    ;
    return {
        constTimeNegate: n,
        unsafeLadder(i, s) {
            let o = t.ZERO
              , a = i;
            for (; s > ng; )
                s & ys && (o = o.add(a)),
                a = a.double(),
                s >>= ys;
            return o
        },
        precomputeWindow(i, s) {
            const {windows: o, windowSize: a} = r(s)
              , u = [];
            let d = i
              , c = d;
            for (let l = 0; l < o; l++) {
                c = d,
                u.push(c);
                for (let f = 1; f < a; f++)
                    c = c.add(d),
                    u.push(c);
                d = c.double()
            }
            return u
        },
        wNAF(i, s, o) {
            const {windows: a, windowSize: u} = r(i);
            let d = t.ZERO
              , c = t.BASE;
            const l = BigInt(2 ** i - 1)
              , f = 2 ** i
              , h = BigInt(i);
            for (let p = 0; p < a; p++) {
                const m = p * u;
                let g = Number(o & l);
                o >>= h,
                g > u && (g -= f,
                o += ys);
                const y = m
                  , _ = m + Math.abs(g) - 1
                  , w = p % 2 !== 0
                  , S = g < 0;
                g === 0 ? c = c.add(n(w, s[y])) : d = d.add(n(S, s[_]))
            }
            return {
                p: d,
                f: c
            }
        },
        wNAFCached(i, s, o, a) {
            const u = i._WINDOW_SIZE || 1;
            let d = s.get(i);
            return d || (d = this.precomputeWindow(i, u),
            u !== 1 && s.set(i, a(d))),
            this.wNAF(u, d, o)
        }
    }
}
function kd(t) {
    return J0(t.Fp),
    Nr(t, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }),
    Object.freeze({
        ...$o(t.n, t.nBitLength),
        ...t,
        p: t.Fp.ORDER
    })
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ig(t) {
    const e = kd(t);
    Nr(e, {
        a: "field",
        b: "field"
    }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
    });
    const {endo: n, Fp: r, a: i} = e;
    if (n) {
        if (!r.eql(i, r.ZERO))
            throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
            throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
    }
    return Object.freeze({
        ...e
    })
}
const {bytesToNumberBE: sg, hexToBytes: og} = z0
  , Kt = {
    Err: class extends Error {
        constructor(e="") {
            super(e)
        }
    }
    ,
    _parseInt(t) {
        const {Err: e} = Kt;
        if (t.length < 2 || t[0] !== 2)
            throw new e("Invalid signature integer tag");
        const n = t[1]
          , r = t.subarray(2, n + 2);
        if (!n || r.length !== n)
            throw new e("Invalid signature integer: wrong length");
        if (r[0] & 128)
            throw new e("Invalid signature integer: negative");
        if (r[0] === 0 && !(r[1] & 128))
            throw new e("Invalid signature integer: unnecessary leading zero");
        return {
            d: sg(r),
            l: t.subarray(n + 2)
        }
    },
    toSig(t) {
        const {Err: e} = Kt
          , n = typeof t == "string" ? og(t) : t;
        if (!(n instanceof Uint8Array))
            throw new Error("ui8a expected");
        let r = n.length;
        if (r < 2 || n[0] != 48)
            throw new e("Invalid signature tag");
        if (n[1] !== r - 2)
            throw new e("Invalid signature: incorrect length");
        const {d: i, l: s} = Kt._parseInt(n.subarray(2))
          , {d: o, l: a} = Kt._parseInt(s);
        if (a.length)
            throw new e("Invalid signature: left bytes after parsing");
        return {
            r: i,
            s: o
        }
    },
    hexFromSig(t) {
        const e = d => Number.parseInt(d[0], 16) & 8 ? "00" + d : d
          , n = d => {
            const c = d.toString(16);
            return c.length & 1 ? `0${c}` : c
        }
          , r = e(n(t.s))
          , i = e(n(t.r))
          , s = r.length / 2
          , o = i.length / 2
          , a = n(s)
          , u = n(o);
        return `30${n(o + s + 4)}02${u}${i}02${a}${r}`
    }
}
  , pt = BigInt(0)
  , Ue = BigInt(1);
BigInt(2);
const La = BigInt(3);
BigInt(4);
function ag(t) {
    const e = ig(t)
      , {Fp: n} = e
      , r = e.toBytes || ( (p, m, g) => {
        const y = m.toAffine();
        return Tr(Uint8Array.from([4]), n.toBytes(y.x), n.toBytes(y.y))
    }
    )
      , i = e.fromBytes || (p => {
        const m = p.subarray(1)
          , g = n.fromBytes(m.subarray(0, n.BYTES))
          , y = n.fromBytes(m.subarray(n.BYTES, 2 * n.BYTES));
        return {
            x: g,
            y
        }
    }
    );
    function s(p) {
        const {a: m, b: g} = e
          , y = n.sqr(p)
          , _ = n.mul(y, p);
        return n.add(n.add(_, n.mul(p, m)), g)
    }
    if (!n.eql(n.sqr(e.Gy), s(e.Gx)))
        throw new Error("bad generator point: equation left != right");
    function o(p) {
        return typeof p == "bigint" && pt < p && p < e.n
    }
    function a(p) {
        if (!o(p))
            throw new Error("Expected valid bigint: 0 < bigint < curve.n")
    }
    function u(p) {
        const {allowedPrivateKeyLengths: m, nByteLength: g, wrapPrivateKey: y, n: _} = e;
        if (m && typeof p != "bigint") {
            if (p instanceof Uint8Array && (p = Fn(p)),
            typeof p != "string" || !m.includes(p.length))
                throw new Error("Invalid key");
            p = p.padStart(g * 2, "0")
        }
        let w;
        try {
            w = typeof p == "bigint" ? p : nn(Ge("private key", p, g))
        } catch {
            throw new Error(`private key must be ${g} bytes, hex or bigint, not ${typeof p}`)
        }
        return y && (w = Be(w, _)),
        a(w),
        w
    }
    const d = new Map;
    function c(p) {
        if (!(p instanceof l))
            throw new Error("ProjectivePoint expected")
    }
    class l {
        constructor(m, g, y) {
            if (this.px = m,
            this.py = g,
            this.pz = y,
            m == null || !n.isValid(m))
                throw new Error("x required");
            if (g == null || !n.isValid(g))
                throw new Error("y required");
            if (y == null || !n.isValid(y))
                throw new Error("z required")
        }
        static fromAffine(m) {
            const {x: g, y} = m || {};
            if (!m || !n.isValid(g) || !n.isValid(y))
                throw new Error("invalid affine point");
            if (m instanceof l)
                throw new Error("projective point not allowed");
            const _ = w => n.eql(w, n.ZERO);
            return _(g) && _(y) ? l.ZERO : new l(g,y,n.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(m) {
            const g = n.invertBatch(m.map(y => y.pz));
            return m.map( (y, _) => y.toAffine(g[_])).map(l.fromAffine)
        }
        static fromHex(m) {
            const g = l.fromAffine(i(Ge("pointHex", m)));
            return g.assertValidity(),
            g
        }
        static fromPrivateKey(m) {
            return l.BASE.multiply(u(m))
        }
        _setWindowSize(m) {
            this._WINDOW_SIZE = m,
            d.delete(this)
        }
        assertValidity() {
            if (this.is0()) {
                if (e.allowInfinityPoint)
                    return;
                throw new Error("bad point: ZERO")
            }
            const {x: m, y: g} = this.toAffine();
            if (!n.isValid(m) || !n.isValid(g))
                throw new Error("bad point: x or y not FE");
            const y = n.sqr(g)
              , _ = s(m);
            if (!n.eql(y, _))
                throw new Error("bad point: equation left != right");
            if (!this.isTorsionFree())
                throw new Error("bad point: not in prime-order subgroup")
        }
        hasEvenY() {
            const {y: m} = this.toAffine();
            if (n.isOdd)
                return !n.isOdd(m);
            throw new Error("Field doesn't support isOdd")
        }
        equals(m) {
            c(m);
            const {px: g, py: y, pz: _} = this
              , {px: w, py: S, pz: E} = m
              , A = n.eql(n.mul(g, E), n.mul(w, _))
              , C = n.eql(n.mul(y, E), n.mul(S, _));
            return A && C
        }
        negate() {
            return new l(this.px,n.neg(this.py),this.pz)
        }
        double() {
            const {a: m, b: g} = e
              , y = n.mul(g, La)
              , {px: _, py: w, pz: S} = this;
            let E = n.ZERO
              , A = n.ZERO
              , C = n.ZERO
              , v = n.mul(_, _)
              , j = n.mul(w, w)
              , x = n.mul(S, S)
              , P = n.mul(_, w);
            return P = n.add(P, P),
            C = n.mul(_, S),
            C = n.add(C, C),
            E = n.mul(m, C),
            A = n.mul(y, x),
            A = n.add(E, A),
            E = n.sub(j, A),
            A = n.add(j, A),
            A = n.mul(E, A),
            E = n.mul(P, E),
            C = n.mul(y, C),
            x = n.mul(m, x),
            P = n.sub(v, x),
            P = n.mul(m, P),
            P = n.add(P, C),
            C = n.add(v, v),
            v = n.add(C, v),
            v = n.add(v, x),
            v = n.mul(v, P),
            A = n.add(A, v),
            x = n.mul(w, S),
            x = n.add(x, x),
            v = n.mul(x, P),
            E = n.sub(E, v),
            C = n.mul(x, j),
            C = n.add(C, C),
            C = n.add(C, C),
            new l(E,A,C)
        }
        add(m) {
            c(m);
            const {px: g, py: y, pz: _} = this
              , {px: w, py: S, pz: E} = m;
            let A = n.ZERO
              , C = n.ZERO
              , v = n.ZERO;
            const j = e.a
              , x = n.mul(e.b, La);
            let P = n.mul(g, w)
              , L = n.mul(y, S)
              , D = n.mul(_, E)
              , pe = n.add(g, y)
              , k = n.add(w, S);
            pe = n.mul(pe, k),
            k = n.add(P, L),
            pe = n.sub(pe, k),
            k = n.add(g, _);
            let R = n.add(w, E);
            return k = n.mul(k, R),
            R = n.add(P, D),
            k = n.sub(k, R),
            R = n.add(y, _),
            A = n.add(S, E),
            R = n.mul(R, A),
            A = n.add(L, D),
            R = n.sub(R, A),
            v = n.mul(j, k),
            A = n.mul(x, D),
            v = n.add(A, v),
            A = n.sub(L, v),
            v = n.add(L, v),
            C = n.mul(A, v),
            L = n.add(P, P),
            L = n.add(L, P),
            D = n.mul(j, D),
            k = n.mul(x, k),
            L = n.add(L, D),
            D = n.sub(P, D),
            D = n.mul(j, D),
            k = n.add(k, D),
            P = n.mul(L, k),
            C = n.add(C, P),
            P = n.mul(R, k),
            A = n.mul(pe, A),
            A = n.sub(A, P),
            P = n.mul(pe, L),
            v = n.mul(R, v),
            v = n.add(v, P),
            new l(A,C,v)
        }
        subtract(m) {
            return this.add(m.negate())
        }
        is0() {
            return this.equals(l.ZERO)
        }
        wNAF(m) {
            return h.wNAFCached(this, d, m, g => {
                const y = n.invertBatch(g.map(_ => _.pz));
                return g.map( (_, w) => _.toAffine(y[w])).map(l.fromAffine)
            }
            )
        }
        multiplyUnsafe(m) {
            const g = l.ZERO;
            if (m === pt)
                return g;
            if (a(m),
            m === Ue)
                return this;
            const {endo: y} = e;
            if (!y)
                return h.unsafeLadder(this, m);
            let {k1neg: _, k1: w, k2neg: S, k2: E} = y.splitScalar(m)
              , A = g
              , C = g
              , v = this;
            for (; w > pt || E > pt; )
                w & Ue && (A = A.add(v)),
                E & Ue && (C = C.add(v)),
                v = v.double(),
                w >>= Ue,
                E >>= Ue;
            return _ && (A = A.negate()),
            S && (C = C.negate()),
            C = new l(n.mul(C.px, y.beta),C.py,C.pz),
            A.add(C)
        }
        multiply(m) {
            a(m);
            let g = m, y, _;
            const {endo: w} = e;
            if (w) {
                const {k1neg: S, k1: E, k2neg: A, k2: C} = w.splitScalar(g);
                let {p: v, f: j} = this.wNAF(E)
                  , {p: x, f: P} = this.wNAF(C);
                v = h.constTimeNegate(S, v),
                x = h.constTimeNegate(A, x),
                x = new l(n.mul(x.px, w.beta),x.py,x.pz),
                y = v.add(x),
                _ = j.add(P)
            } else {
                const {p: S, f: E} = this.wNAF(g);
                y = S,
                _ = E
            }
            return l.normalizeZ([y, _])[0]
        }
        multiplyAndAddUnsafe(m, g, y) {
            const _ = l.BASE
              , w = (E, A) => A === pt || A === Ue || !E.equals(_) ? E.multiplyUnsafe(A) : E.multiply(A)
              , S = w(this, g).add(w(m, y));
            return S.is0() ? void 0 : S
        }
        toAffine(m) {
            const {px: g, py: y, pz: _} = this
              , w = this.is0();
            m == null && (m = w ? n.ONE : n.inv(_));
            const S = n.mul(g, m)
              , E = n.mul(y, m)
              , A = n.mul(_, m);
            if (w)
                return {
                    x: n.ZERO,
                    y: n.ZERO
                };
            if (!n.eql(A, n.ONE))
                throw new Error("invZ was invalid");
            return {
                x: S,
                y: E
            }
        }
        isTorsionFree() {
            const {h: m, isTorsionFree: g} = e;
            if (m === Ue)
                return !0;
            if (g)
                return g(l, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            const {h: m, clearCofactor: g} = e;
            return m === Ue ? this : g ? g(l, this) : this.multiplyUnsafe(e.h)
        }
        toRawBytes(m=!0) {
            return this.assertValidity(),
            r(l, this, m)
        }
        toHex(m=!0) {
            return Fn(this.toRawBytes(m))
        }
    }
    l.BASE = new l(e.Gx,e.Gy,n.ONE),
    l.ZERO = new l(n.ZERO,n.ONE,n.ZERO);
    const f = e.nBitLength
      , h = rg(l, e.endo ? Math.ceil(f / 2) : f);
    return {
        CURVE: e,
        ProjectivePoint: l,
        normPrivateKeyToScalar: u,
        weierstrassEquation: s,
        isWithinCurveOrder: o
    }
}
function cg(t) {
    const e = kd(t);
    return Nr(e, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }),
    Object.freeze({
        lowS: !0,
        ...e
    })
}
function dg(t) {
    const e = cg(t)
      , {Fp: n, n: r} = e
      , i = n.BYTES + 1
      , s = 2 * n.BYTES + 1;
    function o(k) {
        return pt < k && k < n.ORDER
    }
    function a(k) {
        return Be(k, r)
    }
    function u(k) {
        return Fs(k, r)
    }
    const {ProjectivePoint: d, normPrivateKeyToScalar: c, weierstrassEquation: l, isWithinCurveOrder: f} = ag({
        ...e,
        toBytes(k, R, F) {
            const te = R.toAffine()
              , Q = n.toBytes(te.x)
              , ce = Tr;
            return F ? ce(Uint8Array.from([R.hasEvenY() ? 2 : 3]), Q) : ce(Uint8Array.from([4]), Q, n.toBytes(te.y))
        },
        fromBytes(k) {
            const R = k.length
              , F = k[0]
              , te = k.subarray(1);
            if (R === i && (F === 2 || F === 3)) {
                const Q = nn(te);
                if (!o(Q))
                    throw new Error("Point is not on curve");
                const ce = l(Q);
                let ye = n.sqrt(ce);
                const Ee = (ye & Ue) === Ue;
                return (F & 1) === 1 !== Ee && (ye = n.neg(ye)),
                {
                    x: Q,
                    y: ye
                }
            } else if (R === s && F === 4) {
                const Q = n.fromBytes(te.subarray(0, n.BYTES))
                  , ce = n.fromBytes(te.subarray(n.BYTES, 2 * n.BYTES));
                return {
                    x: Q,
                    y: ce
                }
            } else
                throw new Error(`Point of length ${R} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`)
        }
    })
      , h = k => Fn(Nn(k, e.nByteLength));
    function p(k) {
        const R = r >> Ue;
        return k > R
    }
    function m(k) {
        return p(k) ? a(-k) : k
    }
    const g = (k, R, F) => nn(k.slice(R, F));
    class y {
        constructor(R, F, te) {
            this.r = R,
            this.s = F,
            this.recovery = te,
            this.assertValidity()
        }
        static fromCompact(R) {
            const F = e.nByteLength;
            return R = Ge("compactSignature", R, F * 2),
            new y(g(R, 0, F),g(R, F, 2 * F))
        }
        static fromDER(R) {
            const {r: F, s: te} = Kt.toSig(Ge("DER", R));
            return new y(F,te)
        }
        assertValidity() {
            if (!f(this.r))
                throw new Error("r must be 0 < r < CURVE.n");
            if (!f(this.s))
                throw new Error("s must be 0 < s < CURVE.n")
        }
        addRecoveryBit(R) {
            return new y(this.r,this.s,R)
        }
        recoverPublicKey(R) {
            const {r: F, s: te, recovery: Q} = this
              , ce = C(Ge("msgHash", R));
            if (Q == null || ![0, 1, 2, 3].includes(Q))
                throw new Error("recovery id invalid");
            const ye = Q === 2 || Q === 3 ? F + e.n : F;
            if (ye >= n.ORDER)
                throw new Error("recovery id 2 or 3 invalid");
            const Ee = Q & 1 ? "03" : "02"
              , Tt = d.fromHex(Ee + h(ye))
              , St = u(ye)
              , vn = a(-ce * St)
              , Kn = a(te * St)
              , kt = d.BASE.multiplyAndAddUnsafe(Tt, vn, Kn);
            if (!kt)
                throw new Error("point at infinify");
            return kt.assertValidity(),
            kt
        }
        hasHighS() {
            return p(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new y(this.r,a(-this.s),this.recovery) : this
        }
        toDERRawBytes() {
            return Gn(this.toDERHex())
        }
        toDERHex() {
            return Kt.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return Gn(this.toCompactHex())
        }
        toCompactHex() {
            return h(this.r) + h(this.s)
        }
    }
    const _ = {
        isValidPrivateKey(k) {
            try {
                return c(k),
                !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: c,
        randomPrivateKey: () => {
            const k = e.randomBytes(n.BYTES + 8)
              , R = tg(k, r);
            return Nn(R, e.nByteLength)
        }
        ,
        precompute(k=8, R=d.BASE) {
            return R._setWindowSize(k),
            R.multiply(BigInt(3)),
            R
        }
    };
    function w(k, R=!0) {
        return d.fromPrivateKey(k).toRawBytes(R)
    }
    function S(k) {
        const R = k instanceof Uint8Array
          , F = typeof k == "string"
          , te = (R || F) && k.length;
        return R ? te === i || te === s : F ? te === 2 * i || te === 2 * s : k instanceof d
    }
    function E(k, R, F=!0) {
        if (S(k))
            throw new Error("first arg must be private key");
        if (!S(R))
            throw new Error("second arg must be public key");
        return d.fromHex(R).multiply(c(k)).toRawBytes(F)
    }
    const A = e.bits2int || function(k) {
        const R = nn(k)
          , F = k.length * 8 - e.nBitLength;
        return F > 0 ? R >> BigInt(F) : R
    }
      , C = e.bits2int_modN || function(k) {
        return a(A(k))
    }
      , v = Mo(e.nBitLength);
    function j(k) {
        if (typeof k != "bigint")
            throw new Error("bigint expected");
        if (!(pt <= k && k < v))
            throw new Error(`bigint expected < 2^${e.nBitLength}`);
        return Nn(k, e.nByteLength)
    }
    function x(k, R, F=P) {
        if (["recovered", "canonical"].some(zt => zt in F))
            throw new Error("sign() legacy options not supported");
        const {hash: te, randomBytes: Q} = e;
        let {lowS: ce, prehash: ye, extraEntropy: Ee} = F;
        ce == null && (ce = !0),
        k = Ge("msgHash", k),
        ye && (k = Ge("prehashed msgHash", te(k)));
        const Tt = C(k)
          , St = c(R)
          , vn = [j(St), j(Tt)];
        if (Ee != null) {
            const zt = Ee === !0 ? Q(n.BYTES) : Ee;
            vn.push(Ge("extraEntropy", zt, n.BYTES))
        }
        const Kn = Tr(...vn)
          , kt = Tt;
        function as(zt) {
            const bn = A(zt);
            if (!f(bn))
                return;
            const sa = u(bn)
              , _n = d.BASE.multiply(bn).toAffine()
              , We = a(_n.x);
            if (We === pt)
                return;
            const wn = a(sa * a(kt + We * St));
            if (wn === pt)
                return;
            let oa = (_n.x === We ? 0 : 2) | Number(_n.y & Ue)
              , aa = wn;
            return ce && p(wn) && (aa = m(wn),
            oa ^= 1),
            new y(We,aa,oa)
        }
        return {
            seed: Kn,
            k2sig: as
        }
    }
    const P = {
        lowS: e.lowS,
        prehash: !1
    }
      , L = {
        lowS: e.lowS,
        prehash: !1
    };
    function D(k, R, F=P) {
        const {seed: te, k2sig: Q} = x(k, R, F)
          , ce = e;
        return Sd(ce.hash.outputLen, ce.nByteLength, ce.hmac)(te, Q)
    }
    d.BASE._setWindowSize(8);
    function pe(k, R, F, te=L) {
        var _n;
        const Q = k;
        if (R = Ge("msgHash", R),
        F = Ge("publicKey", F),
        "strict"in te)
            throw new Error("options.strict was renamed to lowS");
        const {lowS: ce, prehash: ye} = te;
        let Ee, Tt;
        try {
            if (typeof Q == "string" || Q instanceof Uint8Array)
                try {
                    Ee = y.fromDER(Q)
                } catch (We) {
                    if (!(We instanceof Kt.Err))
                        throw We;
                    Ee = y.fromCompact(Q)
                }
            else if (typeof Q == "object" && typeof Q.r == "bigint" && typeof Q.s == "bigint") {
                const {r: We, s: wn} = Q;
                Ee = new y(We,wn)
            } else
                throw new Error("PARSE");
            Tt = d.fromHex(F)
        } catch (We) {
            if (We.message === "PARSE")
                throw new Error("signature must be Signature instance, Uint8Array or hex string");
            return !1
        }
        if (ce && Ee.hasHighS())
            return !1;
        ye && (R = e.hash(R));
        const {r: St, s: vn} = Ee
          , Kn = C(R)
          , kt = u(vn)
          , as = a(Kn * kt)
          , zt = a(St * kt)
          , bn = (_n = d.BASE.multiplyAndAddUnsafe(Tt, as, zt)) == null ? void 0 : _n.toAffine();
        return bn ? a(bn.x) === St : !1
    }
    return {
        CURVE: e,
        getPublicKey: w,
        getSharedSecret: E,
        sign: D,
        verify: pe,
        ProjectivePoint: d,
        Signature: y,
        utils: _
    }
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ug(t) {
    return {
        hash: t,
        hmac: (e, ...n) => Co(t, e, oi(...n)),
        randomBytes: Tc
    }
}
function lg(t, e) {
    const n = r => dg({
        ...t,
        ...ug(r)
    });
    return Object.freeze({
        ...n(e),
        create: n
    })
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ad = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
  , Ma = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141")
  , fg = BigInt(1)
  , Gs = BigInt(2)
  , $a = (t, e) => (t + e / Gs) / e;
function hg(t) {
    const e = Ad
      , n = BigInt(3)
      , r = BigInt(6)
      , i = BigInt(11)
      , s = BigInt(22)
      , o = BigInt(23)
      , a = BigInt(44)
      , u = BigInt(88)
      , d = t * t * t % e
      , c = d * d * t % e
      , l = Fe(c, n, e) * c % e
      , f = Fe(l, n, e) * c % e
      , h = Fe(f, Gs, e) * d % e
      , p = Fe(h, i, e) * h % e
      , m = Fe(p, s, e) * p % e
      , g = Fe(m, a, e) * m % e
      , y = Fe(g, u, e) * g % e
      , _ = Fe(y, a, e) * m % e
      , w = Fe(_, n, e) * c % e
      , S = Fe(w, o, e) * p % e
      , E = Fe(S, r, e) * d % e
      , A = Fe(E, Gs, e);
    if (!Us.eql(Us.sqr(A), t))
        throw new Error("Cannot find square root");
    return A
}
const Us = eg(Ad, void 0, void 0, {
    sqrt: hg
})
  , Ho = lg({
    a: BigInt(0),
    b: BigInt(7),
    Fp: Us,
    n: Ma,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: !0,
    endo: {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: t => {
            const e = Ma
              , n = BigInt("0x3086d221a7d46bcde86c90e49284eb15")
              , r = -fg * BigInt("0xe4437ed6010e88286f547fa90abfe4c3")
              , i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8")
              , s = n
              , o = BigInt("0x100000000000000000000000000000000")
              , a = $a(s * t, e)
              , u = $a(-r * t, e);
            let d = Be(t - a * n - u * i, e)
              , c = Be(-a * r - u * s, e);
            const l = d > o
              , f = c > o;
            if (l && (d = e - d),
            f && (c = e - c),
            d > o || c > o)
                throw new Error("splitScalar: Endomorphism failed, k=" + t);
            return {
                k1neg: l,
                k1: d,
                k2neg: f,
                k2: c
            }
        }
    }
}, Vi);
BigInt(0);
Ho.ProjectivePoint;
const mg = Object.freeze(Object.defineProperty({
    __proto__: null,
    secp256k1: Ho
}, Symbol.toStringTag, {
    value: "Module"
}));
var vs;
const xt = (vs = Ho) !== null && vs !== void 0 ? vs : mg
  , Ha = BigInt("0xffffffffffffffff")
  , Sr = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
  , pg = xt.CURVE.n
  , gg = pg / BigInt(2)
  , yg = {
    type: "object",
    required: ["crypto", "id", "version", "address"],
    properties: {
        crypto: {
            type: "object",
            required: ["cipher", "ciphertext", "cipherparams", "kdf", "kdfparams", "mac"],
            properties: {
                cipher: {
                    type: "string"
                },
                ciphertext: {
                    type: "string"
                },
                cipherparams: {
                    type: "object"
                },
                kdf: {
                    type: "string"
                },
                kdfparams: {
                    type: "object"
                },
                salt: {
                    type: "string"
                },
                mac: {
                    type: "string"
                }
            }
        },
        id: {
            type: "string"
        },
        version: {
            type: "number"
        },
        address: {
            type: "string"
        }
    }
};
var Ti;
(function(t) {
    t[t.Mainnet = 1] = "Mainnet",
    t[t.Goerli = 5] = "Goerli",
    t[t.Sepolia = 11155111] = "Sepolia"
}
)(Ti || (Ti = {}));
var de;
(function(t) {
    t.Chainstart = "chainstart",
    t.Homestead = "homestead",
    t.Dao = "dao",
    t.TangerineWhistle = "tangerineWhistle",
    t.SpuriousDragon = "spuriousDragon",
    t.Byzantium = "byzantium",
    t.Constantinople = "constantinople",
    t.Petersburg = "petersburg",
    t.Istanbul = "istanbul",
    t.MuirGlacier = "muirGlacier",
    t.Berlin = "berlin",
    t.London = "london",
    t.ArrowGlacier = "arrowGlacier",
    t.GrayGlacier = "grayGlacier",
    t.MergeForkIdTransition = "mergeForkIdTransition",
    t.Merge = "merge",
    t.Shanghai = "shanghai",
    t.ShardingForkDev = "shardingFork"
}
)(de || (de = {}));
var ja;
(function(t) {
    t.ProofOfStake = "pos",
    t.ProofOfWork = "pow",
    t.ProofOfAuthority = "poa"
}
)(ja || (ja = {}));
var Da;
(function(t) {
    t.Ethash = "ethash",
    t.Clique = "clique",
    t.Casper = "casper"
}
)(Da || (Da = {}));
var Ie;
(function(t) {
    t.PolygonMainnet = "polygon-mainnet",
    t.PolygonMumbai = "polygon-mumbai",
    t.ArbitrumRinkebyTestnet = "arbitrum-rinkeby-testnet",
    t.ArbitrumOne = "arbitrum-one",
    t.xDaiChain = "x-dai-chain",
    t.OptimisticKovan = "optimistic-kovan",
    t.OptimisticEthereum = "optimistic-ethereum"
}
)(Ie || (Ie = {}));
var qe;
(function(t) {
    t[t.Number = 0] = "Number",
    t[t.BigInt = 1] = "BigInt",
    t[t.Uint8Array = 2] = "Uint8Array",
    t[t.PrefixedHexString = 3] = "PrefixedHexString"
}
)(qe || (qe = {}));
const Pd = t => {
    if (typeof t != "string")
        throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof t}`);
    return po(t) ? t.slice(2) : t
}
;
function vg(t) {
    return !t || t === "0x0" ? "0x0000000000000000" : po(t) ? `0x${Pd(t).padStart(16, "0")}` : `0x${t.padStart(16, "0")}`
}
const Rd = function(t) {
    if (!Number.isSafeInteger(t) || t < 0)
        throw new Error(`Received an invalid integer type: ${t}`);
    return `0x${t.toString(16)}`
};
function bg(t, e=!0) {
    var n, r;
    const {name: i, config: s, difficulty: o, mixHash: a, gasLimit: u, coinbase: d, baseFeePerGas: c} = t;
    let {extraData: l, timestamp: f, nonce: h} = t;
    const p = Number(f)
      , {chainId: m} = s;
    if (l === "" && (l = "0x"),
    po(f) || (f = Rd(parseInt(f))),
    h.length !== 18 && (h = vg(h)),
    s.eip155Block !== s.eip158Block)
        throw new Error("EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork");
    const g = {
        name: i,
        chainId: m,
        networkId: m,
        genesis: {
            timestamp: f,
            gasLimit: parseInt(u),
            difficulty: parseInt(o),
            nonce: h,
            extraData: l,
            mixHash: a,
            coinbase: d,
            baseFeePerGas: c
        },
        hardfork: void 0,
        hardforks: [],
        bootstrapNodes: [],
        consensus: s.clique !== void 0 ? {
            type: "poa",
            algorithm: "clique",
            clique: {
                period: (n = s.clique.period) !== null && n !== void 0 ? n : s.clique.blockperiodseconds,
                epoch: (r = s.clique.epoch) !== null && r !== void 0 ? r : s.clique.epochlength
            }
        } : {
            type: "pow",
            algorithm: "ethash",
            ethash: {}
        }
    }
      , y = {
        [de.Homestead]: {
            name: "homesteadBlock"
        },
        [de.Dao]: {
            name: "daoForkBlock"
        },
        [de.TangerineWhistle]: {
            name: "eip150Block"
        },
        [de.SpuriousDragon]: {
            name: "eip155Block"
        },
        [de.Byzantium]: {
            name: "byzantiumBlock"
        },
        [de.Constantinople]: {
            name: "constantinopleBlock"
        },
        [de.Petersburg]: {
            name: "petersburgBlock"
        },
        [de.Istanbul]: {
            name: "istanbulBlock"
        },
        [de.MuirGlacier]: {
            name: "muirGlacierBlock"
        },
        [de.Berlin]: {
            name: "berlinBlock"
        },
        [de.London]: {
            name: "londonBlock"
        },
        [de.MergeForkIdTransition]: {
            name: "mergeForkBlock",
            postMerge: e
        },
        [de.Shanghai]: {
            name: "shanghaiTime",
            postMerge: !0,
            isTimestamp: !0
        },
        [de.ShardingForkDev]: {
            name: "shardingForkTime",
            postMerge: !0,
            isTimestamp: !0
        }
    }
      , _ = Object.keys(y).reduce( (E, A) => (E[y[A].name] = A,
    E), {})
      , w = Object.keys(s).filter(E => _[E] !== void 0 && s[E] !== void 0 && s[E] !== null);
    if (g.hardforks = w.map(E => ({
        name: _[E],
        block: y[_[E]].isTimestamp === !0 || typeof s[E] != "number" ? null : s[E],
        timestamp: y[_[E]].isTimestamp === !0 && typeof s[E] == "number" ? s[E] : void 0
    })).filter(E => E.block !== null || E.timestamp !== void 0),
    g.hardforks.sort( (E, A) => {
        var C, v;
        return ((C = E.block) !== null && C !== void 0 ? C : 1 / 0) - ((v = A.block) !== null && v !== void 0 ? v : 1 / 0)
    }
    ),
    g.hardforks.sort( (E, A) => {
        var C, v;
        return ((C = E.timestamp) !== null && C !== void 0 ? C : p) - ((v = A.timestamp) !== null && v !== void 0 ? v : p)
    }
    ),
    s.terminalTotalDifficulty !== void 0) {
        const E = {
            name: de.Merge,
            ttd: s.terminalTotalDifficulty,
            block: null
        }
          , A = g.hardforks.findIndex(C => {
            var v;
            return ((v = y[C.name]) === null || v === void 0 ? void 0 : v.postMerge) === !0
        }
        );
        A !== -1 ? g.hardforks.splice(A, 0, E) : g.hardforks.push(E)
    }
    const S = g.hardforks.length > 0 ? g.hardforks.slice(-1)[0] : void 0;
    return g.hardfork = S == null ? void 0 : S.name,
    g.hardforks.unshift({
        name: de.Chainstart,
        block: 0
    }),
    g
}
function _g(t, e, n) {
    try {
        if (["config", "difficulty", "gasLimit", "alloc"].some(r => !(r in t)))
            throw new Error("Invalid format, expected geth genesis fields missing");
        return e !== void 0 && (t.name = e),
        bg(t, n)
    } catch (r) {
        throw new Error(`Error parsing parameters file: ${r.message}`)
    }
}
function Bd(t) {
    let e = t;
    if (typeof e != "string")
        throw new Error(`[padToEven] value must be type 'string', received ${typeof e}`);
    return e.length % 2 && (e = `0${e}`),
    e
}
const wg = function(t) {
    const e = Rd(t);
    return ue(`0x${Bd(e.slice(2))}`)
}
  , fe = function(t) {
    if (t == null)
        return new Uint8Array;
    if (t instanceof Uint8Array)
        return t;
    if (Array.isArray(t))
        return Uint8Array.from(t);
    if (typeof t == "string") {
        if (!Dc(t))
            throw new Error(`Cannot convert string to Uint8Array. only supports 0x-prefixed hex strings and this string was given: ${t}`);
        return ue(Bd(Pd(t)))
    }
    if (typeof t == "number")
        return fe(He(t));
    if (typeof t == "bigint") {
        if (t < BigInt(0))
            throw new Error(`Cannot convert negative bigint to Uint8Array. Given: ${t}`);
        let e = t.toString(16);
        return e.length % 2 && (e = `0${e}`),
        fe(`0x${e}`)
    }
    if (t.toArray)
        return Uint8Array.from(t.toArray());
    throw new Error("invalid type")
};
function ae(t) {
    const e = X(t);
    return BigInt(e === "0x" ? 0 : e)
}
function xg(t) {
    return fe(`0x${t.toString(16)}`)
}
const Cd = function(t) {
    return new Uint8Array(t).fill(0)
}
  , Eg = function(t, e, n) {
    const r = Cd(e);
    return n ? t.length < e ? (r.set(t),
    r) : t.subarray(0, e) : t.length < e ? (r.set(t, e - t.length),
    r) : t.subarray(-e)
};
function jo(t) {
    if (!(t instanceof Uint8Array)) {
        const e = `This method only supports Uint8Array but input was: ${t}`;
        throw new Error(e)
    }
}
const Fa = function(t, e) {
    return jo(t),
    Eg(t, e, !1)
};
function Ig(t) {
    let e = t[0];
    for (; t.length > 0 && e.toString() === "0"; )
        t = t.slice(1),
        e = t[0];
    return t
}
const Si = function(t) {
    return jo(t),
    Ig(t)
}
  , he = t => `0x${t.toString(16)}`;
function ee(t) {
    return Si(xg(t))
}
function Tg(t, e) {
    return t === BigInt(0) || t === BigInt(1) ? t : e === void 0 ? t - BigInt(27) : t - (e * BigInt(2) + BigInt(35))
}
function Sg(t) {
    return t === BigInt(0) || t === BigInt(1)
}
const Do = function(t, e, n, r, i) {
    const s = Tg(e, i);
    if (!Sg(s))
        throw new Error("Invalid signature v value");
    return new xt.Signature(ae(n),ae(r)).addRecoveryBit(Number(s)).recoverPublicKey(t).toRawBytes(!1).slice(1)
};
function En(t, e) {
    if (t === null)
        return null;
    if (t === void 0)
        return;
    if (typeof t == "string" && !Dc(t))
        throw new Error(`A string must be provided with a 0x-prefix, given: ${t}`);
    if (typeof t == "number" && !Number.isSafeInteger(t))
        throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
    const n = fe(t);
    switch (e) {
    case qe.Uint8Array:
        return n;
    case qe.BigInt:
        return ae(n);
    case qe.Number:
        {
            const r = ae(n);
            if (r > BigInt(Number.MAX_SAFE_INTEGER))
                throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
            return Number(r)
        }
    case qe.PrefixedHexString:
        return X(n);
    default:
        throw new Error("unknown outputType")
    }
}
var vt = {};
Object.defineProperty(vt, "__esModule", {
    value: !0
});
var Me = vt.RLP = vt.utils = vt.decode = vt.encode = void 0;
function Fo(t) {
    if (Array.isArray(t)) {
        const n = [];
        let r = 0;
        for (let i = 0; i < t.length; i++) {
            const s = Fo(t[i]);
            n.push(s),
            r += s.length
        }
        return zs(Ua(r, 192), ...n)
    }
    const e = Hd(t);
    return e.length === 1 && e[0] < 128 ? e : zs(Ua(e.length, 128), e)
}
vt.encode = Fo;
function In(t, e, n) {
    if (n > t.length)
        throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
    return t.slice(e, n)
}
function Ga(t) {
    if (t[0] === 0)
        throw new Error("invalid RLP: extra zeros");
    return Ld(Od(t))
}
function Ua(t, e) {
    if (t < 56)
        return Uint8Array.from([t + e]);
    const n = Vs(t)
      , r = n.length / 2
      , i = Vs(e + 55 + r);
    return Uint8Array.from(ki(i + n))
}
function Nd(t, e=!1) {
    if (typeof t > "u" || t === null || t.length === 0)
        return Uint8Array.from([]);
    const n = Hd(t)
      , r = qs(n);
    if (e)
        return r;
    if (r.remainder.length !== 0)
        throw new Error("invalid RLP: remainder must be zero");
    return r.data
}
vt.decode = Nd;
function qs(t) {
    let e, n, r, i, s;
    const o = []
      , a = t[0];
    if (a <= 127)
        return {
            data: t.slice(0, 1),
            remainder: t.slice(1)
        };
    if (a <= 183) {
        if (e = a - 127,
        a === 128 ? r = Uint8Array.from([]) : r = In(t, 1, e),
        e === 2 && r[0] < 128)
            throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
        return {
            data: r,
            remainder: t.slice(e)
        }
    } else if (a <= 191) {
        if (n = a - 182,
        t.length - 1 < n)
            throw new Error("invalid RLP: not enough bytes for string length");
        if (e = Ga(In(t, 1, n)),
        e <= 55)
            throw new Error("invalid RLP: expected string length to be greater than 55");
        return r = In(t, n, e + n),
        {
            data: r,
            remainder: t.slice(e + n)
        }
    } else if (a <= 247) {
        for (e = a - 191,
        i = In(t, 1, e); i.length; )
            s = qs(i),
            o.push(s.data),
            i = s.remainder;
        return {
            data: o,
            remainder: t.slice(e)
        }
    } else {
        if (n = a - 246,
        e = Ga(In(t, 1, n)),
        e < 56)
            throw new Error("invalid RLP: encoded list too short");
        const u = n + e;
        if (u > t.length)
            throw new Error("invalid RLP: total length is larger than the data");
        for (i = In(t, n, u); i.length; )
            s = qs(i),
            o.push(s.data),
            i = s.remainder;
        return {
            data: o,
            remainder: t.slice(u)
        }
    }
}
const kg = Array.from({
    length: 256
}, (t, e) => e.toString(16).padStart(2, "0"));
function Od(t) {
    let e = "";
    for (let n = 0; n < t.length; n++)
        e += kg[t[n]];
    return e
}
function Ld(t) {
    const e = Number.parseInt(t, 16);
    if (Number.isNaN(e))
        throw new Error("Invalid byte sequence");
    return e
}
function ki(t) {
    if (typeof t != "string")
        throw new TypeError("hexToBytes: expected string, got " + typeof t);
    if (t.length % 2)
        throw new Error("hexToBytes: received invalid unpadded hex");
    const e = new Uint8Array(t.length / 2);
    for (let n = 0; n < e.length; n++) {
        const r = n * 2;
        e[n] = Ld(t.slice(r, r + 2))
    }
    return e
}
function zs(...t) {
    if (t.length === 1)
        return t[0];
    const e = t.reduce( (r, i) => r + i.length, 0)
      , n = new Uint8Array(e);
    for (let r = 0, i = 0; r < t.length; r++) {
        const s = t[r];
        n.set(s, i),
        i += s.length
    }
    return n
}
function Md(t) {
    return new TextEncoder().encode(t)
}
function Vs(t) {
    if (t < 0)
        throw new Error("Invalid integer as argument, must be unsigned!");
    const e = t.toString(16);
    return e.length % 2 ? `0${e}` : e
}
function Ag(t) {
    return t.length % 2 ? `0${t}` : t
}
function $d(t) {
    return t.length >= 2 && t[0] === "0" && t[1] === "x"
}
function Pg(t) {
    return typeof t != "string" ? t : $d(t) ? t.slice(2) : t
}
function Hd(t) {
    if (t instanceof Uint8Array)
        return t;
    if (typeof t == "string")
        return $d(t) ? ki(Ag(Pg(t))) : Md(t);
    if (typeof t == "number" || typeof t == "bigint")
        return t ? ki(Vs(t)) : Uint8Array.from([]);
    if (t == null)
        return Uint8Array.from([]);
    throw new Error("toBytes: received unsupported type " + typeof t)
}
vt.utils = {
    bytesToHex: Od,
    concatBytes: zs,
    hexToBytes: ki,
    utf8ToBytes: Md
};
Me = vt.RLP = {
    encode: Fo,
    decode: Nd
};
var jd = {};
/*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
(function(t) {
    (function(e) {
        e(typeof DO_NOT_EXPORT_CRC > "u" ? t : {})
    }
    )(function(e) {
        e.version = "1.2.2";
        function n() {
            for (var v = 0, j = new Array(256), x = 0; x != 256; ++x)
                v = x,
                v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1,
                v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1,
                v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1,
                v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1,
                v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1,
                v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1,
                v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1,
                v = v & 1 ? -306674912 ^ v >>> 1 : v >>> 1,
                j[x] = v;
            return typeof Int32Array < "u" ? new Int32Array(j) : j
        }
        var r = n();
        function i(v) {
            var j = 0
              , x = 0
              , P = 0
              , L = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
            for (P = 0; P != 256; ++P)
                L[P] = v[P];
            for (P = 0; P != 256; ++P)
                for (x = v[P],
                j = 256 + P; j < 4096; j += 256)
                    x = L[j] = x >>> 8 ^ v[x & 255];
            var D = [];
            for (P = 1; P != 16; ++P)
                D[P - 1] = typeof Int32Array < "u" ? L.subarray(P * 256, P * 256 + 256) : L.slice(P * 256, P * 256 + 256);
            return D
        }
        var s = i(r)
          , o = s[0]
          , a = s[1]
          , u = s[2]
          , d = s[3]
          , c = s[4]
          , l = s[5]
          , f = s[6]
          , h = s[7]
          , p = s[8]
          , m = s[9]
          , g = s[10]
          , y = s[11]
          , _ = s[12]
          , w = s[13]
          , S = s[14];
        function E(v, j) {
            for (var x = j ^ -1, P = 0, L = v.length; P < L; )
                x = x >>> 8 ^ r[(x ^ v.charCodeAt(P++)) & 255];
            return ~x
        }
        function A(v, j) {
            for (var x = j ^ -1, P = v.length - 15, L = 0; L < P; )
                x = S[v[L++] ^ x & 255] ^ w[v[L++] ^ x >> 8 & 255] ^ _[v[L++] ^ x >> 16 & 255] ^ y[v[L++] ^ x >>> 24] ^ g[v[L++]] ^ m[v[L++]] ^ p[v[L++]] ^ h[v[L++]] ^ f[v[L++]] ^ l[v[L++]] ^ c[v[L++]] ^ d[v[L++]] ^ u[v[L++]] ^ a[v[L++]] ^ o[v[L++]] ^ r[v[L++]];
            for (P += 15; L < P; )
                x = x >>> 8 ^ r[(x ^ v[L++]) & 255];
            return ~x
        }
        function C(v, j) {
            for (var x = j ^ -1, P = 0, L = v.length, D = 0, pe = 0; P < L; )
                D = v.charCodeAt(P++),
                D < 128 ? x = x >>> 8 ^ r[(x ^ D) & 255] : D < 2048 ? (x = x >>> 8 ^ r[(x ^ (192 | D >> 6 & 31)) & 255],
                x = x >>> 8 ^ r[(x ^ (128 | D & 63)) & 255]) : D >= 55296 && D < 57344 ? (D = (D & 1023) + 64,
                pe = v.charCodeAt(P++) & 1023,
                x = x >>> 8 ^ r[(x ^ (240 | D >> 8 & 7)) & 255],
                x = x >>> 8 ^ r[(x ^ (128 | D >> 2 & 63)) & 255],
                x = x >>> 8 ^ r[(x ^ (128 | pe >> 6 & 15 | (D & 3) << 4)) & 255],
                x = x >>> 8 ^ r[(x ^ (128 | pe & 63)) & 255]) : (x = x >>> 8 ^ r[(x ^ (224 | D >> 12 & 15)) & 255],
                x = x >>> 8 ^ r[(x ^ (128 | D >> 6 & 63)) & 255],
                x = x >>> 8 ^ r[(x ^ (128 | D & 63)) & 255]);
            return ~x
        }
        e.table = r,
        e.bstr = E,
        e.buf = A,
        e.str = C
    })
}
)(jd);
const Rg = cc(jd)
  , Bg = {
    name: "goerli",
    chainId: 5,
    networkId: 5,
    defaultHardfork: "merge",
    consensus: {
        type: "poa",
        algorithm: "clique",
        clique: {
            period: 15,
            epoch: 3e4
        }
    },
    comment: "Cross-client PoA test network",
    url: "https://github.com/goerli/testnet",
    genesis: {
        timestamp: "0x5c51a607",
        gasLimit: 10485760,
        difficulty: 1,
        nonce: "0x0000000000000000",
        extraData: "0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    hardforks: [{
        name: "chainstart",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "homestead",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "tangerineWhistle",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "spuriousDragon",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "byzantium",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "constantinople",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "petersburg",
        block: 0,
        forkHash: "0xa3f5ab08"
    }, {
        name: "istanbul",
        block: 1561651,
        forkHash: "0xc25efa5c"
    }, {
        name: "berlin",
        block: 4460644,
        forkHash: "0x757a1c47"
    }, {
        name: "london",
        block: 5062605,
        forkHash: "0xb8c6299d"
    }, {
        "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://goerli.etherscan.io/block/7382818",
        name: "merge",
        ttd: "10790000",
        block: 7382819,
        forkHash: "0xb8c6299d"
    }, {
        name: "mergeForkIdTransition",
        block: null,
        forkHash: null
    }, {
        name: "shanghai",
        block: null,
        forkHash: null
    }],
    bootstrapNodes: [],
    dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"]
}
  , Cg = {
    name: "mainnet",
    chainId: 1,
    networkId: 1,
    defaultHardfork: "merge",
    consensus: {
        type: "pow",
        algorithm: "ethash",
        ethash: {}
    },
    comment: "The Ethereum main chain",
    url: "https://ethstats.net/",
    genesis: {
        gasLimit: 5e3,
        difficulty: 17179869184,
        nonce: "0x0000000000000042",
        extraData: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"
    },
    hardforks: [{
        name: "chainstart",
        block: 0,
        forkHash: "0xfc64ec04"
    }, {
        name: "homestead",
        block: 115e4,
        forkHash: "0x97c2c34c"
    }, {
        name: "dao",
        block: 192e4,
        forkHash: "0x91d1f948"
    }, {
        name: "tangerineWhistle",
        block: 2463e3,
        forkHash: "0x7a64da13"
    }, {
        name: "spuriousDragon",
        block: 2675e3,
        forkHash: "0x3edd5b10"
    }, {
        name: "byzantium",
        block: 437e4,
        forkHash: "0xa00bc324"
    }, {
        name: "constantinople",
        block: 728e4,
        forkHash: "0x668db0af"
    }, {
        name: "petersburg",
        block: 728e4,
        forkHash: "0x668db0af"
    }, {
        name: "istanbul",
        block: 9069e3,
        forkHash: "0x879d6e30"
    }, {
        name: "muirGlacier",
        block: 92e5,
        forkHash: "0xe029e991"
    }, {
        name: "berlin",
        block: 12244e3,
        forkHash: "0x0eb440f6"
    }, {
        name: "london",
        block: 12965e3,
        forkHash: "0xb715077d"
    }, {
        name: "arrowGlacier",
        block: 13773e3,
        forkHash: "0x20c327fc"
    }, {
        name: "grayGlacier",
        block: 1505e4,
        forkHash: "0xf0afd0e3"
    }, {
        "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://etherscan.io/block/15537393",
        name: "merge",
        ttd: "58750000000000000000000",
        block: 15537394,
        forkHash: "0xf0afd0e3"
    }, {
        name: "mergeForkIdTransition",
        block: null,
        forkHash: null
    }, {
        name: "shanghai",
        block: null,
        forkHash: null
    }],
    bootstrapNodes: [],
    dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"]
}
  , Ng = {
    name: "sepolia",
    chainId: 11155111,
    networkId: 11155111,
    defaultHardfork: "merge",
    consensus: {
        type: "pow",
        algorithm: "ethash",
        ethash: {}
    },
    comment: "PoW test network to replace Ropsten",
    url: "https://github.com/ethereum/go-ethereum/pull/23730",
    genesis: {
        timestamp: "0x6159af19",
        gasLimit: 3e7,
        difficulty: 131072,
        nonce: "0x0000000000000000",
        extraData: "0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521"
    },
    hardforks: [{
        name: "chainstart",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "homestead",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "tangerineWhistle",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "spuriousDragon",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "byzantium",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "constantinople",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "petersburg",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "istanbul",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "muirGlacier",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "berlin",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        name: "london",
        block: 0,
        forkHash: "0xfe3366e7"
    }, {
        "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://sepolia.etherscan.io/block/1450408",
        name: "merge",
        ttd: "17000000000000000",
        block: 1450409,
        forkHash: "0xfe3366e7"
    }, {
        name: "mergeForkIdTransition",
        block: 1735371,
        forkHash: "0xb96cbd13"
    }, {
        name: "shanghai",
        block: null,
        timestamp: "1677557088",
        forkHash: "0xf7f9bc08"
    }],
    bootstrapNodes: [],
    dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net"]
}
  , Og = {
    name: "EIP-1153",
    number: 1153,
    comment: "Transient Storage",
    url: "https://eips.ethereum.org/EIPS/eip-1153",
    status: "Review",
    minimumHardfork: "chainstart",
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {
        tstore: {
            v: 100,
            d: "Base fee of the TSTORE opcode"
        },
        tload: {
            v: 100,
            d: "Base fee of the TLOAD opcode"
        }
    },
    vm: {},
    pow: {}
}
  , Lg = {
    name: "EIP-1559",
    number: 1559,
    comment: "Fee market change for ETH 1.0 chain",
    url: "https://eips.ethereum.org/EIPS/eip-1559",
    status: "Final",
    minimumHardfork: "berlin",
    requiredEIPs: [2930],
    gasConfig: {
        baseFeeMaxChangeDenominator: {
            v: 8,
            d: "Maximum base fee change denominator"
        },
        elasticityMultiplier: {
            v: 2,
            d: "Maximum block gas target elasticity"
        },
        initialBaseFee: {
            v: 1e9,
            d: "Initial base fee on first EIP1559 block"
        }
    },
    gasPrices: {},
    vm: {},
    pow: {}
}
  , Mg = {
    name: "EIP-2315",
    number: 2315,
    comment: "Simple subroutines for the EVM",
    url: "https://eips.ethereum.org/EIPS/eip-2315",
    status: "Draft",
    minimumHardfork: "istanbul",
    gasConfig: {},
    gasPrices: {
        beginsub: {
            v: 2,
            d: "Base fee of the BEGINSUB opcode"
        },
        returnsub: {
            v: 5,
            d: "Base fee of the RETURNSUB opcode"
        },
        jumpsub: {
            v: 10,
            d: "Base fee of the JUMPSUB opcode"
        }
    },
    vm: {},
    pow: {}
}
  , $g = {
    name: "EIP-2537",
    number: 2537,
    comment: "BLS12-381 precompiles",
    url: "https://eips.ethereum.org/EIPS/eip-2537",
    status: "Draft",
    minimumHardfork: "chainstart",
    gasConfig: {},
    gasPrices: {
        Bls12381G1AddGas: {
            v: 600,
            d: "Gas cost of a single BLS12-381 G1 addition precompile-call"
        },
        Bls12381G1MulGas: {
            v: 12e3,
            d: "Gas cost of a single BLS12-381 G1 multiplication precompile-call"
        },
        Bls12381G2AddGas: {
            v: 4500,
            d: "Gas cost of a single BLS12-381 G2 addition precompile-call"
        },
        Bls12381G2MulGas: {
            v: 55e3,
            d: "Gas cost of a single BLS12-381 G2 multiplication precompile-call"
        },
        Bls12381PairingBaseGas: {
            v: 115e3,
            d: "Base gas cost of BLS12-381 pairing check"
        },
        Bls12381PairingPerPairGas: {
            v: 23e3,
            d: "Per-pair gas cost of BLS12-381 pairing check"
        },
        Bls12381MapG1Gas: {
            v: 5500,
            d: "Gas cost of BLS12-381 map field element to G1"
        },
        Bls12381MapG2Gas: {
            v: 11e4,
            d: "Gas cost of BLS12-381 map field element to G2"
        },
        Bls12381MultiExpGasDiscount: {
            v: [[1, 1200], [2, 888], [3, 764], [4, 641], [5, 594], [6, 547], [7, 500], [8, 453], [9, 438], [10, 423], [11, 408], [12, 394], [13, 379], [14, 364], [15, 349], [16, 334], [17, 330], [18, 326], [19, 322], [20, 318], [21, 314], [22, 310], [23, 306], [24, 302], [25, 298], [26, 294], [27, 289], [28, 285], [29, 281], [30, 277], [31, 273], [32, 269], [33, 268], [34, 266], [35, 265], [36, 263], [37, 262], [38, 260], [39, 259], [40, 257], [41, 256], [42, 254], [43, 253], [44, 251], [45, 250], [46, 248], [47, 247], [48, 245], [49, 244], [50, 242], [51, 241], [52, 239], [53, 238], [54, 236], [55, 235], [56, 233], [57, 232], [58, 231], [59, 229], [60, 228], [61, 226], [62, 225], [63, 223], [64, 222], [65, 221], [66, 220], [67, 219], [68, 219], [69, 218], [70, 217], [71, 216], [72, 216], [73, 215], [74, 214], [75, 213], [76, 213], [77, 212], [78, 211], [79, 211], [80, 210], [81, 209], [82, 208], [83, 208], [84, 207], [85, 206], [86, 205], [87, 205], [88, 204], [89, 203], [90, 202], [91, 202], [92, 201], [93, 200], [94, 199], [95, 199], [96, 198], [97, 197], [98, 196], [99, 196], [100, 195], [101, 194], [102, 193], [103, 193], [104, 192], [105, 191], [106, 191], [107, 190], [108, 189], [109, 188], [110, 188], [111, 187], [112, 186], [113, 185], [114, 185], [115, 184], [116, 183], [117, 182], [118, 182], [119, 181], [120, 180], [121, 179], [122, 179], [123, 178], [124, 177], [125, 176], [126, 176], [127, 175], [128, 174]],
            d: "Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"
        }
    },
    vm: {},
    pow: {}
}
  , Hg = {
    name: "EIP-2565",
    number: 2565,
    comment: "ModExp gas cost",
    url: "https://eips.ethereum.org/EIPS/eip-2565",
    status: "Final",
    minimumHardfork: "byzantium",
    gasConfig: {},
    gasPrices: {
        modexpGquaddivisor: {
            v: 3,
            d: "Gquaddivisor from modexp precompile for gas calculation"
        }
    },
    vm: {},
    pow: {}
}
  , jg = {
    name: "EIP-2718",
    comment: "Typed Transaction Envelope",
    url: "https://eips.ethereum.org/EIPS/eip-2718",
    status: "Final",
    minimumHardfork: "chainstart",
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , Dg = {
    name: "EIP-2929",
    comment: "Gas cost increases for state access opcodes",
    url: "https://eips.ethereum.org/EIPS/eip-2929",
    status: "Final",
    minimumHardfork: "chainstart",
    gasConfig: {},
    gasPrices: {
        coldsload: {
            v: 2100,
            d: "Gas cost of the first read of storage from a given location (per transaction)"
        },
        coldaccountaccess: {
            v: 2600,
            d: "Gas cost of the first read of a given address (per transaction)"
        },
        warmstorageread: {
            v: 100,
            d: "Gas cost of reading storage locations which have already loaded 'cold'"
        },
        sstoreCleanGasEIP2200: {
            v: 2900,
            d: "Once per SSTORE operation from clean non-zero to something else"
        },
        sstoreNoopGasEIP2200: {
            v: 100,
            d: "Once per SSTORE operation if the value doesn't change"
        },
        sstoreDirtyGasEIP2200: {
            v: 100,
            d: "Once per SSTORE operation if a dirty value is changed"
        },
        sstoreInitRefundEIP2200: {
            v: 19900,
            d: "Once per SSTORE operation for resetting to the original zero value"
        },
        sstoreCleanRefundEIP2200: {
            v: 4900,
            d: "Once per SSTORE operation for resetting to the original non-zero value"
        },
        call: {
            v: 0,
            d: "Base fee of the CALL opcode"
        },
        callcode: {
            v: 0,
            d: "Base fee of the CALLCODE opcode"
        },
        delegatecall: {
            v: 0,
            d: "Base fee of the DELEGATECALL opcode"
        },
        staticcall: {
            v: 0,
            d: "Base fee of the STATICCALL opcode"
        },
        balance: {
            v: 0,
            d: "Base fee of the BALANCE opcode"
        },
        extcodesize: {
            v: 0,
            d: "Base fee of the EXTCODESIZE opcode"
        },
        extcodecopy: {
            v: 0,
            d: "Base fee of the EXTCODECOPY opcode"
        },
        extcodehash: {
            v: 0,
            d: "Base fee of the EXTCODEHASH opcode"
        },
        sload: {
            v: 0,
            d: "Base fee of the SLOAD opcode"
        },
        sstore: {
            v: 0,
            d: "Base fee of the SSTORE opcode"
        }
    },
    vm: {},
    pow: {}
}
  , Fg = {
    name: "EIP-2930",
    comment: "Optional access lists",
    url: "https://eips.ethereum.org/EIPS/eip-2930",
    status: "Final",
    minimumHardfork: "istanbul",
    requiredEIPs: [2718, 2929],
    gasConfig: {},
    gasPrices: {
        accessListStorageKeyCost: {
            v: 1900,
            d: "Gas cost per storage key in an Access List transaction"
        },
        accessListAddressCost: {
            v: 2400,
            d: "Gas cost per storage key in an Access List transaction"
        }
    },
    vm: {},
    pow: {}
}
  , Gg = {
    name: "EIP-3198",
    number: 3198,
    comment: "BASEFEE opcode",
    url: "https://eips.ethereum.org/EIPS/eip-3198",
    status: "Final",
    minimumHardfork: "london",
    gasConfig: {},
    gasPrices: {
        basefee: {
            v: 2,
            d: "Gas cost of the BASEFEE opcode"
        }
    },
    vm: {},
    pow: {}
}
  , Ug = {
    name: "EIP-3529",
    comment: "Reduction in refunds",
    url: "https://eips.ethereum.org/EIPS/eip-3529",
    status: "Final",
    minimumHardfork: "berlin",
    requiredEIPs: [2929],
    gasConfig: {
        maxRefundQuotient: {
            v: 5,
            d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
        }
    },
    gasPrices: {
        selfdestructRefund: {
            v: 0,
            d: "Refunded following a selfdestruct operation"
        },
        sstoreClearRefundEIP2200: {
            v: 4800,
            d: "Once per SSTORE operation for clearing an originally existing storage slot"
        }
    },
    vm: {},
    pow: {}
}
  , qg = {
    name: "EIP-3540",
    number: 3540,
    comment: "EVM Object Format (EOF) v1",
    url: "https://eips.ethereum.org/EIPS/eip-3540",
    status: "Review",
    minimumHardfork: "london",
    requiredEIPs: [3541],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , zg = {
    name: "EIP-3541",
    comment: "Reject new contracts starting with the 0xEF byte",
    url: "https://eips.ethereum.org/EIPS/eip-3541",
    status: "Final",
    minimumHardfork: "berlin",
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , Vg = {
    name: "EIP-3554",
    comment: "Reduction in refunds",
    url: "Difficulty Bomb Delay to December 1st 2021",
    status: "Final",
    minimumHardfork: "muirGlacier",
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {
        difficultyBombDelay: {
            v: 95e5,
            d: "the amount of blocks to delay the difficulty bomb with"
        }
    }
}
  , Wg = {
    name: "EIP-3607",
    number: 3607,
    comment: "Reject transactions from senders with deployed code",
    url: "https://eips.ethereum.org/EIPS/eip-3607",
    status: "Final",
    minimumHardfork: "chainstart",
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , Zg = {
    name: "EIP-3651",
    number: 3198,
    comment: "Warm COINBASE",
    url: "https://eips.ethereum.org/EIPS/eip-3651",
    status: "Review",
    minimumHardfork: "london",
    requiredEIPs: [2929],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , Kg = {
    name: "EIP-3670",
    number: 3670,
    comment: "EOF - Code Validation",
    url: "https://eips.ethereum.org/EIPS/eip-3670",
    status: "Review",
    minimumHardfork: "london",
    requiredEIPs: [3540],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , Xg = {
    name: "EIP-3675",
    number: 3675,
    comment: "Upgrade consensus to Proof-of-Stake",
    url: "https://eips.ethereum.org/EIPS/eip-3675",
    status: "Final",
    minimumHardfork: "london",
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , Jg = {
    name: "EIP-3855",
    number: 3855,
    comment: "PUSH0 instruction",
    url: "https://eips.ethereum.org/EIPS/eip-3855",
    status: "Review",
    minimumHardfork: "chainstart",
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {
        push0: {
            v: 2,
            d: "Base fee of the PUSH0 opcode"
        }
    },
    vm: {},
    pow: {}
}
  , Yg = {
    name: "EIP-3860",
    number: 3860,
    comment: "Limit and meter initcode",
    url: "https://eips.ethereum.org/EIPS/eip-3860",
    status: "Review",
    minimumHardfork: "spuriousDragon",
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {
        initCodeWordCost: {
            v: 2,
            d: "Gas to pay for each word (32 bytes) of initcode when creating a contract"
        }
    },
    vm: {
        maxInitCodeSize: {
            v: 49152,
            d: "Maximum length of initialization code when creating a contract"
        }
    },
    pow: {}
}
  , Qg = {
    name: "EIP-4345",
    number: 4345,
    comment: "Difficulty Bomb Delay to June 2022",
    url: "https://eips.ethereum.org/EIPS/eip-4345",
    status: "Final",
    minimumHardfork: "london",
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {
        difficultyBombDelay: {
            v: 107e5,
            d: "the amount of blocks to delay the difficulty bomb with"
        }
    }
}
  , ey = {
    name: "EIP-4399",
    number: 4399,
    comment: "Supplant DIFFICULTY opcode with PREVRANDAO",
    url: "https://eips.ethereum.org/EIPS/eip-4399",
    status: "Review",
    minimumHardfork: "london",
    requiredEIPs: [],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , ty = {
    name: "EIP-5133",
    number: 5133,
    comment: "Delaying Difficulty Bomb to mid-September 2022",
    url: "https://eips.ethereum.org/EIPS/eip-5133",
    status: "Draft",
    minimumHardfork: "grayGlacier",
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {
        difficultyBombDelay: {
            v: 114e5,
            d: "the amount of blocks to delay the difficulty bomb with"
        }
    }
}
  , Tn = {
    1153: Og,
    1559: Lg,
    2315: Mg,
    2537: $g,
    2565: Hg,
    2718: jg,
    2929: Dg,
    2930: Fg,
    3198: Gg,
    3529: Ug,
    3540: qg,
    3541: zg,
    3554: Vg,
    3607: Wg,
    3651: Zg,
    3670: Kg,
    3675: Xg,
    3855: Jg,
    3860: Yg,
    4345: Qg,
    4399: ey,
    5133: ty
}
  , ny = {
    name: "chainstart",
    comment: "Start of the Ethereum main chain",
    url: "",
    status: "",
    gasConfig: {
        minGasLimit: {
            v: 5e3,
            d: "Minimum the gas limit may ever be"
        },
        gasLimitBoundDivisor: {
            v: 1024,
            d: "The bound divisor of the gas limit, used in update calculations"
        },
        maxRefundQuotient: {
            v: 2,
            d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
        }
    },
    gasPrices: {
        base: {
            v: 2,
            d: "Gas base cost, used e.g. for ChainID opcode (Istanbul)"
        },
        tierStep: {
            v: [0, 2, 3, 5, 8, 10, 20],
            d: "Once per operation, for a selection of them"
        },
        exp: {
            v: 10,
            d: "Base fee of the EXP opcode"
        },
        expByte: {
            v: 10,
            d: "Times ceil(log256(exponent)) for the EXP instruction"
        },
        sha3: {
            v: 30,
            d: "Base fee of the SHA3 opcode"
        },
        sha3Word: {
            v: 6,
            d: "Once per word of the SHA3 operation's data"
        },
        sload: {
            v: 50,
            d: "Base fee of the SLOAD opcode"
        },
        sstoreSet: {
            v: 2e4,
            d: "Once per SSTORE operation if the zeroness changes from zero"
        },
        sstoreReset: {
            v: 5e3,
            d: "Once per SSTORE operation if the zeroness does not change from zero"
        },
        sstoreRefund: {
            v: 15e3,
            d: "Once per SSTORE operation if the zeroness changes to zero"
        },
        jumpdest: {
            v: 1,
            d: "Base fee of the JUMPDEST opcode"
        },
        log: {
            v: 375,
            d: "Base fee of the LOG opcode"
        },
        logData: {
            v: 8,
            d: "Per byte in a LOG* operation's data"
        },
        logTopic: {
            v: 375,
            d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"
        },
        create: {
            v: 32e3,
            d: "Base fee of the CREATE opcode"
        },
        call: {
            v: 40,
            d: "Base fee of the CALL opcode"
        },
        callStipend: {
            v: 2300,
            d: "Free gas given at beginning of call"
        },
        callValueTransfer: {
            v: 9e3,
            d: "Paid for CALL when the value transfor is non-zero"
        },
        callNewAccount: {
            v: 25e3,
            d: "Paid for CALL when the destination address didn't exist prior"
        },
        selfdestructRefund: {
            v: 24e3,
            d: "Refunded following a selfdestruct operation"
        },
        memory: {
            v: 3,
            d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"
        },
        quadCoeffDiv: {
            v: 512,
            d: "Divisor for the quadratic particle of the memory cost equation"
        },
        createData: {
            v: 200,
            d: ""
        },
        tx: {
            v: 21e3,
            d: "Per transaction. NOTE: Not payable on data of calls between transactions"
        },
        txCreation: {
            v: 32e3,
            d: "The cost of creating a contract via tx"
        },
        txDataZero: {
            v: 4,
            d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"
        },
        txDataNonZero: {
            v: 68,
            d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
        },
        copy: {
            v: 3,
            d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"
        },
        ecRecover: {
            v: 3e3,
            d: ""
        },
        sha256: {
            v: 60,
            d: ""
        },
        sha256Word: {
            v: 12,
            d: ""
        },
        ripemd160: {
            v: 600,
            d: ""
        },
        ripemd160Word: {
            v: 120,
            d: ""
        },
        identity: {
            v: 15,
            d: ""
        },
        identityWord: {
            v: 3,
            d: ""
        },
        stop: {
            v: 0,
            d: "Base fee of the STOP opcode"
        },
        add: {
            v: 3,
            d: "Base fee of the ADD opcode"
        },
        mul: {
            v: 5,
            d: "Base fee of the MUL opcode"
        },
        sub: {
            v: 3,
            d: "Base fee of the SUB opcode"
        },
        div: {
            v: 5,
            d: "Base fee of the DIV opcode"
        },
        sdiv: {
            v: 5,
            d: "Base fee of the SDIV opcode"
        },
        mod: {
            v: 5,
            d: "Base fee of the MOD opcode"
        },
        smod: {
            v: 5,
            d: "Base fee of the SMOD opcode"
        },
        addmod: {
            v: 8,
            d: "Base fee of the ADDMOD opcode"
        },
        mulmod: {
            v: 8,
            d: "Base fee of the MULMOD opcode"
        },
        signextend: {
            v: 5,
            d: "Base fee of the SIGNEXTEND opcode"
        },
        lt: {
            v: 3,
            d: "Base fee of the LT opcode"
        },
        gt: {
            v: 3,
            d: "Base fee of the GT opcode"
        },
        slt: {
            v: 3,
            d: "Base fee of the SLT opcode"
        },
        sgt: {
            v: 3,
            d: "Base fee of the SGT opcode"
        },
        eq: {
            v: 3,
            d: "Base fee of the EQ opcode"
        },
        iszero: {
            v: 3,
            d: "Base fee of the ISZERO opcode"
        },
        and: {
            v: 3,
            d: "Base fee of the AND opcode"
        },
        or: {
            v: 3,
            d: "Base fee of the OR opcode"
        },
        xor: {
            v: 3,
            d: "Base fee of the XOR opcode"
        },
        not: {
            v: 3,
            d: "Base fee of the NOT opcode"
        },
        byte: {
            v: 3,
            d: "Base fee of the BYTE opcode"
        },
        address: {
            v: 2,
            d: "Base fee of the ADDRESS opcode"
        },
        balance: {
            v: 20,
            d: "Base fee of the BALANCE opcode"
        },
        origin: {
            v: 2,
            d: "Base fee of the ORIGIN opcode"
        },
        caller: {
            v: 2,
            d: "Base fee of the CALLER opcode"
        },
        callvalue: {
            v: 2,
            d: "Base fee of the CALLVALUE opcode"
        },
        calldataload: {
            v: 3,
            d: "Base fee of the CALLDATALOAD opcode"
        },
        calldatasize: {
            v: 2,
            d: "Base fee of the CALLDATASIZE opcode"
        },
        calldatacopy: {
            v: 3,
            d: "Base fee of the CALLDATACOPY opcode"
        },
        codesize: {
            v: 2,
            d: "Base fee of the CODESIZE opcode"
        },
        codecopy: {
            v: 3,
            d: "Base fee of the CODECOPY opcode"
        },
        gasprice: {
            v: 2,
            d: "Base fee of the GASPRICE opcode"
        },
        extcodesize: {
            v: 20,
            d: "Base fee of the EXTCODESIZE opcode"
        },
        extcodecopy: {
            v: 20,
            d: "Base fee of the EXTCODECOPY opcode"
        },
        blockhash: {
            v: 20,
            d: "Base fee of the BLOCKHASH opcode"
        },
        coinbase: {
            v: 2,
            d: "Base fee of the COINBASE opcode"
        },
        timestamp: {
            v: 2,
            d: "Base fee of the TIMESTAMP opcode"
        },
        number: {
            v: 2,
            d: "Base fee of the NUMBER opcode"
        },
        difficulty: {
            v: 2,
            d: "Base fee of the DIFFICULTY opcode"
        },
        gaslimit: {
            v: 2,
            d: "Base fee of the GASLIMIT opcode"
        },
        pop: {
            v: 2,
            d: "Base fee of the POP opcode"
        },
        mload: {
            v: 3,
            d: "Base fee of the MLOAD opcode"
        },
        mstore: {
            v: 3,
            d: "Base fee of the MSTORE opcode"
        },
        mstore8: {
            v: 3,
            d: "Base fee of the MSTORE8 opcode"
        },
        sstore: {
            v: 0,
            d: "Base fee of the SSTORE opcode"
        },
        jump: {
            v: 8,
            d: "Base fee of the JUMP opcode"
        },
        jumpi: {
            v: 10,
            d: "Base fee of the JUMPI opcode"
        },
        pc: {
            v: 2,
            d: "Base fee of the PC opcode"
        },
        msize: {
            v: 2,
            d: "Base fee of the MSIZE opcode"
        },
        gas: {
            v: 2,
            d: "Base fee of the GAS opcode"
        },
        push: {
            v: 3,
            d: "Base fee of the PUSH opcode"
        },
        dup: {
            v: 3,
            d: "Base fee of the DUP opcode"
        },
        swap: {
            v: 3,
            d: "Base fee of the SWAP opcode"
        },
        callcode: {
            v: 40,
            d: "Base fee of the CALLCODE opcode"
        },
        return: {
            v: 0,
            d: "Base fee of the RETURN opcode"
        },
        invalid: {
            v: 0,
            d: "Base fee of the INVALID opcode"
        },
        selfdestruct: {
            v: 0,
            d: "Base fee of the SELFDESTRUCT opcode"
        }
    },
    vm: {
        stackLimit: {
            v: 1024,
            d: "Maximum size of VM stack allowed"
        },
        callCreateDepth: {
            v: 1024,
            d: "Maximum depth of call/create stack"
        },
        maxExtraDataSize: {
            v: 32,
            d: "Maximum size extra data may be after Genesis"
        }
    },
    pow: {
        minimumDifficulty: {
            v: 131072,
            d: "The minimum that the difficulty may ever be"
        },
        difficultyBoundDivisor: {
            v: 2048,
            d: "The bound divisor of the difficulty, used in the update calculations"
        },
        durationLimit: {
            v: 13,
            d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"
        },
        epochDuration: {
            v: 3e4,
            d: "Duration between proof-of-work epochs"
        },
        timebombPeriod: {
            v: 1e5,
            d: "Exponential difficulty timebomb period"
        },
        minerReward: {
            v: "5000000000000000000",
            d: "the amount a miner get rewarded for mining a block"
        },
        difficultyBombDelay: {
            v: 0,
            d: "the amount of blocks to delay the difficulty bomb with"
        }
    }
}
  , ry = {
    name: "dao",
    comment: "DAO rescue hardfork",
    url: "https://eips.ethereum.org/EIPS/eip-779",
    status: "Final",
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , iy = {
    name: "homestead",
    comment: "Homestead hardfork with protocol and network changes",
    url: "https://eips.ethereum.org/EIPS/eip-606",
    status: "Final",
    gasConfig: {},
    gasPrices: {
        delegatecall: {
            v: 40,
            d: "Base fee of the DELEGATECALL opcode"
        }
    },
    vm: {},
    pow: {}
}
  , sy = {
    name: "tangerineWhistle",
    comment: "Hardfork with gas cost changes for IO-heavy operations",
    url: "https://eips.ethereum.org/EIPS/eip-608",
    status: "Final",
    gasConfig: {},
    gasPrices: {
        sload: {
            v: 200,
            d: "Once per SLOAD operation"
        },
        call: {
            v: 700,
            d: "Once per CALL operation & message call transaction"
        },
        extcodesize: {
            v: 700,
            d: "Base fee of the EXTCODESIZE opcode"
        },
        extcodecopy: {
            v: 700,
            d: "Base fee of the EXTCODECOPY opcode"
        },
        balance: {
            v: 400,
            d: "Base fee of the BALANCE opcode"
        },
        delegatecall: {
            v: 700,
            d: "Base fee of the DELEGATECALL opcode"
        },
        callcode: {
            v: 700,
            d: "Base fee of the CALLCODE opcode"
        },
        selfdestruct: {
            v: 5e3,
            d: "Base fee of the SELFDESTRUCT opcode"
        }
    },
    vm: {},
    pow: {}
}
  , oy = {
    name: "spuriousDragon",
    comment: "HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit",
    url: "https://eips.ethereum.org/EIPS/eip-607",
    status: "Final",
    gasConfig: {},
    gasPrices: {
        expByte: {
            v: 50,
            d: "Times ceil(log256(exponent)) for the EXP instruction"
        }
    },
    vm: {
        maxCodeSize: {
            v: 24576,
            d: "Maximum length of contract code"
        }
    },
    pow: {}
}
  , ay = {
    name: "byzantium",
    comment: "Hardfork with new precompiles, instructions and other protocol changes",
    url: "https://eips.ethereum.org/EIPS/eip-609",
    status: "Final",
    gasConfig: {},
    gasPrices: {
        modexpGquaddivisor: {
            v: 20,
            d: "Gquaddivisor from modexp precompile for gas calculation"
        },
        ecAdd: {
            v: 500,
            d: "Gas costs for curve addition precompile"
        },
        ecMul: {
            v: 4e4,
            d: "Gas costs for curve multiplication precompile"
        },
        ecPairing: {
            v: 1e5,
            d: "Base gas costs for curve pairing precompile"
        },
        ecPairingWord: {
            v: 8e4,
            d: "Gas costs regarding curve pairing precompile input length"
        },
        revert: {
            v: 0,
            d: "Base fee of the REVERT opcode"
        },
        staticcall: {
            v: 700,
            d: "Base fee of the STATICCALL opcode"
        },
        returndatasize: {
            v: 2,
            d: "Base fee of the RETURNDATASIZE opcode"
        },
        returndatacopy: {
            v: 3,
            d: "Base fee of the RETURNDATACOPY opcode"
        }
    },
    vm: {},
    pow: {
        minerReward: {
            v: "3000000000000000000",
            d: "the amount a miner get rewarded for mining a block"
        },
        difficultyBombDelay: {
            v: 3e6,
            d: "the amount of blocks to delay the difficulty bomb with"
        }
    }
}
  , cy = {
    name: "constantinople",
    comment: "Postponed hardfork including EIP-1283 (SSTORE gas metering changes)",
    url: "https://eips.ethereum.org/EIPS/eip-1013",
    status: "Final",
    gasConfig: {},
    gasPrices: {
        netSstoreNoopGas: {
            v: 200,
            d: "Once per SSTORE operation if the value doesn't change"
        },
        netSstoreInitGas: {
            v: 2e4,
            d: "Once per SSTORE operation from clean zero"
        },
        netSstoreCleanGas: {
            v: 5e3,
            d: "Once per SSTORE operation from clean non-zero"
        },
        netSstoreDirtyGas: {
            v: 200,
            d: "Once per SSTORE operation from dirty"
        },
        netSstoreClearRefund: {
            v: 15e3,
            d: "Once per SSTORE operation for clearing an originally existing storage slot"
        },
        netSstoreResetRefund: {
            v: 4800,
            d: "Once per SSTORE operation for resetting to the original non-zero value"
        },
        netSstoreResetClearRefund: {
            v: 19800,
            d: "Once per SSTORE operation for resetting to the original zero value"
        },
        shl: {
            v: 3,
            d: "Base fee of the SHL opcode"
        },
        shr: {
            v: 3,
            d: "Base fee of the SHR opcode"
        },
        sar: {
            v: 3,
            d: "Base fee of the SAR opcode"
        },
        extcodehash: {
            v: 400,
            d: "Base fee of the EXTCODEHASH opcode"
        },
        create2: {
            v: 32e3,
            d: "Base fee of the CREATE2 opcode"
        }
    },
    vm: {},
    pow: {
        minerReward: {
            v: "2000000000000000000",
            d: "The amount a miner gets rewarded for mining a block"
        },
        difficultyBombDelay: {
            v: 5e6,
            d: "the amount of blocks to delay the difficulty bomb with"
        }
    }
}
  , dy = {
    name: "petersburg",
    comment: "Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople",
    url: "https://eips.ethereum.org/EIPS/eip-1716",
    status: "Final",
    gasConfig: {},
    gasPrices: {
        netSstoreNoopGas: {
            v: null,
            d: "Removed along EIP-1283"
        },
        netSstoreInitGas: {
            v: null,
            d: "Removed along EIP-1283"
        },
        netSstoreCleanGas: {
            v: null,
            d: "Removed along EIP-1283"
        },
        netSstoreDirtyGas: {
            v: null,
            d: "Removed along EIP-1283"
        },
        netSstoreClearRefund: {
            v: null,
            d: "Removed along EIP-1283"
        },
        netSstoreResetRefund: {
            v: null,
            d: "Removed along EIP-1283"
        },
        netSstoreResetClearRefund: {
            v: null,
            d: "Removed along EIP-1283"
        }
    },
    vm: {},
    pow: {}
}
  , uy = {
    name: "istanbul",
    comment: "HF targeted for December 2019 following the Constantinople/Petersburg HF",
    url: "https://eips.ethereum.org/EIPS/eip-1679",
    status: "Final",
    gasConfig: {},
    gasPrices: {
        blake2Round: {
            v: 1,
            d: "Gas cost per round for the Blake2 F precompile"
        },
        ecAdd: {
            v: 150,
            d: "Gas costs for curve addition precompile"
        },
        ecMul: {
            v: 6e3,
            d: "Gas costs for curve multiplication precompile"
        },
        ecPairing: {
            v: 45e3,
            d: "Base gas costs for curve pairing precompile"
        },
        ecPairingWord: {
            v: 34e3,
            d: "Gas costs regarding curve pairing precompile input length"
        },
        txDataNonZero: {
            v: 16,
            d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
        },
        sstoreSentryGasEIP2200: {
            v: 2300,
            d: "Minimum gas required to be present for an SSTORE call, not consumed"
        },
        sstoreNoopGasEIP2200: {
            v: 800,
            d: "Once per SSTORE operation if the value doesn't change"
        },
        sstoreDirtyGasEIP2200: {
            v: 800,
            d: "Once per SSTORE operation if a dirty value is changed"
        },
        sstoreInitGasEIP2200: {
            v: 2e4,
            d: "Once per SSTORE operation from clean zero to non-zero"
        },
        sstoreInitRefundEIP2200: {
            v: 19200,
            d: "Once per SSTORE operation for resetting to the original zero value"
        },
        sstoreCleanGasEIP2200: {
            v: 5e3,
            d: "Once per SSTORE operation from clean non-zero to something else"
        },
        sstoreCleanRefundEIP2200: {
            v: 4200,
            d: "Once per SSTORE operation for resetting to the original non-zero value"
        },
        sstoreClearRefundEIP2200: {
            v: 15e3,
            d: "Once per SSTORE operation for clearing an originally existing storage slot"
        },
        balance: {
            v: 700,
            d: "Base fee of the BALANCE opcode"
        },
        extcodehash: {
            v: 700,
            d: "Base fee of the EXTCODEHASH opcode"
        },
        chainid: {
            v: 2,
            d: "Base fee of the CHAINID opcode"
        },
        selfbalance: {
            v: 5,
            d: "Base fee of the SELFBALANCE opcode"
        },
        sload: {
            v: 800,
            d: "Base fee of the SLOAD opcode"
        }
    },
    vm: {},
    pow: {}
}
  , ly = {
    name: "muirGlacier",
    comment: "HF to delay the difficulty bomb",
    url: "https://eips.ethereum.org/EIPS/eip-2384",
    status: "Final",
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {
        difficultyBombDelay: {
            v: 9e6,
            d: "the amount of blocks to delay the difficulty bomb with"
        }
    }
}
  , fy = {
    name: "berlin",
    comment: "HF targeted for July 2020 following the Muir Glacier HF",
    url: "https://eips.ethereum.org/EIPS/eip-2070",
    status: "Final",
    eips: [2565, 2929, 2718, 2930]
}
  , hy = {
    name: "london",
    comment: "HF targeted for July 2021 following the Berlin fork",
    url: "https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md",
    status: "Final",
    eips: [1559, 3198, 3529, 3541]
}
  , my = {
    name: "shanghai",
    comment: "Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode",
    url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md",
    status: "Final",
    eips: [3651, 3855, 3860, 4895]
}
  , py = {
    name: "arrowGlacier",
    comment: "HF to delay the difficulty bomb",
    url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md",
    status: "Final",
    eips: [4345],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , gy = {
    name: "grayGlacier",
    comment: "Delaying the difficulty bomb to Mid September 2022",
    url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md",
    status: "Draft",
    eips: [5133],
    gasConfig: {},
    gasPrices: {},
    vm: {},
    pow: {}
}
  , yy = {
    name: "mergeForkIdTransition",
    comment: "Pre-merge hardfork to fork off non-upgraded clients",
    url: "https://eips.ethereum.org/EIPS/eip-3675",
    status: "Draft",
    eips: []
}
  , vy = {
    name: "merge",
    comment: "Hardfork to upgrade the consensus mechanism to Proof-of-Stake",
    url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md",
    status: "Final",
    consensus: {
        type: "pos",
        algorithm: "casper",
        casper: {}
    },
    eips: [3675, 4399]
}
  , by = {
    chainstart: ny,
    homestead: iy,
    dao: ry,
    tangerineWhistle: sy,
    spuriousDragon: oy,
    byzantium: ay,
    constantinople: cy,
    petersburg: dy,
    istanbul: uy,
    muirGlacier: ly,
    berlin: fy,
    london: hy,
    shanghai: my,
    arrowGlacier: py,
    grayGlacier: gy,
    mergeForkIdTransition: yy,
    merge: vy
}
  , {buf: _y} = Rg;
class _e extends xo {
    constructor(e) {
        var n, r;
        super(),
        this._eips = [],
        this._customChains = (n = e.customChains) !== null && n !== void 0 ? n : [],
        this._chainParams = this.setChain(e.chain),
        this.DEFAULT_HARDFORK = (r = this._chainParams.defaultHardfork) !== null && r !== void 0 ? r : de.Merge,
        this.HARDFORK_CHANGES = this.hardforks().map(i => [i.name, by[i.name]]),
        this._hardfork = this.DEFAULT_HARDFORK,
        e.hardfork !== void 0 && this.setHardfork(e.hardfork),
        e.eips && this.setEIPs(e.eips)
    }
    static custom(e, n={}) {
        var r;
        const i = (r = n.baseChain) !== null && r !== void 0 ? r : "mainnet"
          , s = Object.assign({}, _e._getChainParams(i));
        if (s.name = "custom-chain",
        typeof e != "string")
            return new _e(Object.assign({
                chain: Object.assign(Object.assign({}, s), e)
            }, n));
        if (e === Ie.PolygonMainnet)
            return _e.custom({
                name: Ie.PolygonMainnet,
                chainId: 137,
                networkId: 137
            }, n);
        if (e === Ie.PolygonMumbai)
            return _e.custom({
                name: Ie.PolygonMumbai,
                chainId: 80001,
                networkId: 80001
            }, n);
        if (e === Ie.ArbitrumRinkebyTestnet)
            return _e.custom({
                name: Ie.ArbitrumRinkebyTestnet,
                chainId: 421611,
                networkId: 421611
            }, n);
        if (e === Ie.ArbitrumOne)
            return _e.custom({
                name: Ie.ArbitrumOne,
                chainId: 42161,
                networkId: 42161
            }, n);
        if (e === Ie.xDaiChain)
            return _e.custom({
                name: Ie.xDaiChain,
                chainId: 100,
                networkId: 100
            }, n);
        if (e === Ie.OptimisticKovan)
            return _e.custom({
                name: Ie.OptimisticKovan,
                chainId: 69,
                networkId: 69
            }, Object.assign({
                hardfork: de.Berlin
            }, n));
        if (e === Ie.OptimisticEthereum)
            return _e.custom({
                name: Ie.OptimisticEthereum,
                chainId: 10,
                networkId: 10
            }, Object.assign({
                hardfork: de.Berlin
            }, n));
        throw new Error(`Custom chain ${e} not supported`)
    }
    static fromGethGenesis(e, {chain: n, eips: r, genesisHash: i, hardfork: s, mergeForkIdPostMerge: o}) {
        var a;
        const u = _g(e, n, o)
          , d = new _e({
            chain: (a = u.name) !== null && a !== void 0 ? a : "custom",
            customChains: [u],
            eips: r,
            hardfork: s ?? u.hardfork
        });
        return i !== void 0 && d.setForkHashes(i),
        d
    }
    static isSupportedChainId(e) {
        return !!this._getInitializedChains().names[e.toString()]
    }
    static _getChainParams(e, n) {
        let r = e;
        const i = this._getInitializedChains(n);
        if (typeof r == "number" || typeof r == "bigint") {
            if (r = r.toString(),
            i.names[r]) {
                const s = i.names[r];
                return i[s]
            }
            throw new Error(`Chain with ID ${r} not supported`)
        }
        if (i[r] !== void 0)
            return i[r];
        throw new Error(`Chain with name ${r} not supported`)
    }
    setChain(e) {
        if (typeof e == "number" || typeof e == "bigint" || typeof e == "string")
            this._chainParams = _e._getChainParams(e, this._customChains);
        else if (typeof e == "object") {
            if (this._customChains.length > 0)
                throw new Error("Chain must be a string, number, or bigint when initialized with customChains passed in");
            const n = ["networkId", "genesis", "hardforks", "bootstrapNodes"];
            for (const r of n)
                if (!(r in e))
                    throw new Error(`Missing required chain parameter: ${r}`);
            this._chainParams = e
        } else
            throw new Error("Wrong input format");
        for (const n of this.hardforks())
            if (n.block === void 0)
                throw new Error("Hardfork cannot have undefined block number");
        return this._chainParams
    }
    setHardfork(e) {
        let n = !1;
        for (const r of this.HARDFORK_CHANGES)
            r[0] === e && (this._hardfork !== e && (this._hardfork = e,
            this.emit("hardforkChanged", e)),
            n = !0);
        if (!n)
            throw new Error(`Hardfork with name ${e} not supported`)
    }
    getHardforkByBlockNumber(e, n, r) {
        const i = En(e, qe.BigInt)
          , s = En(n, qe.BigInt)
          , o = En(r, qe.Number)
          , a = this.hardforks().filter(h => h.block !== null || h.ttd !== null && h.ttd !== void 0 || h.timestamp !== void 0)
          , u = a.findIndex(h => h.ttd !== null && h.ttd !== void 0);
        if (a.slice(u + 1).findIndex(h => h.ttd !== null && h.ttd !== void 0) >= 0)
            throw Error("More than one merge hardforks found with ttd specified");
        let c = a.findIndex(h => h.block !== null && h.block > i || o !== void 0 && Number(h.timestamp) > o);
        if (c === -1)
            c = a.length;
        else if (c === 0)
            throw Error("Must have at least one hardfork at block 0");
        if (o === void 0) {
            const h = a.slice(0, c).reverse().findIndex(p => p.block !== null || p.ttd !== void 0);
            c -= h
        }
        if (c -= 1,
        a[c].block === null && a[c].timestamp === void 0)
            (s == null || BigInt(a[c].ttd) > s) && (c -= 1);
        else if (u >= 0 && s !== void 0 && s !== null) {
            if (c >= u && BigInt(a[u].ttd) > s)
                throw Error("Maximum HF determined by total difficulty is lower than the block number HF");
            if (c < u && BigInt(a[u].ttd) <= s)
                throw Error("HF determined by block number is lower than the minimum total difficulty HF")
        }
        const l = c;
        for (; c < a.length - 1 && !(a[c].block !== a[c + 1].block || a[c].timestamp !== a[c + 1].timestamp); c += 1)
            ;
        if (o) {
            if (a.slice(0, l).reduce( (m, g) => {
                var y;
                return Math.max(Number((y = g.timestamp) !== null && y !== void 0 ? y : "0"), m)
            }
            , 0) > o)
                throw Error("Maximum HF determined by timestamp is lower than the block number/ttd HF");
            if (a.slice(c + 1).reduce( (m, g) => {
                var y;
                return Math.min(Number((y = g.timestamp) !== null && y !== void 0 ? y : o), m)
            }
            , o) < o)
                throw Error("Maximum HF determined by block number/ttd is lower than timestamp HF")
        }
        return a[c].name
    }
    setHardforkByBlockNumber(e, n, r) {
        const i = this.getHardforkByBlockNumber(e, n, r);
        return this.setHardfork(i),
        i
    }
    _getHardfork(e) {
        const n = this.hardforks();
        for (const r of n)
            if (r.name === e)
                return r;
        return null
    }
    setEIPs(e=[]) {
        for (const n of e) {
            if (!(n in Tn))
                throw new Error(`${n} not supported`);
            const r = this.gteHardfork(Tn[n].minimumHardfork);
            if (!r)
                throw new Error(`${n} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${r}`);
            if (Tn[n].requiredEIPs !== void 0) {
                for (const i of Tn[n].requiredEIPs)
                    if (!(e.includes(i) || this.isActivatedEIP(i)))
                        throw new Error(`${n} requires EIP ${i}, but is not included in the EIP list`)
            }
        }
        this._eips = e
    }
    param(e, n) {
        let r;
        for (const i of this._eips)
            if (r = this.paramByEIP(e, n, i),
            r !== void 0)
                return r;
        return this.paramByHardfork(e, n, this._hardfork)
    }
    paramByHardfork(e, n, r) {
        let i = null;
        for (const s of this.HARDFORK_CHANGES) {
            if ("eips"in s[1]) {
                const o = s[1].eips;
                for (const a of o) {
                    const u = this.paramByEIP(e, n, a);
                    i = typeof u == "bigint" ? u : i
                }
            } else {
                if (s[1][e] === void 0)
                    throw new Error(`Topic ${e} not defined`);
                s[1][e][n] !== void 0 && (i = s[1][e][n].v)
            }
            if (s[0] === r)
                break
        }
        return BigInt(i ?? 0)
    }
    paramByEIP(e, n, r) {
        if (!(r in Tn))
            throw new Error(`${r} not supported`);
        const i = Tn[r];
        if (!(e in i))
            throw new Error(`Topic ${e} not defined`);
        if (i[e][n] === void 0)
            return;
        const s = i[e][n].v;
        return BigInt(s)
    }
    paramByBlock(e, n, r, i, s) {
        const o = this.getHardforkByBlockNumber(r, i, s);
        return this.paramByHardfork(e, n, o)
    }
    isActivatedEIP(e) {
        if (this.eips().includes(e))
            return !0;
        for (const n of this.HARDFORK_CHANGES) {
            const r = n[1];
            if (this.gteHardfork(r.name) && "eips"in r && r.eips.includes(e))
                return !0
        }
        return !1
    }
    hardforkIsActiveOnBlock(e, n) {
        const r = En(n, qe.BigInt)
          , i = e ?? this._hardfork
          , s = this.hardforkBlock(i);
        return typeof s == "bigint" && s !== BigInt(0) && r >= s
    }
    activeOnBlock(e) {
        return this.hardforkIsActiveOnBlock(null, e)
    }
    hardforkGteHardfork(e, n) {
        const r = e ?? this._hardfork
          , i = this.hardforks();
        let s = -1
          , o = -1
          , a = 0;
        for (const u of i)
            u.name === r && (s = a),
            u.name === n && (o = a),
            a += 1;
        return s >= o && o !== -1
    }
    gteHardfork(e) {
        return this.hardforkGteHardfork(null, e)
    }
    hardforkBlock(e) {
        var n;
        const r = e ?? this._hardfork
          , i = (n = this._getHardfork(r)) === null || n === void 0 ? void 0 : n.block;
        return i == null ? null : BigInt(i)
    }
    hardforkTimestamp(e) {
        var n;
        const r = e ?? this._hardfork
          , i = (n = this._getHardfork(r)) === null || n === void 0 ? void 0 : n.timestamp;
        return i == null ? null : BigInt(i)
    }
    eipBlock(e) {
        for (const n of this.HARDFORK_CHANGES) {
            const r = n[1];
            if ("eips"in r && r.eips.includes(e))
                return this.hardforkBlock(typeof n[0] == "number" ? String(n[0]) : n[0])
        }
        return null
    }
    hardforkTTD(e) {
        var n;
        const r = e ?? this._hardfork
          , i = (n = this._getHardfork(r)) === null || n === void 0 ? void 0 : n.ttd;
        return i == null ? null : BigInt(i)
    }
    isHardforkBlock(e, n) {
        const r = En(e, qe.BigInt)
          , i = n ?? this._hardfork
          , s = this.hardforkBlock(i);
        return typeof s == "bigint" && s !== BigInt(0) ? s === r : !1
    }
    nextHardforkBlockOrTimestamp(e) {
        var n, r;
        const i = e ?? this._hardfork
          , s = this.hardforks();
        let o = s.findIndex(c => c.name === i);
        if (i === de.Merge && (o -= 1),
        o < 0)
            return null;
        let a = (n = s[o].timestamp) !== null && n !== void 0 ? n : s[o].block;
        a = a != null ? Number(a) : null;
        const u = s.slice(o + 1).find(c => {
            var l;
            let f = (l = c.timestamp) !== null && l !== void 0 ? l : c.block;
            return f = f != null ? Number(f) : null,
            c.name !== de.Merge && f !== null && f !== void 0 && f !== a
        }
        );
        if (u === void 0)
            return null;
        const d = (r = u.timestamp) !== null && r !== void 0 ? r : u.block;
        return d == null ? null : BigInt(d)
    }
    nextHardforkBlock(e) {
        const n = e ?? this._hardfork;
        let r = this.hardforkBlock(n);
        if (r === null && n === de.Merge) {
            const s = this.hardforks()
              , o = s.findIndex(a => a.ttd !== null && a.ttd !== void 0);
            if (o < 0)
                throw Error("Merge hardfork should have been found");
            r = this.hardforkBlock(s[o - 1].name)
        }
        return r === null ? null : this.hardforks().reduce( (s, o) => {
            const a = BigInt(o.block === null || o.ttd !== void 0 && o.ttd !== null ? 0 : o.block);
            return a > r && s === null ? a : s
        }
        , null)
    }
    isNextHardforkBlock(e, n) {
        const r = En(e, qe.BigInt)
          , i = n ?? this._hardfork
          , s = this.nextHardforkBlock(i);
        return s === null ? !1 : s === r
    }
    _calcForkHash(e, n) {
        let r = new Uint8Array
          , i = 0;
        for (const a of this.hardforks()) {
            const {block: u, timestamp: d, name: c} = a;
            let l = d ?? u;
            if (l = l !== null ? Number(l) : null,
            typeof l == "number" && l !== 0 && l !== i && c !== de.Merge) {
                const f = ue(l.toString(16).padStart(16, "0"));
                r = Re(r, f),
                i = l
            }
            if (a.name === e)
                break
        }
        const s = Re(n, r);
        return X(wg(_y(s) >>> 0))
    }
    forkHash(e, n) {
        const r = e ?? this._hardfork
          , i = this._getHardfork(r);
        if (i === null || (i == null ? void 0 : i.block) === null && (i == null ? void 0 : i.timestamp) === void 0 && (i == null ? void 0 : i.ttd) === void 0) {
            const s = "No fork hash calculation possible for future hardfork";
            throw new Error(s)
        }
        if ((i == null ? void 0 : i.forkHash) !== null && (i == null ? void 0 : i.forkHash) !== void 0)
            return i.forkHash;
        if (!n)
            throw new Error("genesisHash required for forkHash calculation");
        return this._calcForkHash(r, n)
    }
    hardforkForForkHash(e) {
        const n = this.hardforks().filter(r => r.forkHash === e);
        return n.length >= 1 ? n[n.length - 1] : null
    }
    setForkHashes(e) {
        var n;
        for (const r of this.hardforks()) {
            const i = (n = r.timestamp) !== null && n !== void 0 ? n : r.block;
            (r.forkHash === null || r.forkHash === void 0) && (i != null || typeof r.ttd < "u") && (r.forkHash = this.forkHash(r.name, e))
        }
    }
    genesis() {
        return this._chainParams.genesis
    }
    hardforks() {
        return this._chainParams.hardforks
    }
    bootstrapNodes() {
        return this._chainParams.bootstrapNodes
    }
    dnsNetworks() {
        return this._chainParams.dnsNetworks
    }
    hardfork() {
        return this._hardfork
    }
    chainId() {
        return BigInt(this._chainParams.chainId)
    }
    chainName() {
        return this._chainParams.name
    }
    networkId() {
        return BigInt(this._chainParams.networkId)
    }
    eips() {
        return this._eips
    }
    consensusType() {
        const e = this.hardfork();
        let n;
        for (const r of this.HARDFORK_CHANGES)
            if ("consensus"in r[1] && (n = r[1].consensus.type),
            r[0] === e)
                break;
        return n ?? this._chainParams.consensus.type
    }
    consensusAlgorithm() {
        const e = this.hardfork();
        let n;
        for (const r of this.HARDFORK_CHANGES)
            if ("consensus"in r[1] && (n = r[1].consensus.algorithm),
            r[0] === e)
                break;
        return n ?? this._chainParams.consensus.algorithm
    }
    consensusConfig() {
        var e;
        const n = this.hardfork();
        let r;
        for (const i of this.HARDFORK_CHANGES)
            if ("consensus"in i[1] && (r = i[1].consensus[i[1].consensus.algorithm]),
            i[0] === n)
                break;
        return (e = r ?? this._chainParams.consensus[this.consensusAlgorithm()]) !== null && e !== void 0 ? e : {}
    }
    copy() {
        const e = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        return e.removeAllListeners(),
        e
    }
    static _getInitializedChains(e) {
        const n = {};
        for (const [i,s] of Object.entries(Ti))
            n[s] = i.toLowerCase();
        const r = {
            mainnet: Cg,
            goerli: Bg,
            sepolia: Ng
        };
        if (e)
            for (const i of e) {
                const {name: s} = i;
                n[i.chainId.toString()] = s,
                r[s] = i
            }
        return r.names = n,
        r
    }
}
var rt;
(function(t) {
    t[t.EIP155ReplayProtection = 155] = "EIP155ReplayProtection",
    t[t.EIP1559FeeMarket = 1559] = "EIP1559FeeMarket",
    t[t.EIP2718TypedTransaction = 2718] = "EIP2718TypedTransaction",
    t[t.EIP2930AccessLists = 2930] = "EIP2930AccessLists"
}
)(rt || (rt = {}));
function wy(t) {
    if (t.length === 0)
        return !0;
    const e = t[0];
    return !!Array.isArray(e)
}
function xy(t) {
    return !wy(t)
}
class On {
    constructor(e) {
        if (e.length !== 20)
            throw new Error("Invalid address length");
        this.buf = e
    }
    static zero() {
        return new On(Cd(20))
    }
    equals(e) {
        return Gi(this.buf, e.buf)
    }
    isZero() {
        return this.equals(On.zero())
    }
    toString() {
        return X(this.buf)
    }
    toArray() {
        return this.buf
    }
    static publicToAddress(e, n=!1) {
        let r = e;
        if (jo(r),
        n && r.length !== 64 && (r = xt.ProjectivePoint.fromHex(r).toRawBytes(!1).slice(1)),
        r.length !== 64)
            throw new Error("Expected pubKey to be of length 64");
        return Se(r).slice(-20)
    }
}
const Ey = (t, e) => {
    const n = t.param("vm", "maxInitCodeSize");
    if (n && BigInt(e) > n)
        throw new Error(`the initcode size of this transaction is too large: it is ${e} while the max is ${t.param("vm", "maxInitCodeSize")}`)
}
  , Dd = t => {
    let e, n;
    if (xy(t)) {
        e = t;
        const r = [];
        for (let i = 0; i < t.length; i += 1) {
            const s = t[i]
              , o = fe(s.address)
              , a = [];
            for (let u = 0; u < s.storageKeys.length; u += 1)
                a.push(fe(s.storageKeys[u]));
            r.push([o, a])
        }
        n = r
    } else {
        n = t ?? [];
        const r = [];
        for (let i = 0; i < n.length; i += 1) {
            const s = n[i]
              , o = X(s[0])
              , a = [];
            for (let d = 0; d < s[1].length; d += 1)
                a.push(X(s[1][d]));
            const u = {
                address: o,
                storageKeys: a
            };
            r.push(u)
        }
        e = r
    }
    return {
        AccessListJSON: e,
        accessList: n
    }
}
  , Fd = t => {
    for (let e = 0; e < t.length; e += 1) {
        const n = t[e]
          , r = n[0]
          , i = n[1];
        if (n[2] !== void 0)
            throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
        if (r.length !== 20)
            throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
        for (let s = 0; s < i.length; s += 1)
            if (i[s].length !== 32)
                throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes")
    }
}
  , Gd = t => {
    const e = [];
    for (let n = 0; n < t.length; n += 1) {
        const r = t[n]
          , i = {
            address: X(Fa(r[0], 20)),
            storageKeys: []
        }
          , s = r && r[1];
        for (let o = 0; o < s.length; o += 1) {
            const a = s[o];
            i.storageKeys.push(X(Fa(a, 32)))
        }
        e.push(i)
    }
    return e
}
  , Ud = (t, e) => {
    const n = e.param("gasPrices", "accessListStorageKeyCost")
      , r = e.param("gasPrices", "accessListAddressCost");
    let i = 0;
    for (let o = 0; o < t.length; o += 1) {
        const u = t[o][1];
        i += u.length
    }
    return t.length * Number(r) + i * Number(n)
}
;
class Un {
    constructor(e, n) {
        var r, i;
        this.cache = {
            hash: void 0,
            dataFee: void 0
        },
        this.activeCapabilities = [],
        this.DEFAULT_CHAIN = Ti.Mainnet,
        this.DEFAULT_HARDFORK = de.Merge;
        const {nonce: s, gasLimit: o, to: a, value: u, data: d, v: c, r: l, s: f, type: h} = e;
        this._type = Number(ae(fe(h))),
        this.txOptions = n;
        const p = fe(a === "" ? "0x" : a)
          , m = fe(c === "" ? "0x" : c)
          , g = fe(l === "" ? "0x" : l)
          , y = fe(f === "" ? "0x" : f);
        this.nonce = ae(fe(s === "" ? "0x" : s)),
        this.gasLimit = ae(fe(o === "" ? "0x" : o)),
        this.to = p.length > 0 ? new On(p) : void 0,
        this.value = ae(fe(u === "" ? "0x" : u)),
        this.data = fe(d === "" ? "0x" : d),
        this.v = m.length > 0 ? ae(m) : void 0,
        this.r = g.length > 0 ? ae(g) : void 0,
        this.s = y.length > 0 ? ae(y) : void 0,
        this._validateCannotExceedMaxInteger({
            value: this.value,
            r: this.r,
            s: this.s
        }),
        this._validateCannotExceedMaxInteger({
            gasLimit: this.gasLimit
        }, 64),
        this._validateCannotExceedMaxInteger({
            nonce: this.nonce
        }, 64, !0);
        const _ = this.to === void 0 || this.to === null
          , w = (r = n.allowUnlimitedInitCodeSize) !== null && r !== void 0 ? r : !1
          , S = (i = n.common) !== null && i !== void 0 ? i : this._getCommon();
        _ && S.isActivatedEIP(3860) && !w && Ey(S, this.data.length)
    }
    get type() {
        return this._type
    }
    supports(e) {
        return this.activeCapabilities.includes(e)
    }
    validate(e=!1) {
        const n = [];
        return this.getBaseFee() > this.gasLimit && n.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`),
        this.isSigned() && !this.verifySignature() && n.push("Invalid Signature"),
        e ? n : n.length === 0
    }
    _validateYParity() {
        const {v: e} = this;
        if (e !== void 0 && e !== BigInt(0) && e !== BigInt(1)) {
            const n = this._errorMsg("The y-parity of the transaction should either be 0 or 1");
            throw new Error(n)
        }
    }
    _validateHighS() {
        const {s: e} = this;
        if (this.common.gteHardfork("homestead") && e !== void 0 && e > gg) {
            const n = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
            throw new Error(n)
        }
    }
    getBaseFee() {
        const e = this.common.param("gasPrices", "tx");
        let n = this.getDataFee();
        if (e && (n += e),
        this.common.gteHardfork("homestead") && this.toCreationAddress()) {
            const r = this.common.param("gasPrices", "txCreation");
            r && (n += r)
        }
        return n
    }
    getDataFee() {
        const e = this.common.param("gasPrices", "txDataZero")
          , n = this.common.param("gasPrices", "txDataNonZero");
        let r = BigInt(0);
        for (let i = 0; i < this.data.length; i += 1)
            this.data[i] === 0 ? r += e : r += n;
        if ((this.to === void 0 || this.to === null) && this.common.isActivatedEIP(3860)) {
            const i = BigInt(Math.ceil(this.data.length / 32))
              , s = this.common.param("gasPrices", "initCodeWordCost") * i;
            r += s
        }
        return r
    }
    toCreationAddress() {
        return this.to === void 0 || this.to.buf.length === 0
    }
    isSigned() {
        const {v: e, r: n, s: r} = this;
        return !(e === void 0 || n === void 0 || r === void 0)
    }
    verifySignature() {
        try {
            const e = this.getSenderPublicKey();
            return Si(e).length !== 0
        } catch {
            return !1
        }
    }
    getSenderAddress() {
        return new On(On.publicToAddress(this.getSenderPublicKey()))
    }
    sign(e) {
        if (e.length !== 32) {
            const u = this._errorMsg("Private key must be 32 bytes in length.");
            throw new Error(u)
        }
        let n = !1;
        this.type === 0 && this.common.gteHardfork("spuriousDragon") && !this.supports(rt.EIP155ReplayProtection) && (this.activeCapabilities.push(rt.EIP155ReplayProtection),
        n = !0);
        const r = this.getMessageToSign(!0)
          , {v: i, r: s, s: o} = this._ecsign(r, e)
          , a = this._processSignature(i, s, o);
        if (n) {
            const u = this.activeCapabilities.indexOf(rt.EIP155ReplayProtection);
            u > -1 && this.activeCapabilities.splice(u, 1)
        }
        return a
    }
    _getCommon(e, n) {
        var r;
        if (n !== void 0) {
            const i = ae(fe(n));
            if (e) {
                if (e.chainId() !== i) {
                    const s = this._errorMsg("The chain ID does not match the chain ID of Common");
                    throw new Error(s)
                }
                return e.copy()
            }
            return _e.isSupportedChainId(i) ? new _e({
                chain: i,
                hardfork: this.DEFAULT_HARDFORK
            }) : _e.custom({
                name: "custom-chain",
                networkId: i,
                chainId: i
            }, {
                baseChain: this.DEFAULT_CHAIN,
                hardfork: this.DEFAULT_HARDFORK
            })
        }
        return (r = e == null ? void 0 : e.copy()) !== null && r !== void 0 ? r : new _e({
            chain: this.DEFAULT_CHAIN,
            hardfork: this.DEFAULT_HARDFORK
        })
    }
    _validateCannotExceedMaxInteger(e, n=256, r=!1) {
        for (const [i,s] of Object.entries(e))
            switch (n) {
            case 64:
                if (r) {
                    if (s !== void 0 && s >= Ha) {
                        const o = this._errorMsg(`${i} cannot equal or exceed MAX_UINT64 (2^64-1), given ${s}`);
                        throw new Error(o)
                    }
                } else if (s !== void 0 && s > Ha) {
                    const o = this._errorMsg(`${i} cannot exceed MAX_UINT64 (2^64-1), given ${s}`);
                    throw new Error(o)
                }
                break;
            case 256:
                if (r) {
                    if (s !== void 0 && s >= Sr) {
                        const o = this._errorMsg(`${i} cannot equal or exceed MAX_INTEGER (2^256-1), given ${s}`);
                        throw new Error(o)
                    }
                } else if (s !== void 0 && s > Sr) {
                    const o = this._errorMsg(`${i} cannot exceed MAX_INTEGER (2^256-1), given ${s}`);
                    throw new Error(o)
                }
                break;
            default:
                {
                    const o = this._errorMsg("unimplemented bits value");
                    throw new Error(o)
                }
            }
    }
    static _validateNotArray(e) {
        const n = ["nonce", "gasPrice", "gasLimit", "to", "value", "data", "v", "r", "s", "type", "baseFee", "maxFeePerGas", "chainId"];
        for (const [r,i] of Object.entries(e))
            if (n.includes(r) && Array.isArray(i))
                throw new Error(`${r} cannot be an array`)
    }
    _getSharedErrorPostfix() {
        let e = "";
        try {
            e = this.isSigned() ? X(this.hash()) : "not available (unsigned)"
        } catch {
            e = "error"
        }
        let n = "";
        try {
            n = this.isSigned().toString()
        } catch {
            e = "error"
        }
        let r = "";
        try {
            r = this.common.hardfork()
        } catch {
            r = "error"
        }
        let i = `tx type=${this.type} hash=${e} nonce=${this.nonce} value=${this.value} `;
        return i += `signed=${n} hf=${r}`,
        i
    }
    _ecsign(e, n, r) {
        const i = xt.sign(e, n)
          , s = i.toCompactRawBytes()
          , o = s.subarray(0, 32)
          , a = s.subarray(32, 64)
          , u = r === void 0 ? BigInt(i.recovery + 27) : BigInt(i.recovery + 35) + BigInt(r) * BigInt(2);
        return {
            r: o,
            s: a,
            v: u
        }
    }
    static fromSerializedTx(e, n={}) {}
    static fromTxData(e, n={}) {}
}
const Ws = 2
  , bs = ue(Ws.toString(16).padStart(2, "0"));
class Xt extends Un {
    constructor(e, n={}) {
        var r;
        super(Object.assign(Object.assign({}, e), {
            type: Ws
        }), n),
        this.DEFAULT_HARDFORK = "london";
        const {chainId: i, accessList: s, maxFeePerGas: o, maxPriorityFeePerGas: a} = e;
        if (this.common = this._getCommon(n.common, i),
        this.chainId = this.common.chainId(),
        !this.common.isActivatedEIP(1559))
            throw new Error("EIP-1559 not enabled on Common");
        this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
        const u = Dd(s ?? []);
        if (this.accessList = u.accessList,
        this.AccessListJSON = u.AccessListJSON,
        Fd(this.accessList),
        this.maxFeePerGas = ae(fe(o === "" ? "0x" : o)),
        this.maxPriorityFeePerGas = ae(fe(a === "" ? "0x" : a)),
        this._validateCannotExceedMaxInteger({
            maxFeePerGas: this.maxFeePerGas,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas
        }),
        Un._validateNotArray(e),
        this.gasLimit * this.maxFeePerGas > Sr) {
            const c = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
            throw new Error(c)
        }
        if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
            const c = this._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
            throw new Error(c)
        }
        this._validateYParity(),
        this._validateHighS(),
        ((r = n == null ? void 0 : n.freeze) !== null && r !== void 0 ? r : !0) && Object.freeze(this)
    }
    static fromTxData(e, n={}) {
        return new Xt(e,n)
    }
    static fromSerializedTx(e, n={}) {
        if (!Gi(e.subarray(0, 1), bs))
            throw new Error(`Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ${Ws}, received: ${X(e.subarray(0, 1))}`);
        const r = Me.decode(e.subarray(1));
        if (!Array.isArray(r))
            throw new Error("Invalid serialized tx input: must be array");
        return Xt.fromValuesArray(r, n)
    }
    static fromValuesArray(e, n={}) {
        if (e.length !== 9 && e.length !== 12)
            throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
        const [r,i,s,o,a,u,d,c,l,f,h,p] = e;
        return this._validateNotArray({
            chainId: r,
            v: f
        }),
        go({
            nonce: i,
            maxPriorityFeePerGas: s,
            maxFeePerGas: o,
            gasLimit: a,
            value: d,
            v: f,
            r: h,
            s: p
        }),
        new Xt({
            chainId: ae(r),
            nonce: i,
            maxPriorityFeePerGas: s,
            maxFeePerGas: o,
            gasLimit: a,
            to: u,
            value: d,
            data: c,
            accessList: l ?? [],
            v: f !== void 0 ? ae(f) : void 0,
            r: h,
            s: p
        },n)
    }
    getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork())
            return this.cache.dataFee.value;
        let e = super.getDataFee();
        return e += BigInt(Ud(this.accessList, this.common)),
        Object.isFrozen(this) && (this.cache.dataFee = {
            value: e,
            hardfork: this.common.hardfork()
        }),
        e
    }
    getUpfrontCost(e=BigInt(0)) {
        const n = this.maxPriorityFeePerGas
          , r = this.maxFeePerGas - e
          , s = (n < r ? n : r) + e;
        return this.gasLimit * s + this.value
    }
    raw() {
        return [ee(this.chainId), ee(this.nonce), ee(this.maxPriorityFeePerGas), ee(this.maxFeePerGas), ee(this.gasLimit), this.to !== void 0 ? this.to.buf : Uint8Array.from([]), ee(this.value), this.data, this.accessList, this.v !== void 0 ? ee(this.v) : Uint8Array.from([]), this.r !== void 0 ? ee(this.r) : Uint8Array.from([]), this.s !== void 0 ? ee(this.s) : Uint8Array.from([])]
    }
    serialize() {
        const e = this.raw();
        return Re(bs, Me.encode(e))
    }
    getMessageToSign(e=!0) {
        const n = this.raw().slice(0, 9)
          , r = Re(bs, Me.encode(n));
        return e ? Se(r) : r
    }
    hash() {
        if (!this.isSigned()) {
            const e = this._errorMsg("Cannot call hash method if transaction is not signed");
            throw new Error(e)
        }
        return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = Se(this.serialize())),
        this.cache.hash) : Se(this.serialize())
    }
    getMessageToVerifySignature() {
        return this.getMessageToSign()
    }
    getSenderPublicKey() {
        if (!this.isSigned()) {
            const s = this._errorMsg("Cannot call this method if transaction is not signed");
            throw new Error(s)
        }
        const e = this.getMessageToVerifySignature()
          , {v: n, r, s: i} = this;
        this._validateHighS();
        try {
            return Do(e, n + BigInt(27), ee(r), ee(i))
        } catch {
            const o = this._errorMsg("Invalid Signature");
            throw new Error(o)
        }
    }
    _processSignature(e, n, r) {
        const i = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common
        });
        return Xt.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            maxFeePerGas: this.maxFeePerGas,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: e - BigInt(27),
            r: ae(n),
            s: ae(r)
        }, i)
    }
    toJSON() {
        const e = Gd(this.accessList);
        return {
            chainId: he(this.chainId),
            nonce: he(this.nonce),
            maxPriorityFeePerGas: he(this.maxPriorityFeePerGas),
            maxFeePerGas: he(this.maxFeePerGas),
            gasLimit: he(this.gasLimit),
            to: this.to !== void 0 ? this.to.toString() : void 0,
            value: he(this.value),
            data: X(this.data),
            accessList: e,
            v: this.v !== void 0 ? he(this.v) : void 0,
            r: this.r !== void 0 ? he(this.r) : void 0,
            s: this.s !== void 0 ? he(this.s) : void 0
        }
    }
    errorStr() {
        let e = this._getSharedErrorPostfix();
        return e += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`,
        e
    }
    _errorMsg(e) {
        return `${e} (${this.errorStr()})`
    }
}
const Zs = 1
  , _s = ue(Zs.toString(16).padStart(2, "0"));
class Jt extends Un {
    constructor(e, n={}) {
        var r;
        super(Object.assign(Object.assign({}, e), {
            type: Zs
        }), n),
        this.DEFAULT_HARDFORK = "berlin";
        const {chainId: i, accessList: s, gasPrice: o} = e;
        if (this.common = this._getCommon(n.common, i),
        this.chainId = this.common.chainId(),
        !this.common.isActivatedEIP(2930))
            throw new Error("EIP-2930 not enabled on Common");
        this.activeCapabilities = this.activeCapabilities.concat([2718, 2930]);
        const a = Dd(s ?? []);
        if (this.accessList = a.accessList,
        this.AccessListJSON = a.AccessListJSON,
        Fd(this.accessList),
        this.gasPrice = ae(fe(o === "" ? "0x" : o)),
        this._validateCannotExceedMaxInteger({
            gasPrice: this.gasPrice
        }),
        Un._validateNotArray(e),
        this.gasPrice * this.gasLimit > Sr) {
            const d = this._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
            throw new Error(d)
        }
        this._validateYParity(),
        this._validateHighS(),
        ((r = n == null ? void 0 : n.freeze) !== null && r !== void 0 ? r : !0) && Object.freeze(this)
    }
    static fromTxData(e, n={}) {
        return new Jt(e,n)
    }
    static fromSerializedTx(e, n={}) {
        if (!Gi(e.subarray(0, 1), _s))
            throw new Error(`Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ${Zs}, received: ${X(e.subarray(0, 1))}`);
        const r = Me.decode(Uint8Array.from(e.subarray(1)));
        if (!Array.isArray(r))
            throw new Error("Invalid serialized tx input: must be array");
        return Jt.fromValuesArray(r, n)
    }
    static fromValuesArray(e, n={}) {
        if (e.length !== 8 && e.length !== 11)
            throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
        const [r,i,s,o,a,u,d,c,l,f,h] = e;
        this._validateNotArray({
            chainId: r,
            v: l
        }),
        go({
            nonce: i,
            gasPrice: s,
            gasLimit: o,
            value: u,
            v: l,
            r: f,
            s: h
        });
        const p = [];
        return new Jt({
            chainId: ae(r),
            nonce: i,
            gasPrice: s,
            gasLimit: o,
            to: a,
            value: u,
            data: d,
            accessList: c ?? p,
            v: l !== void 0 ? ae(l) : void 0,
            r: f,
            s: h
        },n)
    }
    getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork())
            return this.cache.dataFee.value;
        let e = super.getDataFee();
        return e += BigInt(Ud(this.accessList, this.common)),
        Object.isFrozen(this) && (this.cache.dataFee = {
            value: e,
            hardfork: this.common.hardfork()
        }),
        e
    }
    getUpfrontCost() {
        return this.gasLimit * this.gasPrice + this.value
    }
    raw() {
        return [ee(this.chainId), ee(this.nonce), ee(this.gasPrice), ee(this.gasLimit), this.to !== void 0 ? this.to.buf : Uint8Array.from([]), ee(this.value), this.data, this.accessList, this.v !== void 0 ? ee(this.v) : Uint8Array.from([]), this.r !== void 0 ? ee(this.r) : Uint8Array.from([]), this.s !== void 0 ? ee(this.s) : Uint8Array.from([])]
    }
    serialize() {
        const e = this.raw();
        return Re(_s, Me.encode(e))
    }
    getMessageToSign(e=!0) {
        const n = this.raw().slice(0, 8)
          , r = Re(_s, Me.encode(n));
        return e ? Se(r) : r
    }
    hash() {
        if (!this.isSigned()) {
            const e = this._errorMsg("Cannot call hash method if transaction is not signed");
            throw new Error(e)
        }
        return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = Se(this.serialize())),
        this.cache.hash) : Se(this.serialize())
    }
    getMessageToVerifySignature() {
        return this.getMessageToSign()
    }
    getSenderPublicKey() {
        if (!this.isSigned()) {
            const s = this._errorMsg("Cannot call this method if transaction is not signed");
            throw new Error(s)
        }
        const e = this.getMessageToVerifySignature()
          , {v: n, r, s: i} = this;
        this._validateHighS();
        try {
            return Do(e, n + BigInt(27), ee(r), ee(i))
        } catch {
            const o = this._errorMsg("Invalid Signature");
            throw new Error(o)
        }
    }
    _processSignature(e, n, r) {
        const i = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common
        });
        return Jt.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: e - BigInt(27),
            r: ae(n),
            s: ae(r)
        }, i)
    }
    toJSON() {
        const e = Gd(this.accessList);
        return {
            chainId: he(this.chainId),
            nonce: he(this.nonce),
            gasPrice: he(this.gasPrice),
            gasLimit: he(this.gasLimit),
            to: this.to !== void 0 ? this.to.toString() : void 0,
            value: he(this.value),
            data: X(this.data),
            accessList: e,
            v: this.v !== void 0 ? he(this.v) : void 0,
            r: this.r !== void 0 ? he(this.r) : void 0,
            s: this.s !== void 0 ? he(this.s) : void 0
        }
    }
    errorStr() {
        var e, n;
        let r = this._getSharedErrorPostfix();
        return r += ` gasPrice=${this.gasPrice} accessListCount=${(n = (e = this.accessList) === null || e === void 0 ? void 0 : e.length) !== null && n !== void 0 ? n : 0}`,
        r
    }
    _errorMsg(e) {
        return `${e} (${this.errorStr()})`
    }
}
const Iy = 0;
function qa(t, e) {
    const n = Number(t)
      , r = Number(e) * 2;
    return n === r + 35 || n === r + 36
}
class Lt extends Un {
    constructor(e, n={}) {
        var r;
        if (super(Object.assign(Object.assign({}, e), {
            type: Iy
        }), n),
        this.common = this._validateTxV(this.v, n.common),
        this.gasPrice = ae(fe(e.gasPrice === "" ? "0x" : e.gasPrice)),
        this.gasPrice * this.gasLimit > Sr) {
            const s = this._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
            throw new Error(s)
        }
        this._validateCannotExceedMaxInteger({
            gasPrice: this.gasPrice
        }),
        Un._validateNotArray(e),
        this.common.gteHardfork("spuriousDragon") && (this.isSigned() ? qa(this.v, this.common.chainId()) && this.activeCapabilities.push(rt.EIP155ReplayProtection) : this.activeCapabilities.push(rt.EIP155ReplayProtection)),
        ((r = n == null ? void 0 : n.freeze) !== null && r !== void 0 ? r : !0) && Object.freeze(this)
    }
    static fromTxData(e, n={}) {
        return new Lt(e,n)
    }
    static fromSerializedTx(e, n={}) {
        const r = Me.decode(e);
        if (!Array.isArray(r))
            throw new Error("Invalid serialized tx input. Must be array");
        return this.fromValuesArray(r, n)
    }
    static fromValuesArray(e, n={}) {
        if (e.length !== 6 && e.length !== 9)
            throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
        const [r,i,s,o,a,u,d,c,l] = e;
        return go({
            nonce: r,
            gasPrice: i,
            gasLimit: s,
            value: a,
            v: d,
            r: c,
            s: l
        }),
        new Lt({
            nonce: r,
            gasPrice: i,
            gasLimit: s,
            to: o,
            value: a,
            data: u,
            v: d,
            r: c,
            s: l
        },n)
    }
    raw() {
        return [ee(this.nonce), ee(this.gasPrice), ee(this.gasLimit), this.to !== void 0 ? this.to.buf : Uint8Array.from([]), ee(this.value), this.data, this.v !== void 0 ? ee(this.v) : Uint8Array.from([]), this.r !== void 0 ? ee(this.r) : Uint8Array.from([]), this.s !== void 0 ? ee(this.s) : Uint8Array.from([])]
    }
    serialize() {
        return Me.encode(this.raw())
    }
    _getMessageToSign() {
        const e = [ee(this.nonce), ee(this.gasPrice), ee(this.gasLimit), this.to !== void 0 ? this.to.buf : Uint8Array.from([]), ee(this.value), this.data];
        return this.supports(rt.EIP155ReplayProtection) && (e.push(fe(this.common.chainId())),
        e.push(Si(fe(0))),
        e.push(Si(fe(0)))),
        e
    }
    getMessageToSign(e=!0) {
        const n = this._getMessageToSign();
        return e ? Se(Me.encode(n)) : n
    }
    getDataFee() {
        return this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork() ? this.cache.dataFee.value : (Object.isFrozen(this) && (this.cache.dataFee = {
            value: super.getDataFee(),
            hardfork: this.common.hardfork()
        }),
        super.getDataFee())
    }
    getUpfrontCost() {
        return this.gasLimit * this.gasPrice + this.value
    }
    hash() {
        if (!this.isSigned()) {
            const e = this._errorMsg("Cannot call hash method if transaction is not signed");
            throw new Error(e)
        }
        return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = Se(Me.encode(this.raw()))),
        this.cache.hash) : Se(Me.encode(this.raw()))
    }
    getMessageToVerifySignature() {
        if (!this.isSigned()) {
            const n = this._errorMsg("This transaction is not signed");
            throw new Error(n)
        }
        const e = this._getMessageToSign();
        return Se(Me.encode(e))
    }
    getSenderPublicKey() {
        const e = this.getMessageToVerifySignature()
          , {v: n, r, s: i} = this;
        this._validateHighS();
        try {
            return Do(e, n, ee(r), ee(i), this.supports(rt.EIP155ReplayProtection) ? this.common.chainId() : void 0)
        } catch {
            const o = this._errorMsg("Invalid Signature");
            throw new Error(o)
        }
    }
    _processSignature(e, n, r) {
        let i = e;
        this.supports(rt.EIP155ReplayProtection) && (i += this.common.chainId() * BigInt(2) + BigInt(8));
        const s = Object.assign(Object.assign({}, this.txOptions), {
            common: this.common
        });
        return Lt.fromTxData({
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            v: i,
            r: ae(n),
            s: ae(r)
        }, s)
    }
    toJSON() {
        return {
            nonce: he(this.nonce),
            gasPrice: he(this.gasPrice),
            gasLimit: he(this.gasLimit),
            to: this.to !== void 0 ? this.to.toString() : void 0,
            value: he(this.value),
            data: X(this.data),
            v: this.v !== void 0 ? he(this.v) : void 0,
            r: this.r !== void 0 ? he(this.r) : void 0,
            s: this.s !== void 0 ? he(this.s) : void 0
        }
    }
    _validateTxV(e, n) {
        let r;
        const i = e !== void 0 ? Number(e) : void 0;
        if (i !== void 0 && i < 37 && i !== 27 && i !== 28)
            throw new Error(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${i}`);
        if (i !== void 0 && i !== 0 && (!n || n.gteHardfork("spuriousDragon")) && i !== 27 && i !== 28)
            if (n) {
                if (!qa(BigInt(i), n.chainId()))
                    throw new Error(`Incompatible EIP155-based V ${i} and chain id ${n.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`)
            } else {
                let s;
                (i - 35) % 2 === 0 ? s = 35 : s = 36,
                r = BigInt(i - s) / BigInt(2)
            }
        return this._getCommon(n, r)
    }
    errorStr() {
        let e = this._getSharedErrorPostfix();
        return e += ` gasPrice=${this.gasPrice}`,
        e
    }
    _errorMsg(e) {
        return `${e} (${this.errorStr()})`
    }
}
const ws = new Map;
class hn {
    constructor() {}
    static typeToInt(e) {
        return Number(ae(fe(e)))
    }
    static registerTransactionType(e, n) {
        const r = hn.typeToInt(e);
        ws.set(r, n)
    }
    static fromTxData(e, n={}) {
        if (!("type"in e) || e.type === void 0)
            return Lt.fromTxData(e, n);
        const r = hn.typeToInt(e.type);
        if (r === 0)
            return Lt.fromTxData(e, n);
        if (r === 1)
            return Jt.fromTxData(e, n);
        if (r === 2)
            return Xt.fromTxData(e, n);
        const i = ws.get(r);
        if (i != null && i.fromTxData)
            return i.fromTxData(e, n);
        throw new Error(`Tx instantiation with type ${r} not supported`)
    }
    static fromSerializedData(e, n={}) {
        if (e[0] <= 127)
            switch (e[0]) {
            case 1:
                return Jt.fromSerializedTx(e, n);
            case 2:
                return Xt.fromSerializedTx(e, n);
            default:
                {
                    const r = ws.get(Number(e[0]));
                    if (r != null && r.fromSerializedTx)
                        return r.fromSerializedTx(e, n);
                    throw new Error(`TypedTransaction with ID ${e[0]} unknown`)
                }
            }
        else
            return Lt.fromSerializedTx(e, n)
    }
    static fromBlockBodyData(e, n={}) {
        if (e instanceof Uint8Array)
            return this.fromSerializedData(e, n);
        if (Array.isArray(e))
            return Lt.fromValuesArray(e, n);
        throw new Error("Cannot decode transaction: unknown type input")
    }
}
var Xi = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const Wn = (t, e) => {
    let n;
    if (!e && typeof t == "string" && se(t) && t.length !== 66)
        throw new ca;
    try {
        n = t instanceof Uint8Array ? t : at(t)
    } catch {
        throw new Sf
    }
    if (!e && n.byteLength !== 32)
        throw new ca;
    return n
}
  , Go = t => {
    const e = se(t) ? t : et(t)
      , n = ue(e)
      , r = ue(Vc(`Ethereum Signed Message:
${n.byteLength}`))
      , i = Re(r, n);
    return je(i)
}
  , qd = (t, e) => {
    const n = Wn(e)
      , r = Go(t)
      , i = xt.sign(r.substring(2), n)
      , s = i.toCompactRawBytes()
      , o = i.r.toString(16).padStart(64, "0")
      , a = i.s.toString(16).padStart(64, "0")
      , u = i.recovery + 27;
    return {
        message: t,
        messageHash: r,
        v: He(u),
        r: `0x${o}`,
        s: `0x${a}`,
        signature: `${X(s)}${u.toString(16)}`
    }
}
  , Ty = (t, e) => Xi(void 0, void 0, void 0, function*() {
    const n = t.sign(ue(e));
    if (b(n.v) || b(n.r) || b(n.s))
        throw new Rs("Signer Error");
    const r = n.validate(!0);
    if (r.length > 0) {
        let o = "Signer Error ";
        for (const a of r)
            o += `${o} ${a}.`;
        throw new Rs(o)
    }
    const i = X(n.serialize())
      , s = je(i);
    return {
        messageHash: X(n.getMessageToSign(!0)),
        v: `0x${n.v.toString(16)}`,
        r: `0x${n.r.toString(16).padStart(64, "0")}`,
        s: `0x${n.s.toString(16).padStart(64, "0")}`,
        rawTransaction: i,
        transactionHash: X(s)
    }
})
  , Sy = t => {
    if (b(t))
        throw new Uf;
    const e = hn.fromSerializedData(ue(t));
    return ct(e.getSenderAddress().toString())
}
  , Ks = (t, e, n, r, i) => {
    if (typeof t == "object") {
        const l = `${t.r}${t.s.slice(2)}${t.v.slice(2)}`;
        return Ks(t.messageHash, l, n)
    }
    if (typeof e == "string" && typeof n == "string" && !b(r)) {
        const l = `${n}${r.slice(2)}${e.slice(2)}`;
        return Ks(t, l, i)
    }
    if (b(e))
        throw new kf("signature string undefined");
    const s = 130
      , o = n ? t : Go(t);
    let a = parseInt(e.substring(s), 16);
    a > 26 && (a -= 27);
    const u = xt.Signature.fromCompact(e.slice(2, s)).addRecoveryBit(a).recoverPublicKey(o.replace("0x", "")).toRawBytes(!1)
      , d = je(u.subarray(1));
    return ct(`0x${d.slice(-40)}`)
}
  , Ji = t => {
    const e = Wn(t)
      , n = xt.getPublicKey(e, !1)
      , i = je(n.slice(1)).slice(-40);
    return ct(`0x${i}`)
}
  , ky = (t, e) => {
    const n = Wn(t);
    return `0x${X(xt.getPublicKey(n, e)).slice(4)}`
}
  , zd = (t, e, n) => Xi(void 0, void 0, void 0, function*() {
    var r, i, s, o, a, u, d;
    const c = Wn(t);
    let l;
    if (n != null && n.salt ? l = typeof n.salt == "string" ? ue(n.salt) : n.salt : l = Er(32),
    !(ho(e) || e instanceof Uint8Array))
        throw new Rf;
    const f = typeof e == "string" ? ue(et(e)) : e;
    let h;
    if (n != null && n.iv) {
        if (h = typeof n.iv == "string" ? ue(n.iv) : n.iv,
        h.length !== 16)
            throw new Bf
    } else
        h = Er(16);
    const p = (r = n == null ? void 0 : n.kdf) !== null && r !== void 0 ? r : "scrypt";
    let m, g;
    if (p === "pbkdf2") {
        if (g = {
            dklen: (i = n == null ? void 0 : n.dklen) !== null && i !== void 0 ? i : 32,
            salt: X(l).replace("0x", ""),
            c: (s = n == null ? void 0 : n.c) !== null && s !== void 0 ? s : 262144,
            prf: "hmac-sha256"
        },
        g.c < 1e3)
            throw new Cf;
        m = wd(f, l, g.c, g.dklen, "sha256")
    } else if (p === "scrypt")
        g = {
            n: (o = n == null ? void 0 : n.n) !== null && o !== void 0 ? o : 8192,
            r: (a = n == null ? void 0 : n.r) !== null && a !== void 0 ? a : 8,
            p: (u = n == null ? void 0 : n.p) !== null && u !== void 0 ? u : 1,
            dklen: (d = n == null ? void 0 : n.dklen) !== null && d !== void 0 ? d : 32,
            salt: X(l).replace("0x", "")
        },
        m = xd(f, l, g.n, g.p, g.r, g.dklen);
    else
        throw new uc;
    const y = yield Bo(c, m.slice(0, 16), h, "aes-128-ctr")
      , _ = X(y).slice(2)
      , w = je(Re(m.slice(16, 32), y)).replace("0x", "");
    return {
        version: 3,
        id: So(),
        address: Ji(c).toLowerCase().replace("0x", ""),
        crypto: {
            ciphertext: _,
            cipherparams: {
                iv: X(h).replace("0x", "")
            },
            cipher: "aes-128-ctr",
            kdf: p,
            kdfparams: g,
            mac: w
        }
    }
})
  , Uo = (t, e) => {
    const n = Wn(t, e);
    return {
        address: Ji(n),
        privateKey: X(n),
        signTransaction: r => {
            throw new Rs("Do not have network access to sign the transaction")
        }
        ,
        sign: r => qd(typeof r == "string" ? r : JSON.stringify(r), n),
        encrypt: (r, i) => Xi(void 0, void 0, void 0, function*() {
            return zd(n, r, i)
        })
    }
}
  , Ay = () => {
    const t = xt.utils.randomPrivateKey();
    return Uo(`${X(t)}`)
}
  , Py = (t, e, n) => Xi(void 0, void 0, void 0, function*() {
    const r = typeof t == "object" ? t : JSON.parse(n ? t.toLowerCase() : t);
    if (H.validateJSONSchema(yg, r),
    r.version !== 3)
        throw new Pf;
    const i = typeof e == "string" ? ue(et(e)) : e;
    H.validate(["bytes"], [i]);
    let s;
    if (r.crypto.kdf === "scrypt") {
        const d = r.crypto.kdfparams
          , c = typeof d.salt == "string" ? ue(d.salt) : d.salt;
        s = xd(i, c, d.n, d.p, d.r, d.dklen)
    } else if (r.crypto.kdf === "pbkdf2") {
        const d = r.crypto.kdfparams
          , c = typeof d.salt == "string" ? ue(d.salt) : d.salt;
        s = wd(i, c, d.c, d.dklen, "sha256")
    } else
        throw new uc;
    const o = ue(r.crypto.ciphertext);
    if (je(Re(s.slice(16, 32), o)).replace("0x", "") !== r.crypto.mac)
        throw new Af;
    const u = yield b0(ue(r.crypto.ciphertext), s.slice(0, 16), ue(r.crypto.cipherparams.iv));
    return Uo(u)
});
var za = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const Ry = 1e3;
class By {
    constructor(e) {
        this._requestManager = e,
        this._requests = new Map
    }
    get requests() {
        return [...this._requests.values()].map(e => e.payload)
    }
    add(e) {
        const n = ln(e)
          , r = new xi;
        return this._requests.set(n.id, {
            payload: n,
            promise: r
        }),
        r
    }
    execute(e) {
        var n;
        return za(this, void 0, void 0, function*() {
            if (this.requests.length === 0)
                return Promise.resolve([]);
            const r = new xi({
                timeout: (n = e == null ? void 0 : e.timeout) !== null && n !== void 0 ? n : Ry,
                eagerStart: !0,
                timeoutMessage: "Batch request timeout"
            });
            return this._processBatchRequest(r).catch(i => r.reject(i)),
            r.catch(i => {
                i instanceof lc && this._abortAllRequests("Batch request timeout"),
                r.reject(i)
            }
            ),
            r
        })
    }
    _processBatchRequest(e) {
        var n, r;
        return za(this, void 0, void 0, function*() {
            const i = yield this._requestManager.sendBatch([...this._requests.values()].map(a => a.payload));
            if (i.length !== this._requests.size)
                throw this._abortAllRequests("Invalid batch response"),
                new ht(i,`Batch request size mismatch the results size. Requests: ${this._requests.size}, Responses: ${i.length}`);
            const s = this.requests.map(a => a.id).map(Number).sort( (a, u) => a - u)
              , o = i.map(a => a.id).map(Number).sort( (a, u) => a - u);
            if (JSON.stringify(s) !== JSON.stringify(o))
                throw this._abortAllRequests("Invalid batch response"),
                new ht(i,`Batch request mismatch the results. Requests: [${s.join()}], Responses: [${o.join()}]`);
            for (const a of i)
                gt(a) ? (n = this._requests.get(a.id)) === null || n === void 0 || n.promise.resolve(a.result) : yt(a) && ((r = this._requests.get(a.id)) === null || r === void 0 || r.promise.reject(a.error));
            e.resolve(i)
        })
    }
    _abortAllRequests(e) {
        for (const {promise: n} of this._requests.values())
            n.reject(new jf(e))
    }
}
var Cy = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class Oe extends l0 {
    constructor(e) {
        var n;
        if (super(),
        this.providers = tn.providers,
        z(e) || typeof e == "string" && e.trim() !== "" || Ei(e)) {
            this._requestManager = new tn(e),
            this._subscriptionManager = new js(this._requestManager,{});
            return
        }
        const {config: r, provider: i, requestManager: s, subscriptionManager: o, registeredSubscriptions: a, accountProvider: u, wallet: d} = e;
        this.setConfig(r ?? {}),
        this._requestManager = s ?? new tn(i,(n = r == null ? void 0 : r.enableExperimentalFeatures) === null || n === void 0 ? void 0 : n.useSubscriptionWhenCheckingBlockTimeout),
        o ? this._subscriptionManager = o : this._subscriptionManager = new js(this.requestManager,a ?? {}),
        u && (this._accountProvider = u),
        d && (this._wallet = d)
    }
    get requestManager() {
        return this._requestManager
    }
    get subscriptionManager() {
        return this._subscriptionManager
    }
    get wallet() {
        return this._wallet
    }
    get accountProvider() {
        return this._accountProvider
    }
    static fromContextObject(...e) {
        return new this(...e.reverse())
    }
    getContextObject() {
        var e;
        return {
            config: this.config,
            provider: this.provider,
            requestManager: this.requestManager,
            subscriptionManager: this.subscriptionManager,
            registeredSubscriptions: (e = this.subscriptionManager) === null || e === void 0 ? void 0 : e.registeredSubscriptions,
            providers: this.providers,
            wallet: this.wallet,
            accountProvider: this.accountProvider
        }
    }
    use(e, ...n) {
        const r = new e(...n,this.getContextObject());
        return this.on(fn.CONFIG_CHANGE, i => {
            r.setConfig({
                [i.name]: i.newValue
            })
        }
        ),
        r
    }
    link(e) {
        this.setConfig(e.config),
        this._requestManager = e.requestManager,
        this.provider = e.provider,
        this._subscriptionManager = e.subscriptionManager,
        this._wallet = e.wallet,
        this._accountProvider = e._accountProvider,
        e.on(fn.CONFIG_CHANGE, n => {
            this.setConfig({
                [n.name]: n.newValue
            })
        }
        )
    }
    registerPlugin(e) {
        if (this[e.pluginNamespace] !== void 0)
            throw new Df(e.pluginNamespace);
        const n = {
            [e.pluginNamespace]: e
        };
        n[e.pluginNamespace].link(this),
        Object.assign(this, n)
    }
    get provider() {
        return this.currentProvider
    }
    set provider(e) {
        this.requestManager.setProvider(e)
    }
    get currentProvider() {
        return this.requestManager.provider
    }
    set currentProvider(e) {
        this.requestManager.setProvider(e)
    }
    get givenProvider() {
        return Oe.givenProvider
    }
    setProvider(e) {
        return this.provider = e,
        !0
    }
    get BatchRequest() {
        return By.bind(void 0, this._requestManager)
    }
    extend(e) {
        var n;
        return e.property && !this[e.property] && (this[e.property] = {}),
        (n = e.methods) === null || n === void 0 || n.forEach(r => {
            const i = (...s) => Cy(this, void 0, void 0, function*() {
                return this.requestManager.send({
                    method: r.call,
                    params: s
                })
            });
            e.property ? this[e.property][r.name] = i : this[r.name] = i
        }
        ),
        this
    }
}
Oe.providers = tn.providers;
class be {
    constructor(e) {
        if (this.toAddress = () => {
            if (this.isDirect()) {
                const n = this._iban.slice(4)
                  , r = be._parseInt(n, 36)
                  , i = wr(r, 40);
                return ct(i)
            }
            throw new Error("Iban is indirect and cannot be converted. Must be length of 34 or 35")
        }
        ,
        be.isIndirect(e) || be.isDirect(e))
            this._iban = e;
        else
            throw new Error("Invalid IBAN was provided")
    }
    static isDirect(e) {
        return e.length === 34 || e.length === 35
    }
    isDirect() {
        return be.isDirect(this._iban)
    }
    static isIndirect(e) {
        return e.length === 20
    }
    isIndirect() {
        return be.isIndirect(this._iban)
    }
    static isValid(e) {
        return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(e) && be._mod9710(be._iso13616Prepare(e)) === 1
    }
    isValid() {
        return be.isValid(this._iban)
    }
    static fromBban(e) {
        const n = "XE"
          , i = `0${(98 - this._mod9710(this._iso13616Prepare(`${n}00${e}`))).toString()}`.slice(-2);
        return new be(`${n}${i}${e}`)
    }
    static createIndirect(e) {
        return be.fromBban(`ETH${e.institution}${e.identifier}`)
    }
    static fromAddress(e) {
        if (!Ve(e))
            throw new uo(e);
        const r = BigInt(Rr(e)).toString(36)
          , i = wr(r, 15);
        return be.fromBban(i.toUpperCase())
    }
    static toIban(e) {
        return be.fromAddress(e).toString()
    }
    client() {
        return this.isIndirect() ? this._iban.slice(11) : ""
    }
    checksum() {
        return this._iban.slice(2, 4)
    }
    institution() {
        return this.isIndirect() ? this._iban.slice(7, 11) : ""
    }
    toString() {
        return this._iban
    }
}
be._iso13616Prepare = t => {
    const r = t.toUpperCase();
    return `${r.slice(4)}${r.slice(0, 4)}`.split("").map(s => {
        const o = s.charCodeAt(0);
        return o >= 65 && o <= 90 ? o - 65 + 10 : s
    }
    ).join("")
}
;
be._parseInt = (t, e) => [...t].reduce( (n, r) => BigInt(parseInt(r, e)) + BigInt(e) * n, BigInt(0));
be._mod9710 = t => {
    let e = t, n;
    for (; e.length > 2; )
        n = e.slice(0, 9),
        e = `${(parseInt(n, 10) % 97).toString()}${e.slice(n.length)}`;
    return parseInt(e, 10) % 97
}
;
be.toAddress = t => new be(t).toAddress();
var xs = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
}, Vd;
class Wd extends zi {
    constructor(e) {
        super(),
        this[Vd] = "Promise",
        this._promise = new Promise(e)
    }
    then(e, n) {
        return xs(this, void 0, void 0, function*() {
            return this._promise.then(e, n)
        })
    }
    catch(e) {
        return xs(this, void 0, void 0, function*() {
            return this._promise.catch(e)
        })
    }
    finally(e) {
        return xs(this, void 0, void 0, function*() {
            return this._promise.finally(e)
        })
    }
    on(e, n) {
        return super.on(e, n),
        this
    }
    once(e, n) {
        return super.once(e, n),
        this
    }
}
Vd = Symbol.toStringTag;
(function(t, e) {
    if (t.setImmediate)
        return;
    var n = 1, r = {}, i = !1, s = t.document, o;
    function a(_) {
        typeof _ != "function" && (_ = new Function("" + _));
        for (var w = new Array(arguments.length - 1), S = 0; S < w.length; S++)
            w[S] = arguments[S + 1];
        var E = {
            callback: _,
            args: w
        };
        return r[n] = E,
        o(n),
        n++
    }
    function u(_) {
        delete r[_]
    }
    function d(_) {
        var w = _.callback
          , S = _.args;
        switch (S.length) {
        case 0:
            w();
            break;
        case 1:
            w(S[0]);
            break;
        case 2:
            w(S[0], S[1]);
            break;
        case 3:
            w(S[0], S[1], S[2]);
            break;
        default:
            w.apply(e, S);
            break
        }
    }
    function c(_) {
        if (i)
            setTimeout(c, 0, _);
        else {
            var w = r[_];
            if (w) {
                i = !0;
                try {
                    d(w)
                } finally {
                    u(_),
                    i = !1
                }
            }
        }
    }
    function l() {
        o = function(_) {
            process.nextTick(function() {
                c(_)
            })
        }
    }
    function f() {
        if (t.postMessage && !t.importScripts) {
            var _ = !0
              , w = t.onmessage;
            return t.onmessage = function() {
                _ = !1
            }
            ,
            t.postMessage("", "*"),
            t.onmessage = w,
            _
        }
    }
    function h() {
        var _ = "setImmediate$" + Math.random() + "$"
          , w = function(S) {
            S.source === t && typeof S.data == "string" && S.data.indexOf(_) === 0 && c(+S.data.slice(_.length))
        };
        t.addEventListener ? t.addEventListener("message", w, !1) : t.attachEvent("onmessage", w),
        o = function(S) {
            t.postMessage(_ + S, "*")
        }
    }
    function p() {
        var _ = new MessageChannel;
        _.port1.onmessage = function(w) {
            var S = w.data;
            c(S)
        }
        ,
        o = function(w) {
            _.port2.postMessage(w)
        }
    }
    function m() {
        var _ = s.documentElement;
        o = function(w) {
            var S = s.createElement("script");
            S.onreadystatechange = function() {
                c(w),
                S.onreadystatechange = null,
                _.removeChild(S),
                S = null
            }
            ,
            _.appendChild(S)
        }
    }
    function g() {
        o = function(_) {
            setTimeout(c, 0, _)
        }
    }
    var y = Object.getPrototypeOf && Object.getPrototypeOf(t);
    y = y && y.setTimeout ? y : t,
    {}.toString.call(t.process) === "[object process]" ? l() : f() ? h() : t.MessageChannel ? p() : s && "onreadystatechange"in s.createElement("script") ? m() : g(),
    y.setImmediate = a,
    y.clearImmediate = u
}
)(typeof self > "u" ? typeof cs > "u" ? cs : cs : self);
var Z = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
function Ny(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_protocolVersion",
            params: []
        })
    })
}
function Zd(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_syncing",
            params: []
        })
    })
}
function Oy(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_coinbase",
            params: []
        })
    })
}
function Ly(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_mining",
            params: []
        })
    })
}
function My(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_hashrate",
            params: []
        })
    })
}
function $y(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_gasPrice",
            params: []
        })
    })
}
function Hy(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_accounts",
            params: []
        })
    })
}
function jy(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_blockNumber",
            params: []
        })
    })
}
function Dy(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["address", "blockNumberOrTag"], [e, n]),
        t.send({
            method: "eth_getBalance",
            params: [e, n]
        })
    })
}
function Fy(t, e, n, r) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["address", "hex", "blockNumberOrTag"], [e, n, r]),
        t.send({
            method: "eth_getStorageAt",
            params: [e, n, r]
        })
    })
}
function Gy(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["address", "blockNumberOrTag"], [e, n]),
        t.send({
            method: "eth_getTransactionCount",
            params: [e, n]
        })
    })
}
function Uy(t, e) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["bytes32"], [e]),
        t.send({
            method: "eth_getBlockTransactionCountByHash",
            params: [e]
        })
    })
}
function qy(t, e) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["blockNumberOrTag"], [e]),
        t.send({
            method: "eth_getBlockTransactionCountByNumber",
            params: [e]
        })
    })
}
function zy(t, e) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["bytes32"], [e]),
        t.send({
            method: "eth_getUncleCountByBlockHash",
            params: [e]
        })
    })
}
function Vy(t, e) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["blockNumberOrTag"], [e]),
        t.send({
            method: "eth_getUncleCountByBlockNumber",
            params: [e]
        })
    })
}
function Wy(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["address", "blockNumberOrTag"], [e, n]),
        t.send({
            method: "eth_getCode",
            params: [e, n]
        })
    })
}
function Zy(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["address", "hex"], [e, n]),
        t.send({
            method: "eth_sign",
            params: [e, n]
        })
    })
}
function Ky(t, e) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_signTransaction",
            params: [e]
        })
    })
}
function Xy(t, e) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_sendTransaction",
            params: [e]
        })
    })
}
function Kd(t, e) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["hex"], [e]),
        t.send({
            method: "eth_sendRawTransaction",
            params: [e]
        })
    })
}
function Jy(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["blockNumberOrTag"], [n]),
        t.send({
            method: "eth_call",
            params: [e, n]
        })
    })
}
function Yy(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["blockNumberOrTag"], [n]),
        t.send({
            method: "eth_estimateGas",
            params: [e, n]
        })
    })
}
function Qy(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["bytes32", "bool"], [e, n]),
        t.send({
            method: "eth_getBlockByHash",
            params: [e, n]
        })
    })
}
function Xd(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["blockNumberOrTag", "bool"], [e, n]),
        t.send({
            method: "eth_getBlockByNumber",
            params: [e, n]
        })
    })
}
function ev(t, e) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["bytes32"], [e]),
        t.send({
            method: "eth_getTransactionByHash",
            params: [e]
        })
    })
}
function tv(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["bytes32", "hex"], [e, n]),
        t.send({
            method: "eth_getTransactionByBlockHashAndIndex",
            params: [e, n]
        })
    })
}
function nv(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["blockNumberOrTag", "hex"], [e, n]),
        t.send({
            method: "eth_getTransactionByBlockNumberAndIndex",
            params: [e, n]
        })
    })
}
function rv(t, e) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["bytes32"], [e]),
        t.send({
            method: "eth_getTransactionReceipt",
            params: [e]
        })
    })
}
function iv(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["bytes32", "hex"], [e, n]),
        t.send({
            method: "eth_getUncleByBlockHashAndIndex",
            params: [e, n]
        })
    })
}
function sv(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["blockNumberOrTag", "hex"], [e, n]),
        t.send({
            method: "eth_getUncleByBlockNumberAndIndex",
            params: [e, n]
        })
    })
}
function ov(t, e) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["filter"], [e]),
        t.send({
            method: "eth_getLogs",
            params: [e]
        })
    })
}
function av(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_getWork",
            params: []
        })
    })
}
function cv(t, e, n, r) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["bytes8", "bytes32", "bytes32"], [e, n, r]),
        t.send({
            method: "eth_submitWork",
            params: [e, n, r]
        })
    })
}
function dv(t, e, n, r) {
    return Z(this, void 0, void 0, function*() {
        H.validate(["hex", "blockNumberOrTag"], [e, n]);
        for (const i of r)
            H.validate(["number"], [i]);
        return t.send({
            method: "eth_feeHistory",
            params: [e, n, r]
        })
    })
}
function uv(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_pendingTransactions",
            params: []
        })
    })
}
function lv(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_requestAccounts",
            params: []
        })
    })
}
function fv(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "eth_chainId",
            params: []
        })
    })
}
function hv(t, e, n, r) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["address", "bytes32[]", "blockNumberOrTag"], [e, n, r]),
        t.send({
            method: "eth_getProof",
            params: [e, n, r]
        })
    })
}
function mv(t) {
    return Z(this, void 0, void 0, function*() {
        return t.send({
            method: "web3_clientVersion",
            params: []
        })
    })
}
function pv(t, e, n) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["blockNumberOrTag"], [n]),
        t.send({
            method: "eth_createAccessList",
            params: [e, n]
        })
    })
}
function gv(t, e, n, r=!1) {
    return Z(this, void 0, void 0, function*() {
        return H.validate(["address"], [e]),
        t.send({
            method: `eth_signTypedData${r ? "" : "_v4"}`,
            params: [e, n]
        })
    })
}
var qo = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
function yv(t) {
    return qo(this, void 0, void 0, function*() {
        return t.send({
            method: "net_version",
            params: []
        })
    })
}
function vv(t) {
    return qo(this, void 0, void 0, function*() {
        return t.send({
            method: "net_peerCount",
            params: []
        })
    })
}
function bv(t) {
    return qo(this, void 0, void 0, function*() {
        return t.send({
            method: "net_listening",
            params: []
        })
    })
}
var Et = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const _v = t => Et(void 0, void 0, void 0, function*() {
    return t.send({
        method: "personal_listAccounts",
        params: []
    })
})
  , wv = (t, e) => Et(void 0, void 0, void 0, function*() {
    return t.send({
        method: "personal_newAccount",
        params: [e]
    })
})
  , xv = (t, e, n, r) => Et(void 0, void 0, void 0, function*() {
    return t.send({
        method: "personal_unlockAccount",
        params: [e, n, r]
    })
})
  , Ev = (t, e) => Et(void 0, void 0, void 0, function*() {
    return t.send({
        method: "personal_lockAccount",
        params: [e]
    })
})
  , Iv = (t, e, n) => Et(void 0, void 0, void 0, function*() {
    return t.send({
        method: "personal_importRawKey",
        params: [e, n]
    })
})
  , Tv = (t, e, n) => Et(void 0, void 0, void 0, function*() {
    return t.send({
        method: "personal_sendTransaction",
        params: [e, n]
    })
})
  , Sv = (t, e, n) => Et(void 0, void 0, void 0, function*() {
    return t.send({
        method: "personal_signTransaction",
        params: [e, n]
    })
})
  , kv = (t, e, n, r) => Et(void 0, void 0, void 0, function*() {
    return t.send({
        method: "personal_sign",
        params: [e, n, r]
    })
})
  , Av = (t, e, n) => Et(void 0, void 0, void 0, function*() {
    return t.send({
        method: "personal_ecRecover",
        params: [e, n]
    })
})
  , Va = {
    type: "object",
    properties: {
        accessList: {
            type: "null"
        },
        maxFeePerGas: {
            type: "null"
        },
        maxPriorityFeePerGas: {
            type: "null"
        }
    }
}
  , Wa = {
    type: "object",
    properties: {
        maxFeePerGas: {
            type: "null"
        },
        maxPriorityFeePerGas: {
            type: "null"
        }
    }
}
  , Za = {
    type: "object",
    properties: {
        gasPrice: {
            type: "null"
        }
    }
}
  , Mr = (t, e, n) => {
    try {
        H.validateJSONSchema(t, e)
    } catch (r) {
        throw r instanceof Hn ? new mh(r.errors,n) : r
    }
}
  , Pv = t => {
    var e, n;
    const r = t;
    if (!b(r.type)) {
        let s;
        switch (r.type) {
        case "0x0":
            s = Va;
            break;
        case "0x1":
            s = Wa;
            break;
        case "0x2":
            s = Za;
            break;
        default:
            return I({
                format: "uint"
            }, r.type, U)
        }
        return Mr(s, r, r.type),
        I({
            format: "uint"
        }, r.type, U)
    }
    if (!b(r.maxFeePerGas) || !b(r.maxPriorityFeePerGas))
        return Mr(Za, r, "0x2"),
        "0x2";
    if (!b(r.accessList))
        return Mr(Wa, r, "0x1"),
        "0x1";
    const i = (e = r.hardfork) !== null && e !== void 0 ? e : (n = r.common) === null || n === void 0 ? void 0 : n.hardfork;
    if (!b(i)) {
        const s = Object.keys(sr).indexOf(i);
        if (s >= Object.keys(sr).indexOf("london"))
            return b(r.gasPrice) ? "0x2" : "0x0";
        if (s === Object.keys(sr).indexOf("berlin"))
            return "0x0"
    }
    if (!b(r.gasPrice))
        return Mr(Va, r, "0x0"),
        "0x0"
}
  , Rv = (t, e) => {
    var n;
    return ((n = e == null ? void 0 : e.transactionTypeParser) !== null && n !== void 0 ? n : Pv)(t)
}
  , Bv = t => t[0] > 127 ? "0x0" : jt(t[0])
  , Cv = {
    type: "object",
    properties: {
        address: {
            format: "address"
        },
        storageKeys: {
            type: "array",
            items: {
                format: "bytes32"
            }
        }
    }
}
  , zo = {
    type: "array",
    items: Object.assign({}, Cv)
}
  , Nv = {
    type: "object",
    properties: {
        accessList: Object.assign({}, zo),
        gasUsed: {
            type: "string"
        }
    }
}
  , Ka = {
    type: "string",
    enum: ["goerli", "kovan", "mainnet", "rinkeby", "ropsten", "sepolia"]
}
  , Xa = {
    type: "string",
    enum: ["arrowGlacier", "berlin", "byzantium", "chainstart", "constantinople", "dao", "homestead", "istanbul", "london", "merge", "muirGlacier", "petersburg", "shanghai", "spuriousDragon", "tangerineWhistle"]
}
  , Ov = {
    type: "object",
    properties: {
        name: {
            format: "string"
        },
        networkId: {
            format: "uint"
        },
        chainId: {
            format: "uint"
        }
    }
}
  , Jd = {
    type: "object",
    properties: {
        from: {
            format: "address"
        },
        to: {
            oneOf: [{
                format: "address"
            }, {
                type: "null"
            }]
        },
        value: {
            format: "uint"
        },
        gas: {
            format: "uint"
        },
        gasPrice: {
            format: "uint"
        },
        effectiveGasPrice: {
            format: "uint"
        },
        type: {
            format: "uint"
        },
        maxFeePerGas: {
            format: "uint"
        },
        maxPriorityFeePerGas: {
            format: "uint"
        },
        accessList: Object.assign({}, zo),
        data: {
            format: "bytes"
        },
        input: {
            format: "bytes"
        },
        nonce: {
            format: "uint"
        },
        chain: Object.assign({}, Ka),
        hardfork: Object.assign({}, Xa),
        chainId: {
            format: "uint"
        },
        networkId: {
            format: "uint"
        },
        common: {
            type: "object",
            properties: {
                customChain: Object.assign({}, Ov),
                baseChain: Object.assign({}, Ka),
                hardfork: Object.assign({}, Xa)
            }
        },
        gasLimit: {
            format: "uint"
        },
        v: {
            format: "uint"
        },
        r: {
            format: "bytes32"
        },
        s: {
            format: "bytes32"
        }
    }
}
  , Xs = {
    type: "object",
    properties: Object.assign(Object.assign({}, Jd.properties), {
        blockHash: {
            format: "bytes32"
        },
        blockNumber: {
            format: "uint"
        },
        hash: {
            format: "bytes32"
        },
        transactionIndex: {
            format: "uint"
        },
        from: {
            format: "address"
        },
        to: {
            oneOf: [{
                format: "address"
            }, {
                type: "null"
            }]
        },
        value: {
            format: "uint"
        },
        gas: {
            format: "uint"
        },
        gasPrice: {
            format: "uint"
        },
        effectiveGasPrice: {
            format: "uint"
        },
        type: {
            format: "uint"
        },
        maxFeePerGas: {
            format: "uint"
        },
        maxPriorityFeePerGas: {
            format: "uint"
        },
        accessList: Object.assign({}, zo),
        data: {
            format: "bytes"
        },
        input: {
            format: "bytes"
        },
        nonce: {
            format: "uint"
        },
        gasLimit: {
            format: "uint"
        },
        v: {
            format: "uint"
        },
        r: {
            format: "bytes32"
        },
        s: {
            format: "bytes32"
        }
    })
}
  , Ai = {
    type: "object",
    properties: {
        parentHash: {
            format: "bytes32"
        },
        sha3Uncles: {
            format: "bytes32"
        },
        miner: {
            format: "bytes"
        },
        stateRoot: {
            format: "bytes32"
        },
        transactionsRoot: {
            format: "bytes32"
        },
        receiptsRoot: {
            format: "bytes32"
        },
        logsBloom: {
            format: "bytes256"
        },
        difficulty: {
            format: "uint"
        },
        number: {
            format: "uint"
        },
        gasLimit: {
            format: "uint"
        },
        gasUsed: {
            format: "uint"
        },
        timestamp: {
            format: "uint"
        },
        extraData: {
            format: "bytes"
        },
        mixHash: {
            format: "bytes32"
        },
        nonce: {
            format: "uint"
        },
        totalDifficulty: {
            format: "uint"
        },
        baseFeePerGas: {
            format: "uint"
        },
        size: {
            format: "uint"
        },
        transactions: {
            oneOf: [{
                type: "array",
                items: Object.assign({}, Xs)
            }, {
                type: "array",
                items: {
                    format: "bytes32"
                }
            }]
        },
        uncles: {
            type: "array",
            items: {
                format: "bytes32"
            }
        },
        hash: {
            format: "bytes32"
        }
    }
}
  , Lv = {
    type: "object",
    properties: {
        index: {
            format: "uint"
        },
        validatorIndex: {
            format: "uint"
        },
        address: {
            format: "address"
        },
        amount: {
            format: "uint"
        }
    }
}
  , Mv = {
    type: "object",
    properties: {
        author: {
            format: "bytes32"
        },
        hash: {
            format: "bytes32"
        },
        parentHash: {
            format: "bytes32"
        },
        receiptsRoot: {
            format: "bytes32"
        },
        miner: {
            format: "bytes"
        },
        stateRoot: {
            format: "bytes32"
        },
        transactionsRoot: {
            format: "bytes32"
        },
        withdrawalsRoot: {
            format: "bytes32"
        },
        logsBloom: {
            format: "bytes256"
        },
        difficulty: {
            format: "uint"
        },
        totalDifficulty: {
            format: "uint"
        },
        number: {
            format: "uint"
        },
        gasLimit: {
            format: "uint"
        },
        gasUsed: {
            format: "uint"
        },
        timestamp: {
            format: "uint"
        },
        extraData: {
            format: "bytes"
        },
        nonce: {
            format: "uint"
        },
        sha3Uncles: {
            format: "bytes32"
        },
        size: {
            format: "uint"
        },
        baseFeePerGas: {
            format: "uint"
        },
        excessDataGas: {
            format: "uint"
        },
        mixHash: {
            format: "bytes32"
        },
        transactions: {
            type: "array",
            items: {
                format: "bytes32"
            }
        },
        uncles: {
            type: "array",
            items: {
                format: "bytes32"
            }
        },
        withdrawals: {
            type: "array",
            items: Object.assign({}, Lv)
        }
    }
}
  , Yi = {
    type: "object",
    properties: {
        removed: {
            format: "bool"
        },
        logIndex: {
            format: "uint"
        },
        transactionIndex: {
            format: "uint"
        },
        transactionHash: {
            format: "bytes32"
        },
        blockHash: {
            format: "bytes32"
        },
        blockNumber: {
            format: "uint"
        },
        address: {
            format: "address"
        },
        data: {
            format: "bytes"
        },
        topics: {
            type: "array",
            items: {
                format: "bytes32"
            }
        }
    }
}
  , $v = {
    type: "object",
    properties: {
        startingBlock: {
            format: "string"
        },
        currentBlock: {
            format: "string"
        },
        highestBlock: {
            format: "string"
        },
        knownStates: {
            format: "string"
        },
        pulledStates: {
            format: "string"
        }
    }
}
  , Zn = {
    type: "object",
    properties: {
        transactionHash: {
            format: "bytes32"
        },
        transactionIndex: {
            format: "uint"
        },
        blockHash: {
            format: "bytes32"
        },
        blockNumber: {
            format: "uint"
        },
        from: {
            format: "address"
        },
        to: {
            format: "address"
        },
        cumulativeGasUsed: {
            format: "uint"
        },
        gasUsed: {
            format: "uint"
        },
        effectiveGasPrice: {
            format: "uint"
        },
        contractAddress: {
            format: "address"
        },
        logs: {
            type: "array",
            items: Object.assign({}, Yi)
        },
        logsBloom: {
            format: "bytes"
        },
        root: {
            format: "bytes"
        },
        status: {
            format: "uint"
        },
        type: {
            format: "uint"
        }
    }
}
  , Hv = {
    type: "object",
    properties: {
        messageHash: {
            format: "bytes"
        },
        r: {
            format: "bytes32"
        },
        s: {
            format: "bytes32"
        },
        v: {
            format: "bytes"
        },
        message: {
            format: "bytes"
        },
        signature: {
            format: "bytes"
        }
    }
}
  , jv = {
    type: "object",
    properties: {
        oldestBlock: {
            format: "uint"
        },
        baseFeePerGas: {
            type: "array",
            items: {
                format: "uint"
            }
        },
        reward: {
            type: "array",
            items: {
                type: "array",
                items: {
                    format: "uint"
                }
            }
        },
        gasUsedRatio: {
            type: "array",
            items: {
                type: "number"
            }
        }
    }
}
  , Dv = {
    type: "object",
    properties: {
        key: {
            format: "bytes32"
        },
        value: {
            format: "uint"
        },
        proof: {
            type: "array",
            items: {
                format: "bytes32"
            }
        }
    }
}
  , Fv = {
    type: "object",
    properties: {
        balance: {
            format: "uint"
        },
        codeHash: {
            format: "bytes32"
        },
        nonce: {
            format: "uint"
        },
        storageHash: {
            format: "bytes32"
        },
        accountProof: {
            type: "array",
            items: {
                format: "bytes32"
            }
        },
        storageProof: {
            type: "array",
            items: Object.assign({}, Dv)
        }
    }
};
function Le(t, e=O, n={
    transactionSchema: Xs,
    fillInputAndData: !1
}) {
    var r, i;
    let s = qt({}, t);
    if (b(t == null ? void 0 : t.common) || (s.common = Object.assign({}, t.common),
    b((r = t.common) === null || r === void 0 ? void 0 : r.customChain) || (s.common.customChain = Object.assign({}, t.common.customChain))),
    s = I((i = n.transactionSchema) !== null && i !== void 0 ? i : Xs, s, e),
    !b(s.data) && !b(s.input) && jt(s.data) !== jt(s.input))
        throw new pc({
            data: X(s.data),
            input: X(s.input)
        });
    return n.fillInputAndData && (b(s.data) ? b(s.input) || (s.data = s.input) : s.input = s.data),
    b(s.gasLimit) || (s.gas = s.gasLimit,
    delete s.gasLimit),
    s
}
function Gv(t, e, n={
    fillInputAndData: !1
}) {
    return {
        raw: I({
            format: "bytes"
        }, t, e),
        tx: Le(Object.assign(Object.assign({}, hn.fromSerializedData(ue(t)).toJSON()), {
            hash: X(xr(ue(t))),
            type: Bv(ue(t))
        }), e, {
            fillInputAndData: n.fillInputAndData
        })
    }
}
var Vo = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
function Wo(t, e) {
    return Vo(this, void 0, void 0, function*() {
        const n = yield yv(t.requestManager);
        return I({
            format: "uint"
        }, n, e)
    })
}
function Uv(t, e) {
    return Vo(this, void 0, void 0, function*() {
        const n = yield vv(t.requestManager);
        return I({
            format: "uint"
        }, n, e)
    })
}
const qv = t => Vo(void 0, void 0, void 0, function*() {
    return bv(t.requestManager)
});
var Es = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class Yd extends Oe {
    getId(e=O) {
        return Es(this, void 0, void 0, function*() {
            return Wo(this, e)
        })
    }
    getPeerCount(e=O) {
        return Es(this, void 0, void 0, function*() {
            return Uv(this, e)
        })
    }
    isListening() {
        return Es(this, void 0, void 0, function*() {
            return qv(this)
        })
    }
}
const qn = "ALLEVENTS"
  , Js = {
    name: qn,
    signature: "",
    type: "event",
    inputs: []
}
  , Qi = {
    bytes: wt.HEX,
    number: ze.NUMBER
};
var Qd = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
function zv(t, e, n) {
    var r, i, s;
    return Qd(this, void 0, void 0, function*() {
        const o = yield Ru(e, e.defaultBlock, !1, n);
        if (b(o.baseFeePerGas))
            throw new dh;
        if (!b(t.gasPrice)) {
            const a = I({
                format: "uint"
            }, t.gasPrice, n);
            return {
                maxPriorityFeePerGas: a,
                maxFeePerGas: a
            }
        }
        return {
            maxPriorityFeePerGas: I({
                format: "uint"
            }, (r = t.maxPriorityFeePerGas) !== null && r !== void 0 ? r : e.defaultMaxPriorityFeePerGas, n),
            maxFeePerGas: I({
                format: "uint"
            }, (i = t.maxFeePerGas) !== null && i !== void 0 ? i : BigInt(o.baseFeePerGas) * BigInt(2) + BigInt((s = t.maxPriorityFeePerGas) !== null && s !== void 0 ? s : e.defaultMaxPriorityFeePerGas), n)
        }
    })
}
function eu(t, e, n) {
    return Qd(this, void 0, void 0, function*() {
        const r = tu(t, e);
        if (!b(r)) {
            if (r.startsWith("-"))
                throw new fa(r);
            if (Number(r) < 0 || Number(r) > 127)
                throw new fa(r);
            if (b(t.gasPrice) && (r === "0x0" || r === "0x1"))
                return {
                    gasPrice: yield Pu(e, n),
                    maxPriorityFeePerGas: void 0,
                    maxFeePerGas: void 0
                };
            if (r === "0x2")
                return Object.assign({
                    gasPrice: void 0
                }, yield zv(t, e, n))
        }
    })
}
var Zo = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const Ys = (t, e, n, r) => {
    if (n !== void 0 && t in n && n[t] !== void 0) {
        if (typeof n[t] == "string" && Ve(n[t]))
            return n[t];
        if (!se(n[t]) && qc(n[t])) {
            if (e.wallet) {
                const i = e.wallet.get(I({
                    format: "uint"
                }, n[t], Qi));
                if (!b(i))
                    return i.address;
                throw new ha
            }
            throw new ha
        } else
            throw t === "from" ? new qf(n.from) : new zf(n.to)
    }
    if (t === "from") {
        if (!b(r))
            return Ji(r);
        if (!b(e.defaultAccount))
            return e.defaultAccount
    }
}
  , Vv = (t, e, n=O) => Zo(void 0, void 0, void 0, function*() {
    if (b(e))
        throw new ch;
    return Cu(t, e, t.defaultBlock, n)
})
  , tu = (t, e) => {
    const n = Rv(t, e);
    if (!b(n))
        return n;
    if (!b(e.defaultTransactionType))
        return I({
            format: "uint"
        }, e.defaultTransactionType, U)
}
;
function Wv(t) {
    var e, n;
    return Zo(this, void 0, void 0, function*() {
        let r = I(Jd, t.transaction, O);
        if (b(r.from) && (r.from = Ys("from", t.web3Context, void 0, t.privateKey)),
        b(r.nonce) && (r.nonce = yield Vv(t.web3Context, r.from, U)),
        b(r.value) && (r.value = "0x0"),
        b(r.data))
            b(r.input) ? r.input = "0x" : r.input.startsWith("0x") || (r.input = `0x${r.input}`);
        else {
            if (!b(r.input) && r.data !== r.input)
                throw new pc({
                    data: X(r.data),
                    input: X(r.input)
                });
            r.data.startsWith("0x") || (r.data = `0x${r.data}`)
        }
        if (b(r.common)) {
            if (t.web3Context.defaultCommon) {
                const i = t.web3Context.defaultCommon
                  , s = i.customChain.chainId
                  , o = i.customChain.networkId
                  , a = i.customChain.name;
                r.common = Object.assign(Object.assign({}, i), {
                    customChain: {
                        chainId: s,
                        networkId: o,
                        name: a
                    }
                })
            }
            b(r.chain) && (r.chain = t.web3Context.defaultChain),
            b(r.hardfork) && (r.hardfork = t.web3Context.defaultHardfork)
        }
        if (b(r.chainId) && b((e = r.common) === null || e === void 0 ? void 0 : e.customChain.chainId) && (r.chainId = yield Ou(t.web3Context, U)),
        b(r.networkId) && (r.networkId = (n = t.web3Context.defaultNetworkId) !== null && n !== void 0 ? n : yield Wo(t.web3Context, U)),
        b(r.gasLimit) && !b(r.gas) && (r.gasLimit = r.gas),
        r.type = tu(r, t.web3Context),
        b(r.accessList) && (r.type === "0x1" || r.type === "0x2") && (r.accessList = []),
        t.fillGasPrice && (r = Object.assign(Object.assign({}, r), yield eu(r, t.web3Context, U))),
        b(r.gas) && b(r.gasLimit) && t.fillGasLimit) {
            const i = yield ra(t.web3Context, r, "latest", U);
            r = Object.assign(Object.assign({}, r), {
                gas: I({
                    format: "uint"
                }, i, U)
            })
        }
        return r
    })
}
const Zv = t => Zo(void 0, void 0, void 0, function*() {
    var e;
    return ((e = t.web3Context.transactionBuilder) !== null && e !== void 0 ? e : Wv)(Object.assign(Object.assign({}, t), {
        transaction: t.transaction
    }))
});
var Ko = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
function Qs(t, e, n) {
    const r = t.transactionPollingInterval
      , [i,s] = rd( () => Ko(this, void 0, void 0, function*() {
        let a;
        try {
            a = yield ta(t, Qi)
        } catch (d) {
            console.warn("An error happen while trying to get the block number", d);
            return
        }
        const u = a - e;
        if (u >= t.transactionBlockTimeout)
            return new yc({
                starterBlockNumber: e,
                numberOfBlocks: u,
                transactionHash: n
            })
    }), r);
    return [s, {
        clean: () => {
            clearInterval(i)
        }
    }]
}
function Kv(t, e, n) {
    var r;
    return Ko(this, void 0, void 0, function*() {
        let i = !0, s, o;
        function a(d, c) {
            c && console.warn("error happened at subscription. So revert to polling...", c),
            o.clean(),
            i = !1;
            const [l,f] = Qs(t, e, n);
            o.clean = f.clean,
            l.catch(h => d(h))
        }
        try {
            s = yield(r = t.subscriptionManager) === null || r === void 0 ? void 0 : r.subscribe("newHeads"),
            o = {
                clean: () => {
                    var d;
                    s.id && ((d = t.subscriptionManager) === null || d === void 0 || d.removeSubscription(s).then( () => {}
                    ).catch( () => {}
                    ))
                }
            }
        } catch {
            return Qs(t, e, n)
        }
        return [new Promise( (d, c) => {
            try {
                s.on("data", l => {
                    if (i = !1,
                    !(l != null && l.number))
                        return;
                    const f = Number(BigInt(l.number) - BigInt(e));
                    f >= t.transactionBlockTimeout && c(new yc({
                        starterBlockNumber: e,
                        numberOfBlocks: f,
                        transactionHash: n
                    }))
                }
                ),
                s.on("error", l => {
                    a(c, l)
                }
                )
            } catch (l) {
                a(c, l)
            }
            setTimeout( () => {
                i && a(c)
            }
            , t.blockHeaderTimeout * 1e3)
        }
        ), o]
    })
}
function nu(t, e) {
    var n, r;
    return Ko(this, void 0, void 0, function*() {
        const {provider: i} = t.requestManager;
        let s;
        const o = yield ta(t, Qi);
        return !((r = (n = i).supportsSubscriptions) === null || r === void 0) && r.call(n) && t.enableExperimentalFeatures.useSubscriptionWhenCheckingBlockTimeout ? s = yield Kv(t, o, e) : s = Qs(t, o, e),
        s
    })
}
var Xv = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
function eo(t, e, n) {
    return Xv(this, void 0, void 0, function*() {
        const [r,i] = To(t.transactionSendTimeout, new uh({
            numberOfSeconds: t.transactionSendTimeout / 1e3,
            transactionHash: n
        }))
          , [s,o] = yield nu(t, n);
        try {
            return yield Promise.race([e(), i, s])
        } finally {
            clearTimeout(r),
            o.clean()
        }
    })
}
var Ja = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
function ru(t, e, n) {
    var r;
    return Ja(this, void 0, void 0, function*() {
        const i = (r = t.transactionReceiptPollingInterval) !== null && r !== void 0 ? r : t.transactionPollingInterval
          , [s,o] = Io( () => Ja(this, void 0, void 0, function*() {
            try {
                return Bu(t, e, n)
            } catch (l) {
                console.warn("An error happen while trying to get the transaction receipt", l);
                return
            }
        }), i)
          , [a,u] = To(t.transactionPollingTimeout, new lh({
            numberOfSeconds: t.transactionPollingTimeout / 1e3,
            transactionHash: e
        }))
          , [d,c] = yield nu(t, e);
        try {
            return yield Promise.race([s, u, d])
        } finally {
            a && clearTimeout(a),
            o && clearInterval(o),
            c.clean()
        }
    })
}
var Jv = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const zr = ({web3Context: t, transactionReceipt: e, transactionPromiEvent: n, returnFormat: r}) => {
    var i;
    let s = 1;
    const o = setInterval( () => {
        Jv(void 0, void 0, void 0, function*() {
            s >= t.transactionConfirmationBlocks && clearInterval(o);
            const a = yield Xd(t.requestManager, He(BigInt(e.blockNumber) + BigInt(s)), !1);
            a != null && a.hash && (s += 1,
            n.emit("confirmation", {
                confirmations: I({
                    format: "uint"
                }, s, r),
                receipt: I(Zn, e, r),
                latestBlockHash: I({
                    format: "bytes32"
                }, a.hash, r)
            }))
        })
    }
    , (i = t.transactionReceiptPollingInterval) !== null && i !== void 0 ? i : t.transactionPollingInterval)
}
;
var Ya = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const Yv = ({web3Context: t, transactionReceipt: e, transactionPromiEvent: n, returnFormat: r}) => {
    let i = !0, s;
    setImmediate( () => {
        var o;
        (o = t.subscriptionManager) === null || o === void 0 || o.subscribe("newHeads").then(a => {
            a.on("data", u => Ya(void 0, void 0, void 0, function*() {
                var d;
                if (i = !1,
                !(u != null && u.number) || s === (u == null ? void 0 : u.parentHash))
                    return;
                s = u == null ? void 0 : u.parentHash;
                const c = BigInt(u.number) - BigInt(e.blockNumber) + BigInt(1);
                n.emit("confirmation", {
                    confirmations: I({
                        format: "uint"
                    }, c, r),
                    receipt: I(Zn, e, r),
                    latestBlockHash: I({
                        format: "bytes32"
                    }, u.parentHash, r)
                }),
                c >= t.transactionConfirmationBlocks && (yield(d = t.subscriptionManager) === null || d === void 0 ? void 0 : d.removeSubscription(a))
            })),
            a.on("error", () => Ya(void 0, void 0, void 0, function*() {
                var u;
                yield(u = t.subscriptionManager) === null || u === void 0 ? void 0 : u.removeSubscription(a),
                i = !1,
                zr({
                    web3Context: t,
                    transactionReceipt: e,
                    transactionPromiEvent: n,
                    returnFormat: r
                })
            }))
        }
        ).catch( () => {
            i = !1,
            zr({
                web3Context: t,
                transactionReceipt: e,
                transactionPromiEvent: n,
                returnFormat: r
            })
        }
        )
    }
    ),
    setTimeout( () => {
        i && zr({
            web3Context: t,
            transactionReceipt: e,
            transactionPromiEvent: n,
            returnFormat: r
        })
    }
    , t.blockHeaderTimeout * 1e3)
}
;
function Qv(t, e, n, r, i) {
    if (b(n) || b(n.blockHash))
        throw new fh({
            receipt: n,
            blockHash: I({
                format: "bytes32"
            }, n == null ? void 0 : n.blockHash, i),
            transactionHash: I({
                format: "bytes32"
            }, r, i)
        });
    if (!n.blockNumber)
        throw new hh({
            receipt: n
        });
    e.emit("confirmation", {
        confirmations: I({
            format: "uint"
        }, 1, i),
        receipt: I(Zn, n, i),
        latestBlockHash: I({
            format: "bytes32"
        }, n.blockHash, i)
    });
    const s = t.requestManager.provider;
    s && "supportsSubscriptions"in s && s.supportsSubscriptions() ? Yv({
        web3Context: t,
        transactionReceipt: n,
        transactionPromiEvent: e,
        returnFormat: i
    }) : zr({
        web3Context: t,
        transactionReceipt: n,
        transactionPromiEvent: e,
        returnFormat: i
    })
}
const es = t => !z(t) && typeof t == "object" && !z(t.type) && t.type === "error"
  , Xo = t => !z(t) && typeof t == "object" && !z(t.type) && t.type === "event"
  , ts = t => !z(t) && typeof t == "object" && !z(t.type) && t.type === "function"
  , eb = t => !z(t) && typeof t == "object" && !z(t.type) && t.type === "constructor"
  , tb = t => typeof t == "object" && typeof t.components > "u" && typeof t.name > "u"
  , iu = t => t.includes("[]") ? {
    type: "tuple[]",
    name: t.slice(0, -2)
} : {
    type: "tuple",
    name: t
}
  , su = t => {
    const e = [];
    for (const n of Object.keys(t)) {
        const r = t[n];
        typeof r == "object" ? e.push(Object.assign(Object.assign({}, iu(n)), {
            components: su(r)
        })) : e.push({
            name: n,
            type: t[n]
        })
    }
    return e
}
  , to = (t, e) => {
    const n = [];
    return e.forEach(r => {
        if (typeof r.components == "object") {
            if (!r.type.startsWith("tuple"))
                throw new ne(`Invalid value given "${r.type}". Error: components found but type is not tuple.`);
            const i = r.type.indexOf("[")
              , s = i >= 0 ? r.type.substring(i) : ""
              , o = to(t, r.components);
            Array.isArray(o) && t ? n.push(`tuple(${o.join(",")})${s}`) : t ? n.push(`(${o.join()})`) : n.push(`(${o.join(",")})${s}`)
        } else
            n.push(r.type)
    }
    ),
    n
}
  , mn = t => {
    var e, n, r, i;
    return es(t) || Xo(t) || ts(t) ? !((e = t.name) === null || e === void 0) && e.includes("(") ? t.name : `${(n = t.name) !== null && n !== void 0 ? n : ""}(${to(!1, (r = t.inputs) !== null && r !== void 0 ? r : []).join(",")})` : `(${to(!1, (i = t.inputs) !== null && i !== void 0 ? i : []).join(",")})`
}
  , nb = t => {
    if (typeof t != "string" && !es(t))
        throw new ne("Invalid parameter value in encodeErrorSignature");
    let e;
    return t && (typeof t == "function" || typeof t == "object") ? e = mn(t) : e = t,
    je(e)
}
  , Jo = t => {
    if (typeof t != "string" && !Xo(t))
        throw new ne("Invalid parameter value in encodeEventSignature");
    let e;
    return t && (typeof t == "function" || typeof t == "object") ? e = mn(t) : e = t,
    je(e)
}
;
function Yo(t, e) {
    const n = t.exec(e);
    return n == null ? void 0 : n.groups
}
var ou = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/
  , au = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/
  , cu = /^\(.+?\).*?$/
  , rb = Object.defineProperty
  , ib = (t, e, n) => e in t ? rb(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n
  , Qn = (t, e, n) => (ib(t, typeof e != "symbol" ? e + "" : e, n),
n)
  , sb = "abitype"
  , ob = "0.7.1"
  , Ce = class extends Error {
    constructor(t, e={}) {
        var s;
        const n = e.cause instanceof Ce ? e.cause.details : (s = e.cause) != null && s.message ? e.cause.message : e.details
          , r = e.cause instanceof Ce && e.cause.docsPath || e.docsPath
          , i = [t || "An error occurred.", "", ...e.metaMessages ? [...e.metaMessages, ""] : [], ...r ? [`Docs: https://abitype.dev${r}`] : [], ...n ? [`Details: ${n}`] : [], `Version: ${sb}@${ob}`].join(`
`);
        super(i),
        Qn(this, "details"),
        Qn(this, "docsPath"),
        Qn(this, "metaMessages"),
        Qn(this, "shortMessage"),
        Qn(this, "name", "AbiTypeError"),
        e.cause && (this.cause = e.cause),
        this.details = n,
        this.docsPath = r,
        this.metaMessages = e.metaMessages,
        this.shortMessage = t
    }
}
  , du = /^struct (?<name>[a-zA-Z0-9_]+) \{(?<properties>.*?)\}$/;
function uu(t) {
    return du.test(t)
}
function ab(t) {
    return Yo(du, t)
}
var Qa = new Set(["memory", "indexed", "storage", "calldata"])
  , cb = new Set(["calldata", "memory", "storage"]);
function db(t, e) {
    return e ? `${e}:${t}` : t
}
var Is = new Map([["address", {
    type: "address"
}], ["bool", {
    type: "bool"
}], ["bytes", {
    type: "bytes"
}], ["bytes32", {
    type: "bytes32"
}], ["int", {
    type: "int256"
}], ["int256", {
    type: "int256"
}], ["string", {
    type: "string"
}], ["uint", {
    type: "uint256"
}], ["uint8", {
    type: "uint8"
}], ["uint16", {
    type: "uint16"
}], ["uint24", {
    type: "uint24"
}], ["uint32", {
    type: "uint32"
}], ["uint64", {
    type: "uint64"
}], ["uint96", {
    type: "uint96"
}], ["uint112", {
    type: "uint112"
}], ["uint160", {
    type: "uint160"
}], ["uint192", {
    type: "uint192"
}], ["uint256", {
    type: "uint256"
}], ["address owner", {
    type: "address",
    name: "owner"
}], ["address to", {
    type: "address",
    name: "to"
}], ["bool approved", {
    type: "bool",
    name: "approved"
}], ["bytes _data", {
    type: "bytes",
    name: "_data"
}], ["bytes data", {
    type: "bytes",
    name: "data"
}], ["bytes signature", {
    type: "bytes",
    name: "signature"
}], ["bytes32 hash", {
    type: "bytes32",
    name: "hash"
}], ["bytes32 r", {
    type: "bytes32",
    name: "r"
}], ["bytes32 root", {
    type: "bytes32",
    name: "root"
}], ["bytes32 s", {
    type: "bytes32",
    name: "s"
}], ["string name", {
    type: "string",
    name: "name"
}], ["string symbol", {
    type: "string",
    name: "symbol"
}], ["string tokenURI", {
    type: "string",
    name: "tokenURI"
}], ["uint tokenId", {
    type: "uint256",
    name: "tokenId"
}], ["uint8 v", {
    type: "uint8",
    name: "v"
}], ["uint256 balance", {
    type: "uint256",
    name: "balance"
}], ["uint256 tokenId", {
    type: "uint256",
    name: "tokenId"
}], ["uint256 value", {
    type: "uint256",
    name: "value"
}], ["event:address indexed from", {
    type: "address",
    name: "from",
    indexed: !0
}], ["event:address indexed to", {
    type: "address",
    name: "to",
    indexed: !0
}], ["event:uint indexed tokenId", {
    type: "uint256",
    name: "tokenId",
    indexed: !0
}], ["event:uint256 indexed tokenId", {
    type: "uint256",
    name: "tokenId",
    indexed: !0
}]])
  , ub = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/
  , lb = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/
  , fb = /^u?int$/;
function Pi(t, e) {
    var l, f;
    const n = db(t, e == null ? void 0 : e.type);
    if (Is.has(n))
        return Is.get(n);
    const r = cu.test(t)
      , i = Yo(r ? lb : ub, t);
    if (!i)
        throw new Ce("Invalid ABI parameter.",{
            details: t
        });
    if (i.name && mb(i.name))
        throw new Ce("Invalid ABI parameter.",{
            details: t,
            metaMessages: [`"${i.name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
        });
    const s = i.name ? {
        name: i.name
    } : {}
      , o = i.modifier === "indexed" ? {
        indexed: !0
    } : {}
      , a = (e == null ? void 0 : e.structs) ?? {};
    let u, d = {};
    if (r) {
        u = "tuple";
        const h = Pn(i.type)
          , p = []
          , m = h.length;
        for (let g = 0; g < m; g++)
            p.push(Pi(h[g], {
                structs: a
            }));
        d = {
            components: p
        }
    } else if (i.type in a)
        u = "tuple",
        d = {
            components: a[i.type]
        };
    else if (fb.test(i.type))
        u = `${i.type}256`;
    else if (u = i.type,
    (e == null ? void 0 : e.type) !== "struct" && !lu(u))
        throw new Ce("Unknown type.",{
            metaMessages: [`Type "${u}" is not a valid ABI type.`]
        });
    if (i.modifier) {
        if (!((f = (l = e == null ? void 0 : e.modifiers) == null ? void 0 : l.has) != null && f.call(l, i.modifier)))
            throw new Ce("Invalid ABI parameter.",{
                details: t,
                metaMessages: [`Modifier "${i.modifier}" not allowed${e != null && e.type ? ` in "${e.type}" type` : ""}.`]
            });
        if (cb.has(i.modifier) && !pb(u, !!i.array))
            throw new Ce("Invalid ABI parameter.",{
                details: t,
                metaMessages: [`Modifier "${i.modifier}" not allowed${e != null && e.type ? ` in "${e.type}" type` : ""}.`, `Data location can only be specified for array, struct, or mapping types, but "${i.modifier}" was given.`]
            })
    }
    const c = {
        type: `${u}${i.array ?? ""}`,
        ...s,
        ...o,
        ...d
    };
    return Is.set(n, c),
    c
}
function Pn(t, e=[], n="", r=0) {
    if (t === "") {
        if (n === "")
            return e;
        if (r !== 0)
            throw new Ce("Unbalanced parentheses.",{
                metaMessages: [`"${n.trim()}" has too many ${r > 0 ? "opening" : "closing"} parentheses.`],
                details: `Depth "${r}"`
            });
        return [...e, n.trim()]
    }
    const i = t.length;
    for (let s = 0; s < i; s++) {
        const o = t[s]
          , a = t.slice(s + 1);
        switch (o) {
        case ",":
            return r === 0 ? Pn(a, [...e, n.trim()]) : Pn(a, e, `${n}${o}`, r);
        case "(":
            return Pn(a, e, `${n}${o}`, r + 1);
        case ")":
            return Pn(a, e, `${n}${o}`, r - 1);
        default:
            return Pn(a, e, `${n}${o}`, r)
        }
    }
    return []
}
function lu(t) {
    return t === "address" || t === "bool" || t === "function" || t === "string" || ou.test(t) || au.test(t)
}
var hb = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function mb(t) {
    return t === "address" || t === "bool" || t === "function" || t === "string" || t === "tuple" || ou.test(t) || au.test(t) || hb.test(t)
}
function pb(t, e) {
    return e || t === "bytes" || t === "string" || t === "tuple"
}
function gb(t) {
    const e = {}
      , n = t.length;
    for (let o = 0; o < n; o++) {
        const a = t[o];
        if (!uu(a))
            continue;
        const u = ab(a);
        if (!u)
            throw new Ce("Invalid struct signature.",{
                details: a
            });
        const d = u.properties.split(";")
          , c = []
          , l = d.length;
        for (let f = 0; f < l; f++) {
            const p = d[f].trim();
            if (!p)
                continue;
            const m = Pi(p, {
                type: "struct"
            });
            c.push(m)
        }
        if (!c.length)
            throw new Ce("Invalid struct signature.",{
                details: a,
                metaMessages: ["No properties exist."]
            });
        e[u.name] = c
    }
    const r = {}
      , i = Object.entries(e)
      , s = i.length;
    for (let o = 0; o < s; o++) {
        const [a,u] = i[o];
        r[a] = fu(u, e)
    }
    return r
}
var yb = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?$/;
function fu(t, e, n=new Set) {
    const r = []
      , i = t.length;
    for (let s = 0; s < i; s++) {
        const o = t[s];
        if (cu.test(o.type))
            r.push(o);
        else {
            const u = Yo(yb, o.type);
            if (!(u != null && u.type))
                throw new Ce("Invalid ABI parameter.",{
                    details: JSON.stringify(o, null, 2),
                    metaMessages: ["ABI parameter type is invalid."]
                });
            const {array: d, type: c} = u;
            if (c in e) {
                if (n.has(c))
                    throw new Ce("Circular reference detected.",{
                        metaMessages: [`Struct "${c}" is a circular reference.`]
                    });
                r.push({
                    ...o,
                    type: `tuple${d ?? ""}`,
                    components: fu(e[c] ?? [], e, new Set([...n, c]))
                })
            } else if (lu(c))
                r.push(o);
            else
                throw new Ce("Unknown type.",{
                    metaMessages: [`Type "${c}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
                })
        }
    }
    return r
}
function vb(t) {
    let e;
    if (typeof t == "string")
        e = Pi(t, {
            modifiers: Qa
        });
    else {
        const n = gb(t)
          , r = t.length;
        for (let i = 0; i < r; i++) {
            const s = t[i];
            if (!uu(s)) {
                e = Pi(s, {
                    modifiers: Qa,
                    structs: n
                });
                break
            }
        }
    }
    if (!e)
        throw new Ce("Failed to parse ABI parameter.",{
            details: `parseAbiParameter(${JSON.stringify(t, null, 2)})`,
            docsPath: "/api/human.html#parseabiparameter-1"
        });
    return e
}
const ge = 32;
function no(t=0) {
    var e;
    if (((e = globalThis.Buffer) === null || e === void 0 ? void 0 : e.alloc) !== void 0) {
        const n = globalThis.Buffer.alloc(t);
        return new Uint8Array(n.buffer,n.byteOffset,n.byteLength)
    }
    return new Uint8Array(t)
}
function hu(t) {
    var e, n;
    return Object.assign(Object.assign({}, t), {
        name: (e = t.name) !== null && e !== void 0 ? e : "",
        components: (n = t.components) === null || n === void 0 ? void 0 : n.map(r => hu(r))
    })
}
function bb(t) {
    return !z(t) && typeof t == "object" && !z(t.type) && typeof t.type == "string"
}
function mu(t) {
    return t.map(e => {
        var n;
        if (bb(e))
            return e;
        if (typeof e == "string")
            return hu(vb(e.replace(/tuple/, "")));
        if (tb(e)) {
            const r = Object.keys(e)[0]
              , i = iu(r);
            return i.name = (n = i.name) !== null && n !== void 0 ? n : "",
            Object.assign(Object.assign({}, i), {
                components: su(e[r])
            })
        }
        throw new ne("Invalid abi")
    }
    )
}
function Qo(t) {
    const e = t.type.lastIndexOf("[")
      , n = t.type.substring(0, e)
      , r = t.type.substring(e);
    let i = -1;
    if (r !== "[]" && (i = Number(r.slice(1, -1)),
    isNaN(i)))
        throw new ne("Invalid fixed array size",{
            size: r
        });
    return {
        param: {
            type: n,
            name: "",
            components: t.components
        },
        size: i
    }
}
function Ri(t) {
    var e, n;
    return t.type === "string" || t.type === "bytes" || t.type.endsWith("[]") ? !0 : t.type === "tuple" ? (n = (e = t.components) === null || e === void 0 ? void 0 : e.some(Ri)) !== null && n !== void 0 ? n : !1 : t.type.endsWith("]") ? Ri(Qo(t).param) : !1
}
const pu = 20
  , gu = ge - pu;
function _b(t, e) {
    if (typeof e != "string")
        throw new ne("address type expects string as input type",{
            value: e,
            name: t.name,
            type: t.type
        });
    let n = e.toLowerCase();
    if (n.startsWith("0x") || (n = `0x${n}`),
    !Ve(n))
        throw new ne("provided input is not valid address",{
            value: e,
            name: t.name,
            type: t.type
        });
    const r = yn(n)
      , i = no(ge);
    return i.set(r, gu),
    {
        dynamic: !1,
        encoded: i
    }
}
function wb(t, e) {
    const n = e.subarray(gu, ge);
    if (n.length !== pu)
        throw new ne("Invalid decoding input, not enough bytes to decode address",{
            bytes: e
        });
    const r = Gt(n);
    return {
        result: ct(r),
        encoded: e.subarray(ge),
        consumed: ge
    }
}
const Dt = new Map;
let $r = BigInt(256);
for (let t = 8; t <= 256; t += 8)
    Dt.set(`uint${t}`, {
        min: BigInt(0),
        max: $r - BigInt(1)
    }),
    Dt.set(`int${t}`, {
        min: -$r / BigInt(2),
        max: $r / BigInt(2) - BigInt(1)
    }),
    $r *= BigInt(256);
Dt.set("int", Dt.get("int256"));
Dt.set("uint", Dt.get("uint256"));
const yu = BigInt(1) << BigInt(256);
function xb(t, e=ge) {
    let n;
    return t < 0 ? n = (yu + t).toString(16) : n = t.toString(16),
    n = jn(n, e * 2),
    yn(n)
}
function Eb(t, e) {
    const n = Gt(t)
      , r = BigInt(n);
    return r <= e ? r : r - yu
}
function Or(t, e) {
    let n;
    try {
        n = Zt(e)
    } catch {
        throw new ne("provided input is not number value",{
            type: t.type,
            value: e,
            name: t.name
        })
    }
    const r = Dt.get(t.type);
    if (!r)
        throw new ne("provided abi contains invalid number datatype",{
            type: t.type
        });
    if (n < r.min)
        throw new ne("provided input is less then minimum for given type",{
            type: t.type,
            value: e,
            name: t.name,
            minimum: r.min.toString()
        });
    if (n > r.max)
        throw new ne("provided input is greater then maximum for given type",{
            type: t.type,
            value: e,
            name: t.name,
            maximum: r.max.toString()
        });
    return {
        dynamic: !1,
        encoded: xb(n)
    }
}
function zn(t, e) {
    if (e.length < ge)
        throw new ne("Not enough bytes left to decode",{
            param: t,
            bytesLeft: e.length
        });
    const n = e.subarray(0, ge)
      , r = Dt.get(t.type);
    if (!r)
        throw new ne("provided abi contains invalid number datatype",{
            type: t.type
        });
    const i = Eb(n, r.max);
    if (i < r.min)
        throw new ne("decoded value is less then minimum for given type",{
            type: t.type,
            value: i,
            name: t.name,
            minimum: r.min.toString()
        });
    if (i > r.max)
        throw new ne("decoded value is greater then maximum for given type",{
            type: t.type,
            value: i,
            name: t.name,
            maximum: r.max.toString()
        });
    return {
        result: i,
        encoded: e.subarray(ge),
        consumed: ge
    }
}
function Ib(t, e) {
    let n;
    try {
        n = Kc(e)
    } catch (r) {
        if (r instanceof lo)
            throw new ne("provided input is not valid boolean value",{
                type: t.type,
                value: e,
                name: t.name
            })
    }
    return Or({
        type: "uint8",
        name: ""
    }, Number(n))
}
function Tb(t, e) {
    const n = zn({
        type: "uint8",
        name: ""
    }, e);
    if (n.result > 1 || n.result < 0)
        throw new ne("Invalid boolean value encoded",{
            boolBytes: e.subarray(0, ge),
            numberResult: n
        });
    return {
        result: n.result === BigInt(1),
        encoded: n.encoded,
        consumed: ge
    }
}
const Sb = 32;
function vu(t, e) {
    if (typeof e == "string" && e.length % 2 !== 0 && (e += "0"),
    !Ut(e))
        throw new ne("provided input is not valid bytes value",{
            type: t.type,
            value: e,
            name: t.name
        });
    const n = at(e)
      , [,r] = t.type.split("bytes");
    if (r) {
        if (Number(r) > Sb || Number(r) < 1)
            throw new ne("invalid bytes type. Static byte type can have between 1 and 32 bytes",{
                type: t.type
            });
        if (Number(r) < n.length)
            throw new ne("provided input size is different than type size",{
                type: t.type,
                value: e,
                name: t.name
            });
        const o = no(ge);
        return o.set(n),
        {
            dynamic: !1,
            encoded: o
        }
    }
    const i = Math.ceil(n.length / ge)
      , s = no(ge + i * ge);
    return s.set(Or({
        type: "uint32",
        name: ""
    }, n.length).encoded),
    s.set(n, ge),
    {
        dynamic: !0,
        encoded: s
    }
}
function bu(t, e) {
    const [,n] = t.type.split("bytes");
    let r = Number(n)
      , i = e
      , s = 1
      , o = 0;
    if (!r) {
        const a = zn({
            type: "uint32",
            name: ""
        }, i);
        r = Number(a.result),
        o += a.consumed,
        i = a.encoded,
        s = Math.ceil(r / ge)
    }
    if (r > e.length)
        throw new ne("there is not enough data to decode",{
            type: t.type,
            encoded: e,
            size: r
        });
    return {
        result: X(i.subarray(0, r)),
        encoded: i.subarray(s * ge),
        consumed: o + s * ge
    }
}
function kb(t, e) {
    if (typeof e != "string")
        throw new ne("invalid input, should be string",{
            input: e
        });
    const n = wo(e);
    return vu({
        type: "bytes",
        name: ""
    }, n)
}
function Ab(t, e) {
    const n = bu({
        type: "bytes",
        name: ""
    }, e);
    return {
        result: Fi(n.result),
        encoded: n.encoded,
        consumed: n.consumed
    }
}
function _u(t) {
    let e = 0
      , n = 0;
    const r = []
      , i = [];
    for (const s of t)
        s.dynamic ? e += ge : e += s.encoded.length;
    for (const s of t)
        s.dynamic ? (r.push(Or({
            type: "uint256",
            name: ""
        }, e + n)),
        i.push(s),
        n += s.encoded.length) : r.push(s);
    return Re(...r.map(s => s.encoded), ...i.map(s => s.encoded))
}
function Pb(t, e) {
    if (!Array.isArray(e))
        throw new ne("Expected value to be array",{
            abi: t,
            values: e
        });
    const {size: n, param: r} = Qo(t)
      , i = e.map(a => ro(r, a))
      , s = n === -1
      , o = i.length > 0 && i[0].dynamic;
    if (!s && e.length !== n)
        throw new ne("Given arguments count doesn't match array length",{
            arrayLength: n,
            argumentsLength: e.length
        });
    if (s || o) {
        const a = _u(i);
        if (s) {
            const u = Or({
                type: "uint256",
                name: ""
            }, i.length).encoded;
            return {
                dynamic: !0,
                encoded: i.length > 0 ? Re(u, a) : u
            }
        }
        return {
            dynamic: !0,
            encoded: a
        }
    }
    return {
        dynamic: !1,
        encoded: Re(...i.map(a => a.encoded))
    }
}
function Rb(t, e) {
    let {size: n, param: r} = Qo(t);
    const i = n === -1;
    let s = 0;
    const o = [];
    let a = e;
    if (i) {
        const d = zn({
            type: "uint32",
            name: ""
        }, e);
        n = Number(d.result),
        s = d.consumed,
        a = d.encoded
    }
    if (Ri(r)) {
        for (let d = 0; d < n; d += 1) {
            const c = zn({
                type: "uint32",
                name: ""
            }, a.subarray(d * ge));
            s += c.consumed;
            const l = Bi(r, a.subarray(Number(c.result)));
            s += l.consumed,
            o.push(l.result)
        }
        return {
            result: o,
            encoded: a.subarray(s),
            consumed: s
        }
    }
    for (let d = 0; d < n; d += 1) {
        const c = Bi(r, e.subarray(s));
        s += c.consumed,
        o.push(c.result)
    }
    return {
        result: o,
        encoded: e.subarray(s),
        consumed: s
    }
}
function ro(t, e) {
    if (t.type === "string")
        return kb(t, e);
    if (t.type === "bool")
        return Ib(t, e);
    if (t.type === "address")
        return _b(t, e);
    if (t.type === "tuple")
        return wu(t, e);
    if (t.type.endsWith("]"))
        return Pb(t, e);
    if (t.type.startsWith("bytes"))
        return vu(t, e);
    if (t.type.startsWith("uint") || t.type.startsWith("int"))
        return Or(t, e);
    throw new Error("Unsupported")
}
function Bi(t, e) {
    if (t.type === "string")
        return Ab(t, e);
    if (t.type === "bool")
        return Tb(t, e);
    if (t.type === "address")
        return wb(t, e);
    if (t.type === "tuple")
        return xu(t, e);
    if (t.type.endsWith("]"))
        return Rb(t, e);
    if (t.type.startsWith("bytes"))
        return bu(t, e);
    if (t.type.startsWith("uint") || t.type.startsWith("int"))
        return zn(t, e);
    throw new Error("Unsupported")
}
function wu(t, e) {
    var n, r, i;
    let s = !1;
    if (!Array.isArray(e) && typeof e != "object")
        throw new ne("param must be either Array or Object",{
            param: t,
            input: e
        });
    const o = e
      , a = [];
    for (let u = 0; u < ((r = (n = t.components) === null || n === void 0 ? void 0 : n.length) !== null && r !== void 0 ? r : 0); u += 1) {
        const d = t.components[u];
        let c;
        if (Array.isArray(o)) {
            if (u >= o.length)
                throw new ne("input param length missmatch",{
                    param: t,
                    input: e
                });
            c = ro(d, o[u])
        } else {
            const l = o[(i = d.name) !== null && i !== void 0 ? i : ""];
            if (l == null)
                throw new ne("missing input defined in abi",{
                    param: t,
                    input: e,
                    paramName: d.name
                });
            c = ro(d, l)
        }
        c.dynamic && (s = !0),
        a.push(c)
    }
    return s ? {
        dynamic: !0,
        encoded: _u(a)
    } : {
        dynamic: !1,
        encoded: Re(...a.map(u => u.encoded))
    }
}
function xu(t, e) {
    const n = {
        __length__: 0
    };
    let r = 0;
    if (!t.components)
        return {
            result: n,
            encoded: e,
            consumed: r
        };
    let i = 0;
    for (const [s,o] of t.components.entries()) {
        let a;
        if (Ri(o)) {
            const u = zn({
                type: "uint32",
                name: ""
            }, e.subarray(r));
            a = Bi(o, e.subarray(Number(u.result))),
            r += u.consumed,
            i += a.consumed
        } else
            a = Bi(o, e.subarray(r)),
            r += a.consumed;
        n.__length__ += 1,
        n[s] = a.result,
        o.name && o.name !== "" && (n[o.name] = a.result)
    }
    return {
        encoded: e.subarray(r + i),
        result: n,
        consumed: r + i
    }
}
function Bb(t, e, n) {
    const r = mu(t)
      , i = yn(e);
    return xu({
        type: "tuple",
        name: "",
        components: r
    }, i).result
}
function Cb(t, e) {
    if (t.length !== e.length)
        throw new ne("Invalid number of values received for given ABI",{
            expected: t.length,
            received: e.length
        });
    const n = mu(t);
    return Gt(wu({
        type: "tuple",
        name: "",
        components: n
    }, e).encoded)
}
const ns = (t, e) => Cb(t, e)
  , io = (t, e) => ns([t], [e])
  , Eu = (t, e, n) => {
    try {
        if (t.length > 0 && (!e || e === "0x" || e === "0X"))
            throw new ne("Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.");
        return Bb(t, `0x${e.replace(/0x/i, "")}`, n)
    } catch (r) {
        throw new ne(`Parameter decoding error: ${r.message}`,{
            internalErr: r
        })
    }
}
  , rs = (t, e) => Eu(t, e, !1)
  , Iu = (t, e) => rs([t], e)[0]
  , is = t => {
    if (typeof t != "string" && !ts(t))
        throw new ne("Invalid parameter value in encodeFunctionSignature");
    let e;
    return t && (typeof t == "function" || typeof t == "object") ? e = mn(t) : e = t,
    je(e).slice(0, 10)
}
  , Nb = (t, e) => {
    var n;
    if (!ts(t))
        throw new ne("Invalid parameter value in encodeFunctionCall");
    return `${is(t)}${ns((n = t.inputs) !== null && n !== void 0 ? n : [], e ?? []).replace("0x", "")}`
}
  , Ob = ["bool", "string", "int", "uint", "address", "fixed", "ufixed"]
  , Lb = (t, e) => t === "string" ? e : Iu(t, e)
  , Tu = (t, e, n) => {
    const r = Array.isArray(n) ? n : [n]
      , i = {}
      , s = {};
    for (const [f,h] of t.entries())
        h.indexed ? i[f] = h : s[f] = h;
    const o = e ? Eu(Object.values(s), e, !0) : {
        __length__: 0
    }
      , a = r.length - Object.keys(i).length
      , u = Object.values(i).map( (f, h) => Ob.some(p => f.type.startsWith(p)) ? Lb(f.type, r[h + a]) : r[h + a])
      , d = {
        __length__: 0
    };
    let c = 0
      , l = 0;
    for (const [f,h] of t.entries())
        d[f] = h.type === "string" ? "" : void 0,
        i[f] && (d[f] = u[c],
        c += 1),
        s[f] && (d[f] = o[String(l)],
        l += 1),
        h.name && (d[h.name] = d[f]),
        d.__length__ += 1;
    return d
}
  , Vr = (t, e) => {
    if (e != null && e.data) {
        let n, r, i;
        try {
            const s = e.data.slice(0, 10)
              , o = t.find(a => nb(a).startsWith(s));
            o != null && o.inputs && (n = o.name,
            r = mn(o),
            i = rs([...o.inputs], e.data.substring(10)))
        } catch (s) {
            console.error(s)
        }
        n && e.setDecodedProperties(n, r, i)
    }
}
;
var Mb = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const Su = (t, e) => {
    var n, r, i, s;
    if (t instanceof Qt && t.innerError instanceof Oi) {
        if (e !== void 0) {
            const o = e.filter(a => es(a));
            return Vr(o, t.innerError),
            {
                reason: t.innerError.message,
                signature: (n = t.innerError.data) === null || n === void 0 ? void 0 : n.slice(0, 10),
                data: (r = t.innerError.data) === null || r === void 0 ? void 0 : r.substring(10),
                customErrorName: t.innerError.errorName,
                customErrorDecodedSignature: t.innerError.errorSignature,
                customErrorArguments: t.innerError.errorArgs
            }
        }
        return {
            reason: t.innerError.message,
            signature: (i = t.innerError.data) === null || i === void 0 ? void 0 : i.slice(0, 10),
            data: (s = t.innerError.data) === null || s === void 0 ? void 0 : s.substring(10)
        }
    }
    if (t instanceof ar && !Array.isArray(t.innerError) && t.innerError !== void 0)
        return t.innerError.message;
    throw t
}
;
function ku(t, e, n, r=O) {
    return Mb(this, void 0, void 0, function*() {
        try {
            yield na(t, e, t.defaultBlock, r);
            return
        } catch (i) {
            return Su(i, n)
        }
    })
}
var $b = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
function Ts(t, e, n, r, i, s) {
    return $b(this, void 0, void 0, function*() {
        let o = s;
        o === void 0 && (r !== void 0 ? o = Su(r) : t.handleRevert && e !== void 0 && (o = yield ku(t, e, i)));
        let a;
        if (o === void 0)
            a = new hc(n);
        else if (typeof o == "string")
            a = new si(o,void 0,n);
        else if (o.customErrorName !== void 0 && o.customErrorDecodedSignature !== void 0 && o.customErrorArguments !== void 0) {
            const u = o;
            a = new fc(u.reason,u.customErrorName,u.customErrorDecodedSignature,u.customErrorArguments,u.signature,n,u.data)
        } else
            a = new si(o.reason,o.signature,n,o.data);
        return a
    })
}
const ea = (t, e, n, r=O) => {
    var i, s, o, a, u;
    let d = Object.assign({}, t);
    const c = I(Yi, e, r);
    if ([qn, "allEvents"].includes(d.name)) {
        const f = n.find(h => h.signature === e.topics[0]);
        f ? d = f : d = {
            anonymous: !0
        }
    }
    if (d.inputs = (s = (i = d.inputs) !== null && i !== void 0 ? i : t.inputs) !== null && s !== void 0 ? s : [],
    !d.anonymous) {
        let f = 0;
        ((o = d.inputs) !== null && o !== void 0 ? o : []).forEach(h => {
            h.indexed && (f += 1)
        }
        ),
        f > 0 && (e != null && e.topics) && (e == null ? void 0 : e.topics.length) !== f + 1 && (d = Object.assign(Object.assign({}, d), {
            anonymous: !0,
            inputs: []
        }))
    }
    const l = d.anonymous ? e.topics : ((a = e.topics) !== null && a !== void 0 ? a : []).slice(1);
    return Object.assign(Object.assign({}, c), {
        returnValues: Tu([...(u = d.inputs) !== null && u !== void 0 ? u : []], e.data, l),
        event: d.name,
        signature: d.anonymous || !e.topics || e.topics.length === 0 || !e.topics[0] ? void 0 : e.topics[0],
        raw: {
            data: e.data,
            topics: e.topics
        }
    })
}
;
var Vt = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class Au {
    constructor({options: e, web3Context: n, promiEvent: r, returnFormat: i}) {
        this.options = {
            checkRevertBeforeSending: !0
        },
        this.options = e,
        this.web3Context = n,
        this.promiEvent = r,
        this.returnFormat = i
    }
    getReceiptWithEvents(e) {
        var n, r;
        const i = Object.assign({}, e ?? {});
        if (!((n = this.options) === null || n === void 0) && n.contractAbi && i.logs && i.logs.length > 0) {
            i.events = {};
            for (const s of i.logs) {
                const o = ea(Js, s, (r = this.options) === null || r === void 0 ? void 0 : r.contractAbi, this.returnFormat);
                o.event && (i.events[o.event] = o)
            }
        }
        return i
    }
    checkRevertBeforeSending(e) {
        return Vt(this, void 0, void 0, function*() {
            if (this.options.checkRevertBeforeSending !== !1) {
                const n = yield ku(this.web3Context, e, this.options.contractAbi);
                if (n !== void 0)
                    throw yield Ts(this.web3Context, e, void 0, void 0, this.options.contractAbi, n)
            }
        })
    }
    emitSending(e) {
        this.promiEvent.listenerCount("sending") > 0 && this.promiEvent.emit("sending", e)
    }
    populateGasPrice({transactionFormatted: e, transaction: n}) {
        var r;
        return Vt(this, void 0, void 0, function*() {
            let i = e;
            return !(!((r = this.options) === null || r === void 0) && r.ignoreGasPricing) && b(e.gasPrice) && (b(n.maxPriorityFeePerGas) || b(n.maxFeePerGas)) && (i = Object.assign(Object.assign({}, e), yield eu(e, this.web3Context, U))),
            i
        })
    }
    signAndSend({wallet: e, tx: n}) {
        return Vt(this, void 0, void 0, function*() {
            if (e) {
                const r = yield e.signTransaction(n);
                return eo(this.web3Context, () => Vt(this, void 0, void 0, function*() {
                    return Kd(this.web3Context.requestManager, r.rawTransaction)
                }), r.transactionHash)
            }
            return eo(this.web3Context, () => Vt(this, void 0, void 0, function*() {
                return Xy(this.web3Context.requestManager, n)
            }))
        })
    }
    emitSent(e) {
        this.promiEvent.listenerCount("sent") > 0 && this.promiEvent.emit("sent", e)
    }
    emitTransactionHash(e) {
        this.promiEvent.listenerCount("transactionHash") > 0 && this.promiEvent.emit("transactionHash", e)
    }
    emitReceipt(e) {
        this.promiEvent.listenerCount("receipt") > 0 && this.promiEvent.emit("receipt", e)
    }
    handleError({error: e, tx: n}) {
        var r;
        return Vt(this, void 0, void 0, function*() {
            let i = e;
            return i instanceof Qt && this.web3Context.handleRevert && (i = yield Ts(this.web3Context, n, void 0, void 0, (r = this.options) === null || r === void 0 ? void 0 : r.contractAbi)),
            (i instanceof ar || i instanceof Qt || i instanceof fc || i instanceof hc || i instanceof si) && this.promiEvent.listenerCount("error") > 0 && this.promiEvent.emit("error", i),
            i
        })
    }
    emitConfirmation({receipt: e, transactionHash: n}) {
        this.promiEvent.listenerCount("confirmation") > 0 && Qv(this.web3Context, this.promiEvent, e, n, this.returnFormat)
    }
    handleResolve({receipt: e, tx: n}) {
        var r, i, s;
        return Vt(this, void 0, void 0, function*() {
            if (!((r = this.options) === null || r === void 0) && r.transactionResolver)
                return (i = this.options) === null || i === void 0 ? void 0 : i.transactionResolver(e);
            if (e.status === BigInt(0)) {
                const o = yield Ts(this.web3Context, n, e, void 0, (s = this.options) === null || s === void 0 ? void 0 : s.contractAbi);
                throw this.promiEvent.listenerCount("error") > 0 && this.promiEvent.emit("error", o),
                o
            } else
                return e
        })
    }
}
var oe = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
}
  , Hb = function(t, e) {
    var n = {};
    for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
    return n
};
const jb = t => oe(void 0, void 0, void 0, function*() {
    return Zd(t.requestManager)
});
function Db(t, e) {
    return oe(this, void 0, void 0, function*() {
        const n = yield My(t.requestManager);
        return I({
            format: "uint"
        }, n, e)
    })
}
function Pu(t, e) {
    return oe(this, void 0, void 0, function*() {
        const n = yield $y(t.requestManager);
        return I({
            format: "uint"
        }, n, e)
    })
}
function ta(t, e) {
    return oe(this, void 0, void 0, function*() {
        const n = yield jy(t.requestManager);
        return I({
            format: "uint"
        }, n, e)
    })
}
function Fb(t, e, n=t.defaultBlock, r) {
    return oe(this, void 0, void 0, function*() {
        const i = xe(n) ? n : I({
            format: "uint"
        }, n, U)
          , s = yield Dy(t.requestManager, e, i);
        return I({
            format: "uint"
        }, s, r)
    })
}
function Gb(t, e, n, r=t.defaultBlock, i) {
    return oe(this, void 0, void 0, function*() {
        const s = I({
            format: "uint"
        }, n, U)
          , o = xe(r) ? r : I({
            format: "uint"
        }, r, U)
          , a = yield Fy(t.requestManager, e, s, o);
        return I({
            format: "bytes"
        }, a, i)
    })
}
function Ub(t, e, n=t.defaultBlock, r) {
    return oe(this, void 0, void 0, function*() {
        const i = xe(n) ? n : I({
            format: "uint"
        }, n, U)
          , s = yield Wy(t.requestManager, e, i);
        return I({
            format: "bytes"
        }, s, r)
    })
}
function Ru(t, e=t.defaultBlock, n=!1, r) {
    return oe(this, void 0, void 0, function*() {
        let i;
        if (Ut(e)) {
            const s = I({
                format: "bytes32"
            }, e, U);
            i = yield Qy(t.requestManager, s, n)
        } else {
            const s = xe(e) ? e : I({
                format: "uint"
            }, e, U);
            i = yield Xd(t.requestManager, s, n)
        }
        return I(Ai, i, r)
    })
}
function qb(t, e=t.defaultBlock, n) {
    return oe(this, void 0, void 0, function*() {
        let r;
        if (Ut(e)) {
            const i = I({
                format: "bytes32"
            }, e, U);
            r = yield Uy(t.requestManager, i)
        } else {
            const i = xe(e) ? e : I({
                format: "uint"
            }, e, U);
            r = yield qy(t.requestManager, i)
        }
        return I({
            format: "uint"
        }, r, n)
    })
}
function zb(t, e=t.defaultBlock, n) {
    return oe(this, void 0, void 0, function*() {
        let r;
        if (Ut(e)) {
            const i = I({
                format: "bytes32"
            }, e, U);
            r = yield zy(t.requestManager, i)
        } else {
            const i = xe(e) ? e : I({
                format: "uint"
            }, e, U);
            r = yield Vy(t.requestManager, i)
        }
        return I({
            format: "uint"
        }, r, n)
    })
}
function Vb(t, e=t.defaultBlock, n, r) {
    return oe(this, void 0, void 0, function*() {
        const i = I({
            format: "uint"
        }, n, U);
        let s;
        if (Ut(e)) {
            const o = I({
                format: "bytes32"
            }, e, U);
            s = yield iv(t.requestManager, o, i)
        } else {
            const o = xe(e) ? e : I({
                format: "uint"
            }, e, U);
            s = yield sv(t.requestManager, o, i)
        }
        return I(Ai, s, r)
    })
}
function Wb(t, e, n) {
    return oe(this, void 0, void 0, function*() {
        const r = I({
            format: "bytes32"
        }, e, O)
          , i = yield ev(t.requestManager, r);
        return b(i) ? i : Le(i, n, {
            fillInputAndData: !0
        })
    })
}
function Zb(t, e) {
    return oe(this, void 0, void 0, function*() {
        return (yield uv(t.requestManager)).map(r => Le(r, e, {
            fillInputAndData: !0
        }))
    })
}
function Kb(t, e=t.defaultBlock, n, r) {
    return oe(this, void 0, void 0, function*() {
        const i = I({
            format: "uint"
        }, n, U);
        let s;
        if (Ut(e)) {
            const o = I({
                format: "bytes32"
            }, e, U);
            s = yield tv(t.requestManager, o, i)
        } else {
            const o = xe(e) ? e : I({
                format: "uint"
            }, e, U);
            s = yield nv(t.requestManager, o, i)
        }
        return b(s) ? s : Le(s, r, {
            fillInputAndData: !0
        })
    })
}
function Bu(t, e, n) {
    return oe(this, void 0, void 0, function*() {
        const r = I({
            format: "bytes32"
        }, e, O)
          , i = yield rv(t.requestManager, r);
        return b(i) ? i : I(Zn, i, n)
    })
}
function Cu(t, e, n=t.defaultBlock, r) {
    return oe(this, void 0, void 0, function*() {
        const i = xe(n) ? n : I({
            format: "uint"
        }, n, U)
          , s = yield Gy(t.requestManager, e, i);
        return I({
            format: "uint"
        }, s, r)
    })
}
function so(t, e, n, r={
    checkRevertBeforeSending: !0
}) {
    const i = new Wd( (s, o) => {
        setImmediate( () => {
            oe(this, void 0, void 0, function*() {
                const a = new Au({
                    web3Context: t,
                    promiEvent: i,
                    options: r,
                    returnFormat: n
                });
                let u = Le(Object.assign(Object.assign({}, e), {
                    from: Ys("from", t, e),
                    to: Ys("to", t, e)
                }), U);
                try {
                    u = yield a.populateGasPrice({
                        transaction: e,
                        transactionFormatted: u
                    }),
                    yield a.checkRevertBeforeSending(u),
                    a.emitSending(u);
                    let d;
                    t.wallet && !b(u.from) && (d = t.wallet.get(u.from));
                    const c = yield a.signAndSend({
                        wallet: d,
                        tx: u
                    })
                      , l = I({
                        format: "bytes32"
                    }, c, n);
                    a.emitSent(u),
                    a.emitTransactionHash(l);
                    const f = yield ru(t, c, n)
                      , h = a.getReceiptWithEvents(I(Zn, f, n));
                    a.emitReceipt(h),
                    s(yield a.handleResolve({
                        receipt: h,
                        tx: u
                    })),
                    a.emitConfirmation({
                        receipt: h,
                        transactionHash: c
                    })
                } catch (d) {
                    o(yield a.handleError({
                        error: d,
                        tx: u
                    }))
                }
            })
        }
        )
    }
    );
    return i
}
function Xb(t, e, n, r={
    checkRevertBeforeSending: !0
}) {
    const i = new Wd( (s, o) => {
        setImmediate( () => {
            oe(this, void 0, void 0, function*() {
                const a = new Au({
                    web3Context: t,
                    promiEvent: i,
                    options: r,
                    returnFormat: n
                })
                  , u = I({
                    format: "bytes"
                }, e, U)
                  , d = hn.fromSerializedData(at(ue(u)))
                  , c = Object.assign(Object.assign({}, d.toJSON()), {
                    from: d.getSenderAddress().toString()
                });
                try {
                    const {v: l, r: f, s: h} = c
                      , p = Hb(c, ["v", "r", "s"]);
                    yield a.checkRevertBeforeSending(p),
                    a.emitSending(u);
                    const m = yield eo(t, () => oe(this, void 0, void 0, function*() {
                        return Kd(t.requestManager, u)
                    }));
                    a.emitSent(u);
                    const g = I({
                        format: "bytes32"
                    }, m, n);
                    a.emitTransactionHash(g);
                    const y = yield ru(t, m, n)
                      , _ = a.getReceiptWithEvents(I(Zn, y, n));
                    a.emitReceipt(_),
                    s(yield a.handleResolve({
                        receipt: _,
                        tx: c
                    })),
                    a.emitConfirmation({
                        receipt: _,
                        transactionHash: m
                    })
                } catch (l) {
                    o(yield a.handleError({
                        error: l,
                        tx: c
                    }))
                }
            })
        }
        )
    }
    );
    return i
}
function Jb(t, e, n, r) {
    var i;
    return oe(this, void 0, void 0, function*() {
        const s = I({
            format: "bytes"
        }, e, O);
        if (!((i = t.wallet) === null || i === void 0) && i.get(n)) {
            const u = t.wallet.get(n).sign(s);
            return I(Hv, u, r)
        }
        if (typeof n == "number")
            throw new Gf(e,'RPC method "eth_sign" does not support index signatures');
        const o = yield Zy(t.requestManager, n, s);
        return I({
            format: "bytes"
        }, o, r)
    })
}
function Yb(t, e, n) {
    return oe(this, void 0, void 0, function*() {
        const r = yield Ky(t.requestManager, Le(e, U));
        return ho(r) ? Gv(r, n, {
            fillInputAndData: !0
        }) : {
            raw: I({
                format: "bytes"
            }, r.raw, n),
            tx: Le(r.tx, n, {
                fillInputAndData: !0
            })
        }
    })
}
function na(t, e, n=t.defaultBlock, r) {
    return oe(this, void 0, void 0, function*() {
        const i = xe(n) ? n : I({
            format: "uint"
        }, n, U)
          , s = yield Jy(t.requestManager, Le(e, U), i);
        return I({
            format: "bytes"
        }, s, r)
    })
}
function ra(t, e, n=t.defaultBlock, r) {
    return oe(this, void 0, void 0, function*() {
        const i = Le(e, U)
          , s = xe(n) ? n : I({
            format: "uint"
        }, n, U)
          , o = yield Yy(t.requestManager, i, s);
        return I({
            format: "uint"
        }, o, r)
    })
}
function Nu(t, e, n) {
    return oe(this, void 0, void 0, function*() {
        let {toBlock: r, fromBlock: i} = e;
        b(r) || (typeof r == "number" || typeof r == "bigint") && (r = He(r)),
        b(i) || (typeof i == "number" || typeof i == "bigint") && (i = He(i));
        const s = Object.assign(Object.assign({}, e), {
            fromBlock: i,
            toBlock: r
        });
        return (yield ov(t.requestManager, s)).map(u => typeof u == "string" ? u : I(Yi, u, n))
    })
}
function Ou(t, e) {
    return oe(this, void 0, void 0, function*() {
        const n = yield fv(t.requestManager);
        return I({
            format: "uint"
        }, n, e)
    })
}
function Qb(t, e, n, r=t.defaultBlock, i) {
    return oe(this, void 0, void 0, function*() {
        const s = n.map(u => I({
            format: "bytes"
        }, u, U))
          , o = xe(r) ? r : I({
            format: "uint"
        }, r, U)
          , a = yield hv(t.requestManager, e, s, o);
        return I(Fv, a, i)
    })
}
function e_(t, e, n=t.defaultBlock, r, i) {
    return oe(this, void 0, void 0, function*() {
        const s = I({
            format: "uint"
        }, e, U)
          , o = xe(n) ? n : I({
            format: "uint"
        }, n, U)
          , a = I({
            type: "array",
            items: {
                format: "uint"
            }
        }, r, Qi)
          , u = yield dv(t.requestManager, s, o, a);
        return I(jv, u, i)
    })
}
function Lu(t, e, n=t.defaultBlock, r) {
    return oe(this, void 0, void 0, function*() {
        const i = xe(n) ? n : I({
            format: "uint"
        }, n, U)
          , s = yield pv(t.requestManager, Le(e, U), i);
        return I(Nv, s, r)
    })
}
function t_(t, e, n, r, i) {
    return oe(this, void 0, void 0, function*() {
        const s = yield gv(t.requestManager, e, n, r);
        return I({
            format: "bytes"
        }, s, i)
    })
}
let Mu = class extends Cr {
    _buildSubscriptionParams() {
        return ["logs", this.args]
    }
    formatSubscriptionResult(e) {
        return I(Yi, e, super.returnFormat)
    }
}
;
class ec extends Cr {
    _buildSubscriptionParams() {
        return ["newPendingTransactions"]
    }
    formatSubscriptionResult(e) {
        return I({
            format: "string"
        }, e, super.returnFormat)
    }
}
class Ci extends Cr {
    _buildSubscriptionParams() {
        return ["newHeads"]
    }
    formatSubscriptionResult(e) {
        return I(Mv, e, super.returnFormat)
    }
}
class $u extends Cr {
    _buildSubscriptionParams() {
        return ["syncing"]
    }
    _processSubscriptionResult(e) {
        if (typeof e == "boolean")
            this.emit("changed", e);
        else {
            const n = Object.fromEntries(Object.entries(e.status).map( ([r,i]) => [r.charAt(0).toLowerCase() + r.substring(1), i]));
            this.emit("changed", e.syncing),
            this.emit("data", I($v, n, super.returnFormat))
        }
    }
}
var Y = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const oo = {
    logs: Mu,
    newPendingTransactions: ec,
    newHeads: Ci,
    syncing: $u,
    pendingTransactions: ec,
    newBlockHeaders: Ci
};
class ss extends Oe {
    constructor(e) {
        if (typeof e == "string" || Ei(e)) {
            super({
                provider: e,
                registeredSubscriptions: oo
            });
            return
        }
        if (e.registeredSubscriptions) {
            super(e);
            return
        }
        super(Object.assign(Object.assign({}, e), {
            registeredSubscriptions: oo
        }))
    }
    getProtocolVersion() {
        return Y(this, void 0, void 0, function*() {
            return Ny(this.requestManager)
        })
    }
    isSyncing() {
        return Y(this, void 0, void 0, function*() {
            return Zd(this.requestManager)
        })
    }
    getCoinbase() {
        return Y(this, void 0, void 0, function*() {
            return Oy(this.requestManager)
        })
    }
    isMining() {
        return Y(this, void 0, void 0, function*() {
            return Ly(this.requestManager)
        })
    }
    getHashrate(e=O) {
        return Y(this, void 0, void 0, function*() {
            return this.getHashRate(e)
        })
    }
    getHashRate(e=O) {
        return Y(this, void 0, void 0, function*() {
            return Db(this, e)
        })
    }
    getGasPrice(e=O) {
        return Y(this, void 0, void 0, function*() {
            return Pu(this, e)
        })
    }
    getAccounts() {
        var e;
        return Y(this, void 0, void 0, function*() {
            return ((e = yield Hy(this.requestManager)) !== null && e !== void 0 ? e : []).map(r => ct(r))
        })
    }
    getBlockNumber(e=O) {
        return Y(this, void 0, void 0, function*() {
            return ta(this, e)
        })
    }
    getBalance(e, n=this.defaultBlock, r=O) {
        return Y(this, void 0, void 0, function*() {
            return Fb(this, e, n, r)
        })
    }
    getStorageAt(e, n, r=this.defaultBlock, i=O) {
        return Y(this, void 0, void 0, function*() {
            return Gb(this, e, n, r, i)
        })
    }
    getCode(e, n=this.defaultBlock, r=O) {
        return Y(this, void 0, void 0, function*() {
            return Ub(this, e, n, r)
        })
    }
    getBlock(e=this.defaultBlock, n=!1, r=O) {
        return Y(this, void 0, void 0, function*() {
            return Ru(this, e, n, r)
        })
    }
    getBlockTransactionCount(e=this.defaultBlock, n=O) {
        return Y(this, void 0, void 0, function*() {
            return qb(this, e, n)
        })
    }
    getBlockUncleCount(e=this.defaultBlock, n=O) {
        return Y(this, void 0, void 0, function*() {
            return zb(this, e, n)
        })
    }
    getUncle(e=this.defaultBlock, n, r=O) {
        return Y(this, void 0, void 0, function*() {
            return Vb(this, e, n, r)
        })
    }
    getTransaction(e, n=O) {
        return Y(this, void 0, void 0, function*() {
            const r = yield Wb(this, e, n);
            if (!r)
                throw new la;
            return r
        })
    }
    getPendingTransactions(e=O) {
        return Y(this, void 0, void 0, function*() {
            return Zb(this, e)
        })
    }
    getTransactionFromBlock(e=this.defaultBlock, n, r=O) {
        return Y(this, void 0, void 0, function*() {
            return Kb(this, e, n, r)
        })
    }
    getTransactionReceipt(e, n=O) {
        return Y(this, void 0, void 0, function*() {
            const r = yield Bu(this, e, n);
            if (!r)
                throw new la;
            return r
        })
    }
    getTransactionCount(e, n=this.defaultBlock, r=O) {
        return Y(this, void 0, void 0, function*() {
            return Cu(this, e, n, r)
        })
    }
    sendTransaction(e, n=O, r) {
        return so(this, e, n, r)
    }
    sendSignedTransaction(e, n=O, r) {
        return Xb(this, e, n, r)
    }
    sign(e, n, r=O) {
        return Y(this, void 0, void 0, function*() {
            return Jb(this, e, n, r)
        })
    }
    signTransaction(e, n=O) {
        return Y(this, void 0, void 0, function*() {
            return Yb(this, e, n)
        })
    }
    call(e, n=this.defaultBlock, r=O) {
        return Y(this, void 0, void 0, function*() {
            return na(this, e, n, r)
        })
    }
    estimateGas(e, n=this.defaultBlock, r=O) {
        return Y(this, void 0, void 0, function*() {
            return ra(this, e, n, r)
        })
    }
    getPastLogs(e, n=O) {
        return Y(this, void 0, void 0, function*() {
            return Nu(this, e, n)
        })
    }
    getWork() {
        return Y(this, void 0, void 0, function*() {
            return av(this.requestManager)
        })
    }
    submitWork(e, n, r) {
        return Y(this, void 0, void 0, function*() {
            return cv(this.requestManager, e, n, r)
        })
    }
    requestAccounts() {
        return Y(this, void 0, void 0, function*() {
            return lv(this.requestManager)
        })
    }
    getChainId(e=O) {
        return Y(this, void 0, void 0, function*() {
            return Ou(this, e)
        })
    }
    getNodeInfo() {
        return Y(this, void 0, void 0, function*() {
            return mv(this.requestManager)
        })
    }
    getProof(e, n, r=this.defaultBlock, i=O) {
        return Y(this, void 0, void 0, function*() {
            return Qb(this, e, n, r, i)
        })
    }
    getFeeHistory(e, n=this.defaultBlock, r, i=O) {
        return Y(this, void 0, void 0, function*() {
            return e_(this, e, n, r, i)
        })
    }
    createAccessList(e, n=this.defaultBlock, r=O) {
        return Y(this, void 0, void 0, function*() {
            return Lu(this, e, n, r)
        })
    }
    signTypedData(e, n, r=!1, i=O) {
        return Y(this, void 0, void 0, function*() {
            return t_(this, e, n, r, i)
        })
    }
    subscribe(e, n, r=O) {
        var i;
        return Y(this, void 0, void 0, function*() {
            const s = yield(i = this.subscriptionManager) === null || i === void 0 ? void 0 : i.subscribe(e, n, r);
            return s instanceof Mu && e === "logs" && typeof n == "object" && !z(n.fromBlock) && Number.isFinite(Number(n.fromBlock)) && setImmediate( () => {
                this.getPastLogs(n).then(o => {
                    for (const a of o)
                        s._processSubscriptionResult(a)
                }
                ).catch(o => {
                    s._processSubscriptionError(o)
                }
                )
            }
            ),
            s
        })
    }
    static shouldClearSubscription({sub: e}) {
        return !(e instanceof $u)
    }
    clearSubscriptions(e=!1) {
        var n;
        return (n = this.subscriptionManager) === null || n === void 0 ? void 0 : n.unsubscribe(e ? ss.shouldClearSubscription : void 0)
    }
}
const n_ = t => {
    if (!b(t.common)) {
        if (b(t.common.customChain))
            throw new Vf;
        if (b(t.common.customChain.chainId))
            throw new Wf;
        if (!b(t.chainId) && t.chainId !== t.common.customChain.chainId)
            throw new Zf({
                txChainId: t.chainId,
                customChainId: t.common.customChain.chainId
            })
    }
}
  , r_ = t => {
    if (!b(t.common) && !b(t.chain) && !b(t.hardfork))
        throw new Jf;
    if (!b(t.chain) && b(t.hardfork) || !b(t.hardfork) && b(t.chain))
        throw new Yf({
            chain: t.chain,
            hardfork: t.hardfork
        })
}
  , i_ = t => {
    if (!b(t.common) && !b(t.common.baseChain) && !b(t.chain) && t.chain !== t.common.baseChain)
        throw new Kf({
            txChain: t.chain,
            baseChain: t.common.baseChain
        })
}
  , s_ = t => {
    if (!b(t.common) && !b(t.common.hardfork) && !b(t.hardfork) && t.hardfork !== t.common.hardfork)
        throw new Xf({
            txHardfork: t.hardfork,
            commonHardfork: t.common.hardfork
        })
}
  , tc = t => {
    if (b(t.gas) || !dn(t.gas) || b(t.gasPrice) || !dn(t.gasPrice))
        throw new rh({
            gas: t.gas,
            gasPrice: t.gasPrice
        });
    if (!b(t.maxFeePerGas) || !b(t.maxPriorityFeePerGas))
        throw new mc({
            maxFeePerGas: t.maxFeePerGas,
            maxPriorityFeePerGas: t.maxPriorityFeePerGas
        })
}
  , nc = t => {
    if (!b(t.gasPrice) && t.type === "0x2")
        throw new sh(t.gasPrice);
    if (t.type === "0x0" || t.type === "0x1")
        throw new mc({
            maxFeePerGas: t.maxFeePerGas,
            maxPriorityFeePerGas: t.maxPriorityFeePerGas
        });
    if (b(t.maxFeePerGas) || !dn(t.maxFeePerGas) || b(t.maxPriorityFeePerGas) || !dn(t.maxPriorityFeePerGas))
        throw new ih({
            maxPriorityFeePerGas: t.maxPriorityFeePerGas,
            maxFeePerGas: t.maxFeePerGas
        })
}
  , o_ = t => {
    const e = !b(t.gas) || !b(t.gasLimit)
      , n = e && !b(t.gasPrice)
      , r = e && !b(t.maxPriorityFeePerGas) && !b(t.maxFeePerGas);
    if (!n && !r)
        throw new eh({
            gas: t.gas,
            gasPrice: t.gasPrice,
            maxPriorityFeePerGas: t.maxPriorityFeePerGas,
            maxFeePerGas: t.maxFeePerGas
        });
    if (n && r)
        throw new nh({
            gas: t.gas,
            gasPrice: t.gasPrice,
            maxPriorityFeePerGas: t.maxPriorityFeePerGas,
            maxFeePerGas: t.maxFeePerGas
        });
    (n ? tc : nc)(t),
    (!b(t.type) && t.type > "0x1" ? nc : tc)(t)
}
  , a_ = (t, e) => {
    if (!b(e)) {
        e(t);
        return
    }
    if (typeof t != "object" || b(t))
        throw new oh(t);
    n_(t),
    r_(t),
    i_(t),
    s_(t);
    const n = Le(t, U);
    if (o_(n),
    b(n.nonce) || b(n.chainId) || n.nonce.startsWith("-") || n.chainId.startsWith("-"))
        throw new ah({
            nonce: t.nonce,
            chainId: t.chainId
        })
}
;
var c_ = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const d_ = t => {
    var e, n;
    return {
        nonce: t.nonce,
        gasPrice: t.gasPrice,
        gasLimit: (e = t.gasLimit) !== null && e !== void 0 ? e : t.gas,
        to: t.to,
        value: t.value,
        data: (n = t.data) !== null && n !== void 0 ? n : t.input,
        type: t.type,
        chainId: t.chainId,
        accessList: t.accessList,
        maxPriorityFeePerGas: t.maxPriorityFeePerGas,
        maxFeePerGas: t.maxFeePerGas
    }
}
  , u_ = (t, e) => {
    var n, r, i, s, o, a, u, d, c, l, f, h, p, m, g, y, _, w;
    const S = !b(t.chain) && !b(t.hardfork) || !b(t.common);
    let E;
    if (!S)
        e.defaultCommon ? (E = e.defaultCommon,
        b(E.hardfork) && (E.hardfork = (n = t.hardfork) !== null && n !== void 0 ? n : e.defaultHardfork),
        b(E.baseChain) && (E.baseChain = e.defaultChain)) : E = _e.custom({
            name: "custom-network",
            chainId: Ne(t.chainId),
            networkId: b(t.networkId) ? void 0 : Ne(t.networkId),
            defaultHardfork: (r = t.hardfork) !== null && r !== void 0 ? r : e.defaultHardfork
        }, {
            baseChain: e.defaultChain
        });
    else {
        const A = (a = (o = (s = (i = t == null ? void 0 : t.common) === null || i === void 0 ? void 0 : i.customChain) === null || s === void 0 ? void 0 : s.name) !== null && o !== void 0 ? o : t.chain) !== null && a !== void 0 ? a : "custom-network"
          , C = Ne((c = (d = (u = t == null ? void 0 : t.common) === null || u === void 0 ? void 0 : u.customChain) === null || d === void 0 ? void 0 : d.chainId) !== null && c !== void 0 ? c : t == null ? void 0 : t.chainId)
          , v = Ne((h = (f = (l = t == null ? void 0 : t.common) === null || l === void 0 ? void 0 : l.customChain) === null || f === void 0 ? void 0 : f.networkId) !== null && h !== void 0 ? h : t == null ? void 0 : t.networkId)
          , j = (g = (m = (p = t == null ? void 0 : t.common) === null || p === void 0 ? void 0 : p.hardfork) !== null && m !== void 0 ? m : t == null ? void 0 : t.hardfork) !== null && g !== void 0 ? g : e.defaultHardfork
          , x = (w = (_ = (y = t.common) === null || y === void 0 ? void 0 : y.baseChain) !== null && _ !== void 0 ? _ : t.chain) !== null && w !== void 0 ? w : e.defaultChain;
        C && v && A && (E = _e.custom({
            name: A,
            chainId: C,
            networkId: v,
            defaultHardfork: j
        }, {
            baseChain: x
        }))
    }
    return {
        common: E
    }
}
  , l_ = (t, e, n, r=!1, i=!0) => c_(void 0, void 0, void 0, function*() {
    const s = yield Zv({
        transaction: t,
        web3Context: e,
        privateKey: n,
        fillGasPrice: r,
        fillGasLimit: i
    })
      , o = Le(s, U);
    return a_(o),
    hn.fromTxData(d_(o), u_(o, e))
})
  , rc = ({address: t}, e, n) => {
    var r, i;
    const s = n == null ? void 0 : n.topics
      , o = (r = n == null ? void 0 : n.filter) !== null && r !== void 0 ? r : {}
      , a = {};
    if (z(n == null ? void 0 : n.fromBlock) || (a.fromBlock = I(Ai.properties.number, n == null ? void 0 : n.fromBlock, {
        number: ze.HEX,
        bytes: wt.HEX
    })),
    z(n == null ? void 0 : n.toBlock) || (a.toBlock = I(Ai.properties.number, n == null ? void 0 : n.toBlock, {
        number: ze.HEX,
        bytes: wt.HEX
    })),
    s && Array.isArray(s))
        a.topics = [...s];
    else if (a.topics = [],
    e && !e.anonymous && ![qn, "allEvents"].includes(e.name) && a.topics.push((i = e.signature) !== null && i !== void 0 ? i : Jo(mn(e))),
    ![qn, "allEvents"].includes(e.name) && e.inputs)
        for (const u of e.inputs) {
            if (!u.indexed)
                continue;
            const d = o[u.name];
            if (!d) {
                a.topics.push(null);
                continue
            }
            Array.isArray(d) ? a.topics.push(d.map(c => io(u.type, c))) : u.type === "string" ? a.topics.push(xr(d)) : a.topics.push(io(u.type, d))
        }
    return a.topics.length || delete a.topics,
    t && (a.address = t.toLowerCase()),
    a
}
  , or = (t, e, n) => {
    const r = Array.isArray(t.inputs) ? t.inputs.length : 0;
    if (r !== e.length)
        throw new $e(`The number of arguments is not matching the methods required number. You need to pass ${r} arguments.`);
    const i = ns(Array.isArray(t.inputs) ? t.inputs : [], e).replace("0x", "");
    if (eb(t)) {
        if (!n)
            throw new $e("The contract has no contract data option set. This is necessary to append the constructor parameters.");
        return n.startsWith("0x") ? `${n}${i}` : `0x${n}${i}`
    }
    return `${is(t)}${i}`
}
  , f_ = (t, e) => {
    if (t.type === "constructor")
        return e;
    if (!e)
        return null;
    const n = e.length >= 2 ? e.slice(2) : e;
    if (!t.outputs)
        return null;
    const r = rs([...t.outputs], n);
    return r.__length__ === 1 ? r[0] : r
}
;
class Hu extends Cr {
    constructor(e, n) {
        super(e, n),
        this.address = e.address,
        this.topics = e.topics,
        this.abi = e.abi,
        this.jsonInterface = e.jsonInterface
    }
    _buildSubscriptionParams() {
        return ["logs", {
            address: this.address,
            topics: this.topics
        }]
    }
    formatSubscriptionResult(e) {
        return ea(this.abi, e, this.jsonInterface, super.returnFormat)
    }
}
const os = (t, e, n, r) => {
    var i, s;
    const o = {};
    return (!z(t.data) || r === "both") && (o.data = or(e, n, (i = t.data) !== null && i !== void 0 ? i : t.input)),
    (!z(t.input) || r === "both") && (o.input = or(e, n, (s = t.input) !== null && s !== void 0 ? s : t.data)),
    z(o.input) && z(o.data) && (o[r] = or(e, n)),
    {
        data: o.data,
        input: o.input
    }
}
  , ic = ({abi: t, params: e, options: n, contractOptions: r}) => {
    var i, s, o;
    if (!((o = (s = (i = n == null ? void 0 : n.input) !== null && i !== void 0 ? i : n == null ? void 0 : n.data) !== null && s !== void 0 ? s : r.input) !== null && o !== void 0 ? o : r.data) && !(n != null && n.to) && !r.address)
        throw new $e("Contract address not specified");
    if (!(n != null && n.from) && !r.from)
        throw new $e('Contract "from" address not specified');
    let u = qt({
        to: r.address,
        gas: r.gas,
        gasPrice: r.gasPrice,
        from: r.from,
        input: r.input,
        maxPriorityFeePerGas: r.maxPriorityFeePerGas,
        maxFeePerGas: r.maxFeePerGas,
        data: r.data
    }, n);
    const d = os(u, t, e, n == null ? void 0 : n.dataInputFill);
    return u = Object.assign(Object.assign({}, u), {
        data: d.data,
        input: d.input
    }),
    u
}
  , h_ = ({abi: t, params: e, options: n, contractOptions: r}) => {
    if (!(n != null && n.to) && !r.address)
        throw new $e("Contract address not specified");
    let i = qt({
        to: r.address,
        gas: r.gas,
        gasPrice: r.gasPrice,
        from: r.from,
        input: r.input,
        maxPriorityFeePerGas: r.maxPriorityFeePerGas,
        maxFeePerGas: r.maxFeePerGas,
        data: r.data
    }, n);
    const s = os(i, t, e, n == null ? void 0 : n.dataInputFill);
    return i = Object.assign(Object.assign({}, i), {
        data: s.data,
        input: s.input
    }),
    i
}
  , m_ = ({abi: t, params: e, options: n, contractOptions: r}) => {
    let i = qt({
        to: r.address,
        gas: r.gas,
        gasPrice: r.gasPrice,
        from: r.from,
        input: r.input,
        data: r.data
    }, n);
    const s = os(i, t, e, n == null ? void 0 : n.dataInputFill);
    return i = Object.assign(Object.assign({}, i), {
        data: s.data,
        input: s.input
    }),
    i
}
  , sc = t => typeof t == "object" && !z(t) && Object.keys(t).length !== 0 && !Ot(t)
  , p_ = ({abi: t, params: e, options: n, contractOptions: r}) => {
    if (!(n != null && n.to) && !r.address)
        throw new $e("Contract address not specified");
    if (!(n != null && n.from) && !r.from)
        throw new $e('Contract "from" address not specified');
    let i = qt({
        to: r.address,
        gas: r.gas,
        gasPrice: r.gasPrice,
        from: r.from,
        input: r.input,
        maxPriorityFeePerGas: r.maxPriorityFeePerGas,
        maxFeePerGas: r.maxFeePerGas,
        data: r.data
    }, n);
    const s = os(i, t, e, n == null ? void 0 : n.dataInputFill);
    return i = Object.assign(Object.assign({}, i), {
        data: s.data,
        input: s.input
    }),
    i
}
;
var Ct = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const g_ = {
    logs: Hu,
    newHeads: Ci,
    newBlockHeaders: Ci
};
class rn extends Oe {
    constructor(e, n, r, i, s) {
        var o, a, u;
        const d = Ot(n) ? n : Ot(r) ? r : void 0;
        let c;
        sc(n) ? c = n : sc(r) ? c = r : c = i;
        let l;
        if (typeof n == "object" && "provider"in n ? l = n.provider : typeof r == "object" && "provider"in r ? l = r.provider : typeof i == "object" && "provider"in i ? l = i.provider : l = rn.givenProvider,
        super(Object.assign(Object.assign({}, c), {
            provider: l,
            registeredSubscriptions: g_
        })),
        this.syncWithContext = !1,
        this._functions = {},
        !b(d) && !b(d.data) && !b(d.input) && this.config.contractDataInputFill !== "both")
            throw new Mf({
                data: d.data,
                input: d.input
            });
        this._overloadedMethodAbis = new Map;
        const f = ft(i) ? i : ft(r) ? r : s ?? O
          , h = typeof n == "string" ? n : void 0;
        this.config.contractDataInputFill = (o = d == null ? void 0 : d.dataInputFill) !== null && o !== void 0 ? o : this.config.contractDataInputFill,
        this._parseAndSetJsonInterface(e, f),
        b(h) || this._parseAndSetAddress(h, f),
        this.options = {
            address: h,
            jsonInterface: this._jsonInterface,
            gas: (a = d == null ? void 0 : d.gas) !== null && a !== void 0 ? a : d == null ? void 0 : d.gasLimit,
            gasPrice: d == null ? void 0 : d.gasPrice,
            from: d == null ? void 0 : d.from,
            input: d == null ? void 0 : d.input,
            data: d == null ? void 0 : d.data
        },
        this.syncWithContext = (u = d == null ? void 0 : d.syncWithContext) !== null && u !== void 0 ? u : !1,
        c instanceof Oe && this.subscribeToContextEvents(c),
        Object.defineProperty(this.options, "address", {
            set: p => this._parseAndSetAddress(p, f),
            get: () => this._address
        }),
        Object.defineProperty(this.options, "jsonInterface", {
            set: p => this._parseAndSetJsonInterface(p, f),
            get: () => this._jsonInterface
        }),
        c instanceof Oe && c.on(fn.CONFIG_CHANGE, p => {
            this.setConfig({
                [p.name]: p.newValue
            })
        }
        )
    }
    get events() {
        return this._events
    }
    get methods() {
        return this._methods
    }
    clone() {
        let e;
        return this.options.address ? e = new rn([...this._jsonInterface, ...this._errorsInterface],this.options.address,{
            gas: this.options.gas,
            gasPrice: this.options.gasPrice,
            from: this.options.from,
            input: this.options.input,
            data: this.options.data,
            provider: this.currentProvider,
            syncWithContext: this.syncWithContext,
            dataInputFill: this.config.contractDataInputFill
        },this.getContextObject()) : e = new rn([...this._jsonInterface, ...this._errorsInterface],{
            gas: this.options.gas,
            gasPrice: this.options.gasPrice,
            from: this.options.from,
            input: this.options.input,
            data: this.options.data,
            provider: this.currentProvider,
            syncWithContext: this.syncWithContext,
            dataInputFill: this.config.contractDataInputFill
        },this.getContextObject()),
        this.context && e.subscribeToContextEvents(this.context),
        e
    }
    deploy(e) {
        var n, r, i;
        let s = this._jsonInterface.find(l => l.type === "constructor");
        s || (s = {
            type: "constructor",
            inputs: [],
            stateMutability: ""
        });
        const o = I({
            format: "bytes"
        }, (n = e == null ? void 0 : e.input) !== null && n !== void 0 ? n : this.options.input, O)
          , a = I({
            format: "bytes"
        }, (r = e == null ? void 0 : e.data) !== null && r !== void 0 ? r : this.options.data, O);
        if ((!o || o.trim() === "0x") && (!a || a.trim() === "0x"))
            throw new $e("contract creation without any data provided.");
        const u = (i = e == null ? void 0 : e.arguments) !== null && i !== void 0 ? i : []
          , d = Object.assign(Object.assign({}, this.options), {
            input: o,
            data: a
        })
          , c = o ?? a;
        return {
            arguments: u,
            send: l => {
                const f = Object.assign({}, l);
                return this._contractMethodDeploySend(s, u, f, d)
            }
            ,
            estimateGas: (l, f=O) => Ct(this, void 0, void 0, function*() {
                const h = Object.assign({}, l);
                return this._contractMethodEstimateGas({
                    abi: s,
                    params: u,
                    returnFormat: f,
                    options: h,
                    contractOptions: d
                })
            }),
            encodeABI: () => or(s, u, I({
                format: "bytes"
            }, c, O))
        }
    }
    getPastEvents(e, n, r) {
        var i;
        return Ct(this, void 0, void 0, function*() {
            const s = typeof e == "string" ? e : qn
              , o = typeof e != "string" && !ft(e) ? e : ft(n) ? {} : n
              , a = ft(e) ? e : ft(n) ? n : r ?? O
              , u = s === "allEvents" || s === qn ? Js : this._jsonInterface.find(y => "name"in y && y.name === s);
            if (!u)
                throw new $e(`Event ${s} not found.`);
            const {fromBlock: d, toBlock: c, topics: l, address: f} = rc(this.options, u, o ?? {})
              , p = (yield Nu(this, {
                fromBlock: d,
                toBlock: c,
                topics: l,
                address: f
            }, a)).map(y => typeof y == "string" ? y : ea(u, y, this._jsonInterface, a))
              , m = (i = o == null ? void 0 : o.filter) !== null && i !== void 0 ? i : {}
              , g = Object.keys(m);
            return g.length > 0 ? p.filter(y => typeof y == "string" ? !0 : g.every(_ => {
                var w;
                if (Array.isArray(m[_]))
                    return m[_].some(E => String(y.returnValues[_]).toUpperCase() === String(E).toUpperCase());
                const S = (w = u.inputs) === null || w === void 0 ? void 0 : w.filter(E => E.name === _)[0];
                return S != null && S.indexed && S.type === "string" && xr(m[_]) === String(y.returnValues[_]) ? !0 : String(y.returnValues[_]).toUpperCase() === String(m[_]).toUpperCase()
            }
            )) : p
        })
    }
    _parseAndSetAddress(e, n=O) {
        this._address = e && ct(I({
            format: "address"
        }, e, n))
    }
    _parseAndSetJsonInterface(e, n=O) {
        var r, i, s, o, a;
        this._functions = {},
        this._methods = {},
        this._events = {};
        let u = [];
        const d = e.filter(l => l.type !== "error")
          , c = e.filter(l => es(l));
        for (const l of d) {
            const f = Object.assign(Object.assign({}, l), {
                signature: ""
            });
            if (ts(f)) {
                const h = mn(f)
                  , p = is(h);
                f.signature = p,
                f.constant = (i = (r = f.stateMutability === "view") !== null && r !== void 0 ? r : f.stateMutability === "pure") !== null && i !== void 0 ? i : f.constant,
                f.payable = (s = f.stateMutability === "payable") !== null && s !== void 0 ? s : f.payable,
                this._overloadedMethodAbis.set(f.name, [...(o = this._overloadedMethodAbis.get(f.name)) !== null && o !== void 0 ? o : [], f]);
                const m = (a = this._overloadedMethodAbis.get(f.name)) !== null && a !== void 0 ? a : []
                  , g = this._createContractMethod(m, c);
                this._functions[h] = {
                    signature: p,
                    method: g
                },
                this._methods[f.name] = this._functions[h].method,
                this._methods[h] = this._functions[h].method,
                this._methods[p] = this._functions[h].method
            } else if (Xo(f)) {
                const h = mn(f)
                  , p = Jo(h)
                  , m = this._createContractEvent(f, n);
                f.signature = p,
                (!(h in this._events) || f.name === "bound") && (this._events[h] = m),
                this._events[f.name] = m,
                this._events[p] = m
            }
            u = [...u, f]
        }
        this._events.allEvents = this._createContractEvent(Js, n),
        this._jsonInterface = [...u],
        this._errorsInterface = c
    }
    _getAbiParams(e, n) {
        var r;
        try {
            return ir((r = e.inputs) !== null && r !== void 0 ? r : [], n)
        } catch (i) {
            throw new $e(`Invalid parameters for method ${e.name}: ${i.message}`)
        }
    }
    _createContractMethod(e, n) {
        const r = e[e.length - 1];
        return (...i) => {
            var s, o;
            let a;
            const u = (s = this._overloadedMethodAbis.get(r.name)) !== null && s !== void 0 ? s : [];
            let d = u[0];
            const c = n
              , l = u.filter(h => {
                var p;
                return ((p = h.inputs) !== null && p !== void 0 ? p : []).length === i.length
            }
            );
            if (u.length === 1 || l.length === 0)
                a = this._getAbiParams(d, i),
                H.validate((o = r.inputs) !== null && o !== void 0 ? o : [], a);
            else {
                const h = [];
                for (const p of l)
                    try {
                        a = this._getAbiParams(p, i),
                        H.validate(p.inputs, a),
                        d = p;
                        break
                    } catch (m) {
                        h.push(m)
                    }
                if (h.length === l.length)
                    throw new Hn(h)
            }
            const f = {
                arguments: a,
                call: (h, p) => Ct(this, void 0, void 0, function*() {
                    return this._contractMethodCall(d, a, c, h, p)
                }),
                send: h => this._contractMethodSend(d, a, c, h),
                estimateGas: (h, p=O) => Ct(this, void 0, void 0, function*() {
                    return this._contractMethodEstimateGas({
                        abi: d,
                        params: a,
                        returnFormat: p,
                        options: h
                    })
                }),
                encodeABI: () => or(d, a),
                createAccessList: (h, p) => Ct(this, void 0, void 0, function*() {
                    return this._contractMethodCreateAccessList(d, a, c, h, p)
                })
            };
            return d.stateMutability === "payable",
            f
        }
    }
    _contractMethodCall(e, n, r, i, s) {
        var o;
        return Ct(this, void 0, void 0, function*() {
            const a = h_({
                abi: e,
                params: n,
                options: Object.assign(Object.assign({}, i), {
                    dataInputFill: this.config.contractDataInputFill
                }),
                contractOptions: Object.assign(Object.assign({}, this.options), {
                    from: (o = this.options.from) !== null && o !== void 0 ? o : this.config.defaultAccount
                })
            });
            try {
                const u = yield na(this, a, s, O);
                return f_(e, u)
            } catch (u) {
                throw u instanceof Qt && Vr(r, u.innerError),
                u
            }
        })
    }
    _contractMethodCreateAccessList(e, n, r, i, s) {
        var o;
        return Ct(this, void 0, void 0, function*() {
            const a = p_({
                abi: e,
                params: n,
                options: Object.assign(Object.assign({}, i), {
                    dataInputFill: this.config.contractDataInputFill
                }),
                contractOptions: Object.assign(Object.assign({}, this.options), {
                    from: (o = this.options.from) !== null && o !== void 0 ? o : this.config.defaultAccount
                })
            });
            try {
                return Lu(this, a, s, O)
            } catch (u) {
                throw u instanceof Qt && Vr(r, u.innerError),
                u
            }
        })
    }
    _contractMethodSend(e, n, r, i, s) {
        var o, a;
        let u = s ?? this.options;
        u = Object.assign(Object.assign({}, u), {
            input: void 0,
            from: (a = (o = u.from) !== null && o !== void 0 ? o : this.defaultAccount) !== null && a !== void 0 ? a : void 0
        });
        const d = ic({
            abi: e,
            params: n,
            options: Object.assign(Object.assign({}, i), {
                dataInputFill: this.config.contractDataInputFill
            }),
            contractOptions: u
        })
          , c = so(this, d, O, {
            checkRevertBeforeSending: !1,
            contractAbi: this._jsonInterface
        });
        return c.on("error", l => {
            l instanceof Qt && Vr(r, l.innerError)
        }
        ),
        c
    }
    _contractMethodDeploySend(e, n, r, i) {
        var s, o;
        let a = i ?? this.options;
        a = Object.assign(Object.assign({}, a), {
            from: (o = (s = a.from) !== null && s !== void 0 ? s : this.defaultAccount) !== null && o !== void 0 ? o : void 0
        });
        const u = ic({
            abi: e,
            params: n,
            options: Object.assign(Object.assign({}, r), {
                dataInputFill: this.config.contractDataInputFill
            }),
            contractOptions: a
        });
        return so(this, u, O, {
            transactionResolver: d => {
                if (d.status === BigInt(0))
                    throw new $e("code couldn't be stored",d);
                const c = this.clone();
                return c.options.address = d.contractAddress,
                c
            }
            ,
            contractAbi: this._jsonInterface,
            checkRevertBeforeSending: !1
        })
    }
    _contractMethodEstimateGas({abi: e, params: n, returnFormat: r, options: i, contractOptions: s}) {
        return Ct(this, void 0, void 0, function*() {
            const o = m_({
                abi: e,
                params: n,
                options: Object.assign(Object.assign({}, i), {
                    dataInputFill: this.config.contractDataInputFill
                }),
                contractOptions: s ?? this.options
            });
            return ra(this, o, mt.LATEST, r)
        })
    }
    _createContractEvent(e, n=O) {
        return (...r) => {
            var i;
            const {topics: s, fromBlock: o} = rc(this.options, e, r[0])
              , a = new Hu({
                address: this.options.address,
                topics: s,
                abi: e,
                jsonInterface: this._jsonInterface
            },{
                subscriptionManager: this.subscriptionManager,
                returnFormat: n
            });
            return b(o) || this.getPastEvents(e.name, {
                fromBlock: o,
                topics: s
            }, n).then(u => {
                u.forEach(d => a.emit("data", d))
            }
            ).catch(u => {
                a.emit("error", new Ke("Failed to get past events.",u))
            }
            ),
            (i = this.subscriptionManager) === null || i === void 0 || i.addSubscription(a).catch(u => {
                a.emit("error", new Ke("Failed to subscribe.",u))
            }
            ),
            a
        }
    }
    subscribeToContextEvents(e) {
        const n = this;
        this.context = e,
        n.syncWithContext && e.on(fn.CONFIG_CHANGE, r => {
            n.setConfig({
                [r.name]: r.newValue
            })
        }
        )
    }
}
const oc = {
    addr: "0x3b3b57de",
    name: "0x691f3431",
    abi: "0x2203ab56",
    pubkey: "0xc8690233",
    text: "0x59d1d43c",
    contenthash: "0xbc1c58d1"
}
  , Ss = {
    setAddr: "addr",
    addr: "addr",
    setPubkey: "pubkey",
    pubkey: "pubkey",
    setContenthash: "contenthash",
    contenthash: "contenthash"
}
  , Ni = {
    main: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    goerli: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
}
  , y_ = {
    "0x1": "main",
    "0x5": "goerli"
}
  , v_ = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "bytes32",
        name: "label",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "NewOwner",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "address",
        name: "resolver",
        type: "address"
    }],
    name: "NewResolver",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "Transfer",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    name: "isApprovedForAll",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "recordExists",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "resolver",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "ttl",
    outputs: [{
        internalType: "uint64",
        name: "",
        type: "uint64"
    }],
    stateMutability: "view",
    type: "function"
}]
  , b_ = [{
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "address",
        name: "a",
        type: "address"
    }],
    name: "AddrChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "coinType",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "newAddress",
        type: "bytes"
    }],
    name: "AddressChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "ApprovalForAll",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "hash",
        type: "bytes"
    }],
    name: "ContenthashChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "name",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint16",
        name: "resource",
        type: "uint16"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "record",
        type: "bytes"
    }],
    name: "DNSRecordChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "name",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "uint16",
        name: "resource",
        type: "uint16"
    }],
    name: "DNSRecordDeleted",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "DNSZoneCleared",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "lastzonehash",
        type: "bytes"
    }, {
        indexed: !1,
        internalType: "bytes",
        name: "zonehash",
        type: "bytes"
    }],
    name: "DNSZonehashChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
    }, {
        indexed: !1,
        internalType: "address",
        name: "implementer",
        type: "address"
    }],
    name: "InterfaceChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "string",
        name: "name",
        type: "string"
    }],
    name: "NameChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "x",
        type: "bytes32"
    }, {
        indexed: !1,
        internalType: "bytes32",
        name: "y",
        type: "bytes32"
    }],
    name: "PubkeyChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "string",
        name: "indexedKey",
        type: "string"
    }, {
        indexed: !1,
        internalType: "string",
        name: "key",
        type: "string"
    }],
    name: "TextChanged",
    type: "event"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "contentTypes",
        type: "uint256"
    }],
    name: "ABI",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "addr",
    outputs: [{
        internalType: "address payable",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "coinType",
        type: "uint256"
    }],
    name: "addr",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "contenthash",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "name",
        type: "bytes32"
    }, {
        internalType: "uint16",
        name: "resource",
        type: "uint16"
    }],
    name: "dnsRecord",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "name",
        type: "bytes32"
    }],
    name: "hasDNSRecords",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
    }],
    name: "interfaceImplementer",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    name: "isApprovedForAll",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "pubkey",
    outputs: [{
        internalType: "bytes32",
        name: "x",
        type: "bytes32"
    }, {
        internalType: "bytes32",
        name: "y",
        type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
    }],
    name: "supportsInterface",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }, {
        internalType: "string",
        name: "key",
        type: "string"
    }],
    name: "text",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
    }],
    name: "zonehash",
    outputs: [{
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    stateMutability: "view",
    type: "function"
}]
  , __ = t => Gu(t)
  , Yt = t => {
    let e = "";
    for (let n = 0; n < 32; n += 1)
        e += "00";
    if (t) {
        const r = __(t).split(".");
        for (let i = r.length - 1; i >= 0; i -= 1) {
            const s = je(r[i]).slice(2);
            e = je(`0x${e}${s}`).slice(2)
        }
    }
    return `0x${e}`
}
;
var Hr = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class w_ {
    constructor(e, n) {
        this.contract = new rn(v_,n ?? Ni.main,e),
        this.context = e
    }
    getOwner(e) {
        return Hr(this, void 0, void 0, function*() {
            try {
                return this.contract.methods.owner(Yt(e)).call()
            } catch {
                throw new Error
            }
        })
    }
    getTTL(e) {
        return Hr(this, void 0, void 0, function*() {
            try {
                return this.contract.methods.ttl(Yt(e)).call()
            } catch {
                throw new Error
            }
        })
    }
    recordExists(e) {
        return Hr(this, void 0, void 0, function*() {
            try {
                return this.contract.methods.recordExists(Yt(e)).call()
            } catch {
                throw new Error
            }
        })
    }
    getResolver(e) {
        return Hr(this, void 0, void 0, function*() {
            try {
                return this.contract.methods.resolver(Yt(e)).call().then(n => {
                    if (typeof n == "string")
                        return new rn(b_,n,this.context);
                    throw new Error
                }
                )
            } catch {
                throw new Error
            }
        })
    }
    get events() {
        return this.contract.events
    }
}
var Sn = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class x_ {
    constructor(e) {
        this.registry = e
    }
    getResolverContractAdapter(e) {
        return Sn(this, void 0, void 0, function*() {
            return this.registry.getResolver(e)
        })
    }
    checkInterfaceSupport(e, n) {
        var r, i;
        return Sn(this, void 0, void 0, function*() {
            if (z(oc[n]))
                throw new da((r = e.options.address) !== null && r !== void 0 ? r : "",n);
            if (!(yield e.methods.supportsInterface(oc[n]).call()))
                throw new da((i = e.options.address) !== null && i !== void 0 ? i : "",n)
        })
    }
    supportsInterface(e, n) {
        var r;
        return Sn(this, void 0, void 0, function*() {
            const i = yield this.getResolverContractAdapter(e);
            let s = n;
            if (!se(s)) {
                if (s = (r = Br(n)) !== null && r !== void 0 ? r : "",
                n === "")
                    throw new Error("Invalid interface Id");
                s = s.slice(0, 10)
            }
            return i.methods.supportsInterface(s).call()
        })
    }
    getAddress(e, n=60) {
        return Sn(this, void 0, void 0, function*() {
            const r = yield this.getResolverContractAdapter(e);
            return yield this.checkInterfaceSupport(r, Ss.addr),
            r.methods.addr(Yt(e), n).call()
        })
    }
    getPubkey(e) {
        return Sn(this, void 0, void 0, function*() {
            const n = yield this.getResolverContractAdapter(e);
            return yield this.checkInterfaceSupport(n, Ss.pubkey),
            n.methods.pubkey(Yt(e)).call()
        })
    }
    getContenthash(e) {
        return Sn(this, void 0, void 0, function*() {
            const n = yield this.getResolverContractAdapter(e);
            return yield this.checkInterfaceSupport(n, Ss.contenthash),
            n.methods.contenthash(Yt(e)).call()
        })
    }
}
var ut = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class ju extends Oe {
    constructor(e, n) {
        super(n ?? ""),
        this.registryAddress = e ?? Ni.main,
        this._registry = new w_(this.getContextObject(),e),
        this._resolver = new x_(this._registry)
    }
    getResolver(e) {
        return ut(this, void 0, void 0, function*() {
            return this._registry.getResolver(e)
        })
    }
    recordExists(e) {
        return ut(this, void 0, void 0, function*() {
            return this._registry.recordExists(e)
        })
    }
    getTTL(e) {
        return ut(this, void 0, void 0, function*() {
            return this._registry.getTTL(e)
        })
    }
    getOwner(e) {
        return ut(this, void 0, void 0, function*() {
            return this._registry.getOwner(e)
        })
    }
    getAddress(e, n=60) {
        return ut(this, void 0, void 0, function*() {
            return this._resolver.getAddress(e, n)
        })
    }
    getPubkey(e) {
        return ut(this, void 0, void 0, function*() {
            return this._resolver.getPubkey(e)
        })
    }
    getContenthash(e) {
        return ut(this, void 0, void 0, function*() {
            return this._resolver.getContenthash(e)
        })
    }
    checkNetwork() {
        return ut(this, void 0, void 0, function*() {
            const e = Date.now() / 1e3;
            if (!this._lastSyncCheck || e - this._lastSyncCheck > 3600) {
                const i = yield jb(this);
                if (!(typeof i == "boolean" && !i))
                    throw new Hf;
                this._lastSyncCheck = e
            }
            if (this._detectedAddress)
                return this._detectedAddress;
            const n = yield Wo(this, Object.assign(Object.assign({}, O), {
                number: ze.HEX
            }))
              , r = Ni[y_[n]];
            if (typeof r > "u")
                throw new $f(n);
            return this._detectedAddress = r,
            this._detectedAddress
        })
    }
    supportsInterface(e, n) {
        return ut(this, void 0, void 0, function*() {
            return this._resolver.supportsInterface(e, n)
        })
    }
    get events() {
        return this._registry.events
    }
}
var It = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const E_ = t => It(void 0, void 0, void 0, function*() {
    return (yield _v(t)).map(ct)
})
  , I_ = (t, e) => It(void 0, void 0, void 0, function*() {
    H.validate(["string"], [e]);
    const n = yield wv(t, e);
    return ct(n)
})
  , T_ = (t, e, n, r) => It(void 0, void 0, void 0, function*() {
    return H.validate(["address", "string", "uint"], [e, n, r]),
    xv(t, e, n, r)
})
  , S_ = (t, e) => It(void 0, void 0, void 0, function*() {
    return H.validate(["address"], [e]),
    Ev(t, e)
})
  , k_ = (t, e, n) => It(void 0, void 0, void 0, function*() {
    return H.validate(["string", "string"], [e, n]),
    Iv(t, e, n)
})
  , A_ = (t, e, n) => It(void 0, void 0, void 0, function*() {
    const r = Le(e, U);
    return Tv(t, r, n)
})
  , P_ = (t, e, n) => It(void 0, void 0, void 0, function*() {
    const r = Le(e, U);
    return Sv(t, r, n)
})
  , R_ = (t, e, n, r) => It(void 0, void 0, void 0, function*() {
    H.validate(["string", "address", "string"], [e, n, r]);
    const i = se(e) ? e : et(e);
    return kv(t, i, n, r)
})
  , B_ = (t, e, n) => It(void 0, void 0, void 0, function*() {
    H.validate(["string", "string"], [e, n]);
    const r = se(e) ? e : et(e);
    return Av(t, r, n)
});
var lt = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
class Du extends Oe {
    getAccounts() {
        return lt(this, void 0, void 0, function*() {
            return E_(this.requestManager)
        })
    }
    newAccount(e) {
        return lt(this, void 0, void 0, function*() {
            return I_(this.requestManager, e)
        })
    }
    unlockAccount(e, n, r) {
        return lt(this, void 0, void 0, function*() {
            return T_(this.requestManager, e, n, r)
        })
    }
    lockAccount(e) {
        return lt(this, void 0, void 0, function*() {
            return S_(this.requestManager, e)
        })
    }
    importRawKey(e, n) {
        return lt(this, void 0, void 0, function*() {
            return k_(this.requestManager, e, n)
        })
    }
    sendTransaction(e, n) {
        return lt(this, void 0, void 0, function*() {
            return A_(this.requestManager, e, n)
        })
    }
    signTransaction(e, n) {
        return lt(this, void 0, void 0, function*() {
            return P_(this.requestManager, e, n)
        })
    }
    sign(e, n, r) {
        return lt(this, void 0, void 0, function*() {
            return R_(this.requestManager, e, n, r)
        })
    }
    ecRecover(e, n) {
        return lt(this, void 0, void 0, function*() {
            return B_(this.requestManager, e, n)
        })
    }
}
const C_ = {
    encodeEventSignature: Jo,
    encodeFunctionCall: Nb,
    encodeFunctionSignature: is,
    encodeParameter: io,
    encodeParameters: ns,
    decodeParameter: Iu,
    decodeParameters: rs,
    decodeLog: Tu
};
var er = function(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(c) {
            try {
                d(r.next(c))
            } catch (l) {
                o(l)
            }
        }
        function u(c) {
            try {
                d(r.throw(c))
            } catch (l) {
                o(l)
            }
        }
        function d(c) {
            c.done ? s(c.value) : i(c.value).then(a, u)
        }
        d((r = r.apply(t, e || [])).next())
    }
    )
};
const N_ = t => {
    const e = (o, a) => er(void 0, void 0, void 0, function*() {
        const u = yield l_(o, t)
          , d = I({
            format: "bytes"
        }, a, U);
        return Ty(u, d)
    })
      , n = o => {
        const a = Uo(o);
        return Object.assign(Object.assign({}, a), {
            signTransaction: u => er(void 0, void 0, void 0, function*() {
                return e(u, a.privateKey)
            })
        })
    }
      , r = (o, a, u) => er(void 0, void 0, void 0, function*() {
        var d;
        const c = yield Py(o, a, (d = u == null ? void 0 : u.nonStrict) !== null && d !== void 0 ? d : !0);
        return Object.assign(Object.assign({}, c), {
            signTransaction: l => er(void 0, void 0, void 0, function*() {
                return e(l, c.privateKey)
            })
        })
    })
      , i = () => {
        const o = Ay();
        return Object.assign(Object.assign({}, o), {
            signTransaction: a => er(void 0, void 0, void 0, function*() {
                return e(a, o.privateKey)
            })
        })
    }
      , s = new Ii({
        create: i,
        privateKeyToAccount: n,
        decrypt: r
    });
    return {
        signTransaction: e,
        create: i,
        privateKeyToAccount: n,
        decrypt: r,
        recoverTransaction: Sy,
        hashMessage: Go,
        sign: qd,
        recover: Ks,
        encrypt: zd,
        wallet: s,
        privateKeyToAddress: Ji,
        parseAndValidatePrivateKey: Wn,
        privateKeyToPublicKey: ky
    }
}
  , O_ = {
    version: "4.3.0"
};
class ia extends Oe {
    constructor(e) {
        var n;
        (z(e) || typeof e == "string" && e.trim() === "" || typeof e != "string" && !Ei(e) && !e.provider) && console.warn("NOTE: web3.js is running without provider. You need to pass a provider in order to interact with the network!");
        let r = {};
        typeof e == "string" || Ei(e) ? r.provider = e : e ? r = e : r = {},
        r.registeredSubscriptions = Object.assign(Object.assign({}, oo), (n = r.registeredSubscriptions) !== null && n !== void 0 ? n : {}),
        super(r);
        const i = N_(this);
        this._wallet = i.wallet,
        this._accountProvider = i,
        this.utils = ud;
        const s = this;
        class o extends rn {
            constructor(d, c, l, f, h) {
                if (Ot(c) && Ot(l))
                    throw new ua("Should not provide options at both 2nd and 3rd parameters");
                let p, m = {}, g, y = O;
                if (!z(c) && typeof c != "object" && typeof c != "string")
                    throw new ua;
                typeof c == "string" && (p = c),
                Ot(c) ? m = c : Ot(l) ? m = l : m = {},
                c instanceof Oe ? g = c : l instanceof Oe ? g = l : f instanceof Oe ? g = f : g = s.getContextObject(),
                h ? y = h : ft(l) ? y = l : ft(f) && (y = f),
                super(d, p, m, g, y),
                super.subscribeToContextEvents(s)
            }
        }
        const a = s.use(ss);
        this.eth = Object.assign(a, {
            ens: s.use(ju, Ni.main),
            Iban: be,
            net: s.use(Yd),
            personal: s.use(Du),
            Contract: o,
            abi: C_,
            accounts: i
        })
    }
}
ia.version = O_.version;
ia.utils = ud;
ia.modules = {
    Web3Eth: ss,
    Iban: be,
    Net: Yd,
    ENS: ju,
    Personal: Du
};
export {ia as W};
