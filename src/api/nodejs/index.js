var ref = require('ref');
var core = require('./js/z3core');
var consts = require('./js/z3consts');
var types = require('./js/z3types');
var assert = require('assert');

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
  // TODO: z3.py uses core.set_error_handler here to set the z3 error
  // handler to a function that does nothing, so that the errors
  // can be turned into exceptions instead.  We should do the same.
  core.del_config(conf);
}
Context.prototype.ref = function() {
  return this.ctx;
};

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

