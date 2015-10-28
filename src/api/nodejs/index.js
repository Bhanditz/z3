var ref = require('ref');
var core = require('./js/z3core');
var consts = require('./js/z3consts');
var types = require('./js/z3types');
var assert = require('assert');
var util = require('util');

exports.enable_trace = enable_trace;
function enable_trace(msg) {
  core.enable_trace(msg);
}

exports.disable_trace = disable_trace;
function disable_trace(msg) {
  core.disable_trace(msg);
}

exports.get_version = get_version;
function get_version() {
  var major = ref.alloc(ref.types.uint);
  var minor = ref.alloc(ref.types.uint);
  var build = ref.alloc(ref.types.uint);
  var rev = ref.alloc(ref.types.uint);
  core.get_version(major, minor, build, rev);
  return [major.deref(), minor.deref(), build.deref(), rev.deref()];
}

exports.get_version_string = get_version_string;
function get_version_string() {
  var vers = get_version();
  vers.pop();
  return vers.join('.');
}

function _z3assert(cond, msg) {
  if (!cond) {
    throw new types.Z3Exception(msg);
  }
}

assert.equal(get_version_string(), '4.4.2', 'get_version_string check');

exports.open_log = open_log;
function open_log(filename) {
  core.open_log(filename);
}

exports.append_log = append_log;
function append_log(filename) {
  core.append_log(filename);
}

exports.to_symbol = to_symbol;
function to_symbol(s, ctx) {
  if (typeof(s) == 'number' && parseInt(s) == s) {
    return core.mk_int_symbol(_get_ctx(ctx).ref(), s);
  } else {
    return core.mk_string_symbol(_get_ctx(ctx).ref(), s);
  }
}

function _symbol2js(ctx, s) {
  if (core.get_symbol_kind(ctx.ref(), s) == consts.INT_SYMBOL) {
    return "k!" + core.get_symbol_int(ctx.ref(), s);
  } else {
    return core.get_symbol_string(ctx.ref(), s);
  }
}

// Hack for allowing nary functions that can receive one argument that
// is a list of arguments.
function _get_args(args, pos) {
  if (args.length <= pos) {
    return [];
  }
  if (args.length == pos + 1 && (args[pos] instanceof Array)) {
    return args[pos];
  }
  return Array.prototype.slice(args, pos);
}

exports.Context = Context;
function Context(kw) {
  var conf = core.mk_config();
  for (var key in kw) {
    var value = kw[key];
    core.set_param_value(conf, ('' + key).toUpperCase(), '' + value)
  }
  this.lib = core.lib;
  this.ctx = core.mk_context_rc(conf);
  core.set_ast_print_mode(this.ctx, consts.PRINT_SMTLIB2_COMPLIANT);
  // Set the error handelr to a function that does nothing.
  this.lib.Z3_set_error_handler(this.ctx, function(obj, i) {});
  core.del_config(conf);
}
Context.prototype.ref = function() {
  return this.ctx;
};
Context.prototype.del = function() {
  // Garbage collect a context: in JS, this needs to be called by hand.
  if (this.ctx) {
    this.lib.Z3_del_context(this.ctx);
    this.ctx = null;
  }
}

// TODO: implement Context.prototype.interrupt.

var _main_ctx = null;
exports.main_ctx = main_ctx;
function main_ctx() {
  if (_main_ctx == null) {
    _main_ctx = new Context();
  }
  return _main_ctx;
}

function _get_ctx(ctx) {
  if (ctx == null) {
    return main_ctx();
  } else {
    return ctx;
  }
}

var sym = to_symbol('x');
assert.equal(_symbol2js(_get_ctx(), to_symbol("xfoo")), "xfoo");
assert.equal(_symbol2js(_get_ctx(), to_symbol(42)), "k!42");

exports.set_param = set_param;
function set_param(kw) {
  for (var key in kw) {
    var value = kw[key];
    core.global_param_set(('' + key).toUpperCase(), '' + value)
  }
}

exports.reset_params = reset_params;
function reset_params() {
  core.global_param_reset_all();
}

exports.get_param = get_param;
function get_param(name) {
  var result = ref.alloc(ref.types.CString);
  if (core.global_param_get(('' + name), result)) {
    return result.deref();
  }
  throw new types.Z3Exception("failed to retrieve value for " + name);
}

