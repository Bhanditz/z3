
// Automatically generated file
var ref = require('ref');

function Z3Exception(message) {
    this.message = message;
    // Use V8's native method if available, otherwise fallback
    if ("captureStackTrace" in Error)
        Error.captureStackTrace(this, Z3Exception);
    else
        this.stack = (new Error()).stack;
}

Z3Exception.prototype = Object.create(Error.prototype);
Z3Exception.prototype.name = "Z3Exception";
Z3Exception.prototype.constructor = Z3Exception;

// Z3 API Types
module.exports = {
  Z3Exception: Z3Exception,
  Symbol: ref.refType(ref.types.void),
  // ref.types.void,
  // ref.refType(ref.types.void),
  // ref.types.int,
  // ref.types.uint,
  // ref.types.int64,
  // ref.types.uint64,
  // ref.types.CString,
  // ref.refType(ref.types.CString),
  // ref.types.bool,
  // z3types.Symbol,
  // ref.types.uint,
  // ref.types.uint,
  // ref.types.double,
  // ref.types.float,
  Config: ref.refType(ref.types.void),
  Context: ref.refType(ref.types.void),
  Ast: ref.refType(ref.types.void),
  App: ref.refType(ref.types.void),
  Sort: ref.refType(ref.types.void),
  FuncDecl: ref.refType(ref.types.void),
  Pattern: ref.refType(ref.types.void),
  Model: ref.refType(ref.types.void),
  Literals: ref.refType(ref.types.void),
  Constructor: ref.refType(ref.types.void),
  ConstructorList: ref.refType(ref.types.void),
  Theory: ref.refType(ref.types.void),
  TheoryData: ref.refType(ref.types.void),
  Solver: ref.refType(ref.types.void),
  Goal: ref.refType(ref.types.void),
  Tactic: ref.refType(ref.types.void),
  Params: ref.refType(ref.types.void),
  Probe: ref.refType(ref.types.void),
  Stats: ref.refType(ref.types.void),
  AstVector: ref.refType(ref.types.void),
  AstMap: ref.refType(ref.types.void),
  ApplyResult: ref.refType(ref.types.void),
  FuncInterp: ref.refType(ref.types.void),
  FuncEntry: ref.refType(ref.types.void),
  Fixedpoint: ref.refType(ref.types.void),
  Optimize: ref.refType(ref.types.void),
  ParamDescrs: ref.refType(ref.types.void),
  RcfNum: ref.refType(ref.types.void)
};
