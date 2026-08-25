((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
blT(d,e,f){var x,w,v,u,t
if(f<=C.b.gV(e))return C.b.gV(d)
if(f>=C.b.gad(e))return C.b.gad(d)
x=C.b.a9S(e,new A.b6v(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.T(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bDD(d,e,f,g,h){var x,w,v=D.a7q(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=B.a_(v,v.$ti.c)
x.$flags=1
w=x
x=B.a2(w).i("a5<1,K>")
x=B.a_(new B.a5(w,new A.b5Y(d,e,f,g,h),x),x.i("ad.E"))
x.$flags=1
return new A.aSR(x,w)},
bgQ(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.bl(f)
if(e==null)return d.bl(1-f)
x=A.bDD(d.a,d.N9(),e.a,e.N9(),f)
w=B.vH(d.d,e.d,f)
w.toString
v=B.vH(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.jA(w,v,t,x.a,x.b,u)},
aSR:function aSR(d,e){this.a=d
this.b=e},
b6v:function b6v(d){this.a=d},
b5Y:function b5Y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aws:function aws(){},
jA:function jA(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
ayR:function ayR(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
D=c[65]
A=a.updateHolder(c[57],A)
A.aSR.prototype={}
A.aws.prototype={
N9(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.ba3(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.jA.prototype={
QL(d,e){var x=this,w=x.d.ab(e).acF(d),v=x.e.ab(e).acF(d),u=x.N9()
return B.awt(w,v,x.a,u,x.f,null)},
aHG(d){return this.QL(d,null)},
bl(d){var x=this,w=x.a,v=B.a2(w).i("a5<1,K>")
w=B.a_(new B.a5(w,new A.ayR(d),v),v.i("ad.E"))
return new A.jA(x.d,x.e,x.f,w,x.b,x.c)},
a8m(d){var x=this
return new A.jA(x.d,x.e,x.f,B.c4(x.a.length,d,!1,y.o),x.b,x.c)},
dT(d,e){var x=A.bgQ(d,this,e)
return x},
dU(d,e){var x=A.bgQ(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Q(e)!==B.l(x))return!1
return e instanceof A.jA&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.d5(e.a,x.a)&&B.d5(e.b,x.b)},
gn(d){var x=this,w=B.bD(x.a),v=x.b
v=v==null?null:B.bD(v)
return B.N(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.b(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.i(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.i(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bL(w,", ")+")"}}
var z=a.updateTypes([])
A.b6v.prototype={
$1(d){return d<=this.a},
$S:803}
A.b5Y.prototype={
$1(d){var x=this,w=B.T(A.blT(x.a,x.b,d),A.blT(x.c,x.d,d),x.e)
w.toString
return w},
$S:804}
A.ayR.prototype={
$1(d){var x=B.T(null,d,this.a)
x.toString
return x},
$S:89};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.A,[A.aSR,A.aws])
x(B.cf,[A.b6v,A.b5Y,A.ayR])
w(A.jA,A.aws)})()
var y={o:B.F("K"),h:B.F("n<f>"),b:B.F("D")}};
(a=>{a["NyLxVbXRHPwVz0RSoPByfgCjFTQ="]=a.current})($__dart_deferred_initializers__);