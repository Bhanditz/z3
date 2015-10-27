var ref = require('ref');
var ffi = require('ffi');
var core = require('./js/z3core');
var types = require('./js/z3types');

// console.log('ref.types.CString', ref.types.CString);
// now use them:
var strPtr = ref.alloc(ref.refType(ref.types.CString));
var result = core.Z3_global_param_get('pp.decimal', strPtr);
console.log('result was', result);
console.log('pp.decimal was', strPtr.deref().toString());
