'use client';

import { useEffect, useState } from 'react';

const words = ['Frontend Web Developer', 'Problem Solver','Passionate about UI/UX' ];

export default function Typewriter() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );

      // when word is done typing
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200); // pause before deleting
      }

      // when word is done deleting
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <h1 className=" text-4xl font-bold text-gray-600 ">
      {text}
      <span className="border-r-2 border-black animate-spin" />
    </h1>
  );
}
