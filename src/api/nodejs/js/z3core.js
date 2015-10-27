
// Automatically generated file
var ffi = require('ffi');
var ref = require('ref');
var ArrayType = require('ref-array');
var z3consts = require('./z3consts');
var z3types = require('./z3types');

// Z3 API Functions
var lib = ffi.Library('libz3', {
  'Z3_global_param_set': [ref.types.void,[ref.types.CString,ref.types.CString]],
  'Z3_global_param_reset_all': [ref.types.void,[]],
  'Z3_global_param_get': [ref.types.bool,[ref.types.CString,ref.refType(ref.types.CString)]],
  'Z3_mk_config': [z3types.Config,[]],
  'Z3_del_config': [ref.types.void,[z3types.Config]],
  'Z3_set_param_value': [ref.types.void,[z3types.Config,ref.types.CString,ref.types.CString]],
  'Z3_mk_context': [z3types.Context,[z3types.Config]],
  'Z3_mk_context_rc': [z3types.Context,[z3types.Config]],
  'Z3_del_context': [ref.types.void,[z3types.Context]],
  'Z3_inc_ref': [ref.types.void,[z3types.Context,z3types.Ast]],
  'Z3_dec_ref': [ref.types.void,[z3types.Context,z3types.Ast]],
  'Z3_update_param_value': [ref.types.void,[z3types.Context,ref.types.CString,ref.types.CString]],
  'Z3_interrupt': [ref.types.void,[z3types.Context]],
  'Z3_mk_params': [z3types.Params,[z3types.Context]],
  'Z3_params_inc_ref': [ref.types.void,[z3types.Context,z3types.Params]],
  'Z3_params_dec_ref': [ref.types.void,[z3types.Context,z3types.Params]],
  'Z3_params_set_bool': [ref.types.void,[z3types.Context,z3types.Params,z3types.Symbol,ref.types.bool]],
  'Z3_params_set_uint': [ref.types.void,[z3types.Context,z3types.Params,z3types.Symbol,ref.types.uint]],
  'Z3_params_set_double': [ref.types.void,[z3types.Context,z3types.Params,z3types.Symbol,ref.types.double]],
  'Z3_params_set_symbol': [ref.types.void,[z3types.Context,z3types.Params,z3types.Symbol,z3types.Symbol]],
  'Z3_params_to_string': [ref.types.CString,[z3types.Context,z3types.Params]],
  'Z3_params_validate': [ref.types.void,[z3types.Context,z3types.Params,z3types.ParamDescrs]],
  'Z3_param_descrs_inc_ref': [ref.types.void,[z3types.Context,z3types.ParamDescrs]],
  'Z3_param_descrs_dec_ref': [ref.types.void,[z3types.Context,z3types.ParamDescrs]],
  'Z3_param_descrs_get_kind': [ref.types.uint,[z3types.Context,z3types.ParamDescrs,z3types.Symbol]],
  'Z3_param_descrs_size': [ref.types.uint,[z3types.Context,z3types.ParamDescrs]],
  'Z3_param_descrs_get_name': [z3types.Symbol,[z3types.Context,z3types.ParamDescrs,ref.types.uint]],
  'Z3_param_descrs_to_string': [ref.types.CString,[z3types.Context,z3types.ParamDescrs]],
  'Z3_mk_int_symbol': [z3types.Symbol,[z3types.Context,ref.types.int]],
  'Z3_mk_string_symbol': [z3types.Symbol,[z3types.Context,ref.types.CString]],
  'Z3_mk_uninterpreted_sort': [z3types.Sort,[z3types.Context,z3types.Symbol]],
  'Z3_mk_bool_sort': [z3types.Sort,[z3types.Context]],
  'Z3_mk_int_sort': [z3types.Sort,[z3types.Context]],
  'Z3_mk_real_sort': [z3types.Sort,[z3types.Context]],
  'Z3_mk_bv_sort': [z3types.Sort,[z3types.Context,ref.types.uint]],
  'Z3_mk_finite_domain_sort': [z3types.Sort,[z3types.Context,z3types.Symbol,ref.types.uint64]],
  'Z3_mk_array_sort': [z3types.Sort,[z3types.Context,z3types.Sort,z3types.Sort]],
  'Z3_mk_tuple_sort': [z3types.Sort,[z3types.Context,z3types.Symbol,ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.Sort),ref.refType(z3types.FuncDecl),ArrayType(z3types.FuncDecl)]],
  'Z3_mk_enumeration_sort': [z3types.Sort,[z3types.Context,z3types.Symbol,ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.FuncDecl),ArrayType(z3types.FuncDecl)]],
  'Z3_mk_list_sort': [z3types.Sort,[z3types.Context,z3types.Symbol,z3types.Sort,ref.refType(z3types.FuncDecl),ref.refType(z3types.FuncDecl),ref.refType(z3types.FuncDecl),ref.refType(z3types.FuncDecl),ref.refType(z3types.FuncDecl),ref.refType(z3types.FuncDecl)]],
  'Z3_mk_constructor': [z3types.Constructor,[z3types.Context,z3types.Symbol,z3types.Symbol,ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.Sort),ArrayType(ref.types.uint)]],
  'Z3_del_constructor': [ref.types.void,[z3types.Context,z3types.Constructor]],
  'Z3_mk_datatype': [z3types.Sort,[z3types.Context,z3types.Symbol,ref.types.uint,ArrayType(z3types.Constructor)]],
  'Z3_mk_constructor_list': [z3types.ConstructorList,[z3types.Context,ref.types.uint,ArrayType(z3types.Constructor)]],
  'Z3_del_constructor_list': [ref.types.void,[z3types.Context,z3types.ConstructorList]],
  'Z3_mk_datatypes': [ref.types.void,[z3types.Context,ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.Sort),ArrayType(z3types.ConstructorList)]],
  'Z3_query_constructor': [ref.types.void,[z3types.Context,z3types.Constructor,ref.types.uint,ref.refType(z3types.FuncDecl),ref.refType(z3types.FuncDecl),ArrayType(z3types.FuncDecl)]],
  'Z3_mk_func_decl': [z3types.FuncDecl,[z3types.Context,z3types.Symbol,ref.types.uint,ArrayType(z3types.Sort),z3types.Sort]],
  'Z3_mk_app': [z3types.Ast,[z3types.Context,z3types.FuncDecl,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_const': [z3types.Ast,[z3types.Context,z3types.Symbol,z3types.Sort]],
  'Z3_mk_fresh_func_decl': [z3types.FuncDecl,[z3types.Context,ref.types.CString,ref.types.uint,ArrayType(z3types.Sort),z3types.Sort]],
  'Z3_mk_fresh_const': [z3types.Ast,[z3types.Context,ref.types.CString,z3types.Sort]],
  'Z3_mk_true': [z3types.Ast,[z3types.Context]],
  'Z3_mk_false': [z3types.Ast,[z3types.Context]],
  'Z3_mk_eq': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_distinct': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_not': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_ite': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast]],
  'Z3_mk_iff': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_implies': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_xor': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_and': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_or': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_add': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_mul': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_sub': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_unary_minus': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_div': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_mod': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_rem': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_power': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_lt': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_le': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_gt': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_ge': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_int2real': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_real2int': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_is_int': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_bvnot': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_bvredand': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_bvredor': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_bvand': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvor': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvxor': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvnand': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvnor': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvxnor': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvneg': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_bvadd': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvsub': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvmul': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvudiv': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvsdiv': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvurem': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvsrem': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvsmod': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvult': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvslt': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvule': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvsle': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvuge': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvsge': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvugt': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvsgt': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_concat': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_extract': [z3types.Ast,[z3types.Context,ref.types.uint,ref.types.uint,z3types.Ast]],
  'Z3_mk_sign_ext': [z3types.Ast,[z3types.Context,ref.types.uint,z3types.Ast]],
  'Z3_mk_zero_ext': [z3types.Ast,[z3types.Context,ref.types.uint,z3types.Ast]],
  'Z3_mk_repeat': [z3types.Ast,[z3types.Context,ref.types.uint,z3types.Ast]],
  'Z3_mk_bvshl': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvlshr': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvashr': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_rotate_left': [z3types.Ast,[z3types.Context,ref.types.uint,z3types.Ast]],
  'Z3_mk_rotate_right': [z3types.Ast,[z3types.Context,ref.types.uint,z3types.Ast]],
  'Z3_mk_ext_rotate_left': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_ext_rotate_right': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_int2bv': [z3types.Ast,[z3types.Context,ref.types.uint,z3types.Ast]],
  'Z3_mk_bv2int': [z3types.Ast,[z3types.Context,z3types.Ast,ref.types.bool]],
  'Z3_mk_bvadd_no_overflow': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,ref.types.bool]],
  'Z3_mk_bvadd_no_underflow': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvsub_no_overflow': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvsub_no_underflow': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,ref.types.bool]],
  'Z3_mk_bvsdiv_no_overflow': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_bvneg_no_overflow': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_bvmul_no_overflow': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,ref.types.bool]],
  'Z3_mk_bvmul_no_underflow': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_select': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_store': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast]],
  'Z3_mk_const_array': [z3types.Ast,[z3types.Context,z3types.Sort,z3types.Ast]],
  'Z3_mk_map': [z3types.Ast,[z3types.Context,z3types.FuncDecl,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_array_default': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_set_sort': [z3types.Sort,[z3types.Context,z3types.Sort]],
  'Z3_mk_empty_set': [z3types.Ast,[z3types.Context,z3types.Sort]],
  'Z3_mk_full_set': [z3types.Ast,[z3types.Context,z3types.Sort]],
  'Z3_mk_set_add': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_set_del': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_set_union': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_set_intersect': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_set_difference': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_set_complement': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_set_member': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_set_subset': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_numeral': [z3types.Ast,[z3types.Context,ref.types.CString,z3types.Sort]],
  'Z3_mk_real': [z3types.Ast,[z3types.Context,ref.types.int,ref.types.int]],
  'Z3_mk_int': [z3types.Ast,[z3types.Context,ref.types.int,z3types.Sort]],
  'Z3_mk_unsigned_int': [z3types.Ast,[z3types.Context,ref.types.uint,z3types.Sort]],
  'Z3_mk_int64': [z3types.Ast,[z3types.Context,ref.types.int64,z3types.Sort]],
  'Z3_mk_unsigned_int64': [z3types.Ast,[z3types.Context,ref.types.uint64,z3types.Sort]],
  'Z3_mk_pattern': [z3types.Pattern,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_bound': [z3types.Ast,[z3types.Context,ref.types.uint,z3types.Sort]],
  'Z3_mk_forall': [z3types.Ast,[z3types.Context,ref.types.uint,ref.types.uint,ArrayType(z3types.Pattern),ref.types.uint,ArrayType(z3types.Sort),ArrayType(z3types.Symbol),z3types.Ast]],
  'Z3_mk_exists': [z3types.Ast,[z3types.Context,ref.types.uint,ref.types.uint,ArrayType(z3types.Pattern),ref.types.uint,ArrayType(z3types.Sort),ArrayType(z3types.Symbol),z3types.Ast]],
  'Z3_mk_quantifier': [z3types.Ast,[z3types.Context,ref.types.bool,ref.types.uint,ref.types.uint,ArrayType(z3types.Pattern),ref.types.uint,ArrayType(z3types.Sort),ArrayType(z3types.Symbol),z3types.Ast]],
  'Z3_mk_quantifier_ex': [z3types.Ast,[z3types.Context,ref.types.bool,ref.types.uint,z3types.Symbol,z3types.Symbol,ref.types.uint,ArrayType(z3types.Pattern),ref.types.uint,ArrayType(z3types.Ast),ref.types.uint,ArrayType(z3types.Sort),ArrayType(z3types.Symbol),z3types.Ast]],
  'Z3_mk_forall_const': [z3types.Ast,[z3types.Context,ref.types.uint,ref.types.uint,ArrayType(z3types.App),ref.types.uint,ArrayType(z3types.Pattern),z3types.Ast]],
  'Z3_mk_exists_const': [z3types.Ast,[z3types.Context,ref.types.uint,ref.types.uint,ArrayType(z3types.App),ref.types.uint,ArrayType(z3types.Pattern),z3types.Ast]],
  'Z3_mk_quantifier_const': [z3types.Ast,[z3types.Context,ref.types.bool,ref.types.uint,ref.types.uint,ArrayType(z3types.App),ref.types.uint,ArrayType(z3types.Pattern),z3types.Ast]],
  'Z3_mk_quantifier_const_ex': [z3types.Ast,[z3types.Context,ref.types.bool,ref.types.uint,z3types.Symbol,z3types.Symbol,ref.types.uint,ArrayType(z3types.App),ref.types.uint,ArrayType(z3types.Pattern),ref.types.uint,ArrayType(z3types.Ast),z3types.Ast]],
  'Z3_get_symbol_kind': [ref.types.uint,[z3types.Context,z3types.Symbol]],
  'Z3_get_symbol_int': [ref.types.int,[z3types.Context,z3types.Symbol]],
  'Z3_get_symbol_string': [ref.types.CString,[z3types.Context,z3types.Symbol]],
  'Z3_get_sort_name': [z3types.Symbol,[z3types.Context,z3types.Sort]],
  'Z3_get_sort_id': [ref.types.uint,[z3types.Context,z3types.Sort]],
  'Z3_sort_to_ast': [z3types.Ast,[z3types.Context,z3types.Sort]],
  'Z3_is_eq_sort': [ref.types.bool,[z3types.Context,z3types.Sort,z3types.Sort]],
  'Z3_get_sort_kind': [ref.types.uint,[z3types.Context,z3types.Sort]],
  'Z3_get_bv_sort_size': [ref.types.uint,[z3types.Context,z3types.Sort]],
  'Z3_get_finite_domain_sort_size': [ref.types.bool,[z3types.Context,z3types.Sort,ref.refType(ref.types.uint64)]],
  'Z3_get_array_sort_domain': [z3types.Sort,[z3types.Context,z3types.Sort]],
  'Z3_get_array_sort_range': [z3types.Sort,[z3types.Context,z3types.Sort]],
  'Z3_get_tuple_sort_mk_decl': [z3types.FuncDecl,[z3types.Context,z3types.Sort]],
  'Z3_get_tuple_sort_num_fields': [ref.types.uint,[z3types.Context,z3types.Sort]],
  'Z3_get_tuple_sort_field_decl': [z3types.FuncDecl,[z3types.Context,z3types.Sort,ref.types.uint]],
  'Z3_get_datatype_sort_num_constructors': [ref.types.uint,[z3types.Context,z3types.Sort]],
  'Z3_get_datatype_sort_constructor': [z3types.FuncDecl,[z3types.Context,z3types.Sort,ref.types.uint]],
  'Z3_get_datatype_sort_recognizer': [z3types.FuncDecl,[z3types.Context,z3types.Sort,ref.types.uint]],
  'Z3_get_datatype_sort_constructor_accessor': [z3types.FuncDecl,[z3types.Context,z3types.Sort,ref.types.uint,ref.types.uint]],
  'Z3_datatype_update_field': [z3types.Ast,[z3types.Context,z3types.FuncDecl,z3types.Ast,z3types.Ast]],
  'Z3_get_relation_arity': [ref.types.uint,[z3types.Context,z3types.Sort]],
  'Z3_get_relation_column': [z3types.Sort,[z3types.Context,z3types.Sort,ref.types.uint]],
  'Z3_mk_atmost': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast),ref.types.uint]],
  'Z3_mk_pble': [z3types.Ast,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast),ArrayType(ref.types.int),ref.types.int]],
  'Z3_func_decl_to_ast': [z3types.Ast,[z3types.Context,z3types.FuncDecl]],
  'Z3_is_eq_func_decl': [ref.types.bool,[z3types.Context,z3types.FuncDecl,z3types.FuncDecl]],
  'Z3_get_func_decl_id': [ref.types.uint,[z3types.Context,z3types.FuncDecl]],
  'Z3_get_decl_name': [z3types.Symbol,[z3types.Context,z3types.FuncDecl]],
  'Z3_get_decl_kind': [ref.types.uint,[z3types.Context,z3types.FuncDecl]],
  'Z3_get_domain_size': [ref.types.uint,[z3types.Context,z3types.FuncDecl]],
  'Z3_get_arity': [ref.types.uint,[z3types.Context,z3types.FuncDecl]],
  'Z3_get_domain': [z3types.Sort,[z3types.Context,z3types.FuncDecl,ref.types.uint]],
  'Z3_get_range': [z3types.Sort,[z3types.Context,z3types.FuncDecl]],
  'Z3_get_decl_num_parameters': [ref.types.uint,[z3types.Context,z3types.FuncDecl]],
  'Z3_get_decl_parameter_kind': [ref.types.uint,[z3types.Context,z3types.FuncDecl,ref.types.uint]],
  'Z3_get_decl_int_parameter': [ref.types.int,[z3types.Context,z3types.FuncDecl,ref.types.uint]],
  'Z3_get_decl_double_parameter': [ref.types.double,[z3types.Context,z3types.FuncDecl,ref.types.uint]],
  'Z3_get_decl_symbol_parameter': [z3types.Symbol,[z3types.Context,z3types.FuncDecl,ref.types.uint]],
  'Z3_get_decl_sort_parameter': [z3types.Sort,[z3types.Context,z3types.FuncDecl,ref.types.uint]],
  'Z3_get_decl_ast_parameter': [z3types.Ast,[z3types.Context,z3types.FuncDecl,ref.types.uint]],
  'Z3_get_decl_func_decl_parameter': [z3types.FuncDecl,[z3types.Context,z3types.FuncDecl,ref.types.uint]],
  'Z3_get_decl_rational_parameter': [ref.types.CString,[z3types.Context,z3types.FuncDecl,ref.types.uint]],
  'Z3_app_to_ast': [z3types.Ast,[z3types.Context,z3types.App]],
  'Z3_get_app_decl': [z3types.FuncDecl,[z3types.Context,z3types.App]],
  'Z3_get_app_num_args': [ref.types.uint,[z3types.Context,z3types.App]],
  'Z3_get_app_arg': [z3types.Ast,[z3types.Context,z3types.App,ref.types.uint]],
  'Z3_is_eq_ast': [ref.types.bool,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_get_ast_id': [ref.types.uint,[z3types.Context,z3types.Ast]],
  'Z3_get_ast_hash': [ref.types.uint,[z3types.Context,z3types.Ast]],
  'Z3_get_sort': [z3types.Sort,[z3types.Context,z3types.Ast]],
  'Z3_is_well_sorted': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_get_bool_value': [ref.types.int,[z3types.Context,z3types.Ast]],
  'Z3_get_ast_kind': [ref.types.uint,[z3types.Context,z3types.Ast]],
  'Z3_is_app': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_is_numeral_ast': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_is_algebraic_number': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_to_app': [z3types.App,[z3types.Context,z3types.Ast]],
  'Z3_to_func_decl': [z3types.FuncDecl,[z3types.Context,z3types.Ast]],
  'Z3_get_numeral_string': [ref.types.CString,[z3types.Context,z3types.Ast]],
  'Z3_get_numeral_decimal_string': [ref.types.CString,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_get_numerator': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_get_denominator': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_get_numeral_small': [ref.types.bool,[z3types.Context,z3types.Ast,ref.refType(ref.types.int64),ref.refType(ref.types.int64)]],
  'Z3_get_numeral_int': [ref.types.bool,[z3types.Context,z3types.Ast,ref.refType(ref.types.int)]],
  'Z3_get_numeral_uint': [ref.types.bool,[z3types.Context,z3types.Ast,ref.refType(ref.types.uint)]],
  'Z3_get_numeral_uint64': [ref.types.bool,[z3types.Context,z3types.Ast,ref.refType(ref.types.uint64)]],
  'Z3_get_numeral_int64': [ref.types.bool,[z3types.Context,z3types.Ast,ref.refType(ref.types.int64)]],
  'Z3_get_numeral_rational_int64': [ref.types.bool,[z3types.Context,z3types.Ast,ref.refType(ref.types.int64),ref.refType(ref.types.int64)]],
  'Z3_get_algebraic_number_lower': [z3types.Ast,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_get_algebraic_number_upper': [z3types.Ast,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_pattern_to_ast': [z3types.Ast,[z3types.Context,z3types.Pattern]],
  'Z3_get_pattern_num_terms': [ref.types.uint,[z3types.Context,z3types.Pattern]],
  'Z3_get_pattern': [z3types.Ast,[z3types.Context,z3types.Pattern,ref.types.uint]],
  'Z3_get_index_value': [ref.types.uint,[z3types.Context,z3types.Ast]],
  'Z3_is_quantifier_forall': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_get_quantifier_weight': [ref.types.uint,[z3types.Context,z3types.Ast]],
  'Z3_get_quantifier_num_patterns': [ref.types.uint,[z3types.Context,z3types.Ast]],
  'Z3_get_quantifier_pattern_ast': [z3types.Pattern,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_get_quantifier_num_no_patterns': [ref.types.uint,[z3types.Context,z3types.Ast]],
  'Z3_get_quantifier_no_pattern_ast': [z3types.Ast,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_get_quantifier_num_bound': [ref.types.uint,[z3types.Context,z3types.Ast]],
  'Z3_get_quantifier_bound_name': [z3types.Symbol,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_get_quantifier_bound_sort': [z3types.Sort,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_get_quantifier_body': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_simplify': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_simplify_ex': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Params]],
  'Z3_simplify_get_help': [ref.types.CString,[z3types.Context]],
  'Z3_simplify_get_param_descrs': [z3types.ParamDescrs,[z3types.Context]],
  'Z3_update_term': [z3types.Ast,[z3types.Context,z3types.Ast,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_substitute': [z3types.Ast,[z3types.Context,z3types.Ast,ref.types.uint,ArrayType(z3types.Ast),ArrayType(z3types.Ast)]],
  'Z3_substitute_vars': [z3types.Ast,[z3types.Context,z3types.Ast,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_translate': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Context]],
  'Z3_model_inc_ref': [ref.types.void,[z3types.Context,z3types.Model]],
  'Z3_model_dec_ref': [ref.types.void,[z3types.Context,z3types.Model]],
  'Z3_model_eval': [ref.types.bool,[z3types.Context,z3types.Model,z3types.Ast,ref.types.bool,ref.refType(z3types.Ast)]],
  'Z3_model_get_const_interp': [z3types.Ast,[z3types.Context,z3types.Model,z3types.FuncDecl]],
  'Z3_model_has_interp': [ref.types.bool,[z3types.Context,z3types.Model,z3types.FuncDecl]],
  'Z3_model_get_func_interp': [z3types.FuncInterp,[z3types.Context,z3types.Model,z3types.FuncDecl]],
  'Z3_model_get_num_consts': [ref.types.uint,[z3types.Context,z3types.Model]],
  'Z3_model_get_const_decl': [z3types.FuncDecl,[z3types.Context,z3types.Model,ref.types.uint]],
  'Z3_model_get_num_funcs': [ref.types.uint,[z3types.Context,z3types.Model]],
  'Z3_model_get_func_decl': [z3types.FuncDecl,[z3types.Context,z3types.Model,ref.types.uint]],
  'Z3_model_get_num_sorts': [ref.types.uint,[z3types.Context,z3types.Model]],
  'Z3_model_get_sort': [z3types.Sort,[z3types.Context,z3types.Model,ref.types.uint]],
  'Z3_model_get_sort_universe': [z3types.AstVector,[z3types.Context,z3types.Model,z3types.Sort]],
  'Z3_is_as_array': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_get_as_array_func_decl': [z3types.FuncDecl,[z3types.Context,z3types.Ast]],
  'Z3_func_interp_inc_ref': [ref.types.void,[z3types.Context,z3types.FuncInterp]],
  'Z3_func_interp_dec_ref': [ref.types.void,[z3types.Context,z3types.FuncInterp]],
  'Z3_func_interp_get_num_entries': [ref.types.uint,[z3types.Context,z3types.FuncInterp]],
  'Z3_func_interp_get_entry': [z3types.FuncEntry,[z3types.Context,z3types.FuncInterp,ref.types.uint]],
  'Z3_func_interp_get_else': [z3types.Ast,[z3types.Context,z3types.FuncInterp]],
  'Z3_func_interp_get_arity': [ref.types.uint,[z3types.Context,z3types.FuncInterp]],
  'Z3_func_entry_inc_ref': [ref.types.void,[z3types.Context,z3types.FuncEntry]],
  'Z3_func_entry_dec_ref': [ref.types.void,[z3types.Context,z3types.FuncEntry]],
  'Z3_func_entry_get_value': [z3types.Ast,[z3types.Context,z3types.FuncEntry]],
  'Z3_func_entry_get_num_args': [ref.types.uint,[z3types.Context,z3types.FuncEntry]],
  'Z3_func_entry_get_arg': [z3types.Ast,[z3types.Context,z3types.FuncEntry,ref.types.uint]],
  'Z3_toggle_warning_messages': [ref.types.void,[ref.types.bool]],
  'Z3_set_ast_print_mode': [ref.types.void,[z3types.Context,ref.types.uint]],
  'Z3_ast_to_string': [ref.types.CString,[z3types.Context,z3types.Ast]],
  'Z3_pattern_to_string': [ref.types.CString,[z3types.Context,z3types.Pattern]],
  'Z3_sort_to_string': [ref.types.CString,[z3types.Context,z3types.Sort]],
  'Z3_func_decl_to_string': [ref.types.CString,[z3types.Context,z3types.FuncDecl]],
  'Z3_model_to_string': [ref.types.CString,[z3types.Context,z3types.Model]],
  'Z3_benchmark_to_smtlib_string': [ref.types.CString,[z3types.Context,ref.types.CString,ref.types.CString,ref.types.CString,ref.types.CString,ref.types.uint,ArrayType(z3types.Ast),z3types.Ast]],
  'Z3_parse_smtlib2_string': [z3types.Ast,[z3types.Context,ref.types.CString,ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.Sort),ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.FuncDecl)]],
  'Z3_parse_smtlib2_file': [z3types.Ast,[z3types.Context,ref.types.CString,ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.Sort),ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.FuncDecl)]],
  'Z3_parse_smtlib_string': [ref.types.void,[z3types.Context,ref.types.CString,ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.Sort),ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.FuncDecl)]],
  'Z3_parse_smtlib_file': [ref.types.void,[z3types.Context,ref.types.CString,ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.Sort),ref.types.uint,ArrayType(z3types.Symbol),ArrayType(z3types.FuncDecl)]],
  'Z3_get_smtlib_num_formulas': [ref.types.uint,[z3types.Context]],
  'Z3_get_smtlib_formula': [z3types.Ast,[z3types.Context,ref.types.uint]],
  'Z3_get_smtlib_num_assumptions': [ref.types.uint,[z3types.Context]],
  'Z3_get_smtlib_assumption': [z3types.Ast,[z3types.Context,ref.types.uint]],
  'Z3_get_smtlib_num_decls': [ref.types.uint,[z3types.Context]],
  'Z3_get_smtlib_decl': [z3types.FuncDecl,[z3types.Context,ref.types.uint]],
  'Z3_get_smtlib_num_sorts': [ref.types.uint,[z3types.Context]],
  'Z3_get_smtlib_sort': [z3types.Sort,[z3types.Context,ref.types.uint]],
  'Z3_get_smtlib_error': [ref.types.CString,[z3types.Context]],
  'Z3_get_error_code': [ref.types.uint,[z3types.Context]],
  'Z3_set_error': [ref.types.void,[z3types.Context,ref.types.uint]],
  'Z3_get_error_msg': [ref.types.CString,[ref.types.uint]],
  'Z3_get_error_msg_ex': [ref.types.CString,[z3types.Context,ref.types.uint]],
  'Z3_get_version': [ref.types.void,[ref.refType(ref.types.uint),ref.refType(ref.types.uint),ref.refType(ref.types.uint),ref.refType(ref.types.uint)]],
  'Z3_enable_trace': [ref.types.void,[ref.types.CString]],
  'Z3_disable_trace': [ref.types.void,[ref.types.CString]],
  'Z3_reset_memory': [ref.types.void,[]],
  'Z3_finalize_memory': [ref.types.void,[]],
  'Z3_mk_fixedpoint': [z3types.Fixedpoint,[z3types.Context]],
  'Z3_fixedpoint_inc_ref': [ref.types.void,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_dec_ref': [ref.types.void,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_add_rule': [ref.types.void,[z3types.Context,z3types.Fixedpoint,z3types.Ast,z3types.Symbol]],
  'Z3_fixedpoint_add_fact': [ref.types.void,[z3types.Context,z3types.Fixedpoint,z3types.FuncDecl,ref.types.uint,ArrayType(ref.types.uint)]],
  'Z3_fixedpoint_assert': [ref.types.void,[z3types.Context,z3types.Fixedpoint,z3types.Ast]],
  'Z3_fixedpoint_query': [ref.types.int,[z3types.Context,z3types.Fixedpoint,z3types.Ast]],
  'Z3_fixedpoint_query_relations': [ref.types.int,[z3types.Context,z3types.Fixedpoint,ref.types.uint,ArrayType(z3types.FuncDecl)]],
  'Z3_fixedpoint_get_answer': [z3types.Ast,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_get_reason_unknown': [ref.types.CString,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_update_rule': [ref.types.void,[z3types.Context,z3types.Fixedpoint,z3types.Ast,z3types.Symbol]],
  'Z3_fixedpoint_get_num_levels': [ref.types.uint,[z3types.Context,z3types.Fixedpoint,z3types.FuncDecl]],
  'Z3_fixedpoint_get_cover_delta': [z3types.Ast,[z3types.Context,z3types.Fixedpoint,ref.types.int,z3types.FuncDecl]],
  'Z3_fixedpoint_add_cover': [ref.types.void,[z3types.Context,z3types.Fixedpoint,ref.types.int,z3types.FuncDecl,z3types.Ast]],
  'Z3_fixedpoint_get_statistics': [z3types.Stats,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_register_relation': [ref.types.void,[z3types.Context,z3types.Fixedpoint,z3types.FuncDecl]],
  'Z3_fixedpoint_set_predicate_representation': [ref.types.void,[z3types.Context,z3types.Fixedpoint,z3types.FuncDecl,ref.types.uint,ArrayType(z3types.Symbol)]],
  'Z3_fixedpoint_get_rules': [z3types.AstVector,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_get_assertions': [z3types.AstVector,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_set_params': [ref.types.void,[z3types.Context,z3types.Fixedpoint,z3types.Params]],
  'Z3_fixedpoint_get_help': [ref.types.CString,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_get_param_descrs': [z3types.ParamDescrs,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_to_string': [ref.types.CString,[z3types.Context,z3types.Fixedpoint,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_fixedpoint_from_string': [z3types.AstVector,[z3types.Context,z3types.Fixedpoint,ref.types.CString]],
  'Z3_fixedpoint_from_file': [z3types.AstVector,[z3types.Context,z3types.Fixedpoint,ref.types.CString]],
  'Z3_fixedpoint_push': [ref.types.void,[z3types.Context,z3types.Fixedpoint]],
  'Z3_fixedpoint_pop': [ref.types.void,[z3types.Context,z3types.Fixedpoint]],
  'Z3_mk_optimize': [z3types.Optimize,[z3types.Context]],
  'Z3_optimize_inc_ref': [ref.types.void,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_dec_ref': [ref.types.void,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_assert': [ref.types.void,[z3types.Context,z3types.Optimize,z3types.Ast]],
  'Z3_optimize_assert_soft': [ref.types.uint,[z3types.Context,z3types.Optimize,z3types.Ast,ref.types.CString,z3types.Symbol]],
  'Z3_optimize_maximize': [ref.types.uint,[z3types.Context,z3types.Optimize,z3types.Ast]],
  'Z3_optimize_minimize': [ref.types.uint,[z3types.Context,z3types.Optimize,z3types.Ast]],
  'Z3_optimize_push': [ref.types.void,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_pop': [ref.types.void,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_check': [ref.types.int,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_get_reason_unknown': [ref.types.CString,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_get_model': [z3types.Model,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_set_params': [ref.types.void,[z3types.Context,z3types.Optimize,z3types.Params]],
  'Z3_optimize_get_param_descrs': [z3types.ParamDescrs,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_get_lower': [z3types.Ast,[z3types.Context,z3types.Optimize,ref.types.uint]],
  'Z3_optimize_get_upper': [z3types.Ast,[z3types.Context,z3types.Optimize,ref.types.uint]],
  'Z3_optimize_to_string': [ref.types.CString,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_get_help': [ref.types.CString,[z3types.Context,z3types.Optimize]],
  'Z3_optimize_get_statistics': [z3types.Stats,[z3types.Context,z3types.Optimize]],
  'Z3_mk_ast_vector': [z3types.AstVector,[z3types.Context]],
  'Z3_ast_vector_inc_ref': [ref.types.void,[z3types.Context,z3types.AstVector]],
  'Z3_ast_vector_dec_ref': [ref.types.void,[z3types.Context,z3types.AstVector]],
  'Z3_ast_vector_size': [ref.types.uint,[z3types.Context,z3types.AstVector]],
  'Z3_ast_vector_get': [z3types.Ast,[z3types.Context,z3types.AstVector,ref.types.uint]],
  'Z3_ast_vector_set': [ref.types.void,[z3types.Context,z3types.AstVector,ref.types.uint,z3types.Ast]],
  'Z3_ast_vector_resize': [ref.types.void,[z3types.Context,z3types.AstVector,ref.types.uint]],
  'Z3_ast_vector_push': [ref.types.void,[z3types.Context,z3types.AstVector,z3types.Ast]],
  'Z3_ast_vector_translate': [z3types.AstVector,[z3types.Context,z3types.AstVector,z3types.Context]],
  'Z3_ast_vector_to_string': [ref.types.CString,[z3types.Context,z3types.AstVector]],
  'Z3_mk_ast_map': [z3types.AstMap,[z3types.Context]],
  'Z3_ast_map_inc_ref': [ref.types.void,[z3types.Context,z3types.AstMap]],
  'Z3_ast_map_dec_ref': [ref.types.void,[z3types.Context,z3types.AstMap]],
  'Z3_ast_map_contains': [ref.types.bool,[z3types.Context,z3types.AstMap,z3types.Ast]],
  'Z3_ast_map_find': [z3types.Ast,[z3types.Context,z3types.AstMap,z3types.Ast]],
  'Z3_ast_map_insert': [ref.types.void,[z3types.Context,z3types.AstMap,z3types.Ast,z3types.Ast]],
  'Z3_ast_map_erase': [ref.types.void,[z3types.Context,z3types.AstMap,z3types.Ast]],
  'Z3_ast_map_reset': [ref.types.void,[z3types.Context,z3types.AstMap]],
  'Z3_ast_map_size': [ref.types.uint,[z3types.Context,z3types.AstMap]],
  'Z3_ast_map_keys': [z3types.AstVector,[z3types.Context,z3types.AstMap]],
  'Z3_ast_map_to_string': [ref.types.CString,[z3types.Context,z3types.AstMap]],
  'Z3_mk_goal': [z3types.Goal,[z3types.Context,ref.types.bool,ref.types.bool,ref.types.bool]],
  'Z3_goal_inc_ref': [ref.types.void,[z3types.Context,z3types.Goal]],
  'Z3_goal_dec_ref': [ref.types.void,[z3types.Context,z3types.Goal]],
  'Z3_goal_precision': [ref.types.uint,[z3types.Context,z3types.Goal]],
  'Z3_goal_assert': [ref.types.void,[z3types.Context,z3types.Goal,z3types.Ast]],
  'Z3_goal_inconsistent': [ref.types.bool,[z3types.Context,z3types.Goal]],
  'Z3_goal_depth': [ref.types.uint,[z3types.Context,z3types.Goal]],
  'Z3_goal_reset': [ref.types.void,[z3types.Context,z3types.Goal]],
  'Z3_goal_size': [ref.types.uint,[z3types.Context,z3types.Goal]],
  'Z3_goal_formula': [z3types.Ast,[z3types.Context,z3types.Goal,ref.types.uint]],
  'Z3_goal_num_exprs': [ref.types.uint,[z3types.Context,z3types.Goal]],
  'Z3_goal_is_decided_sat': [ref.types.bool,[z3types.Context,z3types.Goal]],
  'Z3_goal_is_decided_unsat': [ref.types.bool,[z3types.Context,z3types.Goal]],
  'Z3_goal_translate': [z3types.Goal,[z3types.Context,z3types.Goal,z3types.Context]],
  'Z3_goal_to_string': [ref.types.CString,[z3types.Context,z3types.Goal]],
  'Z3_mk_tactic': [z3types.Tactic,[z3types.Context,ref.types.CString]],
  'Z3_tactic_inc_ref': [ref.types.void,[z3types.Context,z3types.Tactic]],
  'Z3_tactic_dec_ref': [ref.types.void,[z3types.Context,z3types.Tactic]],
  'Z3_mk_probe': [z3types.Probe,[z3types.Context,ref.types.CString]],
  'Z3_probe_inc_ref': [ref.types.void,[z3types.Context,z3types.Probe]],
  'Z3_probe_dec_ref': [ref.types.void,[z3types.Context,z3types.Probe]],
  'Z3_tactic_and_then': [z3types.Tactic,[z3types.Context,z3types.Tactic,z3types.Tactic]],
  'Z3_tactic_or_else': [z3types.Tactic,[z3types.Context,z3types.Tactic,z3types.Tactic]],
  'Z3_tactic_par_or': [z3types.Tactic,[z3types.Context,ref.types.uint,ArrayType(z3types.Tactic)]],
  'Z3_tactic_par_and_then': [z3types.Tactic,[z3types.Context,z3types.Tactic,z3types.Tactic]],
  'Z3_tactic_try_for': [z3types.Tactic,[z3types.Context,z3types.Tactic,ref.types.uint]],
  'Z3_tactic_when': [z3types.Tactic,[z3types.Context,z3types.Probe,z3types.Tactic]],
  'Z3_tactic_cond': [z3types.Tactic,[z3types.Context,z3types.Probe,z3types.Tactic,z3types.Tactic]],
  'Z3_tactic_repeat': [z3types.Tactic,[z3types.Context,z3types.Tactic,ref.types.uint]],
  'Z3_tactic_skip': [z3types.Tactic,[z3types.Context]],
  'Z3_tactic_fail': [z3types.Tactic,[z3types.Context]],
  'Z3_tactic_fail_if': [z3types.Tactic,[z3types.Context,z3types.Probe]],
  'Z3_tactic_fail_if_not_decided': [z3types.Tactic,[z3types.Context]],
  'Z3_tactic_using_params': [z3types.Tactic,[z3types.Context,z3types.Tactic,z3types.Params]],
  'Z3_probe_const': [z3types.Probe,[z3types.Context,ref.types.double]],
  'Z3_probe_lt': [z3types.Probe,[z3types.Context,z3types.Probe,z3types.Probe]],
  'Z3_probe_gt': [z3types.Probe,[z3types.Context,z3types.Probe,z3types.Probe]],
  'Z3_probe_le': [z3types.Probe,[z3types.Context,z3types.Probe,z3types.Probe]],
  'Z3_probe_ge': [z3types.Probe,[z3types.Context,z3types.Probe,z3types.Probe]],
  'Z3_probe_eq': [z3types.Probe,[z3types.Context,z3types.Probe,z3types.Probe]],
  'Z3_probe_and': [z3types.Probe,[z3types.Context,z3types.Probe,z3types.Probe]],
  'Z3_probe_or': [z3types.Probe,[z3types.Context,z3types.Probe,z3types.Probe]],
  'Z3_probe_not': [z3types.Probe,[z3types.Context,z3types.Probe]],
  'Z3_get_num_tactics': [ref.types.uint,[z3types.Context]],
  'Z3_get_tactic_name': [ref.types.CString,[z3types.Context,ref.types.uint]],
  'Z3_get_num_probes': [ref.types.uint,[z3types.Context]],
  'Z3_get_probe_name': [ref.types.CString,[z3types.Context,ref.types.uint]],
  'Z3_tactic_get_help': [ref.types.CString,[z3types.Context,z3types.Tactic]],
  'Z3_tactic_get_param_descrs': [z3types.ParamDescrs,[z3types.Context,z3types.Tactic]],
  'Z3_tactic_get_descr': [ref.types.CString,[z3types.Context,ref.types.CString]],
  'Z3_probe_get_descr': [ref.types.CString,[z3types.Context,ref.types.CString]],
  'Z3_probe_apply': [ref.types.double,[z3types.Context,z3types.Probe,z3types.Goal]],
  'Z3_tactic_apply': [z3types.ApplyResult,[z3types.Context,z3types.Tactic,z3types.Goal]],
  'Z3_tactic_apply_ex': [z3types.ApplyResult,[z3types.Context,z3types.Tactic,z3types.Goal,z3types.Params]],
  'Z3_apply_result_inc_ref': [ref.types.void,[z3types.Context,z3types.ApplyResult]],
  'Z3_apply_result_dec_ref': [ref.types.void,[z3types.Context,z3types.ApplyResult]],
  'Z3_apply_result_to_string': [ref.types.CString,[z3types.Context,z3types.ApplyResult]],
  'Z3_apply_result_get_num_subgoals': [ref.types.uint,[z3types.Context,z3types.ApplyResult]],
  'Z3_apply_result_get_subgoal': [z3types.Goal,[z3types.Context,z3types.ApplyResult,ref.types.uint]],
  'Z3_apply_result_convert_model': [z3types.Model,[z3types.Context,z3types.ApplyResult,ref.types.uint,z3types.Model]],
  'Z3_mk_solver': [z3types.Solver,[z3types.Context]],
  'Z3_mk_simple_solver': [z3types.Solver,[z3types.Context]],
  'Z3_mk_solver_for_logic': [z3types.Solver,[z3types.Context,z3types.Symbol]],
  'Z3_mk_solver_from_tactic': [z3types.Solver,[z3types.Context,z3types.Tactic]],
  'Z3_solver_get_help': [ref.types.CString,[z3types.Context,z3types.Solver]],
  'Z3_solver_get_param_descrs': [z3types.ParamDescrs,[z3types.Context,z3types.Solver]],
  'Z3_solver_set_params': [ref.types.void,[z3types.Context,z3types.Solver,z3types.Params]],
  'Z3_solver_inc_ref': [ref.types.void,[z3types.Context,z3types.Solver]],
  'Z3_solver_dec_ref': [ref.types.void,[z3types.Context,z3types.Solver]],
  'Z3_solver_push': [ref.types.void,[z3types.Context,z3types.Solver]],
  'Z3_solver_pop': [ref.types.void,[z3types.Context,z3types.Solver,ref.types.uint]],
  'Z3_solver_reset': [ref.types.void,[z3types.Context,z3types.Solver]],
  'Z3_solver_get_num_scopes': [ref.types.uint,[z3types.Context,z3types.Solver]],
  'Z3_solver_assert': [ref.types.void,[z3types.Context,z3types.Solver,z3types.Ast]],
  'Z3_solver_assert_and_track': [ref.types.void,[z3types.Context,z3types.Solver,z3types.Ast,z3types.Ast]],
  'Z3_solver_get_assertions': [z3types.AstVector,[z3types.Context,z3types.Solver]],
  'Z3_solver_check': [ref.types.int,[z3types.Context,z3types.Solver]],
  'Z3_solver_check_assumptions': [ref.types.int,[z3types.Context,z3types.Solver,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_solver_get_model': [z3types.Model,[z3types.Context,z3types.Solver]],
  'Z3_solver_get_proof': [z3types.Ast,[z3types.Context,z3types.Solver]],
  'Z3_solver_get_unsat_core': [z3types.AstVector,[z3types.Context,z3types.Solver]],
  'Z3_solver_get_reason_unknown': [ref.types.CString,[z3types.Context,z3types.Solver]],
  'Z3_solver_get_statistics': [z3types.Stats,[z3types.Context,z3types.Solver]],
  'Z3_solver_to_string': [ref.types.CString,[z3types.Context,z3types.Solver]],
  'Z3_stats_to_string': [ref.types.CString,[z3types.Context,z3types.Stats]],
  'Z3_stats_inc_ref': [ref.types.void,[z3types.Context,z3types.Stats]],
  'Z3_stats_dec_ref': [ref.types.void,[z3types.Context,z3types.Stats]],
  'Z3_stats_size': [ref.types.uint,[z3types.Context,z3types.Stats]],
  'Z3_stats_get_key': [ref.types.CString,[z3types.Context,z3types.Stats,ref.types.uint]],
  'Z3_stats_is_uint': [ref.types.bool,[z3types.Context,z3types.Stats,ref.types.uint]],
  'Z3_stats_is_double': [ref.types.bool,[z3types.Context,z3types.Stats,ref.types.uint]],
  'Z3_stats_get_uint_value': [ref.types.uint,[z3types.Context,z3types.Stats,ref.types.uint]],
  'Z3_stats_get_double_value': [ref.types.double,[z3types.Context,z3types.Stats,ref.types.uint]],
  'Z3_mk_injective_function': [z3types.FuncDecl,[z3types.Context,z3types.Symbol,ref.types.uint,ArrayType(z3types.Sort),z3types.Sort]],
  'Z3_set_logic': [ref.types.void,[z3types.Context,ref.types.CString]],
  'Z3_push': [ref.types.void,[z3types.Context]],
  'Z3_pop': [ref.types.void,[z3types.Context,ref.types.uint]],
  'Z3_get_num_scopes': [ref.types.uint,[z3types.Context]],
  'Z3_persist_ast': [ref.types.void,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_assert_cnstr': [ref.types.void,[z3types.Context,z3types.Ast]],
  'Z3_check_and_get_model': [ref.types.int,[z3types.Context,ref.refType(z3types.Model)]],
  'Z3_check': [ref.types.int,[z3types.Context]],
  'Z3_check_assumptions': [ref.types.int,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast),ref.refType(z3types.Model),ref.refType(z3types.Ast),ref.refType(ref.types.uint),ArrayType(z3types.Ast)]],
  'Z3_get_implied_equalities': [ref.types.int,[z3types.Context,z3types.Solver,ref.types.uint,ArrayType(z3types.Ast),ArrayType(ref.types.uint)]],
  'Z3_del_model': [ref.types.void,[z3types.Context,z3types.Model]],
  'Z3_soft_check_cancel': [ref.types.void,[z3types.Context]],
  'Z3_get_search_failure': [ref.types.uint,[z3types.Context]],
  'Z3_mk_label': [z3types.Ast,[z3types.Context,z3types.Symbol,ref.types.bool,z3types.Ast]],
  'Z3_get_relevant_labels': [z3types.Literals,[z3types.Context]],
  'Z3_get_relevant_literals': [z3types.Literals,[z3types.Context]],
  'Z3_get_guessed_literals': [z3types.Literals,[z3types.Context]],
  'Z3_del_literals': [ref.types.void,[z3types.Context,z3types.Literals]],
  'Z3_get_num_literals': [ref.types.uint,[z3types.Context,z3types.Literals]],
  'Z3_get_label_symbol': [z3types.Symbol,[z3types.Context,z3types.Literals,ref.types.uint]],
  'Z3_get_literal': [z3types.Ast,[z3types.Context,z3types.Literals,ref.types.uint]],
  'Z3_disable_literal': [ref.types.void,[z3types.Context,z3types.Literals,ref.types.uint]],
  'Z3_block_literals': [ref.types.void,[z3types.Context,z3types.Literals]],
  'Z3_get_model_num_constants': [ref.types.uint,[z3types.Context,z3types.Model]],
  'Z3_get_model_constant': [z3types.FuncDecl,[z3types.Context,z3types.Model,ref.types.uint]],
  'Z3_get_model_num_funcs': [ref.types.uint,[z3types.Context,z3types.Model]],
  'Z3_get_model_func_decl': [z3types.FuncDecl,[z3types.Context,z3types.Model,ref.types.uint]],
  'Z3_eval_func_decl': [ref.types.bool,[z3types.Context,z3types.Model,z3types.FuncDecl,ref.refType(z3types.Ast)]],
  'Z3_is_array_value': [ref.types.bool,[z3types.Context,z3types.Model,z3types.Ast,ref.refType(ref.types.uint)]],
  'Z3_get_array_value': [ref.types.void,[z3types.Context,z3types.Model,z3types.Ast,ref.types.uint,ArrayType(z3types.Ast),ArrayType(z3types.Ast),ref.refType(z3types.Ast)]],
  'Z3_get_model_func_else': [z3types.Ast,[z3types.Context,z3types.Model,ref.types.uint]],
  'Z3_get_model_func_num_entries': [ref.types.uint,[z3types.Context,z3types.Model,ref.types.uint]],
  'Z3_get_model_func_entry_num_args': [ref.types.uint,[z3types.Context,z3types.Model,ref.types.uint,ref.types.uint]],
  'Z3_get_model_func_entry_arg': [z3types.Ast,[z3types.Context,z3types.Model,ref.types.uint,ref.types.uint,ref.types.uint]],
  'Z3_get_model_func_entry_value': [z3types.Ast,[z3types.Context,z3types.Model,ref.types.uint,ref.types.uint]],
  'Z3_eval': [ref.types.bool,[z3types.Context,z3types.Model,z3types.Ast,ref.refType(z3types.Ast)]],
  'Z3_eval_decl': [ref.types.bool,[z3types.Context,z3types.Model,z3types.FuncDecl,ref.types.uint,ArrayType(z3types.Ast),ref.refType(z3types.Ast)]],
  'Z3_context_to_string': [ref.types.CString,[z3types.Context]],
  'Z3_statistics_to_string': [ref.types.CString,[z3types.Context]],
  'Z3_get_context_assignment': [z3types.Ast,[z3types.Context]],
  'Z3_algebraic_is_value': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_algebraic_is_pos': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_algebraic_is_neg': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_algebraic_is_zero': [ref.types.bool,[z3types.Context,z3types.Ast]],
  'Z3_algebraic_sign': [ref.types.int,[z3types.Context,z3types.Ast]],
  'Z3_algebraic_add': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_sub': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_mul': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_div': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_root': [z3types.Ast,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_algebraic_power': [z3types.Ast,[z3types.Context,z3types.Ast,ref.types.uint]],
  'Z3_algebraic_lt': [ref.types.bool,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_gt': [ref.types.bool,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_le': [ref.types.bool,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_ge': [ref.types.bool,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_eq': [ref.types.bool,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_neq': [ref.types.bool,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_algebraic_roots': [z3types.AstVector,[z3types.Context,z3types.Ast,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_algebraic_eval': [ref.types.int,[z3types.Context,z3types.Ast,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_polynomial_subresultants': [z3types.AstVector,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast]],
  'Z3_rcf_del': [ref.types.void,[z3types.Context,z3types.RcfNum]],
  'Z3_rcf_mk_rational': [z3types.RcfNum,[z3types.Context,ref.types.CString]],
  'Z3_rcf_mk_small_int': [z3types.RcfNum,[z3types.Context,ref.types.int]],
  'Z3_rcf_mk_pi': [z3types.RcfNum,[z3types.Context]],
  'Z3_rcf_mk_e': [z3types.RcfNum,[z3types.Context]],
  'Z3_rcf_mk_infinitesimal': [z3types.RcfNum,[z3types.Context]],
  'Z3_rcf_mk_roots': [ref.types.uint,[z3types.Context,ref.types.uint,ArrayType(z3types.RcfNum),ArrayType(z3types.RcfNum)]],
  'Z3_rcf_add': [z3types.RcfNum,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_sub': [z3types.RcfNum,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_mul': [z3types.RcfNum,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_div': [z3types.RcfNum,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_neg': [z3types.RcfNum,[z3types.Context,z3types.RcfNum]],
  'Z3_rcf_inv': [z3types.RcfNum,[z3types.Context,z3types.RcfNum]],
  'Z3_rcf_power': [z3types.RcfNum,[z3types.Context,z3types.RcfNum,ref.types.uint]],
  'Z3_rcf_lt': [ref.types.bool,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_gt': [ref.types.bool,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_le': [ref.types.bool,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_ge': [ref.types.bool,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_eq': [ref.types.bool,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_neq': [ref.types.bool,[z3types.Context,z3types.RcfNum,z3types.RcfNum]],
  'Z3_rcf_num_to_string': [ref.types.CString,[z3types.Context,z3types.RcfNum,ref.types.bool,ref.types.bool]],
  'Z3_rcf_num_to_decimal_string': [ref.types.CString,[z3types.Context,z3types.RcfNum,ref.types.uint]],
  'Z3_rcf_get_numerator_denominator': [ref.types.void,[z3types.Context,z3types.RcfNum,ref.refType(z3types.RcfNum),ref.refType(z3types.RcfNum)]],
  'Z3_mk_interpolant': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_interpolation_context': [z3types.Context,[z3types.Config]],
  'Z3_get_interpolant': [z3types.AstVector,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Params]],
  'Z3_compute_interpolant': [ref.types.int,[z3types.Context,z3types.Ast,z3types.Params,ref.refType(z3types.AstVector),ref.refType(z3types.Model)]],
  'Z3_interpolation_profile': [ref.types.CString,[z3types.Context]],
  'Z3_read_interpolation_problem': [ref.types.int,[z3types.Context,ref.refType(ref.types.uint),z3types.Ast,ref.types.uint,ref.types.CString,ref.refType(ref.types.CString),ref.refType(ref.types.uint),z3types.Ast]],
  'Z3_check_interpolant': [ref.types.int,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast),ArrayType(ref.types.uint),ArrayType(z3types.Ast),ref.refType(ref.types.CString),ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_write_interpolation_problem': [ref.types.void,[z3types.Context,ref.types.uint,ArrayType(z3types.Ast),ArrayType(ref.types.uint),ref.types.CString,ref.types.uint,ArrayType(z3types.Ast)]],
  'Z3_mk_fpa_rounding_mode_sort': [z3types.Sort,[z3types.Context]],
  'Z3_mk_fpa_round_nearest_ties_to_even': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_rne': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_round_nearest_ties_to_away': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_rna': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_round_toward_positive': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_rtp': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_round_toward_negative': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_rtn': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_round_toward_zero': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_rtz': [z3types.Ast,[z3types.Context]],
  'Z3_mk_fpa_sort': [z3types.Sort,[z3types.Context,ref.types.uint,ref.types.uint]],
  'Z3_mk_fpa_sort_half': [z3types.Sort,[z3types.Context]],
  'Z3_mk_fpa_sort_16': [z3types.Sort,[z3types.Context]],
  'Z3_mk_fpa_sort_single': [z3types.Sort,[z3types.Context]],
  'Z3_mk_fpa_sort_32': [z3types.Sort,[z3types.Context]],
  'Z3_mk_fpa_sort_double': [z3types.Sort,[z3types.Context]],
  'Z3_mk_fpa_sort_64': [z3types.Sort,[z3types.Context]],
  'Z3_mk_fpa_sort_quadruple': [z3types.Sort,[z3types.Context]],
  'Z3_mk_fpa_sort_128': [z3types.Sort,[z3types.Context]],
  'Z3_mk_fpa_nan': [z3types.Ast,[z3types.Context,z3types.Sort]],
  'Z3_mk_fpa_inf': [z3types.Ast,[z3types.Context,z3types.Sort,ref.types.bool]],
  'Z3_mk_fpa_zero': [z3types.Ast,[z3types.Context,z3types.Sort,ref.types.bool]],
  'Z3_mk_fpa_fp': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_numeral_float': [z3types.Ast,[z3types.Context,ref.types.float,z3types.Sort]],
  'Z3_mk_fpa_numeral_double': [z3types.Ast,[z3types.Context,ref.types.double,z3types.Sort]],
  'Z3_mk_fpa_numeral_int': [z3types.Ast,[z3types.Context,ref.types.int,z3types.Sort]],
  'Z3_mk_fpa_numeral_int_uint': [z3types.Ast,[z3types.Context,ref.types.bool,ref.types.int,ref.types.uint,z3types.Sort]],
  'Z3_mk_fpa_numeral_int64_uint64': [z3types.Ast,[z3types.Context,ref.types.bool,ref.types.int64,ref.types.uint64,z3types.Sort]],
  'Z3_mk_fpa_abs': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_neg': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_add': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_sub': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_mul': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_div': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_fma': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_sqrt': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_rem': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_round_to_integral': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_min': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_max': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_leq': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_lt': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_geq': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_gt': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_eq': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast]],
  'Z3_mk_fpa_is_normal': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_is_subnormal': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_is_zero': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_is_infinite': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_is_nan': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_is_negative': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_is_positive': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_to_fp_bv': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Sort]],
  'Z3_mk_fpa_to_fp_float': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Sort]],
  'Z3_mk_fpa_to_fp_real': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Sort]],
  'Z3_mk_fpa_to_fp_signed': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Sort]],
  'Z3_mk_fpa_to_fp_unsigned': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Sort]],
  'Z3_mk_fpa_to_ubv': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,ref.types.uint]],
  'Z3_mk_fpa_to_sbv': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,ref.types.uint]],
  'Z3_mk_fpa_to_real': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_fpa_get_ebits': [ref.types.uint,[z3types.Context,z3types.Sort]],
  'Z3_fpa_get_sbits': [ref.types.uint,[z3types.Context,z3types.Sort]],
  'Z3_fpa_get_numeral_sign': [ref.types.bool,[z3types.Context,z3types.Ast,ref.refType(ref.types.int)]],
  'Z3_fpa_get_numeral_significand_string': [ref.types.CString,[z3types.Context,z3types.Ast]],
  'Z3_fpa_get_numeral_significand_uint64': [ref.types.bool,[z3types.Context,z3types.Ast,ref.refType(ref.types.uint64)]],
  'Z3_fpa_get_numeral_exponent_string': [ref.types.CString,[z3types.Context,z3types.Ast]],
  'Z3_fpa_get_numeral_exponent_int64': [ref.types.bool,[z3types.Context,z3types.Ast,ref.refType(ref.types.int64)]],
  'Z3_mk_fpa_to_ieee_bv': [z3types.Ast,[z3types.Context,z3types.Ast]],
  'Z3_mk_fpa_to_fp_int_real': [z3types.Ast,[z3types.Context,z3types.Ast,z3types.Ast,z3types.Ast,z3types.Sort]]
});

exports.global_param_set = (function(s0, s1) {
  var r = lib.Z3_global_param_set(s0, s1);
  return r;
});

exports.global_param_reset_all = (function() {
  var r = lib.Z3_global_param_reset_all();
  return r;
});

exports.global_param_get = (function(s0, s1) {
  var r = lib.Z3_global_param_get(s0, s1);
  return r;
});

exports.mk_config = (function() {
  var r = lib.Z3_mk_config();
  return r;
});

exports.del_config = (function(con0) {
  var r = lib.Z3_del_config(con0);
  return r;
});

exports.set_param_value = (function(con0, s1, s2) {
  var r = lib.Z3_set_param_value(con0, s1, s2);
  return r;
});

exports.mk_context = (function(con0) {
  var r = lib.Z3_mk_context(con0);
  return r;
});

exports.mk_context_rc = (function(con0) {
  var r = lib.Z3_mk_context_rc(con0);
  return r;
});

exports.del_context = (function(con0) {
  var r = lib.Z3_del_context(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.inc_ref = (function(con0, ast1) {
  var r = lib.Z3_inc_ref(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.dec_ref = (function(con0, ast1) {
  var r = lib.Z3_dec_ref(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.update_param_value = (function(con0, s1, s2) {
  var r = lib.Z3_update_param_value(con0, s1, s2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.interrupt = (function(con0) {
  var r = lib.Z3_interrupt(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_params = (function(con0) {
  var r = lib.Z3_mk_params(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.params_inc_ref = (function(con0, par1) {
  var r = lib.Z3_params_inc_ref(con0, par1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.params_dec_ref = (function(con0, par1) {
  var r = lib.Z3_params_dec_ref(con0, par1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.params_set_bool = (function(con0, par1, y2, b3) {
  var r = lib.Z3_params_set_bool(con0, par1, y2, b3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.params_set_uint = (function(con0, par1, y2, u3) {
  var r = lib.Z3_params_set_uint(con0, par1, y2, u3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.params_set_double = (function(con0, par1, y2, d3) {
  var r = lib.Z3_params_set_double(con0, par1, y2, d3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.params_set_symbol = (function(con0, par1, y2, y3) {
  var r = lib.Z3_params_set_symbol(con0, par1, y2, y3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.params_to_string = (function(con0, par1) {
  var r = lib.Z3_params_to_string(con0, par1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.params_validate = (function(con0, par1, par2) {
  var r = lib.Z3_params_validate(con0, par1, par2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.param_descrs_inc_ref = (function(con0, par1) {
  var r = lib.Z3_param_descrs_inc_ref(con0, par1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.param_descrs_dec_ref = (function(con0, par1) {
  var r = lib.Z3_param_descrs_dec_ref(con0, par1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.param_descrs_get_kind = (function(con0, par1, y2) {
  var r = lib.Z3_param_descrs_get_kind(con0, par1, y2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.param_descrs_size = (function(con0, par1) {
  var r = lib.Z3_param_descrs_size(con0, par1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.param_descrs_get_name = (function(con0, par1, u2) {
  var r = lib.Z3_param_descrs_get_name(con0, par1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.param_descrs_to_string = (function(con0, par1) {
  var r = lib.Z3_param_descrs_to_string(con0, par1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_int_symbol = (function(con0, i1) {
  var r = lib.Z3_mk_int_symbol(con0, i1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_string_symbol = (function(con0, s1) {
  var r = lib.Z3_mk_string_symbol(con0, s1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_uninterpreted_sort = (function(con0, y1) {
  var r = lib.Z3_mk_uninterpreted_sort(con0, y1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bool_sort = (function(con0) {
  var r = lib.Z3_mk_bool_sort(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_int_sort = (function(con0) {
  var r = lib.Z3_mk_int_sort(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_real_sort = (function(con0) {
  var r = lib.Z3_mk_real_sort(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bv_sort = (function(con0, u1) {
  var r = lib.Z3_mk_bv_sort(con0, u1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_finite_domain_sort = (function(con0, y1, ul2) {
  var r = lib.Z3_mk_finite_domain_sort(con0, y1, ul2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_array_sort = (function(con0, sor1, sor2) {
  var r = lib.Z3_mk_array_sort(con0, sor1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_tuple_sort = (function(con0, y1, u2, y3, sor4, fun5, fun6) {
  var r = lib.Z3_mk_tuple_sort(con0, y1, u2, y3, sor4, fun5, fun6);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_enumeration_sort = (function(con0, y1, u2, y3, fun4, fun5) {
  var r = lib.Z3_mk_enumeration_sort(con0, y1, u2, y3, fun4, fun5);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_list_sort = (function(con0, y1, sor2, fun3, fun4, fun5, fun6, fun7, fun8) {
  var r = lib.Z3_mk_list_sort(con0, y1, sor2, fun3, fun4, fun5, fun6, fun7, fun8);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_constructor = (function(con0, y1, y2, u3, y4, sor5, u6) {
  var r = lib.Z3_mk_constructor(con0, y1, y2, u3, y4, sor5, u6);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.del_constructor = (function(con0, con1) {
  var r = lib.Z3_del_constructor(con0, con1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_datatype = (function(con0, y1, u2, con3) {
  var r = lib.Z3_mk_datatype(con0, y1, u2, con3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_constructor_list = (function(con0, u1, con2) {
  var r = lib.Z3_mk_constructor_list(con0, u1, con2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.del_constructor_list = (function(con0, con1) {
  var r = lib.Z3_del_constructor_list(con0, con1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_datatypes = (function(con0, u1, y2, sor3, con4) {
  var r = lib.Z3_mk_datatypes(con0, u1, y2, sor3, con4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.query_constructor = (function(con0, con1, u2, fun3, fun4, fun5) {
  var r = lib.Z3_query_constructor(con0, con1, u2, fun3, fun4, fun5);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_func_decl = (function(con0, y1, u2, sor3, sor4) {
  var r = lib.Z3_mk_func_decl(con0, y1, u2, sor3, sor4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_app = (function(con0, fun1, u2, ast3) {
  var r = lib.Z3_mk_app(con0, fun1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_const = (function(con0, y1, sor2) {
  var r = lib.Z3_mk_const(con0, y1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fresh_func_decl = (function(con0, s1, u2, sor3, sor4) {
  var r = lib.Z3_mk_fresh_func_decl(con0, s1, u2, sor3, sor4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fresh_const = (function(con0, s1, sor2) {
  var r = lib.Z3_mk_fresh_const(con0, s1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_true = (function(con0) {
  var r = lib.Z3_mk_true(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_false = (function(con0) {
  var r = lib.Z3_mk_false(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_eq = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_eq(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_distinct = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_distinct(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_not = (function(con0, ast1) {
  var r = lib.Z3_mk_not(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_ite = (function(con0, ast1, ast2, ast3) {
  var r = lib.Z3_mk_ite(con0, ast1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_iff = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_iff(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_implies = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_implies(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_xor = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_xor(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_and = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_and(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_or = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_or(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_add = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_add(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_mul = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_mul(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_sub = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_sub(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_unary_minus = (function(con0, ast1) {
  var r = lib.Z3_mk_unary_minus(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_div = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_div(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_mod = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_mod(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_rem = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_rem(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_power = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_power(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_lt = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_lt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_le = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_le(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_gt = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_gt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_ge = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_ge(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_int2real = (function(con0, ast1) {
  var r = lib.Z3_mk_int2real(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_real2int = (function(con0, ast1) {
  var r = lib.Z3_mk_real2int(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_is_int = (function(con0, ast1) {
  var r = lib.Z3_mk_is_int(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvnot = (function(con0, ast1) {
  var r = lib.Z3_mk_bvnot(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvredand = (function(con0, ast1) {
  var r = lib.Z3_mk_bvredand(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvredor = (function(con0, ast1) {
  var r = lib.Z3_mk_bvredor(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvand = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvand(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvor = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvor(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvxor = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvxor(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvnand = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvnand(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvnor = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvnor(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvxnor = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvxnor(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvneg = (function(con0, ast1) {
  var r = lib.Z3_mk_bvneg(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvadd = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvadd(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsub = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvsub(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvmul = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvmul(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvudiv = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvudiv(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsdiv = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvsdiv(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvurem = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvurem(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsrem = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvsrem(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsmod = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvsmod(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvult = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvult(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvslt = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvslt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvule = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvule(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsle = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvsle(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvuge = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvuge(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsge = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvsge(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvugt = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvugt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsgt = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvsgt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_concat = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_concat(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_extract = (function(con0, u1, u2, ast3) {
  var r = lib.Z3_mk_extract(con0, u1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_sign_ext = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_sign_ext(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_zero_ext = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_zero_ext(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_repeat = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_repeat(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvshl = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvshl(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvlshr = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvlshr(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvashr = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvashr(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_rotate_left = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_rotate_left(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_rotate_right = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_rotate_right(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_ext_rotate_left = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_ext_rotate_left(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_ext_rotate_right = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_ext_rotate_right(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_int2bv = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_int2bv(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bv2int = (function(con0, ast1, b2) {
  var r = lib.Z3_mk_bv2int(con0, ast1, b2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvadd_no_overflow = (function(con0, ast1, ast2, b3) {
  var r = lib.Z3_mk_bvadd_no_overflow(con0, ast1, ast2, b3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvadd_no_underflow = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvadd_no_underflow(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsub_no_overflow = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvsub_no_overflow(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsub_no_underflow = (function(con0, ast1, ast2, b3) {
  var r = lib.Z3_mk_bvsub_no_underflow(con0, ast1, ast2, b3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvsdiv_no_overflow = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvsdiv_no_overflow(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvneg_no_overflow = (function(con0, ast1) {
  var r = lib.Z3_mk_bvneg_no_overflow(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvmul_no_overflow = (function(con0, ast1, ast2, b3) {
  var r = lib.Z3_mk_bvmul_no_overflow(con0, ast1, ast2, b3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bvmul_no_underflow = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_bvmul_no_underflow(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_select = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_select(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_store = (function(con0, ast1, ast2, ast3) {
  var r = lib.Z3_mk_store(con0, ast1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_const_array = (function(con0, sor1, ast2) {
  var r = lib.Z3_mk_const_array(con0, sor1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_map = (function(con0, fun1, u2, ast3) {
  var r = lib.Z3_mk_map(con0, fun1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_array_default = (function(con0, ast1) {
  var r = lib.Z3_mk_array_default(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_set_sort = (function(con0, sor1) {
  var r = lib.Z3_mk_set_sort(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_empty_set = (function(con0, sor1) {
  var r = lib.Z3_mk_empty_set(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_full_set = (function(con0, sor1) {
  var r = lib.Z3_mk_full_set(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_set_add = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_set_add(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_set_del = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_set_del(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_set_union = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_set_union(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_set_intersect = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_set_intersect(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_set_difference = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_set_difference(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_set_complement = (function(con0, ast1) {
  var r = lib.Z3_mk_set_complement(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_set_member = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_set_member(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_set_subset = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_set_subset(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_numeral = (function(con0, s1, sor2) {
  var r = lib.Z3_mk_numeral(con0, s1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_real = (function(con0, i1, i2) {
  var r = lib.Z3_mk_real(con0, i1, i2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_int = (function(con0, i1, sor2) {
  var r = lib.Z3_mk_int(con0, i1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_unsigned_int = (function(con0, u1, sor2) {
  var r = lib.Z3_mk_unsigned_int(con0, u1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_int64 = (function(con0, l1, sor2) {
  var r = lib.Z3_mk_int64(con0, l1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_unsigned_int64 = (function(con0, ul1, sor2) {
  var r = lib.Z3_mk_unsigned_int64(con0, ul1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_pattern = (function(con0, u1, ast2) {
  var r = lib.Z3_mk_pattern(con0, u1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_bound = (function(con0, u1, sor2) {
  var r = lib.Z3_mk_bound(con0, u1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_forall = (function(con0, u1, u2, pat3, u4, sor5, y6, ast7) {
  var r = lib.Z3_mk_forall(con0, u1, u2, pat3, u4, sor5, y6, ast7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_exists = (function(con0, u1, u2, pat3, u4, sor5, y6, ast7) {
  var r = lib.Z3_mk_exists(con0, u1, u2, pat3, u4, sor5, y6, ast7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_quantifier = (function(con0, b1, u2, u3, pat4, u5, sor6, y7, ast8) {
  var r = lib.Z3_mk_quantifier(con0, b1, u2, u3, pat4, u5, sor6, y7, ast8);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_quantifier_ex = (function(con0, b1, u2, y3, y4, u5, pat6, u7, ast8, u9, sor10, y11, ast12) {
  var r = lib.Z3_mk_quantifier_ex(con0, b1, u2, y3, y4, u5, pat6, u7, ast8, u9, sor10, y11, ast12);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_forall_const = (function(con0, u1, u2, app3, u4, pat5, ast6) {
  var r = lib.Z3_mk_forall_const(con0, u1, u2, app3, u4, pat5, ast6);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_exists_const = (function(con0, u1, u2, app3, u4, pat5, ast6) {
  var r = lib.Z3_mk_exists_const(con0, u1, u2, app3, u4, pat5, ast6);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_quantifier_const = (function(con0, b1, u2, u3, app4, u5, pat6, ast7) {
  var r = lib.Z3_mk_quantifier_const(con0, b1, u2, u3, app4, u5, pat6, ast7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_quantifier_const_ex = (function(con0, b1, u2, y3, y4, u5, app6, u7, pat8, u9, ast10, ast11) {
  var r = lib.Z3_mk_quantifier_const_ex(con0, b1, u2, y3, y4, u5, app6, u7, pat8, u9, ast10, ast11);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_symbol_kind = (function(con0, y1) {
  var r = lib.Z3_get_symbol_kind(con0, y1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_symbol_int = (function(con0, y1) {
  var r = lib.Z3_get_symbol_int(con0, y1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_symbol_string = (function(con0, y1) {
  var r = lib.Z3_get_symbol_string(con0, y1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_sort_name = (function(con0, sor1) {
  var r = lib.Z3_get_sort_name(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_sort_id = (function(con0, sor1) {
  var r = lib.Z3_get_sort_id(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.sort_to_ast = (function(con0, sor1) {
  var r = lib.Z3_sort_to_ast(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_eq_sort = (function(con0, sor1, sor2) {
  var r = lib.Z3_is_eq_sort(con0, sor1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_sort_kind = (function(con0, sor1) {
  var r = lib.Z3_get_sort_kind(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_bv_sort_size = (function(con0, sor1) {
  var r = lib.Z3_get_bv_sort_size(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_finite_domain_sort_size = (function(con0, sor1, ul2) {
  var r = lib.Z3_get_finite_domain_sort_size(con0, sor1, ul2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_array_sort_domain = (function(con0, sor1) {
  var r = lib.Z3_get_array_sort_domain(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_array_sort_range = (function(con0, sor1) {
  var r = lib.Z3_get_array_sort_range(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_tuple_sort_mk_decl = (function(con0, sor1) {
  var r = lib.Z3_get_tuple_sort_mk_decl(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_tuple_sort_num_fields = (function(con0, sor1) {
  var r = lib.Z3_get_tuple_sort_num_fields(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_tuple_sort_field_decl = (function(con0, sor1, u2) {
  var r = lib.Z3_get_tuple_sort_field_decl(con0, sor1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_datatype_sort_num_constructors = (function(con0, sor1) {
  var r = lib.Z3_get_datatype_sort_num_constructors(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_datatype_sort_constructor = (function(con0, sor1, u2) {
  var r = lib.Z3_get_datatype_sort_constructor(con0, sor1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_datatype_sort_recognizer = (function(con0, sor1, u2) {
  var r = lib.Z3_get_datatype_sort_recognizer(con0, sor1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_datatype_sort_constructor_accessor = (function(con0, sor1, u2, u3) {
  var r = lib.Z3_get_datatype_sort_constructor_accessor(con0, sor1, u2, u3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.datatype_update_field = (function(con0, fun1, ast2, ast3) {
  var r = lib.Z3_datatype_update_field(con0, fun1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_relation_arity = (function(con0, sor1) {
  var r = lib.Z3_get_relation_arity(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_relation_column = (function(con0, sor1, u2) {
  var r = lib.Z3_get_relation_column(con0, sor1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_atmost = (function(con0, u1, ast2, u3) {
  var r = lib.Z3_mk_atmost(con0, u1, ast2, u3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_pble = (function(con0, u1, ast2, i3, i4) {
  var r = lib.Z3_mk_pble(con0, u1, ast2, i3, i4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_decl_to_ast = (function(con0, fun1) {
  var r = lib.Z3_func_decl_to_ast(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_eq_func_decl = (function(con0, fun1, fun2) {
  var r = lib.Z3_is_eq_func_decl(con0, fun1, fun2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_func_decl_id = (function(con0, fun1) {
  var r = lib.Z3_get_func_decl_id(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_name = (function(con0, fun1) {
  var r = lib.Z3_get_decl_name(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_kind = (function(con0, fun1) {
  var r = lib.Z3_get_decl_kind(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_domain_size = (function(con0, fun1) {
  var r = lib.Z3_get_domain_size(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_arity = (function(con0, fun1) {
  var r = lib.Z3_get_arity(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_domain = (function(con0, fun1, u2) {
  var r = lib.Z3_get_domain(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_range = (function(con0, fun1) {
  var r = lib.Z3_get_range(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_num_parameters = (function(con0, fun1) {
  var r = lib.Z3_get_decl_num_parameters(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_parameter_kind = (function(con0, fun1, u2) {
  var r = lib.Z3_get_decl_parameter_kind(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_int_parameter = (function(con0, fun1, u2) {
  var r = lib.Z3_get_decl_int_parameter(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_double_parameter = (function(con0, fun1, u2) {
  var r = lib.Z3_get_decl_double_parameter(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_symbol_parameter = (function(con0, fun1, u2) {
  var r = lib.Z3_get_decl_symbol_parameter(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_sort_parameter = (function(con0, fun1, u2) {
  var r = lib.Z3_get_decl_sort_parameter(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_ast_parameter = (function(con0, fun1, u2) {
  var r = lib.Z3_get_decl_ast_parameter(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_func_decl_parameter = (function(con0, fun1, u2) {
  var r = lib.Z3_get_decl_func_decl_parameter(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_decl_rational_parameter = (function(con0, fun1, u2) {
  var r = lib.Z3_get_decl_rational_parameter(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.app_to_ast = (function(con0, app1) {
  var r = lib.Z3_app_to_ast(con0, app1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_app_decl = (function(con0, app1) {
  var r = lib.Z3_get_app_decl(con0, app1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_app_num_args = (function(con0, app1) {
  var r = lib.Z3_get_app_num_args(con0, app1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_app_arg = (function(con0, app1, u2) {
  var r = lib.Z3_get_app_arg(con0, app1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_eq_ast = (function(con0, ast1, ast2) {
  var r = lib.Z3_is_eq_ast(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_ast_id = (function(con0, ast1) {
  var r = lib.Z3_get_ast_id(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_ast_hash = (function(con0, ast1) {
  var r = lib.Z3_get_ast_hash(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_sort = (function(con0, ast1) {
  var r = lib.Z3_get_sort(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_well_sorted = (function(con0, ast1) {
  var r = lib.Z3_is_well_sorted(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_bool_value = (function(con0, ast1) {
  var r = lib.Z3_get_bool_value(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_ast_kind = (function(con0, ast1) {
  var r = lib.Z3_get_ast_kind(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_app = (function(con0, ast1) {
  var r = lib.Z3_is_app(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_numeral_ast = (function(con0, ast1) {
  var r = lib.Z3_is_numeral_ast(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_algebraic_number = (function(con0, ast1) {
  var r = lib.Z3_is_algebraic_number(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.to_app = (function(con0, ast1) {
  var r = lib.Z3_to_app(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.to_func_decl = (function(con0, ast1) {
  var r = lib.Z3_to_func_decl(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_numeral_string = (function(con0, ast1) {
  var r = lib.Z3_get_numeral_string(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_numeral_decimal_string = (function(con0, ast1, u2) {
  var r = lib.Z3_get_numeral_decimal_string(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_numerator = (function(con0, ast1) {
  var r = lib.Z3_get_numerator(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_denominator = (function(con0, ast1) {
  var r = lib.Z3_get_denominator(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_numeral_small = (function(con0, ast1, l2, l3) {
  var r = lib.Z3_get_numeral_small(con0, ast1, l2, l3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_numeral_int = (function(con0, ast1, i2) {
  var r = lib.Z3_get_numeral_int(con0, ast1, i2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_numeral_uint = (function(con0, ast1, u2) {
  var r = lib.Z3_get_numeral_uint(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_numeral_uint64 = (function(con0, ast1, ul2) {
  var r = lib.Z3_get_numeral_uint64(con0, ast1, ul2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_numeral_int64 = (function(con0, ast1, l2) {
  var r = lib.Z3_get_numeral_int64(con0, ast1, l2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_numeral_rational_int64 = (function(con0, ast1, l2, l3) {
  var r = lib.Z3_get_numeral_rational_int64(con0, ast1, l2, l3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_algebraic_number_lower = (function(con0, ast1, u2) {
  var r = lib.Z3_get_algebraic_number_lower(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_algebraic_number_upper = (function(con0, ast1, u2) {
  var r = lib.Z3_get_algebraic_number_upper(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.pattern_to_ast = (function(con0, pat1) {
  var r = lib.Z3_pattern_to_ast(con0, pat1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_pattern_num_terms = (function(con0, pat1) {
  var r = lib.Z3_get_pattern_num_terms(con0, pat1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_pattern = (function(con0, pat1, u2) {
  var r = lib.Z3_get_pattern(con0, pat1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_index_value = (function(con0, ast1) {
  var r = lib.Z3_get_index_value(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_quantifier_forall = (function(con0, ast1) {
  var r = lib.Z3_is_quantifier_forall(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_quantifier_weight = (function(con0, ast1) {
  var r = lib.Z3_get_quantifier_weight(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_quantifier_num_patterns = (function(con0, ast1) {
  var r = lib.Z3_get_quantifier_num_patterns(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_quantifier_pattern_ast = (function(con0, ast1, u2) {
  var r = lib.Z3_get_quantifier_pattern_ast(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_quantifier_num_no_patterns = (function(con0, ast1) {
  var r = lib.Z3_get_quantifier_num_no_patterns(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_quantifier_no_pattern_ast = (function(con0, ast1, u2) {
  var r = lib.Z3_get_quantifier_no_pattern_ast(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_quantifier_num_bound = (function(con0, ast1) {
  var r = lib.Z3_get_quantifier_num_bound(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_quantifier_bound_name = (function(con0, ast1, u2) {
  var r = lib.Z3_get_quantifier_bound_name(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_quantifier_bound_sort = (function(con0, ast1, u2) {
  var r = lib.Z3_get_quantifier_bound_sort(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_quantifier_body = (function(con0, ast1) {
  var r = lib.Z3_get_quantifier_body(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.simplify = (function(con0, ast1) {
  var r = lib.Z3_simplify(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.simplify_ex = (function(con0, ast1, par2) {
  var r = lib.Z3_simplify_ex(con0, ast1, par2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.simplify_get_help = (function(con0) {
  var r = lib.Z3_simplify_get_help(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.simplify_get_param_descrs = (function(con0) {
  var r = lib.Z3_simplify_get_param_descrs(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.update_term = (function(con0, ast1, u2, ast3) {
  var r = lib.Z3_update_term(con0, ast1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.substitute = (function(con0, ast1, u2, ast3, ast4) {
  var r = lib.Z3_substitute(con0, ast1, u2, ast3, ast4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.substitute_vars = (function(con0, ast1, u2, ast3) {
  var r = lib.Z3_substitute_vars(con0, ast1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.translate = (function(con0, ast1, con2) {
  var r = lib.Z3_translate(con0, ast1, con2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_inc_ref = (function(con0, mod1) {
  var r = lib.Z3_model_inc_ref(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_dec_ref = (function(con0, mod1) {
  var r = lib.Z3_model_dec_ref(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_eval = (function(con0, mod1, ast2, b3, ast4) {
  var r = lib.Z3_model_eval(con0, mod1, ast2, b3, ast4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_get_const_interp = (function(con0, mod1, fun2) {
  var r = lib.Z3_model_get_const_interp(con0, mod1, fun2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_has_interp = (function(con0, mod1, fun2) {
  var r = lib.Z3_model_has_interp(con0, mod1, fun2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_get_func_interp = (function(con0, mod1, fun2) {
  var r = lib.Z3_model_get_func_interp(con0, mod1, fun2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_get_num_consts = (function(con0, mod1) {
  var r = lib.Z3_model_get_num_consts(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_get_const_decl = (function(con0, mod1, u2) {
  var r = lib.Z3_model_get_const_decl(con0, mod1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_get_num_funcs = (function(con0, mod1) {
  var r = lib.Z3_model_get_num_funcs(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_get_func_decl = (function(con0, mod1, u2) {
  var r = lib.Z3_model_get_func_decl(con0, mod1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_get_num_sorts = (function(con0, mod1) {
  var r = lib.Z3_model_get_num_sorts(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_get_sort = (function(con0, mod1, u2) {
  var r = lib.Z3_model_get_sort(con0, mod1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_get_sort_universe = (function(con0, mod1, sor2) {
  var r = lib.Z3_model_get_sort_universe(con0, mod1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_as_array = (function(con0, ast1) {
  var r = lib.Z3_is_as_array(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_as_array_func_decl = (function(con0, ast1) {
  var r = lib.Z3_get_as_array_func_decl(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_interp_inc_ref = (function(con0, fun1) {
  var r = lib.Z3_func_interp_inc_ref(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_interp_dec_ref = (function(con0, fun1) {
  var r = lib.Z3_func_interp_dec_ref(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_interp_get_num_entries = (function(con0, fun1) {
  var r = lib.Z3_func_interp_get_num_entries(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_interp_get_entry = (function(con0, fun1, u2) {
  var r = lib.Z3_func_interp_get_entry(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_interp_get_else = (function(con0, fun1) {
  var r = lib.Z3_func_interp_get_else(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_interp_get_arity = (function(con0, fun1) {
  var r = lib.Z3_func_interp_get_arity(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_entry_inc_ref = (function(con0, fun1) {
  var r = lib.Z3_func_entry_inc_ref(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_entry_dec_ref = (function(con0, fun1) {
  var r = lib.Z3_func_entry_dec_ref(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_entry_get_value = (function(con0, fun1) {
  var r = lib.Z3_func_entry_get_value(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_entry_get_num_args = (function(con0, fun1) {
  var r = lib.Z3_func_entry_get_num_args(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_entry_get_arg = (function(con0, fun1, u2) {
  var r = lib.Z3_func_entry_get_arg(con0, fun1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.toggle_warning_messages = (function(b0) {
  var r = lib.Z3_toggle_warning_messages(b0);
  return r;
});

exports.set_ast_print_mode = (function(con0, pm1) {
  var r = lib.Z3_set_ast_print_mode(con0, pm1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_to_string = (function(con0, ast1) {
  var r = lib.Z3_ast_to_string(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.pattern_to_string = (function(con0, pat1) {
  var r = lib.Z3_pattern_to_string(con0, pat1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.sort_to_string = (function(con0, sor1) {
  var r = lib.Z3_sort_to_string(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.func_decl_to_string = (function(con0, fun1) {
  var r = lib.Z3_func_decl_to_string(con0, fun1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.model_to_string = (function(con0, mod1) {
  var r = lib.Z3_model_to_string(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.benchmark_to_smtlib_string = (function(con0, s1, s2, s3, s4, u5, ast6, ast7) {
  var r = lib.Z3_benchmark_to_smtlib_string(con0, s1, s2, s3, s4, u5, ast6, ast7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.parse_smtlib2_string = (function(con0, s1, u2, y3, sor4, u5, y6, fun7) {
  var r = lib.Z3_parse_smtlib2_string(con0, s1, u2, y3, sor4, u5, y6, fun7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.parse_smtlib2_file = (function(con0, s1, u2, y3, sor4, u5, y6, fun7) {
  var r = lib.Z3_parse_smtlib2_file(con0, s1, u2, y3, sor4, u5, y6, fun7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.parse_smtlib_string = (function(con0, s1, u2, y3, sor4, u5, y6, fun7) {
  var r = lib.Z3_parse_smtlib_string(con0, s1, u2, y3, sor4, u5, y6, fun7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.parse_smtlib_file = (function(con0, s1, u2, y3, sor4, u5, y6, fun7) {
  var r = lib.Z3_parse_smtlib_file(con0, s1, u2, y3, sor4, u5, y6, fun7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_smtlib_num_formulas = (function(con0) {
  var r = lib.Z3_get_smtlib_num_formulas(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_smtlib_formula = (function(con0, u1) {
  var r = lib.Z3_get_smtlib_formula(con0, u1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_smtlib_num_assumptions = (function(con0) {
  var r = lib.Z3_get_smtlib_num_assumptions(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_smtlib_assumption = (function(con0, u1) {
  var r = lib.Z3_get_smtlib_assumption(con0, u1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_smtlib_num_decls = (function(con0) {
  var r = lib.Z3_get_smtlib_num_decls(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_smtlib_decl = (function(con0, u1) {
  var r = lib.Z3_get_smtlib_decl(con0, u1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_smtlib_num_sorts = (function(con0) {
  var r = lib.Z3_get_smtlib_num_sorts(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_smtlib_sort = (function(con0, u1) {
  var r = lib.Z3_get_smtlib_sort(con0, u1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_smtlib_error = (function(con0) {
  var r = lib.Z3_get_smtlib_error(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_error_code = (function(con0) {
  var r = lib.Z3_get_error_code(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.set_error = (function(con0, er1) {
  var r = lib.Z3_set_error(con0, er1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_error_msg = (function(er0) {
  var r = lib.Z3_get_error_msg(er0);
  return r;
});

exports.get_error_msg_ex = (function(con0, er1) {
  var r = lib.Z3_get_error_msg_ex(con0, er1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_version = (function(u0, u1, u2, u3) {
  var r = lib.Z3_get_version(u0, u1, u2, u3);
  return r;
});

exports.enable_trace = (function(s0) {
  var r = lib.Z3_enable_trace(s0);
  return r;
});

exports.disable_trace = (function(s0) {
  var r = lib.Z3_disable_trace(s0);
  return r;
});

exports.reset_memory = (function() {
  var r = lib.Z3_reset_memory();
  return r;
});

exports.finalize_memory = (function() {
  var r = lib.Z3_finalize_memory();
  return r;
});

exports.mk_fixedpoint = (function(con0) {
  var r = lib.Z3_mk_fixedpoint(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_inc_ref = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_inc_ref(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_dec_ref = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_dec_ref(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_add_rule = (function(con0, fix1, ast2, y3) {
  var r = lib.Z3_fixedpoint_add_rule(con0, fix1, ast2, y3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_add_fact = (function(con0, fix1, fun2, u3, u4) {
  var r = lib.Z3_fixedpoint_add_fact(con0, fix1, fun2, u3, u4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_assert = (function(con0, fix1, ast2) {
  var r = lib.Z3_fixedpoint_assert(con0, fix1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_query = (function(con0, fix1, ast2) {
  var r = lib.Z3_fixedpoint_query(con0, fix1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_query_relations = (function(con0, fix1, u2, fun3) {
  var r = lib.Z3_fixedpoint_query_relations(con0, fix1, u2, fun3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_get_answer = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_get_answer(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_get_reason_unknown = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_get_reason_unknown(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_update_rule = (function(con0, fix1, ast2, y3) {
  var r = lib.Z3_fixedpoint_update_rule(con0, fix1, ast2, y3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_get_num_levels = (function(con0, fix1, fun2) {
  var r = lib.Z3_fixedpoint_get_num_levels(con0, fix1, fun2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_get_cover_delta = (function(con0, fix1, i2, fun3) {
  var r = lib.Z3_fixedpoint_get_cover_delta(con0, fix1, i2, fun3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_add_cover = (function(con0, fix1, i2, fun3, ast4) {
  var r = lib.Z3_fixedpoint_add_cover(con0, fix1, i2, fun3, ast4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_get_statistics = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_get_statistics(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_register_relation = (function(con0, fix1, fun2) {
  var r = lib.Z3_fixedpoint_register_relation(con0, fix1, fun2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_set_predicate_representation = (function(con0, fix1, fun2, u3, y4) {
  var r = lib.Z3_fixedpoint_set_predicate_representation(con0, fix1, fun2, u3, y4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_get_rules = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_get_rules(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_get_assertions = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_get_assertions(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_set_params = (function(con0, fix1, par2) {
  var r = lib.Z3_fixedpoint_set_params(con0, fix1, par2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_get_help = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_get_help(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_get_param_descrs = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_get_param_descrs(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_to_string = (function(con0, fix1, u2, ast3) {
  var r = lib.Z3_fixedpoint_to_string(con0, fix1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_from_string = (function(con0, fix1, s2) {
  var r = lib.Z3_fixedpoint_from_string(con0, fix1, s2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_from_file = (function(con0, fix1, s2) {
  var r = lib.Z3_fixedpoint_from_file(con0, fix1, s2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_push = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_push(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fixedpoint_pop = (function(con0, fix1) {
  var r = lib.Z3_fixedpoint_pop(con0, fix1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_optimize = (function(con0) {
  var r = lib.Z3_mk_optimize(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_inc_ref = (function(con0, opt1) {
  var r = lib.Z3_optimize_inc_ref(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_dec_ref = (function(con0, opt1) {
  var r = lib.Z3_optimize_dec_ref(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_assert = (function(con0, opt1, ast2) {
  var r = lib.Z3_optimize_assert(con0, opt1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_assert_soft = (function(con0, opt1, ast2, s3, y4) {
  var r = lib.Z3_optimize_assert_soft(con0, opt1, ast2, s3, y4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_maximize = (function(con0, opt1, ast2) {
  var r = lib.Z3_optimize_maximize(con0, opt1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_minimize = (function(con0, opt1, ast2) {
  var r = lib.Z3_optimize_minimize(con0, opt1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_push = (function(con0, opt1) {
  var r = lib.Z3_optimize_push(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_pop = (function(con0, opt1) {
  var r = lib.Z3_optimize_pop(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_check = (function(con0, opt1) {
  var r = lib.Z3_optimize_check(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_get_reason_unknown = (function(con0, opt1) {
  var r = lib.Z3_optimize_get_reason_unknown(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_get_model = (function(con0, opt1) {
  var r = lib.Z3_optimize_get_model(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_set_params = (function(con0, opt1, par2) {
  var r = lib.Z3_optimize_set_params(con0, opt1, par2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_get_param_descrs = (function(con0, opt1) {
  var r = lib.Z3_optimize_get_param_descrs(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_get_lower = (function(con0, opt1, u2) {
  var r = lib.Z3_optimize_get_lower(con0, opt1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_get_upper = (function(con0, opt1, u2) {
  var r = lib.Z3_optimize_get_upper(con0, opt1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_to_string = (function(con0, opt1) {
  var r = lib.Z3_optimize_to_string(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_get_help = (function(con0, opt1) {
  var r = lib.Z3_optimize_get_help(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.optimize_get_statistics = (function(con0, opt1) {
  var r = lib.Z3_optimize_get_statistics(con0, opt1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_ast_vector = (function(con0) {
  var r = lib.Z3_mk_ast_vector(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_vector_inc_ref = (function(con0, ast1) {
  var r = lib.Z3_ast_vector_inc_ref(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_vector_dec_ref = (function(con0, ast1) {
  var r = lib.Z3_ast_vector_dec_ref(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_vector_size = (function(con0, ast1) {
  var r = lib.Z3_ast_vector_size(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_vector_get = (function(con0, ast1, u2) {
  var r = lib.Z3_ast_vector_get(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_vector_set = (function(con0, ast1, u2, ast3) {
  var r = lib.Z3_ast_vector_set(con0, ast1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_vector_resize = (function(con0, ast1, u2) {
  var r = lib.Z3_ast_vector_resize(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_vector_push = (function(con0, ast1, ast2) {
  var r = lib.Z3_ast_vector_push(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_vector_translate = (function(con0, ast1, con2) {
  var r = lib.Z3_ast_vector_translate(con0, ast1, con2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_vector_to_string = (function(con0, ast1) {
  var r = lib.Z3_ast_vector_to_string(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_ast_map = (function(con0) {
  var r = lib.Z3_mk_ast_map(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_inc_ref = (function(con0, ast1) {
  var r = lib.Z3_ast_map_inc_ref(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_dec_ref = (function(con0, ast1) {
  var r = lib.Z3_ast_map_dec_ref(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_contains = (function(con0, ast1, ast2) {
  var r = lib.Z3_ast_map_contains(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_find = (function(con0, ast1, ast2) {
  var r = lib.Z3_ast_map_find(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_insert = (function(con0, ast1, ast2, ast3) {
  var r = lib.Z3_ast_map_insert(con0, ast1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_erase = (function(con0, ast1, ast2) {
  var r = lib.Z3_ast_map_erase(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_reset = (function(con0, ast1) {
  var r = lib.Z3_ast_map_reset(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_size = (function(con0, ast1) {
  var r = lib.Z3_ast_map_size(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_keys = (function(con0, ast1) {
  var r = lib.Z3_ast_map_keys(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.ast_map_to_string = (function(con0, ast1) {
  var r = lib.Z3_ast_map_to_string(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_goal = (function(con0, b1, b2, b3) {
  var r = lib.Z3_mk_goal(con0, b1, b2, b3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_inc_ref = (function(con0, goa1) {
  var r = lib.Z3_goal_inc_ref(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_dec_ref = (function(con0, goa1) {
  var r = lib.Z3_goal_dec_ref(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_precision = (function(con0, goa1) {
  var r = lib.Z3_goal_precision(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_assert = (function(con0, goa1, ast2) {
  var r = lib.Z3_goal_assert(con0, goa1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_inconsistent = (function(con0, goa1) {
  var r = lib.Z3_goal_inconsistent(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_depth = (function(con0, goa1) {
  var r = lib.Z3_goal_depth(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_reset = (function(con0, goa1) {
  var r = lib.Z3_goal_reset(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_size = (function(con0, goa1) {
  var r = lib.Z3_goal_size(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_formula = (function(con0, goa1, u2) {
  var r = lib.Z3_goal_formula(con0, goa1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_num_exprs = (function(con0, goa1) {
  var r = lib.Z3_goal_num_exprs(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_is_decided_sat = (function(con0, goa1) {
  var r = lib.Z3_goal_is_decided_sat(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_is_decided_unsat = (function(con0, goa1) {
  var r = lib.Z3_goal_is_decided_unsat(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_translate = (function(con0, goa1, con2) {
  var r = lib.Z3_goal_translate(con0, goa1, con2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.goal_to_string = (function(con0, goa1) {
  var r = lib.Z3_goal_to_string(con0, goa1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_tactic = (function(con0, s1) {
  var r = lib.Z3_mk_tactic(con0, s1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_inc_ref = (function(con0, tac1) {
  var r = lib.Z3_tactic_inc_ref(con0, tac1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_dec_ref = (function(con0, tac1) {
  var r = lib.Z3_tactic_dec_ref(con0, tac1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_probe = (function(con0, s1) {
  var r = lib.Z3_mk_probe(con0, s1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_inc_ref = (function(con0, pro1) {
  var r = lib.Z3_probe_inc_ref(con0, pro1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_dec_ref = (function(con0, pro1) {
  var r = lib.Z3_probe_dec_ref(con0, pro1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_and_then = (function(con0, tac1, tac2) {
  var r = lib.Z3_tactic_and_then(con0, tac1, tac2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_or_else = (function(con0, tac1, tac2) {
  var r = lib.Z3_tactic_or_else(con0, tac1, tac2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_par_or = (function(con0, u1, tac2) {
  var r = lib.Z3_tactic_par_or(con0, u1, tac2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_par_and_then = (function(con0, tac1, tac2) {
  var r = lib.Z3_tactic_par_and_then(con0, tac1, tac2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_try_for = (function(con0, tac1, u2) {
  var r = lib.Z3_tactic_try_for(con0, tac1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_when = (function(con0, pro1, tac2) {
  var r = lib.Z3_tactic_when(con0, pro1, tac2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_cond = (function(con0, pro1, tac2, tac3) {
  var r = lib.Z3_tactic_cond(con0, pro1, tac2, tac3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_repeat = (function(con0, tac1, u2) {
  var r = lib.Z3_tactic_repeat(con0, tac1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_skip = (function(con0) {
  var r = lib.Z3_tactic_skip(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_fail = (function(con0) {
  var r = lib.Z3_tactic_fail(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_fail_if = (function(con0, pro1) {
  var r = lib.Z3_tactic_fail_if(con0, pro1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_fail_if_not_decided = (function(con0) {
  var r = lib.Z3_tactic_fail_if_not_decided(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_using_params = (function(con0, tac1, par2) {
  var r = lib.Z3_tactic_using_params(con0, tac1, par2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_const = (function(con0, d1) {
  var r = lib.Z3_probe_const(con0, d1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_lt = (function(con0, pro1, pro2) {
  var r = lib.Z3_probe_lt(con0, pro1, pro2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_gt = (function(con0, pro1, pro2) {
  var r = lib.Z3_probe_gt(con0, pro1, pro2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_le = (function(con0, pro1, pro2) {
  var r = lib.Z3_probe_le(con0, pro1, pro2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_ge = (function(con0, pro1, pro2) {
  var r = lib.Z3_probe_ge(con0, pro1, pro2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_eq = (function(con0, pro1, pro2) {
  var r = lib.Z3_probe_eq(con0, pro1, pro2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_and = (function(con0, pro1, pro2) {
  var r = lib.Z3_probe_and(con0, pro1, pro2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_or = (function(con0, pro1, pro2) {
  var r = lib.Z3_probe_or(con0, pro1, pro2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_not = (function(con0, pro1) {
  var r = lib.Z3_probe_not(con0, pro1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_num_tactics = (function(con0) {
  var r = lib.Z3_get_num_tactics(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_tactic_name = (function(con0, u1) {
  var r = lib.Z3_get_tactic_name(con0, u1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_num_probes = (function(con0) {
  var r = lib.Z3_get_num_probes(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_probe_name = (function(con0, u1) {
  var r = lib.Z3_get_probe_name(con0, u1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_get_help = (function(con0, tac1) {
  var r = lib.Z3_tactic_get_help(con0, tac1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_get_param_descrs = (function(con0, tac1) {
  var r = lib.Z3_tactic_get_param_descrs(con0, tac1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_get_descr = (function(con0, s1) {
  var r = lib.Z3_tactic_get_descr(con0, s1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_get_descr = (function(con0, s1) {
  var r = lib.Z3_probe_get_descr(con0, s1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.probe_apply = (function(con0, pro1, goa2) {
  var r = lib.Z3_probe_apply(con0, pro1, goa2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_apply = (function(con0, tac1, goa2) {
  var r = lib.Z3_tactic_apply(con0, tac1, goa2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.tactic_apply_ex = (function(con0, tac1, goa2, par3) {
  var r = lib.Z3_tactic_apply_ex(con0, tac1, goa2, par3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.apply_result_inc_ref = (function(con0, app1) {
  var r = lib.Z3_apply_result_inc_ref(con0, app1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.apply_result_dec_ref = (function(con0, app1) {
  var r = lib.Z3_apply_result_dec_ref(con0, app1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.apply_result_to_string = (function(con0, app1) {
  var r = lib.Z3_apply_result_to_string(con0, app1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.apply_result_get_num_subgoals = (function(con0, app1) {
  var r = lib.Z3_apply_result_get_num_subgoals(con0, app1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.apply_result_get_subgoal = (function(con0, app1, u2) {
  var r = lib.Z3_apply_result_get_subgoal(con0, app1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.apply_result_convert_model = (function(con0, app1, u2, mod3) {
  var r = lib.Z3_apply_result_convert_model(con0, app1, u2, mod3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_solver = (function(con0) {
  var r = lib.Z3_mk_solver(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_simple_solver = (function(con0) {
  var r = lib.Z3_mk_simple_solver(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_solver_for_logic = (function(con0, y1) {
  var r = lib.Z3_mk_solver_for_logic(con0, y1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_solver_from_tactic = (function(con0, tac1) {
  var r = lib.Z3_mk_solver_from_tactic(con0, tac1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_get_help = (function(con0, sol1) {
  var r = lib.Z3_solver_get_help(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_get_param_descrs = (function(con0, sol1) {
  var r = lib.Z3_solver_get_param_descrs(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_set_params = (function(con0, sol1, par2) {
  var r = lib.Z3_solver_set_params(con0, sol1, par2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_inc_ref = (function(con0, sol1) {
  var r = lib.Z3_solver_inc_ref(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_dec_ref = (function(con0, sol1) {
  var r = lib.Z3_solver_dec_ref(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_push = (function(con0, sol1) {
  var r = lib.Z3_solver_push(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_pop = (function(con0, sol1, u2) {
  var r = lib.Z3_solver_pop(con0, sol1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_reset = (function(con0, sol1) {
  var r = lib.Z3_solver_reset(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_get_num_scopes = (function(con0, sol1) {
  var r = lib.Z3_solver_get_num_scopes(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_assert = (function(con0, sol1, ast2) {
  var r = lib.Z3_solver_assert(con0, sol1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_assert_and_track = (function(con0, sol1, ast2, ast3) {
  var r = lib.Z3_solver_assert_and_track(con0, sol1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_get_assertions = (function(con0, sol1) {
  var r = lib.Z3_solver_get_assertions(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_check = (function(con0, sol1) {
  var r = lib.Z3_solver_check(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_check_assumptions = (function(con0, sol1, u2, ast3) {
  var r = lib.Z3_solver_check_assumptions(con0, sol1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_get_model = (function(con0, sol1) {
  var r = lib.Z3_solver_get_model(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_get_proof = (function(con0, sol1) {
  var r = lib.Z3_solver_get_proof(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_get_unsat_core = (function(con0, sol1) {
  var r = lib.Z3_solver_get_unsat_core(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_get_reason_unknown = (function(con0, sol1) {
  var r = lib.Z3_solver_get_reason_unknown(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_get_statistics = (function(con0, sol1) {
  var r = lib.Z3_solver_get_statistics(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.solver_to_string = (function(con0, sol1) {
  var r = lib.Z3_solver_to_string(con0, sol1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.stats_to_string = (function(con0, sta1) {
  var r = lib.Z3_stats_to_string(con0, sta1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.stats_inc_ref = (function(con0, sta1) {
  var r = lib.Z3_stats_inc_ref(con0, sta1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.stats_dec_ref = (function(con0, sta1) {
  var r = lib.Z3_stats_dec_ref(con0, sta1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.stats_size = (function(con0, sta1) {
  var r = lib.Z3_stats_size(con0, sta1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.stats_get_key = (function(con0, sta1, u2) {
  var r = lib.Z3_stats_get_key(con0, sta1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.stats_is_uint = (function(con0, sta1, u2) {
  var r = lib.Z3_stats_is_uint(con0, sta1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.stats_is_double = (function(con0, sta1, u2) {
  var r = lib.Z3_stats_is_double(con0, sta1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.stats_get_uint_value = (function(con0, sta1, u2) {
  var r = lib.Z3_stats_get_uint_value(con0, sta1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.stats_get_double_value = (function(con0, sta1, u2) {
  var r = lib.Z3_stats_get_double_value(con0, sta1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_injective_function = (function(con0, y1, u2, sor3, sor4) {
  var r = lib.Z3_mk_injective_function(con0, y1, u2, sor3, sor4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.set_logic = (function(con0, s1) {
  var r = lib.Z3_set_logic(con0, s1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.push = (function(con0) {
  var r = lib.Z3_push(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.pop = (function(con0, u1) {
  var r = lib.Z3_pop(con0, u1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_num_scopes = (function(con0) {
  var r = lib.Z3_get_num_scopes(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.persist_ast = (function(con0, ast1, u2) {
  var r = lib.Z3_persist_ast(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.assert_cnstr = (function(con0, ast1) {
  var r = lib.Z3_assert_cnstr(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.check_and_get_model = (function(con0, mod1) {
  var r = lib.Z3_check_and_get_model(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.check = (function(con0) {
  var r = lib.Z3_check(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.check_assumptions = (function(con0, u1, ast2, mod3, ast4, u5, ast6) {
  var r = lib.Z3_check_assumptions(con0, u1, ast2, mod3, ast4, u5, ast6);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_implied_equalities = (function(con0, sol1, u2, ast3, u4) {
  var r = lib.Z3_get_implied_equalities(con0, sol1, u2, ast3, u4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.del_model = (function(con0, mod1) {
  var r = lib.Z3_del_model(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.soft_check_cancel = (function(con0) {
  var r = lib.Z3_soft_check_cancel(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_search_failure = (function(con0) {
  var r = lib.Z3_get_search_failure(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_label = (function(con0, y1, b2, ast3) {
  var r = lib.Z3_mk_label(con0, y1, b2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_relevant_labels = (function(con0) {
  var r = lib.Z3_get_relevant_labels(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_relevant_literals = (function(con0) {
  var r = lib.Z3_get_relevant_literals(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_guessed_literals = (function(con0) {
  var r = lib.Z3_get_guessed_literals(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.del_literals = (function(con0, lit1) {
  var r = lib.Z3_del_literals(con0, lit1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_num_literals = (function(con0, lit1) {
  var r = lib.Z3_get_num_literals(con0, lit1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_label_symbol = (function(con0, lit1, u2) {
  var r = lib.Z3_get_label_symbol(con0, lit1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_literal = (function(con0, lit1, u2) {
  var r = lib.Z3_get_literal(con0, lit1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.disable_literal = (function(con0, lit1, u2) {
  var r = lib.Z3_disable_literal(con0, lit1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.block_literals = (function(con0, lit1) {
  var r = lib.Z3_block_literals(con0, lit1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_model_num_constants = (function(con0, mod1) {
  var r = lib.Z3_get_model_num_constants(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_model_constant = (function(con0, mod1, u2) {
  var r = lib.Z3_get_model_constant(con0, mod1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_model_num_funcs = (function(con0, mod1) {
  var r = lib.Z3_get_model_num_funcs(con0, mod1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_model_func_decl = (function(con0, mod1, u2) {
  var r = lib.Z3_get_model_func_decl(con0, mod1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.eval_func_decl = (function(con0, mod1, fun2, ast3) {
  var r = lib.Z3_eval_func_decl(con0, mod1, fun2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.is_array_value = (function(con0, mod1, ast2, u3) {
  var r = lib.Z3_is_array_value(con0, mod1, ast2, u3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_array_value = (function(con0, mod1, ast2, u3, ast4, ast5, ast6) {
  var r = lib.Z3_get_array_value(con0, mod1, ast2, u3, ast4, ast5, ast6);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_model_func_else = (function(con0, mod1, u2) {
  var r = lib.Z3_get_model_func_else(con0, mod1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_model_func_num_entries = (function(con0, mod1, u2) {
  var r = lib.Z3_get_model_func_num_entries(con0, mod1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_model_func_entry_num_args = (function(con0, mod1, u2, u3) {
  var r = lib.Z3_get_model_func_entry_num_args(con0, mod1, u2, u3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_model_func_entry_arg = (function(con0, mod1, u2, u3, u4) {
  var r = lib.Z3_get_model_func_entry_arg(con0, mod1, u2, u3, u4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_model_func_entry_value = (function(con0, mod1, u2, u3) {
  var r = lib.Z3_get_model_func_entry_value(con0, mod1, u2, u3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.eval = (function(con0, mod1, ast2, ast3) {
  var r = lib.Z3_eval(con0, mod1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.eval_decl = (function(con0, mod1, fun2, u3, ast4, ast5) {
  var r = lib.Z3_eval_decl(con0, mod1, fun2, u3, ast4, ast5);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.context_to_string = (function(con0) {
  var r = lib.Z3_context_to_string(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.statistics_to_string = (function(con0) {
  var r = lib.Z3_statistics_to_string(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.get_context_assignment = (function(con0) {
  var r = lib.Z3_get_context_assignment(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_is_value = (function(con0, ast1) {
  var r = lib.Z3_algebraic_is_value(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_is_pos = (function(con0, ast1) {
  var r = lib.Z3_algebraic_is_pos(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_is_neg = (function(con0, ast1) {
  var r = lib.Z3_algebraic_is_neg(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_is_zero = (function(con0, ast1) {
  var r = lib.Z3_algebraic_is_zero(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_sign = (function(con0, ast1) {
  var r = lib.Z3_algebraic_sign(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_add = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_add(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_sub = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_sub(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_mul = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_mul(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_div = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_div(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_root = (function(con0, ast1, u2) {
  var r = lib.Z3_algebraic_root(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_power = (function(con0, ast1, u2) {
  var r = lib.Z3_algebraic_power(con0, ast1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_lt = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_lt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_gt = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_gt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_le = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_le(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_ge = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_ge(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_eq = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_eq(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_neq = (function(con0, ast1, ast2) {
  var r = lib.Z3_algebraic_neq(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_roots = (function(con0, ast1, u2, ast3) {
  var r = lib.Z3_algebraic_roots(con0, ast1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.algebraic_eval = (function(con0, ast1, u2, ast3) {
  var r = lib.Z3_algebraic_eval(con0, ast1, u2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.polynomial_subresultants = (function(con0, ast1, ast2, ast3) {
  var r = lib.Z3_polynomial_subresultants(con0, ast1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_del = (function(con0, rcf1) {
  var r = lib.Z3_rcf_del(con0, rcf1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_mk_rational = (function(con0, s1) {
  var r = lib.Z3_rcf_mk_rational(con0, s1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_mk_small_int = (function(con0, i1) {
  var r = lib.Z3_rcf_mk_small_int(con0, i1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_mk_pi = (function(con0) {
  var r = lib.Z3_rcf_mk_pi(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_mk_e = (function(con0) {
  var r = lib.Z3_rcf_mk_e(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_mk_infinitesimal = (function(con0) {
  var r = lib.Z3_rcf_mk_infinitesimal(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_mk_roots = (function(con0, u1, rcf2, rcf3) {
  var r = lib.Z3_rcf_mk_roots(con0, u1, rcf2, rcf3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_add = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_add(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_sub = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_sub(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_mul = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_mul(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_div = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_div(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_neg = (function(con0, rcf1) {
  var r = lib.Z3_rcf_neg(con0, rcf1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_inv = (function(con0, rcf1) {
  var r = lib.Z3_rcf_inv(con0, rcf1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_power = (function(con0, rcf1, u2) {
  var r = lib.Z3_rcf_power(con0, rcf1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_lt = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_lt(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_gt = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_gt(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_le = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_le(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_ge = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_ge(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_eq = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_eq(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_neq = (function(con0, rcf1, rcf2) {
  var r = lib.Z3_rcf_neq(con0, rcf1, rcf2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_num_to_string = (function(con0, rcf1, b2, b3) {
  var r = lib.Z3_rcf_num_to_string(con0, rcf1, b2, b3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_num_to_decimal_string = (function(con0, rcf1, u2) {
  var r = lib.Z3_rcf_num_to_decimal_string(con0, rcf1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.rcf_get_numerator_denominator = (function(con0, rcf1, rcf2, rcf3) {
  var r = lib.Z3_rcf_get_numerator_denominator(con0, rcf1, rcf2, rcf3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_interpolant = (function(con0, ast1) {
  var r = lib.Z3_mk_interpolant(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_interpolation_context = (function(con0) {
  var r = lib.Z3_mk_interpolation_context(con0);
  return r;
});

exports.get_interpolant = (function(con0, ast1, ast2, par3) {
  var r = lib.Z3_get_interpolant(con0, ast1, ast2, par3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.compute_interpolant = (function(con0, ast1, par2, ast3, mod4) {
  var r = lib.Z3_compute_interpolant(con0, ast1, par2, ast3, mod4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.interpolation_profile = (function(con0) {
  var r = lib.Z3_interpolation_profile(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.read_interpolation_problem = (function(con0, u1, ast2, u3, s4, s5, u6, ast7) {
  var r = lib.Z3_read_interpolation_problem(con0, u1, ast2, u3, s4, s5, u6, ast7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.check_interpolant = (function(con0, u1, ast2, u3, ast4, s5, u6, ast7) {
  var r = lib.Z3_check_interpolant(con0, u1, ast2, u3, ast4, s5, u6, ast7);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.write_interpolation_problem = (function(con0, u1, ast2, u3, s4, u5, ast6) {
  var r = lib.Z3_write_interpolation_problem(con0, u1, ast2, u3, s4, u5, ast6);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_rounding_mode_sort = (function(con0) {
  var r = lib.Z3_mk_fpa_rounding_mode_sort(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_round_nearest_ties_to_even = (function(con0) {
  var r = lib.Z3_mk_fpa_round_nearest_ties_to_even(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_rne = (function(con0) {
  var r = lib.Z3_mk_fpa_rne(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_round_nearest_ties_to_away = (function(con0) {
  var r = lib.Z3_mk_fpa_round_nearest_ties_to_away(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_rna = (function(con0) {
  var r = lib.Z3_mk_fpa_rna(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_round_toward_positive = (function(con0) {
  var r = lib.Z3_mk_fpa_round_toward_positive(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_rtp = (function(con0) {
  var r = lib.Z3_mk_fpa_rtp(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_round_toward_negative = (function(con0) {
  var r = lib.Z3_mk_fpa_round_toward_negative(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_rtn = (function(con0) {
  var r = lib.Z3_mk_fpa_rtn(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_round_toward_zero = (function(con0) {
  var r = lib.Z3_mk_fpa_round_toward_zero(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_rtz = (function(con0) {
  var r = lib.Z3_mk_fpa_rtz(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sort = (function(con0, u1, u2) {
  var r = lib.Z3_mk_fpa_sort(con0, u1, u2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sort_half = (function(con0) {
  var r = lib.Z3_mk_fpa_sort_half(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sort_16 = (function(con0) {
  var r = lib.Z3_mk_fpa_sort_16(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sort_single = (function(con0) {
  var r = lib.Z3_mk_fpa_sort_single(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sort_32 = (function(con0) {
  var r = lib.Z3_mk_fpa_sort_32(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sort_double = (function(con0) {
  var r = lib.Z3_mk_fpa_sort_double(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sort_64 = (function(con0) {
  var r = lib.Z3_mk_fpa_sort_64(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sort_quadruple = (function(con0) {
  var r = lib.Z3_mk_fpa_sort_quadruple(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sort_128 = (function(con0) {
  var r = lib.Z3_mk_fpa_sort_128(con0);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_nan = (function(con0, sor1) {
  var r = lib.Z3_mk_fpa_nan(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_inf = (function(con0, sor1, b2) {
  var r = lib.Z3_mk_fpa_inf(con0, sor1, b2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_zero = (function(con0, sor1, b2) {
  var r = lib.Z3_mk_fpa_zero(con0, sor1, b2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_fp = (function(con0, ast1, ast2, ast3) {
  var r = lib.Z3_mk_fpa_fp(con0, ast1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_numeral_float = (function(con0, f1, sor2) {
  var r = lib.Z3_mk_fpa_numeral_float(con0, f1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_numeral_double = (function(con0, d1, sor2) {
  var r = lib.Z3_mk_fpa_numeral_double(con0, d1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_numeral_int = (function(con0, i1, sor2) {
  var r = lib.Z3_mk_fpa_numeral_int(con0, i1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_numeral_int_uint = (function(con0, b1, i2, u3, sor4) {
  var r = lib.Z3_mk_fpa_numeral_int_uint(con0, b1, i2, u3, sor4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_numeral_int64_uint64 = (function(con0, b1, l2, ul3, sor4) {
  var r = lib.Z3_mk_fpa_numeral_int64_uint64(con0, b1, l2, ul3, sor4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_abs = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_abs(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_neg = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_neg(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_add = (function(con0, ast1, ast2, ast3) {
  var r = lib.Z3_mk_fpa_add(con0, ast1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sub = (function(con0, ast1, ast2, ast3) {
  var r = lib.Z3_mk_fpa_sub(con0, ast1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_mul = (function(con0, ast1, ast2, ast3) {
  var r = lib.Z3_mk_fpa_mul(con0, ast1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_div = (function(con0, ast1, ast2, ast3) {
  var r = lib.Z3_mk_fpa_div(con0, ast1, ast2, ast3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_fma = (function(con0, ast1, ast2, ast3, ast4) {
  var r = lib.Z3_mk_fpa_fma(con0, ast1, ast2, ast3, ast4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_sqrt = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_sqrt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_rem = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_rem(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_round_to_integral = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_round_to_integral(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_min = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_min(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_max = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_max(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_leq = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_leq(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_lt = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_lt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_geq = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_geq(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_gt = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_gt(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_eq = (function(con0, ast1, ast2) {
  var r = lib.Z3_mk_fpa_eq(con0, ast1, ast2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_is_normal = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_is_normal(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_is_subnormal = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_is_subnormal(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_is_zero = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_is_zero(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_is_infinite = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_is_infinite(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_is_nan = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_is_nan(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_is_negative = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_is_negative(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_is_positive = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_is_positive(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_fp_bv = (function(con0, ast1, sor2) {
  var r = lib.Z3_mk_fpa_to_fp_bv(con0, ast1, sor2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_fp_float = (function(con0, ast1, ast2, sor3) {
  var r = lib.Z3_mk_fpa_to_fp_float(con0, ast1, ast2, sor3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_fp_real = (function(con0, ast1, ast2, sor3) {
  var r = lib.Z3_mk_fpa_to_fp_real(con0, ast1, ast2, sor3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_fp_signed = (function(con0, ast1, ast2, sor3) {
  var r = lib.Z3_mk_fpa_to_fp_signed(con0, ast1, ast2, sor3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_fp_unsigned = (function(con0, ast1, ast2, sor3) {
  var r = lib.Z3_mk_fpa_to_fp_unsigned(con0, ast1, ast2, sor3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_ubv = (function(con0, ast1, ast2, u3) {
  var r = lib.Z3_mk_fpa_to_ubv(con0, ast1, ast2, u3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_sbv = (function(con0, ast1, ast2, u3) {
  var r = lib.Z3_mk_fpa_to_sbv(con0, ast1, ast2, u3);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_real = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_to_real(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fpa_get_ebits = (function(con0, sor1) {
  var r = lib.Z3_fpa_get_ebits(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fpa_get_sbits = (function(con0, sor1) {
  var r = lib.Z3_fpa_get_sbits(con0, sor1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fpa_get_numeral_sign = (function(con0, ast1, i2) {
  var r = lib.Z3_fpa_get_numeral_sign(con0, ast1, i2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fpa_get_numeral_significand_string = (function(con0, ast1) {
  var r = lib.Z3_fpa_get_numeral_significand_string(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fpa_get_numeral_significand_uint64 = (function(con0, ast1, ul2) {
  var r = lib.Z3_fpa_get_numeral_significand_uint64(con0, ast1, ul2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fpa_get_numeral_exponent_string = (function(con0, ast1) {
  var r = lib.Z3_fpa_get_numeral_exponent_string(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.fpa_get_numeral_exponent_int64 = (function(con0, ast1, l2) {
  var r = lib.Z3_fpa_get_numeral_exponent_int64(con0, ast1, l2);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_ieee_bv = (function(con0, ast1) {
  var r = lib.Z3_mk_fpa_to_ieee_bv(con0, ast1);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

exports.mk_fpa_to_fp_int_real = (function(con0, ast1, ast2, ast3, sor4) {
  var r = lib.Z3_mk_fpa_to_fp_int_real(con0, ast1, ast2, ast3, sor4);
  var err = lib.Z3.get_error_code(con0);
  if (err != z3consts.OK) {
   throw new Z3Exception(lib.Z3_get_error_msg_ex(con0, err));
  }
  return r;
});

