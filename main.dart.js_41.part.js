((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bkg(d,e,f){var x,w,v,u,t
if(f<=C.b.gY(e))return C.b.gY(d)
if(f>=C.b.gaf(e))return C.b.gaf(d)
x=C.b.a9F(e,new A.b57(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bBx(d,e,f,g,h){var x,w,v=D.a6R(null,null,y.b)
v.G(0,e)
v.G(0,g)
x=B.Y(v,v.$ti.c)
x.$flags=1
w=x
x=B.a1(w).i("a5<1,J>")
x=B.Y(new B.a5(w,new A.b4A(d,e,f,g,h),x),x.i("af.E"))
x.$flags=1
return new A.aRR(x,w)},
bfg(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bm(f)
if(e==null)return d.bm(1-f)
x=A.bBx(d.a,d.Nd(),e.a,e.Nd(),f)
w=B.vn(d.d,e.d,f)
w.toString
v=B.vn(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.kj(w,v,t,x.a,x.b,u)},
aRR:function aRR(d,e){this.a=d
this.b=e},
b57:function b57(d){this.a=d},
b4A:function b4A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avs:function avs(){},
kj:function kj(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
axQ:function axQ(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[64]
A=a.updateHolder(c[56],A)
A.aRR.prototype={}
A.avs.prototype={
Nd(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b8C(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.kj.prototype={
QI(d,e){var x=this,w=x.d.ae(e).acB(d),v=x.e.ae(e).acB(d),u=x.Nd()
return B.avt(w,v,x.a,u,x.f,null)},
aHe(d){return this.QI(d,null)},
bm(d){var x=this,w=x.a,v=B.a1(w).i("a5<1,J>")
w=B.Y(new B.a5(w,new A.axQ(d),v),v.i("af.E"))
return new A.kj(x.d,x.e,x.f,w,x.b,x.c)},
e4(d,e){var x=A.bfg(d,this,e)
return x},
e5(d,e){var x=A.bfg(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.m(x))return!1
return e instanceof A.kj&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.dd(e.a,x.a)&&B.dd(e.b,x.b)},
gn(d){var x=this,w=B.by(x.a),v=x.b
v=v==null?null:B.by(v)
return B.O(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bT(w,", ")+")"}}
var z=a.updateTypes([])
A.b57.prototype={
$1(d){return d<=this.a},
$S:777}
A.b4A.prototype={
$1(d){var x=this,w=B.T(A.bkg(x.a,x.b,d),A.bkg(x.c,x.d,d),x.e)
w.toString
return w},
$S:778}
A.axQ.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:96};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.A,[A.aRR,A.avs])
x(B.ce,[A.b57,A.b4A,A.axQ])
w(A.kj,A.avs)})()
var y={h:B.I("n<f>"),b:B.I("H")}};
(a=>{a["cfcyVN4oq57ODWHt4hz/Ixy4xhY="]=a.current})($__dart_deferred_initializers__);