import { useTypewriter } from '@/hooks/useTypewriter';

interface TypingAnimationProps {
  words: string[];
  typeSpeed?: number;
  className?: string;
}

/**
 * Types through a list of lines on a loop. The longest line is rendered
 * invisibly underneath so the paragraph never reflows mid-type.
 */
const TypingAnimation = ({
  words,
  typeSpeed = 28,
  className = 'max-w-xl text-[0.95rem] leading-relaxed font-medium text-white/65'
}: TypingAnimationProps) => {
  const { text } = useTypewriter({ words, typeSpeed });

  const longest = words.reduce((acc, word) => (word.length > acc.length ? word : acc), '');

  return (
    <div className="relative max-w-xl">
      {/* Reserves the final height so the layout cannot jump */}
      <p className={`${className} invisible`} aria-hidden="true">
        {longest}
      </p>

      <p className={`${className} absolute inset-0`}>
        {text}
        <span className="caret" />
      </p>
    </div>
  );
};

export default TypingAnimation;
