import getVal from './get-const-val';

const Const = {
 
  RowTypeData: 0,
  RowTypeLabel: 1,
  RowTypeBlank: 2,
  
  InputTypeSingleLine:0,
  InputTypeMultiLine:1,
  InputTypeColspan:2,
  InputTypeAlign:3,
  InputTypeUrl:4,
};  
 
Const.RowTypes = [
  {'data': Const.RowTypeData },
  {'label': Const.RowTypeLabel},
  {'blank': Const.RowTypeBlank},
];

Const.InputTypes = [ 
  {'single_line': Const.InputTypeSingleLine},
  {'multi_line': Const.InputTypeMultiLine},
  {'colspan': Const.InputTypeColspan},
  {'align': Const.InputTypeAlign},
  {'url': Const.InputTypeUrl},
];

Const.getVal = getVal;

export default Const;
