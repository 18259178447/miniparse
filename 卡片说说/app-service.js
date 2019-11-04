var __wxAppData = __wxAppData || {};   var __wxRoute = __wxRoute || "";  var __wxRouteBegin = __wxRouteBegin || "";  var __wxAppCode__ = __wxAppCode__ || {};  var global = global || {};  var window = window || {};  var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};  var __wxAppCurrentFile__=__wxAppCurrentFile__||"";  var Component = Component || function(){};  var definePlugin = definePlugin || function(){};  var requirePlugin = requirePlugin || function(){};  var Behavior = Behavior || function(){};
    /*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
  window.__qcc_version__='1.0.29';window.__qcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
  var $gwxc
  var $gaic={}
  $gwx=function(path,global){
  if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
  }__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
  function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
  function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
  function _n(tag, s, h){$gwxc++;if($gwxc>=16000){ throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};var res = {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}};if(s && h){res.isStatic = s;res.rawHash = h;};return res;}
  function _p(a,b){b&&a.properities.push(b);}
  function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
  function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
  function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
  $gwn=console.warn;
  $gwl=console.log;
  function $gwh()
  {
  function x()
  {
  }
  x.prototype = 
  {
  hn: function( obj, all )
  {
  if( typeof(obj) == 'object' )
  {
  var cnt=0;
  var any1=false,any2=false;
  for(var x in obj)
  {
  any1=any1|x==='__value__';
  any2=any2|x==='__wxspec__';
  cnt++;
  if(cnt>2)break;
  }
  return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
  }
  return "n";
  },
  nh: function( obj, special )
  {
  return { __value__: obj, __wxspec__: special ? special : true }
  },
  rv: function( obj )
  {
  return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
  },
  hm: function( obj )
  {
  {
  var cnt=0;
  var any1=false,any2=false;
  for(var x in obj)
  {
  any1=any1|x==='__value__';
  any2=any2|x==='__wxspec__';
  cnt++;
  if(cnt>2)break;
  }
  return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
  }
  return false;
  }
  }
  return new x;
  }
  wh=$gwh();
  function $gstack(s){
  var tmp=s.split('\n '+' '+' '+' ');
  for(var i=0;i<tmp.length;++i){
  if(0==i) continue;
  if(")"===tmp[i][tmp[i].length-1])
  tmp[i]=tmp[i].replace(/s(.*)$/,"");
  else
  tmp[i]="at anonymous function";
  }
  return tmp.join('\n '+' '+' '+' ');
  }
  function $gwrt( should_pass_type_info )
  {
  function ArithmeticEv( ops, e, s, g, o )
  {
  var _f = false;
  var rop = ops[0][1];
  var _a,_b,_c,_d, _aa, _bb;
  switch( rop )
  {
  case '?:':
  _a = rev( ops[1], e, s, g, o, _f );
  _c = should_pass_type_info && ( wh.hn(_a) === 'h' );
  _d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
  _d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
  return _d;
  break;
  case '&&':
  _a = rev( ops[1], e, s, g, o, _f );
  _c = should_pass_type_info && ( wh.hn(_a) === 'h' );
  _d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
  _d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
  return _d;
  break;
  case '||':
  _a = rev( ops[1], e, s, g, o, _f );
  _c = should_pass_type_info && ( wh.hn(_a) === 'h' );
  _d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
  _d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
  return _d;
  break;
  case '+':
  case '*':
  case '/':
  case '%':
  case '|':
  case '^':
  case '&':
  case '===':
  case '==':
  case '!=':
  case '!==':
  case '>=':
  case '<=':
  case '>':
  case '<':
  case '<<':
  case '>>':
  _a = rev( ops[1], e, s, g, o, _f );
  _b = rev( ops[2], e, s, g, o, _f );
  _c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
  switch( rop )
  {
  case '+':
  _d = wh.rv( _a ) + wh.rv( _b );
  break;
  case '*':
  _d = wh.rv( _a ) * wh.rv( _b );
  break;
  case '/':
  _d = wh.rv( _a ) / wh.rv( _b );
  break;
  case '%':
  _d = wh.rv( _a ) % wh.rv( _b );
  break;
  case '|':
  _d = wh.rv( _a ) | wh.rv( _b );
  break;
  case '^':
  _d = wh.rv( _a ) ^ wh.rv( _b );
  break;
  case '&':
  _d = wh.rv( _a ) & wh.rv( _b );
  break;
  case '===':
  _d = wh.rv( _a ) === wh.rv( _b );
  break;
  case '==':
  _d = wh.rv( _a ) == wh.rv( _b );
  break;
  case '!=':
  _d = wh.rv( _a ) != wh.rv( _b );
  break;
  case '!==':
  _d = wh.rv( _a ) !== wh.rv( _b );
  break;
  case '>=':
  _d = wh.rv( _a ) >= wh.rv( _b );
  break;
  case '<=':
  _d = wh.rv( _a ) <= wh.rv( _b );
  break;
  case '>':
  _d = wh.rv( _a ) > wh.rv( _b );
  break;
  case '<':
  _d = wh.rv( _a ) < wh.rv( _b );
  break;
  case '<<':
  _d = wh.rv( _a ) << wh.rv( _b );
  break;
  case '>>':
  _d = wh.rv( _a ) >> wh.rv( _b );
  break;
  default:
  break;
  }
  return _c ? wh.nh( _d, "c" ) : _d;
  break;
  case '-':
  _a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
  _b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
  _c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
  _d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
  return _c ? wh.nh( _d, "c" ) : _d;
  break;
  case '!':
  _a = rev( ops[1], e, s, g, o, _f );
  _c = should_pass_type_info && (wh.hn( _a ) == 'h');
  _d = !wh.rv(_a);
  return _c ? wh.nh( _d, "c" ) : _d;
  case '~':
  _a = rev( ops[1], e, s, g, o, _f );
  _c = should_pass_type_info && (wh.hn( _a ) == 'h');
  _d = ~wh.rv(_a);
  return _c ? wh.nh( _d, "c" ) : _d;
  default:
  $gwn('unrecognized op' + rop );
  }
  }
  function rev( ops, e, s, g, o, newap )
  {
  var op = ops[0];
  var _f = false;
  if ( typeof newap !== "undefined" ) o.ap = newap;
  if( typeof(op)==='object' )
  {
  var vop=op[0];
  var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
  switch(vop)
  {
  case 2:
  return ArithmeticEv(ops,e,s,g,o);
  break;
  case 4: 
  return rev( ops[1], e, s, g, o, _f );
  break;
  case 5: 
  switch( ops.length )
  {
  case 2: 
  _a = rev( ops[1],e,s,g,o,_f );
  return should_pass_type_info?[_a]:[wh.rv(_a)];
  return [_a];
  break;
  case 1: 
  return [];
  break;
  default:
  _a = rev( ops[1],e,s,g,o,_f );
  _b = rev( ops[2],e,s,g,o,_f );
  _a.push( 
  should_pass_type_info ?
  _b :
  wh.rv( _b )
  );
  return _a;
  break;
  }
  break;
  case 6:
  _a = rev(ops[1],e,s,g,o);
  var ap = o.ap;
  _ta = wh.hn(_a)==='h';
  _aa = _ta ? wh.rv(_a) : _a;
  o.is_affected |= _ta;
  if( should_pass_type_info )
  {
  if( _aa===null || typeof(_aa) === 'undefined' )
  {
  return _ta ? wh.nh(undefined, 'e') : undefined;
  }
  _b = rev(ops[2],e,s,g,o,_f);
  _tb = wh.hn(_b) === 'h';
  _bb = _tb ? wh.rv(_b) : _b;
  o.ap = ap;
  o.is_affected |= _tb;
  if( _bb===null || typeof(_bb) === 'undefined' || 
  _bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
  {
  return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
  }
  _d = _aa[_bb];
  if ( typeof _d === 'function' && !ap ) _d = undefined;
  _td = wh.hn(_d)==='h';
  o.is_affected |= _td;
  return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
  }
  else
  {
  if( _aa===null || typeof(_aa) === 'undefined' )
  {
  return undefined;
  }
  _b = rev(ops[2],e,s,g,o,_f);
  _tb = wh.hn(_b) === 'h';
  _bb = _tb ? wh.rv(_b) : _b;
  o.ap = ap;
  o.is_affected |= _tb;
  if( _bb===null || typeof(_bb) === 'undefined' || 
  _bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
  {
  return undefined;
  }
  _d = _aa[_bb];
  if ( typeof _d === 'function' && !ap ) _d = undefined;
  _td = wh.hn(_d)==='h';
  o.is_affected |= _td;
  return _td ? wh.rv(_d) : _d;
  }
  case 7: 
  switch(ops[1][0])
  {
  case 11:
  o.is_affected |= wh.hn(g)==='h';
  return g;
  case 3:
  _s = wh.rv( s );
  _e = wh.rv( e );
  _b = ops[1][1];
  if (g && g.f && g.f.hasOwnProperty(_b) )
  {
  _a = g.f;
  o.ap = true;
  }
  else
  {
  _a = _s && _s.hasOwnProperty(_b) ? 
  s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
  }
  if( should_pass_type_info )
  {
  if( _a )
  {
  _ta = wh.hn(_a) === 'h';
  _aa = _ta ? wh.rv( _a ) : _a;
  _d = _aa[_b];
  _td = wh.hn(_d) === 'h';
  o.is_affected |= _ta || _td;
  _d = _ta && !_td ? wh.nh(_d,'e') : _d;
  return _d;
  }
  }
  else
  {
  if( _a )
  {
  _ta = wh.hn(_a) === 'h';
  _aa = _ta ? wh.rv( _a ) : _a;
  _d = _aa[_b];
  _td = wh.hn(_d) === 'h';
  o.is_affected |= _ta || _td;
  return wh.rv(_d);
  }
  }
  return undefined;
  }
  break;
  case 8: 
  _a = {};
  _a[ops[1]] = rev(ops[2],e,s,g,o,_f);
  return _a;
  break;
  case 9: 
  _a = rev(ops[1],e,s,g,o,_f);
  _b = rev(ops[2],e,s,g,o,_f);
  function merge( _a, _b, _ow )
  {
  var ka, _bbk;
  _ta = wh.hn(_a)==='h';
  _tb = wh.hn(_b)==='h';
  _aa = wh.rv(_a);
  _bb = wh.rv(_b);
  for(var k in _bb)
  {
  if ( _ow || !_aa.hasOwnProperty(k) )
  {
  _aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
  }
  }
  return _a;
  }
  var _c = _a
  var _ow = true
  if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
  _a = _b
  _b = _c
  _ow = false
  }
  if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
  var _r = {}
  return merge( merge( _r, _a, _ow ), _b, _ow );
  }
  else
  return merge( _a, _b, _ow );
  break;
  case 10:
  _a = rev(ops[1],e,s,g,o,_f);
  _a = should_pass_type_info ? _a : wh.rv( _a );
  return _a ;
  break;
  case 12:
  var _r;
  _a = rev(ops[1],e,s,g,o);
  if ( !o.ap )
  {
  return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
  }
  var ap = o.ap;
  _b = rev(ops[2],e,s,g,o,_f);
  o.ap = ap;
  _ta = wh.hn(_a)==='h';
  _tb = _ca(_b);
  _aa = wh.rv(_a);	
  _bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
  try{
  _r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
  } catch (e){
  e.message = e.message.replace(/nv_/g,"");
  e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
  e.stack = e.stack.replace(/snv_/g," "); 
  e.stack = $gstack(e.stack);	
  if(g.debugInfo)
  {
  e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
  console.error(e);
  }
  _r = undefined;
  }
  return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
  }
  }
  else
  {
  if( op === 3 || op === 1) return ops[1];
  else if( op === 11 ) 
  {
  var _a='';
  for( var i = 1 ; i < ops.length ; i++ )
  {
  var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
  _a += typeof(xp) === 'undefined' ? '' : xp;
  }
  return _a;
  }
  }
  }
  function wrapper( ops, e, s, g, o, newap )
  {
  if( ops[0] == '11182016' )
  {
  g.debugInfo = ops[2];
  return rev( ops[1], e, s, g, o, newap );
  }
  else
  {
  g.debugInfo = null;
  return rev( ops, e, s, g, o, newap );
  }
  }
  return wrapper;
  }
  gra=$gwrt(true); 
  grb=$gwrt(false); 
  function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
  {
  {
  var o = {is_affected:false};
  var a = gra( ops, e,s,g, o );
  if( JSON.stringify(a) != JSON.stringify( expect_a )
  || o.is_affected != expect_affected )
  {
  console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
  }
  }
  {
  var o = {is_affected:false};
  var a = grb( ops, e,s,g, o );
  if( JSON.stringify(a) != JSON.stringify( expect_b )
  || o.is_affected != expect_affected )
  {
  console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
  }
  }
  }
  
  function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
  {
  var _n = wh.hn( to_iter ) === 'n'; 
  var scope = wh.rv( _s ); 
  var has_old_item = scope.hasOwnProperty(itemname);
  var has_old_index = scope.hasOwnProperty(indexname);
  var old_item = scope[itemname];
  var old_index = scope[indexname];
  var full = Object.prototype.toString.call(wh.rv(to_iter));
  var type = full[8]; 
  if( type === 'N' && full[10] === 'l' ) type = 'X'; 
  var _y;
  if( _n )
  {
  if( type === 'A' ) 
  {
  var r_iter_item;
  for( var i = 0 ; i < to_iter.length ; i++ )
  {
  scope[itemname] = to_iter[i];
  scope[indexname] = _n ? i : wh.nh(i, 'h');
  r_iter_item = wh.rv(to_iter[i]);
  var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
  _y = _v(key);
  _(father,_y);
  func( env, scope, _y, global );
  }
  }
  else if( type === 'O' ) 
  {
  var i = 0;
  var r_iter_item;
  for( var k in to_iter )
  {
  scope[itemname] = to_iter[k];
  scope[indexname] = _n ? k : wh.nh(k, 'h');
  r_iter_item = wh.rv(to_iter[k]);
  var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
  _y = _v(key);
  _(father,_y);
  func( env,scope,_y,global );
  i++;
  }
  }
  else if( type === 'S' ) 
  {
  for( var i = 0 ; i < to_iter.length ; i++ )
  {
  scope[itemname] = to_iter[i];
  scope[indexname] = _n ? i : wh.nh(i, 'h');
  _y = _v( to_iter[i] + i );
  _(father,_y);
  func( env,scope,_y,global );
  }
  }
  else if( type === 'N' ) 
  {
  for( var i = 0 ; i < to_iter ; i++ )
  {
  scope[itemname] = i;
  scope[indexname] = _n ? i : wh.nh(i, 'h');
  _y = _v( i );
  _(father,_y);
  func(env,scope,_y,global);
  }
  }
  else
  {
  }
  }
  else
  {
  var r_to_iter = wh.rv(to_iter);
  var r_iter_item, iter_item;
  if( type === 'A' ) 
  {
  for( var i = 0 ; i < r_to_iter.length ; i++ )
  {
  iter_item = r_to_iter[i];
  iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
  r_iter_item = wh.rv( iter_item );
  scope[itemname] = iter_item
  scope[indexname] = _n ? i : wh.nh(i, 'h');
  var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
  _y = _v(key);
  _(father,_y);
  func( env, scope, _y, global );
  }
  }
  else if( type === 'O' ) 
  {
  var i=0;
  for( var k in r_to_iter )
  {
  iter_item = r_to_iter[k];
  iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
  r_iter_item = wh.rv( iter_item );
  scope[itemname] = iter_item;
  scope[indexname] = _n ? k : wh.nh(k, 'h');
  var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
  _y=_v(key);
  _(father,_y);
  func( env, scope, _y, global );
  i++
  }
  }
  else if( type === 'S' ) 
  {
  for( var i = 0 ; i < r_to_iter.length ; i++ )
  {
  iter_item = wh.nh(r_to_iter[i],'h');
  scope[itemname] = iter_item;
  scope[indexname] = _n ? i : wh.nh(i, 'h');
  _y = _v( to_iter[i] + i );
  _(father,_y);
  func( env, scope, _y, global );
  }
  }
  else if( type === 'N' ) 
  {
  for( var i = 0 ; i < r_to_iter ; i++ )
  {
  iter_item = wh.nh(i,'h');
  scope[itemname] = iter_item;
  scope[indexname]= _n ? i : wh.nh(i,'h');
  _y = _v( i );
  _(father,_y);
  func(env,scope,_y,global);
  }
  }
  else
  {
  }
  }
  if(has_old_item)
  {
  scope[itemname]=old_item;
  }
  else
  {
  delete scope[itemname];
  }
  if(has_old_index)
  {
  scope[indexname]=old_index;
  }
  else
  {
  delete scope[indexname];
  }
  }
  
  function _ca(o)
  { 
  if ( wh.hn(o) == 'h' ) return true;
  if ( typeof o !== "object" ) return false;
  for(var i in o){ 
  if ( o.hasOwnProperty(i) ){
  if (_ca(o[i])) return true;
  }
  }
  return false;
  }
  function _da( node, attrname, opindex, raw, o )
  {
  var isaffected = false;
  var value = $gdc( raw, "", 2 );
  if ( o.ap && value && value.constructor===Function ) 
  {
  attrname = "$wxs:" + attrname; 
  node.attr["$gdc"] = $gdc;
  }
  if ( o.is_affected || _ca(raw) ) 
  {
  node.n.push( attrname );
  node.raw[attrname] = raw;
  }
  node.attr[attrname] = value;
  }
  function _r( node, attrname, opindex, env, scope, global ) 
  {
  global.opindex=opindex;
  var o = {}, _env;
  var a = grb( z[opindex], env, scope, global, o );
  _da( node, attrname, opindex, a, o );
  }
  function _rz( z, node, attrname, opindex, env, scope, global ) 
  {
  global.opindex=opindex;
  var o = {}, _env;
  var a = grb( z[opindex], env, scope, global, o );
  _da( node, attrname, opindex, a, o );
  }
  function _o( opindex, env, scope, global )
  {
  global.opindex=opindex;
  var nothing = {};
  var r = grb( z[opindex], env, scope, global, nothing );
  return (r&&r.constructor===Function) ? undefined : r;
  }
  function _oz( z, opindex, env, scope, global )
  {
  global.opindex=opindex;
  var nothing = {};
  var r = grb( z[opindex], env, scope, global, nothing );
  return (r&&r.constructor===Function) ? undefined : r;
  }
  function _1( opindex, env, scope, global, o )
  {
  var o = o || {};
  global.opindex=opindex;
  return gra( z[opindex], env, scope, global, o );
  }
  function _1z( z, opindex, env, scope, global, o )
  {
  var o = o || {};
  global.opindex=opindex;
  return gra( z[opindex], env, scope, global, o );
  }
  function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
  {
  var o = {};
  var to_iter = _1( opindex, env, scope, global );
  wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
  }
  function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
  {
  var o = {};
  var to_iter = _1z( z, opindex, env, scope, global );
  wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
  }
  
  
  function _m(tag,attrs,generics,env,scope,global)
  {
  var tmp=_n(tag);
  var base=0;
  for(var i = 0 ; i < attrs.length ; i+=2 )
  {
  if(base+attrs[i+1]<0)
  {
  tmp.attr[attrs[i]]=true;
  }
  else
  {
  _r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
  if(base===0)base=attrs[i+1];
  }
  }
  for(var i=0;i<generics.length;i+=2)
  {
  if(base+generics[i+1]<0)
  {
  tmp.generics[generics[i]]="";
  }
  else
  {
  var $t=grb(z[base+generics[i+1]],env,scope,global);
  if ($t!="") $t="wx-"+$t;
  tmp.generics[generics[i]]=$t;
  if(base===0)base=generics[i+1];
  }
  }
  return tmp;
  }
  function _mz(z,tag,attrs,generics,env,scope,global,s,h)
  {
  var tmp=_n(tag,s,h);
  var base=0;
  for(var i = 0 ; i < attrs.length ; i+=2 )
  {
  if(base+attrs[i+1]<0)
  {
  tmp.attr[attrs[i]]=true;
  }
  else
  {
  _rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
  if(base===0)base=attrs[i+1];
  }
  }
  for(var i=0;i<generics.length;i+=2)
  {
  if(base+generics[i+1]<0)
  {
  tmp.generics[generics[i]]="";
  }
  else
  {
  var $t=grb(z[base+generics[i+1]],env,scope,global);
  if ($t!="") $t="wx-"+$t;
  tmp.generics[generics[i]]=$t;
  if(base===0)base=generics[i+1];
  }
  }
  return tmp;
  }
  
  var nf_init=function(){
  if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
  nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
  }
  if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
  };
  var nf_init_Object=function(){
  Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
  Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
  }
  var nf_init_Function=function(){
  Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
  Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
  Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
  }
  var nf_init_Array=function(){
  Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
  Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
  s=undefined==s?',':s;
  var r="";
  for(var i=0;i<this.length;++i){
  if(0!=i) r+=s;
  if(null==this[i]||undefined==this[i]) r+='';	
  else if(typeof this[i]=='function') r+=this[i].nv_toString();
  else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
  else r+=this[i].toString();
  }
  return r;
  }})
  Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
  Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
  Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
  Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
  Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
  Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
  Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
  Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
  Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
  Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
  Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
  Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
  Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
  Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
  Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
  Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
  Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
  Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
  Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
  Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
  }
  var nf_init_String=function(){
  Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
  Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
  Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
  Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
  Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
  Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
  Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
  Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
  Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
  Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
  Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
  Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
  Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
  Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
  Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
  Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
  Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
  Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
  Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
  Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
  Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
  }
  var nf_init_Boolean=function(){
  Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
  Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
  Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
  }
  var nf_init_Number=function(){
  Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
  Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
  Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
  Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
  Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
  Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
  Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
  Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
  Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
  Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
  Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
  }
  var nf_init_Math=function(){
  Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
  Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
  Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
  Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
  Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
  Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
  Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
  Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
  Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
  Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
  Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
  Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
  Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
  Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
  Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
  Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
  Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
  Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
  Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
  Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
  Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
  Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
  Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
  Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
  Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
  Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
  }
  var nf_init_Date=function(){
  Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
  Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
  Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
  Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
  Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
  Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
  Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
  Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
  Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
  Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
  Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
  Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
  Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
  Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
  Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
  Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
  Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
  Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
  Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
  Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
  Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
  Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
  Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
  Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
  Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
  Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
  Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
  Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
  Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
  Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
  Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
  Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
  Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
  Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
  Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
  Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
  Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
  Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
  Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
  Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
  Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
  Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
  Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
  Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
  Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
  Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
  Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
  }
  var nf_init_RegExp=function(){
  Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
  Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
  Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
  Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
  Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
  Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
  Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
  Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
  Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
  }
  nf_init();
  var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
  var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
  var nv_console={}
  nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
  var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
  function $gdc(o,p,r) {
  o=wh.rv(o);
  if(o===null||o===undefined) return o;
  if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
  if(o.constructor===Object){
  var copy={};
  for(var k in o)
  if(o.hasOwnProperty(k))
  if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
  else copy[p+k]=$gdc(o[k],p,r);
  return copy;
  }
  if(o.constructor===Array){
  var copy=[];
  for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
  return copy;
  }
  if(o.constructor===Date){
  var copy=new Date();
  copy.setTime(o.getTime());
  return copy;
  }
  if(o.constructor===RegExp){
  var f="";
  if(o.global) f+="g";
  if(o.ignoreCase) f+="i";
  if(o.multiline) f+="m";
  return (new RegExp(o.source,f));
  }
  if(r&&o.constructor===Function){
  if ( r == 1 ) return $gdc(o(),undefined, 2);
  if ( r == 2 ) return o;
  }
  return null;
  }
  var nv_JSON={}
  nv_JSON.nv_stringify=function(o){
  JSON.stringify(o);
  return JSON.stringify($gdc(o));
  }
  nv_JSON.nv_parse=function(o){
  if(o===undefined) return undefined;
  var t=JSON.parse(o);
  return $gdc(t,'nv_');
  }
  
  function _af(p, a, c){
  p.extraAttr = {"t_action": a, "t_cid": c};
  }
  
  function _gv( )
  {if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
  return window.__webview_engine_version__;}
  function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
  function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
  function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
  function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
  var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
  function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
  function _tsd( root )
  {
  if( root.tag == "wx-wx-scope" ) 
  {
  root.tag = "virtual";
  root.wxCkey = "11";
  root['wxScopeData'] = root.attr['wx:scope-data'];
  delete root.n;
  delete root.raw;
  delete root.generics;
  delete root.attr;
  }
  for( var i = 0 ; root.children && i < root.children.length ; i++ )
  {
  _tsd( root.children[i] );
  }
  return root;
  }
  
  var e_={}
  if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
  var d_={}
  if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
  var f_={}
  if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
  var p_={};var cs;
  __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
  __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
  __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
  var z=__WXML_GLOBAL__.ops_set.$gwx || [];
  function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2, "&&"],[[2, "&&"],[[7],[3, "isOpen"]],[[7],[3, "isAd"]]],[[7],[3, "isShow"]]]);Z([[7],[3, "id"]]);Z([3, 'adClick']);Z([3, 'ad-wrap ad-wrap-normal']);Z([3, 'error']);Z([3, 'load']);Z([[2, "||"],[[7],[3, "configAdType"]],[1, "banner"]]);Z([[6],[[7],[3, "config"]],[3, "extraData"]]);Z([3, 'videoClick']);Z([3, 'video-ad']);Z([[2, "!"], [[7],[3, "useSlot"]]]);Z([3, 'bg-img']);Z([3, 'widthFix']);Z([3, '/static/imgs/book_video.png']);Z([3, 'text']);Z([a, [[2, "||"],[[2, "&&"],[[6],[[7],[3, "videoAdText"]],[3, "unView"]],[[6],[[6],[[7],[3, "videoAdText"]],[3, "unView"]],[3, "title"]]],[1, ""]]]);
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3, 'cardClick']);Z([3, 'container']);Z([3, 'card']);Z([3, 'card-img']);Z([3, 'widthFix']);Z([[6],[[7],[3, "card"]],[3, "path"]]);Z([3, 'text']);Z([a, [3, 'width: '],[[2, "*"], [[2, "-"], [[6],[[6],[[6],[[7],[3, "card"]],[3, "textAxis"]],[1, 1]],[1, 0]], [[6],[[6],[[6],[[7],[3, "card"]],[3, "textAxis"]],[1, 0]],[1, 0]]], [[7],[3, "scale"]]],[3, 'px; height: '],[[2, "*"], [[2, "-"], [[6],[[6],[[6],[[7],[3, "card"]],[3, "textAxis"]],[1, 1]],[1, 1]], [[6],[[6],[[6],[[7],[3, "card"]],[3, "textAxis"]],[1, 0]],[1, 1]]], [[7],[3, "scale"]]],[3, 'px; top: '],[[2, "*"], [[6],[[6],[[6],[[7],[3, "card"]],[3, "textAxis"]],[1, 0]],[1, 1]], [[7],[3, "scale"]]],[3, 'px; left: '],[[2, "*"], [[6],[[6],[[6],[[7],[3, "card"]],[3, "textAxis"]],[1, 0]],[1, 0]], [[7],[3, "scale"]]],[3, 'px; font-size: '],[[2, "*"], [[2, "||"],[[6],[[7],[3, "card"]],[3, "size"]],[1, 14]], [[7],[3, "scale"]]],[3, 'px; color: '],[[6],[[7],[3, "card"]],[3, "color"]],[3, ';font-weight: '],[[6],[[7],[3, "card"]],[3, "font"]]]);Z([a, [3, '\n        '],[[6],[[7],[3, "card"]],[3, "placeholder"]],[3, '\n    ']]);Z([[2, "&&"],[[6],[[7],[3, "card"]],[3, "lock"]],[[2, "!"], [[7],[3, "unlock"]]]]);Z([3, 'lock']);Z([3, '/static/imgs/lock.png']);
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3, 'line']);Z([3, 'widthFix']);Z([3, '/static/imgs/divide.png']);
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3, 'model']);Z([[2, "!"], [[7],[3, "isShow"]]]);
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3, 'page-home']);Z([3, 'canvas-img']);Z([3, 'widthFix']);Z([[7],[3, "canvasImg"]]);Z([3, 'canvas-title']);Z([a, [[7],[3, "info"]]]);Z([3, 'btn-group']);Z([3, 'showSetTop']);Z([3, 'big-btn']);Z([3, 'none']);Z([3, 'icon']);Z([3, '/static/imgs/sticky_icon.png']);Z([3, 'title']);Z([3, '置顶小程序']);Z([3, 'desc']);Z([3, '发说说更便捷']);Z([3, 'share']);Z([3, '/static/imgs/share_icon.png']);Z([3, '分享小程序']);Z([3, '让好友都来用']);Z([3, 'goHome']);Z([3, 'navigator']);Z([3, '\n        再来一条\n        ']);Z([3, 'arrow']);Z([3, '/static/imgs/btn_jump_r@3x.png']);Z([[7],[3, "isShowAD"]]);Z([3, 'ad-container']);Z([3, 'home']);Z([3, '3']);Z([[7],[3, "isShowSetTop"]]);Z([3, 'set-top']);Z([3, 'top-tips']);Z([3, '/static/imgs/top.png']);Z([3, 'closeSetTop']);Z([3, 'ok-btn']);Z([3, '/static/imgs/ok_btn.png']);
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3, 'page-card']);Z([3, 'focus']);Z([3, 'canvas-container']);Z([3, 'title']);Z([3, '效果预览区']);Z([3, 'card']);Z([a, [3, 'width:'],[[7],[3, "canvasWidth"]],[3, 'px; height:'],[[7],[3, "canvasHeight"]],[3, 'px;']]);Z([3, 'change-wrap']);Z([3, 'goHome']);Z([3, 'text']);Z([3, 'card-img']);Z([3, '/static/imgs/change_card@3x.png']);Z([3, '\n            换张卡片\n        ']);Z([3, 'getRandom']);Z([3, 'random-text']);Z([3, 'random-img']);Z([3, '/static/imgs/random@3x.png']);Z([3, '\n            随机内容\n        ']);Z([3, 'true']);Z([3, 'changeData']);Z([3, 'text-area']);Z([[7],[3, "focus"]]);Z([3, '请输入文案']);Z([3, 'placeholder']);Z([[2, "||"],[[7],[3, "content"]],[1, ""]]);Z([3, 'redirectPublish']);Z([3, 'open-zone']);Z([3, 'zone']);Z([3, '4']);Z([3, '\n        直接发说说\n    ']);Z([3, 'button-container']);Z([3, 'save-card']);Z([3, 'btn-hover']);Z([3, '3']);Z([3, 'btn-img']);Z([3, '/static/imgs/btn_preservation@3x.png']);Z([3, '保存图片']);Z([3, '5']);Z([3, 'share']);Z([1, 1]);Z([3, '/static/imgs/btn_friend@3x.png']);Z([3, '分享好友']);Z([3, '6']);Z([1, 2]);Z([3, '/static/imgs/btn_publish@3x.png']);Z([3, '分享空间']);
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3, 'tabs']);Z([3, 'formSubmit']);Z([3, 'true']);Z([3, 'none']);Z([3, 'form-btn']);Z([3, 'submit']);Z([[7],[3, "tabs"]]);Z([[7],[3, "index"]]);Z([3, 'tabClick']);Z([a, [3, 'tab '],[[2,'?:'],[[2, "==="], [[6],[[7],[3, "activeTab"]],[3, "id"]], [[6],[[7],[3, "item"]],[3, "id"]]],[1, "active"],[1, ""]]]);Z([[7],[3, "item"]]);Z([a, [3, '\n                '],[[6],[[7],[3, "item"]],[3, "label"]],[3, '\n            ']]);Z([[2, "=="], [[6],[[7],[3, "activeTab"]],[3, "id"]], [1, 0]]);Z([3, 'gif']);Z([3, '/static/imgs/forever.gif']);Z([3, 'bg']);Z([3, 'aspectFill']);Z([3, '/static/imgs/halloween_bg.jpg']);Z([3, 'content']);Z([3, 'list']);Z([[7],[3, "scrollTop"]]);Z([3, 'height: 100%']);Z([[2, "==="], [[6],[[7],[3, "activeTab"]],[3, "id"]], [1, 0]]);Z([[2, "&&"],[[7],[3, "recentCard"]],[[6],[[7],[3, "recentCard"]],[3, "length"]]]);Z([3, 'title']);Z([3, '最近使用']);Z([3, 'last-use']);Z([[7],[3, "recentCard"]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([3, 'share']);Z([3, 'recent-card']);Z([[7],[3, "reDraw"]]);Z([3, '热门卡片']);Z([[12], [[6],[[7],[3, "getCards"]],[3, "getData"]], [[5], [[5], [[5],  [[7],[3, "cards"]]] ,[[7],[3, "activeTab"]]] ,[[7],[3, "unlockList"]]]]);Z([3, 'card']);Z([1, true]);Z([3, 'getAdConfig']);Z([[2, "-"], [1, 1]]);Z([3, 'home']);Z([3, '2']);Z([3, 'ad-container']);Z([[7],[3, "isShowAD"]]);Z([[2, "-"], [[7],[3, "index"]], [1, 1]]);Z([[2, "&&"],[[2, "==="], [[2, "%"], [[2, "+"], [[7],[3, "index"]], [1, 1]], [[6],[[7],[3, "adConfig"]],[3, "interval"]]], [1, 0]],[[7],[3, "isShowAD"]]]);Z([3, 'footer-line']);Z([3, 'line-left']);Z([3, 'widthFix']);Z([3, '/static/imgs/coming_l.png']);Z([3, 'line-tips']);Z([3, '敬请期待，更多样式']);Z([3, 'line-right']);Z([3, '/static/imgs/coming_r.png']);Z([3, 'fix-container']);Z([3, 'fix-bg']);Z([3, '/static/imgs/home_pumpkin.png']);Z([3, 'fix-gif']);Z([3, 'http://file.52miniapps.com/group1/M00/5B/AB/ChtgcV2xr3qAKdWBAAJf3pvANyM834.gif']);Z([[2, "||"],[[7],[3, "isShowGuide"]],[[7],[3, "isShareShow"]]]);Z([3, 'share-model']);Z([[2, "!"], [[7],[3, "isShareShow"]]]);Z([3, 'share-title']);Z([3, '看视频永久解锁此卡片']);Z([3, 'closeVideo']);Z([3, 'video']);Z([3, '1']);Z([3, 'video-btn']);Z([3, '/static/imgs/video_bt@3x.png']);Z([3, 'closeShareModel']);Z([3, 'close-icon']);Z([3, '/static/imgs/close_icon.png']);Z([[2, "!"], [[7],[3, "isShowGuide"]]]);Z([3, 'closeGuide']);Z([3, 'guide']);Z([3, '/static/imgs/guide.png']);
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
  __WXML_GLOBAL__.ops_set.$gwx=z;
  __WXML_GLOBAL__.ops_init.$gwx=true;
  var nv_require = function () {var nnm = {};nnm["m_./pages/home/main.wxml:getCards"] = np_0;
var nom = {};
return function (n) {
return function () {
if (!nnm[n]) return undefined;
try {
if (!nom[n]) nom[n] = nnm[n]();
return nom[n];
} catch (e) {
e.message = e.message.replace(/nv_/g, "");
var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
e.stack = e.stack.replace(/snv_/g, " ");
e.stack = $gstack(e.stack);
e.stack += "\n    at " + n.substring(2);
console.error(e);
}
}
}
}();f_["./pages/home/main.wxml"] = {};f_["./pages/home/main.wxml"]["getCards"] = nv_require("m_./pages/home/main.wxml:getCards");function np_0(){var nv_module = {nv_exports: {}};function nv_getData(nv_data, nv_type, nv_unlockList) {
  if (nv_type.nv_kind === 'recommend') {
    return nv_data[(nt_1 = nv_type.nv_kind, null == nt_1 ? undefined : "number" === typeof nt_1 ? nt_1 : "nv_" + nt_1)];
  }

  return nv_data[(nt_1 = nv_type.nv_kind, null == nt_1 ? undefined : "number" === typeof nt_1 ? nt_1 : "nv_" + nt_1)].nv_sort(function (nv_a, nv_b) {
    return -nv_a.nv_id + nv_b.nv_id;
  });
}

function nv_getLockStatus(nv_list, nv_key) {
  return nv_list.nv_indexOf(nv_key) !== -1;
}

nv_module.nv_exports.nv_getData = nv_getData;
nv_module.nv_exports.nv_getLockStatus = nv_getLockStatus;return nv_module.nv_exports;}
  d_["./components/advert-board/index.wxml"] = {};var m0= function(e, s, r, gg){var z = gz$gwx_1();var x_C = _v();_(r, x_C);if(_oz(z, 0, e, s, gg)){ x_C.wxVkey = 1;cs.push("./components/advert-board/index.wxml:block:1:2");cs.push("./components/advert-board/index.wxml:block:1:2");var x_F = _v();_(x_C, x_F);if(_oz(z, 1, e, s, gg)){ x_F.wxVkey = 1;cs.push("./components/advert-board/index.wxml:view:2:6");cs.push("./components/advert-board/index.wxml:view:2:6");var x_I = _mz(z, 'view', ["bindtap", 2,"class", 1], [], e,s,gg,false);cs.push("./components/advert-board/index.wxml:ad:3:10");var x_J = _mz(z, 'ad', ["binderror", 4,"bindload", 1,"type", 2,"unitId", -3], [], e,s,gg,false);cs.pop();_(x_I, x_J);cs.pop();_(x_F, x_I);cs.pop();}x_F.wxXCkey = 1;var x_K = _v();_(x_C, x_K);if(_oz(z, 7, e, s, gg)){ x_K.wxVkey = 1;cs.push("./components/advert-board/index.wxml:view:5:6");cs.push("./components/advert-board/index.wxml:view:5:6");var x_N = _mz(z, 'view', ["bindtap", 8,"class", 1], [], e,s,gg,false);cs.push("./components/advert-board/index.wxml:slot:9:10");var x_O = _n("slot", false);cs.pop();_(x_N, x_O);var x_P = _v();_(x_N, x_P);if(_oz(z, 10, e, s, gg)){ x_P.wxVkey = 1;cs.push("./components/advert-board/index.wxml:view:10:10");cs.push("./components/advert-board/index.wxml:view:10:10");var x_S = _n("view", false);cs.push("./components/advert-board/index.wxml:image:11:14");var x_T = _mz(z, 'image', ["class", 11,"mode", 1,"src", 2], [], e,s,gg,false);cs.pop();_(x_S, x_T);cs.push("./components/advert-board/index.wxml:view:12:14");var x_U = _n("view", false);_rz(z, x_U, 'class', 14, e, s, gg);var x_V = _oz(z, 15, e, s, gg);_(x_U, x_V);cs.pop();_(x_S, x_U);cs.pop();_(x_P, x_S);cs.pop();}x_P.wxXCkey = 1;cs.pop();_(x_K, x_N);cs.pop();}x_K.wxXCkey = 1;cs.pop();cs.pop();}x_C.wxXCkey = 1;return r;};e_["./components/advert-board/index.wxml"] = {f: m0,j: [],i: [],ti: [],ic: []};d_["./components/example-card/index.wxml"] = {};var m1= function(e, s, r, gg){var z = gz$gwx_2();cs.push("./components/example-card/index.wxml:view:1:2");var x_C = _mz(z, 'view', ["bindtap", 0,"class", 1,"id", 1], [], e,s,gg,false);cs.push("./components/example-card/index.wxml:image:2:6");var x_D = _mz(z, 'image', ["class", 3,"mode", 1,"src", 2], [], e,s,gg,false);cs.pop();_(x_C, x_D);cs.push("./components/example-card/index.wxml:view:3:6");var x_E = _mz(z, 'view', ["class", 6,"style", 1], [], e,s,gg,false);var x_F = _oz(z, 8, e, s, gg);_(x_E, x_F);cs.pop();_(x_C, x_E);var x_G = _v();_(x_C, x_G);if(_oz(z, 9, e, s, gg)){ x_G.wxVkey = 1;cs.push("./components/example-card/index.wxml:image:9:6");cs.push("./components/example-card/index.wxml:image:9:6");var x_J = _mz(z, 'image', ["class", 10,"src", 1], [], e,s,gg,false);cs.pop();_(x_G, x_J);cs.pop();}x_G.wxXCkey = 1;cs.pop();_(r, x_C);return r;};e_["./components/example-card/index.wxml"] = {f: m1,j: [],i: [],ti: [],ic: []};d_["./components/line/index.wxml"] = {};var m2= function(e, s, r, gg){var z = gz$gwx_3();cs.push("./components/line/index.wxml:view:1:2");var x_C = _n("view", false);_rz(z, x_C, 'class', 0, e, s, gg);cs.push("./components/line/index.wxml:image:2:6");var x_D = _mz(z, 'image', ["mode", 1,"src", 1], [], e,s,gg,false);cs.pop();_(x_C, x_D);cs.pop();_(r, x_C);return r;};e_["./components/line/index.wxml"] = {f: m2,j: [],i: [],ti: [],ic: []};d_["./components/model/index.wxml"] = {};var m3= function(e, s, r, gg){var z = gz$gwx_4();cs.push("./components/model/index.wxml:view:1:2");var x_C = _mz(z, 'view', ["class", 0,"hidden", 1], [], e,s,gg,false);cs.push("./components/model/index.wxml:slot:2:6");var x_D = _n("slot", false);cs.pop();_(x_C, x_D);cs.pop();_(r, x_C);return r;};e_["./components/model/index.wxml"] = {f: m3,j: [],i: [],ti: [],ic: []};d_["./pages/card/main.wxml"] = {};var m4= function(e, s, r, gg){var z = gz$gwx_5();cs.push("./pages/card/main.wxml:view:1:2");var x_C = _n("view", false);_rz(z, x_C, 'class', 0, e, s, gg);cs.push("./pages/card/main.wxml:image:2:6");var x_D = _mz(z, 'image', ["class", 1,"mode", 1,"src", 2], [], e,s,gg,false);cs.pop();_(x_C, x_D);cs.push("./pages/card/main.wxml:view:3:6");var x_E = _n("view", false);_rz(z, x_E, 'class', 4, e, s, gg);var x_F = _oz(z, 5, e, s, gg);_(x_E, x_F);cs.pop();_(x_C, x_E);cs.push("./pages/card/main.wxml:view:4:6");var x_G = _n("view", false);_rz(z, x_G, 'class', 6, e, s, gg);cs.push("./pages/card/main.wxml:button:5:10");var x_H = _mz(z, 'button', ["bindtap", 7,"class", 1,"hoverClass", 2], [], e,s,gg,false);cs.push("./pages/card/main.wxml:image:6:14");var x_I = _mz(z, 'image', ["class", 10,"mode", -8,"src", 1], [], e,s,gg,false);cs.pop();_(x_H, x_I);cs.push("./pages/card/main.wxml:view:7:14");var x_J = _n("view", false);_rz(z, x_J, 'class', 12, e, s, gg);var x_K = _oz(z, 13, e, s, gg);_(x_J, x_K);cs.pop();_(x_H, x_J);cs.push("./pages/card/main.wxml:view:8:14");var x_L = _n("view", false);_rz(z, x_L, 'class', 14, e, s, gg);var x_M = _oz(z, 15, e, s, gg);_(x_L, x_M);cs.pop();_(x_H, x_L);cs.pop();_(x_G, x_H);cs.push("./pages/card/main.wxml:button:10:10");var x_N = _mz(z, 'button', ["class", 8,"hoverClass", 1,"openType", 8], [], e,s,gg,false);cs.push("./pages/card/main.wxml:image:11:14");var x_O = _mz(z, 'image', ["class", 10,"mode", -8,"src", 7], [], e,s,gg,false);cs.pop();_(x_N, x_O);cs.push("./pages/card/main.wxml:view:12:14");var x_P = _n("view", false);_rz(z, x_P, 'class', 12, e, s, gg);var x_Q = _oz(z, 18, e, s, gg);_(x_P, x_Q);cs.pop();_(x_N, x_P);cs.push("./pages/card/main.wxml:view:13:14");var x_R = _n("view", false);_rz(z, x_R, 'class', 14, e, s, gg);var x_S = _oz(z, 19, e, s, gg);_(x_R, x_S);cs.pop();_(x_N, x_R);cs.pop();_(x_G, x_N);cs.pop();_(x_C, x_G);cs.push("./pages/card/main.wxml:view:16:6");var x_T = _mz(z, 'view', ["bindtap", 20,"class", 1], [], e,s,gg,false);var x_U = _oz(z, 22, e, s, gg);_(x_T, x_U);cs.push("./pages/card/main.wxml:image:18:10");var x_V = _mz(z, 'image', ["class", 23,"src", 1], [], e,s,gg,false);cs.pop();_(x_T, x_V);cs.pop();_(x_C, x_T);var x_W = _v();_(x_C, x_W);if(_oz(z, 25, e, s, gg)){ x_W.wxVkey = 1;cs.push("./pages/card/main.wxml:view:20:6");cs.push("./pages/card/main.wxml:view:20:6");var x_Z = _n("view", false);_rz(z, x_Z, 'class', 26, e, s, gg);cs.push("./pages/card/main.wxml:AD:21:10");var x_a = _mz(z, 'AD', ["location", 27,"trackPid", 1], [], e,s,gg,false);cs.pop();_(x_Z, x_a);cs.pop();_(x_W, x_Z);cs.pop();}x_W.wxXCkey = 1;cs.pop();_(r, x_C);cs.push("./pages/card/main.wxml:Model:27:2");var x_b = _n("Model", false);_rz(z, x_b, 'isShow', 29, e, s, gg);cs.push("./pages/card/main.wxml:view:28:6");var x_c = _n("view", false);_rz(z, x_c, 'class', 30, e, s, gg);cs.push("./pages/card/main.wxml:image:29:10");var x_d = _mz(z, 'image', ["class", 31,"mode", -29,"src", 1], [], e,s,gg,false);cs.pop();_(x_c, x_d);cs.push("./pages/card/main.wxml:image:30:10");var x_e = _mz(z, 'image', ["bindtap", 33,"class", 1,"mode", -31,"src", 2], [], e,s,gg,false);cs.pop();_(x_c, x_e);cs.pop();_(x_b, x_c);cs.pop();_(r, x_b);return r;};e_["./pages/card/main.wxml"] = {f: m4,j: [],i: [],ti: [],ic: []};d_["./pages/editCard/main.wxml"] = {};var m5= function(e, s, r, gg){var z = gz$gwx_6();cs.push("./pages/editCard/main.wxml:view:1:2");var x_C = _n("view", false);_rz(z, x_C, 'class', 0, e, s, gg);cs.push("./pages/editCard/main.wxml:view:2:6");var x_D = _mz(z, 'view', ["bindtap", 1,"class", 1], [], e,s,gg,false);cs.push("./pages/editCard/main.wxml:view:3:10");var x_E = _n("view", false);_rz(z, x_E, 'class', 3, e, s, gg);var x_F = _oz(z, 4, e, s, gg);_(x_E, x_F);cs.pop();_(x_D, x_E);cs.push("./pages/editCard/main.wxml:canvas:4:10");var x_G = _mz(z, 'canvas', ["canvasId", 5,"style", 1], [], e,s,gg,false);cs.pop();_(x_D, x_G);cs.pop();_(x_C, x_D);cs.push("./pages/editCard/main.wxml:view:6:6");var x_H = _n("view", false);_rz(z, x_H, 'class', 7, e, s, gg);cs.push("./pages/editCard/main.wxml:view:7:10");var x_I = _mz(z, 'view', ["bindtap", 8,"class", 1], [], e,s,gg,false);cs.push("./pages/editCard/main.wxml:image:8:14");var x_J = _mz(z, 'image', ["class", 10,"src", 1], [], e,s,gg,false);cs.pop();_(x_I, x_J);var x_K = _oz(z, 12, e, s, gg);_(x_I, x_K);cs.pop();_(x_H, x_I);cs.push("./pages/editCard/main.wxml:view:11:10");var x_L = _mz(z, 'view', ["bindtap", 13,"class", 1], [], e,s,gg,false);cs.push("./pages/editCard/main.wxml:image:12:14");var x_M = _mz(z, 'image', ["class", 15,"src", 1], [], e,s,gg,false);cs.pop();_(x_L, x_M);var x_N = _oz(z, 17, e, s, gg);_(x_L, x_N);cs.pop();_(x_H, x_L);cs.pop();_(x_C, x_H);cs.push("./pages/editCard/main.wxml:textarea:16:6");var x_O = _mz(z, 'textarea', ["autoFocus", 18,"bindinput", 1,"class", 2,"focus", 3,"placeholder", 4,"placeholderClass", 5,"value", 6], [], e,s,gg,false);cs.pop();_(x_C, x_O);cs.push("./pages/editCard/main.wxml:button:18:6");var x_P = _mz(z, 'button', ["bindtap", 25,"class", 1,"data-type", 2,"id", 3], [], e,s,gg,false);var x_Q = _oz(z, 29, e, s, gg);_(x_P, x_Q);cs.pop();_(x_C, x_P);cs.push("./pages/editCard/main.wxml:view:23:6");var x_R = _n("view", false);_rz(z, x_R, 'class', 30, e, s, gg);cs.push("./pages/editCard/main.wxml:button:24:10");var x_S = _mz(z, 'button', ["bindtap", 25,"data-type", 6,"hoverClass", 7,"id", 8], [], e,s,gg,false);cs.push("./pages/editCard/main.wxml:image:25:14");var x_T = _mz(z, 'image', ["class", 34,"src", 1], [], e,s,gg,false);cs.pop();_(x_S, x_T);cs.push("./pages/editCard/main.wxml:view:26:14");var x_U = _n("view", false);var x_V = _oz(z, 36, e, s, gg);_(x_U, x_V);cs.pop();_(x_S, x_U);cs.pop();_(x_R, x_S);cs.push("./pages/editCard/main.wxml:button:28:10");var x_W = _mz(z, 'button', ["hoverClass", 32,"id", 5,"openType", 6,"shareType", 7], [], e,s,gg,false);cs.push("./pages/editCard/main.wxml:image:29:14");var x_X = _mz(z, 'image', ["class", 34,"src", 6], [], e,s,gg,false);cs.pop();_(x_W, x_X);cs.push("./pages/editCard/main.wxml:view:30:14");var x_Y = _n("view", false);var x_Z = _oz(z, 41, e, s, gg);_(x_Y, x_Z);cs.pop();_(x_W, x_Y);cs.pop();_(x_R, x_W);cs.push("./pages/editCard/main.wxml:button:32:10");var x_a = _mz(z, 'button', ["hoverClass", 32,"id", 10,"openType", 6,"shareType", 11], [], e,s,gg,false);cs.push("./pages/editCard/main.wxml:image:33:14");var x_b = _mz(z, 'image', ["class", 34,"src", 10], [], e,s,gg,false);cs.pop();_(x_a, x_b);cs.push("./pages/editCard/main.wxml:view:34:14");var x_c = _n("view", false);var x_d = _oz(z, 45, e, s, gg);_(x_c, x_d);cs.pop();_(x_a, x_c);cs.pop();_(x_R, x_a);cs.pop();_(x_C, x_R);cs.pop();_(r, x_C);return r;};e_["./pages/editCard/main.wxml"] = {f: m5,j: [],i: [],ti: [],ic: []};d_["./pages/home/main.wxml"] = {};var m6= function(e, s, r, gg){var z = gz$gwx_7();cs.push("./pages/home/main.wxml:view:20:2");var x_C = _n("view", false);_rz(z, x_C, 'class', 0, e, s, gg);cs.push("./pages/home/main.wxml:form:21:6");var x_D = _mz(z, 'form', ["bindsubmit", 1,"reportSubmit", 1], [], e,s,gg,false);cs.push("./pages/home/main.wxml:button:22:10");var x_E = _mz(z, 'button', ["buttonHover", 3,"class", 1,"formType", 2], [], e,s,gg,false);var x_F = _v();_(x_E, x_F);cs.push("./pages/home/main.wxml:view:23:14");var x_G = function (x_A, x_B, x_D, x_C) {cs.push("./pages/home/main.wxml:view:23:14");var x_E = _mz(z, 'view', ["bindtap", 8,"class", 1,"data-item", 2], [], x_A,x_B,x_C,false);var x_F = _oz(z, 11, x_A, x_B, x_C);_(x_E, x_F);cs.pop();_(x_D, x_E);return x_D;};x_F.wxXCkey = 2;_2z(z, 6, x_G, e, s, gg, x_F, 'item', 'index', '{{index}}');cs.pop();cs.pop();_(x_D, x_E);cs.pop();_(x_C, x_D);cs.pop();_(r, x_C);var x_J = _v();_(r, x_J);if(_oz(z, 12, e, s, gg)){ x_J.wxVkey = 1;cs.push("./pages/home/main.wxml:image:29:2");cs.push("./pages/home/main.wxml:image:29:2");var x_M = _mz(z, 'image', ["class", 13,"src", 1], [], e,s,gg,false);cs.pop();_(x_J, x_M);cs.pop();}x_J.wxXCkey = 1;cs.push("./pages/home/main.wxml:image:30:2");var x_N = _mz(z, 'image', ["class", 15,"mode", 1,"src", 2], [], e,s,gg,false);cs.pop();_(r, x_N);cs.push("./pages/home/main.wxml:view:31:2");var x_O = _n("view", false);_rz(z, x_O, 'class', 18, e, s, gg);cs.push("./pages/home/main.wxml:view:32:6");var x_P = _n("view", false);_rz(z, x_P, 'class', 19, e, s, gg);cs.push("./pages/home/main.wxml:scroll-view:33:10");var x_Q = _mz(z, 'scroll-view', ["scrollY", -1,"scrollTop", 20,"style", 1], [], e,s,gg,false);var x_R = _v();_(x_Q, x_R);if(_oz(z, 22, e, s, gg)){ x_R.wxVkey = 1;cs.push("./pages/home/main.wxml:block:38:14");cs.push("./pages/home/main.wxml:block:38:14");var x_U = _v();_(x_R, x_U);if(_oz(z, 23, e, s, gg)){ x_U.wxVkey = 1;cs.push("./pages/home/main.wxml:block:39:18");cs.push("./pages/home/main.wxml:block:39:18");cs.push("./pages/home/main.wxml:view:40:22");var x_X = _n("view", false);_rz(z, x_X, 'class', 24, e, s, gg);var x_Y = _oz(z, 25, e, s, gg);_(x_X, x_Y);cs.pop();_(x_U, x_X);cs.push("./pages/home/main.wxml:view:41:22");var x_Z = _n("view", false);_rz(z, x_Z, 'class', 26, e, s, gg);var x_a = _v();_(x_Z, x_a);cs.push("./pages/home/main.wxml:Card:42:26");var x_b = function (x_A, x_B, x_D, x_C) {cs.push("./pages/home/main.wxml:Card:42:26");var x_E = _mz(z, 'Card', ["bindopenShare", 29,"card", -19,"class", 1,"reDraw", 2,"unlock", -27], [], x_A,x_B,x_C,false);cs.pop();_(x_D, x_E);return x_D;};x_a.wxXCkey = 2;_2z(z, 27, x_b, e, s, gg, x_a, 'item', 'index', '{{item.id}}');cs.pop();cs.pop();_(x_U, x_Z);cs.pop();cs.pop();}x_U.wxXCkey = 1;cs.push("./pages/home/main.wxml:view:46:18");var x_e = _n("view", false);_rz(z, x_e, 'class', 24, e, s, gg);var x_f = _oz(z, 32, e, s, gg);_(x_e, x_f);cs.pop();_(x_R, x_e);cs.pop();cs.pop();}x_R.wxXCkey = 1;var x_g = _v();_(x_Q, x_g);cs.push("./pages/home/main.wxml:block:49:14");var x_h = function (x_A, x_B, x_D, x_C) {cs.push("./pages/home/main.wxml:block:49:14");cs.push("./pages/home/main.wxml:form:50:18");var x_E = _mz(z, 'form', ["bindsubmit", 1,"reportSubmit", 1], [], x_A,x_B,x_C,false);cs.push("./pages/home/main.wxml:button:51:22");var x_F = _mz(z, 'button', ["buttonHover", 3,"class", 1,"formType", 2], [], x_A,x_B,x_C,false);cs.push("./pages/home/main.wxml:Card:52:26");var x_G = _mz(z, 'Card', ["bindopenShare", 29,"card", -19,"class", 5,"unlock", 6], [], x_A,x_B,x_C,false);cs.pop();_(x_F, x_G);cs.push("./pages/home/main.wxml:Line:58:26");var x_H = _n("Line", false);cs.pop();_(x_F, x_H);cs.push("./pages/home/main.wxml:AD:59:26");var x_I = _mz(z, 'AD', ["bindadConfig", 36,"index", 1,"location", 2,"trackPid", 3], [], x_A,x_B,x_C,false);cs.pop();_(x_F, x_I);cs.push("./pages/home/main.wxml:view:65:26");var x_J = _n("view", false);_rz(z, x_J, 'class', 40, x_A, x_B, x_C);var x_K = _v();_(x_J, x_K);if(_oz(z, 41, x_A, x_B, x_C)){ x_K.wxVkey = 1;cs.push("./pages/home/main.wxml:AD:66:30");cs.push("./pages/home/main.wxml:AD:66:30");var x_N = _mz(z, 'AD', ["index", 42,"location", -4,"trackPid", -3], [], x_A,x_B,x_C,false);cs.pop();_(x_K, x_N);cs.pop();}x_K.wxXCkey = 1;cs.pop();_(x_F, x_J);var x_O = _v();_(x_F, x_O);if(_oz(z, 43, x_A, x_B, x_C)){ x_O.wxVkey = 1;cs.push("./pages/home/main.wxml:Line:73:26");cs.push("./pages/home/main.wxml:Line:73:26");var x_R = _n("Line", false);cs.pop();_(x_O, x_R);cs.pop();}x_O.wxXCkey = 1;cs.pop();_(x_E, x_F);cs.pop();_(x_D, x_E);cs.pop();return x_D;};x_g.wxXCkey = 2;_2z(z, 33, x_h, e, s, gg, x_g, 'item', 'index', '{{item.id}}');cs.pop();cs.push("./pages/home/main.wxml:view:77:14");var x_k = _n("view", false);_rz(z, x_k, 'class', 44, e, s, gg);cs.push("./pages/home/main.wxml:image:78:18");var x_l = _mz(z, 'image', ["class", 45,"mode", 1,"src", 2], [], e,s,gg,false);cs.pop();_(x_k, x_l);cs.push("./pages/home/main.wxml:view:79:18");var x_m = _n("view", false);_rz(z, x_m, 'class', 48, e, s, gg);var x_n = _oz(z, 49, e, s, gg);_(x_m, x_n);cs.pop();_(x_k, x_m);cs.push("./pages/home/main.wxml:image:80:18");var x_o = _mz(z, 'image', ["class", 50,"mode", -4,"src", 1], [], e,s,gg,false);cs.pop();_(x_k, x_o);cs.pop();_(x_Q, x_k);cs.pop();_(x_P, x_Q);cs.pop();_(x_O, x_P);cs.pop();_(r, x_O);var x_p = _v();_(r, x_p);if(_oz(z, 12, e, s, gg)){ x_p.wxVkey = 1;cs.push("./pages/home/main.wxml:view:85:2");cs.push("./pages/home/main.wxml:view:85:2");var x_s = _n("view", false);_rz(z, x_s, 'class', 52, e, s, gg);cs.push("./pages/home/main.wxml:image:86:6");var x_t = _mz(z, 'image', ["class", 53,"mode", -7,"src", 1], [], e,s,gg,false);cs.pop();_(x_s, x_t);cs.push("./pages/home/main.wxml:image:87:6");var x_u = _mz(z, 'image', ["class", 55,"src", 1], [], e,s,gg,false);cs.pop();_(x_s, x_u);cs.pop();_(x_p, x_s);cs.pop();}x_p.wxXCkey = 1;cs.push("./pages/home/main.wxml:Model:89:2");var x_v = _n("Model", false);_rz(z, x_v, 'isShow', 57, e, s, gg);cs.push("./pages/home/main.wxml:view:90:6");var x_w = _mz(z, 'view', ["class", 58,"hidden", 1], [], e,s,gg,false);cs.push("./pages/home/main.wxml:view:91:10");var x_x = _n("view", false);_rz(z, x_x, 'class', 60, e, s, gg);var x_y = _oz(z, 61, e, s, gg);_(x_x, x_y);cs.pop();_(x_w, x_x);cs.push("./pages/home/main.wxml:AD:92:14");var x_Az = _mz(z, 'AD', ["bindcloseVideo", 62,"location", 1,"trackPid", 2,"useSlot", -27], [], e,s,gg,false);cs.push("./pages/home/main.wxml:image:93:18");var x_AA = _mz(z, 'image', ["class", 65,"src", 1], [], e,s,gg,false);cs.pop();_(x_Az, x_AA);cs.pop();_(x_w, x_Az);cs.push("./pages/home/main.wxml:image:95:10");var x_AB = _mz(z, 'image', ["bindtap", 67,"class", 1,"mode", -21,"src", 2], [], e,s,gg,false);cs.pop();_(x_w, x_AB);cs.pop();_(x_v, x_w);cs.push("./pages/home/main.wxml:form:97:6");var x_AC = _mz(z, 'form', ["bindsubmit", 1,"hidden", 69,"reportSubmit", 1], [], e,s,gg,false);cs.push("./pages/home/main.wxml:button:98:10");var x_AD = _mz(z, 'button', ["buttonHover", 3,"class", 1,"formType", 2], [], e,s,gg,false);cs.push("./pages/home/main.wxml:image:99:14");var x_AE = _mz(z, 'image', ["bindtap", 71,"class", 1,"mode", -25,"src", 2], [], e,s,gg,false);cs.pop();_(x_AD, x_AE);cs.pop();_(x_AC, x_AD);cs.pop();_(x_v, x_AC);cs.pop();_(r, x_v);return r;};e_["./pages/home/main.wxml"] = {f: m6,j: [],i: [],ti: [],ic: []};
  if(path&&e_[path]){
  window.__wxml_comp_version__=0.02
  return function(env,dd,global){
  $gwxc=0;
  var root={"tag":"wx-page"};
  root.children=[];
  var main=e_[path].f;cs = [];
  if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
  if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
  {
  env=window.__mergeData__(env,dd);
  }
  try{
  /*console.log('path:', path);
  console.log('env:', JSON.stringify(env) );
  console.log('dd:', dd);
  console.log('root:', root);*/
  main(env,{},root,global);
  _tsd(root);
  if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
  }catch(err){console.log(cs, env);
  console.log(err);
  }
  return root;
  }
  }
  }
  
  __wxAppCode__["components/advert-board/index.json"]={"component":true}
