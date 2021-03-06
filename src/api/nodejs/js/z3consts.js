// Automatically generated file

// enum Z3_lbool
exports.L_FALSE = -1;
exports.L_UNDEF = 0;
exports.L_TRUE = 1;

// enum Z3_symbol_kind
exports.INT_SYMBOL = 0;
exports.STRING_SYMBOL = 1;

// enum Z3_parameter_kind
exports.PARAMETER_INT = 0;
exports.PARAMETER_DOUBLE = 1;
exports.PARAMETER_RATIONAL = 2;
exports.PARAMETER_SYMBOL = 3;
exports.PARAMETER_SORT = 4;
exports.PARAMETER_AST = 5;
exports.PARAMETER_FUNC_DECL = 6;

// enum Z3_sort_kind
exports.UNINTERPRETED_SORT = 0;
exports.BOOL_SORT = 1;
exports.INT_SORT = 2;
exports.REAL_SORT = 3;
exports.BV_SORT = 4;
exports.ARRAY_SORT = 5;
exports.DATATYPE_SORT = 6;
exports.RELATION_SORT = 7;
exports.FINITE_DOMAIN_SORT = 8;
exports.FLOATING_POINT_SORT = 9;
exports.ROUNDING_MODE_SORT = 10;
exports.UNKNOWN_SORT = 1000;

// enum Z3_ast_kind
exports.NUMERAL_AST = 0;
exports.APP_AST = 1;
exports.VAR_AST = 2;
exports.QUANTIFIER_AST = 3;
exports.SORT_AST = 4;
exports.FUNC_DECL_AST = 5;
exports.UNKNOWN_AST = 1000;

