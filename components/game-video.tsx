import useIsMounted from "../hooks/use-is-mounted";

interface GameVideoProps {
  url: string;
}

const GameVideo: React.FC<GameVideoProps> = ({ url }) => {
  const mounted = useIsMounted();

  if (!mounted) return null;

  return (
    <video
      autoPlay
      muted
      loop
      style={{ clipPath: "inset(1px 1px)" }}
      playsInline
      className="scale-[1.0035]"
    >
      <source src={url} type="video/mp4" />
    </video>
  );
};

export default GameVideo;