__wxAppCode__["components/advert-board/index.wxml"]=$gwx("./components/advert-board/index.wxml")
__wxAppCode__["components/example-card/index.json"]={"component":true}
__wxAppCode__["components/example-card/index.wxml"]=$gwx("./components/example-card/index.wxml")
__wxAppCode__["components/line/index.json"]={"component":true}
__wxAppCode__["components/line/index.wxml"]=$gwx("./components/line/index.wxml")
__wxAppCode__["components/model/index.json"]={"component":true}
__wxAppCode__["components/model/index.wxml"]=$gwx("./components/model/index.wxml")
__wxAppCode__["pages/card/main.json"]={"usingComponents":{"Model":"../../components/model/index","AD":"../../components/advert-board/index"}}
__wxAppCode__["pages/card/main.wxml"]=$gwx("./pages/card/main.wxml")
__wxAppCode__["pages/home/main.json"]={"navigationBarTitleText":"点击选择卡片样式","navigationBarBackgroundColor":"#1B1E26","navigationBarTextStyle":"white","disableScroll":true,"usingComponents":{"Card":"../../components/example-card/index","Model":"../../components/model/index","Line":"../../components/line/index","AD":"../../components/advert-board/index"}}
__wxAppCode__["pages/home/main.wxml"]=$gwx("./pages/home/main.wxml")
define("api/ad.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.adRef=void 0,exports.getAdConfig=function(r){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{force:!1},n="adConfig-"+r,t=a.default.get(n);if(t&&!e.force)return Promise.resolve(t);if(d.includes(r))return new Promise(function(t){u.listenOnce(r,function(e){t(e)})});return d.push(r),l(r).then(function(e){var t=d.indexOf(r);return d.splice(t,1),u.trigger(r,e),a.default.set(n,e),e})},exports.getConfig=l,exports.getAdVideoExpire=function(){return(0,n.request)({url:"/index.php",data:{c:"WxmpUser",a:"getAdVideoExpire",channel:t.default.hyChannel,userKey:(0,r.getUserKey)(),version:t.default.version}})},exports.eventReport=function(e,t){for(var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,n=[],a=0;a<r;a++)n.push(s(e,t));return c(n)},exports.eventReportPerSecond=function(e,t){f.push(s(e,t)),!p&&0<f.length&&(p=setTimeout(function(){c(f),f=[],p=void 0},1e3))},exports.unlockChapter=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return(0,n.request)({url:"/index.php",data:{c:"WxmpAd",a:"unlockChapter",adSign:e,type:t}})};var t=o(require("../project.config")),r=require("../utils/user-key"),a=o(require("../globalData/cache")),n=require("../api/utils"),i=o(require("blueimp-md5")),e=require("../utils/eventHub");function o(e){return e&&e.__esModule?e:{default:e}}exports.adRef={home:29,edit:3,video:18};var u=new e.PubSub,d=[];function l(e){return g({url:"/getByRealTime",data:{a:{a:"",b:"",c:"",d:getApp().globalData.userInfo&&getApp().globalData.userInfo.first_login||"1",e:""},b:(0,r.getUserKey)(),c:t.default.hyChannel,d:getApp().globalData.iPhone?"2":"1",e:t.default.adMpId,f:t.default.version,g:"1.5.9",h:e,i:"0",j:{a:"",b:"",c:"",d:""},k:["18"],l:""}}).then(function(e){return e.data.data&&JSON.parse(e.data.data)[0]}).catch(function(e){console.log("getConfig err: ",e)})}var f=[],p=void 0;function s(e,t){return{a:h(),b:t.adId,c:"18",d:h(),e:h(),f:"mp"+(new Date).getTime()+h(),g:e,h:parseInt((new Date).getTime()/1e3).toString(),i:"",j:t.pid,k:t.errorCode||"",l:"",m:"",n:t.id}}function c(e){return g({url:"/report",data:{a:{a:{a:"",b:"",c:"",d:getApp().globalData.userInfo&&getApp().globalData.userInfo.first_login||1,e:getApp().globalData.session},b:(0,r.getUserKey)(),c:t.default.hyChannel,d:getApp().globalData.iPhone?"2":"1",e:t.default.adMpId,f:t.default.version,g:"1.5.9",h:"0",j:getApp().globalData.openid},b:e}})}function g(o){return new Promise(function(t,r){var e=o.url,n=o.data;e="https://adapi.yipinread.com"+e;var a=(0,i.default)(JSON.stringify(n)+"c73d26b7a3f939473382d6e5c3ffd980");wx.request({url:e,method:"POST",header:{"content-type":"application/json",SIGN:a},data:n,success:function(e){t(e)},fail:function(e){r(e)}})})}function h(){var e=Math.floor(1e3*Math.random());return 0===e?1:e}
});
define("api/common.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.getConfig=function(){var e=a.default.get("config");if(e)return Promise.resolve(e);return(0,r.request)({url:"/index.php",data:{c:"WxmpConfig",a:"getConfig"}}).then(function(e){if(e.data.status!==r.STATUS_CODE_SUCCESS)throw e;var t=e.data.info;return a.default.set("config",t),t})},exports.getDialogData=function(e){return(0,r.request)({url:"/index.php",data:{c:"WxmpDialog",a:"getData",id:e}})},exports.getLaunchUrl=function(){return(0,r.request)({url:"/index.php?c=WxmpConfig&a=getLaunchUrl"}).then(function(e){var t=e.data;if(t.status===r.STATUS_CODE_SUCCESS&&t.info.url)return t.info.url;throw t})},exports.getAdminConfig=function(){var e=a.default.get("adminConfig");if(e)return Promise.resolve(e);return(0,r.request)({url:"/index.php",data:{c:"WxmpWelfare",a:"getAdminConfig"}}).then(function(e){if(e.data.status!==r.STATUS_CODE_SUCCESS)throw e;var t=e.data.info;return a.default.set("adminConfig",t),t})};var e,r=require("../api/utils"),t=require("../globalData/cache"),a=(e=t)&&e.__esModule?e:{default:e};
});
define("api/editCard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.getContent=function(t){return(0,e.request)({url:"/index.php",data:{c:"WxmpTalk",a:"getContents",m:"Active",id:t}}).then(function(t){if(t.data.status===e.STATUS_CODE_SUCCESS)return t.data.info;throw new Error(t.data.info)}).catch(function(t){throw new Error(t)})};var e=require("../api/utils");
});
define("api/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.unlockList=function(){return(0,t.request)({url:"/index.php?c=WxmpTalk&a=getUnlockList&m=Active"})},exports.unlockCard=function(e,r){return(0,t.request)({url:"/index.php?c=WxmpTalk&a=unlockCard&m=Active",data:{id:e,type:r}})},exports.addFormId=function(e){(0,t.request)({url:"/index.php?c=WxmpUser&a=addFormId",data:{formId:e}})};var t=require("./utils");
});
define("api/user.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};exports.login=function(){var u=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{refresh:!1,useLoading:!1},o=arguments[1];u.useLoading&&wx.showLoading({title:"登录中..."});return new Promise(function(s,t){function n(e){t(e),u.useLoading&&wx.hideLoading()}wx.login({success:function(e){(0,a.request)({url:"/index.php?c=WxmpAuth&a=login&oid=code",data:r({code:e.code,getOpenId:1},o)}).then(function(e){var t=e.data.info.session,n=e.data.info.openid,o=e.data.info;d.default.set("session",t),d.default.set("openid",n),d.default.set("userInfo",o),f.default.login(n),f.default.setProfile({is_login:!0}),l.reportParams.setParam("openId",n),l.reportParams.setParam("qid",o.id);var r=getCurrentPages(),a=r[r.length-1];if("undefined"==typeof tt&&u.refresh&&!a.route.includes("login/")){var i=param(a.options);appConfig.tabBar&&appConfig.tabBar.list&&appConfig.tabBar.list.find(function(e){return e.pagePath===a.route})?wx.reLaunch({url:"/"+a.route+"?"+i}):wx.redirectTo({url:"/"+a.route+"?"+i})}!function(e){s(e),u.useLoading&&wx.hideLoading()}(e)}).catch(function(e){getApp().globalData.session="",wx.setStorageSync("session",""),n(e)})},fail:function(e){n(e)}})})};var a=require("./utils"),d=e(require("../globalData/data_storage")),f=e(require("../sensor/courier")),l=require("../sensor/report");function e(e){return e&&e.__esModule?e:{default:e}}
});
define("api/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.STATUS_CODE_BALANCE_INSUFFICIENT=exports.STATUS_CODE_NOT_EXISTS=exports.STATUS_CODE_UNAUTHORIZED=exports.STATUS_CODE_ALREADY_EXISTS=exports.STATUS_CODE_REPEAT=exports.STATUS_CODE_PARAM_ERROR=exports.STATUS_CODE_FORBIDDEN=exports.STATUS_CODE_UN_LOGIN=exports.STATUS_CODE_ERROR=exports.STATUS_CODE_SUCCESS=void 0;var C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};exports.request=function(r){return new Promise(function(e,t){_.isConnected?i(r,e,t):t(C({msg:"网络链接异常，请检查"},_))}).then(function(e){if(e.data.status!==S||a){if(e.data&&e.data.status!==n)return e;throw e}return a=!0,(0,o.login)().then(function(){return a=!1,e})})},exports._request=i,exports.signature=f;var e,t=require("../project.config"),U=(e=t)&&e.__esModule?e:{default:e},c=require("../sensor/sensors"),o=require("../api/user"),D=require("../utils/user-key"),d=require("../utils/utils");var s=require("blueimp-md5"),n=(exports.STATUS_CODE_SUCCESS=1,exports.STATUS_CODE_ERROR=0),S=exports.STATUS_CODE_UN_LOGIN=2,a=(exports.STATUS_CODE_FORBIDDEN=3,exports.STATUS_CODE_PARAM_ERROR=4,exports.STATUS_CODE_REPEAT=5,exports.STATUS_CODE_ALREADY_EXISTS=6,exports.STATUS_CODE_UNAUTHORIZED=9,exports.STATUS_CODE_NOT_EXISTS=8,exports.STATUS_CODE_BALANCE_INSUFFICIENT=100,!1),_={isConnected:!0};function i(e,t,r){var o=e.url,s=e.method,n=void 0===s?"GET":s,S=e.data,a=void 0===S?{}:S,_=getApp()&&getApp().globalData.session||"",i=(0,c.getCommonParam)(),u=(0,D.getUserKey)();/^\//.test(o)&&(o=""+U.default.serverHost+o);var T=C({session:_,userKey:u,appId:U.default.appid,version:U.default.version,interfaceCode:U.default.interfaceCode||100,timestamp:parseInt(Date.now()/1e3)},i,a),p=o.split("?"),E=1<p.length?(0,d.parseQueryString)(p[1]):{},O=C({},E,T),A=(O.a,O.c,f(function(e,t){var r={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(O,["a","c"]),U.default.appid));wx.request({url:o,method:n,data:C({},T,{sign:A}),success:function(e){t(e)},fail:function(e){r(e)}})}function f(t,e){var r=Object.keys(t).sort().map(function(e){return e+"="+t[e]}).join("&");return encodeURIComponent(s(""+r+e))}wx.onNetworkStatusChange(function(e){_=e});
});
define("card-lib.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0});var t=[{id:"3001",font:"normal",line:3,color:"#333",placeholder:"程序猿都这么有诗意的嘛！生活不止眼前的需求，还有代码和下一次的优化",textAxis:[[25,39],[193,99]],path:"/static/imgs/cartoon/0.png",tags:"二次元；",lock:!0},{id:"3002",font:"normal",line:3,color:"#fff",textAxis:[[24,50],[195,110]],placeholder:"既然都是酒肉朋友，就没必要太较真了吧，你说是不是呢",path:"/static/imgs/cartoon/1.png",tags:"二次元；推荐3；",lock:!0},{id:"3003",font:"normal",line:2,color:"#fff",placeholder:"不知道说什么，冒个泡就好了",textAxis:[[89,57],[229,97]],path:"/static/imgs/cartoon/2.png",tags:"二次元；推荐；",lock:!0},{id:"3004",font:"normal",line:3,color:"#333",placeholder:"我觉得我好委屈啊～\r\n就像被挤了一样",textAxis:[[48,46],[180,106]],path:"/static/imgs/cartoon/3.png",tags:"次元；恶搞；推荐；（分享锁）",lock:!0},{id:"3005",font:"normal",line:3,color:"#5A4040",placeholder:"从今天起一光和波哥正式结为夫妻，从此相亲相爱～",textAxis:[[18,43],[158,103]],path:"/static/imgs/cartoon/4.png",tags:"二次元；（分享锁）",lock:!0},{id:"3006",font:"normal",line:3,color:"#fff",placeholder:"因为存在着能够轻易取人性命的“个性”所以各国政府有着严格的规范管制着“个性”的使用。",textAxis:[[26,52],[267,112]],path:"/static/imgs/cartoon/5.png",tags:"二次元；（分享锁）",lock:!0},{id:"3007",font:"normal",line:2,color:"#333",placeholder:"第一次看紫罗兰的时候我是真的被震惊到了",textAxis:[[55,62],[195,100]],path:"/static/imgs/cartoon/6.png",tags:"二次元；（分享锁）",lock:!0}],o=[{id:"2002",font:"normal",line:4,color:"#333",placeholder:"为什么刚进大学的新生急于脱单？因为他们天真的认为自己没有对象仅仅是因为高中禁止早恋",textAxis:[[16,13],[172,93]],path:"/static/imgs/joke/1.png",tags:"恶搞；推荐；",lock:!0},{id:"2003",font:"normal",line:2,color:"#333",placeholder:"姑姑啊～姑姑啊～姑姑啊重要的事情说三遍！！",textAxis:[[18,57],[172,97]],path:"/static/imgs/joke/2.png",tags:"恶搞；推荐；心情；",lock:!0},{id:"2004",font:"normal",line:2,color:"#643F00",placeholder:"我平胸，我骄傲，我为国家省布料！行了吧！渣男！",textAxis:[[44,54],[216,94]],path:"/static/imgs/joke/3.png",tags:"恶搞；推荐；（分享锁）",lock:!0},{id:"2005",font:"normal",line:3,color:"#333",placeholder:"可恶！鸣人哥哥说宁愿吃屎也不肯爱我一次，呜呜呜～真难受呀！！",textAxis:[[43,43],[215,103]],path:"/static/imgs/joke/4.png",tags:"恶搞；（分享锁）",lock:!0},{id:"2006",font:"normal",line:3,color:"#fff",placeholder:"戴上墨镜，我们就是这条街最靓的崽，社会我猪仔",textAxis:[[22,43],[162,103]],path:"/static/imgs/joke/5.png",tags:"恶搞；（分享锁）",lock:!0}],l=[{id:"4002",font:"normal",line:2,color:"#fff",placeholder:"强盗就是强盗干嘛非要美其名曰是海盗啊！！",textAxis:[[33,65],[187,105]],path:"/static/imgs/pet/1.png",tags:"萌宠；推荐；",lock:!0},{id:"4003",font:"normal",line:2,color:"#F7FFB8",placeholder:"我祈祷今天大家的愿望都可以实现～",textAxis:[[45,58],[185,98]],path:"/static/imgs/pet/2.png",tags:"萌宠；精品（分享锁）；推荐；",lock:!0},{id:"4004",font:"normal",line:3,size:12,color:"#5B3B33",placeholder:"为了你，小爷我算是倾家荡产了呜呜呜～",textAxis:[[21,25],[107,75]],maxText:27,path:"/static/imgs/pet/3.png",tags:"萌宠；精品（分享锁）；推荐；",lock:!0},{id:"4005",font:"bold",line:2,color:"#333",placeholder:"一种舍我其谁的王者风范，一种胸有成竹的潇洒气度，那就是霸气侧漏",textAxis:[[45,64],[269,104]],path:"/static/imgs/pet/4.png",tags:"萌宠；精品（分享锁）；推荐；",lock:!0},{id:"4006",font:"bold",line:3,color:"#333",placeholder:"带哈士奇出门，它什么狗都怕连吉娃娃都打不过，我也是醉醉的。",textAxis:[[15,47],[197,107]],path:"/static/imgs/pet/5.png",tags:"萌宠；精品（分享锁）；推荐；",lock:!0}],a=[{id:"5001",font:"normal",line:2,color:"#333",placeholder:"友谊和花香一样，还是淡一点的比较好，越淡的香气越使人依恋，也越能持久。",textAxis:[[25,42],[277,82]],path:"/static/imgs/fancy/0.png",tags:"唯美；心情；推荐1；",lock:!0},{id:"5002",font:"normal",line:3,color:"#fff",placeholder:"白天开会，工作太累，晚上不睡，疲惫加倍，狂欢装鬼，千杯不醉。万圣节快乐",textAxis:[[22,46],[190,106]],path:"/static/imgs/fancy/7.png",tags:"唯美；推荐；",lock:!0},{id:"5003",font:"normal",line:3,color:"#fff",placeholder:"长得漂亮是本钱，把钱花得漂亮是本事。this me",textAxis:[[25,32],[151,92]],path:"/static/imgs/fancy/2.png",tags:"唯美；精品（分享锁）；推荐；",lock:!0},{id:"5004",font:"bold",line:2,color:"#fff",placeholder:"温暖的夏日，一杯香浓的咖啡，一份美味的冰淇淋，青春就是这么甜美。",textAxis:[[25,55],[277,95]],path:"/static/imgs/fancy/3.png",tags:"唯美；精品（分享锁）；推荐；",lock:!0},{id:"5005",font:"normal",line:3,color:"#fff",placeholder:"得以遇汝，吾之荣幸。中秋佳节，月儿圆，花儿香，愿心想事成，阖家安康。",textAxis:[[18,35],[228,95]],path:"/static/imgs/fancy/4.png",tags:"唯美；精品（分享锁）；推荐；",lock:!0},{id:"5006",font:"normal",line:2,color:"#685432",placeholder:"烟花过后，空气中都充斥着一种浓浓的味道，证明它曾经灿烂过。",textAxis:[[18,52],[228,92]],path:"/static/imgs/fancy/5.png",tags:"唯美；精品（分享锁）；推荐；",lock:!0},{id:"5007",font:"normal",line:3,color:"#242424",placeholder:"一片片唯美的秋叶，香染了流年的梦;一段段回忆，缱绻了红尘的情;",textAxis:[[97,50],[269,110]],path:"/static/imgs/fancy/6.png",tags:"唯美；精品（分享锁）；推荐；",lock:!0},{id:"5008",font:"normal",line:3,color:"#fff",placeholder:"为防止白日见鬼，出门要神出鬼没，穿得像人模鬼样，工作鬼使神差",textAxis:[[100,44],[268,104]],path:"/static/imgs/fancy/8.png",tags:"唯美；精品（分享锁）；推荐；",lock:!0},{id:"5009",font:"normal",line:2,color:"#333",placeholder:"开心鬼祝你越来越快乐，机灵鬼祝你越来越聪明，逃气鬼祝你迷人",textAxis:[[31,42],[271,82]],path:"/static/imgs/fancy/9.png",tags:"唯美；精品（分享锁）；推荐；",lock:!0}],i=[{id:"6001",font:"normal",line:2,color:"#fff",placeholder:"今天男票突然开窍了，送了朵？？",textAxis:[[127,58],[267,98]],path:"/static/imgs/mood/0.png",tags:"心情；",lock:!0},{id:"6002",font:"normal",line:2,color:"#734D00",placeholder:"前面的一对情侣让我闻到了恋爱的酸臭味",textAxis:[[47,55],[180,95]],path:"/static/imgs/mood/1.png",tags:"心情；推荐；",lock:!0},{id:"6003",font:"normal",line:2,color:"#394169",placeholder:"终于借着上周末出差的机会给自己放了两天假。",textAxis:[[31,52],[199,92]],path:"/static/imgs/mood/2.png",tags:"心情；推荐；",lock:!0},{id:"6004",font:"normal",line:2,color:"#940000",placeholder:"祝福马冬梅生日快乐希望她的每一天快快乐乐",textAxis:[[27,58],[167,98]],path:"/static/imgs/mood/3.png",tags:"心情；精品（分享锁）；推荐；",lock:!0},{id:"6005",font:"normal",line:2,color:"#fff",placeholder:"愿你成为自己的太阳，无需凭借谁的光。",textAxis:[[21,58],[205,98]],path:"/static/imgs/mood/4.png",tags:"心情；精品（分享锁）；推荐；"},{id:"6006",font:"normal",line:3,color:"#fff",placeholder:"写不完的作业，看不完的资料，好难受哦～好想放假。",textAxis:[[29,47],[169,107]],path:"/static/imgs/mood/5.png",tags:"心情；精品（分享锁）；推荐；"}],e=(exports.freeCard=[{id:"5002",font:"normal",line:3,color:"#fff",placeholder:"白天开会，工作太累，晚上不睡，疲惫加倍，狂欢装鬼，千杯不醉。万圣节快乐",textAxis:[[22,46],[190,106]],path:"/static/imgs/fancy/7.png",tags:"唯美；推荐；",lock:!0},{id:"5008",font:"normal",line:3,color:"#fff",placeholder:"为防止白日见鬼，出门要神出鬼没，穿得像人模鬼样，工作鬼使神差",textAxis:[[100,44],[268,104]],path:"/static/imgs/fancy/8.png",tags:"唯美；精品（分享锁）；推荐；",lock:!0},{id:"5009",font:"normal",line:2,color:"#333",placeholder:"开心鬼祝你越来越快乐，机灵鬼祝你越来越聪明，逃气鬼祝你迷人",textAxis:[[51,42],[271,82]],path:"/static/imgs/fancy/9.png",tags:"唯美；精品（分享锁）；推荐；",lock:!0}],exports.tabs=[{label:"推荐",id:0,kind:"recommend"},{label:"恶搞",id:2,kind:"joke"},{label:"二次元",id:3,kind:"cartoon"},{label:"萌宠",id:4,kind:"pet"},{label:"唯美",id:5,kind:"fancy"},{label:"心情",id:6,kind:"mood"}],[].concat(o,t,l,a,i));exports.cards={recommend:e,joke:o,cartoon:t,pet:l,fancy:a,mood:i};
});
define("globalData/cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    function c(e,a){for(var t=0;t<a.length;t++){var c=a[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}Object.defineProperty(exports,"__esModule",{value:!0});var e=(function(e,a,t){return a&&c(e.prototype,a),t&&c(e,t),e}(a,null,[{key:"set",value:function(e,a){var t=getApp().globalData;"cache"in t||(t.cache={}),t.cache[e]=a}},{key:"get",value:function(e){var a=getApp().globalData;return"cache"in a||(a.cache={}),a.cache[e]}},{key:"remove",value:function(e){var a=getApp().globalData;"cache"in a||(a.cache={}),delete a.cache[e]}},{key:"clear",value:function(){getApp().globalData.cache={}}}]),a);function a(){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a)}exports.default=e;
});
define("globalData/data_storage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e};function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t,r=require("./storage"),a=(t=r)&&t.__esModule?t:{default:t};var o=(e(u,null,[{key:"get",value:function(t){var r=getApp().globalData;if(t in r){var e=r[t];return void 0===e?Promise.reject():Promise.resolve(e)}return a.default.get(t).then(function(e){return r[t]=e}).catch(function(){return r[t]=void 0,Promise.reject()})}},{key:"set",value:function(e,t){return void 0===t&&(t=null),getApp().globalData[e]=t,a.default.set(e,t)}}]),u);function u(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u)}exports.default=o;
});
define("globalData/storage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(exports,"__esModule",{value:!0});var e=(function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}(n,null,[{key:"set",value:function(t,r){return new Promise(function(e,n){wx.setStorage({key:t,data:r,success:e,fail:n})})}},{key:"get",value:function(t){return new Promise(function(n,e){wx.getStorage({key:t,success:function(e){n(e.data)},fail:e})})}},{key:"remove",value:function(t){return new Promise(function(e,n){wx.removeStorage({key:t,success:e,fail:n})})}},{key:"clear",value:function(){return new Promise(function(e,n){wx.clearStorage({success:e,fail:n})})}}]),n);function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}exports.default=e;
});
define("miniprogram_npm/blueimp-md5/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    var e,y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function n(n,t){if(!e[n])return require(t);if(!e[n].status){var r={exports:{}};e[n].status=1,e[n].func(e[n].req,r,r.exports),"object"===y(r.exports)?(Object.keys(r.exports).forEach(function(t){e[n].m.exports[t]=r.exports[t]}),r.exports.__esModule&&Object.defineProperty(e[n].m.exports,"__esModule",{value:!0})):e[n].m.exports=r.exports}return e[n].m.exports}module.exports=((e={})[1569327047115]={status:0,func:function(t,f,n){!function(t){"use strict";function p(t,n){var r=(65535&t)+(65535&n);return(t>>16)+(n>>16)+(r>>16)<<16|65535&r}function c(t,n,r,e,o,u){return p(function(t,n){return t<<n|t>>>32-n}(p(p(n,t),p(e,u)),o),r)}function l(t,n,r,e,o,u,f){return c(n&r|~n&e,t,n,o,u,f)}function d(t,n,r,e,o,u,f){return c(n&e|r&~e,t,n,o,u,f)}function h(t,n,r,e,o,u,f){return c(n^r^e,t,n,o,u,f)}function m(t,n,r,e,o,u,f){return c(r^(n|~e),t,n,o,u,f)}function i(t,n){var r,e,o,u,f;t[n>>5]|=128<<n%32,t[14+(n+64>>>9<<4)]=n;var c=1732584193,i=-271733879,s=-1732584194,a=271733878;for(r=0;r<t.length;r+=16)i=m(i=m(i=m(i=m(i=h(i=h(i=h(i=h(i=d(i=d(i=d(i=d(i=l(i=l(i=l(i=l(o=i,s=l(u=s,a=l(f=a,c=l(e=c,i,s,a,t[r],7,-680876936),i,s,t[r+1],12,-389564586),c,i,t[r+2],17,606105819),a,c,t[r+3],22,-1044525330),s=l(s,a=l(a,c=l(c,i,s,a,t[r+4],7,-176418897),i,s,t[r+5],12,1200080426),c,i,t[r+6],17,-1473231341),a,c,t[r+7],22,-45705983),s=l(s,a=l(a,c=l(c,i,s,a,t[r+8],7,1770035416),i,s,t[r+9],12,-1958414417),c,i,t[r+10],17,-42063),a,c,t[r+11],22,-1990404162),s=l(s,a=l(a,c=l(c,i,s,a,t[r+12],7,1804603682),i,s,t[r+13],12,-40341101),c,i,t[r+14],17,-1502002290),a,c,t[r+15],22,1236535329),s=d(s,a=d(a,c=d(c,i,s,a,t[r+1],5,-165796510),i,s,t[r+6],9,-1069501632),c,i,t[r+11],14,643717713),a,c,t[r],20,-373897302),s=d(s,a=d(a,c=d(c,i,s,a,t[r+5],5,-701558691),i,s,t[r+10],9,38016083),c,i,t[r+15],14,-660478335),a,c,t[r+4],20,-405537848),s=d(s,a=d(a,c=d(c,i,s,a,t[r+9],5,568446438),i,s,t[r+14],9,-1019803690),c,i,t[r+3],14,-187363961),a,c,t[r+8],20,1163531501),s=d(s,a=d(a,c=d(c,i,s,a,t[r+13],5,-1444681467),i,s,t[r+2],9,-51403784),c,i,t[r+7],14,1735328473),a,c,t[r+12],20,-1926607734),s=h(s,a=h(a,c=h(c,i,s,a,t[r+5],4,-378558),i,s,t[r+8],11,-2022574463),c,i,t[r+11],16,1839030562),a,c,t[r+14],23,-35309556),s=h(s,a=h(a,c=h(c,i,s,a,t[r+1],4,-1530992060),i,s,t[r+4],11,1272893353),c,i,t[r+7],16,-155497632),a,c,t[r+10],23,-1094730640),s=h(s,a=h(a,c=h(c,i,s,a,t[r+13],4,681279174),i,s,t[r],11,-358537222),c,i,t[r+3],16,-722521979),a,c,t[r+6],23,76029189),s=h(s,a=h(a,c=h(c,i,s,a,t[r+9],4,-640364487),i,s,t[r+12],11,-421815835),c,i,t[r+15],16,530742520),a,c,t[r+2],23,-995338651),s=m(s,a=m(a,c=m(c,i,s,a,t[r],6,-198630844),i,s,t[r+7],10,1126891415),c,i,t[r+14],15,-1416354905),a,c,t[r+5],21,-57434055),s=m(s,a=m(a,c=m(c,i,s,a,t[r+12],6,1700485571),i,s,t[r+3],10,-1894986606),c,i,t[r+10],15,-1051523),a,c,t[r+1],21,-2054922799),s=m(s,a=m(a,c=m(c,i,s,a,t[r+8],6,1873313359),i,s,t[r+15],10,-30611744),c,i,t[r+6],15,-1560198380),a,c,t[r+13],21,1309151649),s=m(s,a=m(a,c=m(c,i,s,a,t[r+4],6,-145523070),i,s,t[r+11],10,-1120210379),c,i,t[r+2],15,718787259),a,c,t[r+9],21,-343485551),c=p(c,e),i=p(i,o),s=p(s,u),a=p(a,f);return[c,i,s,a]}function s(t){var n,r="",e=32*t.length;for(n=0;n<e;n+=8)r+=String.fromCharCode(t[n>>5]>>>n%32&255);return r}function a(t){var n,r=[];for(r[(t.length>>2)-1]=void 0,n=0;n<r.length;n+=1)r[n]=0;var e=8*t.length;for(n=0;n<e;n+=8)r[n>>5]|=(255&t.charCodeAt(n/8))<<n%32;return r}function e(t){var n,r,e="0123456789abcdef",o="";for(r=0;r<t.length;r+=1)n=t.charCodeAt(r),o+=e.charAt(n>>>4&15)+e.charAt(15&n);return o}function r(t){return unescape(encodeURIComponent(t))}function o(t){return function(t){return s(i(a(t),8*t.length))}(r(t))}function u(t,n){return function(t,n){var r,e,o=a(t),u=[],f=[];for(u[15]=f[15]=void 0,16<o.length&&(o=i(o,8*t.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],f[r]=1549556828^o[r];return e=i(u.concat(a(n)),512+8*n.length),s(i(f.concat(e),640))}(r(t),r(n))}function n(t,n,r){return n?r?u(n,t):function(t,n){return e(u(t,n))}(n,t):r?o(t):function(t){return e(o(t))}(t)}"function"==typeof define&&define.amd?define(function(){return n}):"object"===(void 0===f?"undefined":y(f))&&f.exports?f.exports=n:t.md5=n}(this)},req:function(t){return n({}[t],t)},m:{exports:{}}},n(1569327047115));
});
define("miniprogram_npm/crypto-js/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function e(e,t,r){i[e]={status:0,func:t,req:r,m:{exports:{}}}}function t(t,e){if(!i[t])return require(e);if(!i[t].status){var r={exports:{}};i[t].status=1,i[t].func(i[t].req,r,r.exports),"object"===o(r.exports)?(Object.keys(r.exports).forEach(function(e){i[t].m.exports[e]=r.exports[e]}),r.exports.__esModule&&Object.defineProperty(i[t].m.exports,"__esModule",{value:!0})):i[t].m.exports=r.exports}return i[t].m.exports}module.exports=(i={},e(1569327047116,function(e,t,r){var i,n;i=this,n=function(e){return e},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./x64-core"),e("./lib-typedarrays"),e("./enc-utf16"),e("./enc-base64"),e("./md5"),e("./sha1"),e("./sha256"),e("./sha224"),e("./sha512"),e("./sha384"),e("./sha3"),e("./ripemd160"),e("./hmac"),e("./pbkdf2"),e("./evpkdf"),e("./cipher-core"),e("./mode-cfb"),e("./mode-ctr"),e("./mode-ctr-gladman"),e("./mode-ofb"),e("./mode-ecb"),e("./pad-ansix923"),e("./pad-iso10126"),e("./pad-iso97971"),e("./pad-zeropadding"),e("./pad-nopadding"),e("./format-hex"),e("./aes"),e("./tripledes"),e("./rc4"),e("./rabbit"),e("./rabbit-legacy")):"function"==typeof define&&define.amd?define(["./core","./x64-core","./lib-typedarrays","./enc-utf16","./enc-base64","./md5","./sha1","./sha256","./sha224","./sha512","./sha384","./sha3","./ripemd160","./hmac","./pbkdf2","./evpkdf","./cipher-core","./mode-cfb","./mode-ctr","./mode-ctr-gladman","./mode-ofb","./mode-ecb","./pad-ansix923","./pad-iso10126","./pad-iso97971","./pad-zeropadding","./pad-nopadding","./format-hex","./aes","./tripledes","./rc4","./rabbit","./rabbit-legacy"],n):i.CryptoJS=n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./x64-core":1569327047118,"./lib-typedarrays":1569327047119,"./enc-utf16":1569327047120,"./enc-base64":1569327047121,"./md5":1569327047122,"./sha1":1569327047123,"./sha256":1569327047124,"./sha224":1569327047125,"./sha512":1569327047126,"./sha384":1569327047127,"./sha3":1569327047128,"./ripemd160":1569327047129,"./hmac":1569327047130,"./pbkdf2":1569327047131,"./evpkdf":1569327047132,"./cipher-core":1569327047133,"./mode-cfb":1569327047134,"./mode-ctr":1569327047135,"./mode-ctr-gladman":1569327047136,"./mode-ofb":1569327047137,"./mode-ecb":1569327047138,"./pad-ansix923":1569327047139,"./pad-iso10126":1569327047140,"./pad-iso97971":1569327047141,"./pad-zeropadding":1569327047142,"./pad-nopadding":1569327047143,"./format-hex":1569327047144,"./aes":1569327047145,"./tripledes":1569327047146,"./rc4":1569327047147,"./rabbit":1569327047148,"./rabbit-legacy":1569327047149}[e],e)}),e(1569327047117,function(e,t,r){var i,n;i=this,n=function(){var d,r,e,t,i,h,n,o,c,s,a,f,u=u||(d=Math,r=Object.create||function(e){var t;return p.prototype=e,t=new p,p.prototype=null,t},t=(e={}).lib={},i=t.Base={extend:function(e){var t=r(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),(t.init.prototype=t).$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},h=t.WordArray=i.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||o).stringify(this)},concat:function(e){var t=this.words,r=e.words,i=this.sigBytes,n=e.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var c=r[o>>>2]>>>24-o%4*8&255;t[i+o>>>2]|=c<<24-(i+o)%4*8}else for(o=0;o<n;o+=4)t[i+o>>>2]=r[o>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-t%4*8,e.length=d.ceil(t/4)},clone:function(){var e=i.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){function t(t){t=t;var r=987654321,i=4294967295;return function(){var e=((r=36969*(65535&r)+(r>>16)&i)<<16)+(t=18e3*(65535&t)+(t>>16)&i)&i;return e/=4294967296,(e+=.5)*(.5<d.random()?1:-1)}}for(var r,i=[],n=0;n<e;n+=4){var o=t(4294967296*(r||d.random()));r=987654071*o(),i.push(4294967296*o()|0)}return new h.init(i,e)}}),n=e.enc={},o=n.Hex={stringify:function(e){for(var t=e.words,r=e.sigBytes,i=[],n=0;n<r;n++){var o=t[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i+=2)r[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new h.init(r,t/2)}},c=n.Latin1={stringify:function(e){for(var t=e.words,r=e.sigBytes,i=[],n=0;n<r;n++){var o=t[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i++)r[i>>>2]|=(255&e.charCodeAt(i))<<24-i%4*8;return new h.init(r,t)}},s=n.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},a=t.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=s.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t=this._data,r=t.words,i=t.sigBytes,n=this.blockSize,o=i/(4*n),c=(o=e?d.ceil(o):d.max((0|o)-this._minBufferSize,0))*n,s=d.min(4*c,i);if(c){for(var a=0;a<c;a+=n)this._doProcessBlock(r,a);var f=r.splice(0,c);t.sigBytes-=s}return new h.init(f,s)},clone:function(){var e=i.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),t.Hasher=a.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){a.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(r){return function(e,t){return new r.init(t).finalize(e)}},_createHmacHelper:function(r){return function(e,t){return new f.HMAC.init(r,t).finalize(e)}}}),f=e.algo={},e);function p(){}return u},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n():"function"==typeof define&&define.amd?define([],n):i.CryptoJS=n()},function(e){return t({}[e],e)}),e(1569327047118,function(e,t,r){var i,n;i=this,n=function(e){var t,r,n,o,i;return r=(t=e).lib,n=r.Base,o=r.WordArray,(i=t.x64={}).Word=n.extend({init:function(e,t){this.high=e,this.low=t}}),i.WordArray=n.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:8*e.length},toX32:function(){for(var e=this.words,t=e.length,r=[],i=0;i<t;i++){var n=e[i];r.push(n.high),r.push(n.low)}return o.create(r,this.sigBytes)},clone:function(){for(var e=n.clone.call(this),t=e.words=this.words.slice(0),r=t.length,i=0;i<r;i++)t[i]=t[i].clone();return e}}),e},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core")):"function"==typeof define&&define.amd?define(["./core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117}[e],e)}),e(1569327047119,function(e,t,r){var i,n;i=this,n=function(t){return function(){if("function"==typeof ArrayBuffer){var e=t.lib.WordArray,n=e.init;(e.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,r=[],i=0;i<t;i++)r[i>>>2]|=e[i]<<24-i%4*8;n.call(this,r,t)}else n.apply(this,arguments)}).prototype=e}}(),t.lib.WordArray},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core")):"function"==typeof define&&define.amd?define(["./core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117}[e],e)}),e(1569327047120,function(e,t,r){var i,n;i=this,n=function(r){return function(){var e=r,n=e.lib.WordArray,t=e.enc;function c(e){return e<<8&4278255360|e>>>8&16711935}t.Utf16=t.Utf16BE={stringify:function(e){for(var t=e.words,r=e.sigBytes,i=[],n=0;n<r;n+=2){var o=t[n>>>2]>>>16-n%4*8&65535;i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i++)r[i>>>1]|=e.charCodeAt(i)<<16-i%2*16;return n.create(r,2*t)}},t.Utf16LE={stringify:function(e){for(var t=e.words,r=e.sigBytes,i=[],n=0;n<r;n+=2){var o=c(t[n>>>2]>>>16-n%4*8&65535);i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i++)r[i>>>1]|=c(e.charCodeAt(i)<<16-i%2*16);return n.create(r,2*t)}}}(),r.enc.Utf16},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core")):"function"==typeof define&&define.amd?define(["./core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117}[e],e)}),e(1569327047121,function(e,t,r){var i,n;i=this,n=function(e){var t,a;return a=(t=e).lib.WordArray,t.enc.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,i=this._map;e.clamp();for(var n=[],o=0;o<r;o+=3)for(var c=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,s=0;s<4&&o+.75*s<r;s++)n.push(i.charAt(c>>>6*(3-s)&63));var a=i.charAt(64);if(a)for(;n.length%4;)n.push(a);return n.join("")},parse:function(e){var t=e.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var n=0;n<r.length;n++)i[r.charCodeAt(n)]=n}var o=r.charAt(64);if(o){var c=e.indexOf(o);-1!==c&&(t=c)}return function(e,t,r){for(var i=[],n=0,o=0;o<t;o++)if(o%4){var c=r[e.charCodeAt(o-1)]<<o%4*2,s=r[e.charCodeAt(o)]>>>6-o%4*2;i[n>>>2]|=(c|s)<<24-n%4*8,n++}return a.create(i,n)}(e,t,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},e.enc.Base64},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core")):"function"==typeof define&&define.amd?define(["./core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117}[e],e)}),e(1569327047122,function(e,t,r){var i,n;i=this,n=function(c){return function(d){var e=c,t=e.lib,r=t.WordArray,i=t.Hasher,n=e.algo,C=[];!function(){for(var e=0;e<64;e++)C[e]=4294967296*d.abs(d.sin(e+1))|0}();var o=n.MD5=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var r=0;r<16;r++){var i=t+r,n=e[i];e[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o=this._hash.words,c=e[t+0],s=e[t+1],a=e[t+2],f=e[t+3],d=e[t+4],h=e[t+5],u=e[t+6],p=e[t+7],l=e[t+8],v=e[t+9],y=e[t+10],_=e[t+11],g=e[t+12],m=e[t+13],b=e[t+14],B=e[t+15],k=o[0],x=o[1],S=o[2],w=o[3];x=D(x=D(x=D(x=D(x=z(x=z(x=z(x=z(x=A(x=A(x=A(x=A(x=H(x=H(x=H(x=H(x,S=H(S,w=H(w,k=H(k,x,S,w,c,7,C[0]),x,S,s,12,C[1]),k,x,a,17,C[2]),w,k,f,22,C[3]),S=H(S,w=H(w,k=H(k,x,S,w,d,7,C[4]),x,S,h,12,C[5]),k,x,u,17,C[6]),w,k,p,22,C[7]),S=H(S,w=H(w,k=H(k,x,S,w,l,7,C[8]),x,S,v,12,C[9]),k,x,y,17,C[10]),w,k,_,22,C[11]),S=H(S,w=H(w,k=H(k,x,S,w,g,7,C[12]),x,S,m,12,C[13]),k,x,b,17,C[14]),w,k,B,22,C[15]),S=A(S,w=A(w,k=A(k,x,S,w,s,5,C[16]),x,S,u,9,C[17]),k,x,_,14,C[18]),w,k,c,20,C[19]),S=A(S,w=A(w,k=A(k,x,S,w,h,5,C[20]),x,S,y,9,C[21]),k,x,B,14,C[22]),w,k,d,20,C[23]),S=A(S,w=A(w,k=A(k,x,S,w,v,5,C[24]),x,S,b,9,C[25]),k,x,f,14,C[26]),w,k,l,20,C[27]),S=A(S,w=A(w,k=A(k,x,S,w,m,5,C[28]),x,S,a,9,C[29]),k,x,p,14,C[30]),w,k,g,20,C[31]),S=z(S,w=z(w,k=z(k,x,S,w,h,4,C[32]),x,S,l,11,C[33]),k,x,_,16,C[34]),w,k,b,23,C[35]),S=z(S,w=z(w,k=z(k,x,S,w,s,4,C[36]),x,S,d,11,C[37]),k,x,p,16,C[38]),w,k,y,23,C[39]),S=z(S,w=z(w,k=z(k,x,S,w,m,4,C[40]),x,S,c,11,C[41]),k,x,f,16,C[42]),w,k,u,23,C[43]),S=z(S,w=z(w,k=z(k,x,S,w,v,4,C[44]),x,S,g,11,C[45]),k,x,B,16,C[46]),w,k,a,23,C[47]),S=D(S,w=D(w,k=D(k,x,S,w,c,6,C[48]),x,S,p,10,C[49]),k,x,b,15,C[50]),w,k,h,21,C[51]),S=D(S,w=D(w,k=D(k,x,S,w,g,6,C[52]),x,S,f,10,C[53]),k,x,y,15,C[54]),w,k,s,21,C[55]),S=D(S,w=D(w,k=D(k,x,S,w,l,6,C[56]),x,S,B,10,C[57]),k,x,u,15,C[58]),w,k,m,21,C[59]),S=D(S,w=D(w,k=D(k,x,S,w,d,6,C[60]),x,S,_,10,C[61]),k,x,a,15,C[62]),w,k,v,21,C[63]),o[0]=o[0]+k|0,o[1]=o[1]+x|0,o[2]=o[2]+S|0,o[3]=o[3]+w|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;t[i>>>5]|=128<<24-i%32;var n=d.floor(r/4294967296),o=r;t[15+(64+i>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t[14+(64+i>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),e.sigBytes=4*(t.length+1),this._process();for(var c=this._hash,s=c.words,a=0;a<4;a++){var f=s[a];s[a]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return c},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});function H(e,t,r,i,n,o,c){var s=e+(t&r|~t&i)+n+c;return(s<<o|s>>>32-o)+t}function A(e,t,r,i,n,o,c){var s=e+(t&i|r&~i)+n+c;return(s<<o|s>>>32-o)+t}function z(e,t,r,i,n,o,c){var s=e+(t^r^i)+n+c;return(s<<o|s>>>32-o)+t}function D(e,t,r,i,n,o,c){var s=e+(r^(t|~i))+n+c;return(s<<o|s>>>32-o)+t}e.MD5=i._createHelper(o),e.HmacMD5=i._createHmacHelper(o)}(Math),c.MD5},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core")):"function"==typeof define&&define.amd?define(["./core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117}[e],e)}),e(1569327047123,function(e,t,r){var i,n;i=this,n=function(e){var t,r,i,n,o,h,c;return r=(t=e).lib,i=r.WordArray,n=r.Hasher,o=t.algo,h=[],c=o.SHA1=n.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],c=r[3],s=r[4],a=0;a<80;a++){if(a<16)h[a]=0|e[t+a];else{var f=h[a-3]^h[a-8]^h[a-14]^h[a-16];h[a]=f<<1|f>>>31}var d=(i<<5|i>>>27)+s+h[a];d+=a<20?1518500249+(n&o|~n&c):a<40?1859775393+(n^o^c):a<60?(n&o|n&c|o&c)-1894007588:(n^o^c)-899497514,s=c,c=o,o=n<<30|n>>>2,n=i,i=d}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+c|0,r[4]=r[4]+s|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(64+i>>>9<<4)]=Math.floor(r/4294967296),t[15+(64+i>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}}),t.SHA1=n._createHelper(c),t.HmacSHA1=n._createHmacHelper(c),e.SHA1},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core")):"function"==typeof define&&define.amd?define(["./core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117}[e],e)}),e(1569327047124,function(e,t,r){var i,n;i=this,n=function(a){return function(n){var e=a,t=e.lib,r=t.WordArray,i=t.Hasher,o=e.algo,c=[],m=[];!function(){function e(e){for(var t=n.sqrt(e),r=2;r<=t;r++)if(!(e%r))return!1;return!0}function t(e){return 4294967296*(e-(0|e))|0}for(var r=2,i=0;i<64;)e(r)&&(i<8&&(c[i]=t(n.pow(r,.5))),m[i]=t(n.pow(r,1/3)),i++),r++}();var b=[],s=o.SHA256=i.extend({_doReset:function(){this._hash=new r.init(c.slice(0))},_doProcessBlock:function(e,t){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],c=r[3],s=r[4],a=r[5],f=r[6],d=r[7],h=0;h<64;h++){if(h<16)b[h]=0|e[t+h];else{var u=b[h-15],p=(u<<25|u>>>7)^(u<<14|u>>>18)^u>>>3,l=b[h-2],v=(l<<15|l>>>17)^(l<<13|l>>>19)^l>>>10;b[h]=p+b[h-7]+v+b[h-16]}var y=i&n^i&o^n&o,_=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),g=d+((s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25))+(s&a^~s&f)+m[h]+b[h];d=f,f=a,a=s,s=c+g|0,c=o,o=n,n=i,i=g+(_+y)|0}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+c|0,r[4]=r[4]+s|0,r[5]=r[5]+a|0,r[6]=r[6]+f|0,r[7]=r[7]+d|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(64+i>>>9<<4)]=n.floor(r/4294967296),t[15+(64+i>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA256=i._createHelper(s),e.HmacSHA256=i._createHmacHelper(s)}(Math),a.SHA256},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core")):"function"==typeof define&&define.amd?define(["./core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117}[e],e)}),e(1569327047125,function(e,t,r){var i,n;i=this,n=function(e){var t,r,i,n,o;return r=(t=e).lib.WordArray,i=t.algo,n=i.SHA256,o=i.SHA224=n.extend({_doReset:function(){this._hash=new r.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var e=n._doFinalize.call(this);return e.sigBytes-=4,e}}),t.SHA224=n._createHelper(o),t.HmacSHA224=n._createHmacHelper(o),e.SHA224},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./sha256")):"function"==typeof define&&define.amd?define(["./core","./sha256"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./sha256":1569327047124}[e],e)}),e(1569327047126,function(e,t,r){var i,n;i=this,n=function(a){return function(){var e=a,t=e.lib.Hasher,r=e.x64,i=r.Word,n=r.WordArray,o=e.algo;function c(){return i.create.apply(i,arguments)}var xe=[c(1116352408,3609767458),c(1899447441,602891725),c(3049323471,3964484399),c(3921009573,2173295548),c(961987163,4081628472),c(1508970993,3053834265),c(2453635748,2937671579),c(2870763221,3664609560),c(3624381080,2734883394),c(310598401,1164996542),c(607225278,1323610764),c(1426881987,3590304994),c(1925078388,4068182383),c(2162078206,991336113),c(2614888103,633803317),c(3248222580,3479774868),c(3835390401,2666613458),c(4022224774,944711139),c(264347078,2341262773),c(604807628,2007800933),c(770255983,1495990901),c(1249150122,1856431235),c(1555081692,3175218132),c(1996064986,2198950837),c(2554220882,3999719339),c(2821834349,766784016),c(2952996808,2566594879),c(3210313671,3203337956),c(3336571891,1034457026),c(3584528711,2466948901),c(113926993,3758326383),c(338241895,168717936),c(666307205,1188179964),c(773529912,1546045734),c(1294757372,1522805485),c(1396182291,2643833823),c(1695183700,2343527390),c(1986661051,1014477480),c(2177026350,1206759142),c(2456956037,344077627),c(2730485921,1290863460),c(2820302411,3158454273),c(3259730800,3505952657),c(3345764771,106217008),c(3516065817,3606008344),c(3600352804,1432725776),c(4094571909,1467031594),c(275423344,851169720),c(430227734,3100823752),c(506948616,1363258195),c(659060556,3750685593),c(883997877,3785050280),c(958139571,3318307427),c(1322822218,3812723403),c(1537002063,2003034995),c(1747873779,3602036899),c(1955562222,1575990012),c(2024104815,1125592928),c(2227730452,2716904306),c(2361852424,442776044),c(2428436474,593698344),c(2756734187,3733110249),c(3204031479,2999351573),c(3329325298,3815920427),c(3391569614,3928383900),c(3515267271,566280711),c(3940187606,3454069534),c(4118630271,4000239992),c(116418474,1914138554),c(174292421,2731055270),c(289380356,3203993006),c(460393269,320620315),c(685471733,587496836),c(852142971,1086792851),c(1017036298,365543100),c(1126000580,2618297676),c(1288033470,3409855158),c(1501505948,4234509866),c(1607167915,987167468),c(1816402316,1246189591)],Se=[];!function(){for(var e=0;e<80;e++)Se[e]=c()}();var s=o.SHA512=t.extend({_doReset:function(){this._hash=new n.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(e,t){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],c=r[3],s=r[4],a=r[5],f=r[6],d=r[7],h=i.high,u=i.low,p=n.high,l=n.low,v=o.high,y=o.low,_=c.high,g=c.low,m=s.high,b=s.low,B=a.high,k=a.low,x=f.high,S=f.low,w=d.high,C=d.low,H=h,A=u,z=p,D=l,R=v,E=y,j=_,M=g,J=m,F=b,P=B,W=k,O=x,I=S,K=w,U=C,X=0;X<80;X++){var L=Se[X];if(X<16)var T=L.high=0|e[t+2*X],N=L.low=0|e[t+2*X+1];else{var q=Se[X-15],Z=q.high,G=q.low,$=(Z>>>1|G<<31)^(Z>>>8|G<<24)^Z>>>7,Q=(G>>>1|Z<<31)^(G>>>8|Z<<24)^(G>>>7|Z<<25),V=Se[X-2],Y=V.high,ee=V.low,te=(Y>>>19|ee<<13)^(Y<<3|ee>>>29)^Y>>>6,re=(ee>>>19|Y<<13)^(ee<<3|Y>>>29)^(ee>>>6|Y<<26),ie=Se[X-7],ne=ie.high,oe=ie.low,ce=Se[X-16],se=ce.high,ae=ce.low;T=(T=(T=$+ne+((N=Q+oe)>>>0<Q>>>0?1:0))+te+((N+=re)>>>0<re>>>0?1:0))+se+((N+=ae)>>>0<ae>>>0?1:0),L.high=T,L.low=N}var fe,de=J&P^~J&O,he=F&W^~F&I,ue=H&z^H&R^z&R,pe=A&D^A&E^D&E,le=(H>>>28|A<<4)^(H<<30|A>>>2)^(H<<25|A>>>7),ve=(A>>>28|H<<4)^(A<<30|H>>>2)^(A<<25|H>>>7),ye=(J>>>14|F<<18)^(J>>>18|F<<14)^(J<<23|F>>>9),_e=(F>>>14|J<<18)^(F>>>18|J<<14)^(F<<23|J>>>9),ge=xe[X],me=ge.high,be=ge.low,Be=K+ye+((fe=U+_e)>>>0<U>>>0?1:0),ke=ve+pe;K=O,U=I,O=P,I=W,P=J,W=F,J=j+(Be=(Be=(Be=Be+de+((fe+=he)>>>0<he>>>0?1:0))+me+((fe+=be)>>>0<be>>>0?1:0))+T+((fe+=N)>>>0<N>>>0?1:0))+((F=M+fe|0)>>>0<M>>>0?1:0)|0,j=R,M=E,R=z,E=D,z=H,D=A,H=Be+(le+ue+(ke>>>0<ve>>>0?1:0))+((A=fe+ke|0)>>>0<fe>>>0?1:0)|0}u=i.low=u+A,i.high=h+H+(u>>>0<A>>>0?1:0),l=n.low=l+D,n.high=p+z+(l>>>0<D>>>0?1:0),y=o.low=y+E,o.high=v+R+(y>>>0<E>>>0?1:0),g=c.low=g+M,c.high=_+j+(g>>>0<M>>>0?1:0),b=s.low=b+F,s.high=m+J+(b>>>0<F>>>0?1:0),k=a.low=k+W,a.high=B+P+(k>>>0<W>>>0?1:0),S=f.low=S+I,f.high=x+O+(S>>>0<I>>>0?1:0),C=d.low=C+U,d.high=w+K+(C>>>0<U>>>0?1:0)},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[30+(128+i>>>10<<5)]=Math.floor(r/4294967296),t[31+(128+i>>>10<<5)]=r,e.sigBytes=4*t.length,this._process(),this._hash.toX32()},clone:function(){var e=t.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32});e.SHA512=t._createHelper(s),e.HmacSHA512=t._createHmacHelper(s)}(),a.SHA512},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./x64-core")):"function"==typeof define&&define.amd?define(["./core","./x64-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./x64-core":1569327047118}[e],e)}),e(1569327047127,function(e,t,r){var i,n;i=this,n=function(e){var t,r,i,n,o,c,s;return r=(t=e).x64,i=r.Word,n=r.WordArray,o=t.algo,c=o.SHA512,s=o.SHA384=c.extend({_doReset:function(){this._hash=new n.init([new i.init(3418070365,3238371032),new i.init(1654270250,914150663),new i.init(2438529370,812702999),new i.init(355462360,4144912697),new i.init(1731405415,4290775857),new i.init(2394180231,1750603025),new i.init(3675008525,1694076839),new i.init(1203062813,3204075428)])},_doFinalize:function(){var e=c._doFinalize.call(this);return e.sigBytes-=16,e}}),t.SHA384=c._createHelper(s),t.HmacSHA384=c._createHmacHelper(s),e.SHA384},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./x64-core"),e("./sha512")):"function"==typeof define&&define.amd?define(["./core","./x64-core","./sha512"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./x64-core":1569327047118,"./sha512":1569327047126}[e],e)}),e(1569327047128,function(e,t,r){var i,n;i=this,n=function(o){return function(u){var e=o,t=e.lib,p=t.WordArray,i=t.Hasher,d=e.x64.Word,r=e.algo,z=[],D=[],R=[];!function(){for(var e=1,t=0,r=0;r<24;r++){z[e+5*t]=(r+1)*(r+2)/2%64;var i=(2*e+3*t)%5;e=t%5,t=i}for(e=0;e<5;e++)for(t=0;t<5;t++)D[e+5*t]=t+(2*e+3*t)%5*5;for(var n=1,o=0;o<24;o++){for(var c=0,s=0,a=0;a<7;a++){if(1&n){var f=(1<<a)-1;f<32?s^=1<<f:c^=1<<f-32}128&n?n=n<<1^113:n<<=1}R[o]=d.create(c,s)}}();var E=[];!function(){for(var e=0;e<25;e++)E[e]=d.create()}();var n=r.SHA3=i.extend({cfg:i.cfg.extend({outputLength:512}),_doReset:function(){for(var e=this._state=[],t=0;t<25;t++)e[t]=new d.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(e,t){for(var r=this._state,i=this.blockSize/2,n=0;n<i;n++){var o=e[t+2*n],c=e[t+2*n+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),c=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),(S=r[n]).high^=c,S.low^=o}for(var s=0;s<24;s++){for(var a=0;a<5;a++){for(var f=0,d=0,h=0;h<5;h++)f^=(S=r[a+5*h]).high,d^=S.low;var u=E[a];u.high=f,u.low=d}for(a=0;a<5;a++){var p=E[(a+4)%5],l=E[(a+1)%5],v=l.high,y=l.low;for(f=p.high^(v<<1|y>>>31),d=p.low^(y<<1|v>>>31),h=0;h<5;h++)(S=r[a+5*h]).high^=f,S.low^=d}for(var _=1;_<25;_++){var g=(S=r[_]).high,m=S.low,b=z[_];d=b<32?(f=g<<b|m>>>32-b,m<<b|g>>>32-b):(f=m<<b-32|g>>>64-b,g<<b-32|m>>>64-b);var B=E[D[_]];B.high=f,B.low=d}var k=E[0],x=r[0];for(k.high=x.high,k.low=x.low,a=0;a<5;a++)for(h=0;h<5;h++){var S=r[_=a+5*h],w=E[_],C=E[(a+1)%5+5*h],H=E[(a+2)%5+5*h];S.high=w.high^~C.high&H.high,S.low=w.low^~C.low&H.low}S=r[0];var A=R[s];S.high^=A.high,S.low^=A.low}},_doFinalize:function(){var e=this._data,t=e.words,r=(this._nDataBytes,8*e.sigBytes),i=32*this.blockSize;t[r>>>5]|=1<<24-r%32,t[(u.ceil((1+r)/i)*i>>>5)-1]|=128,e.sigBytes=4*t.length,this._process();for(var n=this._state,o=this.cfg.outputLength/8,c=o/8,s=[],a=0;a<c;a++){var f=n[a],d=f.high,h=f.low;d=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8),h=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8),s.push(h),s.push(d)}return new p.init(s,o)},clone:function(){for(var e=i.clone.call(this),t=e._state=this._state.slice(0),r=0;r<25;r++)t[r]=t[r].clone();return e}});e.SHA3=i._createHelper(n),e.HmacSHA3=i._createHmacHelper(n)}(Math),o.SHA3},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./x64-core")):"function"==typeof define&&define.amd?define(["./core","./x64-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./x64-core":1569327047118}[e],e)}),e(1569327047129,function(e,t,r){var i,n;i=this,n=function(e){function x(e,t,r){return e^t^r}function S(e,t,r){return e&t|~e&r}function w(e,t,r){return(e|~t)^r}function C(e,t,r){return e&r|t&~r}function H(e,t,r){return e^(t|~r)}function A(e,t){return e<<t|e>>>32-t}var t,r,i,n,o,z,D,R,E,j,M,c;return Math,r=(t=e).lib,i=r.WordArray,n=r.Hasher,o=t.algo,z=i.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),D=i.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),R=i.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),E=i.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),j=i.create([0,1518500249,1859775393,2400959708,2840853838]),M=i.create([1352829926,1548603684,1836072691,2053994217,0]),c=o.RIPEMD160=n.extend({_doReset:function(){this._hash=i.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=0;r<16;r++){var i=t+r,n=e[i];e[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o,c,s,a,f,d,h,u,p,l,v,y=this._hash.words,_=j.words,g=M.words,m=z.words,b=D.words,B=R.words,k=E.words;for(d=o=y[0],h=c=y[1],u=s=y[2],p=a=y[3],l=f=y[4],r=0;r<80;r+=1)v=o+e[t+m[r]]|0,v+=r<16?x(c,s,a)+_[0]:r<32?S(c,s,a)+_[1]:r<48?w(c,s,a)+_[2]:r<64?C(c,s,a)+_[3]:H(c,s,a)+_[4],v=(v=A(v|=0,B[r]))+f|0,o=f,f=a,a=A(s,10),s=c,c=v,v=d+e[t+b[r]]|0,v+=r<16?H(h,u,p)+g[0]:r<32?C(h,u,p)+g[1]:r<48?w(h,u,p)+g[2]:r<64?S(h,u,p)+g[3]:x(h,u,p)+g[4],v=(v=A(v|=0,k[r]))+l|0,d=l,l=p,p=A(u,10),u=h,h=v;v=y[1]+s+p|0,y[1]=y[2]+a+l|0,y[2]=y[3]+f+d|0,y[3]=y[4]+o+h|0,y[4]=y[0]+c+u|0,y[0]=v},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;t[i>>>5]|=128<<24-i%32,t[14+(64+i>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),e.sigBytes=4*(t.length+1),this._process();for(var n=this._hash,o=n.words,c=0;c<5;c++){var s=o[c];o[c]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}return n},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}}),t.RIPEMD160=n._createHelper(c),t.HmacRIPEMD160=n._createHmacHelper(c),e.RIPEMD160},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core")):"function"==typeof define&&define.amd?define(["./core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117}[e],e)}),e(1569327047130,function(e,t,r){var i,n;i=this,n=function(e){var t,r,f;r=(t=e).lib.Base,f=t.enc.Utf8,t.algo.HMAC=r.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=f.parse(t));var r=e.blockSize,i=4*r;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var n=this._oKey=t.clone(),o=this._iKey=t.clone(),c=n.words,s=o.words,a=0;a<r;a++)c[a]^=1549556828,s[a]^=909522486;n.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,r=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(r))}})},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core")):"function"==typeof define&&define.amd?define(["./core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117}[e],e)}),e(1569327047131,function(e,t,r){var i,n;i=this,n=function(e){var t,r,i,_,n,o,g,c;return r=(t=e).lib,i=r.Base,_=r.WordArray,n=t.algo,o=n.SHA1,g=n.HMAC,c=n.PBKDF2=i.extend({cfg:i.extend({keySize:4,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r=this.cfg,i=g.create(r.hasher,e),n=_.create(),o=_.create([1]),c=n.words,s=o.words,a=r.keySize,f=r.iterations;c.length<a;){var d=i.update(t).finalize(o);i.reset();for(var h=d.words,u=h.length,p=d,l=1;l<f;l++){p=i.finalize(p),i.reset();for(var v=p.words,y=0;y<u;y++)h[y]^=v[y]}n.concat(d),s[0]++}return n.sigBytes=4*a,n}}),t.PBKDF2=function(e,t,r){return c.create(r).compute(e,t)},e.PBKDF2},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./sha1"),e("./hmac")):"function"==typeof define&&define.amd?define(["./core","./sha1","./hmac"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./sha1":1569327047123,"./hmac":1569327047130}[e],e)}),e(1569327047132,function(e,t,r){var i,n;i=this,n=function(e){var t,r,i,d,n,o,c;return r=(t=e).lib,i=r.Base,d=r.WordArray,n=t.algo,o=n.MD5,c=n.EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r=this.cfg,i=r.hasher.create(),n=d.create(),o=n.words,c=r.keySize,s=r.iterations;o.length<c;){a&&i.update(a);var a=i.update(e).finalize(t);i.reset();for(var f=1;f<s;f++)a=i.finalize(a),i.reset();n.concat(a)}return n.sigBytes=4*c,n}}),t.EvpKDF=function(e,t,r){return c.create(r).compute(e,t)},e.EvpKDF},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./sha1"),e("./hmac")):"function"==typeof define&&define.amd?define(["./core","./sha1","./hmac"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./sha1":1569327047123,"./hmac":1569327047130}[e],e)}),e(1569327047133,function(e,t,r){var i,n;i=this,n=function(B){B.lib.Cipher||function(){var e=B,t=e.lib,r=t.Base,a=t.WordArray,i=t.BufferedBlockAlgorithm,n=e.enc,o=(n.Utf8,n.Base64),c=e.algo.EvpKDF,s=t.Cipher=i.extend({cfg:r.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){i.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(i){return{encrypt:function(e,t,r){return f(t).encrypt(i,e,t,r)},decrypt:function(e,t,r){return f(t).decrypt(i,e,t,r)}}}});function f(e){return"string"==typeof e?b:g}t.StreamCipher=s.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var d,h=e.mode={},u=t.BlockCipherMode=r.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),p=h.CBC=((d=u.extend()).Encryptor=d.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize;l.call(this,e,t,i),r.encryptBlock(e,t),this._prevBlock=e.slice(t,t+i)}}),d.Decryptor=d.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,n=e.slice(t,t+i);r.decryptBlock(e,t),l.call(this,e,t,i),this._prevBlock=n}}),d);function l(e,t,r){var i=this._iv;if(i){var n=i;this._iv=void 0}else n=this._prevBlock;for(var o=0;o<r;o++)e[t+o]^=n[o]}var v=(e.pad={}).Pkcs7={pad:function(e,t){for(var r=4*t,i=r-e.sigBytes%r,n=i<<24|i<<16|i<<8|i,o=[],c=0;c<i;c+=4)o.push(n);var s=a.create(o,i);e.concat(s)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},y=(t.BlockCipher=s.extend({cfg:s.cfg.extend({mode:p,padding:v}),reset:function(){s.reset.call(this);var e=this.cfg,t=e.iv,r=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var i=r.createEncryptor;else i=r.createDecryptor,this._minBufferSize=1;this._mode&&this._mode.__creator==i?this._mode.init(this,t&&t.words):(this._mode=i.call(r,this,t&&t.words),this._mode.__creator=i)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4}),t.CipherParams=r.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),_=(e.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;if(r)var i=a.create([1398893684,1701076831]).concat(r).concat(t);else i=t;return i.toString(o)},parse:function(e){var t=o.parse(e),r=t.words;if(1398893684==r[0]&&1701076831==r[1]){var i=a.create(r.slice(2,4));r.splice(0,4),t.sigBytes-=16}return y.create({ciphertext:t,salt:i})}},g=t.SerializableCipher=r.extend({cfg:r.extend({format:_}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=e.createEncryptor(r,i),o=n.finalize(t),c=n.cfg;return y.create({ciphertext:o,key:r,iv:c.iv,algorithm:e,mode:c.mode,padding:c.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,r,i){return i=this.cfg.extend(i),t=this._parse(t,i.format),e.createDecryptor(r,i).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),m=(e.kdf={}).OpenSSL={execute:function(e,t,r,i){i=i||a.random(8);var n=c.create({keySize:t+r}).compute(e,i),o=a.create(n.words.slice(t),4*r);return n.sigBytes=4*t,y.create({key:n,iv:o,salt:i})}},b=t.PasswordBasedCipher=g.extend({cfg:g.cfg.extend({kdf:m}),encrypt:function(e,t,r,i){var n=(i=this.cfg.extend(i)).kdf.execute(r,e.keySize,e.ivSize);i.iv=n.iv;var o=g.encrypt.call(this,e,t,n.key,i);return o.mixIn(n),o},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=i.kdf.execute(r,e.keySize,e.ivSize,t.salt);return i.iv=n.iv,g.decrypt.call(this,e,t,n.key,i)}})}()},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./evpkdf")):"function"==typeof define&&define.amd?define(["./core","./evpkdf"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./evpkdf":1569327047132}[e],e)}),e(1569327047134,function(e,t,r){var i,n;i=this,n=function(e){function o(e,t,r,i){var n=this._iv;if(n){var o=n.slice(0);this._iv=void 0}else o=this._prevBlock;i.encryptBlock(o,0);for(var c=0;c<r;c++)e[t+c]^=o[c]}var t;return e.mode.CFB=((t=e.lib.BlockCipherMode.extend()).Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize;o.call(this,e,t,i,r),this._prevBlock=e.slice(t,t+i)}}),t.Decryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,n=e.slice(t,t+i);o.call(this,e,t,i,r),this._prevBlock=n}}),t),e.mode.CFB},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047135,function(e,t,r){var i,n;i=this,n=function(e){var t,r;return e.mode.CTR=(t=e.lib.BlockCipherMode.extend(),r=t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0);var c=o.slice(0);r.encryptBlock(c,0),o[i-1]=o[i-1]+1|0;for(var s=0;s<i;s++)e[t+s]^=c[s]}}),t.Decryptor=r,t),e.mode.CTR},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047136,function(e,t,r){var i,n;i=this,n=function(e){function a(e){if(255==(e>>24&255)){var t=e>>16&255,r=e>>8&255,i=255&e;255===t?(t=0,255===r?(r=0,255===i?i=0:++i):++r):++t,e=0,e+=t<<16,e+=r<<8,e+=i}else e+=1<<24;return e}var t,r;return e.mode.CTRGladman=(t=e.lib.BlockCipherMode.extend(),r=t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0),function(e){0===(e[0]=a(e[0]))&&(e[1]=a(e[1]))}(o);var c=o.slice(0);r.encryptBlock(c,0);for(var s=0;s<i;s++)e[t+s]^=c[s]}}),t.Decryptor=r,t),e.mode.CTRGladman},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047137,function(e,t,r){var i,n;i=this,n=function(e){var t,r;return e.mode.OFB=(t=e.lib.BlockCipherMode.extend(),r=t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._keystream;n&&(o=this._keystream=n.slice(0),this._iv=void 0),r.encryptBlock(o,0);for(var c=0;c<i;c++)e[t+c]^=o[c]}}),t.Decryptor=r,t),e.mode.OFB},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047138,function(e,t,r){var i,n;i=this,n=function(e){var t;return e.mode.ECB=((t=e.lib.BlockCipherMode.extend()).Encryptor=t.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),t.Decryptor=t.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),t),e.mode.ECB},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047139,function(e,t,r){var i,n;i=this,n=function(e){return e.pad.AnsiX923={pad:function(e,t){var r=e.sigBytes,i=4*t,n=i-r%i,o=r+n-1;e.clamp(),e.words[o>>>2]|=n<<24-o%4*8,e.sigBytes+=n},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},e.pad.Ansix923},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047140,function(e,t,r){var i,n;i=this,n=function(n){return n.pad.Iso10126={pad:function(e,t){var r=4*t,i=r-e.sigBytes%r;e.concat(n.lib.WordArray.random(i-1)).concat(n.lib.WordArray.create([i<<24],1))},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},n.pad.Iso10126},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047141,function(e,t,r){var i,n;i=this,n=function(r){return r.pad.Iso97971={pad:function(e,t){e.concat(r.lib.WordArray.create([2147483648],1)),r.pad.ZeroPadding.pad(e,t)},unpad:function(e){r.pad.ZeroPadding.unpad(e),e.sigBytes--}},r.pad.Iso97971},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047142,function(e,t,r){var i,n;i=this,n=function(e){return e.pad.ZeroPadding={pad:function(e,t){var r=4*t;e.clamp(),e.sigBytes+=r-(e.sigBytes%r||r)},unpad:function(e){for(var t=e.words,r=e.sigBytes-1;!(t[r>>>2]>>>24-r%4*8&255);)r--;e.sigBytes=r+1}},e.pad.ZeroPadding},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047143,function(e,t,r){var i,n;i=this,n=function(e){return e.pad.NoPadding={pad:function(){},unpad:function(){}},e.pad.NoPadding},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047144,function(e,t,r){var i,n;i=this,n=function(e){var t,r,i;return r=(t=e).lib.CipherParams,i=t.enc.Hex,t.format.Hex={stringify:function(e){return e.ciphertext.toString(i)},parse:function(e){var t=i.parse(e);return r.create({ciphertext:t})}},e.format.Hex},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./cipher-core":1569327047133}[e],e)}),e(1569327047145,function(e,t,r){var i,n;i=this,n=function(n){return function(){var e=n,t=e.lib.BlockCipher,r=e.algo,f=[],d=[],h=[],u=[],p=[],l=[],v=[],y=[],_=[],g=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var r=0,i=0;for(t=0;t<256;t++){var n=i^i<<1^i<<2^i<<3^i<<4;n=n>>>8^255&n^99,f[r]=n;var o=e[d[n]=r],c=e[o],s=e[c],a=257*e[n]^16843008*n;h[r]=a<<24|a>>>8,u[r]=a<<16|a>>>16,p[r]=a<<8|a>>>24,l[r]=a,a=16843009*s^65537*c^257*o^16843008*r,v[n]=a<<24|a>>>8,y[n]=a<<16|a>>>16,_[n]=a<<8|a>>>24,g[n]=a,r?(r=o^e[e[e[s^o]]],i^=e[e[i]]):r=i=1}}();var m=[0,1,2,4,8,16,32,64,128,27,54],i=r.AES=t.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,r=e.sigBytes/4,i=4*(1+(this._nRounds=6+r)),n=this._keySchedule=[],o=0;o<i;o++)if(o<r)n[o]=t[o];else{var c=n[o-1];o%r?6<r&&o%r==4&&(c=f[c>>>24]<<24|f[c>>>16&255]<<16|f[c>>>8&255]<<8|f[255&c]):(c=f[(c=c<<8|c>>>24)>>>24]<<24|f[c>>>16&255]<<16|f[c>>>8&255]<<8|f[255&c],c^=m[o/r|0]<<24),n[o]=n[o-r]^c}for(var s=this._invKeySchedule=[],a=0;a<i;a++)o=i-a,c=a%4?n[o]:n[o-4],s[a]=a<4||o<=4?c:v[f[c>>>24]]^y[f[c>>>16&255]]^_[f[c>>>8&255]]^g[f[255&c]]}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,h,u,p,l,f)},decryptBlock:function(e,t){var r=e[t+1];e[t+1]=e[t+3],e[t+3]=r,this._doCryptBlock(e,t,this._invKeySchedule,v,y,_,g,d),r=e[t+1],e[t+1]=e[t+3],e[t+3]=r},_doCryptBlock:function(e,t,r,i,n,o,c,s){for(var a=this._nRounds,f=e[t]^r[0],d=e[t+1]^r[1],h=e[t+2]^r[2],u=e[t+3]^r[3],p=4,l=1;l<a;l++){var v=i[f>>>24]^n[d>>>16&255]^o[h>>>8&255]^c[255&u]^r[p++],y=i[d>>>24]^n[h>>>16&255]^o[u>>>8&255]^c[255&f]^r[p++],_=i[h>>>24]^n[u>>>16&255]^o[f>>>8&255]^c[255&d]^r[p++],g=i[u>>>24]^n[f>>>16&255]^o[d>>>8&255]^c[255&h]^r[p++];f=v,d=y,h=_,u=g}v=(s[f>>>24]<<24|s[d>>>16&255]<<16|s[h>>>8&255]<<8|s[255&u])^r[p++],y=(s[d>>>24]<<24|s[h>>>16&255]<<16|s[u>>>8&255]<<8|s[255&f])^r[p++],_=(s[h>>>24]<<24|s[u>>>16&255]<<16|s[f>>>8&255]<<8|s[255&d])^r[p++],g=(s[u>>>24]<<24|s[f>>>16&255]<<16|s[d>>>8&255]<<8|s[255&h])^r[p++],e[t]=v,e[t+1]=y,e[t+2]=_,e[t+3]=g},keySize:8});e.AES=t._createHelper(i)}(),n.AES},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./enc-base64":1569327047121,"./md5":1569327047122,"./evpkdf":1569327047132,"./cipher-core":1569327047133}[e],e)}),e(1569327047146,function(e,t,r){var i,n;i=this,n=function(s){return function(){var e=s,t=e.lib,r=t.WordArray,i=t.BlockCipher,n=e.algo,f=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],d=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],h=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],u=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],p=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],o=n.DES=i.extend({_doReset:function(){for(var e=this._key.words,t=[],r=0;r<56;r++){var i=f[r]-1;t[r]=e[i>>>5]>>>31-i%32&1}for(var n=this._subKeys=[],o=0;o<16;o++){var c=n[o]=[],s=h[o];for(r=0;r<24;r++)c[r/6|0]|=t[(d[r]-1+s)%28]<<31-r%6,c[4+(r/6|0)]|=t[28+(d[r+24]-1+s)%28]<<31-r%6;for(c[0]=c[0]<<1|c[0]>>>31,r=1;r<7;r++)c[r]=c[r]>>>4*(r-1)+3;c[7]=c[7]<<5|c[7]>>>27}var a=this._invSubKeys=[];for(r=0;r<16;r++)a[r]=n[15-r]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._subKeys)},decryptBlock:function(e,t){this._doCryptBlock(e,t,this._invSubKeys)},_doCryptBlock:function(e,t,r){this._lBlock=e[t],this._rBlock=e[t+1],l.call(this,4,252645135),l.call(this,16,65535),v.call(this,2,858993459),v.call(this,8,16711935),l.call(this,1,1431655765);for(var i=0;i<16;i++){for(var n=r[i],o=this._lBlock,c=this._rBlock,s=0,a=0;a<8;a++)s|=u[a][((c^n[a])&p[a])>>>0];this._lBlock=c,this._rBlock=o^s}var f=this._lBlock;this._lBlock=this._rBlock,this._rBlock=f,l.call(this,1,1431655765),v.call(this,8,16711935),v.call(this,2,858993459),l.call(this,16,65535),l.call(this,4,252645135),e[t]=this._lBlock,e[t+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function l(e,t){var r=(this._lBlock>>>e^this._rBlock)&t;this._rBlock^=r,this._lBlock^=r<<e}function v(e,t){var r=(this._rBlock>>>e^this._lBlock)&t;this._lBlock^=r,this._rBlock^=r<<e}e.DES=i._createHelper(o);var c=n.TripleDES=i.extend({_doReset:function(){var e=this._key.words;this._des1=o.createEncryptor(r.create(e.slice(0,2))),this._des2=o.createEncryptor(r.create(e.slice(2,4))),this._des3=o.createEncryptor(r.create(e.slice(4,6)))},encryptBlock:function(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)},decryptBlock:function(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)},keySize:6,ivSize:2,blockSize:2});e.TripleDES=i._createHelper(c)}(),s.TripleDES},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./enc-base64":1569327047121,"./md5":1569327047122,"./evpkdf":1569327047132,"./cipher-core":1569327047133}[e],e)}),e(1569327047147,function(e,t,r){var i,n;i=this,n=function(c){return function(){var e=c,t=e.lib.StreamCipher,r=e.algo,i=r.RC4=t.extend({_doReset:function(){for(var e=this._key,t=e.words,r=e.sigBytes,i=this._S=[],n=0;n<256;n++)i[n]=n;for(var o=n=0;n<256;n++){var c=n%r,s=t[c>>>2]>>>24-c%4*8&255;o=(o+i[n]+s)%256;var a=i[n];i[n]=i[o],i[o]=a}this._i=this._j=0},_doProcessBlock:function(e,t){e[t]^=n.call(this)},keySize:8,ivSize:0});function n(){for(var e=this._S,t=this._i,r=this._j,i=0,n=0;n<4;n++){r=(r+e[t=(t+1)%256])%256;var o=e[t];e[t]=e[r],e[r]=o,i|=e[(e[t]+e[r])%256]<<24-8*n}return this._i=t,this._j=r,i}e.RC4=t._createHelper(i);var o=r.RC4Drop=i.extend({cfg:i.cfg.extend({drop:192}),_doReset:function(){i._doReset.call(this);for(var e=this.cfg.drop;0<e;e--)n.call(this)}});e.RC4Drop=t._createHelper(o)}(),c.RC4},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./enc-base64":1569327047121,"./md5":1569327047122,"./evpkdf":1569327047132,"./cipher-core":1569327047133}[e],e)}),e(1569327047148,function(e,t,r){var i,n;i=this,n=function(e){function u(){for(var e=this._X,t=this._C,r=0;r<8;r++)a[r]=t[r];for(t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<a[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<a[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<a[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<a[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<a[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<a[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<a[6]>>>0?1:0)|0,this._b=t[7]>>>0<a[7]>>>0?1:0,r=0;r<8;r++){var i=e[r]+t[r],n=65535&i,o=i>>>16,c=((n*n>>>17)+n*o>>>15)+o*o,s=((4294901760&i)*i|0)+((65535&i)*i|0);f[r]=c^s}e[0]=f[0]+(f[7]<<16|f[7]>>>16)+(f[6]<<16|f[6]>>>16)|0,e[1]=f[1]+(f[0]<<8|f[0]>>>24)+f[7]|0,e[2]=f[2]+(f[1]<<16|f[1]>>>16)+(f[0]<<16|f[0]>>>16)|0,e[3]=f[3]+(f[2]<<8|f[2]>>>24)+f[1]|0,e[4]=f[4]+(f[3]<<16|f[3]>>>16)+(f[2]<<16|f[2]>>>16)|0,e[5]=f[5]+(f[4]<<8|f[4]>>>24)+f[3]|0,e[6]=f[6]+(f[5]<<16|f[5]>>>16)+(f[4]<<16|f[4]>>>16)|0,e[7]=f[7]+(f[6]<<8|f[6]>>>24)+f[5]|0}var t,r,i,n,a,f,o;return r=(t=e).lib.StreamCipher,i=t.algo,n=[],a=[],f=[],o=i.Rabbit=r.extend({_doReset:function(){for(var e=this._key.words,t=this.cfg.iv,r=0;r<4;r++)e[r]=16711935&(e[r]<<8|e[r]>>>24)|4278255360&(e[r]<<24|e[r]>>>8);var i=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],n=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];for(r=this._b=0;r<4;r++)u.call(this);for(r=0;r<8;r++)n[r]^=i[r+4&7];if(t){var o=t.words,c=o[0],s=o[1],a=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),f=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),d=a>>>16|4294901760&f,h=f<<16|65535&a;for(n[0]^=a,n[1]^=d,n[2]^=f,n[3]^=h,n[4]^=a,n[5]^=d,n[6]^=f,n[7]^=h,r=0;r<4;r++)u.call(this)}},_doProcessBlock:function(e,t){var r=this._X;u.call(this),n[0]=r[0]^r[5]>>>16^r[3]<<16,n[1]=r[2]^r[7]>>>16^r[5]<<16,n[2]=r[4]^r[1]>>>16^r[7]<<16,n[3]=r[6]^r[3]>>>16^r[1]<<16;for(var i=0;i<4;i++)n[i]=16711935&(n[i]<<8|n[i]>>>24)|4278255360&(n[i]<<24|n[i]>>>8),e[t+i]^=n[i]},blockSize:4,ivSize:2}),t.Rabbit=r._createHelper(o),e.Rabbit},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./enc-base64":1569327047121,"./md5":1569327047122,"./evpkdf":1569327047132,"./cipher-core":1569327047133}[e],e)}),e(1569327047149,function(e,t,r){var i,n;i=this,n=function(e){function u(){for(var e=this._X,t=this._C,r=0;r<8;r++)a[r]=t[r];for(t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<a[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<a[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<a[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<a[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<a[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<a[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<a[6]>>>0?1:0)|0,this._b=t[7]>>>0<a[7]>>>0?1:0,r=0;r<8;r++){var i=e[r]+t[r],n=65535&i,o=i>>>16,c=((n*n>>>17)+n*o>>>15)+o*o,s=((4294901760&i)*i|0)+((65535&i)*i|0);f[r]=c^s}e[0]=f[0]+(f[7]<<16|f[7]>>>16)+(f[6]<<16|f[6]>>>16)|0,e[1]=f[1]+(f[0]<<8|f[0]>>>24)+f[7]|0,e[2]=f[2]+(f[1]<<16|f[1]>>>16)+(f[0]<<16|f[0]>>>16)|0,e[3]=f[3]+(f[2]<<8|f[2]>>>24)+f[1]|0,e[4]=f[4]+(f[3]<<16|f[3]>>>16)+(f[2]<<16|f[2]>>>16)|0,e[5]=f[5]+(f[4]<<8|f[4]>>>24)+f[3]|0,e[6]=f[6]+(f[5]<<16|f[5]>>>16)+(f[4]<<16|f[4]>>>16)|0,e[7]=f[7]+(f[6]<<8|f[6]>>>24)+f[5]|0}var t,r,i,n,a,f,o;return r=(t=e).lib.StreamCipher,i=t.algo,n=[],a=[],f=[],o=i.RabbitLegacy=r.extend({_doReset:function(){for(var e=this._key.words,t=this.cfg.iv,r=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],i=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]],n=this._b=0;n<4;n++)u.call(this);for(n=0;n<8;n++)i[n]^=r[n+4&7];if(t){var o=t.words,c=o[0],s=o[1],a=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),f=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),d=a>>>16|4294901760&f,h=f<<16|65535&a;for(i[0]^=a,i[1]^=d,i[2]^=f,i[3]^=h,i[4]^=a,i[5]^=d,i[6]^=f,i[7]^=h,n=0;n<4;n++)u.call(this)}},_doProcessBlock:function(e,t){var r=this._X;u.call(this),n[0]=r[0]^r[5]>>>16^r[3]<<16,n[1]=r[2]^r[7]>>>16^r[5]<<16,n[2]=r[4]^r[1]>>>16^r[7]<<16,n[3]=r[6]^r[3]>>>16^r[1]<<16;for(var i=0;i<4;i++)n[i]=16711935&(n[i]<<8|n[i]>>>24)|4278255360&(n[i]<<24|n[i]>>>8),e[t+i]^=n[i]},blockSize:4,ivSize:2}),t.RabbitLegacy=r._createHelper(o),e.RabbitLegacy},"object"===(void 0===r?"undefined":o(r))?t.exports=r=n(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],n):n(i.CryptoJS)},function(e){return t({"./core":1569327047117,"./enc-base64":1569327047121,"./md5":1569327047122,"./evpkdf":1569327047132,"./cipher-core":1569327047133}[e],e)}),t(1569327047116));
});
define("project.config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={projectid:"1109826401_%E8%AF%B4%E8%AF%B4%E5%8D%A1%E7%89%87",setting:{urlCheck:!0,es6:!0,postcss:!0,minified:!0,newFeature:!0,autoAudits:!1},qqLibVersion:"1.7.1",compileType:"miniprogram",createTime:1568689612175,accessTime:1568689612175,packOptions:{ignore:[]},debugOptions:{hidedInDevtools:[]},sensorsdataUrl:"https://bi.52miniapps.com/sa?project=miniapp_qmzs",serverHost:"https://qmzs.52miniapps.com",appid:"1109826401",version:"1.1.1",interfaceCode:101,hyChannel:"wxmp3081",debug:!1,projectname:"%E8%AF%B4%E8%AF%B4%E5%8D%A1%E7%89%87",adMpId:20,condition:{search:{current:-1,list:[]},conversation:{current:-1,list:[]},game:{currentL:-1,list:[]},miniprogram:{current:-1,list:[]}}};
});
define("routes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0});exports.home="/pages/home/main",exports.edit="/pages/editCard/main",exports.card="/pages/card/main";
});
define("sensor/app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},f=require("./sensorsdata.min"),h=require("../utils/utils"),g=require("../utils/user-key"),v=t(require("../project.config")),d=require("./sensors"),y=require("./report"),m=t(require("../globalData/data_storage"));function t(t){return t&&t.__esModule?t:{default:t}}global.eval=function(){},f.sa.init();var r=f.sa.track;f.sa.track=function(t,e){(0,y.report)(t,e),r.apply(this,arguments)};var e=App,w=0;App=function(u){var c=l({},u,{onLaunch:function(e){var t=getApp;getApp=function(){return t()||c},wx.getLaunchOptionsSync||(wx.getLaunchOptionsSync=function(){return e});var r=(0,g.getUserKey)();f.sa.registerApp(l({appId:v.default.appid,version:v.default.version,userKey:r},(0,d.getCommonParam)())),f.sa.para.autoTrack.appShow=function(){var t=e.query;return w=Date.now(),(0,y.report)("AppStart",l({from:e.scene,appId:v.default.appid,version:v.default.version},t)),l({},t)},f.sa.para.autoTrack.appHide=function(){(0,y.report)("AppClose",{length:Math.ceil((Date.now()-w)/6e4)})},f.sa.para.autoTrack.pageShow=function(){var t=getCurrentPages(),e=t[t.length-1].route,r=Object.assign({name:e});(0,y.report)("pv",r)},u.onLaunch&&u.onLaunch.apply(this,arguments);var a=(0,d.getQueryInfo)(),n=a.ch,o=a.sch,i=a.pos,s=function(t,e){var r={};for(var a in t)0<=e.indexOf(a)||Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a]);return r}(a,["ch","sch","pos"]),p=Object.assign({},s);n&&(p.first_ch=n),o&&(p.first_sch=o),i&&(p.first_pos=i),f.sa.setOnceProfile(p),m.default.get("lastVisitTime").then(function(t){var e={last_visit_time:t};n&&(e.last_ch=n),o&&(e.last_sch=o),i&&(e.last_pos=i),f.sa.setProfile(e),m.default.set("lastVisitTime",(0,h.formatTime)())}).catch(function(){m.default.set("lastVisitTime",(0,h.formatTime)())})},onShow:function(){u.onShow&&u.onShow.apply(this,arguments)},onHide:function(){u.onHide&&u.onHide.apply(this,arguments),(0,y.sendReportRequest)()}});return e(c)};
});
define("sensor/courier.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.tackPageView=function(e){r.sa.track("pageview",{url:e})},exports.track=function(e,a){r.sa.track(e,a)};var r=require("./sensorsdata.min");exports.default=r.sa;
});
define("sensor/report.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.reportParams=void 0;var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},e=function(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e};function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}exports.report=function(e,r){if(/^\$/.test(e))return;var t={eventId:y[e]||e,time:Date.now(),index:"",sex:0,data:r};m.push(t),m.length>g&&b();h||setTimeout(function(){b()},2e3)},exports.sendReportRequest=b;var r,o=require("../utils/utils"),t=require("../project.config"),s=(r=t)&&r.__esModule?r:{default:r},i=require("../utils/user-key");function u(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}var c=require("crypto-js"),l=c.enc.Utf8.parse("HAO360CN"),f=c.enc.Utf8.parse("HAO360CN"),p=(e(d,[{key:"setParam",value:function(e,r){this.data[e]=r}},{key:"getData",value:function(){return this.data}}]),d);function d(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,d),this.data={osType:"",qid:"",openId:"",userKey:(0,i.getUserKey)(),versionName:s.default.version,versionCode:+s.default.version.replace(".",""),channel:s.default.hyChannel}}var v=exports.reportParams=new p;wx.getSystemInfo({success:function(e){var r=/iPhone/.test(e.model)?1:0;v.setParam("osType",r)}});var y={read_chapter:"readNovels"},h=null,m=[],g=9;function b(){var r=m;if(m=[],clearTimeout(h),h=null,0===r.length)return Promise.resolve();var t=a({},v.getData(),{dataJson:r});s.default.debug&&console.log("Debug report",t);var e=JSON.stringify(t),n=c.DES.encrypt(e,l,{iv:f,mode:c.mode.CBC,padding:c.pad.Pkcs7}).toString();return n=encodeURIComponent(n),(0,o.promisify)(wx.request)({url:"https://collect.52miniapps.com/data/c/?data="+n}).catch(function(e){r=[].concat(u(t.dataJson),u(r)),console.error(e)})}
});
define("sensor/sensors.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};exports.getCommonParam=function(){var e=v({},function(){var e=wx.getLaunchOptionsSync(),r=e.path,t=void 0===r?"":r,o=e.scene,n=void 0===o?0:o,a=e.shareTicket,c=void 0===a?"":a;return{path:t,scene:n,shareTicket:c}}(),function(){var e={},r=wx.getLaunchOptionsSync().referrerInfo;if(r&&r.appId){e.referrerAppId=r.appId;var t=r.extraData;"object"===(void 0===t?"undefined":o(t))&&(t=JSON.stringify(t)),e.extraData=t}return e}());for(var r in e)""===e[r]&&delete e[r];return e},exports.getQueryInfo=function(){var e=wx.getLaunchOptionsSync().query,r=e.scene,t=void 0===r?"":r,o=e.ch,n=void 0===o?"":o,a=e.sch,c=void 0===a?"":a,i=e.pos,s=void 0===i?"":i,p=function(e,r){var t={};for(var o in e)0<=r.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(e,["scene","ch","sch","pos"]);if(l){var u=l;n=u.ch,c=u.sch}else(n||c)&&(l={ch:n,sch:c},wx.setStorageSync(h,l));var f=(0,d.formatTime)(),y={query:(0,d.param)(p),ch:n,sch:c,pos:s,first_visit_time0:f};t&&(y=v({},y,parseQueryString(decodeURIComponent(t))));return y};var e=require("./sensorsdata.min"),d=require("../utils/utils");var h="channel",l=void 0;try{l=wx.getStorageSync(h)}catch(e){}exports.default=e.sa;
});
define("sensor/sensorsdata.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.sa=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=require("./sensorsdata_conf"),f={},s={};s.para=e.conf,s.status={},s.para.openid_url||(s.para.openid_url=s.para.server_url.replace(/\/sa(\.gif){0,1}/,"/mp_login")),"number"!=typeof s.para.send_timeout&&(s.para.send_timeout=1e3),s.para.batch_send&&(s.para.use_client_time=!0),!0===s.para.batch_send&&(s.para.batch_send={},s.para.batch_send.send_timeout=6e3);var t=Array.prototype,r=Function.prototype,n=Object.prototype,a=t.slice,c=n.toString,u=n.hasOwnProperty,o="1.12.6",p="MiniProgram",h="utm_source utm_medium utm_campaign utm_content utm_term",d={1001:"发现栏小程序主入口，“最近使用”列表",1005:"顶部搜索框的搜索结果页",1006:"发现栏小程序主入口搜索框的搜索结果页",1007:"单人聊天会话中的小程序消息卡片",1008:"群聊会话中的小程序消息卡片",1011:"扫描二维码",1012:"长按图片识别二维码",1013:"手机相册选取二维码",1014:"小程序模版消息",1017:"前往体验版的入口页",1019:"微信钱包",1020:"公众号 profile 页相关小程序列表",1022:"聊天顶部置顶小程序入口",1023:"安卓系统桌面图标",1024:"小程序 profile 页",1025:"扫描一维码",1026:"附近小程序列表",1027:"顶部搜索框搜索结果页“使用过的小程序”列表",1028:"我的卡包",1029:"卡券详情页",1030:"自动化测试下打开小程序",1031:"长按图片识别一维码",1032:"手机相册选取一维码",1034:"微信支付完成页",1035:"公众号自定义菜单",1036:"App 分享消息卡片",1037:"小程序打开小程序",1038:"从另一个小程序返回",1039:"摇电视",1042:"添加好友搜索框的搜索结果页",1043:"公众号模板消息",1044:"带 shareTicket 的小程序消息卡片（详情)",1045:"朋友圈广告",1046:"朋友圈广告详情页",1047:"扫描小程序码",1048:"长按图片识别小程序码",1049:"手机相册选取小程序码",1052:"卡券的适用门店列表",1053:"搜一搜的结果页",1054:"顶部搜索框小程序快捷入口",1056:"音乐播放器菜单",1057:"钱包中的银行卡详情页",1058:"公众号文章",1059:"体验版小程序绑定邀请页",1064:"微信连Wi-Fi状态栏",1067:"公众号文章广告",1068:"附近小程序列表广告",1069:"移动应用",1071:"钱包中的银行卡列表页",1072:"二维码收款页面",1073:"客服消息列表下发的小程序消息卡片",1074:"公众号会话下发的小程序消息卡片",1077:"摇周边",1078:"连Wi-Fi成功页",1079:"微信游戏中心",1081:"客服消息下发的文字链",1082:"公众号会话下发的文字链",1084:"朋友圈广告原生页",1089:"微信聊天主界面下拉",1090:"长按小程序右上角菜单唤出最近使用历史",1091:"公众号文章商品卡片",1092:"城市服务入口",1095:"小程序广告组件",1096:"聊天记录",1097:"微信支付签约页",1099:"页面内嵌插件",1102:"公众号 profile 页服务预览",1103:"发现栏小程序主入口，“我的小程序”列表",1104:"微信聊天主界面下拉，“我的小程序”栏"},l="直接打开";s.status.referrer="直接打开";var g=null,m=0,_="",y=!1;s.lib_version=o;var b="object"==(void 0===b?"undefined":i(b))?b:{};function v(e,t,r){var n=s.autoTrackCustom[r];if(e[t]){var i=e[t];e[t]=function(){"onLaunch"===t&&(this[s.para.name]=s),!s.para.autoTrackIsFirst||f.isObject(s.para.autoTrackIsFirst)&&!s.para.autoTrackIsFirst[r]?(i.apply(this,arguments),n.apply(this,arguments)):(!0===s.para.autoTrackIsFirst||f.isObject(s.para.autoTrackIsFirst)&&s.para.autoTrackIsFirst[r])&&(n.apply(this,arguments),i.apply(this,arguments))}}else e[t]=function(){"onLaunch"===t&&(this[s.para.name]=s),n.apply(this,arguments)}}if(b.info=function(){if(s.para.show_log&&"object"==("undefined"==typeof console?"undefined":i(console))&&console.log)try{return console.log.apply(console,arguments)}catch(e){console.log(arguments[0])}},function(){r.bind;var s=t.forEach,n=t.indexOf,e=Array.isArray,o={},i=f.each=function(e,t,r){if(null==e)return!1;if(s&&e.forEach===s)e.forEach(t,r);else if(e.length===+e.length){for(var n=0,i=e.length;n<i;n++)if(n in e&&t.call(r,e[n],n,e)===o)return!1}else for(var a in e)if(u.call(e,a)&&t.call(r,e[a],a,e)===o)return!1};f.logger=b,f.extend=function(r){return i(a.call(arguments,1),function(e){for(var t in e)void 0!==e[t]&&(r[t]=e[t])}),r},f.extend2Lev=function(r){return i(a.call(arguments,1),function(e){for(var t in e)void 0!==e[t]&&(f.isObject(e[t])&&f.isObject(r[t])?f.extend(r[t],e[t]):r[t]=e[t])}),r},f.coverExtend=function(r){return i(a.call(arguments,1),function(e){for(var t in e)void 0!==e[t]&&void 0===r[t]&&(r[t]=e[t])}),r},f.isArray=e||function(e){return"[object Array]"===c.call(e)},f.isFunction=function(e){try{return/^\s*\bfunction\b/.test(e)}catch(e){return!1}},f.isArguments=function(e){return!(!e||!u.call(e,"callee"))},f.toArray=function(e){return e?e.toArray?e.toArray():f.isArray(e)?a.call(e):f.isArguments(e)?a.call(e):f.values(e):[]},f.values=function(e){var t=[];return null==e||i(e,function(e){t[t.length]=e}),t},f.include=function(e,t){var r=!1;return null==e?r:n&&e.indexOf===n?-1!=e.indexOf(t):(i(e,function(e){if(r=r||e===t)return o}),r)}}(),f.trim=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},f.isObject=function(e){return"[object Object]"==c.call(e)&&null!=e},f.isEmptyObject=function(e){if(f.isObject(e)){for(var t in e)if(u.call(e,t))return!1;return!0}return!1},f.isUndefined=function(e){return void 0===e},f.isString=function(e){return"[object String]"==c.call(e)},f.isDate=function(e){return"[object Date]"==c.call(e)},f.isBoolean=function(e){return"[object Boolean]"==c.call(e)},f.isNumber=function(e){return"[object Number]"==c.call(e)&&/[\d\.]+/.test(String(e))},f.isJSONString=function(e){try{JSON.parse(e)}catch(e){return!1}return!0},f.decodeURIComponent=function(t){var r="";try{r=decodeURIComponent(t)}catch(e){r=t}return r},f.encodeDates=function(r){return f.each(r,function(e,t){f.isDate(e)?r[t]=f.formatDate(e):f.isObject(e)&&(r[t]=f.encodeDates(e))}),r},f.formatDate=function(e){function t(e){return e<10?"0"+e:e}return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+t(e.getMilliseconds())},f.searchObjDate=function(r){f.isObject(r)&&f.each(r,function(e,t){f.isObject(e)?f.searchObjDate(r[t]):f.isDate(e)&&(r[t]=f.formatDate(e))})},f.formatString=function(e){return e.length>s.para.max_string_length?(b.info("字符串长度超过限制，已经做截取--"+e),e.slice(0,s.para.max_string_length)):e},f.searchObjString=function(r){f.isObject(r)&&f.each(r,function(e,t){f.isObject(e)?f.searchObjString(r[t]):f.isString(e)&&(r[t]=f.formatString(e))})},f.unique=function(e){for(var t,r=[],n={},i=0;i<e.length;i++)(t=e[i])in n||(n[t]=!0,r.push(t));return r},f.strip_sa_properties=function(n){return f.isObject(n)&&f.each(n,function(t,e){if(f.isArray(t)){var r=[];f.each(t,function(e){f.isString(e)?r.push(e):b.info("您的数据-",t,"的数组里的值必须是字符串,已经将其删除")}),0!==r.length?n[e]=r:(delete n[e],b.info("已经删除空的数组"))}f.isString(t)||f.isNumber(t)||f.isDate(t)||f.isBoolean(t)||f.isArray(t)||(b.info("您的数据-",t,"-格式不满足要求，我们已经将其删除"),delete n[e])}),n},f.strip_empty_properties=function(e){var r={};return f.each(e,function(e,t){null!=e&&(r[t]=e)}),r},f.utf8Encode=function(e){var t,r,n,i,a="";for(t=r=0,n=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<n;i++){var s=e.charCodeAt(i),o=null;s<128?r++:o=127<s&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),null!==o&&(t<r&&(a+=e.substring(t,r)),a+=o,t=r=i+1)}return t<r&&(a+=e.substring(t,e.length)),a},f.base64Encode=function(e){var t,r,n,i,a,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=0,c=0,u="",p=[];if(!e)return e;for(e=f.utf8Encode(e);t=(a=e.charCodeAt(o++)<<16|e.charCodeAt(o++)<<8|e.charCodeAt(o++))>>18&63,r=a>>12&63,n=a>>6&63,i=63&a,p[c++]=s.charAt(t)+s.charAt(r)+s.charAt(n)+s.charAt(i),o<e.length;);switch(u=p.join(""),e.length%3){case 1:u=u.slice(0,-2)+"==";break;case 2:u=u.slice(0,-1)+"="}return u},f.getCurrentPath=function(){var e="未取到";try{var t=getCurrentPages();e=t[t.length-1].route}catch(e){b.info(e)}return e},f.getPath=function(e){return"string"==typeof e?e.replace(/^\//,""):"取值异常"},f.getQueryParam=function(e,t){var r=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null===r||r&&"string"!=typeof r[1]&&r[1].length?"":f.decodeURIComponent(r[1])},s.initialState={queue:[],isComplete:!1,systemIsComplete:!1,storeIsComplete:!1,checkIsComplete:function(){this.systemIsComplete&&this.storeIsComplete&&(this.isComplete=!0,0<this.queue.length&&(f.each(this.queue,function(e){s[e[0]].apply(s,a.call(e[1]))}),s.queue=[]))}},f.getPrefixUtm=function(e,t,r){if(t=t||"",r=r||"_",!f.isObject(e))return{};var n={},i={};for(var a in e)-1!==(" "+h+" ").indexOf(" "+a+" ")?n[t+a]=e[a]:i[r+a]=e[a];return{$utms:n,otherUtms:i}},f.convertObjToParam=function(e){var t=[];for(var r in e)t.push(r+"="+e[r]);return t.join("&")},f.getSource=function(t){if(f.isObject(t)){if(f.isEmptyObject(t))return{};for(var e in t)-1===(" "+h+" ").indexOf(" "+e+" ")?delete t[e]:t[e]=t[e].replace("?","*");t="?"+(t=f.convertObjToParam(t))}else t=f.decodeURIComponent(t);var r=h.split(" "),n=h.split(" "),i="",a={};return 2!==(t=t.split("?")).length?{}:(t="?"+(t=t[1]),f.isArray(s.para.source_channel)&&0<s.para.source_channel.length&&(n=n.concat(s.para.source_channel),n=f.unique(n)),f.each(n,function(e){i=f.getQueryParam(t,e),(i=f.decodeURIComponent(i)).length&&f.include(r,e)&&(a[e]=i)}),a)},f.getObjFromQuery=function(e){var t=e.split("?"),r={};return t&&t[1]?(f.each(t[1].split("&"),function(e){var t=e.split("=");t[0]&&t[1]&&(r[t[0]]=t[1])}),r):{}},f.getUtm=function(e,t,r){var n=f.getSource(e);return void 0===r&&t?{pre1:f.getPrefixUtm(n,t).$utms||{},pre2:{}}:void 0!==r&&t?{pre1:f.getPrefixUtm(n,t).$utms||{},pre2:f.getPrefixUtm(n,r).$utms||{}}:{pre1:{},pre2:{}}},f.getMPScene=function(e){return"number"==typeof e||"string"==typeof e&&""!==e?(e=String(e),d[e]||e):"未取到值"},f.getShareDepth=function(){if("number"!=typeof m||0===m)return 1;var e=s.store.getDistinctId(),t=s.store.getFirstId();return!_||_!==e&&_!==t?m+1:m},f.setShareInfo=function(e,t){var r={};if(!(e&&f.isObject(e.query)&&e.query.sampshare))return{};if(r=f.decodeURIComponent(e.query.sampshare),!f.isJSONString(r))return{};var n=(r=JSON.parse(r)).d,i=r.p,a=r.i;"string"==typeof a?(t.$share_distinct_id=a,_=a):t.$share_distinct_id="取值异常","number"==typeof n?(t.$share_depth=n,m=n):t.$share_depth="-1",t.$share_url_path="string"==typeof i?i:"取值异常"},f.getShareInfo=function(){return JSON.stringify({i:s.store.getDistinctId()||"取值异常",p:f.getCurrentPath(),d:f.getShareDepth()})},f.setUtm=function(e,t){var r={};if(e&&f.isObject(e.query)){var n=(r=f.extend({},e.query)).scene;n&&(n=-1!==(n=f.decodeURIComponent(n)).indexOf("?")?"?"+n.replace(/\?/g,""):"?"+n,f.extend(r,f.getObjFromQuery(n))),e.query.q&&f.extend(r,f.getObjFromQuery(f.decodeURIComponent(e.query.q)))}if(e&&f.isObject(e.referrerInfo)&&e.referrerInfo.extraData){var i={};f.isObject(e.referrerInfo.extraData)&&!f.isEmptyObject(e.referrerInfo.extraData)?i=e.referrerInfo.extraData:f.isJSONString(e.referrerInfo.extraData)&&(i=JSON.parse(e.referrerInfo.extraData)),f.extend(r,i)}var a=f.getUtm(r,"$","$latest_");return f.extend(t,a.pre1),a},f.info={properties:{$lib:p,$lib_version:String(o)},getSystem:function(){var t=this.properties;wx.getNetworkType({success:function(e){t.$network_type=e.networkType},complete:function(){wx.getSystemInfo({success:function(e){t.$manufacturer=e.brand,t.$model=e.model,t.$screen_width=Number(e.screenWidth),t.$screen_height=Number(e.screenHeight),t.$os=e.system.split(" ")[0],t.$os_version=e.system.split(" ")[1]},complete:function(){s.initialState.systemIsComplete=!0,s.initialState.checkIsComplete()}})}})}},s._=f,s.prepareData=function(e,t){var r={distinct_id:this.store.getDistinctId(),lib:{$lib:p,$lib_method:"code",$lib_version:String(o)},properties:{}};f.extend(r,e),f.isObject(e.properties)&&!f.isEmptyObject(e.properties)&&f.extend(r.properties,e.properties),e.type&&"profile"===e.type.slice(0,7)||(s.para.batch_send&&(r._track_id=Number(String(Math.random()).slice(2,5)+String(Math.random()).slice(2,4)+String(Date.now()).slice(-4))),r.properties=f.extend({},f.info.properties,s.store.getProps(),r.properties),"object"==i(s.store._state)&&"number"==typeof s.store._state.first_visit_day_time&&s.store._state.first_visit_day_time>(new Date).getTime()?r.properties.$is_first_day=!0:r.properties.$is_first_day=!1),r.properties.$time&&f.isDate(r.properties.$time)?(r.time=1*r.properties.$time,delete r.properties.$time):s.para.use_client_time&&(r.time=1*new Date),f.searchObjDate(r),f.searchObjString(r),b.info(r),s.sendStrategy.send(r)},s.store={verifyDistinctId:function(e){return"number"==typeof e&&(e=String(e),/^\d+$/.test(e)||(e="unexpected_id")),"string"==typeof e&&""!==e||(e="unexpected_id"),e},storageInfo:null,getUUID:function(){return Date.now()+"-"+Math.floor(1e7*Math.random())+"-"+Math.random().toString(16).replace(".","")+"-"+String(31242*Math.random()).replace(".","").slice(0,8)},getStorage:function(){return this.storageInfo||(this.storageInfo=wx.getStorageSync("sensorsdata2015_wechat")||""),this.storageInfo},_state:{},mem:{mdata:[],add:function(e){this.mdata.push(e)},clear:function(e){this.mdata.splice(0,e)}},toState:function(e){var t=null;f.isJSONString(e)?(t=JSON.parse(e)).distinct_id?this._state=t:this.set("distinct_id",this.getUUID()):f.isObject(e)&&(t=e).distinct_id?this._state=t:this.set("distinct_id",this.getUUID())},getFirstId:function(){return this._state.first_id},getDistinctId:function(){return this._state.distinct_id},getProps:function(){return this._state.props||{}},setProps:function(e,t){var r=this._state.props||{};t?this.set("props",e):(f.extend(r,e),this.set("props",r))},set:function(e,t){var r={};for(var n in"string"==typeof e?r[e]=t:"object"==(void 0===e?"undefined":i(e))&&(r=e),this._state=this._state||{},r)this._state[n]=r[n];this.save()},change:function(e,t){this._state[e]=t},save:function(){wx.setStorageSync("sensorsdata2015_wechat",this._state)},init:function(){var e=this.getStorage();if(e)this.toState(e);else{y=!0;var t=new Date,r=t.getTime();t.setHours(23),t.setMinutes(59),t.setSeconds(60),this.set({distinct_id:this.getUUID(),first_visit_time:r,first_visit_day_time:t.getTime()})}}},s.setProfile=function(e,t){s.prepareData({type:"profile_set",properties:e},t)},s.setOnceProfile=function(e,t){s.prepareData({type:"profile_set_once",properties:e},t)},s.track=function(e,t,r){this.prepareData({type:"track",event:e,properties:t},r)},s.identify=function(e,t){if("string"!=typeof e&&"number"!=typeof e)return!1;e=s.store.verifyDistinctId(e);var r=s.store.getFirstId();!0===t?r?s.store.set("first_id",e):s.store.set("distinct_id",e):r?s.store.change("first_id",e):s.store.change("distinct_id",e)},s.trackSignup=function(e,t,r,n){s.prepareData({original_id:s.store.getFirstId()||s.store.getDistinctId(),distinct_id:e,type:"track_signup",event:t,properties:r},n),s.store.set("distinct_id",e)},s.registerApp=function(e){f.isObject(e)&&!f.isEmptyObject(e)&&(f.info.properties=f.extend(f.info.properties,e))},s.register=function(e){f.isObject(e)&&!f.isEmptyObject(e)&&s.store.setProps(e)},s.clearAllRegister=function(){s.store.setProps({},!0)},s.login=function(e){if("string"!=typeof e&&"number"!=typeof e)return!1;e=s.store.verifyDistinctId(e);var t=s.store.getFirstId(),r=s.store.getDistinctId();e!==r&&(t||s.store.set("first_id",r),s.trackSignup(e,"$SignUp"))},s.openid={getRequest:function(t){wx.login({success:function(e){e.code&&s.para.appid&&s.para.openid_url?wx.request({url:s.para.openid_url+"&code="+e.code+"&appid="+s.para.appid,method:"GET",complete:function(e){f.isObject(e)&&f.isObject(e.data)&&e.data.openid?t(e.data.openid):t()}}):t()}})},getWXStorage:function(){var e=s.store.getStorage();if(e&&f.isObject(e))return e.openid},getOpenid:function(e){if(!s.para.appid)return e(),!1;var t=this.getWXStorage();t?e(t):this.getRequest(e)}},s.initial=function(){this._.info.getSystem(),this.store.init(),s.para.batch_send&&s.sendStrategy.batchInterval(),f.isObject(this.para.register)&&(f.info.properties=f.extend(f.info.properties,this.para.register))},s.init=function(e){if(!0===this.hasInit)return!1;this.hasInit=!0,f.isObject(e)&&(s.para=f.extend(s.para,e)),s.initialState.storeIsComplete=!0,s.initialState.checkIsComplete()},s.getPresetProperties=function(){if(f.info&&f.info.properties&&f.info.properties.$lib){var e=f.extend({$url_path:f.getCurrentPath()},f.info.properties,s.store.getProps());return delete e.$lib,e}return{}},f.autoExeQueue=function(){return{items:[],enqueue:function(e){this.items.push(e),this.start()},dequeue:function(){return this.items.shift()},getCurrentItem:function(){return this.items[0]},isRun:!1,start:function(){0<this.items.length&&!this.isRun&&(this.isRun=!0,this.getCurrentItem().start())},close:function(){this.dequeue(),this.isRun=!1,this.start()}}},s.requestQueue=function(e){this.url=e.url},s.requestQueue.prototype.isEnd=function(){this.received||(this.received=!0,this.close())},s.requestQueue.prototype.start=function(){var e=this;setTimeout(function(){e.isEnd()},s.para.send_timeout),wx.request({url:this.url,method:"GET",complete:function(){e.isEnd()}})},s.dataQueue=f.autoExeQueue(),s.sendStrategy={hasNewData:!1,onAppHide:function(){s.para.batch_send&&this.batchSend()},send:function(e){s.para.batch_send?(this.hasNewData=!0,s.store.mem.add(e)):this.queueSend(e)},queueSend:function(e){e=JSON.stringify(e),e=-1!==s.para.server_url.indexOf("?")?s.para.server_url+"&data="+encodeURIComponent(f.base64Encode(e)):s.para.server_url+"?data="+encodeURIComponent(f.base64Encode(e));var t=new s.requestQueue({url:e});t.close=function(){s.dataQueue.close()},s.dataQueue.enqueue(t)},wxrequest:function(e){if(f.isArray(e.data)&&0<e.data.length){var t=Date.now();e.data.forEach(function(e){e._flush_time=t}),e.data=JSON.stringify(e.data),wx.request({url:s.para.server_url,method:"POST",dataType:"text",data:"data_list="+encodeURIComponent(f.base64Encode(e.data)),success:function(){e.success(e.len)}})}else e.success(e.len)},batchSend:function(){var e=s.store.mem.mdata,t=e.length;0<t&&this.wxrequest({data:e,len:t,success:this.batchRemove.bind(this)})},batchRemove:function(e){s.store.mem.clear(e),this.hasNewData=!0,this.batchWrite()},is_first_batch_write:!0,batchWrite:function(){var e=this;this.hasNewData&&(this.is_first_batch_write&&(this.is_first_batch_write=!1,setTimeout(function(){e.batchSend()},1e3)),this.hasNewData=!1,wx.setStorageSync("sensors_mp_prepare_data",s.store.mem.mdata))},batchInterval:function(){var t=this;!function e(){setTimeout(function(){t.batchWrite(),e()},1e3)}(),function e(){setTimeout(function(){t.batchSend(),e()},s.para.batch_send.send_timeout)}()}},s.setOpenid=function(e,t){s.store.set("openid",e),t?s.store.set("distinct_id",e):s.identify(e,!0)},s.initWithOpenid=function(t,r){t=t||{},s.openid.getOpenid(function(e){e&&s.setOpenid(e,t.isCoverLogin),r&&f.isFunction(r)&&r(e),s.init(t)})},f.each(["setProfile","setOnceProfile","track","register","clearAllRegister","quick","registerApp"],function(e){var t=s[e];s[e]=function(){s.initialState.isComplete?t.apply(s,arguments):s.initialState.queue.push([e,arguments])}}),f.setQuery=function(e){if(e&&f.isObject(e)&&!f.isEmptyObject(e)){var r=[];return f.each(e,function(e,t){r.push(t+"="+e)}),r.join("&")}return""},s.autoTrackCustom={trackCustom:function(e,t,r){var n=s.para.autoTrack[e],i="";s.para.autoTrack&&n&&("function"==typeof n?(i=n(),f.isObject(i)&&f.extend(t,i)):f.isObject(n)&&(f.extend(t,n),s.para.autoTrack[e]=!0),s.track(r,t))},appLaunch:function(e,t){this[s.para.name]=s;var r={};e&&e.path&&(r.$url_path=f.getPath(e.path)),f.setShareInfo(e,r);var n=f.setUtm(e,r);y?(r.$is_first_time=!0,f.isEmptyObject(n.pre1)||s.setOnceProfile(n.pre1)):r.$is_first_time=!1,f.isEmptyObject(n.pre2)||s.registerApp(n.pre2),e.scene=e.scene||"未取到值",r.$scene=f.getMPScene(e.scene),s.registerApp({$latest_scene:r.$scene}),r.$url_query=f.setQuery(e.query),t?(r=f.extend(r,t),s.track("$MPLaunch",r)):s.para.autoTrack&&s.para.autoTrack.appLaunch&&s.autoTrackCustom.trackCustom("appLaunch",r,"$MPLaunch")},appShow:function(e,t){var r={};g=(new Date).getTime(),e&&e.path&&(r.$url_path=f.getPath(e.path)),f.setShareInfo(e,r);var n=f.setUtm(e,r);f.isEmptyObject(n.pre2)||s.registerApp(n.pre2),e.scene=e.scene||"未取到值",r.$scene=f.getMPScene(e.scene),s.registerApp({$latest_scene:r.$scene}),r.$url_query=f.setQuery(e.query),t?(r=f.extend(r,t),s.track("$MPShow",r)):s.para.autoTrack&&s.para.autoTrack.appShow&&s.autoTrackCustom.trackCustom("appShow",r,"$MPShow")},appHide:function(e){var t=(new Date).getTime(),r={};r.$url_path=f.getCurrentPath(),g&&0<t-g&&(t-g)/36e5<24&&(r.event_duration=(t-g)/1e3),e?(r=f.extend(r,e),s.track("$MPHide",r)):s.para.autoTrack&&s.para.autoTrack.appHide&&s.autoTrackCustom.trackCustom("appHide",r,"$MPHide"),s.sendStrategy.onAppHide()},pageLoad:function(e){if(e&&f.isObject(e)){var t=f.extend({},e);if(e.q&&f.extend(t,f.getObjFromQuery(f.decodeURIComponent(e.q))),e.scene){var r=e.scene;r=-1!==(r=f.decodeURIComponent(r)).indexOf("?")?"?"+r.replace(/\?/g,""):"?"+r,f.extend(t,f.getObjFromQuery(r))}var n=f.getUtm(t,"$","$latest_");this.sensors_mp_load_utm=n.pre1,this.sensors_mp_url_query=f.setQuery(e)}},pageShow:function(e){var t="系统没有取到值";"object"==i(this)&&("string"==typeof this.route?t=this.route:"string"==typeof this.__route__&&(t=this.__route__));var r={};r.$referrer=l,r.$url_path=t,s.status.last_referrer=l,this.sensors_mp_load_utm&&(f.extend(r,this.sensors_mp_load_utm),this.sensors_mp_load_utm=null),this.sensors_mp_url_query&&(r.$url_query=this.sensors_mp_url_query,this.sensors_mp_url_query=""),e?(r=f.extend(r,e),s.track("$MPViewScreen",r)):s.para.onshow?s.para.onshow(s,t,this):s.para.autoTrack&&s.para.autoTrack.pageShow&&s.autoTrackCustom.trackCustom("pageShow",r,"$MPViewScreen"),l=t,s.status.referrer=t},pageShare:function(e,t){var r=e.onShareAppMessage;e.onShareAppMessage=function(){var e=r.apply(this,arguments);return s.para.autoTrack&&s.para.autoTrack.pageShare&&s.autoTrackCustom.trackCustom("pageShare",{$url_path:f.getCurrentPath(),$share_depth:f.getShareDepth()},"$MPShare"),s.para.allow_amend_share_path&&("object"!=(void 0===e?"undefined":i(e))&&((e={}).path=f.getCurrentPath()),"object"!=(void 0===e?"undefined":i(e))||void 0!==e.path&&""!==e.path||(e.path=f.getCurrentPath()),"object"==(void 0===e?"undefined":i(e))&&"string"==typeof e.path&&(-1===e.path.indexOf("?")?e.path=e.path+"?":"&"!==e.path.slice(-1)&&(e.path=e.path+"&")),e.path=e.path+"sampshare="+encodeURIComponent(f.getShareInfo())),e}}},!(s.quick=function(){var e=arguments[0],t=arguments[1],r=arguments[2],n={};"appLaunch"===e||"appShow"===e?(f.isObject(r)&&(n=r),t&&s.autoTrackCustom[e](t,n)):"pageLoad"===e?t&&s.autoTrackCustom.pageLoad(t):"appHide"!==e&&"pageShow"!==e||(f.isObject(t)&&(n=t),s.autoTrackCustom[e](t,n))})!==s.para.autoTrack)if(s.para.is_plugin)s.App=function(e){v(e=e||{},"onLaunch","appLaunch"),v(e,"onShow","appShow"),v(e,"onHide","appHide"),App.apply(this,arguments)},s.Page=function(e){v(e,"onLoad","pageLoad"),v(e,"onShow","pageShow"),"function"==typeof e.onShareAppMessage&&s.autoTrackCustom.pageShare(e),Page.apply(this,arguments)};else{var S=App;App=function(e){v(e,"onLaunch","appLaunch"),v(e,"onShow","appShow"),v(e,"onHide","appHide"),S.apply(this,arguments)};var O=Page;Page=function(e){v(e,"onLoad","pageLoad"),v(e,"onShow","pageShow"),"function"==typeof e.onShareAppMessage&&s.autoTrackCustom.pageShare(e),O.apply(this,arguments)}}s.initial(),exports.sa=s;
});
define("sensor/sensorsdata_conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.conf=void 0;var e,a=require("../project.config"),p=(e=a)&&e.__esModule?e:{default:e};var t={name:"sensors",appid:p.default.appid,server_url:p.default.sensorsdataUrl,send_timeout:1e3,max_string_length:300,use_client_time:!1,show_log:p.default.debug,allow_amend_share_path:!0,autoTrack:{appLaunch:!0,appShow:!0,appHide:!0,pageShow:!0,pageShare:!0},autoTrackIsFirst:{appLaunch:!0,appShow:!0,appHide:!0},is_plugin:!1,batch_send:{send_timeout:6e3}};exports.conf=t;
});
define("utils/canvas_image.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0});var s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};exports.getSystemInfo=function(){return new Promise(function(e,o){wx.getSystemInfo({success:e,fail:o})})},exports.downloadFile=function(n){return new Promise(function(e,o){wx.downloadFile({url:n,success:e,fail:o})})},exports.chooseImage=function(){return new Promise(function(e,o){wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:e,fail:o})})},exports.canvasToTempFilePath=function(n){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{x:100,y:200,width:50,height:50,destWidth:100,destHeight:100};return new Promise(function(e,o){wx.canvasToTempFilePath(s({canvasId:n},t,{success:e,fail:o}))})},exports.saveImageToPhotosAlbum=function(n){return new Promise(function(e,o){wx.saveImageToPhotosAlbum({filePath:n,success:e,fail:o})})};
});
define("utils/eventHub.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t,s,e){return s&&i(t.prototype,s),e&&i(t,e),t};function i(t,s){for(var e=0;e<s.length;e++){var i=s[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=exports.PubSub=(t(e,[{key:"listenOnce",value:function(t,s){var e=this;return this.subList[t]||(this.subList[t]=[]),this.subList[t].once||(this.subList[t].once=[]),this.subList[t].once.push(s),function(){return e.remove(s)}}},{key:"listen",value:function(t,s){var e=this;return this.subList[t]||(this.subList[t]=[]),this.subList[t].listener||(this.subList[t].listener=[]),this.subList[t].listener.push(s),function(){return e.remove(s)}}},{key:"trigger",value:function(){var s=this,e=arguments,t=Array.prototype.shift.call(arguments);this.subList[t]&&this.subList[t].listener&&this.subList[t].listener.length&&this.subList[t].listener.forEach(function(t){return t.apply(s,e)}),this.subList[t]&&this.subList[t].once&&this.subList[t].once.length&&(this.subList[t].once.forEach(function(t){return t.apply(s,e)}),this.subList[t].once=[])}},{key:"remove",value:function(t){var s=this.subList.indexOf(t);this.subList.splice(s,1)}}]),e);function e(){!function(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.subList=[]}exports.default=new s;
});
define("utils/loading.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(exports,"__esModule",{value:!0});var a=0,e=(function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(n,null,[{key:"show",value:function(t){return new Promise(function(e,n){a=Date.now(),wx.showLoading({title:t,success:e,fail:n})})}},{key:"hide",value:function(e){var o=0<arguments.length&&void 0!==e?e:0;return new Promise(function(e,n){o=Math.max(0,o);var t=Math.max(a+o-Date.now(),0);setTimeout(function(){wx.hideLoading({success:e,fail:n})},t)})}}]),n);function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}exports.default=e;
});
define("utils/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    function t(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}Object.defineProperty(exports,"__esModule",{value:!0});var e=(function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(o,null,[{key:"show",value:function(t,e,n){var i=1<arguments.length&&void 0!==e?e:"none",a=2<arguments.length&&void 0!==n?n:1500;return new Promise(function(e,n){var o={title:t,duration:a,success:e,fail:n};switch(i){case"none":case"success":case"loading":o.icon=i;break;default:o.icon="none",o.image=i}wx.showToast(o)})}},{key:"info",value:function(e,n){return o.show(e,"none",1<arguments.length&&void 0!==n?n:1500)}},{key:"success",value:function(e,n){return o.show(e,"success",1<arguments.length&&void 0!==n?n:1500)}},{key:"loading",value:function(e,n){return o.show(e,"loading",1<arguments.length&&void 0!==n?n:1500)}},{key:"hide",value:function(){return new Promise(function(e,n){wx.hideToast({success:e,fail:n})})}}]),o);function o(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o)}exports.default=e;
});
define("utils/user-key.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.getUserKey=function(){if(n)return n;try{return n=(n=wx.getStorageSync("userKey"))||u()}catch(e){return u()}};var e,r=require("../project.config"),t=(e=r)&&e.__esModule?e:{default:e};var o=require("blueimp-md5"),n=void 0;function u(){var e=wx.getSystemInfoSync();return n=o(e.brand+e.model+e.pixelRatio+t.default.appid+Date.now()+"mp").toUpperCase(),wx.setStorageSync("userKey",n),n}
});
define("utils/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseTime=void 0;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};exports.getSession=n,exports.checkSession=function(){return new Promise(function(e,t){n()?e():(0,o.goToLogin)().then(t).catch(t)})},exports.promisify=function(r){return function(o){for(var e=arguments.length,n=Array(1<e?e-1:0),t=1;t<e;t++)n[t-1]=arguments[t];return new Promise(function(e,t){r.apply(null,[i({},o,{success:e,fail:t})].concat(n))})}},exports.getCurDayTime=function(){var e=new Date,t=e.getFullYear(),o=e.getMonth(),n=e.getDate();return new Date((t+"-"+o+"-"+n).toString()).getTime()},exports.formatTime=function(){var e=new Date,t=9<e.getMonth()+1?e.getMonth()+1:"0"+(e.getMonth()+1),o=9<e.getDate()?e.getDate():"0"+e.getDate(),n=9<e.getHours()?e.getHours():"0"+e.getHours(),r=9<e.getMinutes()?e.getMinutes():"0"+e.getMinutes(),i=9<e.getSeconds()?e.getSeconds():"0"+e.getSeconds();return e.getFullYear()+"-"+t+"-"+o+" "+n+":"+r+":"+i},exports.getPageQuery=function(e){"scene"in e&&(e=i({},t(decodeURIComponent(e.scene)),e));return e},exports.parseQueryString=t,exports.param=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return"object"===(void 0===t?"undefined":e(t))?Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):(console.error("param typeError"),null)},exports.isEmptyObject=function(e){for(var t in e)return!1;return!0},exports.adShow=function(e,t,o){{if(void 0===t||void 0===e||void 0===o)return!1;var n=(o-e)/t;return Math.ceil(n)===Math.abs(n)}},exports.computeIndex=function(e,t,o){return void 0!==t&&void 0!==e&&void 0!==o?parseInt((o-e)/t):0};var o=require("../api/user");exports.parseTime=function(e){var t=Date.now()/1e3-e,o=t/31536e3;return 1<=o?Math.floor(o)+"年前":1<=(o=t/2592e3)?Math.floor(o)+"月前":1<=(o=t/86400)?Math.floor(o)+"天前":1<=(o=t/3600)?Math.floor(o)+"小时前":1<=(o=t/60)?Math.floor(o)+"分钟前":"刚刚"};function n(){return getApp().globalData.session}function t(e){"?"===(e+="").charAt(0)&&(e=e.substr(1));var n={};return e.split("&").forEach(function(e){if(e){var t=e.split("="),o=decodeURIComponent(t[0]);o&&(n[o]=decodeURIComponent(t.slice(1).join("=")))}}),n}
});
define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
require("./sensor/app"),App({globalData:{},onLaunch:function(){var a=this;wx.getSystemInfo({success:function(o){a.globalData.systemInfo=o,a.globalData.iPhoneX=-1!==o.model.indexOf("iPhone X"),a.globalData.iPhone=-1!==o.model.indexOf(/iPhone/i)}})}});
    });
