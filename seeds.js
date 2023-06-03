const Project = require("./models/project");
const mongoose = require("mongoose");

const connectString =
  "mongodb+srv://khan_project_user:wPh9yHnKvuIJ6H5o@khanprojectdb.ns222vg.mongodb.net/khanprojectdb?retryWrites=true&w=majority";

mongoose
  .connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

// const p = new Project({
//   name: "TestProject",
//   category: "Interior",
//   year: 2020,
//   mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/01.jpg",
//   description:
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//   gallery: [
//     "https://khan-project.s3.eu-central-1.amazonaws.com/02.jpg",
//     "https://khan-project.s3.eu-central-1.amazonaws.com/03.jpg",
//     "https://khan-project.s3.eu-central-1.amazonaws.com/04.jpg",
//     "https://khan-project.s3.eu-central-1.amazonaws.com/05.jpg",
//   ],
// });

const projects = [
  {
    name: {
      en: "Harmony of Nature and Contemporary Living",
      cs: "Harmonie přírody a moderního bydlení"
    },
    category: "Interior",
    year: 2019,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/p1.jpg",
    description: {
      en: "Breathe life into your everyday surroundings with this masterfully designed interior space that perfectly balances comfort, style, and a connection to nature. Filled with an abundance of plants, this interior design project introduces an organic touch that revitalizes the senses and fosters a serene atmosphere. \nThe heart of this home is a modern, well-appointed kitchen featuring a versatile island as its centerpiece. It is a space conceived for both casual meals and gourmet cooking, offering functionality without compromising the overall aesthetics. \n An inviting, state-of-the-art fireplace adds warmth to the space, creating an intimate nook ideal for relaxation or contemplative moments. Complementing the fireplace is a cozy armchair, promising comfort and solitude, a perfect place to unwind after a long day. \nThis project is a testament to harmonious living, embracing modern design elements while maintaining a profound connection with nature. It is a space that invites you to breathe deeply, relax, and enjoy the comfort and beauty of your surroundings.",
      cs: "Vdechněte život do svého každodenního prostředí s tímto mistrovsky navrženým interiérem, který dokonale vyvažuje pohodlí, styl a spojení s přírodou. Tento interiérový design je plný rostlin, přináší organický dotek, který oživuje smysly a vytváří klidnou atmosféru. \n Srdcem tohoto domova je moderní, dobře vybavená kuchyně s univerzálním ostrovem jako svým středobodem. Je to prostor navržený pro neformální jídla i gurmánské vaření, nabízí funkčnost bez kompromisů v celkové estetice. \n Příjemný, ultramoderní krb dodává prostoru teplo, vytváří intimní koutek ideální pro relaxaci nebo kontemplativní chvíle. Krb doplňuje útulné křeslo, které slibuje pohodlí a samotu, ideální místo pro odpočinek po dlouhém dni. \n Tento projekt je důkazem harmonického bydlení, objímá moderní designové prvky a přitom zachovává hluboké spojení s přírodou. Je to prostor, který vás zve k hlubokému dýchání, relaxaci a užívání si pohodlí a krásy svého okolí."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/p2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/p3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/p4.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/p5.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/p6.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/p7.jpg"
    ]
  },
  {
    name: {
      en: "Ingenious Compact Living",
      cs: "Důmyslné kompaktní bydlení"
    },
    category: "Interior",
    year: 2021,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/s1.jpg",
    description: {
      en: "Step into a world where every inch counts. This small yet exceptionally cozy duplex flat redefines compact living by expertly merging functionality and style. \nA testament to ingenious architecture, the flat successfully maximizes the use of space. Clever storage solutions are seamlessly integrated into the design, transforming the way you interact with your living environment. These innovative features not only declutter the space but also help maintain a smooth, streamlined aesthetic throughout the flat. \nOne of the standout features of this home is the roof window, which bathes the duplex in natural light, creating a sense of spaciousness and forging a deeper connection with the outdoors. It's a stunning example of how light and space can transform small living quarters into a bright, airy home. \nThis duplex flat is the epitome of smart living. With its well-thought-out design and a strong emphasis on space and storage management, it encapsulates the future of urban living—efficient, stylish, and exceptionally comfortable.",
      cs: "Vstupte do světa, kde každý centimetr má svůj význam. Tento malý, ale mimořádně útulný dvojpodlažní byt nově definuje kompaktní bydlení tím, že dokonale sloučí funkčnost a styl. \nByt je svědectvím důmyslné architektury a úspěšně maximalizuje využití prostoru. Chytrá řešení pro skladování jsou bezproblémově integrována do designu a mění způsob, jakým interagujete se svým obytným prostředím. Tyto inovativní prvky nejen udržují prostor uklizený, ale také pomáhají zachovat hladkou, jednotnou estetiku po celém bytě. \nJedním z výrazných prvků tohoto domova je střešní okno, které záplavou přirozeného světla tvoří pocit prostoru a navazuje hlubší spojení s venkovním prostředím. Je to úchvatný příklad toho, jak mohou světlo a prostor proměnit malé obytné prostory v světlý, vzdušný domov. \nTento dvojpodlažní byt je vrcholným příkladem chytrého bydlení. S jeho dobře promyšleným designem a silným důrazem na řízení prostoru a skladování, ztělesňuje budoucnost městského bydlení - efektivní, stylové a mimořádně pohodlné."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/s2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/s3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/s4.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/s5.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/s6.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/s7.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/s8.jpg"
    ]
  },
  {
    name: {
      en: "Fusion of Rustic Elegance and Galactic Adventure",
      cs: "Fúze rustikální elegance a galaktického dobrodružství"
    },
    category: "Interior",
    year: 2020,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/k1.jpg",
    description: {
      en: "Welcome to a spacious apartment where the charm of rustic elegance effortlessly merges with the excitement of galactic adventures. Aesthetically pleasing and functionally sound, this living space is a true embodiment of diverse design sensibilities.\n The living room and kitchen showcase a tasteful blend of wooden and concrete elements, creating a contemporary yet timeless appeal. The wood imparts warmth and a sense of organic beauty, while the concrete provides a modern and industrial edge. This fusion results in a unique aesthetic that is both raw and refined, rugged and sleek. \n The children's rooms are the true stars of this project. Stepping into these rooms is like venturing into the Star Wars universe, promising a fun and imaginative atmosphere. These rooms, thoughtfully designed in a Star Wars theme, not only provide a playful retreat for the kids but also foster their creativity and imagination. The use of iconic imagery, color schemes, and decor associated with the franchise truly brings the theme to life. \nThis spacious apartment demonstrates the possibility of combining divergent design elements in one cohesive space, producing a home that is not only stylish and comfortable but also radiates individuality and creativity. The perfect balance between modern rustic interiors and imaginative children's rooms makes this dwelling a unique and delightful living environment.",
      cs: "Vítejte v prostorném bytě, kde kouzlo rustikální elegance bez námahy splývá s vzrušením z galaktických dobrodružství. Esteticky příjemné a funkčně zvukové, toto obytné prostor je pravou podobou různorodých designových citlivostí. \nObývací pokoj a kuchyně prezentují vkusnou směs dřevěných a betonových prvků, čímž vytvářejí současný a zároveň nadčasový dojem. Dřevo dodává teplý a organický pocit krásy, zatímco beton poskytuje moderní a průmyslový vzhled. Tato fúze vede k jedinečné estetice, která je současně syrová a rafinovaná, drsná a elegantní \nDětské pokoje jsou skutečnými hvězdami tohoto projektu. Vstoupit do těchto pokojů je jako vstoupit do vesmíru Star Wars a slibuje zábavnou a kreativní atmosféru. Tyto pokoje, promyšleně navržené v tematice Star Wars, nejen poskytují hravý útočiště pro děti, ale také podporují jejich kreativitu a fantazii. Použití ikonických obrázků, barevných schémat a dekorací spojených s touto franchisou opravdu oživuje téma. \nTento prostorný byt ukazuje možnost kombinování divergentních designových prvků v jednom koherentním prostoru, čímž vytváří domov, který je nejen stylový a pohodlný, ale také vyzařuje individualitu a kreativitu. Perfektní rovnováha mezi moderními rustikálními interiéry a kreativními dětskými pokoji činí z tohoto bydliště unikátní a příjemné obytné prostředí."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/k2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k4.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k5.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k6.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k7.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k8.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k9.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k10.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k11.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k12.jpg",
    ]
  },
  {
    name: {
      en: "Modern Classic – A Symphony in White",
      cs: "Moderní klasika - Symfonie v bílé"
    },
    category: "Interior",
    year: 2018,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/m1.jpg",
    description: {
      en: "Dive into the world of contemporary elegance with this stylish abode. This project perfectly encapsulates the ethos of modern classic design - a refined aesthetic where simplicity meets sophistication. \nDominated by shades of white, the color palette lends a sense of lightness and purity to the space, creating an inviting, serene, and timeless atmosphere. The white interiors reflect light beautifully, making the space feel airy, expansive, and vibrant. \nThe kitchen is a showstopper, showcasing a striking marble countertop that seamlessly merges with the white color scheme. This exquisite detail not only adds a touch of luxury but also enhances the overall design narrative of understated elegance. The unique patterns and lustrous sheen of marble make the kitchen a visually captivating and practical workspace. n/This project beautifully illustrates the power of minimalism in modern classic design. It's a delicate balance of restraint and opulence, where each detail is carefully considered and purposefully chosen to create a harmonious, tranquil, and luxurious living environment. The predominance of white coupled with the grandeur of marble elevates the home’s aesthetic, making it a true masterpiece of modern classic design.",
      cs: "Ponořte se do světa současné elegance s tímto stylovým bydlištěm. Tento projekt dokonale vtělňuje ethos moderního klasického designu - rafinovanou estetiku, kde se jednoduchost setkává s sofistikovaností. \nDominováno odstíny bílé, barevná paleta propůjčuje prostoru pocit lehkosti a čistoty, vytváří příjemnou, klidnou a nadčasovou atmosféru. Bílé interiéry krásně odrážejí světlo, čímž prostor působí vzdušně, prostorně a dynamicky. \nKuchyně je hlavní atrakcí a ukazuje nápaditý mramorový pracovní stůl, který se bezproblémově slévá s bílým barevným schématem. Tento exkluzivní detail nejen přidává dotek luxusu, ale také zvyšuje celkový designový příběh decentní elegance. Unikátní vzory a lesklý lesk mramoru činí kuchyni vizuálně okouzlujícím a praktickým pracovním prostorem. \nTento projekt krásně ilustruje sílu minimalismu v moderním klasickém designu. Je to jemná rovnováha zdrženlivosti a nádhery, kde je každý detail pečlivě zvážen a účelně vybrán pro vytvoření harmonického, klidného a luxusního obytného prostředí. Převaha bílé barvy spolu s velkolepostí mramoru zdvihuje estetiku domu, čímž ho činí skutečným mistrovským dílem moderního klasického designu."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/m2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/m3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/m4.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/m5.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/m6.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/m7.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/m8.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/k9.jpg",
    ]
  },
  {
    name: {
      en: "Sophisticated Harmony - Luxury in Wood and Brown Hues",
      cs: "Sofistikovaná harmonie - Luxus v dřevě a hnědých odstínech"
    },
    category: "Interior",
    year: 2022,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/sl1.jpg",
    description: {
      en: "Venture into a realm of exquisite luxury with this modern, elegant house. A symphony of rich wooden elements and brown tones, this design project captivates with its sophisticated harmony and a tangible sense of comfort. \nThe use of wood as a primary element in the design lends an innate warmth to the space. It's a nod to nature's elegance, seamlessly integrated into the modern architecture of the house. The organic patterns and textures of wood enhance the aesthetic richness of the interiors, creating an ambiance of understated luxury. \nComplementing the wooden elements, the brown color palette brings a depth of character to the design. Ranging from soft, earthy tones to deeper, robust shades, the various hues of brown instill an atmosphere of quiet sophistication and timeless elegance. \nThe sophisticated interplay of wood and brown tones truly makes this house a luxurious haven. It's a sanctuary where modern architecture meets nature's simplicity, creating a soothing and luxurious living environment. This house embodies the essence of modern luxury - a space that is not only aesthetically pleasing but also radiates warmth and tranquility.",
      cs: "Vstupte do světa nádherného luxusu s tímto moderním, elegantním domem. Symfonie bohatých dřevěných prvků a hnědých tónů, tento designový projekt upoutává svou sofistikovanou harmonií a hmatatelným pocitem pohodlí. \nPoužití dřeva jako hlavního prvku v designu dodává prostoru vrozené teplo. Je to poklonění se elegance přírody, bezproblémově integrované do moderní architektury domu. Organické vzory a textury dřeva zvyšují estetickou bohatost interiéru, vytvářejí atmosféru decentního luxusu. \nHnědá barevná škála doplňuje dřevěné prvky a dodává designu hloubku charakteru. Od jemných, zemských tónů po hlubší, robustní odstíny, různé odstíny hnědé vytvářejí atmosféru tiché sofistikovanosti a nadčasové elegance. \nSofistikované prolínání dřeva a hnědých tónů opravdu dělá z tohoto domu luxusní útočiště. Je to svatyně, kde se moderní architektura setkává s jednoduchostí přírody, vytvářející uklidňující a luxusní obytné prostředí. Tento dům vtěluje podstatu moderního luxusu - prostoru, který je nejen esteticky příjemný, ale také vyzařuje teplo a klid."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl4.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl5.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl6.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl7.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl8.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl9.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl10.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl11.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl12.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl13.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl14.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl15.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl16.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/sl17.jpg",
    ]
  },
  {
    name: {
      en: "Cozy Minimalism - The Art of Simplicity in Function and Design",
      cs: "Útulný minimalismus - Umění jednoduchosti ve funkci a designu"
    },
    category: "Interior",
    year: 2022,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/b1.jpg",
    description: {
      en: "Step into a space where tranquility and functionality converge - a cozy bedroom that captures the essence of minimalist design. \nThe design of this bedroom is a testament to the art of simplicity, proving that less truly can be more. It strikes a delicate balance between practicality and style, combining clean lines and a restrained color palette to create a space that exudes calmness and warmth. \nFunctionality is at the core of this design. The thoughtful arrangement of furniture and clever use of storage solutions provide ample space while maintaining a clutter-free environment. Every element serves a purpose, ensuring that the room remains streamlined and devoid of unnecessary distractions. \nThe minimalist design of this cozy bedroom showcases a timeless elegance that does not compromise on comfort. It is an ode to the beauty of simplicity, where every detail is purposefully chosen and carefully placed to create a space that is as serene as it is functional. \nExperience a serene retreat in the heart of your home with this cozy, minimalist bedroom design. It's the perfect space to relax, rejuvenate, and escape the chaos of everyday life.",
      cs: "Vstupte do prostoru, kde se setkávají klid a funkčnost - útulný pokoj, který zachycuje podstatu minimalistického designu. \nDesign tohoto pokoje je výpovědí o umění jednoduchosti, dokazuje, že méně skutečně může být více. Najde jemnou rovnováhu mezi praktičností a stylem, kombinuje čisté linie a zdrženlivou barevnou škálu k vytvoření prostoru, který vyzařuje klid a teplo. \nFunkčnost je v jádru tohoto designu. Promyšlené uspořádání nábytku a chytré využití úložných řešení poskytuje dostatek prostoru a zároveň udržuje prostředí bez nepořádku. Každý prvek má svůj účel, což zajišťuje, že místnost zůstává přehledná a bez zbytečných rušivých prvků. \nMinimalistický design tohoto útulného pokoje předvádí nadčasovou eleganci, která nekompromituje na pohodlí. Je to óda na krásu jednoduchosti, kde je každý detail účelně vybrán a pečlivě umístěn, aby vytvořil prostor, který je stejně klidný, jako je funkční. \nProžijte klidný útočiště v srdci svého domova s tímto útulným, minimalistickým designem pokoje. Je to perfektní prostor pro relaxaci, obnovu energie a únik před chaosem každodenního života."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/b2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/b3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/b4.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/b5.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/b6.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/b7.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/b8.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/b9.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/b10.jpg",
    ]
  },
  {
    name: {
      en: "Fusion of Warmth and Functionality - A Divided Living and Kitchen Space",
      cs: "Fúze tepla a funkčnosti - Obývací pokoj a kuchyň oddělené zdí s umělým krbem"
    },
    category: "Interior",
    year: 2017,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/o1.jpg",
    description: {
      en: "Discover a unique architectural design with this project, where a single space is tastefully divided to create two distinct areas - a living room and a kitchen. The division of these spaces has been executed with a keen understanding of spatial aesthetics and functional requirements, creating a home that is both cozy and efficient. \nThe centerpiece of this design is an artificial fireplace embedded in the dividing wall, serving a dual purpose of aesthetics and space division. This clever feature not only enhances the visual appeal of the space but also creates a warm and inviting atmosphere. The mesmerizing flames of the fireplace provide a comforting ambiance, bridging the gap between the two areas and infusing them with a sense of shared warmth. \nOn one side, the living room offers a comfortable space for relaxation and social interaction, with the fireplace adding to the homely charm. On the other, the kitchen provides an efficient space for culinary activities, with the fireplace lending a cozy restaurant-like atmosphere. \nThis project represents a blend of aesthetic brilliance and functional design. It's a testament to innovative architectural thinking, demonstrating how a single feature can enhance both the visual and practical aspects of a space. The artificial fireplace acts as the heart of the home, spreading warmth and beauty into the living and kitchen spaces. It's a design that encourages social interaction and shared experiences, creating a living environment that is truly harmonious and welcoming.",
      cs: "Objevte jedinečný architektonický design s tímto projektem, kde je jediný prostor vkusně rozdělen na dvě samostatné oblasti - obývací pokoj a kuchyň. Rozdělení těchto prostorů bylo provedeno s důkladným pochopením estetiky prostoru a funkčních požadavků, čímž vznikl domov, který je současně útulný a efektivní. \nStředobodem tohoto designu je umělý krb zabudovaný do dělící stěny, který plní dvojí účel estetiky a dělení prostoru. Tato chytrá funkce nejen zvyšuje vizuální přitažlivost prostoru, ale také vytváří teplou a přívětivou atmosféru. Okouzlující plameny krbu poskytují útulnou atmosféru, překonávají propast mezi oběma oblastmi a naplňují je pocitem sdíleného tepla. \nNa jedné straně obývací pokoj nabízí pohodlné místo pro relaxaci a sociální interakci, přičemž krb přidává k domácímu kouzlu. Na druhé straně kuchyň poskytuje efektivní prostor pro kulinářské aktivity, přičemž krb dodává útulnou atmosféru podobnou restauraci. \nTento projekt představuje směs estetické brilance a funkčního designu. Je to důkaz inovativního architektonického myšlení, které ukazuje, jak může jedna jediná funkce zlepšit jak vizuální, tak praktické aspekty prostoru. Umělý krb působí jako srdce domu, šíří teplo a krásu do obývacího pokoje a kuchyňského prostoru. Je to design, který podporuje sociální interakci a sdílené zážitky, vytváří obytné prostředí, které je opravdu harmonické a přívětivé."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/o2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/o3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/o4.jpg",
    ]
  },
  {
    name: {
      en: "Cozy Efficiency - An A-Frame Cabin with Distinct Functionality",
      cs: "Útulná efektivita - Chata typu A s výraznou funkcionalitou"
    },
    category: "Interior",
    year: 2022,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/a1.jpg",
    description: {
      en: "Welcome to a unique architectural masterpiece – an A-frame cabin that combines compact efficiency with rustic charm. This project showcases a blend of functionality and aesthetic appeal, creating a cozy retreat perfect for a tranquil escape from the hustle and bustle of modern life. \nCrafted with meticulous precision, this cabin exploits the A-frame structure to maximize space and function. Its cleverly designed interiors provide a seamless blend of comfort and practicality, utilizing every inch of the cabin to offer an environment that is both cozy and efficient. \nThe ground floor houses the main living space, featuring a warm and inviting fireplace that acts as the heart of the cabin. This fireplace not only enhances the cabin's rustic charm but also provides a source of heat, making the cabin a perfect winter retreat. \nThe bedroom, located on the second floor, is a testament to the clever use of space. Designed for maximum comfort, the bedroom is a cozy nook that offers spectacular views, adding to the overall experience of living in this unique structure. \nThis A-frame cabin project represents the perfect marriage between functionality and design. It demonstrates how architectural design can work seamlessly with the natural environment, creating a space that is not only visually appealing but also practically efficient. It's a cozy retreat that offers a unique living experience – a perfect blend of comfort, efficiency, and rustic charm.",
      cs: "Vítejte u jedinečného architektonického mistrovského díla - chaty typu A, která kombinuje kompaktní efektivitu s rustikálním šarmem. Tento projekt předvádí směs funkčnosti a estetického půvabu, vytváří útulné útočiště, dokonalé pro klidný únik z ruchu moderního života. \nTato chata je vytvořena s pečlivou přesností, využívá strukturu typu A k maximalizaci prostoru a funkce. Její chytře navržený interiér poskytuje plynulou kombinaci pohodlí a praktičnosti, využívá každý centimetr chaty k nabídce prostředí, které je současně útulné a efektivní. \nPřízemí obsahuje hlavní obytný prostor, kde najdete teplý a přívětivý krb, který je srdcem chaty. Krb nejen zvyšuje rustikální kouzlo chaty, ale také poskytuje zdroj tepla, čímž se chata stává ideálním místem pro zimní útěk. \nLožnice, nacházející se v patře, je dokladem chytrého využití prostoru. Navržená pro maximální pohodlí, ložnice je útulný kout, který nabízí spektakulární výhledy, čímž přidává k celkovému zážitku z bydlení v této jedinečné struktuře. \nTento projekt chaty typu A představuje dokonalé spojení mezi funkcionalitou a designem. Demonstruje, jak může architektonický design bezproblémově pracovat s přírodním prostředím, vytváří prostor, který je nejen vizuálně přitažlivý, ale také prakticky efektivní. Je to útulné útočiště, které nabízí jedinečný bytový zážitek - dokonalou směs pohodlí, efektivity a rustikálního šarmu."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/a2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/a3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/a4.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/a5.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/a6.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/a7.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/a8.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/a9.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/a10.jpg",
    ]
  },
  {
    name: {
      en: "Burst of Vitality - An Elegant Bedroom with an Orange Accent",
      cs: "Výbuch vitality - Elegantní ložnice s oranžovým akcentem"
    },
    category: "Interior",
    year: 2021,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/n1.jpg",
    description: {
      en: "Step into a world of refined sophistication with this project, an elegant bedroom that carries an unexpected yet delightful burst of energy through its vibrant orange accent. \nThis bedroom is a study in balanced contrasts. The soothing neutral tones of the walls and furnishings create a serene backdrop that exudes tranquility and class. This harmonious canvas is then boldly juxtaposed with an infusion of orange, adding an element of surprise that instantly invigorates the space. \nThe orange accents serve a dual purpose - they not only invigorate the room with their vibrancy but also lend a warm, inviting aura. Whether it's an accent wall, decorative pillows, or art pieces, the orange elements bring a sense of vitality and warmth that elevates the overall aesthetic of the bedroom. \nThis bedroom design is the perfect blend of elegance and excitement. It stands as a testament to how an unexpected splash of color can transform a space, turning a classic, sophisticated bedroom into a vibrant sanctuary. This elegant bedroom with an orange accent showcases a daring and exciting approach to interior design, bringing life and vibrancy to the forefront without compromising on elegance or sophistication.",
      cs: "Vstupte do světa rafinované sofistikovanosti s tímto projektem, elegantní ložnice, která přináší neočekávaný, ale příjemný výbuch energie prostřednictvím svého živého oranžového akcentu. \nTato ložnice je studií vyvážených kontrastů. Uklidňující neutrální tóny stěn a zařízení vytvářejí klidné pozadí, které vyzařuje klid a třídu. Toto harmonické plátno je pak odvážně postaveno proti infuzi oranžové, přidává element překvapení, který okamžitě oživuje prostor. \n Oranžové akcenty slouží dvojím účelem - nejen že oživují pokoj svou živostí, ale také působí teplou, přívětivou auru. Ať už jde o akcentovou stěnu, dekorativní polštáře nebo umělecká díla, oranžové prvky přinášejí pocit vitality a tepla, které zvyšuje celkovou estetiku ložnice. \nDesign této ložnice je dokonalou směsí elegance a vzrušení. Stojí jako důkaz toho, jak neočekávaný nářez barvy může proměnit prostor, přeměnit klasickou, sofistikovanou ložnici na živý útočiště. Tato elegantní ložnice s oranžovým akcentem ukazuje odvážný a vzrušující přístup k interiérovému designu, přináší život a vitalitu do popředí, aniž by kompromitovala eleganci nebo sofistikovanost."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/n2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/n3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/n4.jpg",
    ]
  },
  {
    name: {
      en: "Galactic Haven - Kids' Bedrooms in a Star Wars Style",
      cs: "Galaktický přístav - Dětské ložnice ve stylu Star Wars"
    },
    category: "Interior",
    year: 2020,
    mainPicture: "https://khan-project.s3.eu-central-1.amazonaws.com/l1.jpg",
    description: {
      en: "Embark on an interstellar adventure with this project - a whimsical kids' bedroom designed in the legendary Star Wars style. This space has been thoughtfully curated to bring the iconic sci-fi universe into your child's daily life, sparking their imagination and transporting them to a galaxy far, far away. \nFeaturing distinctive Star Wars-inspired décor, this bedroom aims to create a unique and inspiring environment that encourages children to dream big. The interiors are filled with rich detail, from replica starships to murals of epic space battles. Each element contributes to the overall theme, keeping the spirit of Star Wars alive. \nThe color palette draws inspiration from the films, incorporating deep blues of the galaxy, the earthy tones of desert planets, and the stark contrast of the light and dark side. Comfortable and functional furniture, including themed beds, are designed to resemble the iconic starships, making the room as practical as it is exciting. \nThis Star Wars themed bedroom showcases the magic of imaginative design. By incorporating elements from a beloved franchise, the space provides a unique setting that stirs creativity, encourages play and fosters a love of space exploration. Whether your child dreams of joining the Rebellion or ruling the Galactic Empire, this room serves as a perfect canvas for their star-studded dreams.",
      cs: "Vydejte se na meziplanetární dobrodružství s tímto projektem - roztomilou dětskou ložnicí navrženou v legendárním stylu Star Wars. Tento prostor byl pečlivě vytvořen tak, aby ikonický sci-fi vesmír přinesl do každodenního života vašeho dítěte, probudil jejich fantazii a přepravil je do galaxie daleko, daleko. \nS výraznou výzdobou inspirovanou Star Wars, tato ložnice se snaží vytvořit jedinečné a inspirující prostředí, které povzbuzuje děti k velkým snům. Interiér je plný bohatých detailů, od replik hvězdných lodí po nástěnné malby epických vesmírných bitev. Každý prvek přispívá k celkové tématice, udržuje ducha Star Wars naživu. \nBarevná paleta čerpá inspiraci z filmů, začleněním hlubokých modrých barev galaxie, zemité tóny pouštních planet a nápadný kontrast světlé a temné strany. Pohodlný a funkční nábytek, včetně tematických postelí, je navržen tak, aby připomínal ikonické hvězdné lodě, čímž je místnost praktická stejně jako vzrušující. \nTato ložnice ve stylu Star Wars předvádí kouzlo imaginativního designu. Začleněním prvků z oblíbené série poskytuje prostor jedinečné prostředí, které pobízí kreativitu, podporuje hru a posiluje lásku k průzkumu vesmíru. Ať už vaše dítě sní o tom, že se připojí k Povstání nebo ovládne Galaktické impérium, tento pokoj slouží jako dokonalé plátno pro jejich hvězdné sny."
    },
    gallery: [
      "https://khan-project.s3.eu-central-1.amazonaws.com/l2.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/l3.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/l4.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/l5.jpg",
      "https://khan-project.s3.eu-central-1.amazonaws.com/l6.jpg",
    ]
  },
]

// for (project of projects) {
//   const p = new Project(project);

//   p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// }

const p = new Project(projects[9]);

p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });
