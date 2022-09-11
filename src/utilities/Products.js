const products = [
    {
        id: 1,
        idItem: 1,
        brand: "Specialized",
        model: "Demo Race",
        price: 7100,
        picture: "https://assets.specialized.com/i/specialized/94522-00_DEMO-RACE-REDONYX-FLORED-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
        description: "La velocidad máxima siempre ha sido el objetivo de la Demo, y con la Demo Race no es diferente. Con un cuadro rediseñado para poder adaptar varios tamaños de rueda trasera, permite aprovechar la máxima tracción de una rueda delantera de 29 pulgadas con la maniobrabilidad de una rueda trasera de 27…"
    },
    {
        id: 2,
        idItem: 2,
        brand: "Specialized",
        model: "Status 160",
        price: 3000,
        picture: "https://assets.specialized.com/i/specialized/93722-72_STATUS-160-WHTSGE-GUN_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
        description:"La Status 160 puede ser una bicicleta completamente nueva, pero en realidad es una forma completamente nueva de pensar sobre cómo divertirse al máximo sobre dos ruedas, incluso si eso significa que son de diferentes tamaños."
    },
    {
        id: 3,
        idItem: 3,
        brand: "Specialized",
        model: "Stumpjumper Comp",
        price: 5000,
        picture: "https://assets.specialized.com/i/specialized/93322-50_SJ-COMP-REDWD-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
        description: "¡Los fanáticos del metal están de enhorabuena! La Stumpjumper Comp Alloy continúa con uno de los cuadros de aleación más avanzados jamás desarrollados. Desde el diseño asimétrico del cuadro, que incluye la cinemática de suspensión refinada y la geometría completamente nueva, hasta un kit de construcción que logra la combinación óptima de rendimiento y valor, es metal, pero no es heavy metal..."
    },
    {
        id: 4,
        idItem: 4,
        brand: "Specialized",
        model: "Enduro LTD",
        price: 6600,
        picture: "https://assets.specialized.com/i/specialized/93622-32_ENDURO-LTD-DOP-SND_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
        description:"La Enduro LTD combina un rendimiento en descenso incomparable con una aceleración sorprendentemente rápida. La LTD ofrece una velocidad vertiginosa, una gran longitud de recorrido y una suspensión Ohlins que ofrece un gran rendimiento. Prepárate para ir rápido…"
    },
    {
        id: 5,
        idItem: 5,
        brand: "Canyon",
        model: "Strive CRF",
        price: 6200,
        picture: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwffb1434c/images/full/full_2022_/2022/full_2022_strive-cfr_3195_bk-sr_P5.jpg?sw=503&sfrm=png&q=90&bgcolor=F4F4F4",
        description:"¿Quieres una bicicleta para ganar las carreras de enduro más exigentes? La acabas de encontrar. Pasa al siguiente nivel con la Strive CFR y su tecnología Shapeshifter."
    },
    {
        id: 6,
        idItem: 6,
        brand: "Canyon",
        model: "Sender CFR 29 TLD",
        price: 4400,
        picture: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwa9b8ae08/images/full/full_2022_/2022/full_2022_sender-cfr-tld_3207_gr-wh_P5.jpg?sw=503&sfrm=png&q=90&bgcolor=F4F4F4",
        description:"¿Qué pasa cuando se juntan los mejores ingenieros de Canyon con los diseñadores de Troy Lee? Nace una bicicleta de descenso única, increíblemente rápida y atractiva. La Sender CFR LTD se ha desarrollado para ganar en los circuitos DH más exigentes."
    },
    {
        id: 7,
        idItem: 7,
        brand: "Canyon",
        model: "Torque 29 CF 7",
        price: 4400,
        picture: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwd9059670/images/full/full_2022_/2022/full_2022_torque-cf-7_2986_YE_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F4F4F4",
        description:"Preparada para todo. Nuestra máquina gravity definitiva, con todas las características que la han convertido en un gran éxito del mtb, ahora es aún mejor. La nueva Torque CF 7 está disponible con ruedas de 29” o 27.5” y lista para darlo todo en el bikepark y en los descensos más rápidos."
    },
    {
        id: 8,
        idItem: 8,
        brand: "Canyon",
        model: "Spectral 29 CF 8",
        price: 4500,
        picture: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw9cd674eb/images/full/full_2022_/2022/full_2022_spectral-cf-8_3189_gr-gr_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F4F4F4",
        description:"Senderos con flow o zonas técnicas, la Spectral CF 8 está preparada para todo. Una bicicleta con gran capacidad equipada para moverse por cualquier sitio y bajo cualquier circunstancia."
    },
];

export default products;
