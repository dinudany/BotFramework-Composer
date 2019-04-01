export const dialogGroups = {
  'Input/Prompt Dialogs': [
    'Microsoft.TextPrompt',
    'Microsoft.DateTimePrompt',
    'Microsoft.FloatPrompt',
    'Microsoft.IntegerPrompt',
  ],
  'Dialog Steps': [
    'Microsoft.CallDialog',
    'Microsoft.GotoDialog',
    'Microsoft.EndDialog',
    'Microsoft.CancelDialog',
    'Microsoft.SendActivity',
    'Microsoft.IfProperty',
    'Microsoft.HttpRequest',
  ],
  Rules: [
    'Microsoft.BeginDialogRule',
    'Microsoft.EventRule',
    'Microsoft.IntentRule',
    'Microsoft.WelcomeRule',
    'Microsoft.DefaultRule',
  ],
  Recognizers: ['Microsoft.LuisRecognizer', 'Microsoft.RegexRecognizer'],
  Other: ['Microsoft.AdaptiveDialog'],
};

const IDialogNoCall = {
  'Microsoft.IDialogNoCall': {
    title: 'Microsoft IDialog',
    description: 'Definition of Microsoft.IDialog which will include types with a $role:unionType(Microsoft.IDialog).',
    $role: 'unionType',
    oneOf: [
      {
        title: 'Microsoft.CancelDialog',
        description: 'This is a step which cancels the current dialog, returning no result',
        $ref: '#/definitions/Microsoft.CancelDialog',
      },
      {
        title: 'Microsoft.ChangeList',
        description: 'This is a step which add/remove/clear items to/from a list',
        $ref: '#/definitions/Microsoft.ChangeList',
      },
      {
        title: 'Microsoft.DateTimePrompt',
        description: 'This represents a dialog which gathers a DateTime in a specified range',
        $ref: '#/definitions/Microsoft.DateTimePrompt',
      },
      {
        title: 'Microsoft.EndDialog',
        description: 'This is a step which ends the current dialog, returning the result',
        $ref: '#/definitions/Microsoft.EndDialog',
      },
      {
        title: 'Microsoft.FloatPrompt',
        description: 'This represents a dialog which gathers a number in a specified range',
        $ref: '#/definitions/Microsoft.FloatPrompt',
      },
      {
        title: 'Microsoft.GotoDialog',
        description: 'Step which goes to another dialog.',
        $ref: '#/definitions/Microsoft.GotoDialog',
      },
      {
        title: 'Microsoft.IfProperty',
        description: 'Step which conditionally decides which step to execute next.',
        $ref: '#/definitions/Microsoft.IfProperty',
      },
      {
        title: 'Microsoft.IntegerPrompt',
        description: 'This represents a dialog which gathers a number in a specified range',
        $ref: '#/definitions/Microsoft.IntegerPrompt',
      },
      {
        title: 'Microsoft.RuleDialog',
        description: 'This represents a dialog can add rules and execute rules',
        $ref: '#/definitions/Microsoft.RuleDialog',
      },
      {
        title: 'Microsoft.SaveEntity',
        description: 'This is a step which save an recognized entity to storage',
        $ref: '#/definitions/Microsoft.SaveEntity',
      },
      {
        title: 'Microsoft.SendActivity',
        description: 'This is a step which sends an activity to the user',
        $ref: '#/definitions/Microsoft.SendActivity',
      },
      {
        title: 'Microsoft.SendList',
        description: 'This is a step which sends an list to the user',
        $ref: '#/definitions/Microsoft.SendList',
      },
      {
        title: 'Microsoft.TextPrompt',
        description: 'This represents a dialog which gathers a text from the user',
        $ref: '#/definitions/Microsoft.TextPrompt',
      },
      {
        title: 'Microsoft.WaitForInput',
        description: 'Step which accepts an input from user.',
        $ref: '#/definitions/Microsoft.WaitForInput',
      },
    ],
  },
};