define("components/advert-board/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    var c=require("../../sensor/courier"),p=require("../../api/ad"),v=require("../../utils/utils");Component({properties:{location:{type:String,value:"default"},isShow:{type:Boolean,value:!0,observer:function(e){e&&this.data.isOpen&&this.data.isAd&&(this.data.id&&((0,c.track)("ad_event",{location:this.properties.trackPid,event_type:"1"}),(0,p.eventReportPerSecond)("1",{adId:this.data.config.adId,pid:this.adkey,id:this.data.id})),this.data.config.extraData&&(0,c.track)("video_ad",{location:this.properties.trackPid,event_type:"1"}))}},index:{type:Number,value:1,observer:function(e,t){this.adkey&&e!=t&&this.getConfig()}},trackPid:{type:String,value:""},useSlot:{type:Boolean,value:!1},comstomVideoCb:{type:Boolean,value:!1}},data:{id:"",isOpen:!1,config:{},videoAdText:{},configAdType:"",isAd:!1},externalClasses:["ad-wrap-normal"],lifetimes:{attached:function(){this.getConfig()}},methods:{getConfig:function(e){var s=this,t=0<arguments.length&&void 0!==e?e:{force:!1},i=this.properties.location;this.adkey=p.adRef[i],(0,p.getAdConfig)(this.adkey,t).then(function(e){if(s.triggerEvent("adConfig",e),e){"string"==typeof e.sdkId&&(e.sdkId=e.sdkId.split(",").map(function(e){return e.split(":")}));var t=e.sdkId,i=(0,v.computeIndex)(e.adItemPosition,e.interval,s.properties.index)%t.length,d=(0,v.adShow)(e.adItemPosition,e.interval,s.properties.index),a={id:"",configAdType:"",isOpen:e.sdk.isOpen,config:e,isAd:d};if(d&&e.sdk.isOpen){if(!t.length||!t[i])throw Error("components/advert-board/index index of "+s.properties.index+" advert id is not provide");if(a.id=t[i][0]||"",a.configAdType=t[i][1]||"",e.extraData){var o=getCurrentPages(),r=o[o.length-1],n="REWARDED_VIDEO_AD"+s.properties.trackPid;r[n]||(r[n]=wx.createRewardedVideoAd({adUnitId:e.extraData}),r[n].onError(function(e){(0,c.track)("video_ad",{location:s.properties.trackPid,event_type:"3"})}),r[n].onLoad(function(e){(0,c.track)("video_ad",{location:s.properties.trackPid,event_type:"8"})}),s.properties.comstomVideoCb||r[n].onClose(function(e){s.closeVideo(e)})),s.REWARDED_VIDEO_AD=r[n]}s.properties.isShow&&(a.id&&((0,c.track)("ad_event",{location:s.properties.trackPid,event_type:"1"}),(0,p.eventReportPerSecond)("1",{adId:s.data.config.adId,pid:s.adkey,id:s.data.id})),e.extraData&&(0,c.track)("video_ad",{location:s.properties.trackPid,event_type:"1"}))}s.setData(a)}else s.setData({id:"",isOpen:!1,config:{}})})},load:function(e){this.triggerEvent("load",e),(0,c.track)("ad_event",{location:this.properties.trackPid,event_type:"2"}),(0,p.eventReportPerSecond)("6",{adId:this.data.config.adId,pid:this.adkey,id:this.data.id})},error:function(e){this.triggerEvent("error",e),(0,c.track)("ad_event",{location:this.properties.trackPid,err_code:e.detail.errCode,event_type:"3"}),(0,p.eventReportPerSecond)("5",{adId:this.data.config.adId,pid:this.adkey,id:this.data.id,errorCode:e.detail.errCode})},adClick:function(){(0,c.track)("ad_event",{location:this.properties.trackPid,event_type:"4"}),(0,p.eventReportPerSecond)("2",{adId:this.data.config.adId,pid:this.adkey,id:this.data.id})},videoClick:function(){var e=this;this.REWARDED_VIDEO_AD&&(this.REWARDED_VIDEO_AD.load(),this.REWARDED_VIDEO_AD.show().then(function(){(0,p.eventReportPerSecond)("1",{adId:e.data.config.adId,pid:e.adkey,id:e.data.config.extraData})}).catch(function(){e.REWARDED_VIDEO_AD.load(),(0,c.track)("video_ad",{location:e.properties.trackPid,event_type:"6"})}),(0,c.track)("video_ad",{location:this.properties.trackPid,event_type:"10"})),(0,c.track)("video_ad",{location:this.properties.trackPid,event_type:"4"})},closeVideo:function(e){this.triggerEvent("closeVideo",e),e.isEnded?((0,p.eventReport)("6",{adId:this.data.config.adId,pid:this.adkey,id:this.data.config.extraData}),(0,c.track)("video_ad",{location:this.properties.trackPid,event_type:"5"})):(0,c.track)("video_ad",{location:this.properties.trackPid,event_type:"7"})}}});
});
define("components/example-card/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    var e=require("../../sensor/courier");Component({properties:{card:{type:Object,value:{}},unlock:{type:Boolean,value:!1},reDraw:{type:Boolean,value:!1,observer:function(e){var t=this;e&&wx.nextTick(function(){return t.computeScale()})}}},data:{scale:1},lifetimes:{ready:function(){this.computeScale()}},methods:{computeScale:function(){var t=this,e=this.createSelectorQuery();e.select("#card").boundingClientRect(),e.exec(function(e){t.setData({scale:e[0].width/301})})},cardClick:function(){(0,e.track)("card_choose",{unlock:this.properties.card.lock?this.properties.unlock?2:1:0,id:this.properties.card.id}),!this.properties.unlock&&this.properties.card.lock?this.triggerEvent("openShare",this.properties.card):(getApp().globalData.checkedCard=this.properties.card,wx.navigateTo({url:"/pages/editCard/main"}))}}});
});
define("components/line/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Component({});
});
define("components/model/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    Component({properties:{isShow:{type:Boolean,value:!1}}});
});
define("pages/card/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    var a=e(require("../../globalData/data_storage")),i=require("../../sensor/courier"),t=e(require("../../utils/toast")),s=require("../../routes");function e(t){return t&&t.__esModule?t:{default:t}}Page({data:{info:"生成完毕",isShowSetTop:!1},onLoad:function(t){var e=this;a.default.get("tempImg").then(function(t){e.setData({canvasImg:t})});var o="";t&&(o=t.info),this.setData({info:o,isShowAD:getApp().globalData.isShowAD})},onShow:function(){this.info&&(this.setData({info:this.info}),t.default.info(this.info.substr(0,4),2e3),this.openSetTop(),this.info="")},onShareAppMessage:function(t){this.info="分享成功";var e=["/static/imgs/share-1.jpg","/static/imgs/share-2.jpg"],o=.5<Math.random()?e[0]:e[1];return t&&t.target.id&&(0,i.track)("btn_click",{type:t.target.id}),{title:this.options.title||"卡片说说，让你的说说丰富多彩",path:s.home,imageUrl:o}},goHome:function(){wx.reLaunch({url:s.home})},closeSetTop:function(){wx.setStorage({key:"setTop",data:!0}),this.setData({isShowSetTop:!1})},openSetTop:function(){var e=this;wx.getStorage({key:"setTop",success:function(t){t.data||e.setData({isShowSetTop:!0})},fail:function(){e.setData({isShowSetTop:!0})}})},showSetTop:function(){this.setData({isShowSetTop:!0})}});
});
define("pages/editCard/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    var r=require("../../utils/canvas_image"),c=e(require("../../utils/loading")),o=e(require("../../globalData/data_storage")),s=require("../../routes"),h=require("../../sensor/courier"),t=require("../../api/editCard"),i=e(require("../../utils/toast"));function e(t){return t&&t.__esModule?t:{default:t}}var f=void 0,g=void 0,n=!1,a=20,d=[];Page({data:{canvasWidth:"327",canvasHeight:"135",currentWord:"0",totalWord:"",content:"",config:{},tempImg:"",randomContent:"",focus:!1},onLoad:function(){var a=this;this.getSSContent(),c.default.show("加载中..."),this.computeInputStyle();return(0,r.getSystemInfo)().then(function(t){f=t.screenWidth/375..toFixed(2);var e=getApp().globalData;a.setData({canvasWidth:a.data.canvasWidth*f,canvasHeight:a.data.canvasHeight*f,ratio:t.pixelRatio,content:e.canvasText||e.checkedCard.placeholder||"",config:e.checkedCard||{}},a.drawCard)}).catch(function(t){return Promise.reject(t)})},onShow:function(){if(this.zone||this.btnShare){var t=this.data.randomContent,e=Math.floor(t.length*Math.random());wx.navigateTo({url:s.card+"?info="+this.info+"&title="+t[e]}),this.zone=!1,this.btnShare=!1}},onShareAppMessage:function(t){var e=["/static/imgs/share-1.jpg","/static/imgs/share-2.jpg"],a=.5<Math.random()?e[0]:e[1];if(t&&t.target.id){this.redirectPublish({currentTarget:{dataset:{type:"share"}}}),(0,h.track)("btn_click",{type:t.target.id})}var n=this.data.randomContent,i=Math.floor(n.length*Math.random());return{title:n.length?n[i]:"卡片说说，让你的说说丰富多彩",path:s.home,imageUrl:a}},computeInputStyle:function(){var t=(g=getApp().globalData.checkedCard||{}).textAxis[1][0]-g.textAxis[0][0],e=g.textAxis[1][1]-g.textAxis[0][1];this.setData({EDIT_WIDTH:t,EDIT_HEIGHT:e})},drawCard:function(t,e){var a=0<arguments.length&&void 0!==t?t:"card",n=1<arguments.length&&void 0!==e?e:1,i=this.data,r=i.EDIT_WIDTH,o=i.EDIT_HEIGHT,s=wx.createCanvasContext(a);s.drawImage(""+g.path,0,0,this.data.canvasWidth*n,this.data.canvasHeight*n),s.scale(n,n),s.rect(g.textAxis[0][0]*f,g.textAxis[0][1]*f,r*f,o*f),s.setFontSize((g.size||14)*f),s.fillStyle=g.color,this.measureContent(s),s.draw(),c.default.hide()},measureContent:function(t){for(var e=g.textAxis[0][0],a=this.data,n=a.EDIT_WIDTH,i=a.EDIT_HEIGHT/g.line,r=g.textAxis[0][1]+i,o=(this.data.content||"").split(""),s="",c=1,h=0;h<o.length;h++){var d=o[h].charCodeAt(),l=s+o[h],u=t.measureText(l).width;10===d&&c<=g.line?(s="",r+=i*f,c++):n<u&&0<h&&c<=g.line?(t.fillText(s,e*f,r*f),s=o[h],r+=i*f,c++):s=l,c<=g.line&&t.fillText(s,e*f,r*f)}},changeData:function(t){var e=t.detail.value;this.setData({content:e}),this.drawCard()},saveCard:function(t){var e=this,a=this.data.canvasWidth,n=this.data.canvasHeight,i=t.currentTarget.dataset.type;return(0,h.track)("card_click",{card_id:this.data.config.id}),this.reportCardContent(),(0,r.canvasToTempFilePath)("card",{width:a,height:n}).then(function(t){o.default.set("tempImg",t.tempFilePath),getApp().globalData.canvasText="",e.saveRecentCard(),"zone"===i?(e.publish(t.tempFilePath),(0,h.track)("btn_click",{type:1})):"save-card"===i?(e.saveImage(t.tempFilePath),(0,h.track)("btn_click",{type:3})):"share"===i&&(e.btnShare=!0,e.info="分享成功")}).catch(function(t){return Promise.reject(t)})},saveRecentCard:function(){var t=this.data,a=t.config,e=t.content;a.placeholder=e,o.default.get("recentCard").then(function(t){if(t&&Array.isArray(t)){t.unshift(a);for(var e=0;e<t.length;e++)t[0].id===t[1].id&&t.splice(1,1);o.default.set("recentCard",t.slice(0,2))}else o.default.set("recentCard",[a])}).catch(function(){o.default.set("recentCard",[a])})},redirectPublish:function(t){var e=this;this.data.content||(this.setData({content:this.data.config.placeholder}),c.default.show("正在生成卡片..."),this.drawCard()),wx.nextTick(function(){e.saveCard(t)})},publish:function(t){this.zone=!0,this.info="发表成功，去说说查看好友回复吧～",qq.openQzonePublish({media:[{type:"photo",path:t}]})},goHome:function(){getApp().globalData.canvasText=this.data.content,wx.navigateBack({url:s.home})},saveImage:function(t){var e=this,a=this.data.randomContent,n=Math.floor(a.length*Math.random());return(0,r.saveImageToPhotosAlbum)(t).then(function(){i.default.info("保存成功",2e3),wx.navigateTo({url:s.card+"?info=保存成功&title="+a[n]})}).catch(function(t){i.default.info("图片保存失败"),e.getSetting()})},getSetting:function(){var e=this;wx.getSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?!t.authSetting["scope.writePhotosAlbum"]&&"{}"!=JSON.stringify(t.authSetting)&&null!=t.authSetting["scope.writePhotosAlbum"]||e.saveImage():wx.showModal({title:"提示",content:"为了保存图片到您的手机，生成图片需要获取您照片的访问权限, 点击「设置」按钮前往设置",cancelText:"不允许",cancelColor:"#A5A5A8",confirmColor:"#FFD856",confirmText:"设置",success:function(t){t.confirm&&wx.openSetting()}})},fail:function(t){i.default.info("生成图片失败")}})},getRandom:function(){var t=this.data.randomContent,e=Math.floor(Math.random()*a);if(t&&0<a)this.setData({content:t[e],randomContent:this.data.randomContent},this.drawCard),this.data.randomContent.splice(e,1),a--;else{if(0===a&&(a=20),n)return;n=!0,c.default.show("内容生成中..."),this.getSSContent(!0)}},getSSContent:function(e){var a=this;(0,t.getContent)(this.data.config.id).then(function(t){d=[].concat(function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}(t.list)),a.setData({randomContent:t.list},e?a.getRandom:function(){}),n=!1,c.default.hide()}).catch(function(t){i.default.info("获取随机内容失败"),n=!1,c.default.hide()})},focus:function(){this.setData({focus:!0})},reportCardContent:function(){var t=this.data,e=t.config,a=t.content;(0,h.track)("draw_card",{id:e.id,content:a,isRandom:-1<d.indexOf(a)})}});
});
define("pages/home/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,Reporter,print,URL,DOMParser,upload,preview,build,showDecryptedInfo,syncMessage,checkProxy,showSystemInfo,openVendor,openToolsLog,showRequestInfo,help,showDebugInfoTable,closeDebug,showDebugInfo,__global){
    var e=require("../../card-lib"),a=require("../../api/user"),i=require("../../api/home"),r=t(require("../../utils/toast")),n=t(require("../../project.config")),o=(require("../../sensor/courier"),t(require("../../utils/loading")));function t(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var d=[].concat(c(e.cards.recommend)),s=[].concat(c(e.freeCard));for(d.forEach(function(e,t){e.lock||d.splice(t,1)});s.length<20;){var u=Math.floor(Math.random()*d.length);s.push(d.splice(u,1)[0])}e.cards.recommend=s,Page({data:{tabs:e.tabs,activeTab:e.tabs[0],cards:e.cards,unlockList:[],isShowGuide:!1,isShareShow:!1,checkedCard:null,recentCard:[],scrollTop:0,reDraw:!1,isShowAD:!1,adConfig:{}},onShareAppMessage:function(e){return{title:"卡片说说，让你的说说丰富多彩",imageUrl:"/static/imgs/share-3.jpg"}},onLoad:function(e){var t=this;e.entry||(this.setData({isShowAD:!0}),getApp().globalData.isShowAD=!0),(0,a.login)().then(function(){(0,i.unlockList)().then(function(e){e.data.info.list&&t.setData({unlockList:e.data.info.list})})}),wx.getStorage({key:"guide",success:function(e){e.data||t.setData({isShowGuide:!0})},fail:function(){t.setData({isShowGuide:!0})}})},onShow:function(){var i=this;wx.getStorage({key:"recentCard",success:function(e){if(e&&e.data){if("1.0.3"===n.default.version){var t=e.data.findIndex(function(e){return"0000"===e.id});-1<t&&e.data.splice(t,1)}wx.getStorage({key:"recentCard",data:e.data});var a=i.data.recentCard.length&&i.data.recentCard.length!==e.data;i.setData({recentCard:e.data,reDraw:a})}}}),this.info&&(r.default.info(this.info),this.info="")},unlock:function(t,e){var a=this;return getApp().globalData.checkedCard=this.data.checkedCard,this.closeShareModel(),(0,i.unlockCard)(t,e).then(function(e){return wx.navigateTo({url:"/pages/editCard/main"}),a.setData(function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},"unlockList["+a.data.unlockList.length+"]",t)),Promise.resolve(e)}).catch(function(e){return getApp().globalData.checkedCard=null,Promise.reject("解锁失败")})},tabClick:function(e){this.setData({activeTab:e.currentTarget.dataset.item,scrollTop:0})},closeGuide:function(){this.setData({isShowGuide:!1}),wx.setStorage({key:"guide",data:!0})},closeShareModel:function(){this.setData({isShareShow:!1,checkedCard:null})},share:function(e){this.setData({isShareShow:!0,checkedCard:e.detail})},formSubmit:function(e){(0,i.addFormId)(e.detail.formId)},closeVideo:function(e){var t=this.data.checkedCard;o.default.show("解锁中..."),e.isEnded?this.unlock(t.id,1).then(function(e){o.default.hide(),r.default.info(e.data.info.toast)}).catch(function(e){o.default.hide(),r.default.info("解锁失败")}):(this.closeShareModel(),o.default.hide(),r.default.info("看完视频才能解锁额"))},getAdConfig:function(e){this.setData({adConfig:e.detail})}});
});
require("app.js");
__wxRoute = "components/advert-board/index";__wxRouteBegin = true;__wxAppCurrentFile__ = "components/advert-board/index.js";require("components/advert-board/index.js");
__wxRoute = "components/example-card/index";__wxRouteBegin = true;__wxAppCurrentFile__ = "components/example-card/index.js";require("components/example-card/index.js");
__wxRoute = "components/line/index";__wxRouteBegin = true;__wxAppCurrentFile__ = "components/line/index.js";require("components/line/index.js");
__wxRoute = "components/model/index";__wxRouteBegin = true;__wxAppCurrentFile__ = "components/model/index.js";require("components/model/index.js");
__wxRoute = "pages/card/main";__wxRouteBegin = true;__wxAppCurrentFile__ = "pages/card/main.js";require("pages/card/main.js");
__wxRoute = "pages/editCard/main";__wxRouteBegin = true;__wxAppCurrentFile__ = "pages/editCard/main.js";require("pages/editCard/main.js");
__wxRoute = "pages/home/main";__wxRouteBegin = true;__wxAppCurrentFile__ = "pages/home/main.js";require("pages/home/main.js");