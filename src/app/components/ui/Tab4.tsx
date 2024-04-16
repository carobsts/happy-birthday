import { FC } from "react";

interface ITab4 {
  trackId: string;
}

const Tab4: FC<ITab4> = ({ trackId }) => {
  return (
    <section>
      <div>
        <h3 style={{ fontWeight: 600, marginTop: 20 }}>
          Esta es tu canción recomendada:
        </h3>
        <iframe
          style={{ borderRadius: 12, zIndex: 1, marginTop: 20, maxWidth: 800 }}
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
          width="100%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
      <div>
        <h3 style={{ fontWeight: 600, marginTop: 40 }}>
          Sino, siempre podés escuchar la canción que vos prefieras:
        </h3>
        <p style={{ marginTop: 20, fontSize: 14 }}>Modo salpicadito:</p>
        <iframe
          style={{ borderRadius: 12, zIndex: 1, marginTop: 20, maxWidth: 800 }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4iMvyE?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p style={{ marginTop: 30, fontSize: 14, marginBottom: 20 }}>
          Modo panzada de álbum:
        </p>
        <div
          style={{ maxWidth: 800 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"
        >
          <iframe
            style={{
              borderRadius: 12,
              zIndex: 1,
              maxWidth: 400,
            }}
            src="https://open.spotify.com/embed/album/1Uf67JAtkVWfdydzFFqNF2?utm_source=generator"
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{
              borderRadius: 12,
              zIndex: 1,
              maxWidth: 400,
            }}
            src="https://open.spotify.com/embed/album/7aq7a226T631f2w1Vs1vXx?utm_source=generator"
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{
              borderRadius: 12,
              zIndex: 1,
              maxWidth: 400,
            }}
            src="https://open.spotify.com/embed/album/4jcRw4qVurxoZcfIYPKDpz?utm_source=generator"
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{
              borderRadius: 12,
              zIndex: 1,
              maxWidth: 400,
            }}
            src="https://open.spotify.com/embed/album/4myOCm6FzD9TMdK7Q0Nzx0?utm_source=generator"
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe  style={{
              borderRadius: 12,
              zIndex: 1,
              maxWidth: 400,
            }} src="https://open.spotify.com/embed/album/13xbg8hAddxUDNksjSKzsz?utm_source=generator" width="100%" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        <iframe style={{
              borderRadius: 12,
              zIndex: 1,
              maxWidth: 400,
            }} src="https://open.spotify.com/embed/album/32m8Yjd3jjG3Dbf7YKTfLn?utm_source=generator" width="100%" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Tab4;
