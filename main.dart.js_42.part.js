((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bkF(d,e,f){var x,w,v,u,t
if(f<=C.b.gY(e))return C.b.gY(d)
if(f>=C.b.gaf(e))return C.b.gaf(d)
x=C.b.a9J(e,new A.b5u(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bBW(d,e,f,g,h){var x,w,v=D.a6Z(null,null,y.b)
v.G(0,e)
v.G(0,g)
x=B.Z(v,v.$ti.c)
x.$flags=1
w=x
x=B.a1(w).i("a5<1,J>")
x=B.Z(new B.a5(w,new A.b4X(d,e,f,g,h),x),x.i("af.E"))
x.$flags=1
return new A.aS1(x,w)},
bfE(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bk(f)
if(e==null)return d.bk(1-f)
x=A.bBW(d.a,d.Nh(),e.a,e.Nh(),f)
w=B.vo(d.d,e.d,f)
w.toString
v=B.vo(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.kj(w,v,t,x.a,x.b,u)},
aS1:function aS1(d,e){this.a=d
this.b=e},
b5u:function b5u(d){this.a=d},
b4X:function b4X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avC:function avC(){},
kj:function kj(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
ay_:function ay_(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[65]
A=a.updateHolder(c[57],A)
A.aS1.prototype={}
A.avC.prototype={
Nh(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b91(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.kj.prototype={
QM(d,e){var x=this,w=x.d.ad(e).acG(d),v=x.e.ad(e).acG(d),u=x.Nh()
return B.avD(w,v,x.a,u,x.f,null)},
aHl(d){return this.QM(d,null)},
bk(d){var x=this,w=x.a,v=B.a1(w).i("a5<1,J>")
w=B.Z(new B.a5(w,new A.ay_(d),v),v.i("af.E"))
return new A.kj(x.d,x.e,x.f,w,x.b,x.c)},
e6(d,e){var x=A.bfE(d,this,e)
return x},
e7(d,e){var x=A.bfE(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.m(x))return!1
return e instanceof A.kj&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.de(e.a,x.a)&&B.de(e.b,x.b)},
gn(d){var x=this,w=B.bz(x.a),v=x.b
v=v==null?null:B.bz(v)
return B.O(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bT(w,", ")+")"}}
var z=a.updateTypes([])
A.b5u.prototype={
$1(d){return d<=this.a},
$S:786}
A.b4X.prototype={
$1(d){var x=this,w=B.T(A.bkF(x.a,x.b,d),A.bkF(x.c,x.d,d),x.e)
w.toString
return w},
$S:787}
A.ay_.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:97};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.B,[A.aS1,A.avC])
x(B.cc,[A.b5u,A.b4X,A.ay_])
w(A.kj,A.avC)})()
var y={h:B.F("n<f>"),b:B.F("H")}};
(a=>{a["HHx8+1EIoxgRfPkzj7xXAtDFemM="]=a.current})($__dart_deferred_initializers__);