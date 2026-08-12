((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bjE(d,e,f){var x,w,v,u,t
if(f<=C.b.gX(e))return C.b.gX(d)
if(f>=C.b.gad(e))return C.b.gad(d)
x=C.b.a9E(e,new A.b4z(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bAT(d,e,f,g,h){var x,w,v=D.a6M(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=B.Z(v,v.$ti.c)
x.$flags=1
w=x
x=B.a1(w).i("a4<1,K>")
x=B.Z(new B.a4(w,new A.b41(d,e,f,g,h),x),x.i("ae.E"))
x.$flags=1
return new A.aRw(x,w)},
beI(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bm(f)
if(e==null)return d.bm(1-f)
x=A.bAT(d.a,d.N8(),e.a,e.N8(),f)
w=B.vq(d.d,e.d,f)
w.toString
v=B.vq(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.kd(w,v,t,x.a,x.b,u)},
aRw:function aRw(d,e){this.a=d
this.b=e},
b4z:function b4z(d){this.a=d},
b41:function b41(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avi:function avi(){},
kd:function kd(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
axG:function axG(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[65]
A=a.updateHolder(c[57],A)
A.aRw.prototype={}
A.avi.prototype={
N8(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b8b(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.kd.prototype={
QC(d,e){var x=this,w=x.d.ab(e).acw(d),v=x.e.ab(e).acw(d),u=x.N8()
return B.avj(w,v,x.a,u,x.f,null)},
aGR(d){return this.QC(d,null)},
bm(d){var x=this,w=x.a,v=B.a1(w).i("a4<1,K>")
w=B.Z(new B.a4(w,new A.axG(d),v),v.i("ae.E"))
return new A.kd(x.d,x.e,x.f,w,x.b,x.c)},
e3(d,e){var x=A.beI(d,this,e)
return x},
e4(d,e){var x=A.beI(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.l(x))return!1
return e instanceof A.kd&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.da(e.a,x.a)&&B.da(e.b,x.b)},
gn(d){var x=this,w=B.bF(x.a),v=x.b
v=v==null?null:B.bF(v)
return B.O(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bW(w,", ")+")"}}
var z=a.updateTypes([])
A.b4z.prototype={
$1(d){return d<=this.a},
$S:794}
A.b41.prototype={
$1(d){var x=this,w=B.T(A.bjE(x.a,x.b,d),A.bjE(x.c,x.d,d),x.e)
w.toString
return w},
$S:795}
A.axG.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:88};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.aRw,A.avi])
x(B.cb,[A.b4z,A.b41,A.axG])
w(A.kd,A.avi)})()
var y={h:B.G("n<f>"),b:B.G("I")}};
(a=>{a["Z2X2YZw9ceV2aZSO2ys4b6PRGwA="]=a.current})($__dart_deferred_initializers__);