/* This test passes, but it's noisy.
assert.throws(function() {
  console.log('got', get_param('foobar'));
}, types.Z3Exception);
*/
assert.equal(get_param('nlsat.reorder'), 'true');
set_param({'nlsat.reorder': false});
assert.equal(get_param('nlsat.reorder'), 'false');
reset_params();
assert.equal(get_param('nlsat.reorder'), 'true');

// Mark objects that use pretty printer
exports.Z3PPObject = Z3PPObject;
function Z3PPObject() { }
Z3PPObject.prototype.use_pp = function() { return true; }

exports.AstRef = AstRef;
function AstRef(ast, ctx) {
  this.ast = ast;
  this.ctx = _get_ctx(ctx);
  core.inc_ref(this.ctx.ref(), this.as_ast());
}
util.inherits(AstRef, Z3PPObject);
AstRef.prototype.del = function() {
  core.dec_ref(this.ctx.ref(), this.as_ast());
}
/*
AstRef.prototype.toString = function() {
  printer.obj_to_string(this);
}
*/
AstRef.prototype.sexpr = function() {
  return core.ast_to_string(this.ctx_ref(), this.as_ast());
}
AstRef.prototype.as_ast = function() {
  return this.ast;
}
AstRef.prototype.get_id = function() {
  return core.get_ast_id(this.ctx_ref(), this.as_ast());
}
AstRef.prototype.ctx_ref = function() {
  return this.ctx.ref();
}
AstRef.prototype.equals = function(other) {
  _z3_assert(is_ast(other), "Z3 AST expected");
  return core.is_eq_ast(this.ctx_ref(), this.as_ast(), other.as_ast());
}
AstRef.prototype.translate = function(target) {
  _z3_assert(target instanceof Context, "argument must be a Z3 context");
  return _to_ast_ref(core.translate(this.ctx_ref(), this.as_ast(), target.ref(), target));
}
AstRef.prototype.hash = function() {
  return core.get_ast_hash(this.ctx_ref(), this.as_ast());
}
exports.is_ast = is_ast;
function is_ast(a) {
  return a instanceof AstRef;
}
exports.eq = eq;
function eq(a, b) {
  _z3_assert(is_ast(a) && is_ast(b), "Z3 ASTs expected");
  return a.equals(b);
}
function _ast_kind(ctx, a) {
  if (is_ast(a)) {
    var a = a.as_ast();
  }
  return core.get_ast_kind(ctx.ref(), a);
}
function _ctx_from_ast_arg_list(args, default_ctx) {
  var ctx = null;
  for (var j = 0; j < args.length; ++j) {
    var a = args[j];
    if (is_ast(a) || is_probe(a)) {
      if (ctx == null) {
        ctx = a.ctx;
      } else {
        _z3_assert(ctx == a.ctx, "Context mimsatch");
      }
    }
  }
  return ctx || default_ctx || null;
}
function _ctx_from_ast_args() {
  return _ctx_from_ast_arg_list(arguments);
}
function _to_func_decl_array(args) {
  var fd_args = FunctionDeclArray(args.length);
  for (var j = 0; j < args.length; ++j) {
    fd_args[j] = args[j].as_func_decl();
  }
  return fd_args;
}
function _to_ast_array(args) {
  var ast_args = AstArray(args.length);
  for (var j = 0; j < args.length; ++j) {
    ast_args[j] = args[j].as_ast();
  }
  return ast_args;
}
function _to_ast_ref(a, ctx) {
  var k = _ast_kind(ctx, a);
  if (k = consts.SORT_AST) {
    return _to_sort_ref(a, ctx);
  } else if (k == consts.FUNC_DECL_AST) {
    return _to_func_decl_ref(a, ctx);
  } else {
    return _to_expr_ref(a, ctx);
  }
}
//////////////////////////////////////////
//
// Sorts
//
//////////////////////////////////////////
function _sort_kind(ctx, s) {
  return core.get_sort_kind(ctx.ref(), s);
}

