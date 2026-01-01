import { useTypewriter } from "react-simple-typewriter";

export default function TypingAnimation({
  words,
  typeSpeed = 35,
  delaySpeed = 500,
  showCursor = true,
  className = "mt-2 max-w-lg text-base leading-relaxed text-white/70",
}) {
  const [text, helper] = useTypewriter({
    words,
    loop: Infinity,          // type through the list once
    typeSpeed,
    deleteSpeed: 0,   // no deleting (clean, non-gimmicky)
    delaySpeed: 4000,
  });

  const done = Boolean(helper?.isDone);

  // Reserve the paragraph’s final height from the start
  // by rendering the full (longest) line invisibly.
  const longest = words?.reduce(
    (acc, w) => (w.length > acc.length ? w : acc),
    ""
  );

  return (
    <div className="relative max-w-lg">
      {/* Invisible full text to reserve height (prevents line-jump) */}
      <p className={`${className} invisible`}>{longest}</p>

      {/* Typed text overlays the reserved space */}
      <p className={`${className} absolute inset-0`}>
        {text}
        {showCursor && !done && <span className="animate-pulse">|</span>}
      </p>
    </div>
  );
}
