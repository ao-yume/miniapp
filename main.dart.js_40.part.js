((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
biq(d,e,f){var x,w,v,u,t
if(f<=C.b.ga8(e))return C.b.ga8(d)
if(f>=C.b.gag(e))return C.b.gag(d)
x=C.b.a8e(e,new A.b3G(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bzJ(d,e,f,g,h){var x,w,v=D.a67(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=B.a_(v,v.$ti.c)
x.$flags=1
w=x
x=B.a1(w).i("a5<1,I>")
x=B.a_(new B.a5(w,new A.b37(d,e,f,g,h),x),x.i("af.E"))
x.$flags=1
return new A.aQF(x,w)},
bdx(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bl(f)
if(e==null)return d.bl(1-f)
x=A.bzJ(d.a,d.Mk(),e.a,e.Mk(),f)
w=B.vm(d.d,e.d,f)
w.toString
v=B.vm(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.kc(w,v,t,x.a,x.b,u)},
aQF:function aQF(d,e){this.a=d
this.b=e},
b3G:function b3G(d){this.a=d},
b37:function b37(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
auu:function auu(){},
kc:function kc(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
awP:function awP(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[64]
A=a.updateHolder(c[56],A)
A.aQF.prototype={}
A.auu.prototype={
Mk(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.b7h(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.kc.prototype={
PB(d,e){var x=this,w=x.d.ac(e).aba(d),v=x.e.ac(e).aba(d),u=x.Mk()
return B.auv(w,v,x.a,u,x.f,null)},
aEW(d){return this.PB(d,null)},
bl(d){var x=this,w=x.a,v=B.a1(w).i("a5<1,I>")
w=B.a_(new B.a5(w,new A.awP(d),v),v.i("af.E"))
return new A.kc(x.d,x.e,x.f,w,x.b,null)},
dX(d,e){var x=A.bdx(d,this,e)
return x},
dY(d,e){var x=A.bdx(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.l(x))return!1
return e instanceof A.kc&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.db(e.a,x.a)&&B.db(e.b,x.b)},
gn(d){var x=this,w=B.bM(x.a),v=x.b
v=v==null?null:B.bM(v)
return B.P(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bY(w,", ")+")"}}
var z=a.updateTypes([])
A.b3G.prototype={
$1(d){return d<=this.a},
$S:788}
A.b37.prototype={
$1(d){var x=this,w=B.T(A.biq(x.a,x.b,d),A.biq(x.c,x.d,d),x.e)
w.toString
return w},
$S:789}
A.awP.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:88};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.B,[A.aQF,A.auu])
x(B.c8,[A.b3G,A.b37,A.awP])
w(A.kc,A.auu)})()
var y={h:B.E("n<f>"),b:B.E("G")}};
(a=>{a["ZIUJYFGHQTWuHFYX7BSifIUSLPo="]=a.current})($__dart_deferred_initializers__);