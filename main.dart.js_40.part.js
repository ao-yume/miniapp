((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bln(d,e,f){var x,w,v,u,t
if(f<=C.b.gY(e))return C.b.gY(d)
if(f>=C.b.gaf(e))return C.b.gaf(d)
x=C.b.a9R(e,new A.b6a(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bCG(d,e,f,g,h){var x,w,v=D.a7c(null,null,y.b)
v.G(0,e)
v.G(0,g)
x=B.Z(v,v.$ti.c)
x.$flags=1
w=x
x=B.a2(w).i("a5<1,J>")
x=B.Z(new B.a5(w,new A.b5D(d,e,f,g,h),x),x.i("ae.E"))
x.$flags=1
return new A.aSy(x,w)},
bgl(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bl(f)
if(e==null)return d.bl(1-f)
x=A.bCG(d.a,d.No(),e.a,e.No(),f)
w=B.vt(d.d,e.d,f)
w.toString
v=B.vt(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.kk(w,v,t,x.a,x.b,u)},
aSy:function aSy(d,e){this.a=d
this.b=e},
b6a:function b6a(d){this.a=d},
b5D:function b5D(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aw0:function aw0(){},
kk:function kk(d,e,f,g,h,i){var _=this
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
A.aSy.prototype={}
A.aw0.prototype={
No(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b9L(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.kk.prototype={
QT(d,e){var x=this,w=x.d.ad(e).acQ(d),v=x.e.ad(e).acQ(d),u=x.No()
return B.aw1(w,v,x.a,u,x.f,null)},
aHA(d){return this.QT(d,null)},
bl(d){var x=this,w=x.a,v=B.a2(w).i("a5<1,J>")
w=B.Z(new B.a5(w,new A.ayo(d),v),v.i("ae.E"))
return new A.kk(x.d,x.e,x.f,w,x.b,x.c)},
e6(d,e){var x=A.bgl(d,this,e)
return x},
e7(d,e){var x=A.bgl(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.l(x))return!1
return e instanceof A.kk&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.df(e.a,x.a)&&B.df(e.b,x.b)},
gn(d){var x=this,w=B.bA(x.a),v=x.b
v=v==null?null:B.bA(v)
return B.N(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bT(w,", ")+")"}}
var z=a.updateTypes([])
A.b6a.prototype={
$1(d){return d<=this.a},
$S:794}
A.b5D.prototype={
$1(d){var x=this,w=B.T(A.bln(x.a,x.b,d),A.bln(x.c,x.d,d),x.e)
w.toString
return w},
$S:795}
A.ayo.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:94};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.B,[A.aSy,A.aw0])
x(B.cc,[A.b6a,A.b5D,A.ayo])
w(A.kk,A.aw0)})()
var y={h:B.F("n<f>"),b:B.F("H")}};
(a=>{a["yJq+FA9DdCUkb1tVSJfdLNCrfuo="]=a.current})($__dart_deferred_initializers__);