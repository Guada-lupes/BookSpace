const booksData = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    editorial: "Sudamericana",
    genero: "Realismo mágico",
    isbn: "9780307474728",
    rating: 4.7,
    imagen:
      "https://cdn.pixabay.com/photo/2018/05/19/19/58/ruin-3414235_1280.jpg",
    sinopsis:
      "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal.",
  },
  {
    id: 2,
    titulo: "El laberinto de los espíritus",
    autor: "Carlos Ruiz Zafón",
    editorial: "Planeta",
    genero: "Misterio",
    isbn: "9788408173724",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2019/06/26/14/51/labyrinth-4300600_640.jpg",
    sinopsis:
      "El laberinto de los espíritus es la cuarta y última entrega de la serie El cementerio de los libros olvidados, escrita por Carlos Ruiz Zafón. Cierra la saga con un emocionante misterio.",
  },
  {
    id: 3,
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    editorial: "Planeta",
    genero: "Misterio",
    isbn: "9788408079545",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2019/03/14/16/08/nature-4055210_1280.jpg",
    sinopsis:
      "La sombra del viento es una novela de misterio y suspense ambientada en la Barcelona de mediados del siglo XX. Es la primera entrega de la serie El cementerio de los libros olvidados.",
  },
  {
    id: 4,
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    editorial: "Sudamericana",
    genero: "Literatura experimental",
    isbn: "9788432216584",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2018/12/16/14/53/hopscotch-3878608_1280.jpg",
    sinopsis:
      "Rayuela es una novela del escritor argentino Julio Cortázar. Es conocida por su estructura no lineal, que permite al lector elegir el orden en que desea leer los capítulos.",
  },
  {
    id: 5,
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    editorial: "Emecé",
    genero: "Cuentos",
    isbn: "9788426413112",
    rating: 4.7,
    imagen:
      "https://cdn.pixabay.com/photo/2022/08/29/00/31/sunrise-7417746_1280.jpg",
    sinopsis:
      "Ficciones es una colección de cuentos del escritor argentino Jorge Luis Borges. Incluye relatos como 'La biblioteca de Babel' y 'El jardín de senderos que se bifurcan'.",
  },
  {
    id: 6,
    titulo: "1984",
    autor: "George Orwell",
    editorial: "Secker & Warburg",
    genero: "Ciencia ficción",
    isbn: "9780451524935",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2022/11/25/23/11/big-brother-7617039_1280.png",
    sinopsis:
      "1984 es una novela distópica escrita por George Orwell. Presenta un futuro totalitario donde el gobierno controla todos los aspectos de la vida de los ciudadanos.",
  },
  {
    id: 7,
    titulo: "El amor en los tiempos del cólera",
    autor: "Gabriel García Márquez",
    editorial: "Oveja Negra",
    genero: "Novela",
    isbn: "9789580600184",
    rating: 4.4,
    imagen:
      "https://cdn.pixabay.com/photo/2023/01/12/15/12/couple-7714357_1280.jpg",
    sinopsis:
      "El amor en los tiempos del cólera es una novela de Gabriel García Márquez que narra una historia de amor que perdura a lo largo de varias décadas.",
  },
  {
    id: 8,
    titulo: "La casa de los espíritus",
    autor: "Isabel Allende",
    editorial: "Plaza & Janés",
    genero: "Realismo mágico",
    isbn: "9788401337201",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2018/04/10/23/46/architecture-3309203_1280.jpg",
    sinopsis:
      "La casa de los espíritus es la primera novela de Isabel Allende. Narra la historia de varias generaciones de una familia chilena, combinando elementos de realismo mágico.",
  },
  {
    id: 9,
    titulo: "El laberinto de la soledad",
    autor: "Octavio Paz",
    editorial: "Fondo de Cultura Económica",
    genero: "Ensayo",
    isbn: "9789681601191",
    rating: 4.3,
    imagen:
      "https://cdn.pixabay.com/photo/2022/12/07/08/39/labyrinth-7640561_1280.jpg",
    sinopsis:
      "El laberinto de la soledad es un ensayo del escritor mexicano Octavio Paz. Explora la identidad mexicana y su relación con la historia y la cultura.",
  },
  {
    id: 10,
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    editorial: "La Oveja Negra",
    genero: "Novela",
    isbn: "9789580600368",
    rating: 4.4,
    imagen:
      "https://cdn.pixabay.com/photo/2024/09/15/09/29/ai-generated-9048740_1280.jpg",
    sinopsis:
      "Crónica de una muerte anunciada es una novela de Gabriel García Márquez que relata los eventos que llevaron al asesinato de Santiago Nasar, un crimen que todos sabían que iba a ocurrir.",
  },
  {
    id: 11,
    titulo: "El túnel",
    autor: "Ernesto Sábato",
    editorial: "Sur",
    genero: "Novela",
    isbn: "9789500727871",
    rating: 4.2,
    imagen:
      "https://cdn.pixabay.com/photo/2021/11/11/14/34/tunnel-6786462_1280.jpg",
    sinopsis:
      "El túnel es una novela del escritor argentino Ernesto Sábato. Narra la historia de Juan Pablo Castel, un pintor obsesionado con una mujer, y explora temas como la soledad y la incomunicación.",
  },
  {
    id: 12,
    titulo: "Pedro Páramo",
    autor: "Juan Rulfo",
    editorial: "Fondo de Cultura Económica",
    genero: "Realismo mágico",
    isbn: "9789681601207",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2017/09/24/23/55/saint-peters-cathedral-2783637_1280.jpg",
    sinopsis:
      "Pedro Páramo es una novela del escritor mexicano Juan Rulfo. Considerada una obra maestra, combina elementos de realismo mágico y narra la historia de un hombre que busca a su padre en un pueblo fantasma.",
  },
  {
    id: 13,
    titulo: "La ciudad y los perros",
    autor: "Mario Vargas Llosa",
    editorial: "Seix Barral",
    genero: "Novela",
    isbn: "9788432216485",
    rating: 4.4,
    imagen:
      "https://cdn.pixabay.com/photo/2021/01/09/19/45/street-dogs-5903305_1280.jpg",
    sinopsis:
      "La ciudad y los perros es la primera novela del escritor peruano Mario Vargas Llosa. Ambientada en un colegio militar, explora temas como la violencia, la amistad y la autoridad.",
  },
  {
    id: 14,
    titulo: "El aleph",
    autor: "Jorge Luis Borges",
    editorial: "Emecé",
    genero: "Cuentos",
    isbn: "9788426413129",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2021/08/12/06/08/mathematics-6540008_1280.jpg",
    sinopsis:
      "El aleph es una colección de cuentos del escritor argentino Jorge Luis Borges. Incluye relatos como 'El inmortal' y 'El Aleph', que exploran temas como el infinito y la eternidad.",
  },
  {
    id: 15,
    titulo: "Los detectives salvajes",
    autor: "Roberto Bolaño",
    editorial: "Anagrama",
    genero: "Novela",
    isbn: "9788433968763",
    rating: 4.3,
    imagen:
      "https://cdn.pixabay.com/photo/2014/03/04/15/10/elephants-279505_1280.jpg",
    sinopsis:
      "Los detectives salvajes es una novela del escritor chileno Roberto Bolaño. Narra la historia de dos poetas que buscan a una misteriosa escritora desaparecida en México.",
  },
  {
    id: 16,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    editorial: "Reynal & Hitchcock",
    genero: "Literatura infantil",
    isbn: "9780156012195",
    rating: 4.8,
    imagen:
      "https://cdn.pixabay.com/photo/2020/05/29/15/09/the-little-prince-5235474_1280.jpg",
    sinopsis:
      "El principito es una obra del escritor francés Antoine de Saint-Exupéry. A través de una narrativa poética, explora temas como el amor, la amistad y la pérdida.",
  },
  {
    id: 17,
    titulo: "La fiesta del chivo",
    autor: "Mario Vargas Llosa",
    editorial: "Alfaguara",
    genero: "Novela",
    isbn: "9788420442145",
    rating: 4.4,
    imagen:
      "https://cdn.pixabay.com/photo/2013/11/08/05/58/domestic-goat-207309_1280.jpg",
    sinopsis:
      "La fiesta del chivo es una novela del escritor peruano Mario Vargas Llosa. Basada en hechos reales, narra la dictadura de Rafael Trujillo en la República Dominicana.",
  },
  {
    id: 18,
    titulo: "El nombre de la rosa",
    autor: "Umberto Eco",
    editorial: "Lumen",
    genero: "Novela",
    isbn: "9788426413136",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2018/08/08/20/41/rose-3593112_1280.jpg",
    sinopsis:
      "El nombre de la rosa es una novela del escritor italiano Umberto Eco. Ambientada en un monasterio medieval, combina elementos de misterio, filosofía y teología.",
  },
  {
    id: 19,
    titulo: "La tregua",
    autor: "Mario Benedetti",
    editorial: "Alfaguara",
    genero: "Novela",
    isbn: "9788420442152",
    rating: 4.2,
    imagen:
      "https://cdn.pixabay.com/photo/2016/12/16/11/44/war-1911176_1280.jpg",
    sinopsis:
      "La tregua es una novela del escritor uruguayo Mario Benedetti. Narra la historia de un hombre viudo que encuentra un nuevo amor, pero debe enfrentar las dificultades de la vida.",
  },
  {
    id: 20,
    titulo: "El retrato de Dorian Gray",
    autor: "Oscar Wilde",
    editorial: "Lippincott's Monthly Magazine",
    genero: "Novela",
    isbn: "9780141439570",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2020/02/13/05/13/assassins-creed-4844499_1280.jpg",
    sinopsis:
      "El retrato de Dorian Gray es una novela del escritor irlandés Oscar Wilde. Explora temas como la vanidad, la moral y la corrupción a través de la historia de un joven que permanece joven mientras su retrato envejece.",
  },
  {
    id: 21,
    titulo: "El perfume",
    autor: "Patrick Süskind",
    editorial: "Diogenes Verlag",
    genero: "Novela",
    isbn: "9788420412148",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2017/03/08/13/26/attar-2126745_1280.jpg",
    sinopsis:
      "El perfume es una novela del escritor alemán Patrick Süskind. Narra la historia de Jean-Baptiste Grenouille, un hombre obsesionado con crear el perfume perfecto, incluso a costa de cometer crímenes.",
  },
  {
    id: 22,
    titulo: "El código Da Vinci",
    autor: "Dan Brown",
    editorial: "Doubleday",
    genero: "Suspense",
    isbn: "9780307474278",
    rating: 4.2,
    imagen:
      "https://cdn.pixabay.com/photo/2021/11/27/18/07/vintage-6828672_1280.jpg",
    sinopsis:
      "El código Da Vinci es una novela de suspense del escritor estadounidense Dan Brown. Combina elementos de misterio, arte y religión en una trama llena de giros inesperados.",
  },
  {
    id: 23,
    titulo: "El guardián entre el centeno",
    autor: "J.D. Salinger",
    editorial: "Little, Brown and Company",
    genero: "Novela",
    isbn: "9780316769488",
    rating: 4.3,
    imagen:
      "https://cdn.pixabay.com/photo/2021/06/30/04/18/rye-6375839_1280.jpg",
    sinopsis:
      "El guardián entre el centeno es una novela del escritor estadounidense J.D. Salinger. Narra las experiencias de Holden Caulfield, un adolescente que cuestiona la sociedad y la hipocresía adulta.",
  },
  {
    id: 24,
    titulo: "El hobbit",
    autor: "J.R.R. Tolkien",
    editorial: "George Allen & Unwin",
    genero: "Fantasía",
    isbn: "9788445000666",
    rating: 4.7,
    imagen:
      "https://cdn.pixabay.com/photo/2019/11/08/20/54/ring-4612457_1280.jpg",
    sinopsis:
      "El hobbit es una novela de fantasía del escritor británico J.R.R. Tolkien. Narra las aventuras de Bilbo Bolsón, un hobbit que se embarca en una misión para recuperar un tesoro custodiado por un dragón.",
  },
  {
    id: 25,
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    editorial: "George Allen & Unwin",
    genero: "Fantasía",
    isbn: "9788445000659",
    rating: 4.8,
    imagen:
      "https://cdn.pixabay.com/photo/2015/09/21/00/51/wedding-rings-949106_1280.jpg",
    sinopsis:
      "El señor de los anillos es una trilogía de novelas de fantasía escrita por J.R.R. Tolkien. Narra la lucha por destruir un anillo mágico que podría otorgar el poder absoluto a su dueño.",
  },
  {
    id: 26,
    titulo: "El viejo y el mar",
    autor: "Ernest Hemingway",
    editorial: "Charles Scribner's Sons",
    genero: "Novela",
    isbn: "9780684801223",
    rating: 4.4,
    imagen:
      "https://cdn.pixabay.com/photo/2019/02/21/03/39/the-old-man-and-the-sea-4010582_640.jpg",
    sinopsis:
      "El viejo y el mar es una novela del escritor estadounidense Ernest Hemingway. Narra la historia de un viejo pescador que lucha por capturar un enorme pez en el mar.",
  },
  {
    id: 27,
    titulo: "Ensayo sobre la ceguera",
    autor: "José Saramago",
    editorial: "Caminho",
    genero: "Novela",
    isbn: "9788420442169",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2014/04/04/18/10/laboratory-313864_1280.jpg",
    sinopsis:
      "Ensayo sobre la ceguera es una novela del escritor portugués José Saramago. Explora cómo una epidemia de ceguera afecta a la sociedad y revela los aspectos más oscuros de la naturaleza humana.",
  },
  {
    id: 28,
    titulo: "La insoportable levedad del ser",
    autor: "Milan Kundera",
    editorial: "Tusquets",
    genero: "Novela",
    isbn: "9788472234836",
    rating: 4.3,
    imagen:
      "https://cdn.pixabay.com/photo/2016/08/01/13/30/dog-1561018_1280.jpg",
    sinopsis:
      "La insoportable levedad del ser es una novela del escritor checo Milan Kundera. Explora temas como el amor, la libertad y el significado de la existencia a través de las vidas de cuatro personajes.",
  },
  {
    id: 29,
    titulo: "La metamorfosis",
    autor: "Franz Kafka",
    editorial: "Kurt Wolff Verlag",
    genero: "Novela",
    isbn: "9788420666436",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2017/03/07/11/44/cocoons-2123742_1280.jpg",
    sinopsis:
      "La metamorfosis es una novela del escritor checo Franz Kafka. Narra la historia de Gregor Samsa, un hombre que despierta convertido en un insecto gigante, y cómo este cambio afecta su vida y su familia.",
  },
  {
    id: 30,
    titulo: "Crimen y castigo",
    autor: "Fiódor Dostoyevski",
    editorial: "The Russian Messenger",
    genero: "Novela",
    isbn: "9788420666443",
    rating: 4.7,
    imagen:
      "https://cdn.pixabay.com/photo/2014/01/31/22/37/fingerprint-255904_1280.jpg",
    sinopsis:
      "Crimen y castigo es una novela del escritor ruso Fiódor Dostoyevski. Narra la historia de Rodión Raskólnikov, un estudiante que comete un asesinato y lucha con su conciencia y la justicia.",
  },
  {
    id: 31,
    titulo: "El gran Gatsby",
    autor: "F. Scott Fitzgerald",
    editorial: "Charles Scribner's Sons",
    genero: "Novela",
    isbn: "9780743273565",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2022/06/29/15/28/woman-7292005_1280.jpg",
    sinopsis:
      "El gran Gatsby es una novela del escritor estadounidense F. Scott Fitzgerald. Explora temas como el sueño americano, la riqueza y la decadencia en la década de 1920.",
  },
  {
    id: 32,
    titulo: "Matar a un ruiseñor",
    autor: "Harper Lee",
    editorial: "J.B. Lippincott & Co.",
    genero: "Novela",
    isbn: "9780061120084",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2018/06/16/19/41/nightingale-3479373_1280.jpg",
    sinopsis:
      "Matar a un ruiseñor es una novela de la escritora estadounidense Harper Lee. Narra la historia de un abogado que defiende a un hombre negro acusado injustamente en el sur de Estados Unidos.",
  },
  {
    id: 33,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    editorial: "T. Egerton, Whitehall",
    genero: "Novela",
    isbn: "9780141439518",
    rating: 4.7,
    imagen:
      "https://cdn.pixabay.com/photo/2015/10/08/22/30/woman-978533_1280.jpg",
    sinopsis:
      "Orgullo y prejuicio es una novela de la escritora británica Jane Austen. Narra la historia de Elizabeth Bennet y su relación con el señor Darcy, explorando temas como el amor, el matrimonio y la clase social.",
  },
  {
    id: 34,
    titulo: "Rebelión en la granja",
    autor: "George Orwell",
    editorial: "Secker & Warburg",
    genero: "Satira política",
    isbn: "9780451526342",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2021/09/28/14/39/horse-6664660_1280.jpg",
    sinopsis:
      "Rebelión en la granja es una novela satírica del escritor británico George Orwell. Usa animales para representar la corrupción del poder y la revolución rusa.",
  },
  {
    id: 35,
    titulo: "El alquimista",
    autor: "Paulo Coelho",
    editorial: "HarperCollins",
    genero: "Novela",
    isbn: "9780061122415",
    rating: 4.4,
    imagen:
      "https://cdn.pixabay.com/photo/2017/03/15/16/27/alchemy-2146678_1280.jpg",
    sinopsis:
      "El alquimista es una novela del escritor brasileño Paulo Coelho. Narra la historia de Santiago, un joven pastor que emprende un viaje en busca de su tesoro personal y su destino.",
  },
  {
    id: 36,
    titulo: "Las uvas de la ira",
    autor: "John Steinbeck",
    editorial: "The Viking Press",
    genero: "Novela",
    isbn: "9780143039433",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2016/03/27/17/14/grapes-1283162_1280.jpg",
    sinopsis:
      "Las uvas de la ira es una novela del escritor estadounidense John Steinbeck. Narra la historia de una familia que emigra a California durante la Gran Depresión en busca de una vida mejor.",
  },
  {
    id: 37,
    titulo: "El león, la bruja y el armario",
    autor: "C.S. Lewis",
    editorial: "Geoffrey Bles",
    genero: "Fantasia",
    isbn: "9780064471046",
    rating: 4.7,
    imagen:
      "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg",
    sinopsis:
      "El león, la bruja y el armario es una novela de fantasía del escritor británico C.S. Lewis. Es la segunda entrega de la serie Las crónicas de Narnia y narra las aventuras de cuatro niños en un mundo mágico.",
  },
  {
    id: 38,
    titulo: "El silmarillion",
    autor: "J.R.R. Tolkien",
    editorial: "George Allen & Unwin",
    genero: "Fantasia",
    isbn: "9788445071765",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2015/07/01/17/33/mount-fuji-827744_1280.jpg",
    sinopsis:
      "El silmarillion es una obra del escritor británico J.R.R. Tolkien. Es una colección de historias que narran la creación del mundo y los eventos que preceden a El señor de los anillos.",
  },
  {
    id: 39,
    titulo: "El mundo de Sofía",
    autor: "Jostein Gaarder",
    editorial: "Aschehoug",
    genero: "Novela",
    isbn: "9788478448152",
    rating: 4.4,
    imagen:
      "https://cdn.pixabay.com/photo/2020/03/14/13/38/hagia-sophia-mosque-4930646_1280.jpg",
    sinopsis:
      "El mundo de Sofía es una novela del escritor noruego Jostein Gaarder. Combina ficción con filosofía, narrando la historia de una joven que descubre los grandes pensadores de la historia.",
  },
  {
    id: 40,
    titulo: "Los pilares de la Tierra",
    autor: "Ken Follett",
    editorial: "Macmillan",
    genero: "Novela",
    isbn: "9788401337218",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2013/07/25/11/59/pillars-166956_1280.jpg",
    sinopsis:
      "Los pilares de la Tierra es una novela histórica del escritor británico Ken Follett. Narra la construcción de una catedral en la Inglaterra del siglo XII y las vidas de quienes la rodean.",
  },
  {
    id: 41,
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    editorial: "DAW Books",
    genero: "Fantasia",
    isbn: "9788401337225",
    rating: 4.7,
    imagen:
      "https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928_1280.jpg",
    sinopsis:
      "El nombre del viento es la primera entrega de la trilogía Crónica del asesino de reyes, escrita por Patrick Rothfuss. Narra la historia de Kvothe, un hombre legendario que relata su vida.",
  },
  {
    id: 42,
    titulo: "El resplandor",
    autor: "Stephen King",
    editorial: "Doubleday",
    genero: "Terror",
    isbn: "9788401337232",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2015/10/30/18/09/sunrise-1014550_1280.jpg",
    sinopsis:
      "El resplandor es una novela de terror del escritor estadounidense Stephen King. Narra la historia de una familia que se muda a un hotel aislado, donde fuerzas sobrenaturales los acechan.",
  },
  {
    id: 43,
    titulo: "El psicoanalista",
    autor: "John Katzenbach",
    editorial: "Ediciones B",
    genero: "Thriller",
    isbn: "9788401337249",
    rating: 4.3,
    imagen:
      "https://cdn.pixabay.com/photo/2024/03/30/19/10/ai-generated-8665269_1280.png",
    sinopsis:
      "El psicoanalista es un thriller psicológico de John Katzenbach. Narra la historia de un psicoanalista que recibe una amenaza de muerte y debe descubrir quién es su enemigo.",
  },
  {
    id: 44,
    titulo: "La chica del tren",
    autor: "Paula Hawkins",
    editorial: "Riverhead Books",
    genero: "Thriller",
    isbn: "9788401337256",
    rating: 4.2,
    imagen:
      "https://cdn.pixabay.com/photo/2022/10/31/04/55/woman-7558886_1280.jpg",
    sinopsis:
      "La chica del tren es un thriller de Paula Hawkins. Narra la historia de Rachel, una mujer que observa a una pareja desde el tren y se ve envuelta en un misterio cuando la mujer desaparece.",
  },
  {
    id: 45,
    titulo: "El silencio de los corderos",
    autor: "Thomas Harris",
    editorial: "St. Martin's Press",
    genero: "Thriller",
    isbn: "9788401337263",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2017/04/07/13/45/lamb-2211015_1280.jpg",
    sinopsis:
      "El silencio de los corderos es un thriller de Thomas Harris. Narra la historia de Clarice Starling, una agente del FBI que busca la ayuda del asesino en serie Hannibal Lecter para atrapar a otro criminal.",
  },
  {
    id: 46,
    titulo: "El cuento de la criada",
    autor: "Margaret Atwood",
    editorial: "McClelland and Stewart",
    genero: "Ciencia ficción",
    isbn: "9788401337270",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2018/04/12/16/35/fantasy-3313964_1280.jpg",
    sinopsis:
      "El cuento de la criada es una novela distópica de Margaret Atwood. Narra la vida en una sociedad totalitaria donde las mujeres son sometidas y utilizadas para la reproducción.",
  },
  {
    id: 47,
    titulo: "El jardín secreto",
    autor: "Frances Hodgson Burnett",
    editorial: "Frederick A. Stokes",
    genero: "Literatura infantil",
    isbn: "9788401337287",
    rating: 4.4,
    imagen:
      "https://cdn.pixabay.com/photo/2017/06/17/22/13/secret-garden-2413804_1280.jpg",
    sinopsis:
      "El jardín secreto es una novela de Frances Hodgson Burnett. Narra la historia de Mary Lennox, una niña que descubre un jardín abandonado y lo transforma, cambiando su vida y la de quienes la rodean.",
  },
  {
    id: 48,
    titulo: "El club de la lucha",
    autor: "Chuck Palahniuk",
    editorial: "W.W. Norton & Company",
    genero: "Novela",
    isbn: "9788401337294",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2017/08/04/01/52/karate-2578819_1280.jpg",
    sinopsis:
      "El club de la lucha es una novela de Chuck Palahniuk. Narra la historia de un hombre insomne que forma un club clandestino donde los miembros se enfrentan en peleas para liberar su frustración.",
  },
  {
    id: 49,
    titulo: "La ladrona de libros",
    autor: "Markus Zusak",
    editorial: "Lumen",
    genero: "Novela",
    isbn: "9788426413143",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_640.jpg",
    sinopsis:
      "La ladrona de libros es una novela de Markus Zusak que narra la historia de Liesel Meminger, una niña que descubre el poder de las palabras durante la Segunda Guerra Mundial.",
  },
  {
    id: 50,
    titulo: "El ruido y la furia",
    autor: "William Faulkner",
    editorial: "Vintage",
    genero: "Novela",
    isbn: "9788426413150",
    rating: 4.4,
    imagen:
      "https://cdn.pixabay.com/photo/2017/08/06/11/31/bell-2591582_640.jpg",
    sinopsis:
      "El ruido y la furia es una novela de William Faulkner que explora la decadencia de una familia del sur de Estados Unidos a través de las perspectivas de sus miembros.",
  },
  {
    id: 51,
    titulo: "La catedral del mar",
    autor: "Ildefonso Falcones",
    editorial: "Grijalbo",
    genero: "Novela",
    isbn: "9788425341549",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2023/12/04/16/12/dom-8429773_640.jpg",
    sinopsis:
      "La catedral del mar es una novela histórica de Ildefonso Falcones que narra la construcción de la iglesia de Santa María del Mar en Barcelona y la vida de Arnau Estanyol, un siervo que logra liberarse y prosperar en la ciudad medieval.",
  },
  {
    id: 52,
    titulo: "El poder del ahora",
    autor: "Eckhart Tolle",
    editorial: "Grijalbo",
    genero: "Autoayuda",
    isbn: "9788426413174",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2015/05/25/10/00/time-782926_640.jpg",
    sinopsis:
      "El poder del ahora es un libro de Eckhart Tolle que enseña cómo vivir en el presente y liberarse de la ansiedad y el estrés.",
  },
  {
    id: 53,
    titulo: "Los renglones torcidos de Dios",
    autor: "Torcuato Luca de Tena",
    editorial: "Booket",
    genero: "Novela",
    isbn: "9788408057018",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468_640.jpg",
    sinopsis:
      "Los renglones torcidos de Dios es una novela de Torcuato Luca de Tena que narra la historia de una investigadora que se interna en un manicomio para resolver un caso.",
  },
  {
    id: 54,
    titulo: "El tiempo entre costuras",
    autor: "María Dueñas",
    editorial: "Temas de Hoy",
    genero: "Novela",
    isbn: "9788484609900",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771_640.jpg",
    sinopsis:
      "El tiempo entre costuras es una novela de María Dueñas que narra la historia de una modista española que se ve envuelta en intrigas políticas durante la Segunda Guerra Mundial.",
  },
  {
    id: 55,
    titulo: "El hombre en busca de sentido",
    autor: "Viktor E. Frankl",
    editorial: "Herder",
    genero: "Ensayo",
    isbn: "9788426413167",
    rating: 4.7,
    imagen:
      "https://cdn.pixabay.com/photo/2017/03/27/14/59/man-2179243_640.jpg",
    sinopsis:
      "El hombre en busca de sentido es un ensayo de Viktor E. Frankl que relata su experiencia en los campos de concentración y su teoría psicológica sobre el sentido de la vida.",
  },
  {
    id: 56,
    titulo: "Patria",
    autor: "Fernando Aramburu",
    editorial: "Tusquets",
    genero: "Novela",
    isbn: "9788490663182",
    rating: 4.6,
    imagen:
      "https://cdn.pixabay.com/photo/2020/06/21/08/41/poland-5323872_640.jpg",
    sinopsis:
      "Patria es una novela de Fernando Aramburu que explora las consecuencias del conflicto vasco a través de la historia de dos familias enfrentadas.",
  },
  {
    id: 57,
    titulo: "El infinito en un junco",
    autor: "Irene Vallejo",
    editorial: "Siruela",
    genero: "Ensayo",
    isbn: "9788418217450",
    rating: 4.8,
    imagen:
      "https://cdn.pixabay.com/photo/2023/03/21/08/36/bamboo-7866718_640.jpg",
    sinopsis:
      "El infinito en un junco es un ensayo de Irene Vallejo que recorre la historia de los libros y su impacto en la humanidad, desde la antigüedad hasta la actualidad.",
  },
  {
    id: 58,
    titulo: "Sapiens: De animales a dioses",
    autor: "Yuval Noah Harari",
    editorial: "Debate",
    genero: "Ensayo",
    isbn: "9788499926223",
    rating: 4.7,
    imagen:
      "https://cdn.pixabay.com/photo/2024/10/02/18/32/ai-generated-9091918_640.jpg",
    sinopsis:
      "Sapiens: De animales a dioses es un ensayo de Yuval Noah Harari que explora la historia de la humanidad, desde los primeros homínidos hasta la actualidad.",
  },
  {
    id: 59,
    titulo: "El corazón helado",
    autor: "Almudena Grandes",
    editorial: "Tusquets",
    genero: "Novela",
    isbn: "9788483836370",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2020/01/09/12/29/hand-4752642_640.jpg",
    sinopsis:
      "El corazón helado es una novela de Almudena Grandes que narra la historia de dos familias españolas durante la Guerra Civil y la posguerra.",
  },
  {
    id: 60,
    titulo: "La casa de los espíritus",
    autor: "Isabel Allende",
    editorial: "Plaza & Janés",
    genero: "Realismo mágico",
    isbn: "9788401337201",
    rating: 4.5,
    imagen:
      "https://cdn.pixabay.com/photo/2018/04/10/23/46/architecture-3309203_640.jpg",
    sinopsis:
      "La casa de los espíritus es la primera novela de Isabel Allende. Narra la historia de varias generaciones de una familia chilena, combinando elementos de realismo mágico.",
  },
];

export function getAllBooks() {
  return booksData;
}
