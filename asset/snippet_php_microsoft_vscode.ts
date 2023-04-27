
/*

https://github.com/microsoft/vscode/blob/main/extensions/php/snippets/php.code-snippets

Remove //
Replace $0 with ${99:Code}

Error, not perfect at all
Find other

*/

const snippet_php_microsoft_vscode = {
	"class …": {
		"prefix": "class",
		"body": [
			"class ${1:ClassName} ${2:extends ${3:AnotherClass}} ${4:implements ${5:Interface}}",
			"{",
			"\t${99:Code}",
			"}",
			""
		],
		"description": "Class definition"
	},
	"PHPDoc class …": {
		"prefix": "doc_class",
		"isFileTemplate": true,
		"body": [
			"/**",
			" * ${6:undocumented class}",
			" */",
			"class ${1:ClassName} ${2:extends ${3:AnotherClass}} ${4:implements ${5:Interface}}",
			"{",
			"\t${99:Code}",
			"}",
			""
		],
		"description": "Documented Class Declaration"
	},
	"function __construct": {
		"prefix": "con",
		"body": [
			"${1:public} function __construct(${2:${3:Type} $${4:var}${5: = ${6:null}}}) {",
            "\t$this->${4:var} = $${4:var};${99:Code}",
            "}"
		]
	},
	"PHPDoc property": {
		"prefix": "doc_v",
		"body": [
			"/** @var ${1:Type} $${2:var} ${3:description} */",
			"${4:protected} $${2:var}${5: = ${6:null}};${99:Code}"
		],
		"description": "Documented Class Variable"
	},
	"PHPDoc function …": {
		"prefix": "doc_f",
		"isFileTemplate": true,
		"body": [
			"/**",
			" * ${1:undocumented function summary}",
			" *",
			" * ${2:Undocumented function long description}",
			" *",
			"${3: * @param ${4:Type} $${5:var} ${6:Description}}",
			"${7: * @return ${8:type}}",
			"${9: * @throws ${10:conditon}}",
			" **/",
			"${11:public }function ${12:FunctionName}(${13:${14:${4:Type} }$${5:var}${15: = ${16:null}}})",
			"{",
			"\t${0:# code...}",
			"}"
		],
		"description": "Documented function"
	},
	"PHPDoc param …": {
		"prefix": "param",
		"body": [
			"* @param ${1:Type} ${2:var} ${3:Description}${99:Code}"
		],
		"description": "Parameter documentation"
	},
	"function …": {
		"prefix": "fun",
		"body": [
			"${1:public }function ${2:FunctionName}(${3:${4:${5:Type} }$${6:var}${7: = ${8:null}}})",
			"{",
			"\t${0:# code...}",
			"}"
		],
		"description": "Function"
	},
	"trait …": {
		"prefix": "trait",
		"body": [
			"/**",
			" * $1",
			" */",
			"trait ${2:TraitName}",
			"{",
			"\t${99:Code}",
			"}",
			""
		],
		"description": "Trait"
	},
	"define(…, …)": {
		"prefix": "def",
		"body": [
			"define('$1', ${2:'$3'});",
			"${99:Code}"
		],
		"description": "Definition"
	},
	"do … while …": {
		"prefix": "do",
		"body": [
			"do {",
			"\t${0:# code...}",
			"} while (${1:$${2:a} <= ${3:10}});"
		],
		"description": "Do-While loop"
	},
		"while …": {
		"prefix": "while",
		"body": [
			"while (${1:$${2:a} <= ${3:10}}) {",
			"\t${0:# code...}",
			"}"
		],
		"description": "While-loop"
	},
	"if …": {
		"prefix": "if",
		"body": [
			"if (${1:condition}) {",
			"\t${0:# code...}",
			"}"
		],
		"description": "If block"
	},
	"if … else …": {
		"prefix": "ifelse",
		"body": [
			"if (${1:condition}) {",
			"\t${2:# code...}",
			"} else {",
			"\t${3:# code...}",
			"}",
			"${99:Code}"
		],
		"description": "If Else block"
	},
	"$… = ( … ) ? … : …": {
		"prefix": "if?",
		"body": "$${1:retVal} = (${2:condition}) ? ${3:a} : ${4:b} ;",
		"description": "Ternary conditional assignment"
	},
	"else …": {
		"prefix": "else",
		"body": [
			"else {",
			"\t${0:# code...}",
			"}"
		],
		"description": "Else block"
	},
	"elseif …": {
		"prefix": "elseif",
		"body": [
			"elseif (${1:condition}) {",
			"\t${0:# code...}",
			"}"
		],
		"description": "Elseif block"
	},
	"for …": {
		"prefix": "for",
		"body": [
			"for ($${1:i}=${2:0}; $${1:i} < $3; $${1:i}++) { ",
			"\t${0:# code...}",
			"}"
		],
		"description": "For-loop"
	},
	"foreach …": {
		"prefix": "foreach",
		"body": [
			"foreach ($${1:variable} as $${2:key} ${3:=> $${4:value}}) {",
			"\t${0:# code...}",
			"}"
		],
		"description": "Foreach loop"
	},
	"$… = array (…)": {
		"prefix": "array",
		"body": "$${1:arrayName} = array('$2' => $3${4:,} ${99:Code});",
		"description": "Array initializer"
	},
	"$… = […]": {
		"prefix": "shorray",
		"body": "$${1:arrayName} = ['$2' => $3${4:,} ${99:Code}];",
		"description": "Array initializer"
	},
	"… => …": {
		"prefix": "keyval",
		"body": "'$1' => $2${3:,} ${99:Code}",
		"description": "Key-Value initializer"
	},
	"switch …": {
		"prefix": "switch",
		"body": [
			"switch ($${1:variable}) {",
			"\tcase '${2:value}':",
			"\t\t${3:# code...}",
			"\t\tbreak;",
			"\t${99:Code}",
			"\tdefault:",
			"\t\t${4:# code...}",
			"\t\tbreak;",
			"}"
		],
		"description": "Switch block"
	},
	"case …": {
		"prefix": "case",
		"body": [
			"case '${1:value}':",
			"\t${0:# code...}",
			"\tbreak;"
		],
		"description": "Case Block"
	},
	"$this->…": {
		"prefix": "this",
		"body": "$this->${99:Code};",
		"description": "$this->..."
	},
	"echo $this->…": {
		"prefix": "ethis",
		"body": "echo $this->${99:Code};",
		"description": "Echo this"
	},
	"Throw Exception": {
		"prefix": "throw",
		"body": [
			"throw new $1Exception(${2:\"${3:Error Processing Request}\"}${4:, ${5:1}});",
			"${99:Code}"
		],
		"description": "Throw exception"
	},
	"Region Start": {
		"prefix": "#region",
		"body": [
			"#region"
		],
		"description": "Folding Region Start"
	},
	"Region End": {
		"prefix": "#endregion",
		"body": [
			"#endregion"
		],
		"description": "Folding Region End"
	},
	"Try Catch Block": {
		"prefix": "try",
		"body": [
			"try {",
			"\t${1://code...}",
			"} catch (${2:Throwable} ${3:$th}) {",
			"\t${4://throw $th;}",
			"}"
		],
		"description": "Try catch block"
	}
};

export default snippet_php_microsoft_vscode