exports.SortRef = SortRef;
function SortRef() { AstRef.apply(this, arguments); }
util.inherits(SortRef, AstRef);
SortRef.prototype.ast = function() {
  return core.sort_to_ast(this.ctx_ref, this.ast);
}
SortRef.prototype.get_id = function() {
  return core.get_ast_id(this.ctx_ref, this.as_ast());
}
SortRef.prototype.kind = function() {
  return _sort_kind(this.ctx, this.ast);
}
SortRef.prototype.subsort = function(other) {
  return false;
}
SortRef.prototype.cast = function(val) {
  _z3_assert(is_expr(val), "Z3 expression expected")
  _z3_assert(this.equals(val.sort()), "Sort mismatch")
  return val;
}
SortRef.prototype.name = function() {
  return _symbol2js(this.ctx, core.get_sort_name(this.ctx_ref(), this.ast));
}
SortRef.equals = function(other) {
  if (other == null) {
    return false;
  }
  return core.is_eq_sort(this.ctx_ref(), this.ast, other.ast);
}
exports.is_sort = is_sort;
function is_sort(s) {
  return s instanceof SortRef;
}

function _to_sort_ref(s, ctx) {
  _z3_assert(s instanceof Sort, "Z3 Sort expected");
  var k = _sort_kind(ctx, s);
  if (k == consts.BOOL_SORT) {
    return new BoolSortRef(s, ctx);
  } else if (k == consts.INT_SORT || k == consts.REAL_SORT) {
    return new ArithSortRef(s, ctx);
  } else if (k == consts.BV_SORT) {
    return new BitVecSortRef(s, ctx);
  } else if (k == consts.ARRAY_SORT) {
    return new ArraySortRef(s, ctx);
  } else if (k == consts.DATATYPE_SORT) {
    return new DatatypeSortRef(s, ctx);
  } else if (k == consts.FINITE_DOMAIN_SORT) {
    return new FiniteDomainSortRef(s, ctx);
  } else if (k == consts.FLOATING_POINT_SORT) {
    return new FPSortRef(s, ctx);
  } else if (k == consts.ROUNDING_MODE_SORT) {
    return new FPRMSortRef(s, ctx);
  } else {
    return new SortRef(s, ctx);
  }
}
function _sort(ctx, a) {
  return _to_sort_ref(core.get_sort(ctx.ref(), a), ctx);
}  
exports.DeclareSort = DeclareSort;
function DeclareSort(name, ctx) {
  ctx = _get_ctx(ctx);
  return new SortRef(core.mk_uninterpreted_sort(ctx.ref(), to_symbol(name, ctx)), ctx);
}

assert.equal(DeclareSort('A').name(), 'A');

//////////////////////////////////////////
//
// Function Declarations
//
//////////////////////////////////////////


exports.FuncDeclRef = FuncDeclRef;
function FuncDeclRef() { AstRef.apply(this, arguments); }

FuncDeclRef.prototype.ast = function() {
  return core.func_decl_to_ast(this.ctx_ref, this.ast);
}
FuncDeclRef.prototype.get_id = function() {
  return core.get_ast_id(this.ctx_ref, this.as_ast());
}
FuncDeclRef.prototype.as_func_decl = function() {
  return this.ast;
}
FuncDeclRef.prototype.name = function() {
  return _symbol2js(this.ctx, core.get_decl_name(this.ctx_ref(), this.ast));
}
FuncDeclRef.prototype.arity = function() {
  return core.get_arity(this.ctx_ref(), this.ast);
}
FuncDeclRef.prototype.domain = function(i) {
  _z3_assert(i < this.arity(), "Index out of bounds");
  return _to_sort_ref(core.get_domain(this.ctx_ref(), this.ast, i), this.ctx);
}
FuncDeclRef.prototype.kind = function() {
  return core.get_decl_kind(this.ctx_ref(), this.ast);
}
FuncDeclRef.prototype.call = function() {
  var args = _get_args(arguments, 0);
  var num = args.length;
  _z3_assert(num == this.arity(), "Incorrect number of arguments to " + this.name());
  var _args = new AstArray(num);
  var saved = [];
  for (var j = 0; j < num; ++j) {
    var tmp = this.domain(j).cast(args[j]);
    saved.push(tmp);
    _args[j] = tmp.as_ast();
  }
  return _to_expr_ref(
      core.mk_app(this.ctx_ref(), this.ast, num, _args), this.ctx);
}
exports.is_func_decl = is_func_decl;
function is_func_decl(a) {
  return (a instanceof FuncDeclRef);
}
exports.Function = Z3Function;
function Z3Function(name) {
  var sig = _get_args(arguments, 1);
  _z3_assert(sig.length > 0, "At least two arguments expected");
  var arity = sig.length - 1;
  var rng = sig[arity];
  _z3_assert(_is_sort(rng), "Z3 sort expected");
  var dom = new SortArray(arity);
  for (var j = 0; j < arity; ++j) {
    _z3_assert(_is_sort(sig[j]), "Z3 sort expected");
    dom[j] = sig[j].ast;
  }
  var ctx = rng.ctx;
  return new FuncDeclRef(core.mk_func_decl(ctx.ref(), to_symbol(name, ctx), arity, dom, rng.ast), ctx);
}
function _to_func_decl_ref(a, ctx) {
  return new FuncDeclRef(a, ctx);
}