// enum Z3_decl_kind
exports.OP_TRUE = 256;
exports.OP_FALSE = 257;
exports.OP_EQ = 258;
exports.OP_DISTINCT = 259;
exports.OP_ITE = 260;
exports.OP_AND = 261;
exports.OP_OR = 262;
exports.OP_IFF = 263;
exports.OP_XOR = 264;
exports.OP_NOT = 265;
exports.OP_IMPLIES = 266;
exports.OP_OEQ = 267;
exports.OP_INTERP = 268;
exports.OP_ANUM = 512;
exports.OP_AGNUM = 513;
exports.OP_LE = 514;
exports.OP_GE = 515;
exports.OP_LT = 516;
exports.OP_GT = 517;
exports.OP_ADD = 518;
exports.OP_SUB = 519;
exports.OP_UMINUS = 520;
exports.OP_MUL = 521;
exports.OP_DIV = 522;
exports.OP_IDIV = 523;
exports.OP_REM = 524;
exports.OP_MOD = 525;
exports.OP_TO_REAL = 526;
exports.OP_TO_INT = 527;
exports.OP_IS_INT = 528;
exports.OP_POWER = 529;
exports.OP_STORE = 768;
exports.OP_SELECT = 769;
exports.OP_CONST_ARRAY = 770;
exports.OP_ARRAY_MAP = 771;
exports.OP_ARRAY_DEFAULT = 772;
exports.OP_SET_UNION = 773;
exports.OP_SET_INTERSECT = 774;
exports.OP_SET_DIFFERENCE = 775;
exports.OP_SET_COMPLEMENT = 776;
exports.OP_SET_SUBSET = 777;
exports.OP_AS_ARRAY = 778;
exports.OP_BNUM = 1024;
exports.OP_BIT1 = 1025;
exports.OP_BIT0 = 1026;
exports.OP_BNEG = 1027;
exports.OP_BADD = 1028;
exports.OP_BSUB = 1029;
exports.OP_BMUL = 1030;
exports.OP_BSDIV = 1031;
exports.OP_BUDIV = 1032;
exports.OP_BSREM = 1033;
exports.OP_BUREM = 1034;
exports.OP_BSMOD = 1035;
exports.OP_BSDIV0 = 1036;
exports.OP_BUDIV0 = 1037;
exports.OP_BSREM0 = 1038;
exports.OP_BUREM0 = 1039;
exports.OP_BSMOD0 = 1040;
exports.OP_ULEQ = 1041;
exports.OP_SLEQ = 1042;
exports.OP_UGEQ = 1043;
exports.OP_SGEQ = 1044;
exports.OP_ULT = 1045;
exports.OP_SLT = 1046;
exports.OP_UGT = 1047;
exports.OP_SGT = 1048;
exports.OP_BAND = 1049;
exports.OP_BOR = 1050;
exports.OP_BNOT = 1051;
exports.OP_BXOR = 1052;
exports.OP_BNAND = 1053;
exports.OP_BNOR = 1054;
exports.OP_BXNOR = 1055;
exports.OP_CONCAT = 1056;
exports.OP_SIGN_EXT = 1057;
exports.OP_ZERO_EXT = 1058;
exports.OP_EXTRACT = 1059;
exports.OP_REPEAT = 1060;
exports.OP_BREDOR = 1061;
exports.OP_BREDAND = 1062;
exports.OP_BCOMP = 1063;
exports.OP_BSHL = 1064;
exports.OP_BLSHR = 1065;
exports.OP_BASHR = 1066;
exports.OP_ROTATE_LEFT = 1067;
exports.OP_ROTATE_RIGHT = 1068;
exports.OP_EXT_ROTATE_LEFT = 1069;
exports.OP_EXT_ROTATE_RIGHT = 1070;
exports.OP_INT2BV = 1071;
exports.OP_BV2INT = 1072;
exports.OP_CARRY = 1073;
exports.OP_XOR3 = 1074;
exports.OP_PR_UNDEF = 1280;
exports.OP_PR_TRUE = 1281;
exports.OP_PR_ASSERTED = 1282;
exports.OP_PR_GOAL = 1283;
exports.OP_PR_MODUS_PONENS = 1284;
exports.OP_PR_REFLEXIVITY = 1285;
exports.OP_PR_SYMMETRY = 1286;
exports.OP_PR_TRANSITIVITY = 1287;
exports.OP_PR_TRANSITIVITY_STAR = 1288;
exports.OP_PR_MONOTONICITY = 1289;
exports.OP_PR_QUANT_INTRO = 1290;
exports.OP_PR_DISTRIBUTIVITY = 1291;
exports.OP_PR_AND_ELIM = 1292;
exports.OP_PR_NOT_OR_ELIM = 1293;
exports.OP_PR_REWRITE = 1294;
exports.OP_PR_REWRITE_STAR = 1295;
exports.OP_PR_PULL_QUANT = 1296;
exports.OP_PR_PULL_QUANT_STAR = 1297;
exports.OP_PR_PUSH_QUANT = 1298;
exports.OP_PR_ELIM_UNUSED_VARS = 1299;
exports.OP_PR_DER = 1300;
exports.OP_PR_QUANT_INST = 1301;
exports.OP_PR_HYPOTHESIS = 1302;
exports.OP_PR_LEMMA = 1303;
exports.OP_PR_UNIT_RESOLUTION = 1304;
exports.OP_PR_IFF_TRUE = 1305;
exports.OP_PR_IFF_FALSE = 1306;
exports.OP_PR_COMMUTATIVITY = 1307;
exports.OP_PR_DEF_AXIOM = 1308;
exports.OP_PR_DEF_INTRO = 1309;
exports.OP_PR_APPLY_DEF = 1310;
exports.OP_PR_IFF_OEQ = 1311;
exports.OP_PR_NNF_POS = 1312;
exports.OP_PR_NNF_NEG = 1313;
exports.OP_PR_NNF_STAR = 1314;
exports.OP_PR_CNF_STAR = 1315;
exports.OP_PR_SKOLEMIZE = 1316;
exports.OP_PR_MODUS_PONENS_OEQ = 1317;
exports.OP_PR_TH_LEMMA = 1318;
exports.OP_PR_HYPER_RESOLVE = 1319;
exports.OP_RA_STORE = 1536;
exports.OP_RA_EMPTY = 1537;
exports.OP_RA_IS_EMPTY = 1538;
exports.OP_RA_JOIN = 1539;
exports.OP_RA_UNION = 1540;
exports.OP_RA_WIDEN = 1541;
exports.OP_RA_PROJECT = 1542;
exports.OP_RA_FILTER = 1543;
exports.OP_RA_NEGATION_FILTER = 1544;
exports.OP_RA_RENAME = 1545;
exports.OP_RA_COMPLEMENT = 1546;
exports.OP_RA_SELECT = 1547;
exports.OP_RA_CLONE = 1548;
exports.OP_FD_LT = 1549;
exports.OP_LABEL = 1792;
exports.OP_LABEL_LIT = 1793;
exports.OP_DT_CONSTRUCTOR = 2048;
exports.OP_DT_RECOGNISER = 2049;
exports.OP_DT_ACCESSOR = 2050;
exports.OP_DT_UPDATE_FIELD = 2051;
exports.OP_PB_AT_MOST = 2304;
exports.OP_PB_LE = 2305;
exports.OP_PB_GE = 2306;
exports.OP_FPA_RM_NEAREST_TIES_TO_EVEN = 2307;
exports.OP_FPA_RM_NEAREST_TIES_TO_AWAY = 2308;
exports.OP_FPA_RM_TOWARD_POSITIVE = 2309;
exports.OP_FPA_RM_TOWARD_NEGATIVE = 2310;
exports.OP_FPA_RM_TOWARD_ZERO = 2311;
exports.OP_FPA_NUM = 2312;
exports.OP_FPA_PLUS_INF = 2313;
exports.OP_FPA_MINUS_INF = 2314;
exports.OP_FPA_NAN = 2315;
exports.OP_FPA_PLUS_ZERO = 2316;
exports.OP_FPA_MINUS_ZERO = 2317;
exports.OP_FPA_ADD = 2318;
exports.OP_FPA_SUB = 2319;
exports.OP_FPA_NEG = 2320;
exports.OP_FPA_MUL = 2321;
exports.OP_FPA_DIV = 2322;
exports.OP_FPA_REM = 2323;
exports.OP_FPA_ABS = 2324;
exports.OP_FPA_MIN = 2325;
exports.OP_FPA_MAX = 2326;
exports.OP_FPA_FMA = 2327;
exports.OP_FPA_SQRT = 2328;
exports.OP_FPA_ROUND_TO_INTEGRAL = 2329;
exports.OP_FPA_EQ = 2330;
exports.OP_FPA_LT = 2331;
exports.OP_FPA_GT = 2332;
exports.OP_FPA_LE = 2333;
exports.OP_FPA_GE = 2334;
exports.OP_FPA_IS_NAN = 2335;
exports.OP_FPA_IS_INF = 2336;
exports.OP_FPA_IS_ZERO = 2337;
exports.OP_FPA_IS_NORMAL = 2338;
exports.OP_FPA_IS_SUBNORMAL = 2339;
exports.OP_FPA_IS_NEGATIVE = 2340;
exports.OP_FPA_IS_POSITIVE = 2341;
exports.OP_FPA_FP = 2342;
exports.OP_FPA_TO_FP = 2343;
exports.OP_FPA_TO_FP_UNSIGNED = 2344;
exports.OP_FPA_TO_UBV = 2345;
exports.OP_FPA_TO_SBV = 2346;
exports.OP_FPA_TO_REAL = 2347;
exports.OP_FPA_TO_IEEE_BV = 2348;
exports.OP_UNINTERPRETED = 2349;

