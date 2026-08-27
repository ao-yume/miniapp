((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bmp(d,e,f){var x,w,v,u,t
if(f<=C.b.gV(e))return C.b.gV(d)
if(f>=C.b.gad(e))return C.b.gad(d)
x=C.b.a9Y(e,new A.b7_(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bE8(d,e,f,g,h){var x,w,v=D.a7t(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=B.Z(v,v.$ti.c)
x.$flags=1
w=x
x=B.a1(w).i("a4<1,K>")
x=B.Z(new B.a4(w,new A.b6s(d,e,f,g,h),x),x.i("ab.E"))
x.$flags=1
return new A.aT8(x,w)},
bhl(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bl(f)
if(e==null)return d.bl(1-f)
x=A.bE8(d.a,d.Nb(),e.a,e.Nb(),f)
w=B.vJ(d.d,e.d,f)
w.toString
v=B.vJ(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.iW(w,v,t,x.a,x.b,u)},
aT8:function aT8(d,e){this.a=d
this.b=e},
b7_:function b7_(d){this.a=d},
b6s:function b6s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
awD:function awD(){},
iW:function iW(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
az1:function az1(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[65]
A=a.updateHolder(c[57],A)
A.aT8.prototype={}
A.awD.prototype={
Nb(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.baz(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.iW.prototype={
QO(d,e){var x=this,w=x.d.ab(e).acN(d),v=x.e.ab(e).acN(d),u=x.Nb()
return B.awE(w,v,x.a,u,x.f,null)},
aI2(d){return this.QO(d,null)},
bl(d){var x=this,w=x.a,v=B.a1(w).i("a4<1,K>")
w=B.Z(new B.a4(w,new A.az1(d),v),v.i("ab.E"))
return new A.iW(x.d,x.e,x.f,w,x.b,x.c)},
a8s(d){var x=this
return new A.iW(x.d,x.e,x.f,B.c4(x.a.length,d,!1,y.o),x.b,x.c)},
dU(d,e){var x=A.bhl(d,this,e)
return x},
dV(d,e){var x=A.bhl(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.l(x))return!1
return e instanceof A.iW&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.d5(e.a,x.a)&&B.d5(e.b,x.b)},
gn(d){var x=this,w=B.bD(x.a),v=x.b
v=v==null?null:B.bD(v)
return B.N(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bL(w,", ")+")"}}
var z=a.updateTypes([])
A.b7_.prototype={
$1(d){return d<=this.a},
$S:808}
A.b6s.prototype={
$1(d){var x=this,w=B.T(A.bmp(x.a,x.b,d),A.bmp(x.c,x.d,d),x.e)
w.toString
return w},
$S:809}
A.az1.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:83};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.B,[A.aT8,A.awD])
x(B.cf,[A.b7_,A.b6s,A.az1])
w(A.iW,A.awD)})()
var y={o:B.G("K"),h:B.G("n<f>"),b:B.G("D")}};
(a=>{a["d+dnlqmT+lS7MGYNyXFKwyuqH5g="]=a.current})($__dart_deferred_initializers__);