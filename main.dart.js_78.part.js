((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={qM:function qM(d,e){this.a=d
this.b=e},
b35(d,e,f,g,h,i){return new A.ET(d,i,f,h,e,C.al,g,null,null)},
uW:function uW(d,e){this.a=d
this.b=e},
rb:function rb(d,e){this.a=d
this.b=e},
wm:function wm(d,e){this.a=d
this.b=e},
ET:function ET(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.c=i
_.d=j
_.e=k
_.a=l},
a8B:function a8B(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.e5$=d
_.bB$=e
_.c=_.a=null},
aMu:function aMu(){},
aMv:function aMv(){},
aMw:function aMw(){},
aMx:function aMx(){},
aMy:function aMy(){},
aMz:function aMz(){},
aMA:function aMA(){},
aMB:function aMB(){},
bbx(){var x=new Float64Array(4)
x[3]=1
return new A.pH(x)},
pH:function pH(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[17],A)
A.qM.prototype={
fk(d){return B.uJ(this.a,this.b,d)}}
A.uW.prototype={
fk(d){var x=B.jT(this.a,this.b,d)
x.toString
return x}}
A.rb.prototype={
fk(d){var x=B.dw(this.a,this.b,d)
x.toString
return x}}
A.wm.prototype={
fk(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.hp(new Float64Array(3)),a3=new B.hp(new Float64Array(3)),a4=A.bbx(),a5=A.bbx(),a6=new B.hp(new Float64Array(3)),a7=new B.hp(new Float64Array(3))
this.a.a56(a2,a4,a6)
this.b.a56(a3,a5,a7)
x=1-a8
w=a2.ni(x).a3(0,a3.ni(a8))
v=a4.ni(x).a3(0,a5.ni(a8))
u=new Float64Array(4)
t=new A.pH(u)
t.cJ(v)
t.AB()
s=a6.ni(x).a3(0,a7.ni(a8))
x=new Float64Array(16)
v=new B.bi(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
x=s.a
v.ko(x[0],x[1],x[2],1)
return v}}
A.ET.prototype={
a7(){return new A.a8B(null,null)}}
A.a8B.prototype={
oa(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.b
v.CW=x.a(d.$3(t,u,new A.aMu()))
t=y.f
v.cx=t.a(d.$3(v.cx,v.a.x,new A.aMv()))
w=y.d
v.cy=w.a(d.$3(v.cy,v.a.y,new A.aMw()))
v.db=w.a(d.$3(v.db,v.a.z,new A.aMx()))
v.dx=y.e.a(d.$3(v.dx,v.a.Q,new A.aMy()))
w=v.dy
v.a.toString
v.dy=t.a(d.$3(w,u,new A.aMz()))
w=v.fr
v.a.toString
v.fr=y.w.a(d.$3(w,u,new A.aMA()))
w=v.fx
v.a.toString
v.fx=x.a(d.$3(w,u,new A.aMB()))},
G(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfq(),n=q.CW
n=n==null?p:n.aj(o.gp())
x=q.cx
x=x==null?p:x.aj(o.gp())
w=q.cy
w=w==null?p:w.aj(o.gp())
v=q.db
v=v==null?p:v.aj(o.gp())
u=q.dx
u=u==null?p:u.aj(o.gp())
t=q.dy
t=t==null?p:t.aj(o.gp())
s=q.fr
s=s==null?p:s.aj(o.gp())
r=q.fx
r=r==null?p:r.aj(o.gp())
return B.bw(n,q.a.r,C.p,p,u,w,v,p,t,x,s,r,p)}}
A.pH.prototype={
cJ(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.ak(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
aci(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.ak(r)
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t.$flags&2&&B.ak(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
AB(){var x,w,v,u=Math.sqrt(this.gAk())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.ak(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
gAk(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gJ(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
ni(d){var x=new Float64Array(4),w=new A.pH(x)
w.cJ(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
ad(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaNX(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
h=C.d.ad(g,a4)
x=C.d.ad(d,a1)
w=C.d.ad(e,a2)
v=C.d.ad(f,a3)
u=C.d.ad(g,a3)
t=C.d.ad(e,a1)
s=C.d.ad(f,a4)
r=C.d.ad(d,a2)
q=C.d.ad(g,a2)
p=C.d.ad(f,a1)
o=C.d.ad(d,a3)
n=C.d.ad(e,a4)
m=C.d.ad(g,a1)
l=C.d.ad(d,a4)
k=C.d.ad(e,a3)
j=C.d.ad(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.pH(i)},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.pH){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gn(d){return B.bE(this.a)},
a3(d,e){var x,w=new Float64Array(4),v=new A.pH(w)
v.cJ(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a9(d,e){var x,w=new Float64Array(4),v=new A.pH(w)
v.cJ(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
l(d,e,f){var x=this.a
x.$flags&2&&B.ak(x)
x[e]=f},
j(d){var x=this.a
return B.i(x[0])+", "+B.i(x[1])+", "+B.i(x[2])+" @ "+B.i(x[3])}}
var z=a.updateTypes(["qM(@)","rb(@)","uW(@)","wm(@)"])
A.aMu.prototype={
$1(d){return new A.qM(y.k.a(d),null)},
$S:z+0}
A.aMv.prototype={
$1(d){return new A.rb(y.m.a(d),null)},
$S:z+1}
A.aMw.prototype={
$1(d){return new B.oK(y.r.a(d),null)},
$S:235}
A.aMx.prototype={
$1(d){return new B.oK(y.r.a(d),null)},
$S:235}
A.aMy.prototype={
$1(d){return new A.uW(y.a.a(d),null)},
$S:z+2}
A.aMz.prototype={
$1(d){return new A.rb(y.m.a(d),null)},
$S:z+1}
A.aMA.prototype={
$1(d){return new A.wm(y.E.a(d),null)},
$S:z+3}
A.aMB.prototype={
$1(d){return new A.qM(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.aw,[A.qM,A.uW,A.rb,A.wm])
w(A.ET,B.rn)
w(A.a8B,B.qN)
x(B.cp,[A.aMu,A.aMv,A.aMw,A.aMx,A.aMy,A.aMz,A.aMA,A.aMB])
w(A.pH,B.C)})()
B.cf(b.typeUniverse,JSON.parse('{"qM":{"aw":["iu?"],"aA":["iu?"],"aw.T":"iu?","aA.T":"iu?"},"uW":{"aw":["ai"],"aA":["ai"],"aw.T":"ai","aA.T":"ai"},"rb":{"aw":["d5"],"aA":["d5"],"aw.T":"d5","aA.T":"d5"},"wm":{"aw":["bi"],"aA":["bi"],"aw.T":"bi","aA.T":"bi"},"ET":{"S":[],"c":[]},"a8B":{"V":["ET"]}}'))
var y=(function rtii(){var x=B.O
return{k:x("iu"),a:x("ai"),r:x("iB"),m:x("d5"),E:x("bi"),b:x("qM?"),e:x("uW?"),d:x("oK?"),f:x("rb?"),w:x("wm?")}})()};
(a=>{a["r5VEjxGUb6r+5REz7MbcM2f69e8="]=a.current})($__dart_deferred_initializers__);