// enum Z3_param_kind
exports.PK_UINT = 0;
exports.PK_BOOL = 1;
exports.PK_DOUBLE = 2;
exports.PK_SYMBOL = 3;
exports.PK_STRING = 4;
exports.PK_OTHER = 5;
exports.PK_INVALID = 6;

// enum Z3_search_failure
exports.NO_FAILURE = 0;
exports.UNKNOWN = 1;
exports.TIMEOUT = 2;
exports.MEMOUT_WATERMARK = 3;
exports.CANCELED = 4;
exports.NUM_CONFLICTS = 5;
exports.THEORY = 6;
exports.QUANTIFIERS = 7;

// enum Z3_ast_print_mode
exports.PRINT_SMTLIB_FULL = 0;
exports.PRINT_LOW_LEVEL = 1;
exports.PRINT_SMTLIB_COMPLIANT = 2;
exports.PRINT_SMTLIB2_COMPLIANT = 3;

// enum Z3_error_code
exports.OK = 0;
exports.SORT_ERROR = 1;
exports.IOB = 2;
exports.INVALID_ARG = 3;
exports.PARSER_ERROR = 4;
exports.NO_PARSER = 5;
exports.INVALID_PATTERN = 6;
exports.MEMOUT_FAIL = 7;
exports.FILE_ACCESS_ERROR = 8;
exports.INTERNAL_FATAL = 9;
exports.INVALID_USAGE = 10;
exports.DEC_REF_ERROR = 11;
exports.EXCEPTION = 12;

// enum Z3_goal_prec
exports.GOAL_PRECISE = 0;
exports.GOAL_UNDER = 1;
exports.GOAL_OVER = 2;
exports.GOAL_UNDER_OVER = 3;