export function getMergedSchema(dialogFiles = []) {
  return {
    $schema:
      'https://raw.githubusercontent.com/Microsoft/botbuilder-tools/SchemaGen/packages/DialogSchema/src/dialogSchema.schema',
    $id: 'app.schema',
    type: 'object',
    title: 'Component types',
    description: 'These are all of the types that can be created by the loader.',
    oneOf: [
      {
        title: 'Microsoft.CallDialog',
        description: 'Step which calls another dialog.',
        $ref: '#/definitions/Microsoft.CallDialog',
      },
      {
        title: 'Microsoft.CancelDialog',
        description: 'This is a step which cancels the current dialog, returning no result',
        $ref: '#/definitions/Microsoft.CancelDialog',
      },
      {
        title: 'Microsoft.ChangeList',
        description: 'This is a step which add/remove/clear items to/from a list',
        $ref: '#/definitions/Microsoft.ChangeList',
      },
      {
        title: 'Microsoft.DateTimePrompt',
        description: 'This represents a dialog which gathers a DateTime in a specified range',
        $ref: '#/definitions/Microsoft.DateTimePrompt',
      },
      {
        title: 'Microsoft.EndDialog',
        description: 'This is a step which ends the current dialog, returning the result',
        $ref: '#/definitions/Microsoft.EndDialog',
      },
      {
        title: 'Microsoft.EventRule',
        description: 'Event Rule will be triggered when a event happen',
        $ref: '#/definitions/Microsoft.EventRule',
      },
      {
        title: 'Microsoft.FallbackRule',
        description: 'Fallback Rule will be triggered when no other rules being triggered',
        $ref: '#/definitions/Microsoft.FallbackRule',
      },
      {
        title: 'Microsoft.FloatPrompt',
        description: 'This represents a dialog which gathers a number in a specified range',
        $ref: '#/definitions/Microsoft.FloatPrompt',
      },
      {
        title: 'Microsoft.GotoDialog',
        description: 'Step which goes to another dialog.',
        $ref: '#/definitions/Microsoft.GotoDialog',
      },
      {
        title: 'Microsoft.IfProperty',
        description: 'Step which conditionally decides which step to execute next.',
        $ref: '#/definitions/Microsoft.IfProperty',
      },
      {
        title: 'Microsoft.IfPropertyRule',
        description: 'IfPropertyRule will be triggered when the conditionals are true',
        $ref: '#/definitions/Microsoft.IfPropertyRule',
      },
      {
        title: 'Microsoft.IntegerPrompt',
        description: 'This represents a dialog which gathers a number in a specified range',
        $ref: '#/definitions/Microsoft.IntegerPrompt',
      },
      {
        title: 'Microsoft.IntentRule',
        description: 'Intent Rule, which will be triggered when the intent is matched.',
        $ref: '#/definitions/Microsoft.IntentRule',
      },
      {
        title: 'Microsoft.LuisRecognizer',
        description: 'LUIS recognizer.',
        $ref: '#/definitions/Microsoft.LuisRecognizer',
      },
      {
        title: 'Microsoft.QnaMakerRecognizer',
        description: 'This represents a configuration of the QNAMaker as a recognizer',
        $ref: '#/definitions/Microsoft.QnaMakerRecognizer',
      },
      {
        title: 'Microsoft.RePlacePlanRule',
        description: 'Similar as intent Rule, but the dialog stack will be clean up when it is triggered.',
        $ref: '#/definitions/Microsoft.RePlacePlanRule',
      },
      {
        title: 'Microsoft.RegexRecognizer',
        description: 'Example regular expression recognizer.',
        $ref: '#/definitions/Microsoft.RegexRecognizer',
      },
      {
        title: 'Microsoft.RuleDialog',
        description: 'This represents a dialog can add rules and execute rules',
        $ref: '#/definitions/Microsoft.RuleDialog',
      },
      {
        title: 'Microsoft.SaveEntity',
        description: 'This is a step which save an recognized entity to storage',
        $ref: '#/definitions/Microsoft.SaveEntity',
      },
      {
        title: 'Microsoft.SendActivity',
        description: 'This is a step which sends an activity to the user',
        $ref: '#/definitions/Microsoft.SendActivity',
      },
      {
        title: 'Microsoft.SendList',
        description: 'This is a step which sends an list to the user',
        $ref: '#/definitions/Microsoft.SendList',
      },
      {
        title: 'Microsoft.TextPrompt',
        description: 'This represents a dialog which gathers a text from the user',
        $ref: '#/definitions/Microsoft.TextPrompt',
      },
      {
        title: 'Microsoft.UtteranceRecognizeRule',
        description: 'Utterance Recognize will be triggered when the utterance is recognized as intents or entities',
        $ref: '#/definitions/Microsoft.UtteranceRecognizeRule',
      },
      {
        title: 'Microsoft.WaitForInput',
        description: 'Step which accepts an input from user.',
        $ref: '#/definitions/Microsoft.WaitForInput',
      },
      {
        title: 'Microsoft.WelcomeRule',
        description: 'Welcome Rule will be triggered when user start conversation or update conversation',
        $ref: '#/definitions/Microsoft.WelcomeRule',
      },
    ],
    definitions: {
      ...IDialogNoCall,
      'Microsoft.CallDialog': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Call Dialog',
        description: 'Step which calls another dialog.',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.CallDialog',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          // dialog: {
          //   type: 'object',
          //   $type: 'Microsoft.IDialog',
          //   title: 'Dialog',
          //   description: 'This is the dialog to call.',
          //   $ref: '#/definitions/Microsoft.IDialogNoCall',
          // },
          dialog: {
            title: 'Dialog',
            description: 'This is the dialog to call.',
            type: 'object',
            properties: {
              $ref: {
                title: 'Dialog',
                type: 'string',
                enum: dialogFiles.map(file => file.path),
                enumNames: dialogFiles.map(file => file.name),
              },
            },
          },
          options: {
            type: 'object',
            title: 'Options',
            description: 'Options to pass to the dialog.',
            additionalProperties: true,
          },
          property: {
            type: 'string',
            $type: 'Microsoft.IExpression',
            title: 'Property',
            description: 'The property to bind to the dialog and store the result in',
            examples: ['user.name'],
            $ref: '#/definitions/Microsoft.IExpression',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.CancelDialog': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Cancel Dialog',
        description: 'This is a step which cancels the current dialog, returning no result',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.CancelDialog',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.ChangeList': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Change List',
        description: 'This is a step which add/remove/clear items to/from a list',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.ChangeList',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          listProperty: {
            type: 'string',
            $type: 'Microsoft.IExpression',
            title: 'List Property',
            description: 'Expression which is the list property.',
            $ref: '#/definitions/Microsoft.IExpression',
          },
          itemProperty: {
            type: 'string',
            $type: 'Microsoft.IExpression',
            title: 'Item Property',
            description: 'Expression which is the item property.',
            $ref: '#/definitions/Microsoft.IExpression',
          },
          changeType: {
            type: 'string',
            title: 'Change List type',
            description: 'push/pop/take/remove/clear',
            enum: ['push', 'pop', 'take', 'remove', 'clear'],
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.DateTimePrompt': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'DateTime prompt',
        description: 'This represents a dialog which gathers a DateTime in a specified range',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.DateTimePrompt',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          property: {
            type: 'string',
            description: 'This is the property to set.',
            examples: ['value.birthday'],
          },
          minValue: {
            type: 'integer',
            title: 'Mininum value',
            description:
              'The minimum value that is acceptable.  If the value is less then this then the TooSmallReponse and RetryPrompt will be sent.',
            examples: ['1900-01-01'],
          },
          maxValue: {
            type: 'integer',
            title: 'Maximum value',
            description:
              'The maximum value that is acceptable.  If the value is greater then this then the TooLargeResponse and RetryPrompt will be sent.',
            examples: ['2100-01-01'],
          },
          initialPrompt: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Initial Prompt',
            description: 'The message to send to start.',
            examples: ['What is your birth date?'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          retryPrompt: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Retry Prompt',
            description: 'The message to send to prompt again.',
            examples: ["Let's try again. What is your birth date?"],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          noMatchResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'No match',
            description: 'The message to send to when no date was recognized.',
            examples: ['No date was recognized'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          tooSmallResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Too small',
            description: 'The message to send to when the recognized number was less then the MinValue. ',
            examples: ['Hmmm...I think your birthday means you must be dead.'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          tooLargeResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Too large',
            description: 'The message to send to when the recognized number was greater then the MinValue.',
            examples: ["You can't be born in the future!"],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.EndDialog': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'End Dialog',
        description: 'This is a step which ends the current dialog, returning the result',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.EndDialog',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          property: {
            type: 'string',
            $type: 'Microsoft.IExpression',
            title: 'Property',
            description: 'The property from dialog memory to return as the result',
            examples: ['user.name'],
            $ref: '#/definitions/Microsoft.IExpression',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.EventRule': {
        $role: 'unionType(Microsoft.IRule)',
        title: 'Event Rule',
        description: 'Event Rule will be triggered when a event happen',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.EventRule',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          steps: {
            type: 'array',
            description: 'steps to execute',
            items: {
              type: 'object',
              $type: 'Microsoft.IDialog',
              $ref: '#/definitions/Microsoft.IDialog',
            },
          },
          events: {
            type: 'array',
            description: 'event to be triggered',
            items: {
              type: 'string',
            },
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        anyOf: [
          {
            title: 'Reference',
            required: ['$copy'],
          },
          {
            title: 'Type',
            required: ['steps', 'events'],
          },
        ],
      },
      'Microsoft.FallbackRule': {
        $role: 'unionType(Microsoft.IRule)',
        title: 'Fallback Rule',
        description: 'Fallback Rule will be triggered when no other rules being triggered',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.FallbackRule',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          steps: {
            type: 'array',
            description: 'steps to execute',
            items: {
              $type: 'Microsoft.IDialog',
              $ref: '#/definitions/Microsoft.IDialog',
            },
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        anyOf: [
          {
            title: 'Reference',
            required: ['$copy'],
          },
          {
            title: 'Type',
            required: ['steps'],
          },
        ],
      },
      'Microsoft.FloatPrompt': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Float  prompt',
        description: 'This represents a dialog which gathers a number in a specified range',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.FloatPrompt',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          property: {
            type: 'string',
            description: 'This is the property to set.',
            examples: ['value.age'],
          },
          minValue: {
            type: 'integer',
            title: 'Mininum value',
            description:
              'The minimum value that is acceptable.  If the value is less then this then the TooSmallReponse and RetryPrompt will be sent.',
            examples: ['0'],
          },
          maxValue: {
            type: 'integer',
            title: 'Maximum value',
            description:
              'The maximum value that is acceptable.  If the value is greater then this then the TooLargeResponse and RetryPrompt will be sent.',
            examples: ['120'],
          },
          initialPrompt: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Initial Prompt',
            description: 'The message to send to start.',
            examples: ['What is your age?'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          retryPrompt: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Retry Prompt',
            description: 'The message to send to prompt again.',
            examples: ["Let's try again. What is your age?"],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          noMatchResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'No match',
            description: 'The message to send to when no number was recognized.',
            examples: ['No number was recognized'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          tooSmallResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Too small',
            description: 'The message to send to when the recognized number was less then the MinValue. ',
            examples: ['Nobody is younger than 0.'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          tooLargeResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Too large',
            description: 'The message to send to when the recognized number was greater then the MinValue.',
            examples: ['Nobody is that old!'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.GotoDialog': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Goto Dialog',
        description: 'Step which goes to another dialog.',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.GotoDialog',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          dialogId: {
            type: 'string',
            title: 'Dialog',
            description: 'This is the dialog to call.',
          },
          options: {
            type: 'object',
            title: 'Options',
            description: 'Options to pass to the dialog.',
            additionalProperties: true,
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.IActivityTemplate': {
        title: 'Microsoft ActivityTemplate',
        description:
          'Definition of Microsoft.IActivityTemplate which will be expanded by components that $implements it.',
        $role: 'unionType',
      },
      'Microsoft.IDialog': {
        title: 'Microsoft IDialog',
        description:
          'Definition of Microsoft.IDialog which will include types with a $role:unionType(Microsoft.IDialog).',
        $role: 'unionType',
        oneOf: [
          {
            title: 'Microsoft.CallDialog',
            description: 'Step which calls another dialog.',
            $ref: '#/definitions/Microsoft.CallDialog',
          },
          {
            title: 'Microsoft.CancelDialog',
            description: 'This is a step which cancels the current dialog, returning no result',
            $ref: '#/definitions/Microsoft.CancelDialog',
          },
          {
            title: 'Microsoft.ChangeList',
            description: 'This is a step which add/remove/clear items to/from a list',
            $ref: '#/definitions/Microsoft.ChangeList',
          },
          {
            title: 'Microsoft.DateTimePrompt',
            description: 'This represents a dialog which gathers a DateTime in a specified range',
            $ref: '#/definitions/Microsoft.DateTimePrompt',
          },
          {
            title: 'Microsoft.EndDialog',
            description: 'This is a step which ends the current dialog, returning the result',
            $ref: '#/definitions/Microsoft.EndDialog',
          },
          {
            title: 'Microsoft.FloatPrompt',
            description: 'This represents a dialog which gathers a number in a specified range',
            $ref: '#/definitions/Microsoft.FloatPrompt',
          },
          {
            title: 'Microsoft.GotoDialog',
            description: 'Step which goes to another dialog.',
            $ref: '#/definitions/Microsoft.GotoDialog',
          },
          {
            title: 'Microsoft.IfProperty',
            description: 'Step which conditionally decides which step to execute next.',
            $ref: '#/definitions/Microsoft.IfProperty',
          },
          {
            title: 'Microsoft.IntegerPrompt',
            description: 'This represents a dialog which gathers a number in a specified range',
            $ref: '#/definitions/Microsoft.IntegerPrompt',
          },
          {
            title: 'Microsoft.RuleDialog',
            description: 'This represents a dialog can add rules and execute rules',
            $ref: '#/definitions/Microsoft.RuleDialog',
          },
          {
            title: 'Microsoft.SaveEntity',
            description: 'This is a step which save an recognized entity to storage',
            $ref: '#/definitions/Microsoft.SaveEntity',
          },
          {
            title: 'Microsoft.SendActivity',
            description: 'This is a step which sends an activity to the user',
            $ref: '#/definitions/Microsoft.SendActivity',
          },
          {
            title: 'Microsoft.SendList',
            description: 'This is a step which sends an list to the user',
            $ref: '#/definitions/Microsoft.SendList',
          },
          {
            title: 'Microsoft.TextPrompt',
            description: 'This represents a dialog which gathers a text from the user',
            $ref: '#/definitions/Microsoft.TextPrompt',
          },
          {
            title: 'Microsoft.WaitForInput',
            description: 'Step which accepts an input from user.',
            $ref: '#/definitions/Microsoft.WaitForInput',
          },
        ],
      },
      'Microsoft.IDialogStep': {
        title: 'Microsoft IDialogStep',
        description:
          'Definition of Microsoft.IDialogStep which include types with a $role:unionType(Microsoft.IDialogStep).',
        $role: 'unionType',
      },
      'Microsoft.IExpression': {
        title: 'Microsoft IActivityTemplate',
        description: 'Definition of Microsoft.IExpression which will be expanded by components that $implements it.',
        $role: 'unionType',
      },
      'Microsoft.IRecognizer': {
        title: 'Microsoft IRecognizer',
        description:
          'Definition of Microsoft.IRecognizer which will include types with a $role:unionType(Microsoft.IRecognizer).',
        $role: 'unionType',
        oneOf: [
          {
            type: 'object',
            title: 'Microsoft.LuisRecognizer',
            description: 'LUIS recognizer.',
            $ref: '#/definitions/Microsoft.LuisRecognizer',
          },
          {
            type: 'object',
            title: 'Microsoft.QnaMakerRecognizer',
            description: 'This represents a configuration of the QNAMaker as a recognizer',
            $ref: '#/definitions/Microsoft.QnaMakerRecognizer',
          },
          {
            type: 'object',
            title: 'Microsoft.RegexRecognizer',
            description: 'Example regular expression recognizer.',
            $ref: '#/definitions/Microsoft.RegexRecognizer',
          },
        ],
      },
      'Microsoft.IRule': {
        title: 'Microsoft IRule',
        description: 'Definition of Microsoft.IRule which will include types with a $role:unionType(Microsoft.IRule).',
        $role: 'unionType',
        oneOf: [
          {
            type: 'object',
            title: 'Microsoft.EventRule',
            description: 'Event Rule will be triggered when a event happen',
            $ref: '#/definitions/Microsoft.EventRule',
          },
          {
            type: 'object',
            title: 'Microsoft.FallbackRule',
            description: 'Fallback Rule will be triggered when no other rules being triggered',
            $ref: '#/definitions/Microsoft.FallbackRule',
          },
          {
            type: 'object',
            title: 'Microsoft.IfPropertyRule',
            description: 'IfPropertyRule will be triggered when the conditionals are true',
            $ref: '#/definitions/Microsoft.IfPropertyRule',
          },
          {
            type: 'object',
            title: 'Microsoft.IntentRule',
            description: 'Intent Rule, which will be triggered when the intent is matched.',
            $ref: '#/definitions/Microsoft.IntentRule',
          },
          {
            type: 'object',
            title: 'Microsoft.RePlacePlanRule',
            description: 'Similar as intent Rule, but the dialog stack will be clean up when it is triggered.',
            $ref: '#/definitions/Microsoft.RePlacePlanRule',
          },
          {
            type: 'object',
            title: 'Microsoft.UtteranceRecognizeRule',
            description:
              'Utterance Recognize will be triggered when the utterance is recognized as intents or entities',
            $ref: '#/definitions/Microsoft.UtteranceRecognizeRule',
          },
          {
            type: 'object',
            title: 'Microsoft.WelcomeRule',
            description: 'Welcome Rule will be triggered when user start conversation or update conversation',
            $ref: '#/definitions/Microsoft.WelcomeRule',
          },
        ],
      },
      'Microsoft.IStorage': {
        title: 'Microsoft IStorage',
        description:
          'Definition of Microsoft.IStorage which will include types with a $role:unionType(Microsoft.IStorage).',
        $role: 'unionType',
      },
      'Microsoft.IfProperty': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'If Property Step',
        description: 'Step which conditionally decides which step to execute next.',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.IfProperty',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          ifTrue: {
            oneOf: [
              {
                type: 'object',
                $type: 'Microsoft.IDialogStep',
                $ref: '#/definitions/Microsoft.IDialogStep',
              },
              {
                type: 'array',
                items: {
                  type: 'object',
                  $type: 'Microsoft.IDialogStep',
                  $ref: '#/definitions/Microsoft.IDialogStep',
                },
                title: 'array',
              },
            ],
            title: 'If True',
            description: 'Step to execute if expression is true.',
          },
          ifFalse: {
            oneOf: [
              {
                type: 'object',
                $type: 'Microsoft.IDialogStep',
                $ref: '#/definitions/Microsoft.IDialogStep',
              },
              {
                type: 'array',
                items: {
                  type: 'object',
                  $type: 'Microsoft.IDialogStep',
                  $ref: '#/definitions/Microsoft.IDialogStep',
                },
                title: 'array',
              },
            ],
            title: 'If False',
            description: 'Step to execute if expression is false.',
          },
          expression: {
            type: 'string',
            $type: 'Microsoft.IExpression',
            title: 'Condition',
            description: 'Expression to evaluate.',
            examples: ['user.age > 3'],
            $ref: '#/definitions/Microsoft.IExpression',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.IfPropertyRule': {
        $role: 'unionType(Microsoft.IRule)',
        title: 'If Property Rule',
        description: 'IfPropertyRule will be triggered when the conditionals are true',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.IfPropertyRule',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          steps: {
            type: 'array',
            description: 'steps to execute',
            items: {
              $type: 'Microsoft.IDialog',
              $ref: '#/definitions/Microsoft.IDialog',
            },
          },
          conditionals: {
            type: 'array',
            description: 'conditions',
            items: {
              type: 'string',
              $type: 'Microsoft.IExpression',
              title: 'Condition',
              description: 'Expression to evaluate.',
              $ref: '#/definitions/Microsoft.IExpression',
            },
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        anyOf: [
          {
            title: 'Reference',
            required: ['$copy'],
          },
          {
            title: 'Type',
            required: ['steps', 'conditionals'],
          },
        ],
      },
      'Microsoft.IntegerPrompt': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Integer prompt',
        description: 'This represents a dialog which gathers a number in a specified range',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.IntegerPrompt',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          property: {
            type: 'string',
            description: 'This is the property to set.',
            examples: ['value.age'],
          },
          minValue: {
            type: 'integer',
            title: 'Mininum value',
            description:
              'The minimum value that is acceptable.  If the value is less then this then the TooSmallReponse and RetryPrompt will be sent.',
            examples: ['0'],
          },
          maxValue: {
            type: 'integer',
            title: 'Maximum value',
            description:
              'The maximum value that is acceptable.  If the value is greater then this then the TooLargeResponse and RetryPrompt will be sent.',
            examples: ['120'],
          },
          initialPrompt: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Initial Prompt',
            description: 'The message to send to start.',
            examples: ['What is your age?'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          retryPrompt: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Retry Prompt',
            description: 'The message to send to prompt again.',
            examples: ["Let's try again. What is your age?"],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          noMatchResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'No match',
            description: 'The message to send to when no number was recognized.',
            examples: ['No number was recognized'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          tooSmallResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Too small',
            description: 'The message to send to when the recognized number was less then the MinValue. ',
            examples: ['Nobody is younger than 0.'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          tooLargeResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Too large',
            description: 'The message to send to when the recognized number was greater then the MinValue.',
            examples: ['Nobody is that old!'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.IntentRule': {
        $role: 'unionType(Microsoft.IRule)',
        title: 'Intent Rule',
        description: 'Intent Rule, which will be triggered when the intent is matched.',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.IntentRule',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          intent: {
            type: 'string',
            description: 'This is the intent to be triggered.',
            examples: ['JokeIntent'],
          },
          entities: {
            type: 'array',
            title: 'The entities to be triggered.',
            items: {
              type: 'string',
              description: 'The entities',
            },
          },
          steps: {
            type: 'array',
            description: 'steps to execute',
            items: {
              type: 'object',
              $type: 'Microsoft.IDialog',
              $ref: '#/definitions/Microsoft.IDialog',
            },
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        anyOf: [
          {
            title: 'Reference',
            required: ['$copy'],
          },
          {
            title: 'Type',
            required: ['intent', 'steps'],
          },
        ],
      },
      'Microsoft.LuisRecognizer': {
        $role: 'unionType(Microsoft.IRecognizer)',
        title: 'LUIS Recognizer',
        description: 'LUIS recognizer.',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.LuisRecognizer',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          application: {
            type: 'object',
            required: ['applicationId', 'endpoint', 'endpointKey'],
            properties: {
              applicationId: {
                type: 'string',
              },
              endpoint: {
                type: 'string',
              },
              endpointKey: {
                type: 'string',
              },
            },
          },
          priority: {
            type: 'string',
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        anyOf: [
          {
            title: 'Reference',
            required: ['$copy'],
          },
          {
            title: 'Type',
            required: ['applicationId'],
          },
        ],
      },
      'Microsoft.QnaMakerRecognizer': {
        $role: 'unionType(Microsoft.IRecognizer)',
        title: 'QnAMaker.ai Recognizer',
        description: 'This represents a configuration of the QNAMaker as a recognizer',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.QnaMakerRecognizer',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          applicationId: {
            type: 'string',
            description: 'This is the QnAMaker appId to use',
            examples: ['123123123'],
          },
          endpoint: {
            type: 'string',
            description: 'This is the QnAMaker endpoint to use',
            examples: ['http://westus.qnamaker.ai'],
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        anyOf: [
          {
            title: 'Reference',
            required: ['$copy'],
          },
          {
            title: 'Type',
            required: ['applicationId', 'endpoint'],
          },
        ],
      },
      'Microsoft.RePlacePlanRule': {
        $role: 'unionType(Microsoft.IRule)',
        title: 'Replace Plan Rule',
        description: 'Similar as intent Rule, but the dialog stack will be clean up when it is triggered.',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.RePlacePlanRule',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          intent: {
            type: 'string',
            description: 'This is the intent to be triggered.',
            examples: ['JokeIntent'],
          },
          entities: {
            type: 'array',
            title: 'The entities to be triggered.',
            items: {
              type: 'string',
              description: 'The entities',
            },
          },
          steps: {
            type: 'array',
            description: 'steps to execute',
            items: {
              $type: 'Microsoft.IDialog',
              $ref: '#/definitions/Microsoft.IDialog',
            },
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        anyOf: [
          {
            title: 'Reference',
            required: ['$copy'],
          },
          {
            title: 'Type',
            required: ['intent', 'steps'],
          },
        ],
      },
      'Microsoft.RegexRecognizer': {
        $role: 'unionType(Microsoft.IRecognizer)',
        title: 'Regular Expression Recognizer',
        description: 'Example regular expression recognizer.',
        type: 'object',
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.RegexRecognizer',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          rules: {
            type: 'object',
            additionalProperties: {
              type: 'string',
            },
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
      },
      'Microsoft.RuleDialog': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Rule Dialog',
        description: 'This represents a dialog can add rules and execute rules',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.RuleDialog',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          storage: {
            type: 'object',
            $type: 'Microsoft.IStorage',
            description: 'The memory storage',
            examples: ['Microsoft.MemoryStorage'],
            $ref: '#/definitions/Microsoft.IStorage',
          },
          recognizer: {
            type: 'object',
            $type: 'Microsoft.IRecognizer',
            description: 'The recognizers',
            $ref: '#/definitions/Microsoft.IRecognizer',
          },
          rules: {
            type: 'array',
            title: 'The rules',
            items: {
              type: 'object',
              $type: 'Microsoft.IRule',
              description: 'The rules',
              $ref: '#/definitions/Microsoft.IRule',
            },
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.SaveEntity': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Save Entity',
        description: 'This is a step which save an recognized entity to storage',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.SaveEntity',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          property: {
            type: 'string',
            $type: 'Microsoft.IExpression',
            title: 'Property',
            description: 'Expression which is the property to set.',
            $ref: '#/definitions/Microsoft.IExpression',
          },
          entityName: {
            type: 'string',
            $type: 'Microsoft.IExpression',
            title: 'Value',
            description: 'Expression which is the value to use.',
            $ref: '#/definitions/Microsoft.IExpression',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.SendActivity': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Send Activity Step',
        description: 'This is a step which sends an activity to the user',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.SendActivity',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          activity: {
            type: 'string',
            description: 'This text sent to user.',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.SendList': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Send List Step',
        description: 'This is a step which sends an list to the user',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.SendList',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          listProperty: {
            type: 'string',
            $type: 'Microsoft.IExpression',
            title: 'List Property',
            description: 'Expression which is the list property.',
            $ref: '#/definitions/Microsoft.IExpression',
          },
          messageTemplate: {
            type: 'string',
            title: 'message Template',
            description: 'message that will be shown before the list.',
          },
          itemTemplate: {
            type: 'string',
            title: 'item Template',
            description: 'message that will be shown before the items.',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.TextPrompt': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Text prompt',
        description: 'This represents a dialog which gathers a text from the user',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.TextPrompt',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          property: {
            type: 'string',
            description: 'This is the property to set the result.',
            examples: ['value.name'],
          },
          pattern: {
            type: 'string',
            title: 'Pattern',
            description: 'A regular expression pattern which must match',
            examples: ['\\w{3,30}'],
          },
          initialPrompt: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Initial Prompt',
            description: 'The message to send to start.',
            examples: ['What is your name?'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          retryPrompt: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'Retry Prompt',
            description: 'The message to send to prompt again.',
            examples: ["Let's try again. What is your name?"],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
          noMatchResponse: {
            type: 'string',
            $type: 'Microsoft.IActivityTemplate',
            title: 'No match',
            description: "The message to send to when the input didn't match.",
            examples: ["That doesn't match the pattern requirements.", 'A valid phone number looks like xxx-xxx-xxxx.'],
            $ref: '#/definitions/Microsoft.IActivityTemplate',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.UtteranceRecognizeRule': {
        $role: 'unionType(Microsoft.IRule)',
        title: 'Utterance Recognize Rule',
        description: 'Utterance Recognize will be triggered when the utterance is recognized as intents or entities',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.UtteranceRecognizeRule',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          intent: {
            type: 'string',
            description: 'This is the intent to be triggered.',
            examples: ['JokeIntent'],
          },
          entities: {
            type: 'array',
            title: 'The entities to be triggered.',
            items: {
              type: 'string',
              description: 'The entities',
            },
          },
          steps: {
            type: 'array',
            description: 'steps to execute',
            items: {
              $type: 'Microsoft.IDialog',
              $ref: '#/definitions/Microsoft.IDialog',
            },
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        anyOf: [
          {
            title: 'Reference',
            required: ['$copy'],
          },
          {
            title: 'Type',
            required: ['steps'],
          },
        ],
      },
      'Microsoft.WaitForInput': {
        $role: 'unionType(Microsoft.IDialog)',
        title: 'Wait for Input Step',
        description: 'Step which accepts an input from user.',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.WaitForInput',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          property: {
            type: 'string',
            $type: 'Microsoft.IExpression',
            title: 'Property',
            description: 'property which saves the input into.',
            $ref: '#/definitions/Microsoft.IExpression',
          },
        },
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        required: ['$type'],
      },
      'Microsoft.WelcomeRule': {
        $role: 'unionType(Microsoft.IRule)',
        title: 'Welcome Rule',
        description: 'Welcome Rule will be triggered when user start conversation or update conversation',
        type: 'object',
        additionalProperties: false,
        properties: {
          $type: {
            title: '$type',
            description: 'Schema definition for $type added by cogSchema.',
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9.]*$',
            const: 'Microsoft.WelcomeRule',
          },
          $copy: {
            title: '$copy',
            description: 'Schema deifnition for $copy added by cogSchema.',
            type: 'string',
            pattern: '^(([a-zA-Z][a-zA-Z0-9.]*)?(#[a-zA-Z][a-zA-Z0-9.]*)?)$',
          },
          $id: {
            title: '$id',
            description: 'Schema definition for $id added by cogSchema.',
            type: 'string',
            pattern: '^([a-zA-Z][a-zA-Z0-9.]*)$',
          },
          steps: {
            type: 'array',
            description: 'steps to execute',
            items: {
              type: 'object',
              $type: 'Microsoft.IDialog',
              $ref: '#/definitions/Microsoft.IDialog',
            },
          },
        },
        required: ['$type'],
        patternProperties: {
          '^\\$': {
            type: 'string',
          },
        },
        anyOf: [
          {
            title: 'Reference',
            required: ['$copy'],
          },
          {
            title: 'Type',
            required: ['steps'],
          },
        ],
      },
    },
  };
}