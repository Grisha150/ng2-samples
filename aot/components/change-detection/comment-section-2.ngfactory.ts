/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../../components/change-detection/comment-section-2';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
const styles_CommentSection2:any[] = ([] as any[]);
export const RenderType_CommentSection2:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_CommentSection2,
  data: {animation: ([] as any[])}
}
);
function View_CommentSection2_1():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),7,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n            ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n            ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n        '])
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = view.context.$implicit.author;
    check(view,3,0,currVal_0);
    const currVal_1:any = view.context.$implicit.text;
    check(view,6,0,currVal_1);
  });
}
export function View_CommentSection2_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
      import0.ɵelementDef(0,(null as any),(null as any),47,'div',[[
        'style',
        'border: 1px solid black;padding: 5px;'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n    ']),
      import0.ɵelementDef(0,(null as any),(null as any),1,'div',[[
        'class',
        'alert alert-info'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '\n        ',
      '\n    '
    ]
    ),
    import0.ɵtextDef((null as any),['\n\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),2,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵelementDef(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),4,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        ']),
      import0.ɵelementDef(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.CommentSection2 = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.addComment()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Add Comment']),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Author']),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),5,'input',([] as any[]),[
      [
        1,
        'ng-untouched'
      ]
      ,
      [
        1,
        'ng-touched'
      ]
      ,
      [
        1,
        'ng-pristine'
      ]
      ,
      [
        1,
        'ng-dirty'
      ]
      ,
      [
        1,
        'ng-valid'
      ]
      ,
      [
        1,
        'ng-invalid'
      ]
      ,
      [
        1,
        'ng-pending'
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.CommentSection2 = view.component;
      if (('input' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnodeValue(view,21).onChange($event.target.value)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('blur' === eventName)) {
        const pd_1:any = ((<any>import0.ɵnodeValue(view,21).onTouched()) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('compositionstart' === eventName)) {
        const pd_2:any = ((<any>import0.ɵnodeValue(view,23).compositionStart()) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('compositionend' === eventName)) {
        const pd_3:any = ((<any>import0.ɵnodeValue(view,23).compositionEnd()) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      if (('ngModelChange' === eventName)) {
        const pd_4:any = ((<any>(comp.author = $event)) !== false);
        allowDefault = (pd_4 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdirectiveDef(0,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef
    ]
    ,(null as any),(null as any)),
    import0.ɵproviderDef(0,(null as any),2,import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdirectiveDef(10,(null as any),0,import2.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵproviderDef(0,(null as any),3,import2.NgControl,(null as any),[import2.NgModel]),
    import0.ɵdirectiveDef(0,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Text']),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),5,'input',([] as any[]),[
      [
        1,
        'ng-untouched'
      ]
      ,
      [
        1,
        'ng-touched'
      ]
      ,
      [
        1,
        'ng-pristine'
      ]
      ,
      [
        1,
        'ng-dirty'
      ]
      ,
      [
        1,
        'ng-valid'
      ]
      ,
      [
        1,
        'ng-invalid'
      ]
      ,
      [
        1,
        'ng-pending'
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.CommentSection2 = view.component;
      if (('input' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnodeValue(view,31).onChange($event.target.value)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('blur' === eventName)) {
        const pd_1:any = ((<any>import0.ɵnodeValue(view,31).onTouched()) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('compositionstart' === eventName)) {
        const pd_2:any = ((<any>import0.ɵnodeValue(view,33).compositionStart()) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('compositionend' === eventName)) {
        const pd_3:any = ((<any>import0.ɵnodeValue(view,33).compositionEnd()) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      if (('ngModelChange' === eventName)) {
        const pd_4:any = ((<any>(comp.text = $event)) !== false);
        allowDefault = (pd_4 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdirectiveDef(0,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef
    ]
    ,(null as any),(null as any)),
    import0.ɵproviderDef(0,(null as any),2,import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdirectiveDef(10,(null as any),0,import2.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵproviderDef(0,(null as any),3,import2.NgControl,(null as any),[import2.NgModel]),
    import0.ɵdirectiveDef(0,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
      import0.ɵelementDef(0,(null as any),(null as any),5,'table',[[
        'class',
        'table'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        ']),
    import0.ɵelementDef(0,(null as any),(null as any),3,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_CommentSection2_1),
    import0.ɵdirectiveDef(12,(null as any),0,import3.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵtextDef((null as any),['\n'])
  ]
  ,(check,view) => {
    var comp:import1.CommentSection2 = view.component;
    const currVal_0:any = comp.author;
    check(view,23,0,currVal_0);
    const currVal_1:any = comp.text;
    check(view,33,0,currVal_1);
    const currVal_2:any = comp.comments;
    check(view,45,0,currVal_2);
  },(check,view) => {
    var comp:import1.CommentSection2 = view.component;
    const currVal_0:any = comp.message;
    check(view,3,0,currVal_0);
    const currVal_1:any = comp.lastUpdated();
    check(view,7,0,currVal_1);
    const currVal_2:any = import0.ɵnodeValue(view,25).ngClassUntouched;
    const currVal_3:any = import0.ɵnodeValue(view,25).ngClassTouched;
    const currVal_4:any = import0.ɵnodeValue(view,25).ngClassPristine;
    const currVal_5:any = import0.ɵnodeValue(view,25).ngClassDirty;
    const currVal_6:any = import0.ɵnodeValue(view,25).ngClassValid;
    const currVal_7:any = import0.ɵnodeValue(view,25).ngClassInvalid;
    const currVal_8:any = import0.ɵnodeValue(view,25).ngClassPending;
    check(view,20,0,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8);
    const currVal_9:any = import0.ɵnodeValue(view,35).ngClassUntouched;
    const currVal_10:any = import0.ɵnodeValue(view,35).ngClassTouched;
    const currVal_11:any = import0.ɵnodeValue(view,35).ngClassPristine;
    const currVal_12:any = import0.ɵnodeValue(view,35).ngClassDirty;
    const currVal_13:any = import0.ɵnodeValue(view,35).ngClassValid;
    const currVal_14:any = import0.ɵnodeValue(view,35).ngClassInvalid;
    const currVal_15:any = import0.ɵnodeValue(view,35).ngClassPending;
    check(view,30,0,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15);
  });
}
const RenderType_CommentSection2_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_CommentSection2_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'comment-section-2',([] as any[]),(null as any),(null as any),(null as any),View_CommentSection2_0,RenderType_CommentSection2),
    import0.ɵdirectiveDef(1024,(null as any),0,import1.CommentSection2,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const CommentSection2NgFactory:import0.ComponentFactory<import1.CommentSection2> = import0.ɵcreateComponentFactory('comment-section-2',import1.CommentSection2,View_CommentSection2_Host_0);