export interface CityNode {
  id: string;
  name: string;
  displayLabel: string;
  isRegion: boolean;
  lat: number;
  lon: number;
  labelDx: number;
  labelDy: number;
  useLeader: boolean;
  steps: number[];
  note: string;
  teachers: Array<{
    name: string;
    detail?: string;
  }>;
}

export interface RouteStep {
  step: number;
  cityId: string;
  label: string;
  isApprox: boolean;
}

export interface StudentCardGroup {
  groupTitle: string;
  students: Array<{
    name: string;
    note?: string;
  }>;
}

export interface PraiseItem {
  name: string;
  qualifier?: string;
  text: string;
}

export interface WorkItem {
  number: number;
  title: string;
  altTitle?: string;
  description?: string;
}

export interface StudyItem {
  author: string;
  title: string;
  meta: string;
}

export const DATA = {
  cover: {
    title: "EBÛ DÂVÛD es-SİCİSTÂNÎ",
    subtitle: "Kütüb-i Sitte'den biri olan es-Sünen'in müellifi, muhaddis",
    fullName: "Ebû Dâvûd Süleyman b. el-Eş'as b. İshâk es-Sicistânî el-Ezdî",
    stats: [
      { value: "202 (817-18)", label: "doğum" },
      { value: "275 (889)", label: "vefat" },
      { value: "4800", label: "500.000 hadis arasından 4800 hadis seçti" },
      { value: "Yaklaşık 300 hoca", label: "(İbn Hacer el-Askalânî'ye göre)" }
    ]
  },

  quickSummary: {
    hint: "Bu bölümde ne var? Önemli hocaları, talebeleri ve eserlerini tek bakışta özetleyen hızlı erişim kartları.",
    cards: [
      {
        id: "ozet-hocalar",
        badge: "Hoca",
        title: "Önemli Hocaları (Hızlı Özet)",
        targetHref: "#bolum-3",
        linkLabel: "Tüm hocalar ve şehir kartları →",
        summaryNote: "İbn Hacer el-Askalânî'ye göre yaklaşık 300 hoca; çoğu Buhârî ve Müslim'in de hocasıdır.",
        items: [
          "Ahmed b. Hanbel",
          "Müslim b. İbrâhîm el-Ezdî",
          "Yahyâ b. Maîn",
          "Ali b. Medînî",
          "İshâk b. Râhûye",
          "Kuteybe b. Saîd"
        ]
      },
      {
        id: "ozet-talebeler",
        badge: "Talebe",
        title: "Önemli Talebeleri (Hızlı Özet)",
        targetHref: "#bolum-4",
        linkLabel: "Tüm talebeler ve Basralı râviler →",
        summaryNote: "Oğlu ve önde gelen muhaddisler ile es-Sünen'i rivayet eden en tanınmış Basralı talebeleri.",
        items: [
          "Abdullah",
          "İbn Ebû Dâvûd",
          "Ebû Îsâ et-Tirmizî",
          "Nesâî",
          "Ebû Bekir el-Hallâl",
          "Muhammed b. Ahmed el-Lü'lüî",
          "Ebû Bekir İbn Dâse"
        ]
      },
      {
        id: "ozet-eserler",
        badge: "Eser",
        title: "Başlıca Eserleri (Hızlı Özet)",
        targetHref: "#bolum-7",
        linkLabel: "Kitaplık ve tüm 19 eser →",
        summaryNote: "Başta es-Sünen olmak üzere hadis, cerh-ta'dîl, fıkıh ve zühd alanındaki temel eserleri.",
        items: [
          "es-Sünen",
          "el-Merâsîl",
          "Mesâilü'l-İmâm Ahmed b. Hanbel",
          "İcâbâtühû alâ suâlâti Ebî Ubeyd Muhammed b. Alî b. Osmân el-Âcurrî",
          "Risâletü Ebî Dâvûd ilâ ehli Mekke fî vasfi Sünenih",
          "Kitâbü'z-Zühd"
        ]
      }
    ]
  },

  sections: [
    { id: "bolum-0", num: "0", label: "Kapak", shortLabel: "Kapak", color: "#12263f" },
    { id: "bolum-1", num: "1", label: "Hayatı", shortLabel: "Hayatı", color: "#1f7a5a" },
    { id: "bolum-2", num: "2", label: "İlim Yolculuğu Haritası", shortLabel: "Harita", color: "#2a8c9a" },
    { id: "bolum-3", num: "3", label: "Hocaları", shortLabel: "Hocaları", color: "#c9a227" },
    { id: "bolum-4", num: "4", label: "Talebeleri", shortLabel: "Talebeleri", color: "#8a2c3b" },
    { id: "bolum-5", num: "5", label: "Hakkındaki Övgüler", shortLabel: "Övgüler", color: "#12263f" },
    { id: "bolum-6", num: "6", label: "Hadisçiliği ve Fıkhî Konumu", shortLabel: "Hadisçiliği", color: "#1f7a5a" },
    { id: "bolum-7", num: "7", label: "Eserleri", shortLabel: "Eserleri", color: "#2a8c9a" },
    { id: "bolum-8", num: "8", label: "Güzel Sözleri ve 4 Hadis", shortLabel: "Sözleri", color: "#c9a227" },
    { id: "bolum-9", num: "9", label: "Hakkında Yapılan Çalışmalar", shortLabel: "Çalışmalar", color: "#8a2c3b" },
    { id: "bolum-10", num: "10", label: "Diğer Şahıslar ve Kaynaklar", shortLabel: "Şahıslar", color: "#12263f" }
  ],

  life: {
    hint: "Bu bölümde ne var? Doğumundan Basra'daki vefatına kadar hayatının 13 kronolojik durağı.",
    items: [
      {
        num: 1,
        title: "Doğum",
        text: "Doğum: 202 (817-18) yılında Sicistan'da doğdu. 203'te (818-19) doğduğunu söyleyenler de vardır."
      },
      {
        num: 2,
        title: "Sicistan",
        text: "Sicistan: Basra'nın bir köyü değil, İran ile Afganistan arasındaki sınır bölgesidir."
      },
      {
        num: 3,
        title: "Nisbeleri",
        text: "Nisbeleri: Ailesi aslen Yemen'in Ezd kabilesinden olduğu için Ezdî; \"Sicistanlı\" anlamında Siczî nisbeleriyle de anılır."
      },
      {
        num: 4,
        title: "Soyu ve Ailesi",
        text: "Dedesinin adının Bişr veya Şeddâd olduğu, büyük dedesi İmrân'ın Sıffîn'de Hz. Ali'nin yanında yer aldığı ve bu savaşta öldüğü rivayet edilir."
      },
      {
        num: 5,
        title: "Aile",
        text: "Aile: Kurdukları vakıflar uzun yıllar devam etmiş zengin bir aileden geldi."
      },
      {
        num: 6,
        title: "İlk Seyahat (18 Yaşında)",
        text: "Tahsile Sicistan'da başladı; 18 yaşında hadis bilgisini artırmak için seyahate çıktı; önce Bağdat'a, sonra Basra'ya gitti ve Basra'da uzun süre kaldı."
      },
      {
        num: 7,
        title: "İlim Merkezleri ve Hocaları",
        text: "Diğer ilim merkezlerini dolaştı. Hocalarının çoğu Buhârî ve Müslim'in de hocasıdır."
      },
      {
        num: 8,
        title: "Tarsus, Sicistan, Herat ve Bağdat",
        text: "Tarsus'ta yirmi yıl ikamet etti. Sicistan'a döndükten sonra Herat'ta ve Bağdat'ta bulundu."
      },
      {
        num: 9,
        title: "Basra'ya Yerleşme Ricası",
        text: "Bağdat'ta Halife Mu'temid-Alellah'ın kardeşi Emîr Ebû Ahmed Muvaffak b. Mütevekkil, evine giderek zenci hareketi yüzünden Basra'nın yakılıp yıkıldığını, Basra'ya yerleşirse İslam âleminin dört bir yanından gelecek talebelerle Basra'nın yeniden canlanacağını söyledi. Ebû Dâvûd bu ricayla Basra'ya yerleşti. Zenc hareketi 868-883 yılları arasında devam ettiğine göre ölümünden beş altı yıl kadar önce yerleşmiş olmalıdır."
      },
      {
        num: 10,
        title: "Oğlu ve Kardeşiyle Seyahatler",
        text: "Oğlu Abdullah (sonradan İbn Ebû Dâvûd adıyla tanınan hadis hafızı) 230'da (844-45) doğdu; seyahatlerinin bir kısmında onu yanına aldı. Kardeşi Muhammed b. Eş'as da bu seyahatlerde onlara arkadaşlık etti."
      },
      {
        num: 11,
        title: "Vefat",
        text: "Vefat: 16 Şevval 275 (21 Şubat 889), Basra; Süfyân es-Sevrî'nin kabrinin yanına defnedildi."
      },
      {
        num: 12,
        title: "es-Sünen ve Ahmed b. Hanbel",
        text: "Ahmed b. Hanbel'in ondan bir hadis rivayet ettiği, es-Sünen'i inceleyip beğendiği söylenir. Bu doğruysa es-Sünen'i kırk yaşına gelmeden yazmıştır."
      },
      {
        num: 13,
        title: "Hanbel'in meclisleri",
        text: "Hanbel'in meclisleri: Bağdat'ta Ahmed b. Hanbel'in ilim meclislerine uzunca süre devam etti; bazı önemli fıkıh ve usûl-i fıkıh konularını ondan öğrendi."
      }
    ]
  },

  map: {
    hint: "Bu bölümde ne var? 28°–72° D boylam ve 18°–42° K enlem aralığında 17 duraklı ilim yolculuğu haritası ve şehir seçici.",
    approxNote: "4–13 arası duraklarda kesin sıra belli olmadığı için sıra yaklaşıktır.",
    cities: [
      {
        id: "sicistan",
        name: "Sicistan",
        displayLabel: "Sicistan (bölge)",
        isRegion: true,
        lat: 31.0,
        lon: 61.9,
        labelDx: 0,
        labelDy: 34,
        useLeader: true,
        steps: [1, 14],
        note: "doğum yeri; tahsile başladığı yer",
        teachers: []
      },
      {
        id: "herat",
        name: "Herat",
        displayLabel: "Herat",
        isRegion: false,
        lat: 34.3,
        lon: 62.2,
        labelDx: 56,
        labelDy: 4,
        useLeader: true,
        steps: [15],
        note: "Sicistan'a döndükten sonra bulundu",
        teachers: []
      },
      {
        id: "belh",
        name: "Belh",
        displayLabel: "Belh",
        isRegion: false,
        lat: 36.8,
        lon: 66.9,
        labelDx: 32,
        labelDy: -24,
        useLeader: true,
        steps: [11],
        note: "Belh şehri",
        teachers: [{ name: "Kuteybe b. Saîd" }]
      },
      {
        id: "horasan",
        name: "Horasan",
        displayLabel: "Horasan (bölge)",
        isRegion: true,
        lat: 36.2,
        lon: 59.6,
        labelDx: -38,
        labelDy: -30,
        useLeader: true,
        steps: [10],
        note: "Horasan (bölge)",
        teachers: [{ name: "İshâk b. Râhûye" }]
      },
      {
        id: "bagdat",
        name: "Bağdat",
        displayLabel: "Bağdat",
        isRegion: false,
        lat: 33.3,
        lon: 44.4,
        labelDx: 56,
        labelDy: -18,
        useLeader: true,
        steps: [2, 16],
        note: "ilk durak; sonra tekrar bulundu",
        teachers: [{ name: "Ahmed b. Hanbel" }]
      },
      {
        id: "basra",
        name: "Basra",
        displayLabel: "Basra",
        isRegion: false,
        lat: 30.5,
        lon: 47.8,
        labelDx: 54,
        labelDy: 18,
        useLeader: true,
        steps: [3, 17],
        note: "uzun süre kaldı; yerleşti, vefat",
        teachers: [
          {
            name: "Müslim b. İbrâhîm el-Ezdî",
            detail: "Basralı hadis hafızı, en çok faydalandığı hoca"
          },
          { name: "Tebûzekî" },
          { name: "Ârim el-Basrî" },
          { name: "Ebü'l-Velîd et-Tayâlisî" }
        ]
      },
      {
        id: "kufe",
        name: "Küfe",
        displayLabel: "Küfe (221/836)",
        isRegion: false,
        lat: 32.0,
        lon: 44.4,
        labelDx: -52,
        labelDy: 18,
        useLeader: true,
        steps: [5],
        note: "221/836",
        teachers: [
          { name: "Hasan b. Rebî el-Becelî" },
          { name: "Ahmed b. Yûnus el-Yerbûî" }
        ]
      },
      {
        id: "mekke",
        name: "Mekke",
        displayLabel: "Mekke",
        isRegion: false,
        lat: 21.4,
        lon: 39.8,
        labelDx: 52,
        labelDy: 4,
        useLeader: true,
        steps: [4],
        note: "Mekke",
        teachers: [
          { name: "Ka'nebî" },
          { name: "Süleyman b. Harb" }
        ]
      },
      {
        id: "halep",
        name: "Halep",
        displayLabel: "Halep",
        isRegion: false,
        lat: 36.2,
        lon: 37.2,
        labelDx: -2,
        labelDy: -38,
        useLeader: true,
        steps: [6],
        note: "Halep",
        teachers: [{ name: "Ebû Tevbe el-Halebî" }]
      },
      {
        id: "harran",
        name: "Harran",
        displayLabel: "Harran",
        isRegion: false,
        lat: 36.9,
        lon: 39.0,
        labelDx: 58,
        labelDy: -22,
        useLeader: true,
        steps: [7],
        note: "Harran",
        teachers: [{ name: "Ebû Ca'fer en-Nüfeylî" }]
      },
      {
        id: "humus",
        name: "Humus",
        displayLabel: "Humus (222/837)",
        isRegion: false,
        lat: 34.7,
        lon: 36.7,
        labelDx: 58,
        labelDy: 0,
        useLeader: true,
        steps: [8],
        note: "222/837",
        teachers: [
          { name: "Hayve b. Şüreyh b. Yezîd" },
          { name: "Yezîd b. Abdürabbih" }
        ]
      },
      {
        id: "dimask",
        name: "Dımaşk",
        displayLabel: "Dımaşk",
        isRegion: false,
        lat: 33.5,
        lon: 36.3,
        labelDx: 56,
        labelDy: 22,
        useLeader: true,
        steps: [9],
        note: "Dımaşk",
        teachers: [{ name: "Hişâm b. Ammâr" }]
      },
      {
        id: "tarsus",
        name: "Tarsus",
        displayLabel: "Tarsus",
        isRegion: false,
        lat: 36.9,
        lon: 34.9,
        labelDx: -56,
        labelDy: -22,
        useLeader: true,
        steps: [13],
        note: "yirmi yıl ikamet etti",
        teachers: []
      },
      {
        id: "misir",
        name: "Mısır",
        displayLabel: "Mısır",
        isRegion: false,
        lat: 30.0,
        lon: 31.2,
        labelDx: 44,
        labelDy: 24,
        useLeader: true,
        steps: [12],
        note: "Mısır",
        teachers: [{ name: "Ahmed b. Sâlih" }]
      }
    ] as CityNode[],
    route: [
      { step: 1, cityId: "sicistan", label: "Sicistan (doğum)", isApprox: false },
      { step: 2, cityId: "bagdat", label: "Bağdat (ilk durak)", isApprox: false },
      { step: 3, cityId: "basra", label: "Basra (uzun süre kaldı)", isApprox: false },
      { step: 4, cityId: "mekke", label: "Mekke", isApprox: true },
      { step: 5, cityId: "kufe", label: "Küfe (221/836)", isApprox: true },
      { step: 6, cityId: "halep", label: "Halep", isApprox: true },
      { step: 7, cityId: "harran", label: "Harran", isApprox: true },
      { step: 8, cityId: "humus", label: "Humus (222/837)", isApprox: true },
      { step: 9, cityId: "dimask", label: "Dımaşk", isApprox: true },
      { step: 10, cityId: "horasan", label: "Horasan", isApprox: true },
      { step: 11, cityId: "belh", label: "Belh", isApprox: true },
      { step: 12, cityId: "misir", label: "Mısır", isApprox: true },
      { step: 13, cityId: "tarsus", label: "Tarsus (yirmi yıl)", isApprox: true },
      { step: 14, cityId: "sicistan", label: "Sicistan (dönüş)", isApprox: false },
      { step: 15, cityId: "herat", label: "Herat", isApprox: false },
      { step: 16, cityId: "bagdat", label: "Bağdat", isApprox: false },
      { step: 17, cityId: "basra", label: "Basra (yerleşti, vefat)", isApprox: false }
    ] as RouteStep[]
  },

  teachers: {
    hint: "Bu bölümde ne var? Hocalar şehir şehir (tıklamadan her zaman görünür), şehri belirtilmeyenler, değerlendirme sözü ve kaynak notu.",
    unlocatedTitle: "Şehri belirtilmeyen tanınmış hocalar",
    unlocatedTeachers: [
      { name: "Ali b. Medînî" },
      { name: "Saîd b. Mansûr" },
      { name: "Yahyâ b. Maîn" }
    ],
    evaluationTitle: "Hocaları hakkındaki sözü",
    evaluationText: "Yahyâ b. Maîn en çok hadis toplayıp ezberleyen, Ahmed b. Hanbel hadislerin fıkhını en iyi anlayan, Ali b. Medînî hadislerdeki gizli kusurları (illet) en iyi bilen kişidir.",
    sourceNoteTitle: "Kaynak notu",
    sourceNoteText: "İbn Hacer el-Askalânî onun 300 kadar hocası olduğunu söyler. Ebû Alî el-Gassânî, Ebû Dâvûd'un hocalarını \"Tesmiyetü şüyûhi Ebî Dâvûd Süleymân es-Sicistânî\" adlı risalesinde bir araya getirmiştir.",
    sourceWorkTitle: "Tesmiyetü şüyûhi Ebî Dâvûd Süleymân es-Sicistânî"
  },

  students: {
    hint: "Bu bölümde ne var? Merkezde Ebû Dâvûd, etrafında talebeleri, es-Sünen'in Basralı râvileri ve ilmi üstün tuttuğu olay.",
    centerName: "Ebû Dâvûd es-Sicistânî",
    groups: [
      {
        groupTitle: "Ailesi ve Kütüb-i Sitte İmamları",
        students: [
          { name: "Oğlu Abdullah (İbn Ebû Dâvûd)" },
          { name: "Ebû Îsâ et-Tirmizî" },
          { name: "Nesâî", note: "(bir rivayete göre)" }
        ]
      },
      {
        groupTitle: "Muhaddis ve Müellif Talebeleri",
        students: [
          { name: "İbn Ebü'd-Dünyâ" },
          { name: "Abdân el-Ahvâzî" },
          { name: "Zekeriyyâ b. Yahyâ es-Sâcî" }
        ]
      },
      {
        groupTitle: "Diğer Önde Gelen Talebeleri",
        students: [
          { name: "Ebû Bişr ed-Dûlâbî" },
          { name: "Ebû Bekir el-Hallâl" },
          { name: "Ebû Avâne el-İsferâyînî" }
        ]
      }
    ] as StudentCardGroup[],
    goldBox: {
      title: "es-Sünen'i ondan rivayet edenlerin en tanınmışları (Basralı talebeleri)",
      names: [
        "Muhammed b. Ahmed el-Lü'lüî",
        "Ebû Bekir İbn Dâse"
      ]
    },
    extraNoteTitle: "İlmi Her Şeyin Üstünde Tutması",
    extraNoteText: "Emîr Ebû Ahmed el-Muvaffak b. Mütevekkil, kendi çocuklarına özel olarak es-Sünen'i okutması teklifinde bulundu; Ebû Dâvûd ilmi her şeyin üstünde tuttuğu için reddetti. Çocuklar diğer hadis talebeleriyle birlikte ayrı bir bölmede derslerine devam etti."
  },

  praises: {
    hint: "Bu bölümde ne var? Çağdaşları, talebeleri ve sonraki âlimlerin Ebû Dâvûd hakkındaki 8 övgü değerlendirmesi.",
    items: [
      {
        name: "Hâkim en-Nîsâbûrî",
        text: "Ebû Dâvûd asrın hadis imamıydı."
      },
      {
        name: "Mûsâ b. Hârûn",
        text: "Onun hadis için yaratıldığını ve ondan daha faziletli birini görmediğini söylemiştir."
      },
      {
        name: "İbrâhîm b. Uvreme el-İsfahânî ve Ebû Bekir b. Sadaka",
        text: "Hiç kimse hakkında kullanmadıkları övgü ifadelerini Ebû Dâvûd için kullanmışlardır."
      },
      {
        name: "Ebû Bekir el-Hallâl",
        text: "Hocasından, devrinin önde gelen imamlarından biri ve hadislerin sağlamlık derecesini anlayıp kaynağına inme hususunda en yetkili otorite diye söz etmiştir."
      },
      {
        name: "Muhammed b. Mahled",
        text: "100.000 hadisi rahatlıkla müzakere edebilirdi."
      },
      {
        name: "İbn Yâsîn",
        qualifier: "(Târîhu Herât müellifi)",
        text: "En ince kusurlara varıncaya kadar rivayetleri çok iyi bilen büyük bir muhaddis ve son derece müttakî bir kimse."
      },
      {
        name: "İbn Hibbân",
        text: "Fıkıh ve hadisteki bilgisi, hafıza gücü ve takvası bakımından en büyük âlimlerden biriydi."
      },
      {
        name: "Ebû Abdullah İbn Mende",
        text: "Hadislerin sağlamını sakatından, doğrusunu yanlışından dört muhaddis ayırabilir: sırasıyla Buhârî, Müslim, Ebû Dâvûd ve Nesâî."
      }
    ] as PraiseItem[],
    extraAuthorsAndWorks: [
      "İbrâhîm b. Uvreme el-İsfahânî",
      "Ebû Bekir b. Sadaka",
      "Târîhu Herât"
    ]
  },

  methodology: {
    hint: "Bu bölümde ne var? Hadis tenkidi usulü, iki somut tenkit örneği, Selefiyye yaklaşımı ve fıkhî konumu.",
    cards: [
      {
        title: "İllet Tanıma ve Râvi Tenkidi",
        text: "Hadislerin zayıfını sağlamından ayırma, rivayetlerdeki ince kusurları tanıma ve râvileri tenkit etmede tanınmış bir âlimdir."
      },
      {
        title: "Cerhte İhtiyat ve Açık Sebep Şartı",
        text: "Kesin bilgi sahibi olmadığı kimseler hakkında görüş bildirmekten sakınırdı; genel ifadelerle yapılan cerhe önem vermez, hangi sebeple cerh edildiklerinin açıkça söylenmesini isterdi."
      },
      {
        title: "Tavizsiz Tenkit ve İki Örnek",
        text: "Hadis rivayetinde yetersiz ve liyakatsiz bulduğu kimselere müsamaha göstermez, yakını bile olsa tenkitten çekinmezdi. Örnek 1: Oğlu Abdullah hakkında bilinmeyen bir sebeple \"yalancı\" dediği ileri sürülür (Zehebî, Mîzânü'l-i'tidâl). Örnek 2: Sahîh-i Buhârî'de iki rivayeti bulunan Ya'kûb b. Humeyd b. Kâsib'in değersiz bir kişi olduğunu göstermek üzere onun rivayetlerinin yazılı olduğu kâğıtlarla kitaplarını kapladığı rivayet edilir."
      },
      {
        title: "es-Sünen'e Hadis Alma Ölçüsü",
        text: "Senedinde kopukluk bulunmayan ve râvilerinin zayıflığı hakkında fikir birliğine varılmayan hadisi kitabına almakta mahzur görmezdi."
      },
      {
        title: "Selefiyye Metodu",
        text: "Kur'ân-ı Kerîm'den sonra sünneti ön planda tutma konusunda Selefiyye'nin metodunu benimsedi."
      },
      {
        title: "Zâhidâne Hayat ve Ahmed b. Hanbel Örneği",
        text: "Hz. Peygamber'e benzetilen Ahmed b. Hanbel'i kendisine örnek aldığı ve zâhidâne bir hayat sürdüğü belirtilir."
      },
      {
        title: "Fıkhî Konumu",
        text: "Fıkhî konum: Herhangi bir mezhebi taklit etmediği halde Ebû Ya'lâ el-Ferrâ (Tabakâtü'l-Hanâbile), Ebû İshâk eş-Şîrâzî (Tabakâtü'l-fukahâ') ve Ebü'l-Yümn el-Uleymî (el-Menhecü'l-ahmed) onu Ahmed b. Hanbel'in talebesi olan Hanbelî fakihleri arasında; Sübkî (Tabakât) ise Şâfiî fakihleri arasında saymıştır."
      }
    ],
    referencedPeopleAndBooks: [
      "Mîzânü'l-i'tidâl",
      "Sahîh-i Buhârî",
      "Ebû Ya'lâ el-Ferrâ",
      "Tabakâtü'l-Hanâbile",
      "Ebû İshâk eş-Şîrâzî",
      "Tabakâtü'l-fukahâ'",
      "Ebü'l-Yümn el-Uleymî",
      "el-Menhecü'l-ahmed",
      "Sübkî",
      "Tabakât"
    ]
  },

  works: {
    hint: "Bu bölümde ne var? Kitaplık görünümünde numaralı 9 temel eseri ve kaynaklarda adı geçen diğer 10 eseri.",
    mainWorks: [
      {
        number: 1,
        title: "es-Sünen",
        description: "Sahîhinden zayıfına kadar İslam hukukuyla ilgili 4800 hadisi topladığı, ileri derecede zayıf olanları belirtmeye özen gösterdiği eser; İslam dünyasında büyük rağbet gördü. Muhtelif şerhleri vardır; Kahire'de neşredildi (1280). Kütüb-i Sitte'dendir."
      },
      {
        number: 2,
        title: "el-Merâsîl",
        description: "544 mürsel hadis içerir; sahasının ilk ve orijinal eseridir. İlk defa Alî es-Sünnî et-Trablusî tarafından senedleri zikredilmeksizin neşredildi (Kahire 1310)."
      },
      {
        number: 3,
        title: "Mesâilü'l-İmâm Ahmed b. Hanbel",
        altTitle: "el-Mesâilü'lletî hâlefe aleyhe'l-İmâm Ahmed b. Hanbel",
        description: "Ahmed b. Hanbel'e sorulan bazı soruların cevapları; fıkıh bablarına göre tertipli. Muhammed Behcet Beytâr neşre hazırladı, Reşîd Rızâ'nın takdim yazısıyla yayımlandı (Kahire 1353)."
      },
      {
        number: 4,
        title: "İcâbâtühû alâ suâlâti Ebî Ubeyd Muhammed b. Alî b. Osmân el-Âcurrî",
        description: "Râvilerin cerh ve ta'dîline dair, talebesi Ebû Ubeyd el-Âcurrî'nin sorularına verdiği cevaplar; beş cüz. İbn Hacer Tehzîbü't-Tehzîb'de çok faydalandı. Üçüncü cüzü Muhammed Ali Kâsım el-Ömerî yayımladı (Medine 1403)."
      },
      {
        number: 5,
        title: "Risâletü Ebî Dâvûd ilâ ehli Mekke fî vasfi Sünenih",
        altTitle: "Risâle fî vasfi te'lîfihî li-kitâbi's-Sünen",
        description: "Bir müellifin kendi eserini tanıtıp benzerleriyle karşılaştırması ve o devirde pek adet olmayan bir usulü ortaya koyması bakımından önemli. Zâhid Kevserî (Kahire 1369), Muhammed Lutfî es-Sabbağ (Beyrut 1394, 1405) yayımladı."
      },
      {
        number: 6,
        title: "Kitâbü'z-Zühd"
      },
      {
        number: 7,
        title: "Tesmiyetü ihve ellezîne ruviye anhümü'l-hadîs",
        altTitle: "Tesmiyetü'l-ihve min ehli'l-emsâr adıyla da bilinir"
      },
      {
        number: 8,
        title: "Kitâbü'l-Ba's ve'n-Nüşûr",
        description: "Brockelmann, bu eserin Dımaşk'ta bulunduğunu söyler"
      },
      {
        number: 9,
        title: "Kitâbü'l-Kader",
        description: "er-Red alâ ehli'l-kader ve er-Red ale'l-Kaderiyye adlarıyla da anılır; günümüze gelip gelmediği bilinmiyor"
      }
    ] as WorkItem[],
    otherWorksTitle: "Kaynaklarda adı geçen diğer eserleri",
    otherWorks: [
      { title: "Nâsihu'l-Kur'ân ve mensûhuh" },
      { title: "Delâilü'n-nübüvve" },
      { title: "et-Teferrüd fi's-sünen" },
      { title: "Fezâilü'l-ensâr" },
      { title: "Müsnedü Mâlik" },
      { title: "ed-Duâ" },
      { title: "İbtidâü'l-vahy" },
      { title: "Ahbârü'l-havâric" },
      { title: "Mâ teferrede bihî ehlü'l-emsâr" },
      { title: "el-Âdâbü'ş-şer'iyye" }
    ],
    extraTitles: [
      "Tehzîbü't-Tehzîb",
      "er-Red alâ ehli'l-kader",
      "er-Red ale'l-Kaderiyye"
    ]
  },

  quotes: {
    hint: "Bu bölümde ne var? Ebû Dâvûd'un 3 güzel sözü ve iyi bir müslümana yeteceğini söylediği 4 hadis.",
    sayingsTitle: "Güzel Sözleri",
    sayings: [
      "\"Baş olma sevdası gizli şehvettir.\"",
      "\"Sözün hayırlısı kulağa izinsiz girendir.\"",
      "\"Giyeceğe ve yiyeceğe değer vermeyen kimse vücudunu rahat ettirir.\""
    ],
    hadithsLead: "Pratik sonuçlara değer verdiği için es-Sünen'den şu 4 hadisin iyi bir müslüman olmak isteyen kişiye yeteceğini söylerdi:",
    hadiths: [
      {
        num: 1,
        text: "Ameller niyetlere göre değerlendirilir."
      },
      {
        num: 2,
        text: "İnsanın kendini ilgilendirmeyen işleri bırakması, onun iyi bir müslüman olduğunu gösterir."
      },
      {
        num: 3,
        text: "Kişi kendisi için istediği şeyi kardeşi için de istemedikçe iyi bir mümin olamaz."
      },
      {
        num: 4,
        text: "Helal de bellidir haram da. Ancak bunların arasında (sakınılması gerekli), halkın çoğunun helal mi haram mı olduğunu bilmediği şüpheli konular vardır."
      }
    ]
  },

  studies: {
    hint: "Bu bölümde ne var? Ebû Dâvûd hakkında kaleme alınmış müstakil eserler ve akademik tezler.",
    items: [
      {
        author: "Ebû Ahmed el-Cellûdî (ö. 302/914-15)",
        title: "Ahbâru Ebî Dâvûd",
        meta: ""
      },
      {
        author: "Muhammed Sîrân Efendi el-Endonîsî",
        title: "el-Metrûkûn ve'l-mechûlûn ve merviyyâtühüm fî Süneni Ebî Dâvûd es-Sicistânî",
        meta: "Ümmülkurâ Üniversitesi yüksek lisans tezi, Mekke 1396/1976"
      },
      {
        author: "Takıyyüddin el-Mezâhirî en-Nedvî",
        title: "Ebû Dâvûd el-İmâm el-Hâfız el-Fakîh",
        meta: "Ayn 1978"
      },
      {
        author: "Muâvad b. Bilâl el-Avfî",
        title: "Ebû Dâvûd es-Sicistânî ve eşeruhû fî ilmi'l-hadîs",
        meta: "Ümmülkurâ Üniversitesi yüksek lisans tezi, Mekke 1400/1980"
      },
      {
        author: "Muhammed Lutfî es-Sabbağ",
        title: "Ebû Dâvûd Hayâtühû ve Sünenühû",
        meta: "Beyrut 1405/1985"
      }
    ] as StudyItem[]
  },

  otherPeople: {
    hint: "Bu bölümde ne var? Maddede adı geçen diğer şahıslar ve kaynak müelliflerinin kısa isim bulutu.",
    names: [
      "Hz. Ali",
      "Süfyân es-Sevrî",
      "Halife Mu'temid-Alellah",
      "Emîr Ebû Ahmed Muvaffak b. Mütevekkil",
      "İmrân",
      "Ebû Ubeyd el-Âcurrî",
      "Reşîd Rızâ",
      "Muhammed Behcet Beytâr",
      "Alî es-Sünnî et-Trablusî",
      "Zâhid Kevserî",
      "Muhammed Ali Kâsım el-Ömerî",
      "Ebû Alî el-Gassânî",
      "Ya'kûb b. Humeyd b. Kâsib",
      "Zehebî",
      "İbn Hacer el-Askalânî",
      "Brockelmann"
    ],
    familyAndEarlier: [
      "Bişr",
      "Şeddâd",
      "Muhammed b. Eş'as",
      "Emîr Ebû Ahmed el-Muvaffak b. Mütevekkil"
    ]
  }
} as const;
