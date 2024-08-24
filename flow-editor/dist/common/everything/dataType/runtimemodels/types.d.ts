export type ObjectID = string;
export declare const DataTypeModelTypeTag = "dataType";
export type DataTypeModelType = typeof DataTypeModelTypeTag;
export declare const ConstantModelTypeTag = "constant";
export type ConstantModelType = typeof ConstantModelTypeTag;
export declare const LivePreviewTag = "livepreview";
export declare const StringType = "string";
export declare const NumberType = "number";
export declare const DateTimeType = "datetime";
export declare const EnumType = "enum";
export declare const BooleanType = "boolean";
export declare const DataType = "dataType";
export declare const ConstantType = "constant";
export declare const AnyType = "any";
export type StringType = typeof StringType;
export type NumberType = typeof NumberType;
export type DateTimeType = typeof DateTimeType;
export type EnumType = typeof EnumType;
export type BooleanType = typeof BooleanType;
export type DataType = typeof DataType;
export type ConstantType = typeof ConstantType;
export type AnyType = typeof AnyType;
export type VariableTypes = StringType | NumberType | DateTimeType | EnumType | BooleanType | DataType | ConstantType | AnyType;
export declare const allVariableTypes: VariableTypes[];
export declare const ContextType = "context";
export declare const InputType = "input";
export declare const OutputType = "output";
export declare const LiteralType = "literal";
export declare const NotSetType = "notSet";
export declare const InfoType = "info";
export declare const ErrorType = "error";
export declare const VarsType = "vars";
export type ContextType = typeof ContextType;
export type InputType = typeof InputType;
export type OutputType = typeof OutputType;
export type LiteralType = typeof LiteralType;
export type NotSetType = typeof NotSetType;
export type InfoType = typeof InfoType;
export type ErrorType = typeof ErrorType;
export type VarsType = typeof VarsType;
export type SetExpressionDataTypes = ContextType | OutputType | InfoType | ErrorType | VarsType;
export type ExpressionDataTypes = EnumType | BooleanType | NumberType | StringType | LiteralType | ContextType | InputType | OutputType | NotSetType | ConstantType | InfoType | ErrorType | VarsType;
//# sourceMappingURL=types.d.ts.map