((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bm0(d,e,f){var x,w,v,u,t
if(f<=C.b.gV(e))return C.b.gV(d)
if(f>=C.b.gad(e))return C.b.gad(d)
x=C.b.aau(e,new A.b6B(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bDt(d,e,f,g,h){var x,w,v=D.a7r(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=B.a_(v,v.$ti.c)
x.$flags=1
w=x
x=B.a2(w).i("a5<1,K>")
x=B.a_(new B.a5(w,new A.b63(d,e,f,g,h),x),x.i("ab.E"))
x.$flags=1
return new A.aT0(x,w)},
bgX(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bl(f)
if(e==null)return d.bl(1-f)
x=A.bDt(d.a,d.NG(),e.a,e.NG(),f)
w=B.vK(d.d,e.d,f)
w.toString
v=B.vK(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.jB(w,v,t,x.a,x.b,u)},
aT0:function aT0(d,e){this.a=d
this.b=e},
b6B:function b6B(d){this.a=d},
b63:function b63(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aww:function aww(){},
jB:function jB(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
ayW:function ayW(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[65]
A=a.updateHolder(c[57],A)
A.aT0.prototype={}
A.aww.prototype={
NG(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.bac(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.jB.prototype={
Ri(d,e){var x=this,w=x.d.aa(e).ado(d),v=x.e.aa(e).ado(d),u=x.NG()
return B.awx(w,v,x.a,u,x.f,null)},
aIm(d){return this.Ri(d,null)},
bl(d){var x=this,w=x.a,v=B.a2(w).i("a5<1,K>")
w=B.a_(new B.a5(w,new A.ayW(d),v),v.i("ab.E"))
return new A.jB(x.d,x.e,x.f,w,x.b,x.c)},
a8Z(d){var x=this
return new A.jB(x.d,x.e,x.f,B.c5(x.a.length,d,!1,y.o),x.b,x.c)},
dS(d,e){var x=A.bgX(d,this,e)
return x},
dT(d,e){var x=A.bgX(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.l(x))return!1
return e instanceof A.jB&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.d6(e.a,x.a)&&B.d6(e.b,x.b)},
gn(d){var x=this,w=B.bC(x.a),v=x.b
v=v==null?null:B.bC(v)
return B.N(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bL(w,", ")+")"}}
var z=a.updateTypes([])
A.b6B.prototype={
$1(d){return d<=this.a},
$S:804}
A.b63.prototype={
$1(d){var x=this,w=B.T(A.bm0(x.a,x.b,d),A.bm0(x.c,x.d,d),x.e)
w.toString
return w},
$S:805}
A.ayW.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:88};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.B,[A.aT0,A.aww])
x(B.cb,[A.b6B,A.b63,A.ayW])
w(A.jB,A.aww)})()
var y={o:B.G("K"),h:B.G("n<f>"),b:B.G("F")}};
(a=>{a["BLskQsvADeorDrkgRRx6ytZ5mdI="]=a.current})($__dart_deferred_initializers__);