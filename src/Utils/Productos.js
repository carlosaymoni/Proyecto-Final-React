const productos = [
    {
        id:'1',
        nombre: 'BlackWidow',
        precio: 2500,
        categoria: 'Marvel',
        stock: '7',
        img:'./images/BlackWidow-Tall.jpeg',
        detail: 'El personaje fue presentado como una espía rusa, una antagonista del superhéroe Iron Man. Más tarde, desertó a los Estados Unidos, convirtiéndose en una agente de la organización ficticia S.H.I.E.L.D., y miembro del equipo de superhéroes Los Vengadores.'
    },
    {
        id:'2',
        nombre: 'IronMan',
        precio: 2000,
        categoria: 'Marvel',
        stock: '7',
        img: './images/IronMan-Tall.jpeg',
        detail: 'Iron Man es uno de los grandes superhéroes de Marvel, inició la revolución en el mundo de los cómics. Junto a Ant-Man (El Hombre Hormiga), El Poderoso Thor, La Avispa y El Increíble Hulk, fundó Los Vengadores, erigiéndose como un icono de Marvel. Nos referimos claro a El Invencible Iron Man alias del industrial y científico Tony Stark ',
    },
    {
        id:'3',
        nombre: 'SpiderMan',
        precio: 3000,
        categoria: 'Marvel',
        stock: '5',
        img: './images/SpiderMan-Tall.jpeg',
        detail: 'Spiderman es de un modo seguro el súper héroe más importante y famoso de la editorial Marvel Comics. Nacido en el 1962 para obra de Stan Lee, Spiderman es la historia del tímido estudiante Peter Parker que viene mordisco de una araña contaminada de los radios radiactivos en el curso de un experimento científico.'
    },
    {
        id:'4',
        nombre: 'Thor',
        precio: 2800,
        categoria: 'Marvel',
        stock: '7',
        img: './images/Thor-Tall.jpeg',
        detail: 'Thor era el dios de la guerra y la lucha salvaje. Era el hijo de Odin, y el más fuerte de todos los dioses . Siempre llevaba su martillo Mjølner que tenía la maravillosa capacidad de siempre dar en el blanco para después regresar a su dueño.'
    },
    {
        id:'5',
        nombre: 'Capitán América',
        precio: 2500,
        categoria: 'Marvel',
        stock: '6',
        img:'./images/Capitan-america-Tall.jpeg',
        detail: 'El Capitán América fue diseñado como un supersoldado patriota que luchaba frecuentemente contra las potencias del Eje en la Segunda Guerra Mundial, y fue el personaje más popular de Timely Comics durante el período de guerra.'
    },
    {
        id:'6',
        nombre: 'Thanos',
        precio: 2000,
        categoria: 'Marvel',
        stock: '15',
        img: './images/Thanos-Tall.jpeg',
        detail: 'Thanos es un Titán que nació en el planeta con el mismo nombre. Originalmente fue creado por Jim Starlin y Mike Friedrich como uno de los enemigos de Iron-Man en 1973. Sin embargo, poco a poco este personaje evolucionaría para convertirse en uno de los villanos más temidos de todo el universo.'
    },
    {
        id:'7',
        nombre: 'BlackPanther',
        precio: 3000,
        categoria: 'Marvel',
        stock: '17',
        img: './images/BlackPanther-Tall.jpeg',
        detail: 'T’Challa es el alias “civil” de Black Panther. Es el rey de la nación africana de Wakanda, una pequeña nación que solo existe en los relatos ficticios de Marvel. Estuvo muchos años casado con Ororo (Storm) hasta los acontecimientos de Avengers vs X-Men, donde escogió el bando contrario al de su esposa. Sus habilidades van desde la fuerza sobrehumana hasta los súper reflejos, sin embargo, es su gran astucia (de pantera) lo que lo vuelve distintivo. Muchos fanáticos inclusive comparan su intelecto al de Batman, el Cruzado Encapuchado de DC.'
    },
    {
        id:'8',
        nombre: 'Anakin',
        precio: 2800,
        categoria: 'Star Wars',
        stock: '7',
        img: './images/Anakin-Tall.jpeg',
        detail: 'Anakin Skywalker es una figura clave en la saga Star Wars™. Este Caballero Jedi de la República Galáctica que no conoció el miedo fue un heroico comandante en la Guerra de los Clones antes de convertirse al lado oscuro y ser rebautizado como Darth Vader.'
    },
    {
        id:'9',
        nombre: 'BobaFett',
        precio: 2500,
        categoria: 'Star Wars',
        stock: '15',
        img:'./images/BobaFett-Tall.jpeg',
        detail: 'Boba Fett es uno de los cazarrecompensas más renombrados de la galaxia; es experto en artes marciales y armamento.'
    },
    {
        id:'10',
        nombre: 'Chewbacca',
        precio: 2000,
        categoria: 'Star Wars',
        stock: '7',
        img: './images/Chewbacca-Tall.jpeg',
        detail: 'Amigo leal de Han Solo y copiloto del Halcón Milenario, Chewbacca es un Wookiee que tiene 200 años y una imponente estatura de 2,5 m. Reconocible al instante con su largo pelo castaño y los gorjeos de su voz'
    },
    {
        id:'11',
        nombre: 'DarthVader',
        precio: 3000,
        categoria: 'Star Wars',
        stock: '3',
        img: './images/DarthVader-Tall.jpeg',
        detail: 'Darth Vader, el famoso Lord Sith, apareció por primera vez en las pantallas de cine en Star Wars: Episodio IV – Una Nueva Esperanza (1977). Pronto se reveló que era un villano despiadado, decidido a cazar a los enemigos del Imperio. Bajo la instrucción del malvado Emperador Galáctico Palpatine, Vader, con su misteriosa máscara y respiración mecánica, aterroriza a todo aquel que se encuentra.'
    },
    {
        id:'12',
        nombre: 'HanSolo',
        precio: 2800,
        categoria: 'Star Wars',
        stock: '7',
        img: './images/HanSolo-Tall.jpeg',
        detail: 'De contrabandista canalla pasó a ser héroe rebelde. Han Solo™ siempre es valiente y audaz en la batalla.Han Solo ha sido un personaje clave en la saga Star Wars™ desde el lanzamiento en 1977 de Star Wars: Episodio IV – Una Nueva Esperanza. Han Solo es un personaje central en la historia de la trilogía original. Apareció tanto en Star Wars: Episodio V – El Imperio Contraataca (1980) como en Star Wars: Episodio VI – El Regreso del Jedi (1983).'
    },
    {
        id:'13',
        nombre: 'Luke',
        precio: 2500,
        categoria: 'Star Wars',
        stock: '7',
        img:'./images/Luke-Tall.jpeg',
        detail: 'Luke Skywalker™ es el humilde muchacho granjero que asciende hasta convertirse en el Jedi™ más renombrado de toda la galaxia.'
    },
    {
        id:'14',
        nombre: 'Palpatine',
        precio: 2000,
        categoria: 'Star Wars',
        stock: '10',
        img: './images/Palpatine-Tall.jpeg',
        detail: 'Puede que sea el personaje más malvado de la historia de Star Wars™; el Emperador Palpatine (también conocido por su nombre Sith, Darth Sidious) envía ondas de destrucción por toda la galaxia. Este genio malvado tiene grandes poderes. Como el lado oscuro de la Fuerza es tan poderoso en su interior, puede destruir a sus enemigos disparando mortíferos rayos de la Fuerza con sus dedos.'
    },
    {
        id:'15',
        nombre: 'Yoda',
        precio: 3000,
        categoria: 'Star Wars',
        stock: '5',
        img: './images/Yoda-Tall.jpeg',
        detail: 'Este legendario Maestro Jedi ha entrenado estudiantes Jedi por más de 800 años. ¡En este personaje la Fuerza es poderosa!, Con sus sabios dichos y su naturaleza pacífica, Yoda es uno de los personajes más amados de la saga Star Wars™. Y, con sus 900 años, ¡también es uno de los más viejos!'
    },
    {
        id:'16',
        nombre: 'Mandalorian',
        precio: 2800,
        categoria: 'Star Wars',
        stock: '7',
        img: './images/Mandalorian-Tall.jpeg',
        detail: 'El protagonista de la serie para televisión Star Wars: The Mandalorian es un famoso cazarrecompensas a quien contrata un misterioso cliente para capturar a un “activo” que resulta ser el Niño. A lo largo de la historia, descubrimos que el Mandaloriano es un huérfano adoptado de pequeño por una tribu de guerreros del planeta Mandalore, quienes lo criaron e instruyeron en sus particulares costumbres. El Mandaloriano no se quita el casco casi nunca, ya que ello infringiría el estricto código por el que se rige la tribu de guerreros de Mandalore a la que pertenece.'
    }
]

export default productos;