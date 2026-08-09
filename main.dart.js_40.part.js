((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
biI(d,e,f){var x,w,v,u,t
if(f<=C.b.ga5(e))return C.b.ga5(d)
if(f>=C.b.gaf(e))return C.b.gaf(d)
x=C.b.a8h(e,new A.b3U(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bA1(d,e,f,g,h){var x,w,v=D.a6g(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=B.a_(v,v.$ti.c)
x.$flags=1
w=x
x=B.a0(w).i("a5<1,J>")
x=B.a_(new B.a5(w,new A.b3l(d,e,f,g,h),x),x.i("ae.E"))
x.$flags=1
return new A.aQQ(x,w)},
bdO(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bm(f)
if(e==null)return d.bm(1-f)
x=A.bA1(d.a,d.Ml(),e.a,e.Ml(),f)
w=B.vr(d.d,e.d,f)
w.toString
v=B.vr(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.kc(w,v,t,x.a,x.b,u)},
aQQ:function aQQ(d,e){this.a=d
this.b=e},
b3U:function b3U(d){this.a=d},
b3l:function b3l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
auE:function auE(){},
kc:function kc(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
awZ:function awZ(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[64]
A=a.updateHolder(c[56],A)
A.aQQ.prototype={}
A.auE.prototype={
Ml(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b7x(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.kc.prototype={
PC(d,e){var x=this,w=x.d.a9(e).abd(d),v=x.e.a9(e).abd(d),u=x.Ml()
return B.auF(w,v,x.a,u,x.f,null)},
aF0(d){return this.PC(d,null)},
bm(d){var x=this,w=x.a,v=B.a0(w).i("a5<1,J>")
w=B.a_(new B.a5(w,new A.awZ(d),v),v.i("ae.E"))
return new A.kc(x.d,x.e,x.f,w,x.b,null)},
dY(d,e){var x=A.bdO(d,this,e)
return x},
dZ(d,e){var x=A.bdO(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.l(x))return!1
return e instanceof A.kc&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.da(e.a,x.a)&&B.da(e.b,x.b)},
gn(d){var x=this,w=B.bM(x.a),v=x.b
v=v==null?null:B.bM(v)
return B.P(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bY(w,", ")+")"}}
var z=a.updateTypes([])
A.b3U.prototype={
$1(d){return d<=this.a},
$S:790}
A.b3l.prototype={
$1(d){var x=this,w=B.T(A.biI(x.a,x.b,d),A.biI(x.c,x.d,d),x.e)
w.toString
return w},
$S:791}
A.awZ.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:89};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.aQQ,A.auE])
x(B.c8,[A.b3U,A.b3l,A.awZ])
w(A.kc,A.auE)})()
var y={h:B.E("n<f>"),b:B.E("H")}};
(a=>{a["QiWhsQVcoKBXVPRQIYU/0A6cF7o="]=a.current})($__dart_deferred_initializers__);