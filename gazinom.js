function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

/*sliderlar*/
waitForElm('.home-top-games').then((elm) => {
    const newHTMLContent = `
    
    
    <div class="home-top-casino" id="external-12aa">
    <div class="top-section banner">
        <div class="row-title">Özel ve Öne Çıkanlar</div>
        <div class="slide-bars">
            <div class="slide-arrow-box left">
              <i class="sb-icon sb-arrow-right rotate"></i>
            </div>
            <div class="slide-arrow-box right">
              <i class="sb-icon sb-arrow-right"></i>
            </div>
          </div>
    </div>


    <div class="home-top-casino-items">
        <div class="slider-container">
            <div class="container">
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                   
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                   
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div><div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                   
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
            </div>
            </div>
    </div>

    <style>


        #external-12aa >div> .slider-container {
            width: 100%;
            height: 15vh;
            overflow: hidden;
          }
          
          #external-12aa > div>.slider-container .container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column wrap;
          }
          
          #external-12aa >div .container .container-box {
            width: 15%;
            height: 100%;
            margin-right: 2%;
            background: rgb(52, 152, 219);
            color: rgb(41, 128, 185);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius:10px;
          }


    </style>


    
</div>


<div class="home-top-casino" id="external-11aa">
    <div class="top-section banner">
        <div class="row-title">Özel ve Öne Çıkanlar</div>
        <div class="slide-bars">
            <div class="slide-arrow-box left">
              <i class="sb-icon sb-arrow-right rotate"></i>
            </div>
            <div class="slide-arrow-box right">
              <i class="sb-icon sb-arrow-right"></i>
            </div>
          </div>
    </div>


    <div class="home-top-casino-items">
        <div class="slider-container">
            <div class="container">
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                   
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
            </div>
            </div>
    </div>

    <style>


        #external-11aa >div> .slider-container {
            width: 100%;
            height: 15vh;
            overflow: hidden;
          }
          
          #external-11aa > div>.slider-container .container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column wrap;
          }
          
          #external-11aa >div .container .container-box {
            width: 32%;
            height: 100%;
            margin-right: 2%;
            background: rgb(52, 152, 219);
            color: rgb(41, 128, 185);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius:10px;
          }


    </style>


    
</div>


`



const anchorElement = document.querySelector(".home-top-games")
const homepage = document.querySelector(".home-page-body")
const newElement = document.createElement("div");
newElement.innerHTML = newHTMLContent;
newElement.classList.add('x');
homepage.insertBefore(newElement,anchorElement);


/*slider özel öne çıkanlar*/
const container = document.querySelector('#external-11aa>div.home-top-casino-items>div>div');
const next = document.querySelector('#external-11aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.right');
const prev = document.querySelector('#external-11aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.left');
const size = (container.clientWidth);
let counter = 0;

function nextElement() {
  if (counter < 1) {
    container.style.transition = '.5s ease-in-out';
    counter++;
    container.style.transform = 'translateX('+ (-size  * counter- size*0.02) +'px)';
  }
	
}

function prevElement() {
  if (counter > 0 ) {
    container.style.transition = '.5s ease-in-out';
    counter--;
    container.style.transform = 'translateX('+ (-size  * counter ) +'px)';
  }
}

next.addEventListener('click', nextElement, false);
prev.addEventListener('click', prevElement, false);

/*slider özel 12aa*/
const container2 = document.querySelector('#external-12aa>div.home-top-casino-items>div>div');
const next2 = document.querySelector('#external-12aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.right');
const prev2 = document.querySelector('#external-12aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.left');
const size2 = (container2.clientWidth);
let counter2 = 0;

function nextElement2() {
  if (counter2 < 2) {
    container2.style.transition = '.5s ease-in-out';
    counter2++;
    if (counter==1) {
        container2.style.transform = 'translateX('+ (-size2  * counter2 + size2*0.02) +'px)';
    }else{
    container2.style.transform = 'translateX('+ (-size2  * counter2 + size2*0.02) +'px)';
    }
  }
	
}

function prevElement2() {
  if (counter2 > 0 ) {
    container2.style.transition = '.5s ease-in-out';
    counter2--;
    container2.style.transform = 'translateX('+ (-size2  * counter2) +'px)';
  }
}

next2.addEventListener('click', nextElement2, false);
prev2.addEventListener('click', prevElement2, false);






console.log("gazinom.js")
});


