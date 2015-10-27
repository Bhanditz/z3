
// Automatically generated file
var ref = require('ref');
var ArrayType = require('ref-array');
var ffi = require('ffi');

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
exports.Z3Exception =Z3Exception;
var Symbol = exports.Symbol = ref.refType(ref.types.void);
var SymbolArray = exports.SymbolArray = ArrayType(Symbol);
var ErrorHandlerFptr = exports.ErrorHandlerFptr = ffi.Function(ref.types.void,[ref.refType(ref.types.void),ref.types.uint]);
  var Config = exports.Config = ref.refType(ref.types.void);
var ConfigArray = exports.ConfigArray = ArrayType(Config);
var Context = exports.Context = ref.refType(ref.types.void);
var ContextArray = exports.ContextArray = ArrayType(Context);
var Ast = exports.Ast = ref.refType(ref.types.void);
var AstArray = exports.AstArray = ArrayType(Ast);
var App = exports.App = ref.refType(ref.types.void);
var AppArray = exports.AppArray = ArrayType(App);
var Sort = exports.Sort = ref.refType(ref.types.void);
var SortArray = exports.SortArray = ArrayType(Sort);
var FuncDecl = exports.FuncDecl = ref.refType(ref.types.void);
var FuncDeclArray = exports.FuncDeclArray = ArrayType(FuncDecl);
var Pattern = exports.Pattern = ref.refType(ref.types.void);
var PatternArray = exports.PatternArray = ArrayType(Pattern);
var Model = exports.Model = ref.refType(ref.types.void);
var ModelArray = exports.ModelArray = ArrayType(Model);
var Literals = exports.Literals = ref.refType(ref.types.void);
var LiteralsArray = exports.LiteralsArray = ArrayType(Literals);
var Constructor = exports.Constructor = ref.refType(ref.types.void);
var ConstructorArray = exports.ConstructorArray = ArrayType(Constructor);
var ConstructorList = exports.ConstructorList = ref.refType(ref.types.void);
var ConstructorListArray = exports.ConstructorListArray = ArrayType(ConstructorList);
var Theory = exports.Theory = ref.refType(ref.types.void);
var TheoryArray = exports.TheoryArray = ArrayType(Theory);
var TheoryData = exports.TheoryData = ref.refType(ref.types.void);
var TheoryDataArray = exports.TheoryDataArray = ArrayType(TheoryData);
var Solver = exports.Solver = ref.refType(ref.types.void);
var SolverArray = exports.SolverArray = ArrayType(Solver);
var Goal = exports.Goal = ref.refType(ref.types.void);
var GoalArray = exports.GoalArray = ArrayType(Goal);
var Tactic = exports.Tactic = ref.refType(ref.types.void);
var TacticArray = exports.TacticArray = ArrayType(Tactic);
var Params = exports.Params = ref.refType(ref.types.void);
var ParamsArray = exports.ParamsArray = ArrayType(Params);
var Probe = exports.Probe = ref.refType(ref.types.void);
var ProbeArray = exports.ProbeArray = ArrayType(Probe);
var Stats = exports.Stats = ref.refType(ref.types.void);
var StatsArray = exports.StatsArray = ArrayType(Stats);
var AstVector = exports.AstVector = ref.refType(ref.types.void);
var AstVectorArray = exports.AstVectorArray = ArrayType(AstVector);
var AstMap = exports.AstMap = ref.refType(ref.types.void);
var AstMapArray = exports.AstMapArray = ArrayType(AstMap);
var ApplyResult = exports.ApplyResult = ref.refType(ref.types.void);
var ApplyResultArray = exports.ApplyResultArray = ArrayType(ApplyResult);
var FuncInterp = exports.FuncInterp = ref.refType(ref.types.void);
var FuncInterpArray = exports.FuncInterpArray = ArrayType(FuncInterp);
var FuncEntry = exports.FuncEntry = ref.refType(ref.types.void);
var FuncEntryArray = exports.FuncEntryArray = ArrayType(FuncEntry);
var Fixedpoint = exports.Fixedpoint = ref.refType(ref.types.void);
var FixedpointArray = exports.FixedpointArray = ArrayType(Fixedpoint);
var Optimize = exports.Optimize = ref.refType(ref.types.void);
var OptimizeArray = exports.OptimizeArray = ArrayType(Optimize);
var ParamDescrs = exports.ParamDescrs = ref.refType(ref.types.void);
var ParamDescrsArray = exports.ParamDescrsArray = ArrayType(ParamDescrs);
var RcfNum = exports.RcfNum = ref.refType(ref.types.void);
var RcfNumArray = exports.RcfNumArray = ArrayType(RcfNum);

