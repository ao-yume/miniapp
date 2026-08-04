((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bir(d,e,f){var x,w,v,u,t
if(f<=C.b.ga8(e))return C.b.ga8(d)
if(f>=C.b.gag(e))return C.b.gag(d)
x=C.b.a8a(e,new A.b3J(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bzL(d,e,f,g,h){var x,w,v=D.a68(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=B.a_(v,v.$ti.c)
x.$flags=1
w=x
x=B.a1(w).i("a4<1,I>")
x=B.a_(new B.a4(w,new A.b3a(d,e,f,g,h),x),x.i("af.E"))
x.$flags=1
return new A.aQH(x,w)},
bdy(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bl(f)
if(e==null)return d.bl(1-f)
x=A.bzL(d.a,d.Mg(),e.a,e.Mg(),f)
w=B.vj(d.d,e.d,f)
w.toString
v=B.vj(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.kc(w,v,t,x.a,x.b,u)},
aQH:function aQH(d,e){this.a=d
this.b=e},
b3J:function b3J(d){this.a=d},
b3a:function b3a(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
auv:function auv(){},
kc:function kc(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
awQ:function awQ(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[64]
A=a.updateHolder(c[56],A)
A.aQH.prototype={}
A.auv.prototype={
Mg(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b7k(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.kc.prototype={
Px(d,e){var x=this,w=x.d.ac(e).ab6(d),v=x.e.ac(e).ab6(d),u=x.Mg()
return B.auw(w,v,x.a,u,x.f,null)},
aER(d){return this.Px(d,null)},
bl(d){var x=this,w=x.a,v=B.a1(w).i("a4<1,I>")
w=B.a_(new B.a4(w,new A.awQ(d),v),v.i("af.E"))
return new A.kc(x.d,x.e,x.f,w,x.b,null)},
dX(d,e){var x=A.bdy(d,this,e)
return x},
dY(d,e){var x=A.bdy(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.l(x))return!1
return e instanceof A.kc&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.dc(e.a,x.a)&&B.dc(e.b,x.b)},
gn(d){var x=this,w=B.bM(x.a),v=x.b
v=v==null?null:B.bM(v)
return B.P(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bY(w,", ")+")"}}
var z=a.updateTypes([])
A.b3J.prototype={
$1(d){return d<=this.a},
$S:787}
A.b3a.prototype={
$1(d){var x=this,w=B.T(A.bir(x.a,x.b,d),A.bir(x.c,x.d,d),x.e)
w.toString
return w},
$S:788}
A.awQ.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:101};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.B,[A.aQH,A.auv])
x(B.c8,[A.b3J,A.b3a,A.awQ])
w(A.kc,A.auv)})()
var y={h:B.E("n<f>"),b:B.E("G")}};
(a=>{a["VOSCom+g3PNgdyerLQ09/JuCk+Q="]=a.current})($__dart_deferred_initializers__);