//////////////////////////////////////////
//
// Expressions
//
//////////////////////////////////////////
exports.ExprRef = ExprRef;
function ExprRef() { AstRef.apply(this, arguments); }
util.inherits(ExprRef, AstRef);
ExprRef.prototype.sort = function() {
  return _sort(self.ctx, self.as_ast());
}
ExprRef.prototype.sort_kind = function() {
  return this.sort().kind();
}
ExprRef.prototype.equals = function(other) {
  if (other == null) {
    return false;
  }
  var _r = _coerce_exprs(this, other);
  return new BoolRef(core.mk_eq(this.ctx_ref(), a.as_ast(), b.as_ast()), self.ctx);
}
ExprRef.prototype.decl = function() {
  _z3_assert(is_app(this), "Z3 application expected");
  return FuncDeclRef(core.get_app_decl(this.ctx_ref(), this.as_ast()), this.ctx);
}
ExprRef.prototype.num_args = function() {
  _z3_assert(is_app(this), "Z3 application expected");
  return int(core.get_app_num_args(this.ctx_ref(), this.as_ast()));
}
ExprRef.prototype.arg = function(j) {
  _z3_assert(is_app(this), "Z3 application expected");
  _z3_assert(idx < this.num_args(), "invalid argument index " + idx);
  return _to_expr_ref(core.get_app_arg(this.ctx_ref(), this.as_ast(), idx), this.ctx);
}
ExprRef.prototype.children = function() {
  var result = [];
  if (is_app(self)) {
    for (var j = 0; j < this.num_args(); ++j) {
      result.push(this.arg(j));
    }
  }
  return result;
}
function _to_expr_ref(a, ctx) {
  // TODO: in JavaScript, this instanceof might not work; fix this
  // in the code generation by marking patterns.
  if (a instanceof Pattern) {
    return PatternRef(a, ctx);
  }
  var ctx_ref = ctx.ref();
  var k = core.get_ast_kind(ctx_ref, a);
  if (k == consts.QUANTIFIER_AST) {
    return new QuantifierRef(a, ctx);
  }
  var sk = core.get_sort_kind(ctx_ref, core.get_sort(ctx_ref, a));
  if (sk == consts.BOOL_SORT) {
    return BoolRef(a, ctx);
  }
  if (sk == consts.INT_SORT) {
    if (k == consts.NUMERAL_AST) {
      return IntNumRef(a, ctx);
    }
    return ArithRef(a, ctx);
  }
  if (sk == consts.REAL_SORT) {
    if (k == consts.NUMERAL_AST) {
      return RatNumRef(a, ctx);
    }
    if (_is_algebraic(ctx, a)) {
      return AlgebraicNumRef(a, ctx);
    }
    return ArithRef(a, ctx);
  }
  if (sk == consts.BV_SORT) {
    if (k == consts.NUMERAL_AST) {
      return BitVecNumRef(a, ctx);
    } else {
      return BitVecRef(a, ctx);
    }
  }
  if (sk == consts.ARRAY_SORT) {
    return ArrayRef(a, ctx);
  }
  if (sk == consts.DATATYPE_SORT) {
    return DatatypeRef(a, ctx);
  }
  if (sk == consts.FLOATING_POINT_SORT) {
    if (k == consts.APP_AST && _is_numeral(ctx, a)) {
      return FPNumRef(a, ctx);
    } else {
      return FPRef(a, ctx);
    }
  }
  if (sk == consts.ROUNDING_MODE_SORT) {
    return FPRMRef(a, ctx)
  }
  return ExprRef(a, ctx);
}
function _coerce_expr_merge(s, a) {
  if (is_expr(a)) {
    var s1 = a.sort();
    if (s == null) {
      return s1;
    }
    if (s1.equals(s)) {
      return s;
    } else if (s.subsort(s1)) {
      return s1;
    } else if (s1.subsort(s)) {
      return s;
    } else {
      _z3_assert(s1.ctx == s.ctx, "context mismatch");
      _z3_assert(false, "sort mismatch");
    }
  } else {
    return s;
  }
}
function _coerce_exprs(a, b, ctx) {
  if (!is_expr(a) && !is_expr(b)) {
    a = _js2expr(a, ctx);
    b = _js2expr(b, ctx);
  } else {
    s = null;
    s = _coerce_expr_merge(s, a);
    s = _coerce_expr_merge(s, b);
    a = s.cast(a);
    b = s.cast(b);
    return { a: a, b: b };
  }
}
function _reduce(f, l, a) {
  var r = a, len = length(l);
  for (var j = 0; j < len; ++j ) {
    r = f(r, l[j]);
  }
  return r
}
function _coerce_expr_list(alist, ctx) {
  var has_expr = false, len = alist.length, j;
  for (j = 0; j < len; ++j) {
    var a = alist[j];
    if (is_expr(a)) {
      has_expr = true;
      break;
    }
  }
  if (!has_expr) {
    var alist2 = [];
    for (j = 0; j < len; ++j) {
      alist2.push(_js2expr(alist[j], ctx));
    }
    alist = alist2;
  }
  var s = _reduce(_coerce_expr_merge, alist, null);
  var result = [];
  for (j = 0; j < len; ++j) {
    result.push(s.cast(a));
  }
  return result;
}
exports.is_expr = is_expr;
function is_expr(a) {
  return (a instanceof ExprRef);
}
exports.is_app = is_app;
function is_app(a) {
  if (!(a instanceof ExprRef)) {
    return false;
  }
  var k = _ast_kind(a.ctx, a);
  return (k == consts.NUMERAL_AST || k == consts.APP_AST);
}
exports.is_const = is_const;
function is_const(a) {
  return is_app(a) && a.num_args() == 0;
}
exports.is_var = is_var;
function is_var(a) {
  return is_expr(a) && _ast_kind(a.ctx, a) == consts.VAR_AST;
}
exports.get_var_index = get_var_index;
function get_var_index(a) {
  _z3_assert(is_var(a), "Z3 bound variable expected");
  return core.get_index_value(a.ctx.ref(), a.as_ast());
}
exports.is_app_of = is_app_of;
function is_app_of(a, k) {
  return is_app(a) && a.decl().kind() == k;
}

