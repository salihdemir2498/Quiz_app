function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni=soruMetni;
    this.dogruCevap=dogruCevap;
    this.cevapSecenekleri=cevapSecenekleri;
}

Soru.prototype.cevabiKontrolEt=function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"Npm",d:"Nuget"},"c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?",{a:"css",b:"html",c:"javascript",d:"sql"},"d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?",{a:"Node.js",b:"Typescript",c:"Angular",d:"React"},"a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?",{a:"React",b:"Angular",c:"Vuejs",d:"Asp.net"},"d")
]