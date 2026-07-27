((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
blp(d,e,f){var x,w,v,u,t
if(f<=C.b.gY(e))return C.b.gY(d)
if(f>=C.b.gaf(e))return C.b.gaf(d)
x=C.b.a9R(e,new A.b6c(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bCI(d,e,f,g,h){var x,w,v=D.a7c(null,null,y.b)
v.G(0,e)
v.G(0,g)
x=B.Z(v,v.$ti.c)
x.$flags=1
w=x
x=B.a2(w).i("a5<1,J>")
x=B.Z(new B.a5(w,new A.b5F(d,e,f,g,h),x),x.i("ae.E"))
x.$flags=1
return new A.aSA(x,w)},
bgn(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bl(f)
if(e==null)return d.bl(1-f)
x=A.bCI(d.a,d.Np(),e.a,e.Np(),f)
w=B.vu(d.d,e.d,f)
w.toString
v=B.vu(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.kl(w,v,t,x.a,x.b,u)},
aSA:function aSA(d,e){this.a=d
this.b=e},
b6c:function b6c(d){this.a=d},
b5F:function b5F(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aw0:function aw0(){},
kl:function kl(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
ayo:function ayo(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[65]
A=a.updateHolder(c[57],A)
A.aSA.prototype={}
A.aw0.prototype={
Np(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b9N(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.kl.prototype={
QT(d,e){var x=this,w=x.d.ad(e).acQ(d),v=x.e.ad(e).acQ(d),u=x.Np()
return B.aw1(w,v,x.a,u,x.f,null)},
aHD(d){return this.QT(d,null)},
bl(d){var x=this,w=x.a,v=B.a2(w).i("a5<1,J>")
w=B.Z(new B.a5(w,new A.ayo(d),v),v.i("ae.E"))
return new A.kl(x.d,x.e,x.f,w,x.b,x.c)},
e6(d,e){var x=A.bgn(d,this,e)
return x},
e7(d,e){var x=A.bgn(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.l(x))return!1
return e instanceof A.kl&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.df(e.a,x.a)&&B.df(e.b,x.b)},
gn(d){var x=this,w=B.bA(x.a),v=x.b
v=v==null?null:B.bA(v)
return B.N(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bR(w,", ")+")"}}
var z=a.updateTypes([])
A.b6c.prototype={
$1(d){return d<=this.a},
$S:795}
A.b5F.prototype={
$1(d){var x=this,w=B.T(A.blp(x.a,x.b,d),A.blp(x.c,x.d,d),x.e)
w.toString
return w},
$S:796}
A.ayo.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:94};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.aSA,A.aw0])
x(B.cc,[A.b6c,A.b5F,A.ayo])
w(A.kl,A.aw0)})()
var y={h:B.F("n<f>"),b:B.F("H")}};
(a=>{a["uWfHPzRuEDX0rWekmRz+6W61Mdw="]=a.current})($__dart_deferred_initializers__);