function If(a, b, c, ctx) {
  // TODO: this probably doesn't work
  if (a instanceof Probe || b instanceof Tactic || c instanceof Tactic) {
    return Cond(a, b, c, ctx);
  } else {
    ctx = _get_ctx(_ctx_from_ast_arg_list([a, b, c], ctx));
    var s = BoolSort(ctx);
    var a = s.cast(a);
    var r = _coerce_exprs(b, c, ctx);
    b = r.a;
    c = r.b;
    _z3_assert(a.ctx == b.ctx, "Context mismatch");
    return _to_expr_ref(core.mk_ite(ctx.ref(), a.as_ast(), b.as_ast(), c.as_ast()), ctx);
  }
}

function Distinct() {
  var args = _get_args(arguments, 0);
  var ctx = _ctx_from_ast_arg_list(args);
  _z3_assert(ctx != None, "At least one of the arguments must be a Z3 expression");
  args = _coerce_expr_list(args, ctx);
  var _args = _to_ast_array(args);
  return BoolRef(core.mk_distinct(ctx.ref(), sz, _args), ctx);
}
function _mk_bin(f, a, b) {
  var args = AstArray(2);
  _z3_assert(a.ctx == b.ctx, "Context mistmatch")
  args[0] = a.as_ast();
  args[1] = b.as_ast();
  return f(a.ctx.ref(), 2, args);
}
