((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
bfi(d,e,f){var x,w,v,u,t
if(f<=C.b.ga6(e))return C.b.ga6(d)
if(f>=C.b.gag(e))return C.b.gag(d)
x=C.b.a7F(e,new A.b0O(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.R(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bwn(d,e,f,g,h){var x,w,v=E.a5c(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=B.Z(v,v.$ti.c)
x.$flags=1
w=x
x=B.a_(w).i("a4<1,F>")
x=B.Z(new B.a4(w,new A.b0f(d,e,f,g,h),x),x.i("ag.E"))
x.$flags=1
return new A.aOK(x,w)},
bat(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bm(f)
if(e==null)return d.bm(1-f)
x=A.bwn(d.a,d.LP(),e.a,e.LP(),f)
w=B.uJ(d.d,e.d,f)
w.toString
v=B.uJ(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.k2(w,v,t,x.a,x.b,u)},
aOK:function aOK(d,e){this.a=d
this.b=e},
b0O:function b0O(d){this.a=d},
b0f:function b0f(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
asS:function asS(){},
k2:function k2(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
avb:function avb(d){this.a=d}},D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[47],A)
D=c[66]
E=c[54]
A.aOK.prototype={}
A.asS.prototype={
LP(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b4e(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.k2.prototype={
P7(d,e){var x=this,w=x.d.ac(e).aax(d),v=x.e.ac(e).aax(d),u=x.LP()
return B.asT(w,v,x.a,u,x.f,null)},
aE0(d){return this.P7(d,null)},
bm(d){var x=this,w=x.a,v=B.a_(w).i("a4<1,F>")
w=B.Z(new B.a4(w,new A.avb(d),v),v.i("ag.E"))
return new A.k2(x.d,x.e,x.f,w,x.b,null)},
dV(d,e){var x=A.bat(d,this,e)
return x},
dW(d,e){var x=A.bat(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.T(e)!==B.m(x))return!1
return e instanceof A.k2&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.da(e.a,x.a)&&B.da(e.b,x.b)},
gn(d){var x=this,w=B.bE(x.a),v=x.b
v=v==null?null:B.bE(v)
return B.P(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.c_(w,", ")+")"}}
var z=a.updateTypes([])
A.b0O.prototype={
$1(d){return d<=this.a},
$S:753}
A.b0f.prototype={
$1(d){var x=this,w=B.R(A.bfi(x.a,x.b,d),A.bfi(x.c,x.d,d),x.e)
w.toString
return w},
$S:754}
A.avb.prototype={
$1(d){var x=B.R(null,d,this.a)
x.toString
return x},
$S:87};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.aOK,A.asS])
x(B.cp,[A.b0O,A.b0f,A.avb])
w(A.k2,A.asS)})()
var y={h:B.O("n<f>"),b:B.O("J")};(function constants(){D.er=new B.F(1,0.1411764705882353,0.1843137254901961,0.23921568627450981,C.f)})()};
(a=>{a["3/FMm03KmKtfjzC4FtyCBMPx6Hs="]=a.current})($__dart_deferred_initializers__);