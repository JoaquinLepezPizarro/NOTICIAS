export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
    destacado:boolean;
}

export let ListaNoticias:Array<Noticias>=[
{
    id:1,
    idCategoria:1,
    titulo:"Alza en precio de la cerveza",
    autor:"Ortego Carlas",
    fecha:Date().toString(),
    imagen:"noticia1.jpg",
    texto:"Sube el precio de todas las cervezas en Chile. Producto de la pandemia y el aumento explosivo de su consumo y demanda, se ha producido a su vez un alza sostenida en el precio de los alcoholes, especialmente la cerveza, los ultimos 5 meses.",
    destacado:true,
},
{
    id:2,
    idCategoria:2,
    titulo:"IgnaBot vive el verano",
    autor:"Mr Candido",
    fecha:Date().toString(),
    imagen:"noticia2.jpg",
    texto:"En las playas de Hawaii ha pasado las tardes de los ultimos 5 meses IgnaBot, el primer robot con inteligencia artificial que disfruta de la playa y el verano. IgnaBot nos comenta tambien que su proxima aventura sera bucear bajo el mar y conocer a las BalleniBots.",
    destacado:true,
},
{
    id:3,
    idCategoria:3,
    titulo:"El bebe Messi",
    autor:"Don Pelotas",
    fecha:Date().toString(),
    imagen:"noticia3.jpg",
    texto:"En la provincia de Matapenas nacio hace 7 años un bebe igual a Messi. Ha sorprendido a toda su comunidad a empezar a patear todo objeto redondo que se le cruzo desde que aprendio a caminar. Se espera sea el gran futuro del futbol.",
    destacado:true,
},
{
    id:4,
    idCategoria:4,
    titulo:"Caida abrupta del BitCoin",
    autor:"Coincito Monedez",
    fecha:Date().toString(),
    imagen:"noticia4.jpg",
    texto:"Tristeza mundial ante la enorme caida en los precios del BitCoin. Se espera que producto de esto haya un alza masiva de todas las otras divisas y se espera que el dolar llegue a los 66511565161565 pesos chilenos. Se adjunta imagen de una persona afectada",
    destacado:false,
},
{
    id:5,
    idCategoria:5,
    titulo:"Covid y variante X",
    autor:"Ednella",
    fecha:Date().toString(),
    imagen:"noticia5.jpg",
    texto:"Un alza de un 3004% en los casos covid de la variante X que afecta sobre todoa a bebes ha llevado al presidente de nuestra hermosa, soberana y no corrupta nacion a introducir nuevamente medidas de confinamiento extremo. No se puede salir ni a comprar a la esquina.",
    destacado:false,
},
{
    id:6,
    idCategoria:6,
    titulo:"Muere el perrito del meme",
    autor:"Don Penita",
    fecha:Date().toString(),
    imagen:"noticia6.jpg",
    texto:"Tristeza desoladora y agonizante a nivel mundial ante la muerte del perrito del meme. Perros de todo el mundo atoran las calles aullando de dolor y pena. Esconda a sus gatos. El perrito lipigas esta desolado.",
    destacado:false,
},
{
    id:7,
    idCategoria:6,
    titulo:"El hombre inmortal",
    autor: "ONU",
    fecha:Date().toString(),
    imagen:"noticia7.jpg",
    texto:"Se encontró en la región subsahariana en el estado de Burundi a un hombre que dice ser inmortal ya que ha superado la enfermedad de Insomnio Familiar Fatal y dice que la clave para superar una enfermedad mortal y sin cura descubierta hasta hoy en día es hablando con Morfeo para que te deje dormir y así seas curado.",
    destacado:false,
},
];
