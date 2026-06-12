((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
bi9(d,e,f){var x,w,v,u,t
if(f<=C.b.gY(e))return C.b.gY(d)
if(f>=C.b.gaf(e))return C.b.gaf(d)
x=C.b.a9g(e,new A.b3a(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.R(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bzc(d,e,f,g,h){var x,w,v=E.a64(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=B.Z(v,v.$ti.c)
x.$flags=1
w=x
x=B.a0(w).i("a5<1,H>")
x=B.Z(new B.a5(w,new A.b2D(d,e,f,g,h),x),x.i("af.E"))
x.$flags=1
return new A.aQs(x,w)},
bd9(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bm(f)
if(e==null)return d.bm(1-f)
x=A.bzc(d.a,d.MR(),e.a,e.MR(),f)
w=B.uR(d.d,e.d,f)
w.toString
v=B.uR(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.k9(w,v,t,x.a,x.b,u)},
aQs:function aQs(d,e){this.a=d
this.b=e},
b3a:function b3a(d){this.a=d},
b2D:function b2D(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aue:function aue(){},
k9:function k9(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
awB:function awB(d){this.a=d}},D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[47],A)
D=c[66]
E=c[54]
A.aQs.prototype={}
A.aue.prototype={
MR(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b6y(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.k9.prototype={
Qo(d,e){var x=this,w=x.d.ae(e).ac8(d),v=x.e.ae(e).ac8(d),u=x.MR()
return B.auf(w,v,x.a,u,x.f,null)},
aGC(d){return this.Qo(d,null)},
bm(d){var x=this,w=x.a,v=B.a0(w).i("a5<1,H>")
w=B.Z(new B.a5(w,new A.awB(d),v),v.i("af.E"))
return new A.k9(x.d,x.e,x.f,w,x.b,x.c)},
e3(d,e){var x=A.bd9(d,this,e)
return x},
e4(d,e){var x=A.bd9(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.T(e)!==B.m(x))return!1
return e instanceof A.k9&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.db(e.a,x.a)&&B.db(e.b,x.b)},
gn(d){var x=this,w=B.bu(x.a),v=x.b
v=v==null?null:B.bu(v)
return B.O(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bS(w,", ")+")"}}
var z=a.updateTypes([])
A.b3a.prototype={
$1(d){return d<=this.a},
$S:761}
A.b2D.prototype={
$1(d){var x=this,w=B.R(A.bi9(x.a,x.b,d),A.bi9(x.c,x.d,d),x.e)
w.toString
return w},
$S:762}
A.awB.prototype={
$1(d){var x=B.R(null,d,this.a)
x.toString
return x},
$S:96};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.aQs,A.aue])
x(B.cv,[A.b3a,A.b2D,A.awB])
w(A.k9,A.aue)})()
var y={h:B.P("n<f>"),b:B.P("K")};(function constants(){D.ex=new B.H(1,0.1411764705882353,0.1843137254901961,0.23921568627450981,C.f)})()};
(a=>{a["1BxGvUH4k3DsiSod89XbGyGbsR0="]=a.current})($__dart_deferred_initializers__);