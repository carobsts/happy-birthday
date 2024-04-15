import Image from "next/image";
import { FC } from "react";

interface IData {
  message: string;
  from: string;
  photos?: { slide: number; src: string }[];
}

const Tab1: FC<{}> = () => {
  const data: IData[] = [
    {
      message: `Nahir querida, muy pero muy Feliz Cumpleaños! Espero que los próximos 30 sean los más felices y maravillosos de tu vida, y que los siguientes 30 aún más! 
      En este día tan especial, tómate un tiempito para reflexionar en tus primeros 30 y ver a lo lejos a lo que has llegado. Disfruta todo lo que has alcanzado en tu vida hermosa, de película, y en la gente que te rodea y te ama y apoya muchísimo. En fin, estate orgullosa de ti misma y disfruta quien eres . 
      Desde el otro lado del gran Atlántico te mando muchísimo cariño, un beso inmenso, y un deseo infinito para que todos tus sueños se cumplan y mucho más. 
      Te quiero mucho. Tu primo,`,
      from: "Hugo Viscardi",
    },
    {
      message: `Sobrina.. hermosa Nahir: feliz cumple, feliz!! Hermosa década para transitarla con todo, 
      con pasos fuertes y con todo lo que viene...que la vida te sorprenda siempre  con lindas cosas y 
      la fuerza para afrontar las otras y que te de la posibilidad del encuentro con lo que anhelas...Te queremos mucho ...mucho!!! 
      Tus tíos y primos.`,
      from: "Félix, Gaby, Nico y Nacho",
      photos: [
        {
          slide: 1,
          src: "https://w1kpzg8sfrie3qml.public.blob.vercel-storage.com/nahir7-AEKAVrtNtmyxBd9kSywcM324rIVxnd.jpeg"
        },
        {
          slide: 2,
          src: "https://w1kpzg8sfrie3qml.public.blob.vercel-storage.com/nahir2-tpdGWwjaewNddzxuDLJrBlrL8eCd4g.jpeg"
        },
        {
          slide: 3,
          src: "https://w1kpzg8sfrie3qml.public.blob.vercel-storage.com/nahir3-P77rA4xUvEAsB7rIwXE2i9i9AocqYJ.jpeg"
        },
        {
          slide: 4,
          src: "https://w1kpzg8sfrie3qml.public.blob.vercel-storage.com/nahir4-wAgazxT7jxTqk169AUnb6E6GbVv0Ed.jpeg"
        },
        {
          slide: 5,
          src: "https://w1kpzg8sfrie3qml.public.blob.vercel-storage.com/nahir5-RIVY8VDiKCiEsLB61Ozh2X9KTPtwmo.jpeg"
        }
      ]
    },
    {
      message: `Vamos prima a romperla hoy y siempre... te queremos tanto...tanto.`,
      from: "Nico y Nacho"
    },
    {
      message: `NAHIR !!!!!!
      Parece ayer q fuimos a tus 15 en Madryn 🤦🏻‍♀️!!!!!!!
      Y hoy, estás duplicando el número!!!!!!
      Cuántas cosas pasaron amor, cuántas experiencias vividas, con dolor, con alegrías,...... Pero vos, siempre firme 💪, al pie del cañón, sin aflojar jamás 😍. 
      Es por todo eso, que deseo el universo te acerque lo más bonito y placentero que te merecés!!!!!
      Te mando un abrazo y beso inmensos 🙅🏻‍♀️😘. Solo me resta........
      FELIZ VUELTA AL SOL EN LA TERCERA DECENA DE TU VIDA!!!!!!
      TE ADORO!!!!!`,
      from: "Tía Miriam"
    },
    {
      message: `Faaa 30 años, estás re vieja. Ah re que yo los cumplí antes jaja... Pero es una realidad que estamos haciéndonos grandes. Ya ni se cuántos años pasaron desde esa noche de lluvia extrema que hizo que se te inundara el depto y me escribiste pidiendo ayuda. Me alegro que haya sucedido esa calamidad. Creo q ese día empezó realmente nuestra amistad como tal. Se extrañan esas juntadas los 4 matando nos de risa por cualquier boludez, por Pewdiepie, haciendo voces graciosas y por las dudas existenciales 😂... A veces uno quiere volver a esos días donde uno vivía más despreocupado pero bueno, bienvenida al mundo adulto jaja aunque el nuestro sigue teniendo días de videojuegos al menos. (Por días, me refiero una o dos horitas porque después nos da sueño jajaja #+30). Cómo sea, te deseo como siempre lo mejor en tu día y para cada día. Te quiero mucho Nanu!! Sabes que siempre vas a poder contar conmigo!!`,
      from: ""
    },
    {
      message: `Hola "mujer madura "  Nahir, recontra hiper, super, extra, maxi felicísimo cumple. 
      Suerte que estás lejos; si cuando eras mocosita te comiste 14 porciones de mis pizzas(o fueron más ?🫣), ahora que sos "mayorcita" te tendría que hacer 2 para vos sola.
      Un beso grande (y no acepto un "último" tuyo 🤪)
      Te quiere, tu Machito.....`,
      from: "Ponce",
    },
    {
      message: `Mí muy querida Nahir.
      Al sentarme a escribirte, es cuando tomo conciencia de que ya pasaron ¡30 años de tu nacimiento!. Treinta años de la llegada de mi ahijada, la hija de mi "hija" mayor.
      Después, la distancia y el paso del tiempo que dejó recuerdos vívidos en tres mojones de situaciones y lugares distintos:
      -El bautismo en BS. As.
      -Los 15 en Madryn.
      -Y ahora los 30 en CBA.
      Tan distantes uno de otro, que marcaron tres etapas distintas de tu vida: bebé, adolescencia y madurez.
      Es un premio para mí poder verte hoy totalmente realizada junto a Daniel, que se lo advierte, (creo), como tu media naranja, recompensa merecida de una vida bien trazada.
      Que tengas muy feliz cumple y mejor entrada a la que yo considero mejor etapa de la vida.`,
      from: "Tu padrino que te adora."
    },
    {
      message: `Nahir gracias por ser como sos!!! Siempre alegre y con optimismo, contagias mucha energía!!! Te haces querer rápidamente y ojala Dios quiera podamos seguir conociéndote... Te deseamos lo mejor en esta nueva etapa que vas a comenzar junto a Dany... Tkm.`,
      from: "Rafa, Vane, Celes y Chucho!!"
    },
    {
      message: `Felicidades.!!!!! Que se  cumpla todos rus deseos  y que el Amor Y la paz sea siempre. Tu portal junto a Dany  FELIZ CUMPLE!!!!!!!`,
      from: "Mamá de Dani"
    },
    {
      message: `Hola Nahir soy Santy quería desearte un muy feliz cumple. 🎂 Que la pases muy lindo y disfrutes tu día. ¡Como pasó el tiempo ehhhh!... parece ayer que eramos unos niños, gracias por dejarme ser tu amigo loco de la infancia y que tengamos recuerdos tan lindos y divertidos juntos.Te deseo siempre lo mejor en la vida con muchos exitos, logros y sobre todo que sea llena de felicidad, sos una gran persona. Te quiero mucho mucho 🙂
      Un abrazo grande, disfrutá a pleno y feliz cumple!!! 🎉🎊🪅`,
      from: "" 
    },
    {
      message: `Hola, Nahir. Me acuerdo cuando jugamos al GTA, y cuando usamos la computadora con vos Loquendo y también cuando te contaba las ideas que tuve para algunos de los programas que yo veía. Te mando un beso y un abrazo. Te quiero mucho.`,
      from: "Julián"
    },
    {
      message: `Feliz cumpleaños 30 Nanuja!!!! Te quiero mucho 💕!!!! Besos,`,
      from: "Denise"
    },
    {
      message: `Mi querida hija si pudiera resumir de alguna manera está parte de mi vida a tu lado, podría decir es un camino que se inicio en la más profunda de la paz que alguien pueda experimentar, en los instantes previos a tu nacimiento y al momento de nacer parecía que el mundo se había detenido y solo estábamos vos tu mamá y yo para poder disfrutarlo...te aseguro que nunca volví a sentir algo parecido. Luego el camino se inicio y el mundo ya nunca más fue igual, tu presencia lo transformó y transformó para siempre nuestras vidas dónde te convertiste para quienes estábamos y quienes luego fueron llegando en una fuente permanente de paz y alegría inagotable. En este camino que es tu vida me tocó al principio caminar por delante tuyo solo para guiarte por una buena senda porque vos siempre tuviste claro el rumbo de hacia donde querías ir y nada ni nadie podría modificarlo, siempre desde la dulzura y amor que te caracterizan pero con una buen determinada firmeza transmitiendo nos seguridad a todos. Luego seguiste creciendo y me tocó ponerme a tu lado para que ya no solo definieras el rumbo sino también que senda tomarás, y aunque en algunos momentos no me fue sencillo comprender los porqués de tus elecciones igualmente siempre creí en vos y con creces fuiste despejando mis temores, otra vez con la paz, amor y comprensión que tanto te definen y te hacen una persona única. Hoy la vida y tu crecimiento personal ha definido que mu lugar en ese camino sea por detrás tuyo ya poco podré hacer pero muy feliz de que así sea porque en definitiva ese camino no es otra cosa que tú propia vida y tenés todo el derecho de continuar transitandolo de acuerdo con tus anhelos y convicciones así que adelante mi amor que todo está a tu alcance para que lo transformes y vivas a tu manera. Solo para que tengas en cuanta, cada vez que mires para atrás tu papá estará ahí por si lo necesitas...❤️❤️❤️`,
      from: ""
    },
    {
      message: `Mi Munina, qué increíble, parece ayer que te sentía tus pataditas dentro mío y no veía las horas de ver tu carita, acariciar tu piel, sentir tu perfume y besarte sin descanso. Tantos años de ir aprendiendo juntas a cada pasito a ser y conocerte como sos, acompañando a todos y además todos acompañándote en tu camino y así va a ser siempre. Ahora te toca allá a la distancia en kilómetros, pero siempre estás presente en casa, en cada uno, en nuestro día a día. Verte hoy siendo una mujer hecha, segura de sí misma, autora totalmente de tus pasos y tus decisiones, rodeada del amor que elegís para convivir a diario, haciéndote cargo de tu vida totalmente y siempre siendo empática, sin perder jamás tu horizonte pero tampoco tu dulzura, paciencia, ganas de seguir aprendiendo, emprendiendo, sumando afectos y cuidando a los que ya tenías, no puedo explicarte lo que se siente como mamá. Sos una persona muy especial y hermosa por fuera pero más aún por dentro. Es muy  bonito verte y saberte realizada, que cada momento vivido con los alti bajos de la vida, los disfrutas y saboreas con su verdadero valor, percibiendo y conociendo las prioridades y tomando el toro por las astas y aceptando el gusto y pensar de los demás, sin que mueva en vos tu centro. Tan solidaria, dulce, firme, calma, humilde y que sabe discernir y estás dispuesta a escuchar a otros y también considerar algunos consejos sin dejar de lado tu propia evaluación. Cuando te colman, ya es porque en tu calma interior, pasaste todas las etapas de intentos de tolerancia o porque realmente ni vale la pena utilizar de las reservas de tu gran paciencia el desgaste que pueda ocasionar. Ojalá yo aprendiera mucho más de vos en tantas cosas. Es difícil explicar en palabras lo que siento al festejarte tus 30 años. Hoy puedo decir que aparte de ser mi hija, sos mi mejor amiga. Quiero que sepas y lo voy a repetir hasta el día que no esté más en este mundo, que siempre vas a poder contar conmigo, para lo que sea, por lo que sea, en cualquier momento, lugar o experiencia que sea. Eternamente seré tu comodín de la vida. Para ayudarte, acompañarte, cuidarte y para divertirnos, compartir, charlar, llorar, estar en silencio, caminar, estando juntas personalmente o a la distancia, sin horarios ni mapas, que no hace falta explicaciones si no las hubiese y si decís " mamá...." ahí estaré antes de que pronuncies la segunda letra m. Sé que soy repetitiva, en esto soy igual con los 4 hijos, pero esto de la distancia, los " yo puedo sola", los " no hace falta", los " para que", no deben existir jamás. Somos almas que están siempre latiendo dentro de una misma esfera que nos tocó, que es el ser madre e hija y eso es eterno pero en nosotras es real. Nunca estaremos una sin la otra. Quiero que lo sepas. Sé que no te molesta que te digan que somos parecidas, pero no lo somos tanto y a veces en esas diferencias, es donde más está el amor, la admiración y respeto de mi parte. El molde no tiene solución jajaja. Pero la mayor parte, ha sido por elección sin querer por la vida y oportunidades que se presentan y la toma de decisiones, que obvio uno las va eligiendo del mirar y recibir información durante la educación, el crecimiento pero con el carácter y gusto de cada quien. Por suerte los eduqué para que fueran libres pero buenas personas, de buenos sentimientos y nada de eso salió mal. Junto con tus hermanos son mi orgullo, mis obras de arte en su máxima expresión jajaja. Con papá por supuesto, sola hubiera sido imposible muchas cosas. Pero hoy quiero desearte que seas tan feliz como te mereces. Que cada instante que vivas siga siendo a pleno, porque es el que estamos seguros que existe. Proyectamos para próximos pasos, los  recuerdos sirven para atesorar pero el hoy, el momento a momento, no vuelve y hay que vivirlo a pleno en las condiciones que se presenten. Por suerte, tu presente hoy es maravilloso y estoy feliz de poder compartirlo. Aunque tu papá y tus hermanitos no hayan podido estar presentes personalmente, sabés todo lo que te adoran y lo que les hubiese gustado estar, pero estoy en su representación y no me lo pienso perder por nada del mundo jajaja. Te queda toda una vida por recorrer, son solo los primeros 30, ahora viene la mejor parte, en donde ya sabés que es lo que te gusta y lo que no, lo que estás dispuesta a dar pero también de recibir, de tus fuerzas y tus debilidades, tu gran fortaleza y tezón, y tus ganas de vivir a pleno. Solo queda disfrutar. Que los cumplas muy pero muy feliz y que se te cumplan todos tus sueños. Te quiero mucho mucho mucho mucho mucho mi Munina hermosa. Te abrazo fuerte y te beso mucho con todo el cariño de mamá osa.`,
      from: "Mamá"
    },
    {
      message: `Querida NAHIR, te deseo MUY FELICES 30!!!
      Ojalá sea una década llena de oportunidades para seguir creciendo, experimentando nuevas vivencias y oportunidades en lo personal, laboral, familiar, con amig@s..
      A celebrar la vida!🪷
      Te quiero, y siempre recuerdo la suavidad con la que te acercabas. 
      No puedo creer que ya cumplas 30👀....en fin...la vida🤷🏻‍♀️.
      Feliz cumple primita hermosa.🫶🏻🌈`,
      from: "Gabriela Viscardi de Turello"
    },
    {
      message: `Muy Feliz Cumpleaños Nahir !!  🎂🥳🎈🎁.!!
      Que siempre sigas brillando en todo lo que emprendas..!! Te desea de ❤️ , la familia Vento Patagónica! 🌹 🤗 😘,`,
      from: ""
    },
    {
      message: `Mi querida nanuja, nanuchan, jovita de mi corazón 
      Siempre agradezco a la vida que hayas caído a mis 15 y cruzarme con un ser tan hermoso, lleno de risas y chistes que solo se entienden con una mirada.
      Amo la persona en que te has convertido en estos años y me da increíble felicidad cuando te va bien en tus proyectos. Siempre estuviste y vas a estar rodeada de mucho amor por tu corazón enorme y tu bella aceptación de la gente tal y como es. Por eso, siempre pude ser mi forma más auténtica con vos (y los cocuchas) y es algo que me explota de felicidad
      Te amo infinitamente amiga, mi hermana cordobesa y mi querida Jovita. Que los 30 nos llegue con nue
      vos proyectos para compartir juntas siempre los logros, los no tan logros y los chistes malos. Feliz cumpleaños amiga!!`,
      from: ""
    },
    {
      message: `annyeoooonnng:
      Y llego el dia mi querida bonsai!
      Felices 15+15!!! 
      Por que para que decir 30 si seguimos teniedo 15 no?
      Yo quisiera que supieras cuanto extraño tu presencia aqui...
      ah pero ahora venis asi que yeeey!
      Espero que la pases muy bien en este dia tan especial!
      Sos mi bro, bro, la unica que entiende todas las referencias que 
      forman parte de mi vida y por eso tenes un lugar VIP en mi kokoro.
      Cuando soples las velitas este año que sea un viaje la disney juntas
      (cuando me toque a mi pido lo mismo) pero sssh asi se cumple!`,
      from: "Aishitemasu Nanuchan",
      photos: [{
        slide: 1,
        src: "https://w1kpzg8sfrie3qml.public.blob.vercel-storage.com/WhatsApp%20Image%202024-04-10%20at%2017.46.32-ol9LDnjXQ89kuf1z0pJwzktoWqXzQp.jpeg"
      }]
    },
    {
      message: `Querida Nahir, entras en una nueva década en la que no dudamos que vas a reafirmar te como mujer, la mujercita que siempre mostraste ser. Te recuerdo en tantos momentos de tu vida, tantas veces que te pedía que me repitieras todo lo que hacías, porque me encantaba, me hacías el grand jete, estiramientos, posturas para las fotos, después me cantabas la canción de La Sirenita que me encantaba pedirte y me la cantabas tantas veces y me encantaba en el alma escucharte. Siempre son recuerdos buenos. Todo este tiempo atrás te he visto hacer todos tus ejercicios de pilates a través de facebook , todo tu progreso con la casita que deseo que se termine pronto , así junto con tu pareja la puedan disfrutar. También recuerdo disfrutar escucharte en las épocas que trabajabas en la radio con el chico chileno y la gente de Televisa, no sé, muchos momentos que tenías para compartir y lo hacías con nosotros. También recuerdo tus 15 años, que todos te sacaban a bailar el vals, y eran todos duros y posaban para las fotos, hasta que te sacó a bailar tu compañero de baile vino y, qué baile se bailaron los dos!!! No dudo que sigas siendo ese personaje. Y deseo de todo corazón que en esta nueva década en la que te afirmes y reafirmes como mujer, sea fructífera para vos en tu realidad y en tus deseos. Un abrazo grande, siempre estás en nuestro corazón, en nuestro cariño y en nuestras oraciones.`,
      from: "Marta y Luis Conde"
    },
    {
      message: `NAHIR "EL ÁNGEL  ALADO" DE LA FAMILIA. ASÍ TE VEO CUANDO EN TODOS TUS MOVIMIENTOS, PARECES VOLAR. TE RECUERDO CUANDO VIVÍAS CERCA Y APARECÍAS DIAFANAMENTE CON EL REGALITO DE TU MAMÁ 😊
      AHORA PUEDES DESPLEGAR TUS ALAS EN UN GIMNACIO ASOMBRANDO A TUS ALUMNAS, QUE NO CONSEGUIRÁN COMPRENDERCOMO ES QUE VUELAS EN TUS POSTURAS.
      TE DESEO TENGAS UNA BELLÍSIMA VIDA JUNTO AL HOMBRE ELEGIDO QUE SEGURAMENTE HA DE SER ESPECIAL Y AL QUE ME HUBIERA GUSTADO CONOCER. NEX TIME.`,
      from: "Alicia Viscardi"
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      {data.map(d => 
        <div className="card bg-base-100 shadow-xl">
          <div className="carousel w-full">
          {d.photos && d.photos.length ? d.photos.map(photo => 
            <div key={photo.src} style={{ height: 300 }} id={`slide${photo.slide}`} className="carousel-item relative w-full">
              <Image
                style={{ objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                width={200}
                height={200}
                alt={d.from}
                src={photo.src}
                className="w-full"
              />
              { d.photos && d.photos.length > 1 ?
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a style={{ color: "white" }} href={photo.slide === 1 ? `#slide${d.photos.length}` : `#slide${photo.slide - 1}`}>
                  ❮
                </a>
                <a style={{ color: "white" }} href={photo.slide === d.photos.length ? `#slide1` : `#slide${photo.slide + 1}`}>
                  ❯
                </a>
              </div> : null }
            </div>
          ) : null }
          </div>
          <div className="card-body">
            <article className="prose lg:prose-md">
              <p
                className="italic"
                style={{ fontSize: 14, fontWeight: "200", color: "black" }}
              >
                {d.message}
              </p>
            </article>
            <p className="mt-4 text-end">{d.from}</p>
          </div>
        </div> )}
    </div>
  );
};

export default Tab1;