/*see all buttons*/
waitForElm('main.sb').then((elm)=>{

    var newHTMLContent = `<div class="footer-13aa">
    <div class="bottom-info-section">
        <img width="260px" height="31px" class="center mbxs mtm" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/svgviewer-png-output%20%282%29.png" alt="çevrimiçi kumarhane">
    
    <h1 class="h1 center">İspanya'nın İlk Yasal Çevrimiçi Kumarhanesi</h1> 
    <p class="text">
        İspanya'nın ilk <strong>çevrimiçi kumarhanesine</strong> hoş geldiniz; tamamen güvenilir ve sorumlu bir çevrimiçi kumarhane olarak, oyun kataloğumuzun tamamı DGOJ (Oyun Düzenleme Genel Müdürlüğü) tarafından onaylanmıştır.
    </p>
    
    <p class="text">
        Biz, İspanya'da faaliyet izni alan ilk <strong><a href="#" class="link--pink">çevrimiçi kumarhane</a></strong> olarak, müşterilerimize yasal, güvenli ve güvenilir bir şekilde eksiksiz bir çevrimiçi kumarhane deneyimi sunuyoruz.
    </p>
            
    <h2 class="h2">
        İspanya'daki Çevrimiçi Kumarhane Oyunlarımız
    </h2>
                
    <p class="text">
        En iyi <strong>çevrimiçi kumarhane oyunları</strong> mı? <strong>Gran Madrid | Çevrimiçi Kumarhane</strong>'de! 2011'den beri kumarhanemizde maksimum güvenlikle oynayabilir ve eğlenebilirsiniz; üstelik sektörün en geniş oyun yelpazesine sahibiz. <strong>Canlı çevrimiçi kumarhanemizde</strong> <strong>blackjack</strong>, geniş bir <strong>slot</strong> yelpazesi ve <strong>canlı rulet</strong> oyunları öne çıkıyor.
    </p>
    
    <h2 class="h2">
        En Fazla Deneyime Sahip Çevrimiçi Kumarhane
    </h2>
    
    <p class="text">
        Oyun sektöründe deneyimden bahsediyorsak, <strong>Gran Madrid | Çevrimiçi Kumarhane</strong>'den bahsediyoruz demektir. 40 yılı aşkın süredir <strong>fiziksel oyun</strong> alanında hizmet veriyoruz ve 1981'de <strong>Gran Madrid | Torrelodones Kumarhanesi</strong>'ni açarak İspanya'da öncü olduk. Biriktirdiğimiz tüm deneyimle, 2013'te İspanya'nın başkenti Madrid'in tam merkezinde <strong>Gran Madrid | Colón Kumarhanesi</strong>'ni açtık. Madrid'deki <strong>çevrimiçi kumarhanenizde</strong> eşsiz ve güvenli bir deneyim yaşayın, geniş deneyimimizden faydalanın.
    </p>
    
    <h2 class="h2">
        3.000'den Fazla <a href="https://www.casinogranmadridonline.es/slots" class="link--pink">Slot</a> ile Çevrimiçi Kumarhaneniz
    </h2>
    
    <p class="text mb0">
        <strong>Klasik çevrimiçi kumarhane oyunlarını</strong> mı tercih ediyorsunuz, yoksa <strong>yenilikçi slotlarla</strong> deneyim yaşamak mı istiyorsunuz? <strong>Gran Madrid | Çevrimiçi Kumarhane</strong>'de 3.000'den fazla slot arasından seçim yapmakta zorlanacaksınız. NetEnt, Playtech ve NoLimit City gibi büyük sağlayıcılar, çevrimiçi slot makinelerimizin arkasındaki isimlerden sadece birkaçı. Unutmayın! Kayıtlı olduğunuz sürece <a href="https://www.casinogranmadridonline.es/slots/gratis" class="link--pink">2025'in ücretsiz slot makinelerine</a> "demo" sürümlerimizle oynayabilirsiniz.
    </p>
    
    <div class="cards">
        <img class="card-home" loading="lazy" width="396" height="150" alt="Kumarhane" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/card-1.webp">
        <img class="card-home" loading="lazy" width="396" height="150" alt="Çevrimiçi kumarhane" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/card-2-3000.webp">
        <img class="card-home" loading="lazy" width="396" height="150" alt="En iyi kumarhane" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/card-3.webp">
        <img class="card-home" loading="lazy" width="396" height="150" alt="Kumarhane oyna" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/card-4.webp">
    </div>
    
    <h2 class="h2">
        En Çok Aranan Slotlar ve Jackpotlar
    </h2>
    
    <p class="text">
        Slotlarda en son yenilikleri mi arıyorsunuz? <strong>Yasal çevrimiçi kumarhanemizde</strong> bulabilirsiniz! <a class="link--pink" href="https://www.casinogranmadridonline.es/slots/egipto"><strong>Mısır temalı slotlar</strong></a>, Roma, Yunanistan ya da Kaliforniya sokakları gibi birçok temayı sizin için sunuyoruz; üstelik efsanevi <strong>bar slot makinelerini</strong> de unutmadık. <strong><a href="https://www.casinogranmadridonline.es/slots/gates-of-olympus" class="link--pink">Gates of Olympus</a></strong> serisinin keyfini çıkarın ya da <strong><a href="https://www.casinogranmadridonline.es/slots/wanted-dead-or-a-wild" class="link--pink">Wanted Dead or a Wild</a></strong> ve <strong><a href="https://www.casinogranmadridonline.es/slots/wolf-gold" class="link--pink">Wolf Gold</a></strong> gibi slotlarla eğlenin. Farklı ödeme çizgileri ve çok sayıda makaralı slotlar Gran Madrid | Çevrimiçi Kumarhane'de sizi bekliyor. <strong><a href="https://www.casinogranmadridonline.es/slots/minadeoro" class="link--pink">Altın Madeni</a></strong>'nde altını arayın, <strong><a href="https://www.casinogranmadridonline.es/slots/bigger-bass-bonanza" class="link--pink">Bonanza</a></strong> ile vahşi batıya yolculuk yapın ya da <strong><a href="https://www.casinogranmadridonline.es/slots/folsom-prison" class="link--pink">Folsom Prison</a></strong> slotunun makaralarını çevirin.
    </p>
    
    <p class="text">
        Üstelik bu slotların birçoğu büyük bir <strong>jackpot</strong> sunuyor; jackpotlar yüksek olduğunda küçük bir bahisle büyük kazanç elde etme şansınız var.
    </p>
    
    <h2 class="h2"> 
        Canlı Rulet Çevrimiçi Kumarhanesi
    </h2>
    
    <p class="text">
        Çevrimiçi kumarhanenin klasik oyunlarından biri <strong>rulettir</strong> ve bizde <strong><a href="https://www.casinogranmadridonline.es/ruleta/americana" class="link--pink">Amerikan</a></strong>, <strong><a href="https://www.casinogranmadridonline.es/ruleta/europea" class="link--pink">Avrupa</a></strong> ve <strong><a href="https://www.casinogranmadridonline.es/ruleta/en-vivo/francesa-evolution-gaming" class="link--pink">Fransız</a></strong> ruletleri mevcut. Yetmedi mi? Size şunu söyleyelim: <strong>Canlı çevrimiçi kumarhanemizde</strong> gerçek krupiyelerle haftanın 7 günü, günün 24 saati çalışan birkaç <strong>canlı rulet</strong> masamız var.
    </p>
    
    <h2 class="h2"> 
        <strong>Video Bingo mu, Video Poker mi?</strong> İspanya'nın En İyi Çevrimiçi Kumarhanesinde.
    </h2>
    
    <p class="text">
        <strong><a href="https://www.casinogranmadridonline.es/bingo" class="link--pink">Çevrimiçi bingo</a></strong> oynamak için yeni deneyimler mi arıyorsunuz? Tek bir tıkla eğlenceye başlayabilirsiniz; üstelik <strong>geleneksel bingodan farklı olarak</strong>, video bingoda kazancınız diğer kullanıcılardan bağımsız olarak bahsinize bağlıdır.
    </p>
    
    <p class="text">
        Poker oynamayı seviyorsanız, video poker makinelerimizle taktiklerinizi ve stratejilerinizi geliştirebilirsiniz. <strong><a href="https://www.casinogranmadridonline.es/video-poker/jacks-or-better" class="link--pink">Jacks or Better</a></strong>, <strong><a href="https://www.casinogranmadridonline.es/video-poker/aces-and-faces" class="link--pink">Aces & Faces</a></strong>, <strong><a href="https://www.casinogranmadridonline.es/video-poker/deuces-wild" class="link--pink">Deuces Wild</a></strong> ve daha birçok seçenek sizi bekliyor.
    </p>
    
    <h2 class="h2">
        <a href="https://www.casinogranmadridonline.es/apuestas-deportivas" class="link--pink">Çevrimiçi Spor Bahisleri</a>
    </h2>
    <p class="text">
        İspanya'daki en iyi <strong>çevrimiçi kumarhane</strong> olmanın yanı sıra, aynı zamanda favori <strong>çevrimiçi bahis eviniz</strong> de biziz. Gran Madrid | Çevrimiçi Kumarhane'deki <strong>yeni istatistiksel bahis pazarlarının</strong> keyfini çıkarın; burada oyuncuların şut sayısına, pas sayısına ve daha fazlasına bahis yapabilirsiniz. Ayrıca tekliflerimize <strong>eSpor bahislerini</strong> de ekledik; LoL veya Dota 2 gibi en iyi ligleri ve daha fazlasını bulabilirsiniz.
    </p>
    
    <p class="text">
        Ve dahası var! <strong>Bahis oluştur</strong> özelliği ile aynı etkinlikte farklı pazarları birleştirebilir, ayrıca <strong>cashout</strong> ile bahsinizin bir kısmını kapatabilirsiniz. Futbol, basketbol, bisiklet ve daha birçok spor dalı burada, <strong>çevrimiçi kumarhanenizde</strong>.
    </p>
    
    <h2 class="h2">
        Çevrimiçi Kumarhanemizi Ücretsiz Deneyin 
    </h2>
    <p class="text">
        3.000'den fazla slotumuzun ‘demo’ sürümünü tanıyın. Favori <strong>slotlarınızın</strong> kurallarını öğrenebilir ve sadece ‘deneyin’ butonuna basarak <strong>ücretsiz oynayabilirsiniz</strong>. Ancak önce platformumuzda kayıt olmanız gerektiğini unutmayın.
    </p>
    
    <h2 class="h2">
        Gran Madrid | Çevrimiçi Kumarhane'deki Yenilikler
    </h2>
    
    <p class="text">
        Her hafta slotlarda en iyi yenilikleri sunuyorsak, bu hafta da farklı değil. Gran Madrid | Çevrimiçi Kumarhane'de sizin için 30’dan fazla farklı stüdyo var: <a href="https://www.casinogranmadridonline.es/slots/push-gaming" class="link--pink">Push Gaming</a>, <a href="https://www.casinogranmadridonline.es/slots/hacksaw" class="link--pink">Hacksaw</a>, <a href="https://www.casinogranmadridonline.es/slots/nolimit" class="link--pink">NoLimit City</a>, <a href="https://www.casinogranmadridonline.es/slots/pragmatic" class="link--pink">Pragmatic Play</a> ve daha pek çok stüdyo.
    </p>
    <p class="text">
        Daha fazla düşünmeyin, slot kataloğumuza girin ve en sevdiğinizi seçin; ancak hepsinin çok eğlenceli olduğunu baştan söyleyelim, seçim yapmak kolay olmayacak. <strong>Cloud Princess</strong>, <strong><a href="https://www.casinogranmadridonline.es/slots/le-pharaoh" class="link--pink">Le Pharaoh</a></strong> ve <strong><a href="https://www.casinogranmadridonline.es/slots/razor-shark" class="link--pink">Razor Shark</a></strong> oyunlarını oynayın. Bu mücevherleri kaçırmak ister misiniz?
    </p>
    
    <h2 class="h2">
        Neden Gran Madrid | Çevrimiçi Kumarhane'de Oynamalısınız?
    </h2>
    
    <p class="text">
        Size tek kelimeyle özetleyelim: Deneyim! İspanya’daki en deneyimli <strong>yasal çevrimiçi kumarhane</strong> olmanın yanı sıra, tamamen kişiselleştirilmiş bir hizmet sunuyoruz.
    </p>
     
    <p class="text">
        <strong>Gran Madrid | Çevrimiçi Kumarhane</strong>'de tüm favori kumarhane oyunlarınızı nerede olursanız olun oynayabilirsiniz. Mobil cihazınızdan veya bilgisayarınızdan web sitemiz, en iyi kalite ve hızda oyun oynama fırsatı sunar.
    </p>
    
    <h2 class="h2">
        Gran Madrid: Güvenli Çevrimiçi Kumarhaneniz
    </h2>
    
    <p class="text">
        <strong>Gran Madrid | Çevrimiçi Kumarhane</strong>'de tamamen güvenli bir deneyim yaşayın. Platformumuza kaydolurken hiçbir endişeniz olmasın. Verilerinizin gizliliği ve mahremiyeti bizim önceliğimizdir ve yalnızca kayıt sırasında kimlik numaranız gibi gerekli bilgileri isteyeceğiz.
    </p>
     
    <p class="text">
        Ayrıca, <strong>sorumlu ve güvenli oyun</strong> anlayışına bağlı bir çevrimiçi kumarhane olmaktan gurur duyuyoruz. Bizimle oyun oturumunuzu yapılandırabilir, limitler belirleyebilir ve ihtiyacınız olduğunda mola verebilirsiniz.
    </p>
    
    <h2 class="h2">
        Kumarhanemizin Ödeme Yöntemleri Nelerdir?
    </h2>
    
    <p class="text">
        Gran Madrid | Çevrimiçi Kumarhane, avantajlarımızdan <strong>hızlı ve kolay bir şekilde</strong> yararlanmanız için çok çeşitli ödeme yöntemleri sunar. Paypal, Skrill, Bizum, banka havalesi, kredi veya banka kartı gibi seçenekleriniz var; hatta fiziksel kumarhanelerimize yakınsanız ödüllerinizi kasadan çekebilirsiniz.
    </p>
    
    <h2 class="h2">
        Çevrimiçi Kumarhane Oynamayla İlgili Sık Sorulan Sorular
    </h2>
    
    <h3 class="h3">
        1. RTP Nedir?
    </h3>
    
    <p class="text">
        RTP (Return to Player), bir slotta uzun vadede oyuncuya geri dönen miktardır ve yüzde olarak ifade edilir. Karmaşık mı geldi? Bir örnekle açıklayalım: 95% RTP’ye sahip bir makinede 100€ oynarsanız, uzun vadede bu slot size her 100€’dan 95€ geri verir. Yani yüksek RTP, uzun vadede daha fazla ödül kazanma şansınız demektir.
    </p>
    
    <h3 class="h3">
        2. En Popüler Şans Oyunları Hangileridir?
    </h3>
    
    <p class="text">
        Gran Madrid | Çevrimiçi Kumarhane'de en popüler kumarhane oyunlarını bulabilirsiniz: <a href="https://www.casinogranmadridonline.es/slots/book-of-ra-deluxe" class="link--pink">Book of Ra</a>, <a href="https://www.casinogranmadridonline.es/slots/gonzos-quest" class="link--pink">Gonzo’s Quest</a>, <a href="https://www.casinogranmadridonline.es/slots/bar" class="link--pink">Bar Slotları</a>, <a href="https://www.casinogranmadridonline.es/slots/starburst" class="link--pink">Starburst</a>, <a href="https://www.casinogranmadridonline.es/slots/fire-blaze-blue-wizard" class="link--pink">Blue Wizard</a>, <a href="https://www.casinogranmadridonline.es/ruleta/en-vivo/mega-fire-blaze" class="link--pink">Mega Fire Blaze Rulet</a>, <a href="https://www.casinogranmadridonline.es/ruleta/en-vivo/quantum" class="link--pink">Quantum Rulet</a>...
    </p>
    
    <h3 class="h3">
        3. İspanya’da Çevrimiçi Kumarhanelerde Oynamak Yasal mı?
    </h3>
    
    <p class="text">
        Elbette! <strong>Gran Madrid | Çevrimiçi Kumarhane</strong>, kullanıcılarımıza yasal, sorumlu ve güvenli bir oyun deneyimi sunan İspanya’nın ilk yasal çevrimiçi kumarhanesidir. Gereklilikleri doğrulayan ve lisansları veren kurum, Oyun Düzenleme Genel Müdürlüğü’dür.
    </p>
    
    <h3 class="h3">
        4. Canlı Oyunlar Nedir?
    </h3>
    
    <p class="text">
        Canlı oyunları tanımak istiyorsanız doğru yerdesiniz; <strong>Gran Madrid | Çevrimiçi Kumarhane</strong>, size <strong><a href="https://www.casinogranmadridonline.es/live-casino" class="link--pink">canlı kumarhane</a></strong> heyecanını yaşatma konusunda uzman. Evinizin konforunda <strong><a href="https://www.casinogranmadridonline.es/ruleta/multiplicadora" class="link--pink">çarpan ruletleri</a></strong> oynayabilirsiniz; öne çıkanlar arasında <a href="https://www.casinogranmadridonline.es/ruleta/en-vivo/quantum" class="link--pink">Quantum</a>, <strong><a href="https://www.casinogranmadridonline.es/ruleta/en-vivo/relampago" class="link--pink">Yıldırım</a></strong> ve <strong><a href="https://www.casinogranmadridonline.es/ruleta/en-vivo/casiopea" class="link--pink">Casiopea</a></strong> yer alıyor.
    </p>
    
    <h3 class="h3">
        5. Neden Çevrimiçi Kumarhanemizi Seçmelisiniz?
    </h3>
    
    <p class="text">
        <strong>Gran Madrid | Çevrimiçi Kumarhane</strong>, oyun kataloğumuzu istediğiniz zaman ve evden çıkmadan oynama imkanı sunar. <strong>Slotlar</strong>, <strong><a href="https://www.casinogranmadridonline.es/juegos-de-casino/blackjack" class="link--pink">blackjack</a></strong> veya canlı ruleti şık kıyafet zorunluluğu olmadan evinizin salonunda, yolculuk sırasında ya da metro beklerken oynayabilirsiniz. Ayrıca her hafta yeni oyunlar ve özel içeriklerle tanışabilirsiniz. Şunu da ekleyelim: <strong><a href="https://www.casinogranmadridonline.es/promociones/codigo-promocional" class="link--pink">Gran Madrid kumarhane promosyon kodu</a></strong> ile kumarhane oyunlarında ve spor bahislerinde bonuslar, en iyi slotlarda ücretsiz dönüşler elde edebilirsiniz. Tüm bunlar ve daha fazlası için sadece kaydolup hesabınızı doğrulamanız yeterli.
    </p>
    </div>
</div>

    `

    const mainelement = document.querySelector("main.sb");
    const newElement = document.createElement("div");
    const anchorElement = document.querySelector(".main-wrapper")

    newElement.innerHTML = newHTMLContent;
    newElement.classList.add('x');
    anchorElement.append(newElement);
    

});


/*video background login
waitForElm('#sb-sign-up-template').then((elm)=>{

    var newHTMLContent = `
    
    <video autoplay muted loop id="myVideo">
    <source src="https://github.com/smhgzi/gazinom/raw/refs/heads/main/video.mp4" type="video/mp4">
    </video>

    <style>
    #myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

    </style>
    
    `

    const topcontainer = document.querySelector('#sb-sign-up-template');
    const newElement = document.createElement("div");
    
    newElement.innerHTML = newHTMLContent;
    newElement.classList.add('xvideo');
    topcontainer.appendChild(newElement);

});*/

